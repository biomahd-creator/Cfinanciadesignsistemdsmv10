# 🚀 HELP SYSTEM - QUICK REFERENCE

## 📦 Installation

```bash
npm install driver.js
```

## 🎯 Quick Usage

### 1. Contextual Help (Tooltips + Popovers)

```tsx
import { ContextualHelp } from "../help/ContextualHelp";

<div className="flex items-center gap-2">
  <Label>Field Name</Label>
  <ContextualHelp
    quickHelp="Tooltip text"
    detailedHelp="Popover content..."
    title="Help Title"
  />
</div>
```

### 2. Help Center (Documentation Panel)

Already integrated in header! Click "Help" button.

```tsx
import { HelpCenter } from "../help/HelpCenter";

// In header
<HelpCenter variant="header" />

// In sidebar
<HelpCenter variant="sidebar" />
```

### 3. Product Tour (Step-by-Step Guide)

```tsx
import { ProductTour } from "../help/ProductTour";
import { vinculacionTourSteps } from "../help/tourSteps";

// Add button
<ProductTour
  steps={vinculacionTourSteps}
  tourId="my-tour"
  showButton={true}
  buttonText="Start Tour"
/>

// Add IDs to elements
<div id="tour-step-1">
  <Input ... />
</div>
```

## 📍 File Locations

```
/components/help/
├── ContextualHelp.tsx       # Inline help component
├── HelpCenter.tsx           # Documentation panel
├── ProductTour.tsx          # Tour system
├── tourSteps.ts             # Tour definitions
└── index.ts                 # Exports

/styles/
└── tour.css                 # Tour custom styles

/components/pages/
└── HelpSystemDemoPage.tsx   # Live examples
```

## 🎨 Available Tours

```tsx
import {
  vinculacionTourSteps,        // Onboarding form (7 steps)
  factoringDashboardTourSteps, // Dashboard (4 steps)
  generalAppTourSteps,         // App intro (3 steps)
} from "../help/tourSteps";
```

## ✅ Props Cheatsheet

### ContextualHelp
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `quickHelp` | `string` | No | Tooltip text (hover) |
| `detailedHelp` | `string` | No | Popover content (click) |
| `title` | `string` | No | Popover title |
| `tooltipOnly` | `boolean` | No | Show only tooltip |
| `popoverOnly` | `boolean` | No | Show only popover |
| `iconSize` | `"sm"\|"md"\|"lg"` | No | Icon size |

### HelpCenter
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"header"\|"sidebar"` | `"header"` | Display style |

### ProductTour
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `steps` | `TourStep[]` | **Yes** | Tour steps |
| `tourId` | `string` | **Yes** | Unique ID |
| `autoStart` | `boolean` | No | Auto on first visit |
| `showButton` | `boolean` | No | Show manual button |
| `buttonText` | `string` | No | Button label |
| `onComplete` | `() => void` | No | Callback |

## 🧪 Test It

1. Click **"Help System Demo"** in sidebar
2. See all three systems in action
3. Copy code examples

## 🎓 Where to Learn More

- `/HELP_SYSTEM_IMPLEMENTATION.md` - Complete guide
- `/components/pages/HelpSystemDemoPage.tsx` - Live code examples
- Header "Help" button - FAQs, Guides, Videos

---

**Quick Start**: Add `<ContextualHelp quickHelp="Hint" />` next to any label! ✨
