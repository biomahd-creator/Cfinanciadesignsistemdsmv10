import { ComponentShowcase } from "../components/ui/component-showcase";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { AlertCircle, CheckCircle, Info, AlertTriangle, Terminal, Zap, Lock, Mail, Bell } from "lucide-react";
import { Button } from "../components/ui/button";

export function AlertPage() {
  return (
    <ComponentShowcase
      title="Alert"
      description="Displays a callout for user attention."
      category="Feedback"
      
      // Main Preview
      preview={
        <div className="grid gap-4 max-w-2xl">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the CLI.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      }
      
      // Main Code
      code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export function AlertDemo() {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  );
}`}
      
      // Usage
      usage="Importa los componentes Alert desde @/components/ui/alert. Usa Alert como contenedor, AlertTitle para el título y AlertDescription para el mensaje. Opcionalmente agrega un icono."
      usageCode={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function MyComponent() {
  return (
    <Alert>
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Message</AlertDescription>
    </Alert>
  );
}`}
      
      // Props Documentation
      props={[
        {
          name: "variant",
          type: '"default" | "destructive"',
          default: '"default"',
          description: "Estilo visual del alert (default o destructivo/error)",
        },
        {
          name: "className",
          type: "string",
          description: "Clases CSS adicionales para el alert",
        },
        {
          name: "children",
          type: "ReactNode",
          description: "Contenido del alert (AlertTitle, AlertDescription, iconos, etc.)",
          required: true,
        },
      ]}
      
      // Examples
      examples={[
        {
          title: "All Variants",
          description: "Variantes default y destructive del alert",
          preview: (
            <div className="grid gap-4 max-w-2xl">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Default</AlertTitle>
                <AlertDescription>
                  This is a default informational alert.
                </AlertDescription>
              </Alert>
              
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Destructive</AlertTitle>
                <AlertDescription>
                  This is a destructive error alert.
                </AlertDescription>
              </Alert>
            </div>
          ),
          code: `<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Default</AlertTitle>
  <AlertDescription>
    This is a default informational alert.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Destructive</AlertTitle>
  <AlertDescription>
    This is a destructive error alert.
  </AlertDescription>
</Alert>`
        },
        {
          title: "Success Alert",
          description: "Alert personalizado para mensajes de éxito",
          preview: (
            <Alert className="border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>
          ),
          code: `<Alert className="border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400">
  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>`
        },
        {
          title: "Warning Alert",
          description: "Alert personalizado para advertencias",
          preview: (
            <Alert className="border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
              <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                This action cannot be undone. Please proceed with caution.
              </AlertDescription>
            </Alert>
          ),
          code: `<Alert className="border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
  <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    This action cannot be undone. Please proceed with caution.
  </AlertDescription>
</Alert>`
        },
        {
          title: "Info Alert",
          description: "Alert informativo con estilo personalizado",
          preview: (
            <Alert className="border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-400">
              <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>
                New features have been added to your dashboard. Check them out!
              </AlertDescription>
            </Alert>
          ),
          code: `<Alert className="border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-400">
  <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>
    New features have been added to your dashboard.
  </AlertDescription>
</Alert>`
        },
        {
          title: "Without Icon",
          description: "Alert sin icono, solo con texto",
          preview: (
            <Alert>
              <AlertTitle>Important Update</AlertTitle>
              <AlertDescription>
                We've updated our terms of service. Please review the changes at your earliest convenience.
              </AlertDescription>
            </Alert>
          ),
          code: `<Alert>
  <AlertTitle>Important Update</AlertTitle>
  <AlertDescription>
    We've updated our terms of service.
  </AlertDescription>
</Alert>`
        },
        {
          title: "With Actions",
          description: "Alert con botones de acción",
          preview: (
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Upgrade Available</AlertTitle>
              <AlertDescription className="mt-2">
                A new version of the CLI is available. Would you like to update now?
              </AlertDescription>
              <div className="flex gap-2 mt-4">
                <Button size="sm">Update Now</Button>
                <Button size="sm" variant="outline">Remind Me Later</Button>
              </div>
            </Alert>
          ),
          code: `<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Upgrade Available</AlertTitle>
  <AlertDescription className="mt-2">
    A new version is available. Update now?
  </AlertDescription>
  <div className="flex gap-2 mt-4">
    <Button size="sm">Update Now</Button>
    <Button size="sm" variant="outline">Remind Me Later</Button>
  </div>
</Alert>`
        },
        {
          title: "With Link",
          description: "Alert con enlace inline",
          preview: (
            <Alert>
              <Mail className="h-4 w-4" />
              <AlertTitle>Email Verification Required</AlertTitle>
              <AlertDescription>
                Please check your inbox and verify your email address. 
                <a href="#" className="font-medium underline underline-offset-4 ml-1">
                  Resend verification email
                </a>
              </AlertDescription>
            </Alert>
          ),
          code: `<Alert>
  <Mail className="h-4 w-4" />
  <AlertTitle>Email Verification Required</AlertTitle>
  <AlertDescription>
    Please check your inbox and verify your email. 
    <a href="#" className="font-medium underline underline-offset-4 ml-1">
      Resend verification email
    </a>
  </AlertDescription>
</Alert>`
        },
        {
          title: "Compact Alert",
          description: "Alert compacto sin título, solo descripción",
          preview: (
            <div className="grid gap-3 max-w-2xl">
              <Alert>
                <Zap className="h-4 w-4" />
                <AlertDescription>
                  System maintenance scheduled for tonight at 11 PM EST.
                </AlertDescription>
              </Alert>
              
              <Alert variant="destructive">
                <Lock className="h-4 w-4" />
                <AlertDescription>
                  Your account has been locked due to suspicious activity.
                </AlertDescription>
              </Alert>
            </div>
          ),
          code: `<Alert>
  <Zap className="h-4 w-4" />
  <AlertDescription>
    System maintenance scheduled for tonight.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <Lock className="h-4 w-4" />
  <AlertDescription>
    Your account has been locked.
  </AlertDescription>
</Alert>`
        },
        {
          title: "Notification Style",
          description: "Alert estilo notificación con borde lateral",
          preview: (
            <div className="grid gap-4 max-w-2xl">
              <Alert className="border-l-4 border-l-blue-500">
                <Bell className="h-4 w-4 text-blue-500" />
                <AlertTitle>New Message</AlertTitle>
                <AlertDescription>
                  You have 3 unread messages in your inbox.
                </AlertDescription>
              </Alert>
              
              <Alert className="border-l-4 border-l-green-500">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <AlertTitle>Task Completed</AlertTitle>
                <AlertDescription>
                  Your deployment was successful and is now live.
                </AlertDescription>
              </Alert>
              
              <Alert className="border-l-4 border-l-primary">
                <Zap className="h-4 w-4 text-primary" />
                <AlertTitle>Pro Tip</AlertTitle>
                <AlertDescription>
                  Use keyboard shortcuts to navigate faster through the app.
                </AlertDescription>
              </Alert>
            </div>
          ),
          code: `<Alert className="border-l-4 border-l-blue-500">
  <Bell className="h-4 w-4 text-blue-500" />
  <AlertTitle>New Message</AlertTitle>
  <AlertDescription>
    You have 3 unread messages.
  </AlertDescription>
</Alert>

<Alert className="border-l-4 border-l-green-500">
  <CheckCircle className="h-4 w-4 text-green-500" />
  <AlertTitle>Task Completed</AlertTitle>
  <AlertDescription>
    Your deployment is now live.
  </AlertDescription>
</Alert>`
        },
        {
          title: "Multi-line Content",
          description: "Alert con contenido largo y múltiples párrafos",
          preview: (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Important Security Update</AlertTitle>
              <AlertDescription className="space-y-2">
                <p>
                  We've detected unusual activity on your account and have temporarily restricted access to certain features.
                </p>
                <p>
                  To restore full access, please verify your identity by completing the two-factor authentication setup.
                </p>
                <p className="font-medium">
                  This is a security measure to protect your account.
                </p>
              </AlertDescription>
            </Alert>
          ),
          code: `<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Important Security Update</AlertTitle>
  <AlertDescription className="space-y-2">
    <p>
      We've detected unusual activity on your account.
    </p>
    <p>
      Please verify your identity to restore full access.
    </p>
    <p className="font-medium">
      This is a security measure to protect your account.
    </p>
  </AlertDescription>
</Alert>`
        }
      ]}
    />
  );
}
