import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

export function ScrollAreaPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Scroll Area</h2>
          <Badge>Layout</Badge>
        </div>
        <p className="text-muted-foreground">
          Augments native scroll functionality for custom, cross-browser styling
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Vertical Scroll</CardTitle>
          <CardDescription>Scrollable area with custom styling</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-72 w-full rounded-md border p-4">
            <div className="space-y-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i}>
                  <div className="text-sm">
                    Item {i + 1}
                  </div>
                  {i < 19 && <Separator className="my-2" />}
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Horizontal Scroll</CardTitle>
          <CardDescription>Horizontal scrolling content</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="shrink-0">
                  <div className="h-20 w-40 rounded-md border bg-muted flex items-center justify-center">
                    Item {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
