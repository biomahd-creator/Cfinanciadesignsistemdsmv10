import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

export function TextareaPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Textarea</h2>
          <Badge>Form</Badge>
        </div>
        <p className="text-muted-foreground">
          Displays a multi-line text input field for longer content
        </p>
      </div>

      <Separator />

      {/* Default */}
      <Card>
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Standard textarea field</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea placeholder="Type your message here..." />
        </CardContent>
      </Card>

      {/* With Label */}
      <Card>
        <CardHeader>
          <CardTitle>With Label</CardTitle>
          <CardDescription>Textarea with descriptive label</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message..." />
          </div>
        </CardContent>
      </Card>

      {/* Disabled */}
      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
          <CardDescription>Non-interactive textarea state</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea disabled placeholder="This textarea is disabled" />
        </CardContent>
      </Card>

      {/* With Character Count */}
      <Card>
        <CardHeader>
          <CardTitle>With Helper Text</CardTitle>
          <CardDescription>Textarea with additional context</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea 
              id="bio" 
              placeholder="Tell us about yourself..." 
              rows={5}
            />
            <p className="text-xs text-muted-foreground">
              Maximum 500 characters
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Different Sizes */}
      <Card>
        <CardHeader>
          <CardTitle>Different Sizes</CardTitle>
          <CardDescription>Textarea with varying row counts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="small">Small (3 rows)</Label>
            <Textarea id="small" rows={3} placeholder="Small textarea..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="medium">Medium (5 rows)</Label>
            <Textarea id="medium" rows={5} placeholder="Medium textarea..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="large">Large (8 rows)</Label>
            <Textarea id="large" rows={8} placeholder="Large textarea..." />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
