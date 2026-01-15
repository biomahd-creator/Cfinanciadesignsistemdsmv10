# 📚 STORYBOOK MIGRATION GUIDE

**Complete Guide to Migrate Financio Design System to Storybook**

Version: 1.0  
Last Updated: January 14, 2026  
Current System Version: 5.2.0  
Estimated Migration Time: 80-100 hours

---

## 📋 TABLE OF CONTENTS

1. [Overview](#overview)
2. [Why Storybook?](#why-storybook)
3. [Prerequisites](#prerequisites)
4. [Installation & Setup](#installation--setup)
5. [Configuration](#configuration)
6. [Story Structure](#story-structure)
7. [Component Migration Strategy](#component-migration-strategy)
8. [Examples: DSM to Storybook](#examples-dsm-to-storybook)
9. [Decorators & Contexts](#decorators--contexts)
10. [Addons Configuration](#addons-configuration)
11. [Migration Phases](#migration-phases)
12. [Automation Scripts](#automation-scripts)
13. [Testing & Accessibility](#testing--accessibility)
14. [Deployment](#deployment)
15. [Troubleshooting](#troubleshooting)
16. [DSM vs Storybook Comparison](#dsm-vs-storybook-comparison)
17. [Best Practices](#best-practices)
18. [References](#references)

---

## 🎯 OVERVIEW

This guide provides a comprehensive roadmap to migrate the **Financio Design System** from its current custom DSM implementation to **Storybook**, the industry-standard tool for component development and documentation.

### Current State
- **205 components** with custom DSM structure
- ComponentShowcase template for documentation
- Internal routing with PageRenderer
- Custom code blocks and examples
- Integrated help system and theme customizer

### Target State
- Storybook 7.6+ with Vite
- Interactive component playground
- Automated documentation
- Accessibility testing built-in
- Visual regression testing ready
- Publishable static documentation site

### Migration Approach
**Hybrid Strategy**: Maintain both systems during transition
- Keep current DSM for production use
- Build Storybook in parallel
- Gradual migration by component category
- Final decision: Choose one or keep both

---

## 🚀 WHY STORYBOOK?

### Advantages Over Current DSM

#### **1. Industry Standard**
- Used by 100,000+ projects worldwide
- Recognized by designers and developers
- Extensive community and resources

#### **2. Development Experience**
- **Component isolation**: Develop without running entire app
- **Hot reload**: Instant feedback on changes
- **Interactive controls**: Test props in real-time
- **Multiple states**: See all variants at once

#### **3. Documentation**
- **Auto-generated docs**: Props tables from TypeScript
- **MDX support**: Rich documentation with JSX
- **Search functionality**: Find components quickly
- **Shareable links**: Direct links to specific stories

#### **4. Testing & Quality**
- **Visual regression**: Detect unintended changes
- **Accessibility testing**: Built-in a11y checks
- **Interaction testing**: Test user flows
- **Snapshot testing**: Component output verification

#### **5. Collaboration**
- **Design handoff**: Share with design team
- **Stakeholder review**: No dev environment needed
- **Version history**: Track component evolution
- **Comments**: Discuss directly on components

#### **6. Ecosystem**
- **100+ addons**: Extend functionality
- **Figma integration**: Embed Figma designs
- **Chromatic**: Visual testing cloud
- **CI/CD integration**: Automated builds

### Disadvantages to Consider

#### **1. Learning Curve**
- New paradigm for team
- Story writing conventions
- Addon configuration

#### **2. Migration Effort**
- 80-100 hours estimated
- 205 components to migrate
- Testing and validation time

#### **3. Bundle Size**
- Larger development dependency
- More configuration files
- Additional build step

#### **4. Some Features Lost**
- Internal routing (PageRenderer)
- Help system integration
- Theme customizer as-is
- Factoring app flows

### Recommendation

**Hybrid Approach**: Keep both systems
- **Storybook**: For component development and documentation
- **Current DSM**: For integrated demos and production showcases
- **Gradual transition**: Migrate high-priority components first
- **Final decision**: After 3-6 months of usage

---

## 🔧 PREREQUISITES

### Required Knowledge
- Storybook fundamentals
- Component Story Format (CSF) 3.0
- MDX (Markdown + JSX)
- Vite configuration

### System Requirements
```json
{
  "node": ">=18.0.0",
  "npm": ">=9.0.0",
  "current-project": "Financio Design System v5.2.0"
}
```

### Before Starting
- [ ] Commit all current changes
- [ ] Create feature branch: `feature/storybook-migration`
- [ ] Backup current package.json
- [ ] Review Storybook 7.6 documentation

---

## 📦 INSTALLATION & SETUP

### Step 1: Install Storybook

```bash
# Automatic installation (recommended)
npx storybook@latest init

# Manual installation (if automatic fails)
npm install --save-dev @storybook/react-vite
npm install --save-dev @storybook/react
npm install --save-dev storybook
```

### Step 2: Install Essential Addons

```bash
npm install --save-dev @storybook/addon-essentials
npm install --save-dev @storybook/addon-themes
npm install --save-dev @storybook/addon-a11y
npm install --save-dev @storybook/addon-interactions
npm install --save-dev @storybook/addon-links
npm install --save-dev @storybook/addon-viewport
npm install --save-dev @storybook/addon-docs
```

### Step 3: Install Testing Libraries (Optional but Recommended)

```bash
npm install --save-dev @storybook/testing-library
npm install --save-dev @storybook/jest
npm install --save-dev @storybook/test-runner
```

### Step 4: Verify Installation

```bash
npm run storybook
# Should open http://localhost:6006
```

### Step 5: Create Directory Structure

```bash
# Stories will live next to components
# Example:
# src/components/ui/button.tsx
# src/components/ui/button.stories.tsx

# Storybook config
.storybook/
├── main.ts
├── preview.ts
├── preview-head.html (for fonts)
└── manager.ts (optional)
```

---

## ⚙️ CONFIGURATION

### File: `.storybook/main.ts`

```typescript
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
  ],
  
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  
  docs: {
    autodocs: "tag", // Generate docs automatically for components with 'autodocs' tag
  },
  
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
        },
      },
    });
  },
  
  staticDirs: ["../public"], // Serve public folder (for fonts)
};

export default config;
```

### File: `.storybook/preview.ts`

```typescript
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/styles/globals.css"; // Import design tokens

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    
    // Viewport addon configuration
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: { width: "375px", height: "667px" },
        },
        tablet: {
          name: "Tablet",
          styles: { width: "768px", height: "1024px" },
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1280px", height: "800px" },
        },
      },
    },
    
    // Backgrounds addon configuration
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#0f172a" }, // Slate-900
      ],
    },
    
    // Layout addon configuration
    layout: "centered", // Default layout for stories
    
    // Docs configuration
    docs: {
      toc: true, // Enable table of contents
    },
  },
  
  decorators: [
    // Theme decorator for dark mode
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
```

### File: `.storybook/preview-head.html`

```html
<!-- Load Satoshi font -->
<style>
  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi-Variable.woff2') format('woff2');
    font-weight: 300 900;
    font-display: swap;
    font-style: normal;
  }
</style>
```

### File: `.storybook/manager.ts` (Optional - Custom Theme)

```typescript
import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",
  brandTitle: "Financio Design System",
  brandUrl: "https://financio.com",
  brandImage: "/logo.png", // Add logo to /public
  brandTarget: "_self",
  
  colorPrimary: "#84cc16", // Lime green
  colorSecondary: "#1C2D3A", // Dark blue
  
  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#e4e4e7",
  appBorderRadius: 8,
  
  // Typography
  fontBase: '"Satoshi", sans-serif',
  fontCode: "monospace",
  
  // Text colors
  textColor: "#1C2D3A",
  textInverseColor: "#ffffff",
  
  // Toolbar
  barTextColor: "#64748b",
  barSelectedColor: "#84cc16",
  barBg: "#ffffff",
  
  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#e4e4e7",
  inputTextColor: "#1C2D3A",
  inputBorderRadius: 4,
});

addons.setConfig({
  theme,
});
```

### Update `package.json` Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "test-storybook": "test-storybook"
  }
}
```

---

## 📖 STORY STRUCTURE

### Component Story Format (CSF) 3.0

Stories use CSF 3.0 syntax, which is cleaner and more intuitive.

### Basic Story Structure

```typescript
// src/components/ui/button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

// Meta configuration
const meta = {
  title: "UI/Button", // Category/Name in sidebar
  component: Button,
  parameters: {
    layout: "centered", // Center component in canvas
  },
  tags: ["autodocs"], // Generate documentation automatically
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      description: "The visual style variant of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" />
        Login with Email
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
```

### Organizing Stories

#### By Category
```
UI/Button
UI/Input
UI/Card
Forms/Checkbox
Forms/Select
Navigation/Tabs
Navigation/Breadcrumb
Data Display/Table
Data Display/Badge
Feedback/Alert
Feedback/Dialog
Layout/Accordion
Layout/Carousel
Patterns/Stats Dashboard
Patterns/Data Table Advanced
Advanced/Charts
Advanced/Data Table
Business/Status KPI Card
Business/Bar Chart
Atomic/Molecules/Search Bar
Atomic/Organisms/Login Form
```

---

## 🔄 COMPONENT MIGRATION STRATEGY

### Priority-Based Migration

#### **Phase 1: High Priority (Core UI)** - 2 weeks
Components used everywhere, high visibility

- [ ] Button (43 variants in DSM)
- [ ] Input
- [ ] Card
- [ ] Badge
- [ ] Label
- [ ] Select
- [ ] Checkbox
- [ ] Radio Group
- [ ] Switch
- [ ] Textarea

**Total**: 10 components  
**Estimated**: 10-15 hours

#### **Phase 2: Medium Priority (Navigation & Feedback)** - 2 weeks
Important for user interaction

- [ ] Tabs
- [ ] Dialog
- [ ] Alert
- [ ] Tooltip
- [ ] Progress
- [ ] Breadcrumb
- [ ] Dropdown Menu
- [ ] Sheet
- [ ] Popover
- [ ] Toast

**Total**: 10 components  
**Estimated**: 10-15 hours

#### **Phase 3: Data Display** - 1 week
Table and data visualization

- [ ] Table
- [ ] Avatar
- [ ] Separator
- [ ] Hover Card
- [ ] Skeleton
- [ ] Command

**Total**: 6 components  
**Estimated**: 6-10 hours

#### **Phase 4: Forms & Layout** - 2 weeks
Complex form components

- [ ] Form
- [ ] Slider
- [ ] Calendar
- [ ] Date Picker
- [ ] Combobox
- [ ] Input OTP
- [ ] Accordion
- [ ] Carousel
- [ ] Collapsible
- [ ] Scroll Area

**Total**: 10 components  
**Estimated**: 15-20 hours

#### **Phase 5: Advanced Components** - 3 weeks
Custom business components

- [ ] Data Table (advanced)
- [ ] Multi Select
- [ ] File Uploader
- [ ] Rich Text Editor
- [ ] Charts (all types)
- [ ] Pivot Table
- [ ] Tree Table
- [ ] Invoice Generator

**Total**: 20 components  
**Estimated**: 25-30 hours

#### **Phase 6: Business Patterns** - 2 weeks
Composed patterns and business logic

- [ ] Stats Dashboard
- [ ] Status KPI Card
- [ ] Bar Chart
- [ ] Booking Calendar
- [ ] Audit Log Viewer

**Total**: 15 components  
**Estimated**: 15-20 hours

#### **Phase 7: Atomic Design** - 1 week
Atomic hierarchy documentation

- [ ] Molecules (6)
- [ ] Organisms (5)
- [ ] Templates (3)
- [ ] Pages (4)

**Total**: 18 components  
**Estimated**: 10-15 hours

#### **Phase 8: Documentation & Polish** - 1 week
MDX docs, cleanup, testing

- [ ] Write MDX documentation
- [ ] Add interaction tests
- [ ] Accessibility audit
- [ ] Visual regression setup

**Estimated**: 8-10 hours

### Total Migration Timeline
**8-10 weeks** for complete migration (working 8-10 hours/week)

---

## 📝 EXAMPLES: DSM TO STORYBOOK

### Example 1: Simple Component (Badge)

#### Current DSM (BadgePage.tsx)
```typescript
export function BadgePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Badge</h1>
        <p className="text-muted-foreground">Displays a badge or a component that looks like a badge.</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-3">Variants</h2>
          <div className="flex gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
```

#### Storybook (badge.stories.tsx)
```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};
```

### Example 2: Component with Context (Theme)

#### Story with ThemeProvider Decorator

```typescript
// src/components/ui/card.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { ThemeProvider } from "../ThemeProvider";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-[350px]">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  ),
};
```

### Example 3: Complex Component with Multiple Examples

#### Current DSM (ButtonPageNew.tsx with ComponentShowcase)
```typescript
export function ButtonPageNew() {
  return (
    <ComponentShowcase
      title="Button"
      description="Displays a button or a component that looks like a button."
      category="Actions"
      preview={/* ... */}
      code={/* ... */}
      props={[/* ... */]}
      examples={[/* ... */]}
    />
  );
}
```

#### Storybook (button.stories.tsx + button.mdx)

**button.stories.tsx**:
```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Mail, Loader2 } from "lucide-react";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Displays a button or a component that looks like a button.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      description: "The visual style variant of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    asChild: {
      control: "boolean",
      description: "Render as a child component",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const Icon: Story = {
  args: {
    children: "🔥",
    size: "icon",
  },
};

// With Icon
export const WithIcon: Story = {
  render: () => (
    <Button>
      <Mail className="mr-2 h-4 w-4" />
      Login with Email
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: "Buttons can include icons for better visual communication",
      },
    },
  },
};

// Loading State
export const Loading: Story = {
  render: () => (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: "Show a loading indicator while an action is processing",
      },
    },
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state for unavailable actions",
      },
    },
  },
};

// All Variants (Group Story)
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All button variants displayed together",
      },
    },
  },
};

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">🔥</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different button sizes for various use cases",
      },
    },
  },
};
```

**button.mdx** (Optional - Enhanced Documentation):
```mdx
import { Meta, Canvas, Story, Controls } from "@storybook/blocks";
import * as ButtonStories from "./button.stories";

<Meta of={ButtonStories} />

# Button

Displays a button or a component that looks like a button.

## Installation

```bash
npx shadcn-ui@latest add button
```

## Usage

```tsx
import { Button } from "@/components/ui/button";

export function MyComponent() {
  return <Button variant="default">Click me</Button>;
}
```

## Examples

### Default Button

<Canvas of={ButtonStories.Default} />

### Variants

The Button component supports multiple visual variants:

<Canvas of={ButtonStories.AllVariants} />

### Sizes

Different sizes for different use cases:

<Canvas of={ButtonStories.AllSizes} />

### With Icon

Buttons can include icons:

<Canvas of={ButtonStories.WithIcon} />

### Loading State

Show loading state during async operations:

<Canvas of={ButtonStories.Loading} />

### Disabled State

<Canvas of={ButtonStories.Disabled} />

## Props

<Controls />

## Accessibility

- Uses semantic `<button>` element
- Supports keyboard navigation (Tab, Enter, Space)
- Properly handles disabled state
- Focus indicators visible by default

## Best Practices

1. Use descriptive button text
2. Keep button text concise (1-3 words)
3. Use `destructive` variant for dangerous actions
4. Show loading state for async operations
5. Disable buttons during processing

## Related Components

- [Link](#) - For navigation
- [Toggle](#) - For toggle states
```

### Example 4: Pattern Component (Stats Dashboard)

```typescript
// src/components/patterns/StatsDashboard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { StatsDashboard } from "./StatsDashboard";

const meta = {
  title: "Patterns/Stats Dashboard",
  component: StatsDashboard,
  parameters: {
    layout: "padded", // Full width layout
    docs: {
      description: {
        component: "A dashboard pattern showing key performance indicators with trends and progress bars.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StatsDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomData: Story = {
  render: () => {
    // Custom implementation with different data
    const customStats = [/* ... */];
    return <StatsDashboard stats={customStats} />;
  },
};
```

---

## 🎨 DECORATORS & CONTEXTS

Many components need context providers (Theme, Help, etc.). Use decorators to wrap stories.

### Global Decorators (All Stories)

**File**: `.storybook/preview.tsx`

```typescript
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { ThemeProvider } from "../src/components/ThemeProvider";
import "../src/styles/globals.css";

const preview: Preview = {
  decorators: [
    // Theme decorator (dark mode toggle)
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    
    // ThemeProvider decorator (for all stories)
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
  
  parameters: {
    // ... other parameters
  },
};

export default preview;
```

### Component-Specific Decorators

#### Example: Help System Components

```typescript
// src/components/help/HelpCenter.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { HelpCenter } from "./HelpCenter";
import { HelpProvider } from "./HelpProvider";

const meta = {
  title: "Help System/Help Center",
  component: HelpCenter,
  decorators: [
    (Story) => (
      <HelpProvider>
        <Story />
      </HelpProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HelpCenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
```

#### Example: Form Components with react-hook-form

```typescript
// src/components/ui/form.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form@7.55.0";
import { Form, FormField, FormItem, FormLabel, FormControl } from "./form";
import { Input } from "./input";
import { Button } from "./button";

const meta = {
  title: "Forms/Form",
  component: Form,
  decorators: [
    (Story) => {
      const form = useForm();
      return (
        <Form {...form}>
          <Story />
        </Form>
      );
    },
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
    });
    
    const onSubmit = (data: any) => {
      console.log(data);
    };
    
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};
```

### Layout Decorators

```typescript
// Add padding/max-width for better presentation
const meta = {
  title: "Patterns/Invoice Generator",
  component: InvoiceGenerator,
  decorators: [
    (Story) => (
      <div className="max-w-4xl mx-auto p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InvoiceGenerator>;
```

---

## 🔌 ADDONS CONFIGURATION

### Essential Addons

#### 1. **@storybook/addon-essentials** (Included by Default)
- Controls: Interactive prop controls
- Actions: Event handler logging
- Docs: Auto-generated documentation
- Viewport: Responsive testing
- Backgrounds: Background color switcher
- Toolbars: Custom toolbar items

#### 2. **@storybook/addon-themes** (Dark Mode)

Already configured in `.storybook/preview.ts`

```typescript
import { withThemeByClassName } from "@storybook/addon-themes";

decorators: [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
],
```

#### 3. **@storybook/addon-a11y** (Accessibility Testing)

**Installation**:
```bash
npm install --save-dev @storybook/addon-a11y
```

**Configuration** in `.storybook/main.ts`:
```typescript
addons: [
  "@storybook/addon-a11y",
  // ... other addons
],
```

**Usage**: Automatically runs accessibility checks on all stories. View results in "Accessibility" panel.

**Per-Story Configuration**:
```typescript
export const Default: Story = {
  args: {
    children: "Button",
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
          },
        ],
      },
    },
  },
};
```

#### 4. **@storybook/addon-interactions** (Interaction Testing)

**Installation**:
```bash
npm install --save-dev @storybook/addon-interactions
npm install --save-dev @storybook/testing-library
```

**Usage**:
```typescript
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export const ClickButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    
    await userEvent.click(button);
    await expect(button).toHaveTextContent("Clicked");
  },
};
```

#### 5. **@storybook/addon-links** (Link Between Stories)

**Usage**:
```typescript
import { linkTo } from "@storybook/addon-links";

export const GoToInput: Story = {
  render: () => (
    <Button onClick={linkTo("Forms/Input", "Default")}>
      Go to Input
    </Button>
  ),
};
```

### Recommended Optional Addons

#### **@storybook/addon-coverage** (Code Coverage)
```bash
npm install --save-dev @storybook/addon-coverage
```

#### **@storybook/addon-console** (Console Logs in Storybook)
```bash
npm install --save-dev @storybook/addon-console
```

#### **storybook-addon-designs** (Figma Integration)
```bash
npm install --save-dev storybook-addon-designs
```

Usage:
```typescript
export const Default: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/...",
    },
  },
};
```

---

## 📅 MIGRATION PHASES

### Phase 1: Setup & Core UI (Week 1-2)
**Goal**: Storybook running with 10 core components

**Tasks**:
- [x] Install Storybook
- [x] Configure `.storybook/main.ts`
- [x] Configure `.storybook/preview.ts`
- [x] Load Satoshi font
- [x] Import globals.css
- [x] Create ThemeProvider decorator
- [ ] Migrate Button → button.stories.tsx
- [ ] Migrate Input → input.stories.tsx
- [ ] Migrate Card → card.stories.tsx
- [ ] Migrate Badge → badge.stories.tsx
- [ ] Migrate Label → label.stories.tsx
- [ ] Migrate Select → select.stories.tsx
- [ ] Migrate Checkbox → checkbox.stories.tsx
- [ ] Migrate Radio Group → radio-group.stories.tsx
- [ ] Migrate Switch → switch.stories.tsx
- [ ] Migrate Textarea → textarea.stories.tsx

**Deliverable**: 10 core components in Storybook

### Phase 2: Navigation & Feedback (Week 3-4)
**Goal**: Add 10 interactive components

**Tasks**:
- [ ] Migrate Tabs
- [ ] Migrate Dialog
- [ ] Migrate Alert
- [ ] Migrate Tooltip
- [ ] Migrate Progress
- [ ] Migrate Breadcrumb
- [ ] Migrate Dropdown Menu
- [ ] Migrate Sheet
- [ ] Migrate Popover
- [ ] Migrate Toast (Sonner)

**Deliverable**: 20 total components

### Phase 3: Data Display (Week 5)
**Goal**: Add table and data components

**Tasks**:
- [ ] Migrate Table
- [ ] Migrate Avatar
- [ ] Migrate Separator
- [ ] Migrate Hover Card
- [ ] Migrate Skeleton
- [ ] Migrate Command

**Deliverable**: 26 total components

### Phase 4: Forms & Layout (Week 6-7)
**Goal**: Complex form components

**Tasks**:
- [ ] Migrate Form
- [ ] Migrate Slider
- [ ] Migrate Calendar
- [ ] Migrate Date Picker
- [ ] Migrate Combobox
- [ ] Migrate Input OTP
- [ ] Migrate Accordion
- [ ] Migrate Carousel
- [ ] Migrate Collapsible
- [ ] Migrate Scroll Area

**Deliverable**: 36 total components

### Phase 5: Advanced Components (Week 8-10)
**Goal**: Business-specific components

**Tasks**:
- [ ] Migrate Data Table (advanced)
- [ ] Migrate Multi Select
- [ ] Migrate File Uploader
- [ ] Migrate Rich Text Editor
- [ ] Migrate Charts (FunnelChart, GaugeChart, Heatmap, Sparkline, TreemapChart)
- [ ] Migrate Pivot Table
- [ ] Migrate Tree Table
- [ ] Migrate Invoice Generator
- [ ] Migrate Conditional Form
- [ ] Migrate Form Builder
- [ ] Migrate Multi Column Form
- [ ] Migrate Date Picker with Presets
- [ ] Migrate Date Range Picker
- [ ] Migrate Step Indicator
- [ ] Migrate Timeline

**Deliverable**: 56 total components

### Phase 6: Business Patterns (Week 11-12)
**Goal**: Composed patterns

**Tasks**:
- [ ] Migrate Stats Dashboard
- [ ] Migrate Status KPI Card
- [ ] Migrate Bar Chart
- [ ] Migrate Booking Calendar
- [ ] Migrate Contact Form
- [ ] Migrate Testimonials Carousel
- [ ] Migrate Audit Log Viewer
- [ ] Migrate Color Picker components
- [ ] Migrate Grid System Preview
- [ ] Migrate Spacing Preview
- [ ] Migrate Progress Bar (business)
- [ ] Migrate Status Alert

**Deliverable**: 68 total components

### Phase 7: Atomic Design (Week 13)
**Goal**: Atomic hierarchy

**Tasks**:
- [ ] Create Atomic Design category in Storybook
- [ ] Migrate Molecules (SearchBar, StatCard, FormField, ActionButton, FilterChip, TimelineItem)
- [ ] Migrate Organisms (NavigationBar, LoginForm, FilterBar, StatsGrid, InvoiceTable)
- [ ] Migrate Templates (AuthTemplate, DashboardTemplate, ListPageTemplate)
- [ ] Migrate Pages (LoginPage, DashboardPage, InvoiceListPage, FactoringSelectionPage)
- [ ] Create MDX documentation for hierarchy

**Deliverable**: 86 total components

### Phase 8: Documentation & Testing (Week 14)
**Goal**: Polish and testing

**Tasks**:
- [ ] Write MDX documentation for top 20 components
- [ ] Add interaction tests for form components
- [ ] Run accessibility audit (a11y addon)
- [ ] Fix any WCAG violations
- [ ] Set up visual regression testing (Chromatic)
- [ ] Create component usage guidelines
- [ ] Add code snippets and examples
- [ ] Configure CI/CD for Storybook builds

**Deliverable**: Production-ready Storybook

### Phase 9: Deployment (Week 15)
**Goal**: Public Storybook site

**Tasks**:
- [ ] Build Storybook: `npm run build-storybook`
- [ ] Deploy to Vercel/Netlify/GitHub Pages
- [ ] Set up Chromatic for visual testing
- [ ] Share with design team
- [ ] Gather feedback
- [ ] Iterate

**Deliverable**: Public Storybook URL

---

## 🤖 AUTOMATION SCRIPTS

### Script 1: Generate Story Template

**File**: `scripts/generate-story.js`

```javascript
#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Usage: node scripts/generate-story.js ComponentName "UI/ComponentName"

const componentName = process.argv[2];
const storyTitle = process.argv[3] || `Components/${componentName}`;

if (!componentName) {
  console.error("Usage: node scripts/generate-story.js ComponentName \"Category/ComponentName\"");
  process.exit(1);
}

const template = `import type { Meta, StoryObj } from "@storybook/react";
import { ${componentName} } from "./${componentName.toLowerCase()}";

const meta = {
  title: "${storyTitle}",
  component: ${componentName},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // Add argTypes here
  },
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Add default args here
  },
};
`;

const fileName = `${componentName.toLowerCase()}.stories.tsx`;
const outputPath = path.join(process.cwd(), "src/components/ui", fileName);

fs.writeFileSync(outputPath, template);
console.log(`✅ Created: ${outputPath}`);
```

**Usage**:
```bash
node scripts/generate-story.js Button "UI/Button"
```

### Script 2: Migrate All DSM Pages

**File**: `scripts/migrate-to-storybook.js`

```javascript
#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const components = [
  { name: "Button", category: "UI" },
  { name: "Input", category: "UI" },
  { name: "Card", category: "UI" },
  { name: "Badge", category: "UI" },
  // Add all 205 components here
];

components.forEach((comp) => {
  const template = `import type { Meta, StoryObj } from "@storybook/react";
import { ${comp.name} } from "./${comp.name.toLowerCase()}";

const meta = {
  title: "${comp.category}/${comp.name}",
  component: ${comp.name},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ${comp.name}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
`;

  const fileName = `${comp.name.toLowerCase()}.stories.tsx`;
  const outputPath = path.join(process.cwd(), "src/components/ui", fileName);

  if (!fs.existsSync(outputPath)) {
    fs.writeFileSync(outputPath, template);
    console.log(`✅ Created: ${outputPath}`);
  } else {
    console.log(`⚠️  Already exists: ${outputPath}`);
  }
});
```

**Usage**:
```bash
node scripts/migrate-to-storybook.js
```

### Script 3: Validate Stories

**File**: `scripts/validate-stories.js`

```javascript
#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const glob = require("glob");

const storyFiles = glob.sync("src/**/*.stories.tsx");
const componentFiles = glob.sync("src/components/ui/*.tsx");

const components = componentFiles
  .filter((file) => !file.endsWith(".stories.tsx"))
  .map((file) => path.basename(file, ".tsx"));

const stories = storyFiles.map((file) => {
  const basename = path.basename(file, ".stories.tsx");
  return basename;
});

const missing = components.filter((comp) => !stories.includes(comp));

if (missing.length > 0) {
  console.log("❌ Missing stories for:");
  missing.forEach((comp) => console.log(`  - ${comp}`));
  process.exit(1);
} else {
  console.log("✅ All components have stories!");
}
```

**Usage**:
```bash
node scripts/validate-stories.js
```

### Add Scripts to package.json

```json
{
  "scripts": {
    "generate-story": "node scripts/generate-story.js",
    "migrate-storybook": "node scripts/migrate-to-storybook.js",
    "validate-stories": "node scripts/validate-stories.js"
  }
}
```

---

## 🧪 TESTING & ACCESSIBILITY

### Accessibility Testing with @storybook/addon-a11y

#### Automatic Testing

The a11y addon automatically runs on all stories. View results in the "Accessibility" panel.

#### Manual Configuration

```typescript
// Disable specific rules for a story
export const CustomButton: Story = {
  args: {
    children: "Button",
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: false, // Disable contrast check for this story
          },
        ],
      },
    },
  },
};
```

#### Common WCAG Rules Checked
- color-contrast: Text contrast ratio (4.5:1 minimum)
- button-name: Buttons must have accessible names
- link-name: Links must have accessible names
- label: Form inputs must have labels
- aria-* attributes validation

### Interaction Testing

**Install**:
```bash
npm install --save-dev @storybook/testing-library @storybook/jest
```

**Example**:
```typescript
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export const InteractiveForm: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <form>
        <Input
          data-testid="email-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Find input
    const input = canvas.getByTestId("email-input");
    
    // Type into input
    await userEvent.type(input, "test@example.com");
    
    // Assert value
    await expect(input).toHaveValue("test@example.com");
    
    // Find and click button
    const button = canvas.getByRole("button", { name: /submit/i });
    await userEvent.click(button);
  },
};
```

### Visual Regression Testing with Chromatic

**Install**:
```bash
npm install --save-dev chromatic
```

**Setup**:
1. Sign up at https://www.chromatic.com/
2. Get project token
3. Add to `.env`:
   ```
   CHROMATIC_PROJECT_TOKEN=your-token-here
   ```
4. Add script to package.json:
   ```json
   {
     "scripts": {
       "chromatic": "chromatic --exit-zero-on-changes"
     }
   }
   ```

**Run**:
```bash
npm run chromatic
```

**CI Integration** (GitHub Actions):
```yaml
# .github/workflows/chromatic.yml
name: Chromatic

on: push

jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run chromatic
        env:
          CHROMATIC_PROJECT_TOKEN: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

---

## 🚀 DEPLOYMENT

### Option 1: Vercel (Recommended)

**Step 1**: Build Storybook
```bash
npm run build-storybook
```

**Step 2**: Deploy to Vercel
```bash
npx vercel storybook-static
```

**Or use Vercel CLI**:
1. Install Vercel: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel storybook-static --prod`

### Option 2: Netlify

**Step 1**: Build Storybook
```bash
npm run build-storybook
```

**Step 2**: Create `netlify.toml`
```toml
[build]
  command = "npm run build-storybook"
  publish = "storybook-static"
```

**Step 3**: Deploy
```bash
npx netlify deploy --prod --dir=storybook-static
```

### Option 3: GitHub Pages

**Step 1**: Install gh-pages
```bash
npm install --save-dev gh-pages
```

**Step 2**: Add deploy script to package.json
```json
{
  "scripts": {
    "deploy-storybook": "storybook build && gh-pages -d storybook-static"
  }
}
```

**Step 3**: Deploy
```bash
npm run deploy-storybook
```

**Step 4**: Configure GitHub Pages
- Go to repository settings
- Pages → Source → gh-pages branch

### Option 4: Chromatic (Storybook-Specific)

**Advantages**:
- Visual regression testing included
- Collaboration features
- Version history
- Component reviews

**Setup**:
```bash
npm install --save-dev chromatic
npx chromatic --project-token=YOUR_TOKEN
```

**CI Integration**:
```yaml
# .github/workflows/chromatic.yml
name: Chromatic Deployment

on: push

jobs:
  chromatic-deployment:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run chromatic
        env:
          CHROMATIC_PROJECT_TOKEN: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

---

## 🐛 TROUBLESHOOTING

### Issue 1: Tailwind CSS Not Working

**Problem**: Tailwind classes don't apply in Storybook

**Solution**:
1. Ensure `globals.css` is imported in `.storybook/preview.ts`
2. Check Vite config in `.storybook/main.ts`
3. Verify Tailwind is configured for Vite:
   ```typescript
   // vite.config.ts
   import tailwindcss from '@tailwindcss/vite'
   
   export default {
     plugins: [tailwindcss()]
   }
   ```

### Issue 2: Satoshi Font Not Loading

**Problem**: Font doesn't appear in Storybook

**Solution**:
1. Add to `.storybook/preview-head.html`:
   ```html
   <style>
     @font-face {
       font-family: 'Satoshi';
       src: url('/fonts/Satoshi-Variable.woff2') format('woff2');
       font-weight: 300 900;
       font-display: swap;
     }
   </style>
   ```
2. Ensure `/public/fonts/` is in staticDirs in `main.ts`

### Issue 3: CSS Variables Not Defined

**Problem**: `hsl(var(--primary))` doesn't work

**Solution**:
Import globals.css in `.storybook/preview.ts`:
```typescript
import "../src/styles/globals.css";
```

### Issue 4: Dark Mode Not Working

**Problem**: Dark mode toggle doesn't switch themes

**Solution**:
1. Check decorator order in `preview.ts`
2. Ensure `withThemeByClassName` is configured:
   ```typescript
   import { withThemeByClassName } from "@storybook/addon-themes";
   
   decorators: [
     withThemeByClassName({
       themes: {
         light: "light",
         dark: "dark",
       },
       defaultTheme: "light",
     }),
   ],
   ```
3. Verify dark mode CSS variables in globals.css

### Issue 5: Context Provider Not Working

**Problem**: Component needs ThemeProvider but it's not available

**Solution**:
Add decorator to story or globally:
```typescript
decorators: [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
],
```

### Issue 6: Stories Not Appearing

**Problem**: Created story but it doesn't show in Storybook

**Solution**:
1. Check story path matches pattern in `main.ts`:
   ```typescript
   stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"]
   ```
2. Restart Storybook: `npm run storybook`
3. Check for TypeScript errors in story file

### Issue 7: Build Fails

**Problem**: `npm run build-storybook` fails

**Solution**:
1. Check all imports are valid
2. Ensure no console.log or debugger statements
3. Verify all dependencies are installed
4. Clear cache: `rm -rf node_modules/.cache`

### Issue 8: Slow Performance

**Problem**: Storybook is slow to load

**Solution**:
1. Reduce number of stories loaded at once
2. Use lazy loading for heavy components
3. Optimize images
4. Disable unused addons
5. Use production build for testing: `npm run build-storybook && npx http-server storybook-static`

---

## 📊 DSM VS STORYBOOK COMPARISON

### Feature Comparison

| Feature | Current DSM | Storybook | Winner |
|---------|-------------|-----------|--------|
| **Development** |
| Component isolation | ❌ No | ✅ Yes | Storybook |
| Hot reload | ✅ Yes | ✅ Yes | Tie |
| Interactive props | ❌ Manual | ✅ Auto-generated | Storybook |
| Multiple states | ✅ Manual | ✅ Auto-generated | Storybook |
| **Documentation** |
| Auto-generated docs | ❌ No | ✅ Yes | Storybook |
| Props tables | ✅ Manual | ✅ Auto-generated | Storybook |
| Code examples | ✅ Manual | ✅ Auto-generated | Storybook |
| Search | ❌ No | ✅ Yes | Storybook |
| **Testing** |
| Visual testing | ❌ No | ✅ Yes (Chromatic) | Storybook |
| Accessibility | ✅ Manual | ✅ Auto (a11y addon) | Storybook |
| Interaction testing | ❌ No | ✅ Yes | Storybook |
| **Collaboration** |
| Shareable links | ✅ Yes | ✅ Yes | Tie |
| Comments | ❌ No | ✅ Yes (Chromatic) | Storybook |
| Version history | ❌ No | ✅ Yes (Chromatic) | Storybook |
| **Ecosystem** |
| Addons | ❌ No | ✅ 100+ addons | Storybook |
| Figma integration | ❌ No | ✅ Yes | Storybook |
| CI/CD integration | ⚠️ Basic | ✅ Advanced | Storybook |
| **Custom Features** |
| Internal routing | ✅ PageRenderer | ❌ No | DSM |
| Help system | ✅ Integrated | ❌ No | DSM |
| Theme customizer | ✅ Integrated | ⚠️ Partial | DSM |
| Factoring app | ✅ Integrated | ❌ No | DSM |
| **Maintenance** |
| Setup complexity | ✅ Simple | ⚠️ Moderate | DSM |
| Learning curve | ✅ Low | ⚠️ Moderate | DSM |
| Migration effort | N/A | ⚠️ 80-100 hours | DSM |

### Recommendation

**Hybrid Approach**: Keep both systems

**Use Current DSM for**:
- Integrated product demos
- Internal routing flows
- Help system showcase
- Theme customizer tool
- Factoring app demo
- Production documentation site

**Use Storybook for**:
- Component development
- Design system documentation
- Design team collaboration
- Visual regression testing
- Accessibility audits
- Public documentation

### Cost-Benefit Analysis

**Costs**:
- 80-100 hours migration time
- Learning curve for team
- Additional tooling (Chromatic)
- Maintenance of two systems

**Benefits**:
- Industry-standard tool
- Better developer experience
- Auto-generated documentation
- Visual testing capabilities
- Accessibility testing built-in
- Collaboration features
- Addon ecosystem

**ROI**: Positive after 6-12 months

---

## ✅ BEST PRACTICES

### 1. Story Naming Conventions

**Good**:
```typescript
export const Default: Story = {};
export const WithIcon: Story = {};
export const LoadingState: Story = {};
export const Disabled: Story = {};
```

**Bad**:
```typescript
export const Story1: Story = {};
export const test: Story = {};
export const ButtonWithIconAndText: Story = {};
```

### 2. Story Organization

**Organize by feature, not file structure**:
```
UI/
  Button
  Input
  Card
Forms/
  Checkbox
  Radio Group
  Select
Navigation/
  Tabs
  Breadcrumb
Patterns/
  Stats Dashboard
  Login Form
```

### 3. Use ArgTypes for Props

**Document all props**:
```typescript
argTypes: {
  variant: {
    control: "select",
    options: ["default", "secondary"],
    description: "The visual style variant",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "default" },
    },
  },
},
```

### 4. Add Descriptions

**Help users understand component**:
```typescript
parameters: {
  docs: {
    description: {
      component: "Displays a button or a component that looks like a button.",
      story: "This is the default button variant.",
    },
  },
},
```

### 5. Use Decorators Wisely

**Global decorators for common needs**:
```typescript
// .storybook/preview.ts
decorators: [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
],
```

**Component-specific decorators**:
```typescript
// form.stories.tsx
decorators: [
  (Story) => {
    const form = useForm();
    return <Form {...form}><Story /></Form>;
  },
],
```

### 6. Test Accessibility

**Use a11y addon on all stories**:
```typescript
parameters: {
  a11y: {
    config: {
      rules: [
        { id: "color-contrast", enabled: true },
        { id: "label", enabled: true },
      ],
    },
  },
},
```

### 7. Document Edge Cases

**Create stories for error states, loading, empty states**:
```typescript
export const Loading: Story = {};
export const Error: Story = {};
export const Empty: Story = {};
export const WithLongText: Story = {};
export const WithManyItems: Story = {};
```

### 8. Use Interaction Testing

**Test user flows**:
```typescript
play: async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
  await expect(canvas.getByText("Success")).toBeInTheDocument();
},
```

### 9. Keep Stories Simple

**One concern per story**:
```typescript
// Good
export const Small: Story = { args: { size: "sm" } };
export const WithIcon: Story = { render: () => <Button><Icon />Text</Button> };

// Bad
export const SmallWithIconAndLoading: Story = { /* ... */ };
```

### 10. Use MDX for Complex Docs

**Rich documentation with MDX**:
```mdx
import { Meta, Canvas, Story } from "@storybook/blocks";

<Meta title="Guides/Getting Started" />

# Getting Started

This guide will help you get started with the design system.

## Installation

```bash
npm install @financio/design-system
```

<Canvas of={Stories.Example} />
```

---

## 📚 REFERENCES

### Official Documentation
- **Storybook**: https://storybook.js.org/
- **CSF 3.0**: https://storybook.js.org/docs/react/api/csf
- **Vite Builder**: https://storybook.js.org/docs/react/builders/vite
- **Addons**: https://storybook.js.org/addons

### Addons
- **@storybook/addon-themes**: https://storybook.js.org/addons/@storybook/addon-themes
- **@storybook/addon-a11y**: https://storybook.js.org/addons/@storybook/addon-a11y
- **@storybook/addon-interactions**: https://storybook.js.org/addons/@storybook/addon-interactions
- **storybook-addon-designs**: https://storybook.js.org/addons/storybook-addon-designs

### Visual Testing
- **Chromatic**: https://www.chromatic.com/
- **Percy**: https://percy.io/
- **Applitools**: https://applitools.com/

### Learning Resources
- **Storybook Tutorial**: https://storybook.js.org/tutorials/
- **Design Systems for Developers**: https://storybook.js.org/tutorials/design-systems-for-developers/
- **Component Driven Development**: https://www.componentdriven.org/

### Community
- **Discord**: https://discord.gg/storybook
- **GitHub**: https://github.com/storybookjs/storybook
- **Twitter**: @storybookjs

---

## 🎯 NEXT STEPS

### Immediate Actions (Week 1)
1. [ ] Install Storybook: `npx storybook@latest init`
2. [ ] Configure `.storybook/main.ts` and `preview.ts`
3. [ ] Load Satoshi font and globals.css
4. [ ] Create first story (Button)
5. [ ] Test dark mode toggle
6. [ ] Share with team for feedback

### Short Term (Month 1)
1. [ ] Migrate 10 core UI components
2. [ ] Configure a11y addon
3. [ ] Add interaction tests
4. [ ] Deploy to Vercel/Netlify
5. [ ] Share with design team

### Long Term (3 Months)
1. [ ] Migrate all 205 components
2. [ ] Write MDX documentation
3. [ ] Set up Chromatic for visual testing
4. [ ] Integrate with CI/CD
5. [ ] Decide: Keep both systems or choose one

---

## 📝 FINAL NOTES

This migration guide provides a complete roadmap to migrate the Financio Design System to Storybook. The process is estimated at **80-100 hours** and can be completed in **8-15 weeks** working part-time.

**Key Takeaways**:
- Storybook is industry-standard and provides superior DX
- Migration is significant effort but worthwhile long-term
- Hybrid approach recommended during transition
- Automation scripts can speed up process
- Visual testing and accessibility are major benefits

**Success Metrics**:
- [ ] All 205 components in Storybook
- [ ] 100% accessibility score (a11y addon)
- [ ] Visual regression tests passing
- [ ] Public Storybook URL live
- [ ] Design team using Storybook
- [ ] Development team using Storybook

**Good luck with your migration!** 🚀

---

**Document Version**: 1.0  
**Last Updated**: January 14, 2026  
**Maintained by**: Financio Design System Team  
**Questions?** Review Storybook docs or join Discord
