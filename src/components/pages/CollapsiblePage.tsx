import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { ChevronsUpDown } from "lucide-react";

export function CollapsiblePage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Collapsible</h2>
          <Badge>Layout</Badge>
        </div>
        <p className="text-muted-foreground">
          An interactive component which expands/collapses a panel
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Simple Collapsible</CardTitle>
          <CardDescription>Basic collapsible content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Can I use this in my project?
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-2">
              <div className="rounded-md border px-4 py-3 text-sm">
                Yes. Free to use for personal and commercial projects. No attribution required.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Items</CardTitle>
          <CardDescription>Several collapsible sections</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between">
                @peduarte starred 3 repositories
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 text-sm">@radix-ui/primitives</div>
              <div className="rounded-md border px-4 py-3 text-sm">@radix-ui/colors</div>
              <div className="rounded-md border px-4 py-3 text-sm">@stitches/react</div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
}
