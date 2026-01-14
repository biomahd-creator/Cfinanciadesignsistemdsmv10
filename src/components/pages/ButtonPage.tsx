import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { 
  Mail, 
  Loader2, 
  ChevronRight, 
  Download,
  Trash2,
  Plus,
  Settings
} from "lucide-react";

export function ButtonPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Button</h2>
          <Badge>shadcn/ui</Badge>
        </div>
        <p className="text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      <Separator />

      {/* Pills */}
      <Card>
        <CardHeader>
          <CardTitle>Pills</CardTitle>
          <CardDescription>
            Different visual styles for various use cases
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full">Default</Button>
            <Button variant="secondary" className="rounded-full">Secondary</Button>
            <Button variant="destructive" className="rounded-full">Destructive</Button>
            <Button variant="outline" className="rounded-full">Outline</Button>
            <Button variant="ghost" className="rounded-full">Ghost</Button>
            <Button variant="link" className="rounded-full">Link</Button>
          </div>
        </CardContent>
      </Card>

            {/* Standard */}
      <Card>
        <CardHeader>
          <CardTitle>Standard</CardTitle>
          <CardDescription>
            Different visual styles for various use cases
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>
            Different button sizes for hierarchy and spacing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* With Icons */}
      <Card>
        <CardHeader>
          <CardTitle>With Icons</CardTitle>
          <CardDescription>
            Buttons with leading or trailing icons
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="secondary">
              Continue
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Loading State */}
      <Card>
        <CardHeader>
          <CardTitle>Loading State</CardTitle>
          <CardDescription>
            Disabled button with loading indicator
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
            <Button variant="outline" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Disabled */}
      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
          <CardDescription>
            Non-interactive button state
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button variant="secondary" disabled>Disabled</Button>
            <Button variant="outline" disabled>Disabled</Button>
          </div>
        </CardContent>
      </Card>

      {/* Examples */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Common Patterns</CardTitle>
          <CardDescription>
            Real-world usage examples
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* CTA Pattern */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Call to Action</h4>
            <div className="flex gap-3">
              <Button size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Create New
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          <Separator />

          {/* Form Actions */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Form Actions</h4>
            <div className="flex gap-3">
              <Button>Save Changes</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>

          <Separator />

          {/* Destructive Action */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Destructive Action</h4>
            <div className="flex gap-3">
              <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Account
              </Button>
              <Button variant="outline">Keep Account</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Installation */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Installation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <code className="block p-4 bg-secondary text-white rounded-lg text-sm">
              npx shadcn@latest add button
            </code>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Usage</h4>
            <code className="block p-4 bg-muted rounded-lg text-sm">
              {`import { Button } from "@/components/ui/button"`}
              <br />
              <br />
              {`<Button variant="outline">Button</Button>`}
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}