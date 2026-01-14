import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

export function InputPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Input</h2>
          <Badge>Form</Badge>
        </div>
        <p className="text-muted-foreground">
          Displays a form input field for user text entry
        </p>
      </div>

      <Separator />

      {/* Default */}
      <Card>
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Standard input field</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>
        </CardContent>
      </Card>

      {/* With Label */}
      <Card>
        <CardHeader>
          <CardTitle>With Label</CardTitle>
          <CardDescription>Input with descriptive label</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter username" />
          </div>
        </CardContent>
      </Card>

      {/* Disabled */}
      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
          <CardDescription>Non-interactive input state</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" disabled placeholder="Disabled input" />
          </div>
        </CardContent>
      </Card>

      {/* Types */}
      <Card>
        <CardHeader>
          <CardTitle>Input Types</CardTitle>
          <CardDescription>Different input types for various data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="text">Text</Label>
              <Input id="text" type="text" placeholder="Enter text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="number">Number</Label>
              <Input id="number" type="number" placeholder="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tel">Phone</Label>
              <Input id="tel" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="url">URL</Label>
              <Input id="url" type="url" placeholder="https://example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* With Helper Text */}
      <Card>
        <CardHeader>
          <CardTitle>With Helper Text</CardTitle>
          <CardDescription>Input with additional context</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="helper">API Key</Label>
            <Input id="helper" placeholder="sk-..." />
            <p className="text-xs text-muted-foreground">
              Your API key can be found in your account settings
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
