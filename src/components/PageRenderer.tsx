import { PageId } from "./SidebarNew";
import {
  HomePage,
  DSMDashboardPage,
  ButtonPageNew,
  TogglePageNew,
  ToggleGroupPageNew,
  AccessibilityPage,
  BrandLayoutPage,
  ThemeCustomizerPage,
  AlertDialogPage,
  ToastPage,
  DrawerPage,
  HoverCardPage,
  ResizablePage,
  MenubarPage,
  NavigationMenuPage,
  ContextMenuPage,
  InputPageNew,
  InputFilePage,
  TextareaPageNew,
  TextareaAutoresizePage,
  SelectPageNew,
  CheckboxPageNew,
  RadioGroupPageNew,
  SwitchPageNew,
  SliderPageNew,
  CalendarPageNew,
  LabelPageNew,
  CardPageNew,
  BadgePageNew,
  TablePageNew,
  AvatarPage,
  SeparatorPage,
  TabsPageNew,
  BreadcrumbPage,
  CommandPage,
  DropdownMenuPage,
  PaginationPage,
  AlertPageNew,
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
  OperationsListPage,
  ApprovalFlowPage,
  LiquidityCalculatorPage,
  OnboardingPage,
  CFDashboardPage,
  AdminPortalPage,
  GridShowcasePage,
  FactoringOperationPage,
  DatePickerPageNew,
  ComboboxPageNew,
  FormPageNew,
  InputOTPPageNew,
  KPIShowcasePage,
  GettingStartedPage,
  ColorPalettePage,
  TypographyScalePage,
  ComponentMaturityPage,
  APIReferencePage,
  MigrationGuidesPage,
  ContributingPage,
  TimePickerPage,
  AutocompletePage,
  ImageCropperPage,
  SignaturePadPage,
  ChatInterfacePage,
  CommentsSystemPage,
  NotificationCenterPage,
  BottomSheetPage,
  ActionSheetPage,
  PullToRefreshPage,
  SwipeableCardsPage,
  ImageGalleryPage,
  VideoPlayerPage,
  AudioPlayerPage,
  PDFViewerPage,
  ImageComparisonPage,
  MarkdownEditorPage,
  CodeEditorPage,
  FormulaEditorPage,
  AIChatInterfacePage,
  VideoConferencingPage,
  ScreenRecordingPage,
  WorkflowBuilderPage,
  PermissionManagementPage,
  AuditLogPage,
  CollaborativeCursorsPage,
  RealtimeCollaborationPage,
  PaymentFormPage,
  EditableTablePage,
  LoginFormPage,
  EmptyStatePage,
  ModalFormPage,
  TableActionsPage,
  SearchCommandPage,
  SidebarLayoutPage,
  MultiStepFormPage,
  FunnelChartPage,
  GaugesPage,
  HeatmapPage,
  InfiniteScrollPage,
  MasonryGridPage,
  SparklinesPage,
  VirtualListPage,
} from "./pages";

// Import section components for grouped patterns/atomic
import { AtomicDesignSection } from "./sections/AtomicDesignSection";
import { ComparisonSection } from "./sections/ComparisonSection";
import { ShadcnOfficialComparison } from "./sections/ShadcnOfficialComparison";

interface PageRendererProps {
  pageId: PageId;
}

export function PageRenderer({ pageId }: PageRendererProps) {
  // Map individual pages to their components
  
  switch (pageId) {
    // ===== HOME =====
    case "home":
      return <HomePage />;
    case "getting-started":
      return <GettingStartedPage />;
    case "dsm-dashboard":
      return <DSMDashboardPage />;
      
    // ===== ACTIONS =====
    case "button":
    case "button-new":
      return <ButtonPageNew />;
    case "toggle":
      return <TogglePageNew />;
    case "toggle-group":
      return <ToggleGroupPageNew />;

    // ===== FORMS =====
    case "input":
    case "input-new":
      return <InputPageNew />;
    case "input-file":
      return <InputFilePage />;
    case "textarea":
    case "textarea-new":
      return <TextareaPageNew />;
    case "textarea-autoresize":
      return <TextareaAutoresizePage />;
    case "select":
    case "select-new":
      return <SelectPageNew />;
    case "checkbox":
    case "checkbox-new":
      return <CheckboxPageNew />;
    case "radio-group":
      return <RadioGroupPageNew />;
    case "switch":
      return <SwitchPageNew />;
    case "slider":
      return <SliderPageNew />;
    case "calendar":
    case "calendar-new":
      return <CalendarPageNew />;
    case "label":
      return <LabelPageNew />;
    case "date-picker":
    case "date-picker-new":
      return <DatePickerPageNew />;
    case "date-range-picker":
      return <DateRangePickerPage />;
    case "combobox":
    case "combobox-new":
      return <ComboboxPageNew />;
    case "multi-select":
      return <MultiSelectPage />;
    case "form":
    case "form-new":
      return <FormPageNew />;
    case "input-otp":
    case "input-otp-new":
      return <InputOTPPageNew />;

    // ===== NAVIGATION =====
    case "tabs":
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
    case "card-new":
      return <CardPageNew />;
    case "badge":
    case "badge-new":
      return <BadgePageNew />;
    case "table":
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
    case "alert-new":
      return <AlertPageNew />;
    case "dialog":
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

    // ===== PATTERNS =====
    case "invoice-generator":
      return <InvoiceGeneratorPage />;
    case "invoice-upload":
      return <InvoiceUploadPage />;
    case "payment-form":
      return <PaymentFormPage />;
    case "editable-table":
      return <EditableTablePage />;
    case "login-form":
      return <LoginFormPage />;
    case "empty-state":
      return <EmptyStatePage />;
    case "modal-form":
      return <ModalFormPage />;
    case "sidebar-layout":
      return <SidebarLayoutPage />;
    case "multi-step-form":
      return <MultiStepFormPage />;
    case "table-actions":
      return <TableActionsPage />;
    case "search-command":
      return <SearchCommandPage />;

    // ===== ATOMIC DESIGN =====
    case "atomic-atoms":
    case "atomic-molecules":
    case "atomic-organisms":
    case "atomic-templates":
    case "atomic-pages":
      return <AtomicDesignSection />;

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
    case "funnel-chart":
      return <FunnelChartPage />;
    case "gauges":
      return <GaugesPage />;
    case "heatmap":
      return <HeatmapPage />;
    case "infinite-scroll":
      return <InfiniteScrollPage />;
    case "masonry-grid":
      return <MasonryGridPage />;
    case "sparklines":
      return <SparklinesPage />;
    case "virtual-list":
      return <VirtualListPage />;

    // ===== PAGES (REAL) =====
    case "kpi-showcase":
      return <KPIShowcasePage />;
    case "operations-dashboard":
      return <OperationsListPage />;
    case "approval-workflows":
      return <ApprovalFlowPage />;
    case "factoring-selection":
      return <FactoringSelectionShowcasePage />;
    case "factoring-dashboard":
      return <KPIShowcasePage />;
    case "factoring-operation-test":
      return <FactoringOperationPage />;
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
    case "grid-showcase":
      return <GridShowcasePage />;
    case "stats-dashboard":
      return <KPIShowcasePage />;

    // ===== DESIGN FOUNDATIONS =====
    case "design-tokens":
      return <ThemeCustomizerPage />;
    case "color-palette":
      return <ColorPalettePage />;
    case "typography-scale":
      return <TypographyScalePage />;
    case "logo-iconography":
      return <BrandLayoutPage />;
    case "component-showcase":
      return <DSMDashboardPage />;

    // ===== QUALITY & METRICS =====
    case "component-maturity":
      return <ComponentMaturityPage />;

    // ===== DOCUMENTATION =====
    case "api-reference":
      return <APIReferencePage />;
    case "migration-guides":
      return <MigrationGuidesPage />;
    case "contributing":
      return <ContributingPage />;

    // ===== SPECIAL PAGES =====
    case "comparison":
      return <ComparisonSection />;
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

    // ===== ADVANCED FORM INPUTS =====
    case "time-picker":
      return <TimePickerPage />;
    case "autocomplete":
      return <AutocompletePage />;
    case "image-cropper":
      return <ImageCropperPage />;
    case "signature-pad":
      return <SignaturePadPage />;

    // ===== COMMUNICATION =====
    case "chat-interface":
      return <ChatInterfacePage />;
    case "comments-system":
      return <CommentsSystemPage />;
    case "notification-center":
      return <NotificationCenterPage />;

    // ===== MOBILE COMPONENTS =====
    case "bottom-sheet":
      return <BottomSheetPage />;
    case "action-sheet":
      return <ActionSheetPage />;
    case "pull-to-refresh":
      return <PullToRefreshPage />;
    case "swipeable-cards":
      return <SwipeableCardsPage />;

    // ===== MEDIA COMPONENTS =====
    case "image-gallery":
      return <ImageGalleryPage />;
    case "video-player":
      return <VideoPlayerPage />;
    case "audio-player":
      return <AudioPlayerPage />;
    case "pdf-viewer":
      return <PDFViewerPage />;
    case "image-comparison":
      return <ImageComparisonPage />;

    // ===== RICH EDITORS =====
    case "markdown-editor":
      return <MarkdownEditorPage />;
    case "code-editor":
      return <CodeEditorPage />;
    case "formula-editor":
      return <FormulaEditorPage />;

    // ===== HERO UI PRO =====
    case "ai-chat":
      return <AIChatInterfacePage />;
    case "video-conferencing":
      return <VideoConferencingPage />;
    case "screen-recording":
      return <ScreenRecordingPage />;
    case "collaborative-cursors":
      return <CollaborativeCursorsPage />;
    case "realtime-collab":
      return <RealtimeCollaborationPage />;
    case "workflow-builder":
      return <WorkflowBuilderPage />;
    case "permission-mgmt":
      return <PermissionManagementPage />;
    case "audit-log":
      return <AuditLogPage />;

    default:
      return <HomePage />;
  }
}