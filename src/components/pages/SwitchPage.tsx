import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

export function SwitchPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Switch</h2>
          <Badge>Form</Badge>
        </div>
        <p className="text-muted-foreground">
          A control that allows users to toggle between on and off states
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Standard switch toggle</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Description</CardTitle>
          <CardDescription>Switches with additional context</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="marketing">Marketing emails</Label>
              <p className="text-xs text-muted-foreground">
                Receive emails about new products and features
              </p>
            </div>
            <Switch id="marketing" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="security">Security emails</Label>
              <p className="text-xs text-muted-foreground">
                Receive emails about account security
              </p>
            </div>
            <Switch id="security" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
          <CardDescription>Non-interactive switch state</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="disabled-off" disabled />
            <Label htmlFor="disabled-off">Disabled (off)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="disabled-on" disabled defaultChecked />
            <Label htmlFor="disabled-on">Disabled (on)</Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
