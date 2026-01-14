import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Toggle } from "../ui/toggle";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export function TogglePage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Toggle</h2>
          <Badge>Actions</Badge>
        </div>
        <p className="text-muted-foreground">
          A two-state button that can be either on or off
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Default Toggle</CardTitle>
          <CardDescription>Simple toggle button</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Text Formatting</CardTitle>
          <CardDescription>Common use case for toggles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Toggle aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </Toggle>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>Different toggle styles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Toggle variant="default">Default</Toggle>
            <Toggle variant="outline">Outline</Toggle>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Text and Icon</CardTitle>
          <CardDescription>Toggle with both text and icon</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Toggle aria-label="Toggle italic">
              <Italic className="mr-2 h-4 w-4" />
              Italic
            </Toggle>
            <Toggle variant="outline" aria-label="Toggle bold">
              <Bold className="mr-2 h-4 w-4" />
              Bold
            </Toggle>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>Different toggle sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Toggle size="sm" aria-label="Toggle small">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle size="default" aria-label="Toggle default">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle size="lg" aria-label="Toggle large">
              <Italic className="h-6 w-6" />
            </Toggle>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
          <CardDescription>Non-interactive toggle state</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Toggle disabled>
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle disabled defaultPressed>
              <Italic className="h-4 w-4" />
            </Toggle>
          </div>
        </CardContent>
      </Card>

      {/* Installation */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Installation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <code className="block p-4 bg-secondary text-secondary-foreground rounded-lg">
              npx shadcn@latest add toggle
            </code>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <h4>Usage</h4>
            <code className="block p-4 bg-muted text-foreground rounded-lg">
              {`import { Toggle } from "@/components/ui/toggle"`}
              <br />
              <br />
              {`<Toggle aria-label="Toggle italic">`}
              <br />
              {`  <Italic className="h-4 w-4" />`}
              <br />
              {`</Toggle>`}
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}