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
  X,
  BookOpen,
  BarChart3,
  Wrench,
  Rocket,
  CheckCircle2,
  FileText,
  Package,
  Ruler,
  Eye,
  PieChart,
  Target,
  Settings,
  Code,
  Smartphone,
  Film,
  Edit3,
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
} from "./ui/sidebar";
import { Badge } from "./ui/badge";
import { Logo } from "./Logo";

export type PageId =
  // Quick Start
  | "home" | "getting-started" | "dsm-dashboard"
  // Actions
  | "button" | "button-new" | "toggle" | "toggle-group"
  // Forms
  | "input" | "input-new" | "input-file" | "select" | "select-new" | "checkbox" | "checkbox-new" | "radio-group" | "switch" | "slider" 
  | "textarea" | "textarea-autoresize" | "calendar" | "calendar-new" | "form" | "form-new" | "input-otp" | "input-otp-new" | "label" | "combobox" | "combobox-new" | "multi-select" | "date-picker" | "date-picker-new" | "date-range-picker"
  // Navigation
  | "tabs" | "tabs-new" | "breadcrumb" | "command" | "dropdown-menu" | "menubar" 
  | "navigation-menu" | "pagination" | "context-menu"
  // Data Display
  | "card" | "card-new" | "table" | "table-new" | "badge" | "badge-new" | "avatar" | "hover-card" | "separator"
  // Feedback
  | "alert" | "alert-new" | "alert-dialog" | "dialog" | "dialog-new" | "toast" | "tooltip" | "progress" 
  | "skeleton" | "sheet" | "drawer" | "popover"
  // Layout
  | "accordion" | "carousel" | "collapsible" | "resizable" | "scroll-area"
  // Patterns
  | "invoice-generator" | "payment-form" | "editable-table" | "invoice-upload"
  | "login-form" | "stats-dashboard" | "empty-state" | "modal-form"  
  | "sidebar-layout" | "table-actions" | "search-command" | "multi-step-form"
  // Atomic
  | "atomic-atoms" | "atomic-molecules" | "atomic-organisms" | "atomic-templates" | "atomic-pages"
  // Advanced
  | "charts" | "color-picker" | "rating" | "kanban" | "date-range-advanced" | "file-uploader" | "rich-text-editor" | "timeline" | "data-table" | "tree-table" | "pivot-table" | "export-data"
  // Advanced Form Inputs (NEW)
  | "time-picker" | "autocomplete" | "image-cropper" | "signature-pad"
  // Communication (NEW)
  | "chat-interface" | "comments-system" | "notification-center"
  // Mobile Components (NEW)
  | "bottom-sheet" | "action-sheet" | "pull-to-refresh" | "swipeable-cards"
  // Media Components (NEW)
  | "image-gallery" | "video-player" | "audio-player" | "pdf-viewer" | "image-comparison"
  // Rich Editors (NEW)
  | "markdown-editor" | "code-editor" | "formula-editor"
  // Hero UI Pro (NEW)
  | "ai-chat" | "video-conferencing" | "screen-recording" | "collaborative-cursors" 
  | "realtime-collab" | "workflow-builder" | "permission-mgmt" | "audit-log"
  // Design Foundations
  | "design-tokens" | "color-palette" | "typography-scale" | "logo-iconography" | "component-showcase"
  // Special
  | "comparison" | "official" | "accessibility" | "brand-layout" | "theme-customizer" | "elevation" | "grid-showcase"
  // Implementation - Real Pages
  | "factoring-selection" | "factoring-dashboard" | "operations-list" | "approval-flow" | "kpi-showcase" | "factoring-operation-test"
  | "operations-dashboard" | "approval-workflows"
  // C-Financia Platform
  | "liquidity-calculator" | "onboarding" | "cf-dashboard" | "admin-portal"
  // Quality & Metrics
  | "component-maturity"
  // Documentation (Future)
  | "api-reference" | "migration-guides" | "contributing";

interface SidebarProps extends React.ComponentProps<typeof Sidebar> {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
}

interface MenuItem {
  id: PageId;
  label: string;
  new?: boolean;
  subItems?: MenuItem[]; // 🆕 Support for nested sub-items
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

  // ========================================
  // 1️⃣ QUICK START
  // ========================================
  const quickStartSection: MenuSection = {
    id: "quick-start",
    label: "Quick Start",
    icon: Zap,
    items: [
      { id: "home", label: "Home" },
      { id: "getting-started", label: "Getting Started" },
      { id: "dsm-dashboard", label: "DSM Dashboard" },
    ],
  };

  // ========================================
  // 2️⃣ LIBRARY (Component Catalog)
  // ========================================
  const libraryComponents: MenuSection[] = [
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
        { 
          id: "input-new", 
          label: "Text Inputs",
          subItems: [
            { id: "input-new", label: "Input" },
            { id: "input-file", label: "Input File" },
            { id: "textarea", label: "Textarea" },
            { id: "textarea-autoresize", label: "Textarea Autoresize" },
            { id: "input-otp-new", label: "Input OTP" },
          ]
        },
        { 
          id: "select-new", 
          label: "Selection",
          subItems: [
            { id: "select-new", label: "Select" },
            { id: "checkbox-new", label: "Checkbox" },
            { id: "radio-group", label: "Radio Group" },
            { id: "switch", label: "Switch" },
            { id: "combobox-new", label: "Combobox" },
            { id: "multi-select", label: "Multi Select" },
          ]
        },
        { 
          id: "calendar-new", 
          label: "Date & Time",
          subItems: [
            { id: "calendar-new", label: "Calendar" },
            { id: "date-picker-new", label: "Date Picker" },
            { id: "date-range-picker", label: "Date Range Picker" },
          ]
        },
        { 
          id: "slider", 
          label: "Other Inputs",
          subItems: [
            { id: "slider", label: "Slider" },
            { id: "form-new", label: "Form" },
            { id: "label", label: "Label" },
          ]
        },
      ],
    },
    {
      id: "navigation",
      label: "Navigation",
      icon: Compass,
      count: 8,
      items: [
        { 
          id: "tabs-new", 
          label: "Menu Components",
          subItems: [
            { id: "dropdown-menu", label: "Dropdown Menu" },
            { id: "menubar", label: "Menubar" },
            { id: "navigation-menu", label: "Navigation Menu" },
            { id: "context-menu", label: "Context Menu" },
            { id: "command", label: "Command" },
          ]
        },
        { 
          id: "breadcrumb", 
          label: "Navigation Elements",
          subItems: [
            { id: "tabs-new", label: "Tabs" },
            { id: "breadcrumb", label: "Breadcrumb" },
            { id: "pagination", label: "Pagination" },
          ]
        },
      ],
    },
    {
      id: "data-display",
      label: "Data Display",
      icon: Grid3x3,
      count: 6,
      items: [
        { 
          id: "card-new", 
          label: "Containers",
          subItems: [
            { id: "card-new", label: "Card" },
            { id: "separator", label: "Separator" },
          ]
        },
        { 
          id: "table-new", 
          label: "Data Tables",
          subItems: [
            { id: "table-new", label: "Table" },
          ]
        },
        { 
          id: "badge-new", 
          label: "Indicators",
          subItems: [
            { id: "badge-new", label: "Badge" },
            { id: "avatar", label: "Avatar" },
            { id: "hover-card", label: "Hover Card" },
          ]
        },
      ],
    },
    {
      id: "feedback",
      label: "Feedback",
      icon: MessageSquare,
      count: 10,
      items: [
        { 
          id: "alert-new", 
          label: "Alerts & Dialogs",
          subItems: [
            { id: "alert-new", label: "Alert" },
            { id: "alert-dialog", label: "Alert Dialog" },
            { id: "dialog-new", label: "Dialog" },
            { id: "sheet", label: "Sheet" },
            { id: "drawer", label: "Drawer" },
          ]
        },
        { 
          id: "toast", 
          label: "Notifications",
          subItems: [
            { id: "toast", label: "Toast (Sonner)" },
            { id: "tooltip", label: "Tooltip" },
            { id: "popover", label: "Popover" },
          ]
        },
        { 
          id: "progress", 
          label: "Loading States",
          subItems: [
            { id: "progress", label: "Progress" },
            { id: "skeleton", label: "Skeleton" },
          ]
        },
      ],
    },
    {
      id: "layout",
      label: "Layout",
      icon: LayoutGrid,
      count: 5,
      items: [
        { id: "accordion", label: "Accordion" },
        { id: "carousel", label: "Carousel" },
        { id: "collapsible", label: "Collapsible" },
        { id: "resizable", label: "Resizable" },
        { id: "scroll-area", label: "Scroll Area" },
      ],
    },
  ];

  // ========================================
  // 3️⃣ DESIGN FOUNDATIONS
  // ========================================
  const designFoundationsSection: MenuSection = {
    id: "design-foundations",
    label: "Design Foundations",
    icon: Ruler,
    items: [
      { id: "theme-customizer", label: "Design Tokens", new: true },
      { id: "color-palette", label: "Color Palette", new: true },
      { id: "typography-scale", label: "Typography Scale" },
      { id: "elevation", label: "Elevation & Shadows", new: true },
      { id: "grid-showcase", label: "Grid & Spacing" },
    ],
  };

  // ========================================
  // 4️⃣ BRAND & VISUALS
  // ========================================
  const brandVisualsSection: MenuSection = {
    id: "brand-visuals",
    label: "Brand & Visuals",
    icon: Palette,
    items: [
      { id: "brand-layout", label: "Brand Layout" },
      { id: "component-showcase", label: "Component Showcase" },
    ],
  };

  // ========================================
  // 5️⃣ DATA VISUALIZATION
  // ========================================
  const dataVisualizationSection: MenuSection = {
    id: "data-visualization",
    label: "Data Visualization",
    icon: PieChart,
    items: [
      { id: "charts", label: "Charts (Recharts)" },
      { id: "kpi-showcase", label: "KPI Cards" },
      { id: "stats-dashboard", label: "Stats Dashboard" },
      { id: "tree-table", label: "Tree Table" },
      { id: "pivot-table", label: "Pivot Table" },
      { id: "data-table", label: "Advanced Data Table" },
      { id: "export-data", label: "Export Data" },
    ],
  };

  // ========================================
  // 6️⃣ QUALITY & METRICS
  // ========================================
  const qualityMetricsSection: MenuSection = {
    id: "quality-metrics",
    label: "Quality & Metrics",
    icon: Target,
    items: [
      { id: "accessibility", label: "Accessibility (WCAG)" },
      { id: "official", label: "Official Verification" },
      { id: "comparison", label: "Hero UI Comparison" },
    ],
  };

  // ========================================
  // 7️⃣ TOOLS & REFERENCE
  // ========================================
  const toolsReferenceSection: MenuSection = {
    id: "tools-reference",
    label: "Tools & Reference",
    icon: Wrench,
    items: [
      { id: "atomic-atoms", label: "Atomic: Atoms" },
      { id: "atomic-molecules", label: "Atomic: Molecules" },
      { id: "atomic-organisms", label: "Atomic: Organisms" },
      { id: "atomic-templates", label: "Atomic: Templates" },
      { id: "atomic-pages", label: "Atomic: Pages" },
    ],
  };

  // ========================================
  // 8️⃣ IMPLEMENTATION (Real-World Examples)
  // ========================================
  const implementationSections: MenuSection[] = [
    {
      id: "factoring-patterns",
      label: "Factoring Patterns",
      icon: Layers,
      count: 10,
      items: [
        { id: "invoice-generator", label: "Invoice Generator", new: true },
        { id: "invoice-upload", label: "Invoice Upload", new: true },
        { id: "payment-form", label: "Payment Form", new: true },
        { id: "editable-table", label: "Editable Table", new: true },
        { id: "login-form", label: "Login Form" },
        { id: "empty-state", label: "Empty State" },
        { id: "modal-form", label: "Modal Form" },
        { id: "sidebar-layout", label: "Sidebar Layout" },
        { id: "table-actions", label: "Table with Actions" },
        { id: "search-command", label: "Search Command" },
        { id: "multi-step-form", label: "Multi-Step Form" },
      ],
    },
    {
      id: "factoring-pages",
      label: "Factoring Platform",
      icon: Rocket,
      count: 8,
      items: [
        { id: "factoring-selection", label: "Factoring Selection" },
        { id: "factoring-dashboard", label: "Factoring Dashboard" },
        { id: "operations-dashboard", label: "Operations Dashboard", new: true },
        { id: "operations-list", label: "Operations List" },
        { id: "approval-workflows", label: "Approval Workflows", new: true },
        { id: "approval-flow", label: "Approval Flow" },
        { id: "liquidity-calculator", label: "Liquidity Calculator" },
        { id: "factoring-operation-test", label: "Operation Test" },
      ],
    },
    {
      id: "advanced-components",
      label: "Advanced Components",
      icon: Sparkles,
      count: 6,
      items: [
        { id: "color-picker", label: "Color Picker" },
        { id: "rating", label: "Rating" },
        { id: "kanban", label: "Kanban Board" },
        { id: "file-uploader", label: "File Uploader" },
        { id: "rich-text-editor", label: "Rich Text Editor" },
        { id: "timeline", label: "Timeline" },
      ],
    },
    {
      id: "advanced-form-inputs",
      label: "Advanced Form Inputs",
      icon: FormInput,
      count: 4,
      items: [
        { id: "time-picker", label: "Time Picker" },
        { id: "autocomplete", label: "Autocomplete" },
        { id: "image-cropper", label: "Image Cropper" },
        { id: "signature-pad", label: "Signature Pad" },
      ],
    },
    {
      id: "communication",
      label: "Communication",
      icon: MessageSquare,
      count: 3,
      items: [
        { id: "chat-interface", label: "Chat Interface" },
        { id: "comments-system", label: "Comments System" },
        { id: "notification-center", label: "Notification Center" },
      ],
    },
    {
      id: "mobile-components",
      label: "Mobile Components",
      icon: Smartphone,
      count: 4,
      items: [
        { id: "bottom-sheet", label: "Bottom Sheet" },
        { id: "action-sheet", label: "Action Sheet" },
        { id: "pull-to-refresh", label: "Pull to Refresh" },
        { id: "swipeable-cards", label: "Swipeable Cards" },
      ],
    },
    {
      id: "media-components",
      label: "Media Components",
      icon: Film,
      count: 5,
      items: [
        { id: "image-gallery", label: "Image Gallery" },
        { id: "video-player", label: "Video Player" },
        { id: "audio-player", label: "Audio Player" },
        { id: "pdf-viewer", label: "PDF Viewer" },
        { id: "image-comparison", label: "Image Comparison" },
      ],
    },
    {
      id: "rich-editors",
      label: "Rich Editors",
      icon: Edit3,
      count: 3,
      items: [
        { id: "markdown-editor", label: "Markdown Editor" },
        { id: "code-editor", label: "Code Editor" },
        { id: "formula-editor", label: "Formula Editor" },
      ],
    },
    {
      id: "hero-ui-pro",
      label: "Hero UI Pro",
      icon: Atom,
      count: 8,
      items: [
        { id: "ai-chat", label: "AI Chat" },
        { id: "video-conferencing", label: "Video Conferencing" },
        { id: "screen-recording", label: "Screen Recording" },
        { id: "collaborative-cursors", label: "Collaborative Cursors" },
        { id: "realtime-collab", label: "Realtime Collaboration" },
        { id: "workflow-builder", label: "Workflow Builder" },
        { id: "permission-mgmt", label: "Permission Management" },
        { id: "audit-log", label: "Audit Log" },
      ],
    },
  ];

  // ========================================
  // 9️⃣ DOCUMENTATION
  // ========================================
  const documentationSection: MenuSection = {
    id: "documentation",
    label: "Documentation",
    icon: BookOpen,
    items: [
      { id: "api-reference", label: "API Reference" },
      { id: "migration-guides", label: "Migration Guides" },
      { id: "contributing", label: "Contributing" },
    ],
  };

  // Determine which sections should be open by default
  const getDefaultOpenSections = () => {
    const openSections: string[] = [];
    
    // Helper function to check if an item or its sub-items match the active page
    const hasActivePage = (item: MenuItem): boolean => {
      if (item.id === activePage) return true;
      if (item.subItems) {
        return item.subItems.some((subItem) => hasActivePage(subItem));
      }
      return false;
    };
    
    // Check Library sections
    libraryComponents.forEach((section) => {
      section.items.forEach((item) => {
        if (hasActivePage(item)) {
          openSections.push(section.id);
          if (item.subItems) {
            openSections.push(`sub-${item.id}`);
          }
        }
      });
    });

    // Check Implementation sections
    implementationSections.forEach((section) => {
      section.items.forEach((item) => {
        if (hasActivePage(item)) {
          openSections.push(section.id);
          if (item.subItems) {
            openSections.push(`sub-${item.id}`);
          }
        }
      });
    });

    // Check other main sections
    if (quickStartSection.items.some((item) => hasActivePage(item))) {
      openSections.push(quickStartSection.id);
    }
    if (designFoundationsSection.items.some((item) => hasActivePage(item))) {
      openSections.push(designFoundationsSection.id);
    }
    if (brandVisualsSection.items.some((item) => hasActivePage(item))) {
      openSections.push(brandVisualsSection.id);
    }
    if (dataVisualizationSection.items.some((item) => hasActivePage(item))) {
      openSections.push(dataVisualizationSection.id);
    }
    if (qualityMetricsSection.items.some((item) => hasActivePage(item))) {
      openSections.push(qualityMetricsSection.id);
    }
    if (toolsReferenceSection.items.some((item) => hasActivePage(item))) {
      openSections.push(toolsReferenceSection.id);
    }
    if (documentationSection.items.some((item) => hasActivePage(item))) {
      openSections.push(documentationSection.id);
    }

    return openSections;
  };

  const [openSections, setOpenSections] = useState<string[]>(getDefaultOpenSections());

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredLibrary = libraryComponents.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0);

  const filteredImplementation = implementationSections.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0);

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    // Si tiene sub-items, renderizar como un collapsible anidado
    if (item.subItems && item.subItems.length > 0) {
      const subKey = `sub-${item.id}`;
      const isOpen = openSections.includes(subKey);
      
      return (
        <Collapsible
          key={item.id}
          open={isOpen}
          onOpenChange={() => toggleSection(subKey)}
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuSubButton 
                className={`
                  ${level > 0 ? "pl-8" : "pl-4"}
                  hover:bg-muted/50 transition-colors duration-200
                  ${isOpen ? "text-foreground" : "text-muted-foreground"}
                `}
              >
                <span className="text-xs font-semibold">{item.label}</span>
                <ChevronRight
                  className={`
                    ml-auto h-3.5 w-3.5 shrink-0
                    transition-all duration-200 ease-in-out
                    ${isOpen ? "rotate-90 text-primary" : "text-muted-foreground"}
                  `}
                />
              </SidebarMenuSubButton>
            </CollapsibleTrigger>
            <CollapsibleContent className="transition-all duration-200 ease-in-out">
              <SidebarMenuSub className="ml-3 mt-1 border-l-2 border-primary/30 pl-3 space-y-0.5">
                {item.subItems.map((subItem) => renderMenuItem(subItem, level + 1))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      );
    }
    
    // Renderizar item normal
    const isActive = activePage === item.id;
    
    return (
      <SidebarMenuItem key={item.id}>
        <SidebarMenuSubButton
          isActive={isActive}
          onClick={() => onPageChange(item.id)}
          className={`
            ${level > 0 ? "pl-6" : "pl-4"}
            text-sm hover:bg-muted/50 transition-all duration-200
            ${isActive ? "bg-primary/10 text-primary font-medium border-l-2 border-primary" : "border-l-2 border-transparent"}
          `}
        >
          <span className={isActive ? "font-medium" : ""}>{item.label}</span>
          {item.new && (
            <Badge 
              variant="default" 
              className="ml-auto h-5 px-1.5 text-[10px] font-semibold bg-primary text-primary-foreground"
            >
              NEW
            </Badge>
          )}
        </SidebarMenuSubButton>
      </SidebarMenuItem>
    );
  };

  const renderSection = (section: MenuSection, isNested: boolean = false) => (
    <Collapsible
      key={section.id}
      open={openSections.includes(section.id)}
      onOpenChange={() => toggleSection(section.id)}
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className={isNested ? "pl-6" : ""}>
            <section.icon className="h-4 w-4" />
            <span>{section.label}</span>
            {section.count && (
              <Badge variant="secondary" className="ml-auto h-5 px-1.5 text-xs">
                {section.count}
              </Badge>
            )}
            <ChevronRight
              className={`ml-auto h-4 w-4 transition-transform ${
                openSections.includes(section.id) ? "rotate-90" : ""
              }`}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {section.items.map((item) => renderMenuItem(item))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );

  const renderSimpleSection = (section: MenuSection) => (
    <Collapsible
      key={section.id}
      open={openSections.includes(section.id)}
      onOpenChange={() => toggleSection(section.id)}
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <section.icon className="h-4 w-4" />
            <span>{section.label}</span>
            <ChevronRight
              className={`ml-auto h-4 w-4 transition-transform ${
                openSections.includes(section.id) ? "rotate-90" : ""
              }`}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {section.items.map(renderMenuItem)}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b px-6 py-4">
        <Logo />
      </SidebarHeader>

      <SidebarContent>
        {/* Search */}
        <SidebarGroup className="px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border bg-background px-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </SidebarGroup>

        {!searchQuery && (
          <>
            {/* 1️⃣ QUICK START */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
                Quick Start
              </SidebarGroupLabel>
              <SidebarMenu>
                {renderSimpleSection(quickStartSection)}
              </SidebarMenu>
            </SidebarGroup>

            {/* 2️⃣ LIBRARY */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
                Component Library
              </SidebarGroupLabel>
              <SidebarMenu>
                {libraryComponents.map((section) => renderSection(section))}
              </SidebarMenu>
            </SidebarGroup>

            {/* 3️⃣ DESIGN FOUNDATIONS */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
                Design Foundations
              </SidebarGroupLabel>
              <SidebarMenu>
                {renderSimpleSection(designFoundationsSection)}
              </SidebarMenu>
            </SidebarGroup>

            {/* 4️⃣ BRAND & VISUALS */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
                Brand & Visuals
              </SidebarGroupLabel>
              <SidebarMenu>
                {renderSimpleSection(brandVisualsSection)}
              </SidebarMenu>
            </SidebarGroup>

            {/* 5️⃣ DATA VISUALIZATION */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
                Data Visualization
              </SidebarGroupLabel>
              <SidebarMenu>
                {renderSimpleSection(dataVisualizationSection)}
              </SidebarMenu>
            </SidebarGroup>

            {/* 6️⃣ QUALITY & METRICS */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
                Quality & Metrics
              </SidebarGroupLabel>
              <SidebarMenu>
                {renderSimpleSection(qualityMetricsSection)}
              </SidebarMenu>
            </SidebarGroup>

            {/* 7️⃣ TOOLS & REFERENCE */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
                Tools & Reference
              </SidebarGroupLabel>
              <SidebarMenu>
                {renderSimpleSection(toolsReferenceSection)}
              </SidebarMenu>
            </SidebarGroup>

            {/* 8️⃣ IMPLEMENTATION */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
                Implementation
              </SidebarGroupLabel>
              <SidebarMenu>
                {implementationSections.map((section) => renderSection(section))}
              </SidebarMenu>
            </SidebarGroup>

            {/* 9️⃣ DOCUMENTATION */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
                Documentation
              </SidebarGroupLabel>
              <SidebarMenu>
                {renderSimpleSection(documentationSection)}
              </SidebarMenu>
            </SidebarGroup>
          </>
        )}

        {/* Search Results */}
        {searchQuery && (
          <>
            {filteredLibrary.length > 0 && (
              <SidebarGroup>
                <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
                  Library Results
                </SidebarGroupLabel>
                <SidebarMenu>
                  {filteredLibrary.map((section) => renderSection(section))}
                </SidebarMenu>
              </SidebarGroup>
            )}

            {filteredImplementation.length > 0 && (
              <SidebarGroup>
                <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 mb-2">
                  Implementation Results
                </SidebarGroupLabel>
                <SidebarMenu>
                  {filteredImplementation.map((section) => renderSection(section))}
                </SidebarMenu>
              </SidebarGroup>
            )}

            {filteredLibrary.length === 0 && filteredImplementation.length === 0 && (
              <SidebarGroup className="px-4">
                <p className="text-sm text-muted-foreground text-center py-8">
                  No components found matching "{searchQuery}"
                </p>
              </SidebarGroup>
            )}
          </>
        )}
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="text-xs text-muted-foreground text-center space-y-1">
          <p className="font-medium">Component Showcase v2.0</p>
          <p>C-Financia Design System</p>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}