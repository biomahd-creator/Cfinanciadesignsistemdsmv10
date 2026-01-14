import { PageId } from "./SidebarNew";
// ⚠️ CRITICAL: Este archivo mapea TODOS los PageIds a sus componentes
// ⚠️ ANTES DE MODIFICAR: Leer /DSM_ARCHITECTURE.md sección "PageRenderer"
// ⚠️ CADA CASO requiere:
//    1. Import del componente (arriba)
//    2. Case en el switch (abajo)
//    3. PageId existente en SidebarNew.tsx
// ⚠️ NO eliminar imports/casos sin verificar referencias
// ⚠️ Total de casos: 107+ (verificar en DSM_ARCHITECTURE.md)

import {
  HomePage,
  DSMDashboardPage,
  ButtonPage,
  ButtonPageNew,
  TogglePage,
  TogglePageNew,
  ToggleGroupPage,
  ToggleGroupPageNew,
  AccessibilityPage,
  BrandLayoutPage,
  ThemeCustomizerPage,
  DatePickerPage,
  ComboboxPage,
  FormPage,
  InputOTPPage,
  AlertDialogPage,
  ToastPage,
  DrawerPage,
  HoverCardPage,
  ResizablePage,
  MenubarPage,
  NavigationMenuPage,
  ContextMenuPage,
  InputPage,
  InputPageNew,
  InputFilePage,
  TextareaPage,
  TextareaPageNew,
  TextareaAutoresizePage,
  SelectPage,
  SelectPageNew,
  CheckboxPage,
  CheckboxPageNew,
  RadioGroupPage,
  RadioGroupPageNew,
  SwitchPage,
  SwitchPageNew,
  SliderPage,
  SliderPageNew,
  CalendarPage,
  CalendarPageNew,
  LabelPage,
  LabelPageNew,
  CardPage,
  CardPageNew,
  BadgePage,
  BadgePageNew,
  TablePage,
  TablePageNew,
  AvatarPage,
  SeparatorPage,
  TabsPage,
  TabsPageNew,
  BreadcrumbPage,
  CommandPage,
  DropdownMenuPage,
  PaginationPage,
  AlertPage,
  AlertPageNew,
  DialogPage,
  DialogPageNew,
  TooltipPage,
  ProgressPage,
  SkeletonPage,
  PopoverPage,
  SheetPage,
  AccordionPage,
  CarouselPage,
  CollapsiblePage,
  ScrollAreaPage,
  ChartsPage,
  ColorPickerPage,
  RatingPage,
  KanbanPage,
  DateRangePickerPage,
  FileUploaderPage,
  RichTextEditorPage,
  MultiSelectPage,
  TimelinePage,
  DataTablePage,
  ElevationPage,
  TreeTablePage,
  PivotTablePage,
  ExportDataPage,
  InvoiceGeneratorPage,
  InvoiceUploadPage,
  FactoringSelectionShowcasePage,
  FactoringDashboardPage,
  OperationsListPage,
  ApprovalFlowPage,
  LiquidityCalculatorPage,
  OnboardingPage,
  CFDashboardPage,
  AdminPortalPage,
  GridShowcasePage,
  DatePickerPageNew,
  ComboboxPageNew,
  FormPageNew,
  InputOTPPageNew,
  StatusKPIsPage,
  SidebarShowcasePage,
  MultiStepWizardPage,
  MultiStepFormPage,
  MultiStepFormVerticalPage,
  MultiStepWizardVerticalPage,
  BusinessComponentsPage,
  DataVisualizationPage,
  AdvancedFormsPage,
  HelpSystemDemoPage,
  AnimationsPage,
  IconGalleryPage,
  ChangelogPage
} from "./pages";

import { PaymentForm } from "./patterns/PaymentForm";
import { EditableTable } from "./patterns/EditableTable";
import { KPIShowcase } from "./patterns/KPIShowcase";

// Import section components for grouped patterns/atomic
import { ComposedPatternsSection } from "./sections/ComposedPatternsSection";
import { AtomicDesignSection } from "./sections/AtomicDesignSection";
import { ShadcnOfficialComparison } from "./sections/ShadcnOfficialComparison";
// AdvancedComponentsSection is no longer used for routing
// import { AdvancedComponentsSection } from "./sections/AdvancedComponentsSection";

interface PageRendererProps {
  pageId: PageId;
}

export function PageRenderer({ pageId }: PageRendererProps) {
  // Map individual pages to their components
  
  switch (pageId) {
    // ===== HOME =====
    case "home":
      return <HomePage />;
    case "dsm-dashboard":
      return <DSMDashboardPage />;
      
    // ===== ACTIONS =====
    case "button":
      return <ButtonPageNew />;
    case "button-new":
      return <ButtonPageNew />;
    case "toggle":
      return <TogglePageNew />;
    case "toggle-group":
      return <ToggleGroupPageNew />;

    // ===== FORMS =====
    case "input":
      return <InputPage />;
    case "input-new":
      return <InputPageNew />;
    case "input-file":
      return <InputFilePage />;
    case "textarea":
      return <TextareaPage />;
    case "textarea-new":
      return <TextareaPageNew />;
    case "textarea-autoresize":
      return <TextareaAutoresizePage />;
    case "select":
      return <SelectPage />;
    case "select-new":
      return <SelectPageNew />;
    case "checkbox":
      return <CheckboxPage />;
    case "checkbox-new":
      return <CheckboxPageNew />;
    case "radio-group":
      return <RadioGroupPageNew />;
    case "switch":
      return <SwitchPageNew />;
    case "slider":
      return <SliderPageNew />;
    case "calendar":
      return <CalendarPage />;
    case "calendar-new":
      return <CalendarPageNew />;
    case "label":
      return <LabelPageNew />;
    case "date-picker":
      return <DatePickerPage />;
    case "date-picker-new":
      return <DatePickerPageNew />;
    case "date-range-picker":
      return <DateRangePickerPage />;
    case "combobox":
      return <ComboboxPage />;
    case "combobox-new":
      return <ComboboxPageNew />;
    case "multi-select":
      return <MultiSelectPage />;
    case "form":
      return <FormPage />;
    case "form-new":
      return <FormPageNew />;
    case "input-otp":
      return <InputOTPPage />;
    case "input-otp-new":
      return <InputOTPPageNew />;

    // ===== NAVIGATION =====
    case "tabs":
      return <TabsPage />;
    case "tabs-new":
      return <TabsPageNew />;
    case "breadcrumb":
      return <BreadcrumbPage />;
    case "command":
      return <CommandPage />;
    case "dropdown-menu":
      return <DropdownMenuPage />;
    case "pagination":
      return <PaginationPage />;
    case "menubar":
      return <MenubarPage />;
    case "navigation-menu":
      return <NavigationMenuPage />;
    case "context-menu":
      return <ContextMenuPage />;

    // ===== DATA DISPLAY =====
    case "card":
      return <CardPage />;
    case "card-new":
      return <CardPageNew />;
    case "badge":
      return <BadgePage />;
    case "badge-new":
      return <BadgePageNew />;
    case "table":
      return <TablePage />;
    case "table-new":
      return <TablePageNew />;
    case "avatar":
      return <AvatarPage />;
    case "separator":
      return <SeparatorPage />;
    case "hover-card":
      return <HoverCardPage />;

    // ===== FEEDBACK =====
    case "alert":
      return <AlertPage />;
    case "alert-new":
      return <AlertPageNew />;
    case "dialog":
      return <DialogPage />;
    case "dialog-new":
      return <DialogPageNew />;
    case "tooltip":
      return <TooltipPage />;
    case "progress":
      return <ProgressPage />;
    case "skeleton":
      return <SkeletonPage />;
    case "popover":
      return <PopoverPage />;
    case "sheet":
      return <SheetPage />;
    case "alert-dialog":
      return <AlertDialogPage />;
    case "toast":
      return <ToastPage />;
    case "drawer":
      return <DrawerPage />;

    // ===== LAYOUT =====
    case "sidebar-showcase":
      return <SidebarShowcasePage />;
    case "accordion":
      return <AccordionPage />;
    case "carousel":
      return <CarouselPage />;
    case "collapsible":
      return <CollapsiblePage />;
    case "scroll-area":
      return <ScrollAreaPage />;
    case "resizable":
      return <ResizablePage />;
    case "grid-showcase":
      return <GridShowcasePage />;

    // ===== PATTERNS =====
    case "invoice-generator":
      return <InvoiceGeneratorPage />;
    case "invoice-upload":
      return <InvoiceUploadPage />;
    case "payment-form":
      return <PaymentForm />;
    case "editable-table":
      return <EditableTable />;
    case "stats-dashboard":
    case "quick-action":
    case "data-table-advanced":
    case "advanced-filter":
    case "approval-timeline":
      return <ComposedPatternsSection />;
    case "multi-step-wizard":
      return <MultiStepWizardPage />;
    case "multi-step-form":
      return <MultiStepFormPage />;
    case "multi-step-form-vertical":
      return <MultiStepFormVerticalPage />;
    case "multi-step-wizard-vertical":
      return <MultiStepWizardVerticalPage />;

    // ===== ATOMIC DESIGN =====
    case "atomic-atoms":
      return <AtomicDesignSection key="atoms" defaultTab="atoms" />;
    case "atomic-molecules":
      return <AtomicDesignSection key="molecules" defaultTab="molecules" />;
    case "atomic-organisms":
      return <AtomicDesignSection key="organisms" defaultTab="organisms" />;
    case "atomic-templates":
      return <AtomicDesignSection key="templates" defaultTab="templates" />;
    case "atomic-pages":
      return <AtomicDesignSection key="pages" defaultTab="pages" />;

    // ===== ADVANCED =====
    case "charts":
      return <ChartsPage />;
    case "color-picker":
      return <ColorPickerPage />;
    case "rating":
      return <RatingPage />;
    case "kanban":
      return <KanbanPage />;
    case "date-range-advanced":
      return <DateRangePickerPage />;
    case "file-uploader":
      return <FileUploaderPage />;
    case "rich-text-editor":
      return <RichTextEditorPage />;
    case "timeline":
      return <TimelinePage />;
    case "data-table":
      return <DataTablePage />;
    case "tree-table":
      return <TreeTablePage />;
    case "pivot-table":
      return <PivotTablePage />;
    case "export-data":
      return <ExportDataPage />;

    // ===== BUSINESS COMPONENTS (HIGH PRIORITY) =====
    case "business-components":
      return <BusinessComponentsPage />;

    // ===== DATA VISUALIZATION (MEDIUM PRIORITY) =====
    case "data-visualization":
      return <DataVisualizationPage />;

    // ===== ADVANCED FORMS (MEDIUM PRIORITY) =====
    case "advanced-forms":
      return <AdvancedFormsPage />;

    // ===== PAGES (REAL) =====
    case "kpi-showcase":
      return <KPIShowcase />;
    case "factoring-selection":
      return <FactoringSelectionShowcasePage />;
    case "factoring-dashboard":
      return <FactoringDashboardPage />;
    case "operations-list":
      return <OperationsListPage />;
    case "approval-flow":
      return <ApprovalFlowPage />;
    case "liquidity-calculator":
      return <LiquidityCalculatorPage />;
    case "onboarding":
      return <OnboardingPage />;
    case "cf-dashboard":
      return <CFDashboardPage />;
    case "admin-portal":
      return <AdminPortalPage />;
    case "status-kpis":
      return <StatusKPIsPage />;

    // ===== SPECIAL PAGES =====
    case "official":
      return <ShadcnOfficialComparison />;
    case "accessibility":
      return <AccessibilityPage />;
    case "brand-layout":
      return <BrandLayoutPage />;
    case "elevation":
      return <ElevationPage />;
    case "theme-customizer":
      return <ThemeCustomizerPage />;
    case "help-system-demo":
      return <HelpSystemDemoPage />;
    case "animations":
      return <AnimationsPage />;
    case "icon-gallery":
      return <IconGalleryPage />;
    case "changelog":
      return <ChangelogPage />;

    default:
      return <HomePage />;
  }
}