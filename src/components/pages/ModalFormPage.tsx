import { useState } from "react";
import { ComponentShowcase } from "../ui/component-showcase";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Plus, Edit, Trash2, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";
import { Separator } from "../ui/separator";

// Basic Modal Form
function ModalFormBasic() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Invoice
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Invoice</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new invoice
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="invoice-number">Invoice Number</Label>
            <Input id="invoice-number" placeholder="INV-001" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (USD)</Label>
            <Input id="amount" type="number" placeholder="15000.00" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="client">Client</Label>
            <Select>
              <SelectTrigger id="client">
                <SelectValue placeholder="Select a client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="client-1">Acme Corp</SelectItem>
                <SelectItem value="client-2">TechStart Inc</SelectItem>
                <SelectItem value="client-3">Global Solutions</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Create Invoice</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Modal Form with Textarea
function ModalFormWithTextarea() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Edit className="mr-2 h-4 w-4" />
          Add Notes
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Operation Notes</DialogTitle>
          <DialogDescription>
            Document important details about this factoring operation
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Note Title</Label>
            <Input id="title" placeholder="Payment terms clarification" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Enter detailed notes here..."
              rows={5}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="payment">Payment Terms</SelectItem>
                <SelectItem value="documents">Document Issues</SelectItem>
                <SelectItem value="compliance">Compliance</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save Notes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Destructive Modal Form
function ModalFormDestructive() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Invoice</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the invoice.
          </DialogDescription>
        </DialogHeader>
        <Alert variant="destructive" className="my-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            You are about to delete Invoice #12345 for $15,000 USD
          </AlertDescription>
        </Alert>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="confirm">
              Type <span className="font-mono font-semibold">DELETE</span> to confirm
            </Label>
            <Input id="confirm" placeholder="DELETE" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Deletion (Optional)</Label>
            <Textarea
              id="reason"
              placeholder="Explain why you're deleting this invoice..."
              rows={3}
            />
          </div>
        </div>
        <DialogFooter className="mt-4">
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete Invoice</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Modal Form with Sections
function ModalFormWithSections() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Operation
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Factoring Operation</DialogTitle>
          <DialogDescription>
            Complete all sections to submit a new factoring request
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Section 1: Basic Information */}
          <div className="space-y-4">
            <h4 className="font-semibold">Basic Information</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="op-number">Operation Number</Label>
                <Input id="op-number" placeholder="OP-2024-001" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="op-amount">Amount</Label>
                <Input id="op-amount" type="number" placeholder="25000.00" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="op-client">Client</Label>
              <Select>
                <SelectTrigger id="op-client">
                  <SelectValue placeholder="Select client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="client-1">Acme Corp</SelectItem>
                  <SelectItem value="client-2">TechStart Inc</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          {/* Section 2: Payment Terms */}
          <div className="space-y-4">
            <h4 className="font-semibold">Payment Terms</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rate">Discount Rate (%)</Label>
                <Input id="rate" type="number" placeholder="2.5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="days">Payment Days</Label>
                <Input id="days" type="number" placeholder="30" />
              </div>
            </div>
          </div>

          <Separator />

          {/* Section 3: Additional Details */}
          <div className="space-y-4">
            <h4 className="font-semibold">Additional Details</h4>
            <div className="space-y-2">
              <Label htmlFor="op-notes">Notes</Label>
              <Textarea
                id="op-notes"
                placeholder="Add any additional information..."
                rows={4}
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline">Save as Draft</Button>
          <Button>Submit Operation</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Modal Form Loading State
function ModalFormLoading() {
  return (
    <Dialog defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Creating Invoice...</DialogTitle>
          <DialogDescription>
            Please wait while we process your request
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4 opacity-50">
          <div className="space-y-2">
            <Label>Invoice Number</Label>
            <Input disabled value="INV-001" />
          </div>
          <div className="space-y-2">
            <Label>Amount (USD)</Label>
            <Input disabled value="15000.00" />
          </div>
          <div className="space-y-2">
            <Label>Client</Label>
            <Input disabled value="Acme Corp" />
          </div>
        </div>
        <DialogFooter>
          <Button disabled className="w-full">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating Invoice...
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Modal Form Success State
function ModalFormSuccess() {
  return (
    <Dialog defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invoice Created Successfully</DialogTitle>
          <DialogDescription>
            Your invoice has been created and saved
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center py-8">
          <div className="rounded-full bg-primary/10 p-6 mb-4">
            <CheckCircle2 className="h-12 w-12 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Invoice #INV-001</h3>
          <p className="text-sm text-muted-foreground mb-1">Amount: $15,000 USD</p>
          <p className="text-sm text-muted-foreground">Client: Acme Corp</p>
        </div>
        <DialogFooter>
          <Button variant="outline">View Invoice</Button>
          <Button>Create Another</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ModalFormPage() {
  const previewCode = `<Dialog>
  <DialogTrigger asChild>
    <Button>
      <Plus className="mr-2 h-4 w-4" />
      Create Invoice
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Invoice</DialogTitle>
      <DialogDescription>
        Fill in the details below to create a new invoice
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="invoice-number">Invoice Number</Label>
        <Input id="invoice-number" placeholder="INV-001" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="amount">Amount (USD)</Label>
        <Input id="amount" type="number" placeholder="15000.00" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="client">Client</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a client" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="client-1">Acme Corp</SelectItem>
            <SelectItem value="client-2">TechStart Inc</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Create Invoice</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

  const usageCode = `import { ModalForm } from "./components/patterns/modal-form";

function InvoiceActions() {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (data) => {
    await createInvoice(data);
    setOpen(false);
  };

  return (
    <ModalForm
      open={open}
      onOpenChange={setOpen}
      title="Create Invoice"
      onSubmit={handleSubmit}
    >
      <FormFields />
    </ModalForm>
  );
}`;

  return (
    <ComponentShowcase
      title="Modal Form"
      description="Form inside a Dialog component for creating, editing, or confirming actions without leaving the current page"
      category="Factoring Patterns"
      preview={
        <div className="flex items-center justify-center gap-4 p-8">
          <ModalFormBasic />
          <ModalFormWithTextarea />
          <ModalFormDestructive />
        </div>
      }
      code={previewCode}
      usage="Modal Form combines Dialog, Form, Input, and Button components to create an overlay form experience. This pattern is ideal for quick data entry, edits, or confirmations without navigating away from the current page. It's commonly used for creating invoices, adding notes, or confirming destructive actions."
      usageCode={usageCode}
      props={[
        {
          name: "open",
          type: "boolean",
          default: "false",
          description: "Controls the open/closed state of the modal",
          required: false,
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          default: "undefined",
          description: "Callback when modal open state changes",
          required: false,
        },
        {
          name: "title",
          type: "string",
          default: "undefined",
          description: "Modal title text",
          required: true,
        },
        {
          name: "description",
          type: "string",
          default: "undefined",
          description: "Modal description text",
          required: false,
        },
        {
          name: "onSubmit",
          type: "(data: FormData) => void | Promise<void>",
          default: "undefined",
          description: "Form submission callback",
          required: true,
        },
        {
          name: "isLoading",
          type: "boolean",
          default: "false",
          description: "Shows loading state with disabled form",
          required: false,
        },
      ]}
      examples={[
        {
          title: "With Textarea",
          description: "Modal form with textarea for longer text input (notes, comments)",
          preview: (
            <div className="flex items-center justify-center p-8">
              <ModalFormWithTextarea />
            </div>
          ),
          code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">
      <Edit className="mr-2 h-4 w-4" />
      Add Notes
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Operation Notes</DialogTitle>
      <DialogDescription>Document important details</DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="title">Note Title</Label>
        <Input id="title" placeholder="Payment terms clarification" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" placeholder="Enter notes..." rows={5} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="payment">Payment Terms</SelectItem>
            <SelectItem value="documents">Documents</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Save Notes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
        },
        {
          title: "Destructive Action",
          description: "Modal form for confirming destructive actions (delete, archive)",
          preview: (
            <div className="flex items-center justify-center p-8">
              <ModalFormDestructive />
            </div>
          ),
          code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive" size="sm">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete Invoice</DialogTitle>
      <DialogDescription>This action cannot be undone</DialogDescription>
    </DialogHeader>
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>
        You are about to delete Invoice #12345
      </AlertDescription>
    </Alert>
    <div className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label>Type DELETE to confirm</Label>
        <Input placeholder="DELETE" />
      </div>
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete Invoice</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
        },
        {
          title: "Multi-Section Form",
          description: "Complex modal form with multiple sections and separators",
          preview: (
            <div className="flex items-center justify-center p-8">
              <ModalFormWithSections />
            </div>
          ),
          code: `<Dialog>
  <DialogTrigger asChild>
    <Button>New Operation</Button>
  </DialogTrigger>
  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle>Create Factoring Operation</DialogTitle>
    </DialogHeader>
    
    <div className="space-y-6 py-4">
      <div className="space-y-4">
        <h4 className="font-semibold">Basic Information</h4>
        <Input placeholder="Operation Number" />
        <Input placeholder="Amount" />
      </div>

      <Separator />

      <div className="space-y-4">
        <h4 className="font-semibold">Payment Terms</h4>
        <Input placeholder="Discount Rate" />
        <Input placeholder="Payment Days" />
      </div>
    </div>

    <DialogFooter>
      <Button variant="outline">Save as Draft</Button>
      <Button>Submit Operation</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
        },
        {
          title: "Loading State",
          description: "Modal form during submission with disabled inputs and spinner",
          preview: (
            <div className="flex items-center justify-center p-8">
              <Button variant="outline" size="sm" disabled>
                View Loading State
              </Button>
            </div>
          ),
          code: `<DialogContent>
  <DialogHeader>
    <DialogTitle>Creating Invoice...</DialogTitle>
    <DialogDescription>Please wait</DialogDescription>
  </DialogHeader>
  <div className="space-y-4 py-4 opacity-50">
    <Input disabled value="INV-001" />
    <Input disabled value="15000.00" />
  </div>
  <DialogFooter>
    <Button disabled className="w-full">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Creating Invoice...
    </Button>
  </DialogFooter>
</DialogContent>`,
        },
        {
          title: "Success State",
          description: "Modal showing success confirmation after form submission",
          preview: (
            <div className="flex items-center justify-center p-8">
              <Button variant="outline" size="sm" disabled>
                View Success State
              </Button>
            </div>
          ),
          code: `<DialogContent>
  <DialogHeader>
    <DialogTitle>Invoice Created Successfully</DialogTitle>
  </DialogHeader>
  <div className="flex flex-col items-center justify-center py-8">
    <div className="rounded-full bg-primary/10 p-6 mb-4">
      <CheckCircle2 className="h-12 w-12 text-primary" />
    </div>
    <h3 className="text-lg font-semibold">Invoice #INV-001</h3>
    <p className="text-sm text-muted-foreground">Amount: $15,000 USD</p>
  </div>
  <DialogFooter>
    <Button variant="outline">View Invoice</Button>
    <Button>Create Another</Button>
  </DialogFooter>
</DialogContent>`,
        },
      ]}
    />
  );
}