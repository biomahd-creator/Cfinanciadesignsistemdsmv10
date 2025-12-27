import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

export function SeparatorPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-4xl font-semibold">Separator</h2>
          <Badge>Data Display</Badge>
        </div>
        <p className="text-muted-foreground">
          Visually or semantically separates content
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Horizontal Separator</CardTitle>
          <CardDescription>Default horizontal divider</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm">Content above separator</p>
            <Separator className="my-4" />
            <p className="text-sm">Content below separator</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vertical Separator</CardTitle>
          <CardDescription>Vertical divider for inline content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-20 items-center space-x-4">
            <div className="text-sm">Item 1</div>
            <Separator orientation="vertical" />
            <div className="text-sm">Item 2</div>
            <Separator orientation="vertical" />
            <div className="text-sm">Item 3</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Content</CardTitle>
          <CardDescription>Separator in a real layout</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">Section Title</h3>
            <p className="text-sm text-muted-foreground mt-1">
              This is some content in the first section.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold">Another Section</h3>
            <p className="text-sm text-muted-foreground mt-1">
              This is content in the second section.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold">Final Section</h3>
            <p className="text-sm text-muted-foreground mt-1">
              And this is the last section.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
