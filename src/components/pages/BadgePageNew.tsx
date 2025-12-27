import { ComponentShowcase } from "../ui/component-showcase";
import { Badge } from "../ui/badge";
import { Check, X, AlertCircle, Clock, Star, Zap, TrendingUp, ShoppingCart, Info } from "lucide-react";

export function BadgePageNew() {
  return (
    <ComponentShowcase
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
      category="Data Display"
      
      // Main Preview
      preview={
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="neutral">Neutral</Badge>
        </div>
      }
      
      // Main Code
      code={`import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  );
}`}
      
      // Usage
      usage="Import the Badge component from @/components/ui/badge and use it to display labels, statuses, categories, or notifications."
      usageCode={`import { Badge } from "@/components/ui/badge";

function MyComponent() {
  return (
    <Badge variant="success">Completed</Badge>
  );
}`}
      
      // Props Documentation
      props={[
        {
          name: "variant",
          type: '"default" | "secondary" | "outline" | "destructive" | "success" | "warning" | "info" | "neutral"',
          default: '"default"',
          description: "Visual style of the badge",
        },
        {
          name: "className",
          type: "string",
          description: "Additional CSS classes for the badge",
        },
        {
          name: "children",
          type: "ReactNode",
          description: "Content of the badge (text, icons, etc.)",
          required: true,
        },
      ]}
      
      // Examples
      examples={[
        {
          title: "All Variants",
          description: "All available badge variants, including semantic ones.",
          preview: (
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="neutral">Neutral</Badge>
            </div>
          ),
          code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="neutral">Neutral</Badge>`
        },
        {
          title: "With Icons",
          description: "Badges with Lucide React icons for better visual context.",
          preview: (
            <div className="flex flex-wrap gap-3">
              <Badge variant="success" className="gap-1">
                <Check className="h-3 w-3" />
                Success
              </Badge>
              <Badge variant="destructive" className="gap-1">
                <X className="h-3 w-3" />
                Error
              </Badge>
              <Badge variant="warning" className="gap-1">
                <AlertCircle className="h-3 w-3" />
                Warning
              </Badge>
              <Badge variant="info" className="gap-1">
                <Info className="h-3 w-3" />
                Info
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Clock className="h-3 w-3" />
                Pending
              </Badge>
            </div>
          ),
          code: `import { Check, X, AlertCircle, Clock, Info } from "lucide-react";

<Badge variant="success" className="gap-1">
  <Check className="h-3 w-3" />
  Success
</Badge>
<Badge variant="destructive" className="gap-1">
  <X className="h-3 w-3" />
  Error
</Badge>
<Badge variant="warning" className="gap-1">
  <AlertCircle className="h-3 w-3" />
  Warning
</Badge>
<Badge variant="info" className="gap-1">
  <Info className="h-3 w-3" />
  Info
</Badge>
<Badge variant="outline" className="gap-1">
  <Clock className="h-3 w-3" />
  Pending
</Badge>`
        },
        {
          title: "Status Indicators",
          description: "Badges to show statuses with visual indicators and correct semantic colors.",
          preview: (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm w-20">Live:</span>
                <Badge variant="default" className="gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-black/20 animate-pulse" />
                  Live
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm w-20">Success:</span>
                <Badge variant="success" className="gap-1.5">
                  <Check className="h-3 w-3" />
                  Completed
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm w-20">Warning:</span>
                <Badge variant="warning" className="gap-1.5">
                  <AlertCircle className="h-3 w-3" />
                  Review Needed
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm w-20">Error:</span>
                <Badge variant="destructive" className="gap-1.5">
                  <X className="h-3 w-3" />
                  Failed
                </Badge>
              </div>
            </div>
          ),
          code: `<Badge variant="default" className="gap-1.5">
  <span className="h-2 w-2 rounded-full bg-black/20 animate-pulse" />
  Live
</Badge>

<Badge variant="success" className="gap-1.5">
  <Check className="h-3 w-3" />
  Completed
</Badge>

<Badge variant="warning" className="gap-1.5">
  <AlertCircle className="h-3 w-3" />
  Review Needed
</Badge>

<Badge variant="destructive" className="gap-1.5">
  <X className="h-3 w-3" />
  Failed
</Badge>`
        },
        {
          title: "Semantic Usage",
          description: "Use of semantic variants instead of manual colors.",
          preview: (
            <div className="flex flex-wrap gap-3">
              <Badge variant="info">
                New Feature
              </Badge>
              <Badge variant="success">
                Paid
              </Badge>
              <Badge variant="neutral">
                Archived
              </Badge>
              <Badge variant="warning">
                Expiring Soon
              </Badge>
              <Badge variant="default">
                Premium
              </Badge>
            </div>
          ),
          code: `<Badge variant="info">New Feature</Badge>
<Badge variant="success">Paid</Badge>
<Badge variant="neutral">Archived</Badge>
<Badge variant="warning">Expiring Soon</Badge>
<Badge variant="default">Premium</Badge>`
        },
        {
          title: "Notification Badges",
          description: "Badges to display notification counters with high contrast.",
          preview: (
            <div className="flex flex-wrap gap-6">
              <div className="relative inline-block">
                <ShoppingCart className="h-6 w-6" />
                <Badge variant="default" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  3
                </Badge>
              </div>
              <div className="relative inline-block">
                <Star className="h-6 w-6" />
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  9
                </Badge>
              </div>
              <div className="relative inline-block">
                <Zap className="h-6 w-6" />
                <Badge variant="info" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  5
                </Badge>
              </div>
            </div>
          ),
          code: `<div className="relative inline-block">
  <ShoppingCart className="h-6 w-6" />
  <Badge variant="default" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
    3
  </Badge>
</div>

<div className="relative inline-block">
  <Star className="h-6 w-6" />
  <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
    9
  </Badge>
</div>`
        },
        {
          title: "Tag System",
          description: "Badges as removable tags or categories.",
          preview: (
            <div className="flex flex-wrap gap-2">
              <Badge variant="neutral" className="gap-1.5 pr-1">
                React
                <button className="ml-1 rounded-full hover:bg-black/10 p-0.5 transition-colors">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
              <Badge variant="neutral" className="gap-1.5 pr-1">
                TypeScript
                <button className="ml-1 rounded-full hover:bg-black/10 p-0.5 transition-colors">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
              <Badge variant="info" className="gap-1.5 pr-1">
                New
                <button className="ml-1 rounded-full hover:bg-black/10 p-0.5 transition-colors">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </div>
          ),
          code: `<Badge variant="neutral" className="gap-1.5 pr-1">
  React
  <button className="ml-1 rounded-full hover:bg-black/10 p-0.5 transition-colors">
    <X className="h-3 w-3" />
  </button>
</Badge>`
        }
      ]}
    />
  );
}
