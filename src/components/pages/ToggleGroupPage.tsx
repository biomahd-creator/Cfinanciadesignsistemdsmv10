import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";

export function ToggleGroupPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Toggle Group</h2>
          <Badge>Actions</Badge>
        </div>
        <p className="text-muted-foreground">
          A set of two-state buttons that can be toggled on or off
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Single Select</CardTitle>
          <CardDescription>Only one item can be selected at a time</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="justify" aria-label="Align justify">
              <AlignJustify className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Select</CardTitle>
          <CardDescription>Multiple items can be selected simultaneously</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>Different toggle group styles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Default</h4>
            <ToggleGroup type="single" variant="default">
              <ToggleGroupItem value="left">Left</ToggleGroupItem>
              <ToggleGroupItem value="center">Center</ToggleGroupItem>
              <ToggleGroupItem value="right">Right</ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <Separator />

          <div className="space-y-3">
            <h4 className="font-medium text-sm">Outline</h4>
            <ToggleGroup type="single" variant="outline">
              <ToggleGroupItem value="left">Left</ToggleGroupItem>
              <ToggleGroupItem value="center">Center</ToggleGroupItem>
              <ToggleGroupItem value="right">Right</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
          <CardDescription>Non-interactive toggle group state</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ToggleGroup type="single" disabled>
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Common Patterns</CardTitle>
          <CardDescription>Real-world usage examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Text Editor Toolbar */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Text Editor Toolbar</h4>
            <div className="flex gap-2">
              <ToggleGroup type="single" defaultValue="left">
                <ToggleGroupItem value="left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              
              <Separator orientation="vertical" className="h-9" />
              
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          <Separator />

          {/* View Switcher */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">View Switcher</h4>
            <ToggleGroup type="single" defaultValue="list" variant="outline">
              <ToggleGroupItem value="list">List</ToggleGroupItem>
              <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
              <ToggleGroupItem value="table">Table</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Common Patterns</CardTitle>
          <CardDescription>Real-world usage examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Text Editor Toolbar */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Text Editor Toolbar</h4>
            <div className="flex gap-2">
              <ToggleGroup type="single" defaultValue="left">
                <ToggleGroupItem value="left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              
              <Separator orientation="vertical" className="h-9" />
              
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          <Separator />

          {/* View Switcher */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">View Switcher</h4>
            <ToggleGroup type="single" defaultValue="list" variant="outline">
              <ToggleGroupItem value="list">List</ToggleGroupItem>
              <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
              <ToggleGroupItem value="table">Table</ToggleGroupItem>
            </ToggleGroup>
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
            <code className="block p-4 bg-secondary text-white rounded-lg text-sm">
              npx shadcn@latest add toggle
            </code>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Usage - Single Select</h4>
            <code className="block p-4 bg-muted rounded-lg text-sm">
              {`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"`}
              <br />
              <br />
              {`<ToggleGroup type="single" defaultValue="center">`}
              <br />
              {`  <ToggleGroupItem value="left">Left</ToggleGroupItem>`}
              <br />
              {`  <ToggleGroupItem value="center">Center</ToggleGroupItem>`}
              <br />
              {`  <ToggleGroupItem value="right">Right</ToggleGroupItem>`}
              <br />
              {`</ToggleGroup>`}
            </code>
          </div>

          <Separator />
          
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Usage - Multiple Select</h4>
            <code className="block p-4 bg-muted rounded-lg text-sm">
              {`<ToggleGroup type="multiple">`}
              <br />
              {`  <ToggleGroupItem value="bold">`}
              <br />
              {`    <Bold className="h-4 w-4" />`}
              <br />
              {`  </ToggleGroupItem>`}
              <br />
              {`  <ToggleGroupItem value="italic">`}
              <br />
              {`    <Italic className="h-4 w-4" />`}
              <br />
              {`  </ToggleGroupItem>`}
              <br />
              {`</ToggleGroup>`}
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}