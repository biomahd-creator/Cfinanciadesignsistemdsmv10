import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export function LabelPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Label</h2>
          <Badge>Forms</Badge>
        </div>
        <p className="text-muted-foreground">
          Renders an accessible label associated with controls
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>With Input</CardTitle>
          <CardDescription>Label paired with an input field</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Checkbox</CardTitle>
          <CardDescription>Label with checkbox for selection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              Accept terms and conditions
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Required Field</CardTitle>
          <CardDescription>Label indicating required input</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">
              Username <span className="text-red-500">*</span>
            </Label>
            <Input id="username" placeholder="Enter username" required />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
