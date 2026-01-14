import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuShortcut } from "../ui/dropdown-menu";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenuCheckboxItem, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger } from "../ui/context-menu";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, ChevronDown, Plus, Settings, User, LogOut, Mail, MessageSquare, PlusCircle, Cloud, Github, LifeBuoy, Keyboard, CreditCard, Users } from "lucide-react";
import { Label } from "../ui/label";

export function ActionsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Actions</h2>
        <p className="text-sm text-muted-foreground">
          Componentes para acciones e interacciones del usuario
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Button */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Button</h3>
          <div className="flex flex-col gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </Card>

        {/* Button Sizes */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Button Sizes</h3>
          <div className="flex flex-col items-start gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Bold className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        {/* Toggle */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Toggle</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Toggle aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Label>Bold</Label>
            </div>
            <div className="flex items-center gap-2">
              <Toggle aria-label="Toggle italic" defaultPressed>
                <Italic className="h-4 w-4" />
              </Toggle>
              <Label>Italic (pressed)</Label>
            </div>
            <div className="flex items-center gap-2">
              <Toggle aria-label="Toggle underline" disabled>
                <Underline className="h-4 w-4" />
              </Toggle>
              <Label>Disabled</Label>
            </div>
          </div>
        </Card>

        {/* Toggle Group */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Toggle Group</h3>
          <div className="space-y-4">
            <div>
              <Label className="mb-2 block text-xs">Single Select</Label>
              <ToggleGroup type="single" defaultValue="center">
                <ToggleGroupItem value="left" aria-label="Align left">
                  Left
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  Center
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  Right
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <Label className="mb-2 block text-xs">Multiple Select</Label>
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
            </div>
          </div>
        </Card>

        {/* Dropdown Menu */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Dropdown Menu</h3>
          <div className="space-y-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Open Menu <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Card>

        {/* Dropdown Menu with Checkboxes */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Dropdown with Checkboxes</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">View Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>
                Activity Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Panel
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Card>

        {/* Dropdown Menu with Radio Group */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Dropdown with Radio</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Select Theme</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="light">
                <DropdownMenuRadioItem value="light">
                  Light
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">
                  Dark
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system">
                  System
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </Card>

        {/* Context Menu */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Context Menu</h3>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-md border border-dashed border-border bg-muted/50 text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
                <ContextMenuShortcut>⇧⌘P</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                Billing
                <ContextMenuShortcut>⌘B</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
                <ContextMenuShortcut>⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem checked>
                Show Sidebar
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem>
                Show Toolbar
              </ContextMenuCheckboxItem>
            </ContextMenuContent>
          </ContextMenu>
        </Card>
      </div>
    </div>
  );
}