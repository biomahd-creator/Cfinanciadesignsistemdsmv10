import { ComponentShowcase } from "../ui/component-showcase";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  FileX,
  SearchX,
  PackageX,
  ShieldOff,
  Wifi,
  InboxIcon,
  FileText,
  AlertCircle,
  Plus,
  RefreshCw,
  ArrowLeft,
} from "lucide-react";

// No Results Empty State
function EmptyStateNoResults() {
  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        <div className="rounded-full bg-muted p-6 mb-6">
          <SearchX className="h-12 w-12 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No Results Found</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          We couldn't find any invoices matching your search criteria. Try adjusting your filters or search terms.
        </p>
        <div className="flex gap-3">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Clear Filters
          </Button>
          <Button>Create New Invoice</Button>
        </div>
      </CardContent>
    </Card>
  );
}

// No Data Empty State
function EmptyStateNoData() {
  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        <div className="rounded-full bg-primary/10 p-6 mb-6">
          <InboxIcon className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No Invoices Yet</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          Get started by creating your first invoice. It only takes a few minutes.
        </p>
        <Button size="lg">
          <Plus className="mr-2 h-4 w-4" />
          Create First Invoice
        </Button>
      </CardContent>
    </Card>
  );
}

// No Access Empty State
function EmptyStateNoAccess() {
  return (
    <Card className="w-full max-w-2xl border-destructive/50">
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        <div className="rounded-full bg-destructive/10 p-6 mb-6">
          <ShieldOff className="h-12 w-12 text-destructive" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Access Denied</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          You don't have permission to view this content. Contact your administrator to request access.
        </p>
        <div className="flex gap-3">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button>Request Access</Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Offline Empty State
function EmptyStateOffline() {
  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        <div className="rounded-full bg-muted p-6 mb-6">
          <Wifi className="h-12 w-12 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold mb-2">You're Offline</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          No internet connection detected. Please check your network settings and try again.
        </p>
        <Button>
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      </CardContent>
    </Card>
  );
}

// Error Empty State
function EmptyStateError() {
  return (
    <Card className="w-full max-w-2xl border-destructive/50">
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        <div className="rounded-full bg-destructive/10 p-6 mb-6">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Something Went Wrong</h3>
        <p className="text-muted-foreground mb-2 max-w-md">
          We encountered an error while loading your data. This might be temporary.
        </p>
        <p className="text-sm text-muted-foreground mb-6 font-mono bg-muted px-3 py-1 rounded">
          Error Code: 500 - Internal Server Error
        </p>
        <div className="flex gap-3">
          <Button variant="outline">Contact Support</Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Retry
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Empty File List
function EmptyStateFiles() {
  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        <div className="rounded-full bg-primary/10 p-6 mb-6">
          <FileText className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No Documents Uploaded</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          Upload invoices, receipts, and supporting documents to start your factoring request.
        </p>
        <div className="flex gap-3">
          <Button size="lg" variant="outline">
            Browse Files
          </Button>
          <Button size="lg">
            <Plus className="mr-2 h-4 w-4" />
            Upload Documents
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Compact Empty State
function EmptyStateCompact() {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="flex flex-col items-center justify-center py-8 text-center">
        <PackageX className="h-8 w-8 text-muted-foreground mb-3" />
        <h4 className="font-semibold mb-1">No Items</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Add items to get started
        </p>
        <Button size="sm">
          <Plus className="mr-2 h-3 w-3" />
          Add Item
        </Button>
      </CardContent>
    </Card>
  );
}

export function EmptyStatePage() {
  const previewCode = `<Card className="w-full max-w-2xl">
  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
    <div className="rounded-full bg-muted p-6 mb-6">
      <SearchX className="h-12 w-12 text-muted-foreground" />
    </div>
    <h3 className="text-xl font-semibold mb-2">No Results Found</h3>
    <p className="text-muted-foreground mb-6 max-w-md">
      We couldn't find any invoices matching your search criteria.
    </p>
    <div className="flex gap-3">
      <Button variant="outline">
        <RefreshCw className="mr-2 h-4 w-4" />
        Clear Filters
      </Button>
      <Button>Create New Invoice</Button>
    </div>
  </CardContent>
</Card>`;

  const usageCode = `import { EmptyState } from "./components/patterns/empty-state";

function InvoiceList() {
  const invoices = useInvoices();

  if (invoices.length === 0) {
    return (
      <EmptyState
        icon={InboxIcon}
        title="No Invoices Yet"
        description="Get started by creating your first invoice."
        action={
          <Button onClick={createInvoice}>
            <Plus className="mr-2 h-4 w-4" />
            Create First Invoice
          </Button>
        }
      />
    );
  }

  return <InvoiceTable data={invoices} />;
}`;

  return (
    <ComponentShowcase
      title="Empty State"
      description="Visual feedback when no data is available, guiding users to take action or understand why content is missing"
      category="Factoring Patterns"
      preview={
        <div className="flex items-center justify-center p-8">
          <EmptyStateNoResults />
        </div>
      }
      code={previewCode}
      usage="Empty State is a composed pattern using Card and Icon components to communicate the absence of data in a clear, actionable way. It helps users understand why they're seeing a blank screen and what they can do next, improving the overall user experience and reducing confusion."
      usageCode={usageCode}
      props={[
        {
          name: "icon",
          type: "LucideIcon",
          default: "InboxIcon",
          description: "Icon to display in the empty state",
          required: false,
        },
        {
          name: "title",
          type: "string",
          default: "undefined",
          description: "Main heading text",
          required: true,
        },
        {
          name: "description",
          type: "string",
          default: "undefined",
          description: "Supporting description text",
          required: true,
        },
        {
          name: "action",
          type: "ReactNode",
          default: "undefined",
          description: "Primary action button or element",
          required: false,
        },
        {
          name: "secondaryAction",
          type: "ReactNode",
          default: "undefined",
          description: "Secondary action button or element",
          required: false,
        },
        {
          name: "variant",
          type: '"default" | "error" | "warning"',
          default: '"default"',
          description: "Visual style variant",
          required: false,
        },
      ]}
      examples={[
        {
          title: "No Data",
          description: "Empty state for when user has no content yet (first-time experience)",
          preview: (
            <div className="flex items-center justify-center p-8">
              <EmptyStateNoData />
            </div>
          ),
          code: `<Card className="w-full max-w-2xl">
  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
    <div className="rounded-full bg-primary/10 p-6 mb-6">
      <InboxIcon className="h-12 w-12 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">No Invoices Yet</h3>
    <p className="text-muted-foreground mb-6 max-w-md">
      Get started by creating your first invoice.
    </p>
    <Button size="lg">
      <Plus className="mr-2 h-4 w-4" />
      Create First Invoice
    </Button>
  </CardContent>
</Card>`,
        },
        {
          title: "No Access",
          description: "Empty state for permission-denied scenarios",
          preview: (
            <div className="flex items-center justify-center p-8">
              <EmptyStateNoAccess />
            </div>
          ),
          code: `<Card className="w-full max-w-2xl border-destructive/50">
  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
    <div className="rounded-full bg-destructive/10 p-6 mb-6">
      <ShieldOff className="h-12 w-12 text-destructive" />
    </div>
    <h3 className="text-xl font-semibold mb-2">Access Denied</h3>
    <p className="text-muted-foreground mb-6 max-w-md">
      You don't have permission to view this content.
    </p>
    <div className="flex gap-3">
      <Button variant="outline">Go Back</Button>
      <Button>Request Access</Button>
    </div>
  </CardContent>
</Card>`,
        },
        {
          title: "Offline",
          description: "Empty state for network connectivity issues",
          preview: (
            <div className="flex items-center justify-center p-8">
              <EmptyStateOffline />
            </div>
          ),
          code: `<Card className="w-full max-w-2xl">
  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
    <div className="rounded-full bg-muted p-6 mb-6">
      <Wifi className="h-12 w-12 text-muted-foreground" />
    </div>
    <h3 className="text-xl font-semibold mb-2">You're Offline</h3>
    <p className="text-muted-foreground mb-6 max-w-md">
      No internet connection detected.
    </p>
    <Button>
      <RefreshCw className="mr-2 h-4 w-4" />
      Try Again
    </Button>
  </CardContent>
</Card>`,
        },
        {
          title: "Error State",
          description: "Empty state for error scenarios with error code display",
          preview: (
            <div className="flex items-center justify-center p-8">
              <EmptyStateError />
            </div>
          ),
          code: `<Card className="w-full max-w-2xl border-destructive/50">
  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
    <div className="rounded-full bg-destructive/10 p-6 mb-6">
      <AlertCircle className="h-12 w-12 text-destructive" />
    </div>
    <h3 className="text-xl font-semibold mb-2">Something Went Wrong</h3>
    <p className="text-muted-foreground mb-2 max-w-md">
      We encountered an error while loading your data.
    </p>
    <p className="text-sm text-muted-foreground mb-6 font-mono">
      Error Code: 500
    </p>
    <div className="flex gap-3">
      <Button variant="outline">Contact Support</Button>
      <Button>Retry</Button>
    </div>
  </CardContent>
</Card>`,
        },
        {
          title: "No Files",
          description: "Empty state for file upload or document management areas",
          preview: (
            <div className="flex items-center justify-center p-8">
              <EmptyStateFiles />
            </div>
          ),
          code: `<Card className="w-full max-w-2xl">
  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
    <div className="rounded-full bg-primary/10 p-6 mb-6">
      <FileText className="h-12 w-12 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">No Documents Uploaded</h3>
    <p className="text-muted-foreground mb-6 max-w-md">
      Upload invoices and supporting documents.
    </p>
    <div className="flex gap-3">
      <Button size="lg" variant="outline">Browse Files</Button>
      <Button size="lg">Upload Documents</Button>
    </div>
  </CardContent>
</Card>`,
        },
        {
          title: "Compact Variant",
          description: "Smaller empty state for cards, sidebars, or tight spaces",
          preview: (
            <div className="flex items-center justify-center p-8">
              <EmptyStateCompact />
            </div>
          ),
          code: `<Card className="w-full max-w-md">
  <CardContent className="flex flex-col items-center justify-center py-8 text-center">
    <PackageX className="h-8 w-8 text-muted-foreground mb-3" />
    <h4 className="font-semibold mb-1">No Items</h4>
    <p className="text-sm text-muted-foreground mb-4">
      Add items to get started
    </p>
    <Button size="sm">
      <Plus className="mr-2 h-3 w-3" />
      Add Item
    </Button>
  </CardContent>
</Card>`,
        },
      ]}
    />
  );
}
