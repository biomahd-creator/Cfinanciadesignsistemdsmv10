import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { 
  CheckCircle2, 
  Package, 
  Palette, 
  Layers, 
  Accessibility, 
  Code2,
  Zap,
  Shield,
  Sparkles,
  Users,
  TrendingUp,
  Activity,
  Grid3x3,
  Scale
} from "lucide-react";
import { Logo } from "../Logo";

export function HomePage() {
  const stats = [
    { label: "Total Components", value: "110+", icon: Package, color: "text-primary" },
    { label: "DSM Migration", value: "100%", icon: Sparkles, color: "text-green-500" },
    { label: "Official Components", value: "43", icon: CheckCircle2, color: "text-success" },
    { label: "WCAG AA Compliance", value: "98%", icon: Accessibility, color: "text-warning" },
  ];

  const features = [
    {
      icon: Palette,
      title: "Design Tokens",
      description: "Design system based on CSS tokens with corporate colors #DEFB49 and #1C2D3A",
      badge: "Active"
    },
    {
      icon: Accessibility,
      title: "WCAG 2.1 AA Compliant",
      description: "98% compliance with optimized contrast ratios for accessibility",
      badge: "Verified"
    },
    {
      icon: Layers,
      title: "Atomic Design",
      description: "Hierarchical architecture with Atoms, Molecules, Organisms, Templates and Pages",
      badge: "Implemented"
    },
    {
      icon: Code2,
      title: "shadcn/ui Base",
      description: "Built on official shadcn/ui components with Radix UI primitives",
      badge: "Stable"
    },
    {
      icon: Zap,
      title: "Reactive & Dynamic",
      description: "Real-time Theme Customizer with light/dark mode support",
      badge: "Live"
    },
    {
      icon: Shield,
      title: "Satoshi Typography",
      description: "Unique typographic system with predefined scales and consistent weights",
      badge: "System"
    },
  ];

  const techStack = [
    { name: "React 18", version: "18.x" },
    { name: "TypeScript", version: "5.x" },
    { name: "Tailwind CSS", version: "4.0" },
    { name: "shadcn/ui", version: "Latest" },
    { name: "Radix UI", version: "Latest" },
    { name: "Recharts", version: "2.x" },
  ];

  const progress = {
    components: 90, // 43/48 official components
    patterns: 100, // 11/11 complete patterns
    pages: 100, // 4/4 real pages
    accessibility: 98, // WCAG compliance
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12 elevation-2">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <Logo size="lg" variant="light" />
            <Badge variant="default" className="text-xs px-3 py-1">
              v1.0.0
            </Badge>
            <Badge className="text-xs px-3 py-1 bg-green-500 hover:bg-green-600 gap-1">
              <Sparkles className="h-3 w-3" />
              DSM 100%
            </Badge>
          </div>
          <h1 className="mb-4">
            Design System Manager
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Complete design system for Factoring applications, built with React, 
            Tailwind CSS and shadcn/ui. Focused on accessibility, consistency and scalability.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="gap-2">
              <Activity className="h-3 w-3" />
              Last update: December 2024
            </Badge>
            <Badge variant="outline" className="gap-2">
              <Users className="h-3 w-3" />
              Atomic Design methodology
            </Badge>
            <Badge variant="outline" className="gap-2">
              <TrendingUp className="h-3 w-3" />
              110+ Components
            </Badge>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -z-0" />
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="elevation-1 hover:elevation-2 transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">{stat.label}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress Section */}
      <Card className="elevation-1 col-span-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle>Implementation Status</CardTitle>
          </div>
          <CardDescription>
            Current development progress of the Design System
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Official shadcn/ui Components</span>
              <span className="font-semibold">{progress.components}%</span>
            </div>
            <Progress value={progress.components} className="h-2" />
            <p className="text-xs text-muted-foreground">43/48 components implemented</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Composite Patterns</span>
              <span className="font-semibold">{progress.patterns}%</span>
            </div>
            <Progress value={progress.patterns} className="h-2" />
            <p className="text-xs text-muted-foreground">11/11 UX patterns complete</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Real Pages (Factoring)</span>
              <span className="font-semibold">{progress.pages}%</span>
            </div>
            <Progress value={progress.pages} className="h-2" />
            <p className="text-xs text-muted-foreground">4/4 functional pages implemented</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">WCAG 2.1 AA Accessibility</span>
              <span className="font-semibold">{progress.accessibility}%</span>
            </div>
            <Progress value={progress.accessibility} className="h-2" />
            <p className="text-xs text-muted-foreground">Optimized contrast ratios</p>
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div>
        <div className="mb-6">
          <h2 className="mb-2">Main Features</h2>
          <p className="text-muted-foreground">
            Foundations and pillars of the Design System
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="elevation-1 hover:elevation-2 transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Hero UI Inspired Components */}
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <h2>Hero UI Pro Level Components</h2>
            <Badge variant="default" className="text-xs">
              Premium Features
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Advanced components inspired by Hero UI Pro that elevate the system beyond basic shadcn/ui
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Advanced Charts */}
          <Card className="elevation-1 hover:elevation-2 transition-shadow border-l-4 border-l-chart-2">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-chart-2/10">
                  <Activity className="h-5 w-5 text-chart-2" />
                </div>
                <Badge variant="outline" className="text-xs">
                  Recharts
                </Badge>
              </div>
              <CardTitle className="text-lg">Advanced Charts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                6 types of professional charts with full integration to the Theme Customizer and dynamic support for light/dark mode.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Line</Badge>
                <Badge variant="secondary" className="text-xs">Bar</Badge>
                <Badge variant="secondary" className="text-xs">Pie</Badge>
                <Badge variant="secondary" className="text-xs">Area</Badge>
                <Badge variant="secondary" className="text-xs">Mixed</Badge>
                <Badge variant="secondary" className="text-xs">Responsive</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Data Tables */}
          <Card className="elevation-1 hover:elevation-2 transition-shadow border-l-4 border-l-chart-3">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-chart-3/10">
                  <Grid3x3 className="h-5 w-5 text-chart-3" />
                </div>
                <Badge variant="outline" className="text-xs">
                  TanStack Table
                </Badge>
              </div>
              <CardTitle className="text-lg">Advanced Data Tables</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Tables with sorting, filtering, pagination, multiple selection and data export.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Sorting</Badge>
                <Badge variant="secondary" className="text-xs">Filtering</Badge>
                <Badge variant="secondary" className="text-xs">Pagination</Badge>
                <Badge variant="secondary" className="text-xs">Export</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Rich Text Editor */}
          <Card className="elevation-1 hover:elevation-2 transition-shadow border-l-4 border-l-chart-4">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-chart-4/10">
                  <Code2 className="h-5 w-5 text-chart-4" />
                </div>
                <Badge variant="outline" className="text-xs">
                  Tiptap
                </Badge>
              </div>
              <CardTitle className="text-lg">Rich Text Editor</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Complete WYSIWYG editor with text formatting, lists, links, images and markdown.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Bold/Italic</Badge>
                <Badge variant="secondary" className="text-xs">Lists</Badge>
                <Badge variant="secondary" className="text-xs">Links</Badge>
                <Badge variant="secondary" className="text-xs">Images</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Kanban Board */}
          <Card className="elevation-1 hover:elevation-2 transition-shadow border-l-4 border-l-chart-5">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-chart-5/10">
                  <Layers className="h-5 w-5 text-chart-5" />
                </div>
                <Badge variant="outline" className="text-xs">
                  React DnD
                </Badge>
              </div>
              <CardTitle className="text-lg">Kanban Board</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Drag & drop board for task management with customizable columns and visual states.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Drag & Drop</Badge>
                <Badge variant="secondary" className="text-xs">Columns</Badge>
                <Badge variant="secondary" className="text-xs">States</Badge>
              </div>
            </CardContent>
          </Card>

          {/* File Uploader */}
          <Card className="elevation-1 hover:elevation-2 transition-shadow border-l-4 border-l-warning">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Zap className="h-5 w-5 text-warning" />
                </div>
                <Badge variant="outline" className="text-xs">
                  React Dropzone
                </Badge>
              </div>
              <CardTitle className="text-lg">File Uploader</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Dropzone with drag & drop, image preview, type validation and upload progress.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Drag & Drop</Badge>
                <Badge variant="secondary" className="text-xs">Preview</Badge>
                <Badge variant="secondary" className="text-xs">Validation</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Multi Select */}
          <Card className="elevation-1 hover:elevation-2 transition-shadow border-l-4 border-l-success">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-success/10">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                </div>
                <Badge variant="outline" className="text-xs">
                  Custom Pattern
                </Badge>
              </div>
              <CardTitle className="text-lg">Multi Select & Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Multi-selectors with chips, filtered search and timeline component for flows.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Multi Select</Badge>
                <Badge variant="secondary" className="text-xs">Timeline</Badge>
                <Badge variant="secondary" className="text-xs">Search</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Note */}
        <Card className="mt-6 bg-primary/5 border-primary/20 elevation-1">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Scale className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Comparison with Hero UI</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  This Design System implements advanced components that are normally only found 
                  in premium libraries like Hero UI Pro ($299), but maintaining full code control 
                  and the flexibility of shadcn/ui (free and open-source).
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="font-semibold mb-1">Hero UI Pro</p>
                    <p className="text-muted-foreground">• License: $299</p>
                    <p className="text-muted-foreground">• 100+ components</p>
                    <p className="text-muted-foreground">• Closed source code</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Our DSM</p>
                    <p className="text-muted-foreground">• License: Open Source</p>
                    <p className="text-muted-foreground">• 110+ components</p>
                    <p className="text-muted-foreground">• Full code control</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Tech Stack */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="elevation-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-chart-2" />
              <CardTitle>Technology Stack</CardTitle>
            </div>
            <CardDescription>Libraries and frameworks used</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{tech.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {tech.version}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-success" />
              <CardTitle>WCAG Heuristics</CardTitle>
            </div>
            <CardDescription>Accessibility standards compliance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium">Color Contrast</p>
                <p className="text-xs text-muted-foreground">
                  Ratios above 4.5:1 for normal text and 3:1 for large text
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium">Keyboard Navigation</p>
                <p className="text-xs text-muted-foreground">
                  All interactive components are accessible via Tab/Enter/Escape
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium">Screen Readers</p>
                <p className="text-xs text-muted-foreground">
                  ARIA labels and semantic roles in all components
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium">Focus Visible</p>
                <p className="text-xs text-muted-foreground">
                  Focus ring (#DEFB49) clearly visible in light and dark modes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Note */}
      <Card className="bg-muted/30 elevation-1">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-warning/10">
              <Activity className="h-5 w-5 text-warning" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Continuously Evolving System</h3>
              <p className="text-sm text-muted-foreground mb-3">
                This Design System is actively under development. Components are regularly updated 
                with accessibility improvements, performance enhancements and new features.
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>Last update:</strong> December 2024 • <strong>Version:</strong> DSM v1.0.0 • <strong>Phase:</strong> Iterative Development
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}