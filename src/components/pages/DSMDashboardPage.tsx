import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { 
  CheckCircle2, 
  BookOpen, 
  Code2, 
  FileCode, 
  Sparkles,
  TrendingUp,
  Award,
  Rocket,
  Target,
  Zap
} from "lucide-react";

export function DSMDashboardPage() {
  const migratedComponents = [
    { name: "Button", category: "Actions", props: 6, examples: 5, status: "completed" },
    { name: "Input", category: "Forms", props: 10, examples: 10, status: "completed" },
    { name: "Card", category: "Data Display", props: 2, examples: 8, status: "completed" },
    { name: "Select", category: "Forms", props: 7, examples: 8, status: "completed" },
    { name: "Dialog", category: "Feedback", props: 4, examples: 7, status: "completed" },
    { name: "Badge", category: "Data Display", props: 3, examples: 8, status: "completed" },
    { name: "Alert", category: "Feedback", props: 3, examples: 10, status: "completed" },
    { name: "Checkbox", category: "Forms", props: 8, examples: 8, status: "completed" },
    { name: "Tabs", category: "Navigation", props: 5, examples: 7, status: "completed" },
    { name: "Table", category: "Data Display", props: 2, examples: 8, status: "completed" },
  ];

  const totalProps = migratedComponents.reduce((acc, c) => acc + c.props, 0);
  const totalExamples = migratedComponents.reduce((acc, c) => acc + c.examples, 0);

  const stats = [
    { label: "Components Migrated", value: "10/10", icon: CheckCircle2, color: "text-green-500" },
    { label: "Props Documented", value: totalProps.toString(), icon: FileCode, color: "text-blue-500" },
    { label: "Code Examples", value: totalExamples.toString(), icon: Code2, color: "text-purple-500" },
    { label: "Completion Rate", value: "100%", icon: Award, color: "text-primary" },
  ];

  const categoryStats = [
    { category: "Actions", count: 1 },
    { category: "Forms", count: 3 },
    { category: "Navigation", count: 1 },
    { category: "Data Display", count: 3 },
    { category: "Feedback", count: 2 },
  ];

  return (
    <div className="space-y-8 max-w-7xl">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-lg -z-10" />
        <div className="p-8">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-semibold">DSM Migration Complete!</h1>
            <Badge className="gap-1 bg-green-500 hover:bg-green-600">
              <CheckCircle2 className="h-3 w-3" />
              100%
            </Badge>
          </div>
          <p className="text-muted-foreground text-lg">
            All core components have been successfully migrated to the new Design System Manager format with complete documentation.
          </p>
        </div>
      </div>

      <Separator />

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.label}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              {stat.label === "Completion Rate" && (
                <Progress value={100} className="mt-2 h-2" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress Timeline */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Migration Progress
              </CardTitle>
              <CardDescription>10 components migrated to DSM format</CardDescription>
            </div>
            <Badge variant="outline" className="gap-2">
              <Target className="h-4 w-4" />
              Goal Achieved
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Overall Progress</p>
                <p className="text-sm text-muted-foreground">10 of 10 components completed</p>
              </div>
              <span className="text-2xl font-bold text-primary">100%</span>
            </div>
            <Progress value={100} className="h-3" />
            
            <div className="grid grid-cols-5 gap-2 pt-4">
              {migratedComponents.map((component, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="h-2 w-full rounded-full bg-green-500" />
                  <span className="text-xs text-center">{component.name}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Migrated Components List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Migrated Components
          </CardTitle>
          <CardDescription>
            All components now include Props API, Usage documentation, and multiple code examples
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {migratedComponents.map((component, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{component.name}</p>
                      <Badge variant="outline" className="text-xs">
                        {component.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {component.props} props • {component.examples} examples
                    </p>
                  </div>
                </div>
                <Badge className="gap-1">
                  <Sparkles className="h-3 w-3" />
                  NEW
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Components by Category</CardTitle>
            <CardDescription>Distribution across UI categories</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {categoryStats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>{stat.category}</span>
                  <span className="font-medium">{stat.count} component{stat.count > 1 ? 's' : ''}</span>
                </div>
                <Progress value={(stat.count / 10) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Key Achievements
            </CardTitle>
            <CardDescription>What we've accomplished</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium">Complete Props Documentation</p>
                <p className="text-sm text-muted-foreground">
                  {totalProps} props fully documented with types and defaults
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium">Interactive Code Examples</p>
                <p className="text-sm text-muted-foreground">
                  {totalExamples} live examples with copy-to-clipboard
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium">Storybook-Style UI</p>
                <p className="text-sm text-muted-foreground">
                  Professional documentation interface with tabs and previews
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium">Developer Experience</p>
                <p className="text-sm text-muted-foreground">
                  Syntax highlighting, usage guides, and best practices
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            What's Next?
          </CardTitle>
          <CardDescription>
            Suggested next steps to expand the Design System
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border">
              <h4 className="font-medium mb-2">Phase 2: Secondary Components</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Migrate Tooltip, Progress, Skeleton, and other utility components
              </p>
              <Button size="sm" variant="outline">
                Start Migration
              </Button>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-medium mb-2">Documentation Export</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Export documentation to Markdown or PDF for offline access
              </p>
              <Button size="sm" variant="outline">
                Export Docs
              </Button>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-medium mb-2">Component Playground</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Interactive playground to test component combinations
              </p>
              <Button size="sm" variant="outline">
                Launch Playground
              </Button>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-medium mb-2">Theme Customization</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Expand theme customizer with more token controls
              </p>
              <Button size="sm" variant="outline">
                Configure Themes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Celebration Footer */}
      <Card className="border-primary/50 bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-center gap-3 text-center">
            <Award className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">
                Congratulations! 🎉
              </h3>
              <p className="text-sm text-muted-foreground">
                You've successfully migrated 10 core components to the DSM format.
                This is a major milestone in building a world-class design system!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
