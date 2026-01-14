import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

export function CheckboxPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Checkbox</h2>
          <Badge>Form</Badge>
        </div>
        <p className="text-muted-foreground">
          A control that allows the user to toggle between checked and unchecked
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Standard checkbox</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Checkboxes</CardTitle>
          <CardDescription>Group of related checkboxes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="email" defaultChecked />
              <Label htmlFor="email">Email notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sms" />
              <Label htmlFor="sms">SMS notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="push" defaultChecked />
              <Label htmlFor="push">Push notifications</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
          <CardDescription>Non-interactive checkbox state</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">Disabled checkbox</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <Label htmlFor="disabled-checked">Disabled checked</Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
