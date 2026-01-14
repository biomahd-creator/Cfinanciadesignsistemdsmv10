import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

export function AlertPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Alert</h2>
          <Badge>Feedback</Badge>
        </div>
        <p className="text-muted-foreground">
          Displays a callout for user attention
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Default Alert</CardTitle>
          <CardDescription>Standard information alert</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the CLI.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Success Alert</CardTitle>
          <CardDescription>Positive confirmation message</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-green-500/50 bg-green-500/10">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <AlertTitle className="text-green-500">Success</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Warning Alert</CardTitle>
          <CardDescription>Caution or warning message</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-yellow-500/50 bg-yellow-500/10">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <AlertTitle className="text-yellow-500">Warning</AlertTitle>
            <AlertDescription>
              This action cannot be undone. Please proceed with caution.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Destructive Alert</CardTitle>
          <CardDescription>Error or critical message</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
