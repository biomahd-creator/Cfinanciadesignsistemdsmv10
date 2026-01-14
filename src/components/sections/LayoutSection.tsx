import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { AspectRatio } from "../ui/aspect-ratio";
import { Filter } from "lucide-react";

export function LayoutSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Layout</h2>
        <p className="text-sm text-muted-foreground">
          Componentes para estructura y organización del contenido
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Card</h3>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  This is the card content area with some example text to demonstrate
                  the component structure.
                </p>
              </CardContent>
            </Card>
          </Card>

          {/* Separator */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Separator</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm">Section 1</p>
                <Separator className="my-2" />
                <p className="text-sm">Section 2</p>
                <Separator className="my-2" />
                <p className="text-sm">Section 3</p>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-sm">Left</span>
                <Separator orientation="vertical" className="h-8" />
                <span className="text-sm">Center</span>
                <Separator orientation="vertical" className="h-8" />
                <span className="text-sm">Right</span>
              </div>
            </div>
          </Card>
        </div>

        {/* ScrollArea */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Scroll Area</h3>
          <ScrollArea className="h-48 w-full rounded-md border p-4">
            <div className="space-y-2">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="text-sm">
                  Item {i + 1} - This is a scrollable content area
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>

        {/* Sheet */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Sheet</h3>
          <div className="flex gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Left</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Left Panel</SheetTitle>
                  <SheetDescription>
                    This is a left-side panel. Make changes here and click save when done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <p className="text-sm">Panel content goes here</p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Right</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Right Panel</SheetTitle>
                  <SheetDescription>
                    This is a right-side panel. Make changes here and click save when done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <p className="text-sm">Panel content goes here</p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Top</Button>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>Top Panel</SheetTitle>
                  <SheetDescription>
                    This is a top panel.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <p className="text-sm">Panel content goes here</p>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Bottom</Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Bottom Panel</SheetTitle>
                  <SheetDescription>
                    This is a bottom panel.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <p className="text-sm">Panel content goes here</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Card>

        {/* Resizable */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Resizable</h3>
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] max-w-full rounded-lg border"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Panel One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={25}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Panel Two</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Panel Three</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Card>
      </div>

      {/* Aspect Ratio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Aspect Ratio</h3>
          <div className="space-y-6">
            <div>
              <Label className="mb-2 block">16:9 Aspect Ratio</Label>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm text-muted-foreground">16:9 Container</p>
                </div>
              </AspectRatio>
            </div>
            <div>
              <Label className="mb-2 block">1:1 Aspect Ratio (Square)</Label>
              <AspectRatio ratio={1} className="bg-muted rounded-md overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm text-muted-foreground">1:1 Container</p>
                </div>
              </AspectRatio>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Aspect Ratio Variants</h3>
          <div className="space-y-6">
            <div>
              <Label className="mb-2 block">4:3 Aspect Ratio</Label>
              <AspectRatio ratio={4 / 3} className="bg-muted rounded-md overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm text-muted-foreground">4:3 Container</p>
                </div>
              </AspectRatio>
            </div>
            <div>
              <Label className="mb-2 block">21:9 Aspect Ratio (Ultrawide)</Label>
              <AspectRatio ratio={21 / 9} className="bg-muted rounded-md overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm text-muted-foreground">21:9 Container</p>
                </div>
              </AspectRatio>
            </div>
          </div>
        </Card>
      </div>

      {/* COMPOSED PATTERNS */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Patrones Compuestos</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sidebar Layout Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Sidebar Layout</h3>
            <p className="text-xs text-muted-foreground mb-4">Sheet + NavigationMenu</p>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sidebar</Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>
                    Navigate through the application
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6">
                  <NavigationMenu orientation="vertical">
                    <NavigationMenuList className="flex-col items-start space-y-2">
                      <NavigationMenuItem className="w-full">
                        <NavigationMenuLink href="#" className={navigationMenuTriggerStyle() + " w-full justify-start"}>
                          Dashboard
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="w-full">
                        <NavigationMenuLink href="#" className={navigationMenuTriggerStyle() + " w-full justify-start"}>
                          Projects
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="w-full">
                        <NavigationMenuLink href="#" className={navigationMenuTriggerStyle() + " w-full justify-start"}>
                          Team
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="w-full">
                        <NavigationMenuLink href="#" className={navigationMenuTriggerStyle() + " w-full justify-start"}>
                          Settings
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">Profile</Button>
                    <Button variant="ghost" className="w-full justify-start">Logout</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </Card>

          {/* Modal Form Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Modal Form</h3>
            <p className="text-xs text-muted-foreground mb-4">Dialog + Form + Button</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Create New Project</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Project</DialogTitle>
                  <DialogDescription>
                    Add a new project to your workspace
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <Label htmlFor="project-name">Project Name</Label>
                    <Input id="project-name" placeholder="My Awesome Project" />
                  </div>
                  <div>
                    <Label htmlFor="project-desc">Description</Label>
                    <Input id="project-desc" placeholder="Brief description..." />
                  </div>
                  <div>
                    <Label htmlFor="project-type">Project Type</Label>
                    <Select>
                      <SelectTrigger id="project-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web Application</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="api">API</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Create Project</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Card>

          {/* Filter Panel Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Filter Panel</h3>
            <p className="text-xs text-muted-foreground mb-4">Sheet + Checkbox + Select</p>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Options</SheetTitle>
                  <SheetDescription>
                    Refine your search results
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-6 py-6">
                  <div>
                    <Label className="mb-3 block font-medium">Category</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox id="filter-electronics" defaultChecked />
                        <Label htmlFor="filter-electronics">Electronics</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="filter-clothing" />
                        <Label htmlFor="filter-clothing">Clothing</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="filter-books" />
                        <Label htmlFor="filter-books">Books</Label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <Label htmlFor="filter-price" className="mb-3 block font-semibold">Price Range</Label>
                    <Select>
                      <SelectTrigger id="filter-price">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-50">$0 - $50</SelectItem>
                        <SelectItem value="50-100">$50 - $100</SelectItem>
                        <SelectItem value="100+">$100+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div>
                    <Label className="mb-3 block font-medium">Availability</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox id="filter-stock" defaultChecked />
                        <Label htmlFor="filter-stock">In Stock</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="filter-sale" />
                        <Label htmlFor="filter-sale">On Sale</Label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">Reset</Button>
                  <Button className="flex-1">Apply Filters</Button>
                </div>
              </SheetContent>
            </Sheet>
          </Card>
        </div>
      </div>
    </div>
  );
}