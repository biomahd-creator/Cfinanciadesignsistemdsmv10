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
  TogglePage,
  ToggleGroupPage,
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
  InputFilePage,
  TextareaPage,
  TextareaAutoresizePage,
  SelectPage,
  CheckboxPage,
  RadioGroupPage,
  SwitchPage,
  SliderPage,
  CalendarPage,
  LabelPage,
  CardPage,
  BadgePage,
  TablePage,
  AvatarPage,
  SeparatorPage,
  TabsPage,
  BreadcrumbPage,
  CommandPage,
  DropdownMenuPage,
  PaginationPage,
  AlertPage,
  DialogPage,
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
  TreeTablePage,
  PivotTablePage,
  ExportDataPage,
  InvoiceGeneratorPage,
  InvoiceUploadPage,
  KpiShowcasePage,
  FactoringSelectionShowcasePage,
  FactoringDashboardPage,
  OperationsListPage,
  ApprovalFlowPage,
  LiquidityCalculatorPage,
  OnboardingPage,
  CFDashboardPage,
  AdminPortalPage,
  GridShowcasePage,
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
  AnimationSystemPage,
  IconGalleryPage,
  ChangelogPage,
  NewPatternsPage,
  NewBusinessPage,
  NewAdvancedPage,
  StatsDashboardPage,
  QuickActionToolbarPage,
  DataTableAdvancedPage,
  AdvancedFilterPanelPage,
  ApprovalTimelinePage,
  SankeyDiagramPage,
  GanttChartPage,
  OrgChartPage,
  VirtualizedListPage,
  InfiniteScrollPage,
  MasonryGridPage,
  TransferListPage,
  LiquidityMeterPage,
  RiskIndicatorPage,
  RateDisplayPage,
  InvoiceCardPage,
  PayorCardPage,
  CashFlowProjectionPage,
  CollectionTimelinePage,
  DocVerificationPage,
  AuditLogViewerPage,
  TestimonialsCarouselPage,
  ContactFormPage,
  BookingCalendarPage,
  ActivityFeedPage,
  UserProfilePage,
  CommentThreadPage,
  PricingTablePage,
  ComparisonTablePage,
  SearchResultsPage,
  LoadingStatesPage,
  EmptyStatePage,
  ErrorBoundaryPage,
  BottomSheetPage,
  FabPage,
  SplitButtonPage,
  WidgetsShowcasePage,
  ElevationPage
} from "../pages"; // 🚀 MIGRACIÓN COMPLETADA: Imports ahora apuntan a /pages/

// import { PaymentForm } from "./patterns/PaymentForm";
import { EditableTable } from "./patterns/EditableTable";

// Import section components for grouped patterns/atomic
import { ComposedPatternsSection } from "./sections/ComposedPatternsSection";
// import { AtomicDesignSection } from "./sections/AtomicDesignSection";
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
      return <ButtonPage />;
    case "button-new":
      return <ButtonPage />;
    case "toggle":
      return <TogglePage />;
    case "toggle-group":
      return <ToggleGroupPage />;

    // ===== FORMS =====
    case "input":
      return <InputPage />;
    case "input-new":
      return <InputPage />;
    case "input-file":
      return <InputFilePage />;
    case "textarea":
      return <TextareaPage />;
    case "textarea-new":
      return <TextareaPage />;
    case "textarea-autoresize":
      return <TextareaAutoresizePage />;
    case "select":
      return <SelectPage />;
    case "select-new":
      return <SelectPage />;
    case "checkbox":
      return <CheckboxPage />;
    case "checkbox-new":
      return <CheckboxPage />;
    case "radio-group":
      return <RadioGroupPage />;
    case "switch":
      return <SwitchPage />;
    case "slider":
      return <SliderPage />;
    case "calendar":
      return <CalendarPage />;
    case "calendar-new":
      return <CalendarPage />;
    case "label":
      return <LabelPage />;
    case "date-picker":
      return <DatePickerPage />;
    case "date-picker-new":
      return <DatePickerPage />;
    case "date-range-picker":
      return <DateRangePickerPage />;
    case "combobox":
      return <ComboboxPage />;
    case "combobox-new":
      return <ComboboxPage />;
    case "multi-select":
      return <MultiSelectPage />;
    case "form":
      return <FormPage />;
    case "form-new":
      return <FormPage />;
    case "input-otp":
      return <InputOTPPage />;
    case "input-otp-new":
      return <InputOTPPage />;

    // ===== NAVIGATION =====
    case "tabs":
      return <TabsPage />;
    case "tabs-new":
      return <TabsPage />;
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
      return <CardPage />;
    case "badge":
      return <BadgePage />;
    case "badge-new":
      return <BadgePage />;
    case "table":
      return <TablePage />;
    case "table-new":
      return <TablePage />;
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
      return <AlertPage />;
    case "dialog":
      return <DialogPage />;
    case "dialog-new":
      return <DialogPage />;
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
      return <StatsDashboardPage />;
    case "quick-action":
      return <QuickActionToolbarPage />;
    case "data-table-advanced":
      return <DataTableAdvancedPage />;
    case "advanced-filter":
      return <AdvancedFilterPanelPage />;
    case "approval-timeline":
      return <ApprovalTimelinePage />;
    case "multi-step-wizard":
      return <MultiStepWizardPage />;
    case "multi-step-form":
      return <MultiStepFormPage />;
    case "multi-step-form-vertical":
      return <MultiStepFormVerticalPage />;
    case "multi-step-wizard-vertical":
      return <MultiStepWizardVerticalPage />;
    case "business-components":
      return <BusinessComponentsPage />;

    // ===== ATOMIC DESIGN (REMOVED) =====
    // Routes removed as per architecture audit


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

    // ===== UI WIDGETS =====
    case "widgets-library":
    case "widget-stat-card":
    case "widget-search-bar":
    case "widget-filter-bar":
    case "widget-navigation":
    case "widget-timeline":
      return <WidgetsShowcasePage />;

    // ===== DATA VISUALIZATION (MEDIUM PRIORITY) =====
    case "data-visualization":
      return <DataVisualizationPage />;

    // ===== ADVANCED FORMS (MEDIUM PRIORITY) =====
    case "advanced-forms":
      return <AdvancedFormsPage />;

    // ===== PAGES (REAL) =====
    case "kpi-showcase":
      return <KpiShowcasePage />;
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

    // ===== SPECIAL PAGES =====
    case "official":
      return <ShadcnOfficialComparison />;
    case "accessibility":
      return <AccessibilityPage />;
    case "brand-layout":
      return <BrandLayoutPage />;
    case "theme-customizer":
      return <ThemeCustomizerPage />;
    case "elevation":
      return <ElevationPage />;
    case "help-system-demo":
      return <HelpSystemDemoPage />;
    case "animations":
      return <AnimationsPage />;
    case "animation-system":
      return <AnimationSystemPage />;
    case "icon-gallery":
      return <IconGalleryPage />;
    case "changelog":
      return <ChangelogPage />;

    // ===== NEW PATTERNS =====
    case "activity-feed":
      return <ActivityFeedPage />;
    case "comment-thread":
      return <CommentThreadPage />;
    case "pricing-table":
      return <PricingTablePage />;
    case "comparison-table":
      return <ComparisonTablePage />;
    case "search-results":
      return <SearchResultsPage />;
    case "user-profile":
      return <UserProfilePage />;
    case "empty-state":
      return <EmptyStatePage />;
    case "loading-states":
      return <LoadingStatesPage />;
    case "error-boundary":
      return <ErrorBoundaryPage />;
    case "bottom-sheet":
      return <BottomSheetPage />;
    case "fab":
      return <FabPage />;
    case "split-button":
      return <SplitButtonPage />;

    // ===== NEW BUSINESS =====
    case "liquidity-meter-component":
      return <LiquidityMeterPage />;
    case "risk-indicator":
      return <RiskIndicatorPage />;
    case "rate-display":
      return <RateDisplayPage />;
    case "invoice-card":
      return <InvoiceCardPage />;
    case "payor-card":
      return <PayorCardPage />;
    case "cash-flow-projection":
      return <CashFlowProjectionPage />;
    case "collection-timeline":
      return <CollectionTimelinePage />;
    case "doc-verification":
      return <DocVerificationPage />;
    
    // ===== BUSINESS COMPONENTS (OLD) =====
    case "audit-log":
      return <AuditLogViewerPage />;
    case "testimonials":
      return <TestimonialsCarouselPage />;
    case "contact-form":
      return <ContactFormPage />;
    case "booking-calendar":
      return <BookingCalendarPage />;

    // ===== NEW ADVANCED =====
    case "sankey-diagram":
      return <SankeyDiagramPage />;
    case "gantt-chart":
      return <GanttChartPage />;
    case "org-chart":
      return <OrgChartPage />;
    case "virtualized-list":
      return <VirtualizedListPage />;
    case "infinite-scroll":
      return <InfiniteScrollPage />;
    case "masonry-grid":
      return <MasonryGridPage />;
    case "transfer-list":
      return <TransferListPage />;

    default:
      return <HomePage />;
  }
}