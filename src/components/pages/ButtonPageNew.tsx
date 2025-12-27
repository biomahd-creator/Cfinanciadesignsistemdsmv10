import { ComponentShowcase } from "../ui/component-showcase";
import { Button } from "../ui/button";
import { Mail, Loader2, ChevronRight, Download, Settings, Trash2, Edit, Plus, Search } from "lucide-react";

export function ButtonPageNew() {
  return (
    <ComponentShowcase
      title="Button"
      description="Displays a button or a component that looks like a button."
      category="Actions"
      
      // Main Preview
      preview={
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      }
      
      // Main Code
      code={`import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}`}
      
      // Usage
      usage="Import the Button component from @/components/ui/button and use it with different variants according to your design needs."
      usageCode={`import { Button } from "@/components/ui/button";

function MyComponent() {
  return (
    <Button onClick={() => console.log("Clicked!")}>
      Click me
    </Button>
  );
}`}
      
      // Props Documentation
      props={[
        {
          name: "variant",
          type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
          default: '"default"',
          description: "Visual style of the button",
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg" | "icon"',
          default: '"default"',
          description: "Size of the button",
        },
        {
          name: "asChild",
          type: "boolean",
          default: "false",
          description: "Renders the button as its direct child (useful for links)",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Disables the button",
        },
        {
          name: "onClick",
          type: "() => void",
          description: "Function to execute on click",
        },
        {
          name: "className",
          type: "string",
          description: "Additional CSS classes",
        },
      ]}
      
      // Examples
      examples={[
        {
          title: "With Icon",
          description: "Buttons with Lucide React icons",
          preview: (
            <div className="flex flex-wrap gap-4">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button variant="ghost">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { Mail, Download, Settings } from "lucide-react";

export function ButtonWithIcon() {
  return (
    <div className="flex gap-4">
      <Button>
        <Mail className="mr-2 h-4 w-4" />
        Send Email
      </Button>
      <Button variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
      <Button variant="ghost">
        <Settings className="mr-2 h-4 w-4" />
        Settings
      </Button>
    </div>
  );
}`,
        },
        {
          title: "Loading State",
          description: "Button with loading state using Loader2 icon",
          preview: (
            <div className="flex flex-wrap gap-4">
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
              <Button variant="outline" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </Button>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}`,
        },
        {
          title: "Sizes",
          description: "Different sizes available for the button",
          preview: (
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function ButtonSizes() {
  return (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}`,
        },
        {
          title: "Icon Placements",
          description: "Icon placement to the right or icon only",
          preview: (
            <div className="flex flex-wrap gap-4">
              <Button>
                Next Step
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Download
                <Download className="ml-2 h-4 w-4" />
              </Button>
              <Button size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { ChevronRight, Download, Settings } from "lucide-react";

export function ButtonIconPositions() {
  return (
    <div className="flex gap-4">
      <Button>
        Next Step
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
      <Button variant="outline">
        Download
        <Download className="ml-2 h-4 w-4" />
      </Button>
      <Button size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  );
}`,
        },
        {
          title: "Social Login",
          description: "Buttons for social authentication",
          preview: (
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Login with Email
              </Button>
              <Button className="w-full bg-[#333] hover:bg-[#333]/90 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                Login with GitHub
              </Button>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function SocialButtons() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Button variant="outline" className="w-full">
        <Mail className="mr-2 h-4 w-4" />
        Login with Email
      </Button>
      <Button className="w-full bg-[#333] hover:bg-[#333]/90 text-white">
        <GithubIcon className="mr-2 h-4 w-4" />
        Login with GitHub
      </Button>
    </div>
  );
}`,
        },
        {
          title: "Disabled State",
          description: "Buttons in disabled state",
          preview: (
            <div className="flex flex-wrap gap-4">
              <Button disabled>Default</Button>
              <Button variant="secondary" disabled>Secondary</Button>
              <Button variant="outline" disabled>Outline</Button>
              <Button variant="ghost" disabled>Ghost</Button>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";

export function ButtonDisabled() {
  return (
    <div className="flex gap-4">
      <Button disabled>Default</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="outline" disabled>Outline</Button>
      <Button variant="ghost" disabled>Ghost</Button>
    </div>
  );
}`,
        },
        {
          title: "Outline Variants",
          description: "Outline variant in all sizes with and without icons",
          preview: (
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="outline" size="sm">Small Outline</Button>
                <Button variant="outline">Default Outline</Button>
                <Button variant="outline" size="lg">Large Outline</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  With Icon
                </Button>
                <Button variant="outline" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="outline" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { Download, Search } from "lucide-react";

export function OutlineButtons() {
  return (
    <div className="flex flex-col gap-4">
      {/* Tamaños */}
      <div className="flex gap-4">
        <Button variant="outline" size="sm">Small</Button>
        <Button variant="outline">Default</Button>
        <Button variant="outline" size="lg">Large</Button>
      </div>
      
      {/* Con iconos */}
      <div className="flex gap-4">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}`,
        },
        {
          title: "Ghost Variants",
          description: "Ghost variant for subtle secondary actions",
          preview: (
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="ghost" size="sm">Small Ghost</Button>
                <Button variant="ghost">Default Ghost</Button>
                <Button variant="ghost" size="lg">Large Ghost</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="ghost">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { Settings, Edit } from "lucide-react";

export function GhostButtons() {
  return (
    <div className="flex flex-col gap-4">
      {/* Tamaños */}
      <div className="flex gap-4">
        <Button variant="ghost" size="sm">Small</Button>
        <Button variant="ghost">Default</Button>
        <Button variant="ghost" size="lg">Large</Button>
      </div>
      
      {/* Con iconos */}
      <div className="flex gap-4">
        <Button variant="ghost">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}`,
        },
        {
          title: "Link Variants",
          description: "Link variant for text with link style",
          preview: (
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="link" size="sm">Small Link</Button>
                <Button variant="link">Default Link</Button>
                <Button variant="link" size="lg">Large Link</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="link">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <Button variant="link" disabled>
                  Disabled Link
                </Button>
              </div>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function LinkButtons() {
  return (
    <div className="flex flex-col gap-4">
      {/* Tamaños */}
      <div className="flex gap-4">
        <Button variant="link" size="sm">Small</Button>
        <Button variant="link">Default</Button>
        <Button variant="link" size="lg">Large</Button>
      </div>
      
      {/* Con iconos */}
      <div className="flex gap-4">
        <Button variant="link">
          Learn more
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}`,
        },
        {
          title: "Icon Only Buttons",
          description: "Buttons with only icons in all variants and sizes",
          preview: (
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="icon" disabled>
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" disabled>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { Plus, Edit, Search, Settings, Trash2 } from "lucide-react";

export function IconOnlyButtons() {
  return (
    <div className="flex flex-col gap-4">
      {/* Variantes */}
      <div className="flex gap-4">
        <Button size="icon">
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
        <Button variant="destructive" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Disabled */}
      <div className="flex gap-4">
        <Button size="icon" disabled>
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" disabled>
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}`,
        },
        {
          title: "As Link",
          description: "Button rendered as a link using the asChild prop",
          preview: (
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#button-new" className="inline-flex items-center">
                  Link Button
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#button-new" className="inline-flex items-center">
                  Outline Link
                </a>
              </Button>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";

export function ButtonAsLink() {
  return (
    <div className="flex gap-4">
      <Button asChild>
        <a href="/dashboard">
          Go to Dashboard
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a href="/settings">
          Settings
        </a>
      </Button>
    </div>
  );
}`,
        },
      ]}
    />
  );
}