import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Check, X, AlertTriangle, Info, Shield, CreditCard } from "lucide-react";

export function BadgePage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Badge</h2>
          <Badge variant="outline">Data Display</Badge>
        </div>
        <p className="text-muted-foreground">
          A small label component for displaying status or categories.
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Standard Variants</CardTitle>
          <CardDescription>Primary badge styles for different semantic meanings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Extended Variants</CardTitle>
          <CardDescription>Additional status indicators</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="neutral">Neutral</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Outline Variants</CardTitle>
          <CardDescription>Subtle bordered badges for less emphasis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-3">
             {/* Note: The base badge outline variant is just one style. 
                 To have colored outlines, we usually use className overrides or 
                 if the design system supported 'outline-success' etc. 
                 Assuming standard shadcn/ui pattern, we can simulate colored outlines with classNames 
                 or just show the standard outline in different contexts. 
                 Let's show standard Outline and maybe some custom styled ones if common.
             */}
            <Badge variant="outline">Default Outline</Badge>
            <Badge variant="outline" className="border-primary text-primary">Primary Outline</Badge>
            <Badge variant="outline" className="border-destructive text-destructive">Destructive Outline</Badge>
            <Badge variant="outline" className="border-green-600 text-green-600">Success Outline</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Icons</CardTitle>
          <CardDescription>Badges combined with semantic icons</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Badge className="gap-1">
              <Check className="h-3 w-3" />
              Completed
            </Badge>
            <Badge variant="destructive" className="gap-1">
              <X className="h-3 w-3" />
              Failed
            </Badge>
            <Badge variant="warning" className="gap-1">
              <AlertTriangle className="h-3 w-3" />
              Warning
            </Badge>
            <Badge variant="info" className="gap-1">
              <Info className="h-3 w-3" />
              Info
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Use Cases</CardTitle>
          <CardDescription>Common patterns in application interfaces</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Status Indicators</h4>
            <div className="flex items-center gap-2">
              <Badge variant="success" className="gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Active
              </Badge>
              <Badge variant="neutral" className="gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Offline
              </Badge>
              <Badge variant="warning" className="gap-1 animate-pulse">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Connecting...
              </Badge>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Tagging System</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="outline">+3 more</Badge>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Account Badges</h4>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 border p-2 rounded-lg">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Admin User</span>
                <Badge>PRO</Badge>
              </div>
              <div className="flex items-center gap-2 border p-2 rounded-lg">
                <CreditCard className="h-4 w-4" />
                <span className="text-sm font-medium">Subscription</span>
                <Badge variant="success">Active</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
