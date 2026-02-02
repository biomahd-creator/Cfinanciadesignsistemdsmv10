import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Package,
  Calendar,
  GitBranch,
  TrendingUp,
  Sparkles,
  Wrench,
  AlertTriangle,
  CheckCircle2,
  Rocket,
  Zap,
  FileText,
  BarChart3,
} from "lucide-react";

export function ChangelogPage() {
  const currentVersion = "6.0.0";
  const lastUpdated = "February 2, 2026";
  const totalComponents = 98;
  const wcagCompliance = "98%";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <GitBranch className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-semibold text-foreground">Changelog</h1>
        </div>
        <p className="text-muted-foreground">
          Complete version history and release notes for the Financio Design System
        </p>
      </div>

      {/* Current Version Card */}
      <Card className="border-primary bg-primary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Package className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-foreground">Current Version</CardTitle>
                <CardDescription>Latest stable release</CardDescription>
              </div>
            </div>
            <Badge variant="default" className="text-lg px-4 py-1">
              v{currentVersion}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Last Updated</p>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <p className="text-sm font-medium text-foreground">{lastUpdated}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Total Components</p>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" />
                <p className="text-sm font-medium text-foreground">{totalComponents}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">WCAG Compliance</p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <p className="text-sm font-medium text-foreground">{wcagCompliance}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Status</p>
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-primary" />
                <p className="text-sm font-medium text-foreground">Production Ready</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="releases" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="releases">Releases</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
        </TabsList>

        {/* Releases Tab */}
        <TabsContent value="releases" className="space-y-6 mt-6">
          {/* Version 6.0.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 6.0.0</CardTitle>
                    <Badge variant="destructive">Major</Badge>
                    <Badge variant="outline">Latest</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    February 2, 2026
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Migration & Refactor</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • <strong>NPM Migration</strong>: Began migration to <code>@biomahd-creator/financio-design-system</code>.
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • <strong>C-Financia Client Flow</strong>: Implemented Endosatario, Negociación, and Bancaria sections using standardized components.
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • <strong>New Components</strong>: Added <code>ChartLegendItem</code>, <code>ColorBox</code>, and <code>ColorPresetButton</code> to business library.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Fixed & Improved</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • Fixed runtime errors in <code>ChartShowcase.tsx</code> caused by missing dependencies.
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Removed static component counter from Sidebar for cleaner UI.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Version 5.2.1 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 5.2.1</CardTitle>
                    <Badge>Patch</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    January 30, 2026
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Maintenance & Cleanup</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • <strong>Removed Redundant Components</strong>: Eliminated RefactorMultiStepPage and RefactorMultiStepVerticalPage
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Updated component count from 97 to 95 components
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Updated Business Patterns count from 23 to 21
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Cleaned up all references in PageRenderer, SidebarNew, and index.tsx
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Removed redundant documentation files (REFACTORING_COMPLETE.md, DSM_AUDIT_REPORT.md, CFINANCIA_DSM_AUDIT.md)
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Impact</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • Cleaner codebase with no duplicate multi-step form implementations
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • More accurate component metrics
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Reduced maintenance burden
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Version 5.2.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 5.2.0</CardTitle>
                    <Badge variant="secondary">Minor</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    January 14, 2026
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Improved</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • Help Center: Added internal padding (p-6) for better spacing and readability
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Documentation: Updated HELP_SYSTEM_IMPLEMENTATION.md to version 1.1
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Fixed</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • Help Center content spacing consistency
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Version 5.1.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 5.1.0</CardTitle>
                    <Badge variant="secondary">Minor</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    January 13, 2026
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Added - Icon Gallery Expansion</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • Icon Gallery: Massive expansion from 27 to <strong>~520 icons</strong> from lucide-react
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Categories: Increased from 4 to <strong>21 semantic categories</strong>
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Features: Real-time search, category filters, click-to-copy code
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Tabs: 5 organized tabs (All, Sizes, Colors, Usage, Examples)
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Documentation: Generated 5 comprehensive documents
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Performance</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • Optimized with useMemo hooks for efficient rendering
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Tree-shaking support for lucide-react imports
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Zero inline styles, 100% CSS tokens
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Version 5.0.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 5.0.0</CardTitle>
                    <Badge variant="destructive">Major</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    January 13, 2026
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Added - Complete Help System</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • Contextual Help: Inline tooltips and popovers for form fields
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Help Center: Comprehensive documentation panel with 3 tabs (FAQs, Guides, Videos)
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Product Tour: Guided walkthroughs with driver.js (3 predefined tours)
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Components Created: 8 new components + demo page
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <h4 className="text-sm font-semibold text-foreground">Breaking Changes</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • Requires driver.js installation for Product Tour
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • HelpProvider must wrap the app in App.tsx
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Version 4.5.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 4.5.0</CardTitle>
                    <Badge variant="secondary">Minor</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    December 20, 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Added - DSM (Design System Manager)</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • Code Block Component: Syntax highlighting with copy button
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Component Showcase: Reusable template for component documentation
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • DSM Dashboard: Central hub for design system metrics
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Example: ButtonPageNew.tsx with complete documentation
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Version 4.0.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 4.0.0</CardTitle>
                    <Badge variant="destructive">Major</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    December 15, 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Added - Business Patterns & Modules</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • Business Patterns: 15+ reusable components (/components/business/)
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Factoring App: Complete application module with 15+ screens
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Architecture: New directory structure for business components
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <h4 className="text-sm font-semibold text-foreground">Breaking Changes</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • New directory structure for business components
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • New PageIds for factoring modules
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Version 3.5.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 3.5.0</CardTitle>
                    <Badge variant="secondary">Minor</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    December 10, 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Added - Advanced Components (20)</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • Charts: FunnelChart, GaugeChart, Heatmap, Sparkline, TreemapChart
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Forms: ConditionalForm, FormBuilder, MultiColumnForm, FileUploader
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Data: DataTable, PivotTable, TreeTable, ExportData
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • UI: Combobox, MultiSelect, DatePickerWithPresets, DateRangePicker
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Other: InvoiceGenerator, RichTextEditor, StepIndicator, Timeline
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Version 3.0.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 3.0.0</CardTitle>
                    <Badge variant="destructive">Major</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    December 5, 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Added - Atomic Design System</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • Atoms (5): Button, Input, Badge, Label, Avatar
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Molecules (6): SearchBar, StatCard, FormField, ActionButton, FilterChip, TimelineItem
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Organisms (5): NavigationBar, LoginForm, FilterBar, StatsGrid, InvoiceTable
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Templates (3): AuthTemplate, DashboardTemplate, ListPageTemplate
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Pages (4): LoginPage, DashboardPage, InvoiceListPage, FactoringSelectionPage
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <h4 className="text-sm font-semibold text-foreground">Breaking Changes</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • New component hierarchy and import paths
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • New atomic design patterns
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Version 2.5.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 2.5.0</CardTitle>
                    <Badge variant="secondary">Minor</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    December 1, 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Added - Composed Patterns</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • 8 Business Patterns: StatsDashboard, DataTableAdvanced, MultiStepWizard
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • NotificationCenter, QuickActionToolbar, UploadZone
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • ApprovalTimeline, AdvancedFilterPanel
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Version 2.0.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 2.0.0</CardTitle>
                    <Badge variant="destructive">Major</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    November 25, 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Added - DSM "New" Pages</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • 22 New Documented Pages with full DSM structure
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Preview + Code tabs, Usage section, Props API tables
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Multiple examples per component with copy-to-clipboard
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Version 1.5.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 1.5.0</CardTitle>
                    <Badge variant="secondary">Minor</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    November 20, 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Added - Theme Customizer</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • Interactive theme configuration with live preview
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Primary, secondary, link color pickers
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Border radius control and elevation system
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Export/Import theme configurations
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Summary Tab */}
        <TabsContent value="summary" className="space-y-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  <CardTitle className="text-foreground">Component Distribution</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Core Components</span>
                    <span className="font-medium text-foreground">45</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Advanced Components</span>
                    <span className="font-medium text-foreground">20</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Business Patterns</span>
                    <span className="font-medium text-foreground">21</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Templates</span>
                    <span className="font-medium text-foreground">9</span>
                  </li>
                  <Separator className="my-2" />
                  <li className="flex justify-between font-bold">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">95</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-foreground">System Health</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Documentation Coverage</span>
                    <span className="text-green-600 font-medium">100%</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">TypeScript Strictness</span>
                    <span className="text-green-600 font-medium">100%</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Accessibility (WCAG AA)</span>
                    <span className="text-green-600 font-medium">98%</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Responsive Support</span>
                    <span className="text-green-600 font-medium">100%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Roadmap Tab */}
        <TabsContent value="roadmap" className="space-y-6 mt-6">
          <div className="relative border-l border-primary/20 ml-4 space-y-8 py-2">
            <div className="relative pl-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <div className="mb-1 text-sm text-primary font-semibold">Q1 2026 (Current)</div>
              <h3 className="text-lg font-semibold text-foreground">Performance & Stability</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Focus on tree-shaking, bundle size reduction, and accessibility improvements.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline">In Progress</Badge>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-muted-foreground bg-background" />
              <div className="mb-1 text-sm text-muted-foreground font-semibold">Q2 2026</div>
              <h3 className="text-lg font-semibold text-foreground">Mobile Components</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Dedicated mobile patterns, touch gestures, and bottom sheet improvements.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Planned</Badge>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-muted-foreground bg-background" />
              <div className="mb-1 text-sm text-muted-foreground font-semibold">Q3 2026</div>
              <h3 className="text-lg font-semibold text-foreground">Theming Engine v2</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Advanced theming with support for multiple brand presets and runtime switching.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Planned</Badge>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
