import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export function SheetPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-4xl font-semibold">Sheet</h2>
          <Badge>Feedback</Badge>
        </div>
        <p className="text-muted-foreground">
          Extends the Dialog component to display content that slides in from the edge of the screen
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Sheet Sides</CardTitle>
          <CardDescription>Sheets can slide from different sides</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open from Top</Button>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>Top Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the top of the screen.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open from Right</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Right Sheet</SheetTitle>
                  <SheetDescription>
                    This is the default side for sheets.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open from Bottom</Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Bottom Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the bottom.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open from Left</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Left Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the left.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
