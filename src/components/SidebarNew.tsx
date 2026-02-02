import { 
  MousePointerClick, 
  FormInput, 
  Compass, 
  Grid3x3, 
  MessageSquare, 
  LayoutGrid,
  Layers,
  Atom,
  Scale,
  Sparkles,
  CheckCircle,
  ChevronRight,
  Accessibility,
  Palette,
  Paintbrush,
  Zap,
  Home,
  TrendingUp,
  Search,
  PanelLeft,
  X,
  Briefcase,
  Box,
  Clapperboard,
  ImageIcon,
  BookOpen
} from "lucide-react";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  useSidebar,
} from "./ui/sidebar";
import { Badge } from "./ui/badge";
import { Logo } from "./Logo";

// ⚠️ CRITICAL: PageId es la FUENTE DE VERDAD de todos los IDs de página
// ⚠️ ANTES DE MODIFICAR: Leer /DSM_ARCHITECTURE.md sección "MAPA COMPLETO DE PageId"
// ⚠️ Cada PageId DEBE tener:
//    1. Caso en PageRenderer.tsx (switch statement)
//    2. Import del componente en PageRenderer.tsx
//    3. Item en menuSections array (abajo en línea 102+)
// ⚠️ NO eliminar PageId sin buscar TODAS las referencias (Ctrl+F)
export type PageId =
  // Home
  | "home" | "dsm-dashboard"
  // Actions
  | "button" | "button-new" | "toggle" | "toggle-group"
  // Forms
  | "input" | "input-new" | "input-file" | "select" | "select-new" | "checkbox" | "checkbox-new" | "radio-group" | "switch" | "slider" 
  | "textarea" | "textarea-new" | "textarea-autoresize" | "calendar" | "calendar-new" | "form" | "form-new" | "input-otp" | "input-otp-new" | "label" | "combobox" | "combobox-new" | "multi-select" | "date-picker" | "date-picker-new" | "date-range-picker"
  // Navigation
  | "tabs" | "tabs-new" | "breadcrumb" | "command" | "dropdown-menu" | "menubar" 
  | "navigation-menu" | "pagination" | "context-menu"
  // Data Display
  | "card" | "card-new" | "table" | "table-new" | "badge" | "badge-new" | "avatar" | "hover-card" | "separator"
  // Feedback
  | "alert" | "alert-new" | "alert-dialog" | "dialog" | "dialog-new" | "toast" | "tooltip" | "progress" 
  | "skeleton" | "sheet" | "drawer" | "popover"
  // Layout
  | "accordion" | "carousel" | "collapsible" | "resizable" | "scroll-area" | "sidebar-showcase"
  // Patterns
  | "invoice-generator" | "payment-form" | "editable-table" | "invoice-upload"
  | "stats-dashboard" | "quick-action" | "data-table-advanced" | "advanced-filter" | "approval-timeline" | "multi-step-wizard" | "multi-step-form" | "multi-step-form-vertical" | "multi-step-wizard-vertical"
  // Widgets
  | "widgets-library"
  | "widget-stat-card"
  | "widget-search-bar"
  | "widget-filter-bar"
  | "widget-navigation"
  | "widget-timeline"
  
  // Advanced
  | "charts" | "color-picker" | "rating" | "kanban" | "date-range-advanced" | "file-uploader" | "rich-text-editor" | "timeline" | "data-table" | "tree-table" | "pivot-table" | "export-data"
  // Business Components (High Priority)
  | "business-components"
  // Data Visualization (Medium Priority)
  | "data-visualization"
  // Advanced Forms (Medium Priority)
  | "advanced-forms"
  // Special
  | "accessibility" | "brand-layout" | "theme-customizer" | "elevation" | "grid-showcase" | "help-system-demo" | "animations" | "animation-system" | "icon-gallery" | "changelog"
  // New Patterns
  | "activity-feed" | "user-profile" | "comment-thread" | "pricing-table" | "comparison-table" | "search-results" | "empty-state" | "loading-states" | "error-boundary" | "bottom-sheet" | "fab" | "split-button"
  // New Business
  | "liquidity-meter-component" | "risk-indicator" | "rate-display" | "invoice-card" | "payor-card" | "cash-flow-projection" | "collection-timeline" | "doc-verification"
  // New Advanced
  | "sankey-diagram" | "gantt-chart" | "org-chart" | "virtualized-list" | "infinite-scroll" | "masonry-grid" | "transfer-list"
  // Business Components (Old)
  | "audit-log" | "testimonials" | "contact-form" | "notification-center"
  // Pages (Real Pages)
  | "factoring-selection" | "factoring-dashboard" | "operations-list" | "approval-flow" | "kpi-showcase"
  // C-Financia Platform
  | "liquidity-calculator" | "onboarding" | "cf-dashboard" | "admin-portal";

interface SidebarProps extends React.ComponentProps<typeof Sidebar> {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
}

interface MenuItem {
  id: PageId;
  label: string;
}

interface MenuSection {
  id: string;
  label: string;
  icon: React.ElementType;
  count?: number;
  items: MenuItem[];
}

export function SidebarNew({ activePage, onPageChange, ...props }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { toggleSidebar } = useSidebar();

  const menuSections: MenuSection[] = [
    {
      id: "actions",
      label: "Actions",
      icon: MousePointerClick,
      count: 3,
      items: [
        { id: "button", label: "Button" },
        { id: "toggle", label: "Toggle" },
        { id: "toggle-group", label: "Toggle Group" },
      ],
    },
    {
      id: "forms",
      label: "Forms",
      icon: FormInput,
      count: 17,
      items: [
        { id: "input-new", label: "Input" },
        { id: "input-file", label: "Input File" },
        { id: "textarea-new", label: "Textarea" },
        { id: "textarea-autoresize", label: "Textarea Autoresize" },
        { id: "select-new", label: "Select" },
        { id: "checkbox-new", label: "Checkbox" },
        { id: "radio-group", label: "Radio Group" },
        { id: "switch", label: "Switch" },
        { id: "slider", label: "Slider" },
        { id: "calendar-new", label: "Calendar" },
        { id: "date-picker-new", label: "Date Picker" },
        { id: "date-range-picker", label: "Date Range Picker" },
        { id: "combobox-new", label: "Combobox" },
        { id: "multi-select", label: "Multi Select" },
        { id: "form-new", label: "Form" },
        { id: "input-otp-new", label: "Input OTP" },
        { id: "label", label: "Label" },
      ],
    },
    {
      id: "navigation",
      label: "Navigation",
      icon: Compass,
      count: 8,
      items: [
        { id: "tabs-new", label: "Tabs" },
        { id: "breadcrumb", label: "Breadcrumb" },
        { id: "command", label: "Command" },
        { id: "dropdown-menu", label: "Dropdown Menu" },
        { id: "menubar", label: "Menubar" },
        { id: "navigation-menu", label: "Navigation Menu" },
        { id: "pagination", label: "Pagination" },
        { id: "context-menu", label: "Context Menu" },
      ],
    },
    {
      id: "data-display",
      label: "Data Display",
      icon: Grid3x3,
      count: 6,
      items: [
        { id: "card-new", label: "Card" },
        { id: "table-new", label: "Table" },
        { id: "badge-new", label: "Badge" },
        { id: "avatar", label: "Avatar" },
        { id: "hover-card", label: "Hover Card" },
        { id: "separator", label: "Separator" },
      ],
    },
    {
      id: "feedback",
      label: "Feedback",
      icon: MessageSquare,
      count: 10,
      items: [
        { id: "alert-new", label: "Alert" },
        { id: "alert-dialog", label: "Alert Dialog" },
        { id: "dialog-new", label: "Dialog" },
        { id: "toast", label: "Toast (Sonner)" },
        { id: "tooltip", label: "Tooltip" },
        { id: "progress", label: "Progress" },
        { id: "skeleton", label: "Skeleton" },
        { id: "sheet", label: "Sheet" },
        { id: "drawer", label: "Drawer" },
        { id: "popover", label: "Popover" },
      ],
    },
    {
      id: "layout",
      label: "Layout",
      icon: LayoutGrid,
      count: 7,
      items: [
        { id: "accordion", label: "Accordion" },
        { id: "carousel", label: "Carousel" },
        { id: "collapsible", label: "Collapsible" },
        { id: "resizable", label: "Resizable" },
        { id: "scroll-area", label: "Scroll Area" },
        { id: "sidebar-showcase", label: "Sidebar" },
        { id: "grid-showcase", label: "Grid Showcase" },
      ],
    },
    {
      id: "patterns",
      label: "Business Patterns",
      icon: Layers,
      count: 21,
      items: [
        { id: "invoice-generator", label: "Invoice Generator" },
        { id: "invoice-upload", label: "Carga de Facturas" },
        { id: "payment-form", label: "Payment Form" },
        { id: "editable-table", label: "Editable Table" },
        { id: "stats-dashboard", label: "Stats Dashboard" },
        { id: "quick-action", label: "Quick Action Toolbar" },
        { id: "data-table-advanced", label: "Data Table Advanced" },
        { id: "advanced-filter", label: "Advanced Filter Panel" },
        { id: "approval-timeline", label: "Approval Timeline" },
        { id: "multi-step-wizard", label: "Multi-Step Wizard" },
        { id: "multi-step-form", label: "Multi-Step Form" },
        { id: "multi-step-form-vertical", label: "Multi-Step Form Vertical" },
        { id: "multi-step-wizard-vertical", label: "Multi-Step Wizard Vertical" },
        { id: "activity-feed", label: "Activity Feed" },
        { id: "comment-thread", label: "Comment Thread" },
        { id: "pricing-table", label: "Pricing Table" },
        { id: "comparison-table", label: "Comparison Table" },
        { id: "search-results", label: "Search Results" },
        { id: "user-profile", label: "User Profile" },
        { id: "empty-state", label: "Empty State" },
        { id: "loading-states", label: "Loading States" },
        { id: "error-boundary", label: "Error Boundary" },
        { id: "bottom-sheet", label: "Bottom Sheet" },
        { id: "notification-center", label: "Notification Center" },
        { id: "fab", label: "Floating Action Button" },
        { id: "split-button", label: "Split Button" },
      ],
    },
    {
      id: "business",
      label: "Business Modules",
      icon: Briefcase,
      count: 10,
      items: [
        { id: "cf-dashboard", label: "Dashboard Principal" },
        { id: "admin-portal", label: "Portal Administrativo" },
        { id: "factoring-dashboard", label: "Factoring Dashboard" },
        { id: "operations-list", label: "Operations List" },
        { id: "factoring-selection", label: "Invoice Selection" },
        { id: "approval-flow", label: "Approval Flow" },
        { id: "kpi-showcase", label: "KPI Showcase" },
        { id: "liquidity-calculator", label: "Calculadora Liquidez" },
        { id: "onboarding", label: "Onboarding" },
      ],
    },
    /*
    {
      id: "atomic",
      label: "Atomic Design",
      icon: Atom,
      count: 5,
      items: [
        { id: "atomic-atoms", label: "Atoms" },
        { id: "atomic-molecules", label: "Molecules" },
        { id: "atomic-organisms", label: "Organisms" },
        { id: "atomic-templates", label: "Templates" },
        { id: "atomic-pages", label: "Pages" },
      ],
    },
    */

    {
      id: "advanced",
      label: "Advanced",
      icon: Sparkles,
      count: 14,
      items: [
        { id: "charts", label: "Charts" },
        { id: "data-visualization", label: "Data Visualization" },
        { id: "advanced-forms", label: "Advanced Forms" },
        { id: "data-table", label: "Data Table" },
        { id: "tree-table", label: "Tree Table" },
        { id: "pivot-table", label: "Pivot Table" },
        { id: "export-data", label: "Export Data" },
        { id: "color-picker", label: "Color Picker" },
        { id: "rating", label: "Rating" },
        { id: "kanban", label: "Kanban Board" },
        { id: "date-range-advanced", label: "Date Range" },
        { id: "file-uploader", label: "File Uploader" },
        { id: "rich-text-editor", label: "Rich Text Editor" },
        { id: "timeline", label: "Timeline" },
        { id: "sankey-diagram", label: "Sankey Diagram" },
        { id: "gantt-chart", label: "Gantt Chart" },
        { id: "org-chart", label: "Org Chart" },
        { id: "virtualized-list", label: "Virtualized List" },
        { id: "infinite-scroll", label: "Infinite Scroll" },
        { id: "masonry-grid", label: "Masonry Grid" },
        { id: "transfer-list", label: "Transfer List" },
      ],
    },
    {
      id: "business-components",
      label: "Business Components",
      icon: Box,
      count: 1,
      items: [
        // High Priority (Old)
        { id: "audit-log", label: "Audit Log Viewer" },
        { id: "testimonials", label: "Testimonials Carousel" },
        { id: "contact-form", label: "Contact Form" },
        // New
        { id: "liquidity-meter-component", label: "Liquidity Meter" },
        { id: "risk-indicator", label: "Risk Indicator" },
        { id: "rate-display", label: "Rate Display" },
        { id: "invoice-card", label: "Invoice Card" },
        { id: "payor-card", label: "Payor Card" },
        { id: "cash-flow-projection", label: "Cash Flow Chart" },
        { id: "collection-timeline", label: "Collection Timeline" },
        { id: "doc-verification", label: "Doc Verification" },
      ],
    },
  ];

  const designSystemPages: MenuItem[] = [
    { id: "brand-layout", label: "Brand Layout" },
    { id: "theme-customizer", label: "Theme Customizer" },
    { id: "elevation", label: "Elevation Styles" },
  ];

  const resourcePages: MenuItem[] = [
    { id: "animations", label: "Animations" },
    { id: "animation-system", label: "Animation System" },
    { id: "icon-gallery", label: "Icon Gallery" },
    { id: "help-system-demo", label: "Help System" },
  ];

  const specialPages: MenuItem[] = [
    { id: "accessibility", label: "WCAG Accessibility" },
    { id: "changelog", label: "Changelog" },
  ];

  // Helper to check if a section contains the active page
  const isSectionActive = (sectionItems: MenuItem[]) => {
    return sectionItems.some(item => item.id === activePage);
  };

  // Flatten items for search
  const allItems = [
    ...menuSections.flatMap(section => section.items.map(item => ({ 
      ...item, 
      section: section.label, 
      icon: section.icon 
    }))),
    ...resourcePages.map(item => ({ 
      ...item, 
      section: "Analysis", 
      icon: Sparkles 
    })),
    ...specialPages.map(item => ({ 
      ...item, 
      section: "Analysis", 
      icon: Sparkles 
    })),
    ...designSystemPages.map(item => ({ 
      ...item, 
      section: "Design System", 
      icon: Sparkles 
    }))
  ];

  const searchResults = searchQuery 
    ? allItems.filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <Sidebar 
      collapsible="icon" 
      {...props} 
      className="border-r border-sidebar-border"
    >
      <SidebarHeader>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 px-2 py-2">
            <Logo size="md" variant="auto" className="flex-shrink-0" />
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={activePage === "home"}
                onClick={() => onPageChange("home")}
                tooltip="Home"
                className="w-full"
              >
                <Home className="h-4 w-4" />
                <span className="text-sidebar-foreground">Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          {/* Search Input */}
          <div className="px-2 pb-2 group-data-[collapsible=icon]:hidden">
            <div className="relative group/search">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-sidebar-foreground/50 transition-colors group-focus-within/search:text-primary" />
              <input
                type="text"
                placeholder="Buscar componente..."
                className="w-full rounded-md bg-sidebar-accent/20 border border-sidebar-border/50 pl-9 pr-8 py-2 text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:bg-sidebar-accent/30 focus:border-primary/50 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-2.5 text-sidebar-foreground/50 hover:text-sidebar-foreground p-0.5 hover:bg-sidebar-accent/50 rounded-sm transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="overflow-y-auto no-scrollbar">
        {searchQuery ? (
          <SidebarGroup>
            <SidebarGroupLabel className="text-sidebar-foreground/90 px-2 mb-2">
              Resultados ({searchResults.length})
            </SidebarGroupLabel>
            <SidebarMenu>
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      isActive={activePage === item.id}
                      onClick={() => {
                        onPageChange(item.id);
                        // Optional: keep search active or clear it? keeping it active is usually better for browsing results
                      }}
                      tooltip={item.label}
                      className="h-auto py-2"
                    >
                      {item.icon ? <item.icon className="h-4 w-4 shrink-0" /> : <Sparkles className="h-4 w-4 shrink-0" />}
                      <div className="flex flex-col gap-0.5 items-start overflow-hidden w-full">
                        <span className="text-sidebar-foreground truncate w-full">{item.label}</span>
                        <span className="text-xs text-sidebar-foreground/50 uppercase">{item.section}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              ) : (
                <div className="px-4 py-12 flex flex-col items-center text-center gap-2">
                   <div className="h-12 w-12 rounded-full bg-sidebar-accent/20 flex items-center justify-center text-sidebar-foreground/30">
                     <Search className="h-6 w-6" />
                   </div>
                   <p className="text-sm text-sidebar-foreground/60">
                     No se encontraron resultados para "{searchQuery}"
                   </p>
                </div>
              )}
            </SidebarMenu>
          </SidebarGroup>
        ) : (
          <>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/90">DSM Progress</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={activePage === "dsm-dashboard"}
                onClick={() => onPageChange("dsm-dashboard")}
                tooltip="DSM Dashboard"
                className="w-full"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sidebar-foreground">DSM Dashboard</span>
                <Badge variant="success" className="ml-auto h-4 px-1 text-xs border-none font-medium">
                  100%
                </Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/90">Components</SidebarGroupLabel>
          <SidebarMenu>
            {menuSections.map((section) => (
              <Collapsible
                key={section.id}
                asChild
                defaultOpen={isSectionActive(section.items) || section.id === "actions"}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <section.icon />
                      <span className="text-sidebar-foreground text-sm font-medium not-italic">{section.label}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 text-sidebar-foreground/80" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {section.items.map((item) => (
                        <SidebarMenuSubItem key={item.id}>
                          <SidebarMenuSubButton 
                            asChild 
                            isActive={activePage === item.id}
                            onClick={() => onPageChange(item.id)}
                            className="cursor-pointer data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                          >
                            <span className="flex flex-1 items-center gap-2 overflow-hidden">
                              <span className="truncate">{item.label}</span>
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/90">Recursos</SidebarGroupLabel>
          <SidebarMenu>
            {resourcePages.map((page) => (
              <SidebarMenuItem key={page.id}>
                <SidebarMenuButton 
                  isActive={activePage === page.id}
                  onClick={() => onPageChange(page.id)}
                  tooltip={page.label}
                >
                  {page.id === "help-system-demo" && <Zap />}
                  {page.id === "animations" && <Clapperboard />}
                  {page.id === "animation-system" && <Box />}
                  {page.id === "icon-gallery" && <ImageIcon />}
                  <span className="flex flex-1 items-center gap-2 overflow-hidden text-sidebar-foreground group-data-[active=true]/menu-button:text-sidebar-primary-foreground group-data-[active=true]/menu-button:font-medium">
                    <span className="truncate">{page.label}</span>
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/90">Design System</SidebarGroupLabel>
          <SidebarMenu>
            {designSystemPages.map((page) => (
              <SidebarMenuItem key={page.id}>
                <SidebarMenuButton 
                  isActive={activePage === page.id}
                  onClick={() => onPageChange(page.id)}
                  tooltip={page.label}
                >
                  {page.id === "brand-layout" && <Paintbrush />}
                  {page.id === "theme-customizer" && <Palette />}
                  {page.id === "elevation" && <Scale />}
                  <span className="flex flex-1 items-center gap-2 overflow-hidden text-sidebar-foreground group-data-[active=true]/menu-button:text-sidebar-primary-foreground group-data-[active=true]/menu-button:font-medium">
                    <span className="truncate">{page.label}</span>
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/90">Verificación</SidebarGroupLabel>
          <SidebarMenu>
            {specialPages.map((page) => (
              <SidebarMenuItem key={page.id}>
                <SidebarMenuButton 
                  isActive={activePage === page.id}
                  onClick={() => onPageChange(page.id)}
                  tooltip={page.label}
                >
                  {page.id === "accessibility" && <Accessibility />}
                  {page.id === "changelog" && <BookOpen />}
                  <span className="text-sidebar-foreground group-data-[active=true]/menu-button:text-sidebar-primary-foreground group-data-[active=true]/menu-button:font-medium">{page.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
          </>
        )}
      </SidebarContent>

      <SidebarFooter>

         
         <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                onClick={toggleSidebar} 
                tooltip="Colapsar Sidebar"
              >
                <PanelLeft className="h-4 w-4" />
                <span>Colapsar Sidebar</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
         </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}