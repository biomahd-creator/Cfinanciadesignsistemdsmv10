import { Card } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner@2.0.3";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { AlertCircle, Terminal, Info, AlertTriangle, CheckCircle, HelpCircle, Bell, Calendar as CalendarIcon, User, FileQuestion, CheckCircle2 } from "lucide-react";
import { Label } from "../ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";

export function FeedbackSection() {
  return (
    <div className="space-y-8">
      <Toaster />
      <div>
        <h2 className="text-3xl font-semibold mb-2">Feedback</h2>
        <p className="text-sm text-muted-foreground">
          Componentes para mostrar mensajes, alertas y diálogos
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Alert */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Alert</h3>
          <div className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert message to notify users.
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
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Toast */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Toast</h3>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                onClick={() =>
                  toast("Event has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                  })
                }
              >
                Show Toast
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.success("Success!", {
                    description: "Your changes have been saved.",
                  })
                }
              >
                Success Toast
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.error("Error!", {
                    description: "Something went wrong.",
                  })
                }
              >
                Error Toast
              </Button>
            </div>
          </Card>

          {/* Tooltip */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Tooltip</h3>
            <div className="flex gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a helpful tooltip</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button>Action</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Perform this action</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Card>

          {/* HoverCard */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Hover Card</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">@nextjs</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">@nextjs</h4>
                    <p className="text-sm">
                      The React Framework – created and maintained by @vercel.
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Card>

          {/* Dialog */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Dialog</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Continue</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Card>

          {/* Popover */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Popover</h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <span className="text-sm">Width</span>
                      <span className="col-span-2 text-sm">100%</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <span className="text-sm">Height</span>
                      <span className="col-span-2 text-sm">25px</span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </Card>

          {/* Alert Dialog */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Alert Dialog</h3>
            <div className="space-y-2">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete Item</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete this
                      item and remove it from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </Card>
        </div>
      </div>

      {/* COMPOSED PATTERNS */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Patrones Compuestos</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Empty State Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Empty State</h3>
            <p className="text-xs text-muted-foreground mb-4">Card + Button + Text</p>
            <Card className="p-12 border-2 text-center">
              <FileQuestion className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h4 className="text-xl font-semibold mb-2">No items found</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Get started by creating your first item
              </p>
              <Button>Create New Item</Button>
            </Card>
          </Card>

          {/* Success State Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Success State</h3>
            <p className="text-xs text-muted-foreground mb-4">Alert + Icon + Button</p>
            <Card className="p-8 border-2 text-center">
              <CheckCircle2 className="h-16 w-16 mx-auto text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Payment Successful!</h4>
              <Alert className="my-4">
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>
                  Your order has been confirmed and will be shipped soon.
                </AlertDescription>
              </Alert>
              <div className="flex gap-2 justify-center">
                <Button variant="outline">View Order</Button>
                <Button>Continue Shopping</Button>
              </div>
            </Card>
          </Card>

          {/* Error State Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Error State</h3>
            <p className="text-xs text-muted-foreground mb-4">Alert + Button</p>
            <Card className="p-8 border-2">
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Connection Error</AlertTitle>
                <AlertDescription>
                  Unable to connect to the server. Please check your internet connection.
                </AlertDescription>
              </Alert>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">Retry</Button>
                <Button variant="destructive" className="flex-1">Report Issue</Button>
              </div>
            </Card>
          </Card>

          {/* Loading State Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Loading State</h3>
            <p className="text-xs text-muted-foreground mb-4">Skeleton + Card</p>
            <Card className="p-6 border-2">
              <div className="flex items-center gap-4 mb-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
              <Skeleton className="h-24 w-full mb-4" />
              <div className="flex gap-2">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
              </div>
            </Card>
          </Card>

          {/* Confirmation Flow Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Confirmation Flow</h3>
            <p className="text-xs text-muted-foreground mb-4">Dialog + Alert + Button</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete Account</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone and will permanently delete your account.
                  </DialogDescription>
                </DialogHeader>
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    All your data, files, and settings will be permanently removed.
                  </AlertDescription>
                </Alert>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Yes, Delete Account</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Card>

          {/* Contextual Actions Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Contextual Actions</h3>
            <p className="text-xs text-muted-foreground mb-4">Popover + Button</p>
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <div>
                <p className="font-medium">Project Settings</p>
                <p className="text-sm text-muted-foreground">Configure your project</p>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Actions</Button>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-0">
                  <div className="flex flex-col">
                    <Button variant="ghost" className="justify-start">Edit</Button>
                    <Button variant="ghost" className="justify-start">Duplicate</Button>
                    <Button variant="ghost" className="justify-start">Share</Button>
                    <Button variant="ghost" className="justify-start text-destructive">Delete</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}