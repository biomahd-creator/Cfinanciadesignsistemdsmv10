import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { AlertTriangle, Trash2, LogOut, Info } from "lucide-react";

export function AlertDialogPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-4xl font-semibold">Alert Dialog</h1>
          <Badge>Feedback</Badge>
        </div>
        <p className="text-muted-foreground">
          Modal dialog for important interruptions that require user confirmation
        </p>
      </div>

      <Separator />

      {/* Basic Alert Dialog */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Basic Alert Dialog</h2>
          <p className="text-muted-foreground">Simple confirmation with two actions</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Action Confirmation</CardTitle>
            <CardDescription>Ask for confirmation before performing a destructive action</CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove all your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                    Yes, delete account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Different Alert Types */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Types of Alert Dialog</h2>
          <p className="text-muted-foreground">Different usage contexts</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Warning Alert */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Warning
              </CardTitle>
              <CardDescription>Alert dialog with warning tone</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Show Warning
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      Unsaved Changes
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      You have unsaved changes. If you continue, you will lose all changes
                      made in this document.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue without saving</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>

          {/* Logout Confirmation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogOut className="h-5 w-5 text-primary" />
                Logout
              </CardTitle>
              <CardDescription>Logout confirmation</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Logout?</AlertDialogTitle>
                    <AlertDialogDescription>
                      You will be logged out. You will need to log in again to
                      access your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Logout</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>

          {/* Info Alert */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Information
              </CardTitle>
              <CardDescription>Informative alert dialog</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Info className="h-4 w-4 mr-2" />
                    Show Information
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-blue-600" />
                      Update Available
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      A new version is available with performance improvements and
                      bug fixes. We recommend updating now.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Later</AlertDialogCancel>
                    <AlertDialogAction>Update Now</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>

          {/* Delete Item */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trash2 className="h-5 w-5 text-red-600" />
                Delete Item
              </CardTitle>
              <CardDescription>Deletion confirmation</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="w-full">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Project
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete project "Website Redesign"?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. The project and all its files
                      will be permanently deleted.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>No, keep</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                      Yes, delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Best Practices */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Best Practices</h2>
          <p className="text-muted-foreground">Usage recommendations</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">✅ When to use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Destructive actions (delete, close without saving)</p>
              <p>• Critical decisions that cannot be undone</p>
              <p>• Important confirmations that require attention</p>
              <p>• Warnings that the user must read before continuing</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">❌ When NOT to use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Non-critical informational messages (use Toast)</p>
              <p>• Complex forms (use Dialog)</p>
              <p>• Actions that can be easily undone</p>
              <p>• Information that does not require confirmation</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Accessibility Features */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>♿ Accessibility</CardTitle>
          <CardDescription>Included accessibility features</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>✓ <strong>Role="alertdialog"</strong> - Appropriate ARIA role</p>
          <p>✓ <strong>Focus trap</strong> - Focus remains within the dialog</p>
          <p>✓ <strong>Escape key</strong> - Closes the dialog when Escape is pressed</p>
          <p>✓ <strong>aria-describedby</strong> - Accessible description</p>
          <p>✓ <strong>Tab navigation</strong> - Keyboard navigation between actions</p>
          <p>✓ <strong>Focus restoration</strong> - Restores focus to the trigger when closing</p>
        </CardContent>
      </Card>

      <Separator />

      {/* Composition Info */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Composition</CardTitle>
          <CardDescription>Shadcn/ui components used</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">AlertDialog</Badge>
              Main dialog container
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">AlertDialogTrigger</Badge>
              Button that opens the dialog
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">AlertDialogContent</Badge>
              Modal content
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">AlertDialogHeader/Footer</Badge>
              Sections of the dialog
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">AlertDialogAction/Cancel</Badge>
              Action buttons
            </p>
            <Separator className="my-3" />
            <p className="text-xs text-muted-foreground">
              Alert Dialog is built on Radix UI Alert Dialog with shadcn/ui styles.
              Includes focus management, accessibility, and predefined animations.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}