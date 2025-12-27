import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export function PopoverPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-4xl font-semibold">Popover</h2>
          <Badge>Feedback</Badge>
        </div>
        <p className="text-muted-foreground">
          Displays rich content in a portal, triggered by a button
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Simple Popover</CardTitle>
          <CardDescription>Basic popover with content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-2">
                <h4 className="font-medium">Popover Title</h4>
                <p className="text-sm text-muted-foreground">
                  This is a simple popover with some content.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Popover with Form</CardTitle>
          <CardDescription>Interactive popover with inputs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button>Update dimensions</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="width">Width</Label>
                  <Input id="width" placeholder="100%" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height</Label>
                  <Input id="height" placeholder="25px" />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>
    </div>
  );
}
