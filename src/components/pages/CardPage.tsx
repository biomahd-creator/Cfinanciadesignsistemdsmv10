import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

export function CardPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Card</h2>
          <Badge>Data Display</Badge>
        </div>
        <p className="text-muted-foreground">
          A container component for grouping related content
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Basic Card</CardTitle>
          <CardDescription>Simple card with header and content</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            This is a basic card component with a header and content area.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Card with Footer</CardTitle>
          <CardDescription>Card including a footer section</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Cards can include headers, content, and footers for different layout needs.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </CardFooter>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Feature One</CardTitle>
            <CardDescription>First feature description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Cards work great in grid layouts for feature showcases.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature Two</CardTitle>
            <CardDescription>Second feature description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              They maintain consistent spacing and styling automatically.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
