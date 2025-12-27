import { useState } from "react";
import { ComponentShowcase } from "../ui/component-showcase";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Home,
  FileText,
  Users,
  Settings,
  BarChart3,
  DollarSign,
  Menu,
  Bell,
  Search,
  ChevronDown,
  ChevronRight,
  LogOut,
  Folder,
  FolderOpen,
  Package,
  ShoppingCart,
  CreditCard,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// Basic Desktop Sidebar
function SidebarBasic() {
  return (
    <div className="flex h-[500px] overflow-hidden rounded-lg border">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/20">
        <div className="flex h-14 items-center border-b px-6">
          <h2 className="font-semibold">C-Financia</h2>
        </div>
        <ScrollArea className="h-[calc(500px-3.5rem)]">
          <div className="space-y-1 p-4">
            <Button variant="default" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Invoices
              <Badge variant="secondary" className="ml-auto">
                12
              </Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Clients
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart3 className="mr-2 h-4 w-4" />
              Reports
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <p className="text-muted-foreground">
          Main content area goes here...
        </p>
      </div>
    </div>
  );
}

// Sidebar with Sections
function SidebarSections() {
  return (
    <div className="flex h-[500px] overflow-hidden rounded-lg border">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/20">
        <div className="flex h-14 items-center border-b px-6">
          <h2 className="font-semibold">C-Financia</h2>
        </div>
        <ScrollArea className="h-[calc(500px-3.5rem)]">
          <div className="space-y-4 p-4">
            {/* Main Section */}
            <div className="space-y-1">
              <p className="text-xs font-semibold text-muted-foreground px-3 mb-2">
                MAIN
              </p>
              <Button variant="default" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Operations
                <Badge variant="secondary" className="ml-auto">
                  8
                </Badge>
              </Button>
            </div>

            <Separator />

            {/* Management Section */}
            <div className="space-y-1">
              <p className="text-xs font-semibold text-muted-foreground px-3 mb-2">
                MANAGEMENT
              </p>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Clients
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <DollarSign className="mr-2 h-4 w-4" />
                Financing
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <BarChart3 className="mr-2 h-4 w-4" />
                Analytics
              </Button>
            </div>

            <Separator />

            {/* Settings Section */}
            <div className="space-y-1">
              <p className="text-xs font-semibold text-muted-foreground px-3 mb-2">
                SYSTEM
              </p>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">Active Operations</h3>
            <p className="text-3xl font-bold">24</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">Total Revenue</h3>
            <p className="text-3xl font-bold">$145,230</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sidebar with Header
function SidebarWithHeader() {
  return (
    <div className="flex h-[500px] flex-col overflow-hidden rounded-lg border">
      {/* Top Header */}
      <div className="flex h-14 items-center justify-between border-b px-6">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold">C-Financia</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src="/placeholder.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                John Doe
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 border-r bg-muted/20">
          <ScrollArea className="h-full">
            <div className="space-y-1 p-4">
              <Button variant="default" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Invoices
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Clients
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <BarChart3 className="mr-2 h-4 w-4" />
                Reports
              </Button>
            </div>
          </ScrollArea>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-6">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <p className="text-muted-foreground">
            Content with top navigation and sidebar
          </p>
        </div>
      </div>
    </div>
  );
}

// Mobile Responsive Sidebar
function SidebarMobile() {
  return (
    <div className="h-[500px] flex flex-col overflow-hidden rounded-lg border">
      {/* Mobile Header */}
      <div className="flex h-14 items-center justify-between border-b px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex h-14 items-center border-b px-6">
              <h2 className="font-semibold">C-Financia</h2>
            </div>
            <ScrollArea className="h-[calc(100vh-3.5rem)]">
              <div className="space-y-1 p-4">
                <Button variant="default" className="w-full justify-start">
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Invoices
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Clients
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Reports
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        <h2 className="font-semibold">Dashboard</h2>

        <Button variant="ghost" size="sm">
          <Bell className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Content */}
      <div className="flex-1 overflow-auto p-4">
        <p className="text-muted-foreground">
          Mobile layout with hamburger menu. Click the menu icon to open the sidebar.
        </p>
      </div>
    </div>
  );
}

// Collapsible Sidebar
function SidebarCollapsible() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-[500px] overflow-hidden rounded-lg border">
      {/* Sidebar */}
      <div className={`border-r bg-muted/20 transition-all ${collapsed ? "w-16" : "w-64"}`}>
        <div className="flex h-14 items-center justify-between border-b px-4">
          {!collapsed && <h2 className="font-semibold">C-Financia</h2>}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(500px-3.5rem)]">
          <div className="space-y-1 p-2">
            <Button
              variant="default"
              className={`w-full ${collapsed ? "justify-center px-0" : "justify-start"}`}
              title="Dashboard"
            >
              <Home className={`h-4 w-4 ${!collapsed && "mr-2"}`} />
              {!collapsed && "Dashboard"}
            </Button>
            <Button
              variant="ghost"
              className={`w-full ${collapsed ? "justify-center px-0" : "justify-start"}`}
              title="Invoices"
            >
              <FileText className={`h-4 w-4 ${!collapsed && "mr-2"}`} />
              {!collapsed && "Invoices"}
            </Button>
            <Button
              variant="ghost"
              className={`w-full ${collapsed ? "justify-center px-0" : "justify-start"}`}
              title="Clients"
            >
              <Users className={`h-4 w-4 ${!collapsed && "mr-2"}`} />
              {!collapsed && "Clients"}
            </Button>
            <Button
              variant="ghost"
              className={`w-full ${collapsed ? "justify-center px-0" : "justify-start"}`}
              title="Reports"
            >
              <BarChart3 className={`h-4 w-4 ${!collapsed && "mr-2"}`} />
              {!collapsed && "Reports"}
            </Button>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <p className="text-muted-foreground">
          Click the menu icon to toggle sidebar collapse
        </p>
      </div>
    </div>
  );
}

// Modern Sidebar with Nested Sub-Items
function SidebarModernNested() {
  const [openSections, setOpenSections] = useState<string[]>(["products"]);
  const [activeItem, setActiveItem] = useState("dashboard");

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="flex h-[600px] overflow-hidden rounded-lg border">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/20">
        <div className="flex h-14 items-center border-b px-6">
          <h2 className="font-semibold">C-Financia</h2>
        </div>
        <ScrollArea className="h-[calc(600px-3.5rem)]">
          <div className="space-y-1 p-3">
            {/* Simple Item */}
            <Button
              variant={activeItem === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveItem("dashboard")}
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>

            {/* Collapsible Section: Products */}
            <Collapsible
              open={openSections.includes("products")}
              onOpenChange={() => toggleSection("products")}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-foreground"
                >
                  <Package className="mr-2 h-4 w-4" />
                  <span className="font-semibold">Products</span>
                  <ChevronRight
                    className={`ml-auto h-4 w-4 transition-all duration-200 ${
                      openSections.includes("products")
                        ? "rotate-90 text-primary"
                        : ""
                    }`}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-1">
                <div className="ml-3 border-l-2 border-primary/30 pl-3 space-y-1">
                  <Button
                    variant={activeItem === "all-products" ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start text-sm ${
                      activeItem === "all-products"
                        ? "border-l-2 border-primary bg-primary/10"
                        : "border-l-2 border-transparent"
                    }`}
                    onClick={() => setActiveItem("all-products")}
                  >
                    All Products
                  </Button>
                  <Button
                    variant={activeItem === "categories" ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start text-sm ${
                      activeItem === "categories"
                        ? "border-l-2 border-primary bg-primary/10"
                        : "border-l-2 border-transparent"
                    }`}
                    onClick={() => setActiveItem("categories")}
                  >
                    Categories
                  </Button>
                  <Button
                    variant={activeItem === "inventory" ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start text-sm ${
                      activeItem === "inventory"
                        ? "border-l-2 border-primary bg-primary/10"
                        : "border-l-2 border-transparent"
                    }`}
                    onClick={() => setActiveItem("inventory")}
                  >
                    Inventory
                    <Badge variant="secondary" className="ml-auto">
                      24
                    </Badge>
                  </Button>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Collapsible Section: Orders */}
            <Collapsible
              open={openSections.includes("orders")}
              onOpenChange={() => toggleSection("orders")}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-foreground"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  <span className="font-semibold">Orders</span>
                  <ChevronRight
                    className={`ml-auto h-4 w-4 transition-all duration-200 ${
                      openSections.includes("orders")
                        ? "rotate-90 text-primary"
                        : ""
                    }`}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-1">
                <div className="ml-3 border-l-2 border-primary/30 pl-3 space-y-1">
                  <Button
                    variant={activeItem === "pending-orders" ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start text-sm ${
                      activeItem === "pending-orders"
                        ? "border-l-2 border-primary bg-primary/10"
                        : "border-l-2 border-transparent"
                    }`}
                    onClick={() => setActiveItem("pending-orders")}
                  >
                    Pending
                    <Badge variant="default" className="ml-auto bg-primary">
                      8
                    </Badge>
                  </Button>
                  <Button
                    variant={activeItem === "completed-orders" ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start text-sm ${
                      activeItem === "completed-orders"
                        ? "border-l-2 border-primary bg-primary/10"
                        : "border-l-2 border-transparent"
                    }`}
                    onClick={() => setActiveItem("completed-orders")}
                  >
                    Completed
                  </Button>
                  <Button
                    variant={activeItem === "cancelled-orders" ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start text-sm ${
                      activeItem === "cancelled-orders"
                        ? "border-l-2 border-primary bg-primary/10"
                        : "border-l-2 border-transparent"
                    }`}
                    onClick={() => setActiveItem("cancelled-orders")}
                  >
                    Cancelled
                  </Button>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Collapsible Section: Payments */}
            <Collapsible
              open={openSections.includes("payments")}
              onOpenChange={() => toggleSection("payments")}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-foreground"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span className="font-semibold">Payments</span>
                  <ChevronRight
                    className={`ml-auto h-4 w-4 transition-all duration-200 ${
                      openSections.includes("payments")
                        ? "rotate-90 text-primary"
                        : ""
                    }`}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-1">
                <div className="ml-3 border-l-2 border-primary/30 pl-3 space-y-1">
                  <Button
                    variant={activeItem === "transactions" ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start text-sm ${
                      activeItem === "transactions"
                        ? "border-l-2 border-primary bg-primary/10"
                        : "border-l-2 border-transparent"
                    }`}
                    onClick={() => setActiveItem("transactions")}
                  >
                    Transactions
                  </Button>
                  <Button
                    variant={activeItem === "invoices" ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start text-sm ${
                      activeItem === "invoices"
                        ? "border-l-2 border-primary bg-primary/10"
                        : "border-l-2 border-transparent"
                    }`}
                    onClick={() => setActiveItem("invoices")}
                  >
                    Invoices
                  </Button>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Separator className="my-2" />

            {/* Simple Items */}
            <Button
              variant={activeItem === "analytics" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveItem("analytics")}
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Analytics
            </Button>
            <Button
              variant={activeItem === "settings" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveItem("settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4 capitalize">
          {activeItem.replace("-", " ")}
        </h1>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Modern sidebar with nested sub-items using Collapsible component. Features:
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Clean hierarchical structure with left border accent</li>
            <li>Smooth chevron rotation animations</li>
            <li>Active state highlighting with primary color</li>
            <li>Click to expand/collapse sections</li>
            <li>Notification badges on items</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// WordPress-Style Sidebar with Hover Flyout
function SidebarWordPressStyle() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <div className="flex h-[600px] overflow-hidden rounded-lg border">
      {/* Sidebar */}
      <div
        className={`border-r bg-muted/20 transition-all duration-300 ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b px-4">
          {!collapsed && <h2 className="font-semibold">C-Financia</h2>}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className={!collapsed ? "ml-auto" : ""}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(600px-3.5rem)]">
          <div className="p-2 space-y-1">
            {/* Dashboard */}
            <Button
              variant={activeItem === "dashboard" ? "default" : "ghost"}
              className={`w-full ${
                collapsed ? "justify-center px-2" : "justify-start"
              }`}
              onClick={() => setActiveItem("dashboard")}
              title={collapsed ? "Dashboard" : ""}
            >
              <Home className={`h-4 w-4 ${!collapsed && "mr-2"}`} />
              {!collapsed && "Dashboard"}
            </Button>

            {/* Products with Submenu */}
            <div className="group relative">
              <Button
                variant="ghost"
                className={`w-full ${
                  collapsed ? "justify-center px-2" : "justify-start"
                }`}
                title={collapsed ? "Products" : ""}
              >
                <Package className={`h-4 w-4 ${!collapsed && "mr-2"}`} />
                {!collapsed && (
                  <>
                    <span className="font-semibold">Products</span>
                    <ChevronRight className="ml-auto h-4 w-4" />
                  </>
                )}
              </Button>

              {/* Flyout Submenu */}
              {!collapsed ? (
                <div className="hidden group-hover:block">
                  <div className="ml-8 mt-1 space-y-1">
                    <Button
                      variant={activeItem === "all-products" ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start text-sm"
                      onClick={() => setActiveItem("all-products")}
                    >
                      All Products
                    </Button>
                    <Button
                      variant={activeItem === "categories" ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start text-sm"
                      onClick={() => setActiveItem("categories")}
                    >
                      Categories
                    </Button>
                    <Button
                      variant={activeItem === "inventory" ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start text-sm"
                      onClick={() => setActiveItem("inventory")}
                    >
                      Inventory
                      <Badge variant="secondary" className="ml-auto">
                        24
                      </Badge>
                    </Button>
                  </div>
                </div>
              ) : (
                /* Collapsed Flyout */
                <div className="absolute left-full top-0 ml-2 hidden group-hover:block z-50">
                  <div className="rounded-lg border bg-popover p-2 shadow-lg min-w-[200px]">
                    <p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                      PRODUCTS
                    </p>
                    <div className="space-y-1">
                      <Button
                        variant={activeItem === "all-products" ? "default" : "ghost"}
                        size="sm"
                        className="w-full justify-start text-sm"
                        onClick={() => setActiveItem("all-products")}
                      >
                        All Products
                      </Button>
                      <Button
                        variant={activeItem === "categories" ? "default" : "ghost"}
                        size="sm"
                        className="w-full justify-start text-sm"
                        onClick={() => setActiveItem("categories")}
                      >
                        Categories
                      </Button>
                      <Button
                        variant={activeItem === "inventory" ? "default" : "ghost"}
                        size="sm"
                        className="w-full justify-start text-sm"
                        onClick={() => setActiveItem("inventory")}
                      >
                        Inventory
                        <Badge variant="secondary" className="ml-auto">
                          24
                        </Badge>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Orders with Submenu */}
            <div className="group relative">
              <Button
                variant="ghost"
                className={`w-full ${
                  collapsed ? "justify-center px-2" : "justify-start"
                }`}
                title={collapsed ? "Orders" : ""}
              >
                <ShoppingCart className={`h-4 w-4 ${!collapsed && "mr-2"}`} />
                {!collapsed && (
                  <>
                    <span className="font-semibold">Orders</span>
                    <Badge variant="default" className="ml-auto bg-primary">
                      8
                    </Badge>
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
                {collapsed && (
                  <Badge
                    variant="default"
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] bg-primary"
                  >
                    8
                  </Badge>
                )}
              </Button>

              {/* Flyout Submenu */}
              {!collapsed ? (
                <div className="hidden group-hover:block">
                  <div className="ml-8 mt-1 space-y-1">
                    <Button
                      variant={activeItem === "pending-orders" ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start text-sm"
                      onClick={() => setActiveItem("pending-orders")}
                    >
                      Pending
                      <Badge variant="default" className="ml-auto bg-primary">
                        8
                      </Badge>
                    </Button>
                    <Button
                      variant={activeItem === "completed-orders" ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start text-sm"
                      onClick={() => setActiveItem("completed-orders")}
                    >
                      Completed
                    </Button>
                    <Button
                      variant={activeItem === "cancelled-orders" ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start text-sm"
                      onClick={() => setActiveItem("cancelled-orders")}
                    >
                      Cancelled
                    </Button>
                  </div>
                </div>
              ) : (
                /* Collapsed Flyout */
                <div className="absolute left-full top-0 ml-2 hidden group-hover:block z-50">
                  <div className="rounded-lg border bg-popover p-2 shadow-lg min-w-[200px]">
                    <p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                      ORDERS
                    </p>
                    <div className="space-y-1">
                      <Button
                        variant={activeItem === "pending-orders" ? "default" : "ghost"}
                        size="sm"
                        className="w-full justify-start text-sm"
                        onClick={() => setActiveItem("pending-orders")}
                      >
                        Pending
                        <Badge variant="default" className="ml-auto bg-primary">
                          8
                        </Badge>
                      </Button>
                      <Button
                        variant={activeItem === "completed-orders" ? "default" : "ghost"}
                        size="sm"
                        className="w-full justify-start text-sm"
                        onClick={() => setActiveItem("completed-orders")}
                      >
                        Completed
                      </Button>
                      <Button
                        variant={activeItem === "cancelled-orders" ? "default" : "ghost"}
                        size="sm"
                        className="w-full justify-start text-sm"
                        onClick={() => setActiveItem("cancelled-orders")}
                      >
                        Cancelled
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Payments with Submenu */}
            <div className="group relative">
              <Button
                variant="ghost"
                className={`w-full ${
                  collapsed ? "justify-center px-2" : "justify-start"
                }`}
                title={collapsed ? "Payments" : ""}
              >
                <CreditCard className={`h-4 w-4 ${!collapsed && "mr-2"}`} />
                {!collapsed && (
                  <>
                    <span className="font-semibold">Payments</span>
                    <ChevronRight className="ml-auto h-4 w-4" />
                  </>
                )}
              </Button>

              {/* Flyout Submenu */}
              {!collapsed ? (
                <div className="hidden group-hover:block">
                  <div className="ml-8 mt-1 space-y-1">
                    <Button
                      variant={activeItem === "transactions" ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start text-sm"
                      onClick={() => setActiveItem("transactions")}
                    >
                      Transactions
                    </Button>
                    <Button
                      variant={activeItem === "invoices" ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start text-sm"
                      onClick={() => setActiveItem("invoices")}
                    >
                      Invoices
                    </Button>
                  </div>
                </div>
              ) : (
                /* Collapsed Flyout */
                <div className="absolute left-full top-0 ml-2 hidden group-hover:block z-50">
                  <div className="rounded-lg border bg-popover p-2 shadow-lg min-w-[200px]">
                    <p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                      PAYMENTS
                    </p>
                    <div className="space-y-1">
                      <Button
                        variant={activeItem === "transactions" ? "default" : "ghost"}
                        size="sm"
                        className="w-full justify-start text-sm"
                        onClick={() => setActiveItem("transactions")}
                      >
                        Transactions
                      </Button>
                      <Button
                        variant={activeItem === "invoices" ? "default" : "ghost"}
                        size="sm"
                        className="w-full justify-start text-sm"
                        onClick={() => setActiveItem("invoices")}
                      >
                        Invoices
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {!collapsed && <Separator className="my-2" />}

            {/* Analytics */}
            <Button
              variant={activeItem === "analytics" ? "default" : "ghost"}
              className={`w-full ${
                collapsed ? "justify-center px-2" : "justify-start"
              }`}
              onClick={() => setActiveItem("analytics")}
              title={collapsed ? "Analytics" : ""}
            >
              <BarChart3 className={`h-4 w-4 ${!collapsed && "mr-2"}`} />
              {!collapsed && "Analytics"}
            </Button>

            {/* Settings */}
            <Button
              variant={activeItem === "settings" ? "default" : "ghost"}
              className={`w-full ${
                collapsed ? "justify-center px-2" : "justify-start"
              }`}
              onClick={() => setActiveItem("settings")}
              title={collapsed ? "Settings" : ""}
            >
              <Settings className={`h-4 w-4 ${!collapsed && "mr-2"}`} />
              {!collapsed && "Settings"}
            </Button>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4 capitalize">
          {activeItem.replace("-", " ")}
        </h1>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            WordPress-style sidebar with hover flyout menus. Features:
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Hover to reveal sub-menus (no click required)</li>
            <li>Collapsible sidebar with icon-only mode</li>
            <li>Flyout panels for sub-items when collapsed</li>
            <li>Badges visible in both modes</li>
            <li>Familiar WordPress dashboard UX pattern</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SidebarLayoutPage() {
  const previewCode = `<div className="flex h-screen">
  {/* Sidebar */}
  <div className="w-64 border-r bg-muted/20">
    <div className="flex h-14 items-center border-b px-6">
      <h2 className="font-semibold">C-Financia</h2>
    </div>
    <ScrollArea className="h-[calc(100vh-3.5rem)]">
      <div className="space-y-1 p-4">
        <Button variant="default" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <FileText className="mr-2 h-4 w-4" />
          Invoices
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Users className="mr-2 h-4 w-4" />
          Clients
        </Button>
      </div>
    </ScrollArea>
  </div>

  {/* Main Content */}
  <div className="flex-1 p-6">
    <h1>Dashboard</h1>
    <p>Main content goes here...</p>
  </div>
</div>`;

  const usageCode = `import { SidebarLayout } from "./components/patterns/sidebar-layout";

function App() {
  return (
    <SidebarLayout
      navigation={[
        { id: "dashboard", label: "Dashboard", icon: Home },
        { id: "invoices", label: "Invoices", icon: FileText },
        { id: "clients", label: "Clients", icon: Users },
      ]}
      currentPage="dashboard"
      onNavigate={(pageId) => router.push(\`/\${pageId}\`)}
    >
      <DashboardContent />
    </SidebarLayout>
  );
}`;

  return (
    <ComponentShowcase
      title="Sidebar Layout"
      description="Application layout with fixed sidebar navigation for desktop and mobile-responsive drawer"
      category="Factoring Patterns"
      preview={<SidebarBasic />}
      code={previewCode}
      usage="Sidebar Layout combines multiple components (ScrollArea, Button, Sheet, Badge) to create a responsive navigation pattern. It provides a fixed sidebar on desktop for easy access to primary navigation, and automatically switches to a mobile-friendly drawer on smaller screens."
      usageCode={usageCode}
      props={[
        {
          name: "navigation",
          type: "NavigationItem[]",
          default: "[]",
          description: "Array of navigation menu items",
          required: true,
        },
        {
          name: "currentPage",
          type: "string",
          default: "undefined",
          description: "Currently active page ID",
          required: false,
        },
        {
          name: "onNavigate",
          type: "(pageId: string) => void",
          default: "undefined",
          description: "Callback when navigation item is clicked",
          required: false,
        },
        {
          name: "collapsible",
          type: "boolean",
          default: "false",
          description: "Enable sidebar collapse functionality",
          required: false,
        },
        {
          name: "showBadges",
          type: "boolean",
          default: "false",
          description: "Show notification badges on nav items",
          required: false,
        },
      ]}
      examples={[
        {
          title: "With Sections",
          description: "Sidebar with organized sections and separators",
          preview: <SidebarSections />,
          code: `<div className="space-y-4 p-4">
  {/* Main Section */}
  <div className="space-y-1">
    <p className="text-xs font-semibold text-muted-foreground px-3">MAIN</p>
    <Button variant="default" className="w-full justify-start">
      <Home className="mr-2 h-4 w-4" />
      Dashboard
    </Button>
  </div>

  <Separator />

  {/* Management Section */}
  <div className="space-y-1">
    <p className="text-xs font-semibold text-muted-foreground px-3">MANAGEMENT</p>
    <Button variant="ghost" className="w-full justify-start">
      <Users className="mr-2 h-4 w-4" />
      Clients
    </Button>
  </div>
</div>`,
        },
        {
          title: "With Top Header",
          description: "Sidebar layout with top navigation header and user menu",
          preview: <SidebarWithHeader />,
          code: `<div className="flex flex-col h-screen">
  {/* Top Header */}
  <div className="flex h-14 items-center justify-between border-b px-6">
    <h2 className="font-semibold">C-Financia</h2>
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm">
        <Bell className="h-4 w-4" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            John Doe
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>

  <div className="flex flex-1">
    {/* Sidebar */}
    <div className="w-64 border-r">...</div>
    {/* Content */}
    <div className="flex-1">...</div>
  </div>
</div>`,
        },
        {
          title: "Mobile Responsive",
          description: "Sidebar that converts to drawer menu on mobile using Sheet",
          preview: <SidebarMobile />,
          code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="sm">
      <Menu className="h-5 w-5" />
    </Button>
  </SheetTrigger>
  <SheetContent side="left" className="w-64 p-0">
    <div className="flex h-14 items-center border-b px-6">
      <h2 className="font-semibold">C-Financia</h2>
    </div>
    <ScrollArea className="h-[calc(100vh-3.5rem)]">
      <div className="space-y-1 p-4">
        <Button variant="default" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        {/* More nav items... */}
      </div>
    </ScrollArea>
  </SheetContent>
</Sheet>`,
        },
        {
          title: "Collapsible Sidebar",
          description: "Sidebar that can be collapsed to show only icons",
          preview: <SidebarCollapsible />,
          code: `const [collapsed, setCollapsed] = useState(false);

<div className={\`border-r transition-all \${collapsed ? "w-16" : "w-64"}\`}>
  <div className="flex h-14 items-center justify-between border-b px-4">
    {!collapsed && <h2 className="font-semibold">C-Financia</h2>}
    <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)}>
      <Menu className="h-4 w-4" />
    </Button>
  </div>
  <div className="space-y-1 p-2">
    <Button
      variant="default"
      className={\`w-full \${collapsed ? "justify-center px-0" : "justify-start"}\`}
      title="Dashboard"
    >
      <Home className={\`h-4 w-4 \${!collapsed && "mr-2"}\`} />
      {!collapsed && "Dashboard"}
    </Button>
  </div>
</div>`,
        },
        {
          title: "Modern Nested Sub-Items",
          description: "Sidebar with nested sub-items using Collapsible component",
          preview: <SidebarModernNested />,
          code: `// Modern Nested Sidebar
const [openSections, setOpenSections] = useState(['products']);
const [activeItem, setActiveItem] = useState('dashboard');

<Collapsible
  open={openSections.includes('products')}
  onOpenChange={() => toggleSection('products')}
>
  <CollapsibleTrigger asChild>
    <Button variant="ghost" className="w-full justify-start">
      <Package className="mr-2 h-4 w-4" />
      <span className="font-semibold">Products</span>
      <ChevronRight className="ml-auto h-4 w-4 transition-all duration-200" />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent className="mt-1">
    <div className="ml-3 border-l-2 border-primary/30 pl-3 space-y-1">
      <Button
        variant="ghost"
        size="sm"
        className="w-full justify-start text-sm"
        onClick={() => setActiveItem('all-products')}
      >
        All Products
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="w-full justify-start text-sm"
      >
        Categories
      </Button>
      <Button size="sm" className="w-full justify-start text-sm">
        Inventory
        <Badge variant="secondary" className="ml-auto">24</Badge>
      </Button>
    </div>
  </CollapsibleContent>
</Collapsible>`,
        },
        {
          title: "WordPress-Style Flyout",
          description: "Sidebar with hover flyout menus",
          preview: <SidebarWordPressStyle />,
          code: `// WordPress-Style Sidebar
const [collapsed, setCollapsed] = useState(false);
const [activeItem, setActiveItem] = useState('dashboard');

// Products with Flyout Submenu
<div className="group relative">
  <Button variant="ghost" className="w-full justify-start">
    <Package className="mr-2 h-4 w-4" />
    <span className="font-semibold">Products</span>
    <ChevronRight className="ml-auto h-4 w-4" />
  </Button>

  {/* Flyout on hover */}
  <div className="hidden group-hover:block">
    <div className="ml-8 mt-1 space-y-1">
      <Button size="sm" className="w-full justify-start text-sm">
        All Products
      </Button>
      <Button size="sm" className="w-full justify-start text-sm">
        Categories
      </Button>
      <Button size="sm" className="w-full justify-start text-sm">
        Inventory
        <Badge variant="secondary" className="ml-auto">24</Badge>
      </Button>
    </div>
  </div>

  {/* Collapsed Flyout */}
  {collapsed && (
    <div className="absolute left-full top-0 ml-2 hidden group-hover:block z-50">
      <div className="rounded-lg border bg-popover p-2 shadow-lg min-w-[200px]">
        <p className="px-3 py-1.5 text-xs font-semibold">PRODUCTS</p>
        <div className="space-y-1">
          <Button size="sm" className="w-full justify-start text-sm">
            All Products
          </Button>
        </div>
      </div>
    </div>
  )}
</div>`,
        },
      ]}
    />
  );
}