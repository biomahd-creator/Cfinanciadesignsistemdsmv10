import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
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
  const currentVersion = "5.1.2";
  const lastUpdated = "January 14, 2026";
  const totalComponents = 205;
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
          {/* Version 5.1.2 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 5.1.2</CardTitle>
                    <Badge>Patch</Badge>
                    <Badge variant="outline">Latest</Badge>
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

          {/* Version 1.0.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-foreground">Version 1.0.0</CardTitle>
                    <Badge variant="destructive">Major</Badge>
                    <Badge variant="outline">Initial Release</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    November 15, 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Initial Release - Core Design System</h4>
                </div>
                <ul className="space-y-1 ml-6">
                  <li className="text-sm text-muted-foreground">
                    • 43 shadcn/ui components implemented
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Design System Foundation: Colors, Typography, Tokens
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Dark Mode with WCAG compliance (Slate palette)
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Accessibility: WCAG 2.1 Level AA (98% compliance)
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • 53 Navigation Links with accordion sidebar
                  </li>
                  <li className="text-sm text-muted-foreground">
                    • Documentation: Guidelines.md, DESIGN_TOKENS_ENFORCEMENT.md
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Summary Tab */}
        <TabsContent value="summary" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Version Summary</CardTitle>
              <CardDescription>Component evolution across all releases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="text-xs text-muted-foreground mb-1">Major Releases</p>
                    <p className="text-2xl font-semibold text-foreground">6</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="text-xs text-muted-foreground mb-1">Minor Releases</p>
                    <p className="text-2xl font-semibold text-foreground">5</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="text-xs text-muted-foreground mb-1">Patch Releases</p>
                    <p className="text-2xl font-semibold text-foreground">1</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="text-xs text-muted-foreground mb-1">Total Versions</p>
                    <p className="text-2xl font-semibold text-foreground">12</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Component Count Evolution</h3>
                  <div className="space-y-2">
                    {[
                      { version: "5.1.2", total: 205, date: "Jan 14, 2026" },
                      { version: "5.1.0", total: 205, date: "Jan 13, 2026" },
                      { version: "5.0.0", total: 205, date: "Jan 13, 2026" },
                      { version: "4.5.0", total: 204, date: "Dec 20, 2025" },
                      { version: "4.0.0", total: 200, date: "Dec 15, 2025" },
                      { version: "3.5.0", total: 170, date: "Dec 10, 2025" },
                      { version: "3.0.0", total: 130, date: "Dec 5, 2025" },
                      { version: "2.5.0", total: 107, date: "Dec 1, 2025" },
                      { version: "2.0.0", total: 99, date: "Nov 25, 2025" },
                      { version: "1.5.0", total: 77, date: "Nov 20, 2025" },
                      { version: "1.0.0", total: 76, date: "Nov 15, 2025" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Badge variant={index === 0 ? "default" : "outline"}>v{item.version}</Badge>
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">{item.total} components</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Roadmap Tab */}
        <TabsContent value="roadmap" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Future Roadmap</CardTitle>
              <CardDescription>Planned features and improvements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Version 6.0.0 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Planned</Badge>
                  <h3 className="text-lg font-semibold text-foreground">Version 6.0.0</h3>
                </div>
                <ul className="space-y-2 ml-6">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <Sparkles className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span><strong>Figma Plugin Integration</strong>: Sync design tokens with Figma</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <Sparkles className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span><strong>Component Playground</strong>: Interactive component editor</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <Sparkles className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span><strong>Theme Builder</strong>: Advanced theme creation tool</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <Sparkles className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span><strong>Export System</strong>: Export design system as npm package</span>
                  </li>
                </ul>
              </div>

              <Separator />

              {/* Version 5.2.0 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Planned</Badge>
                  <h3 className="text-lg font-semibold text-foreground">Version 5.2.0</h3>
                </div>
                <ul className="space-y-2 ml-6">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span><strong>Changelog Page</strong>: Visual changelog in sidebar ✅ <em>(Completed)</em></span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <Sparkles className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span><strong>Version Comparison</strong>: Side-by-side version diffs</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <Sparkles className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span><strong>Component Analytics</strong>: Usage tracking and recommendations</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
