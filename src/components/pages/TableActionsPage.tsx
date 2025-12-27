import { ComponentShowcase } from "../ui/component-showcase";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  Download,
  Copy,
  CheckCircle2,
  XCircle,
  Clock,
} from "lucide-react";

// Basic Table with Inline Actions
function TableBasicActions() {
  const invoices = [
    { id: "INV-001", client: "Acme Corp", amount: "$15,000", status: "paid" },
    { id: "INV-002", client: "TechStart", amount: "$8,500", status: "pending" },
    { id: "INV-003", client: "Global Inc", amount: "$22,000", status: "overdue" },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.client}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    invoice.status === "paid"
                      ? "default"
                      : invoice.status === "pending"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// Table with Dropdown Menu Actions
function TableDropdownActions() {
  const operations = [
    { id: "OP-001", type: "Invoice", amount: "$15,000", status: "approved" },
    { id: "OP-002", type: "Receipt", amount: "$8,500", status: "pending" },
    { id: "OP-003", type: "Invoice", amount: "$22,000", status: "rejected" },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {operations.map((op) => (
            <TableRow key={op.id}>
              <TableCell className="font-medium">{op.id}</TableCell>
              <TableCell>{op.type}</TableCell>
              <TableCell>{op.amount}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    op.status === "approved"
                      ? "default"
                      : op.status === "pending"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {op.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// Table with Bulk Selection
function TableBulkActions() {
  const invoices = [
    { id: "INV-001", client: "Acme Corp", amount: "$15,000", status: "paid" },
    { id: "INV-002", client: "TechStart", amount: "$8,500", status: "pending" },
    { id: "INV-003", client: "Global Inc", amount: "$22,000", status: "paid" },
    { id: "INV-004", client: "StartUp Co", amount: "$5,000", status: "pending" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">2 selected</span>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead>Invoice</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={invoice.id}>
                <TableCell>
                  <Checkbox defaultChecked={index < 2} />
                </TableCell>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.client}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>
                  <Badge variant={invoice.status === "paid" ? "default" : "secondary"}>
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// Table with Approval Actions
function TableApprovalActions() {
  const operations = [
    { id: "OP-001", client: "Acme Corp", amount: "$15,000", date: "2024-01-15" },
    { id: "OP-002", client: "TechStart", amount: "$8,500", date: "2024-01-16" },
    { id: "OP-003", client: "Global Inc", amount: "$22,000", date: "2024-01-17" },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Operation</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {operations.map((op) => (
            <TableRow key={op.id}>
              <TableCell className="font-medium">{op.id}</TableCell>
              <TableCell>{op.client}</TableCell>
              <TableCell>{op.amount}</TableCell>
              <TableCell>{op.date}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    Review
                  </Button>
                  <Button variant="default" size="sm">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                  <Button variant="destructive" size="sm">
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// Compact Table with Mini Actions
function TableCompactActions() {
  const items = [
    { id: "1", name: "Document.pdf", size: "2.4 MB", status: "uploaded" },
    { id: "2", name: "Invoice.xlsx", size: "1.1 MB", status: "processing" },
    { id: "3", name: "Receipt.jpg", size: "856 KB", status: "uploaded" },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>File Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[100px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="text-muted-foreground">{item.size}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{item.status}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <Eye className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <Download className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <Trash2 className="h-3 w-3 text-destructive" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function TableActionsPage() {
  const previewCode = `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Client</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.id}>
        <TableCell>{invoice.id}</TableCell>
        <TableCell>{invoice.client}</TableCell>
        <TableCell>{invoice.amount}</TableCell>
        <TableCell>
          <Badge variant="default">{invoice.status}</Badge>
        </TableCell>
        <TableCell className="text-right">
          <div className="flex justify-end gap-2">
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`;

  const usageCode = `import { TableWithActions } from "./components/patterns/table-actions";

function InvoiceList() {
  const invoices = useInvoices();

  const handleView = (id) => router.push(\`/invoices/\${id}\`);
  const handleEdit = (id) => openEditModal(id);
  const handleDelete = (id) => confirmDelete(id);

  return (
    <TableWithActions
      data={invoices}
      onView={handleView}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}`;

  return (
    <ComponentShowcase
      title="Table with Actions"
      description="Data table with inline action buttons for viewing, editing, deleting, and other row-specific operations"
      category="Factoring Patterns"
      preview={<TableBasicActions />}
      code={previewCode}
      usage="Table with Actions combines Table, Button, and DropdownMenu components to provide row-level actions for data management. This pattern is essential for CRUD operations in list views, allowing users to interact with individual records directly from the table interface."
      usageCode={usageCode}
      props={[
        {
          name: "data",
          type: "Array<T>",
          default: "[]",
          description: "Array of data objects to display in the table",
          required: true,
        },
        {
          name: "onView",
          type: "(id: string) => void",
          default: "undefined",
          description: "Callback when view action is triggered",
          required: false,
        },
        {
          name: "onEdit",
          type: "(id: string) => void",
          default: "undefined",
          description: "Callback when edit action is triggered",
          required: false,
        },
        {
          name: "onDelete",
          type: "(id: string) => void",
          default: "undefined",
          description: "Callback when delete action is triggered",
          required: false,
        },
        {
          name: "enableBulkActions",
          type: "boolean",
          default: "false",
          description: "Enable row selection and bulk actions",
          required: false,
        },
        {
          name: "actionsType",
          type: '"inline" | "dropdown" | "both"',
          default: '"inline"',
          description: "How to display row actions",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Dropdown Menu Actions",
          description: "Actions organized in a dropdown menu for cleaner table layout",
          preview: <TableDropdownActions />,
          code: `<Table>
  <TableBody>
    {operations.map((op) => (
      <TableRow key={op.id}>
        <TableCell>{op.id}</TableCell>
        <TableCell>{op.type}</TableCell>
        <TableCell>{op.amount}</TableCell>
        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
        },
        {
          title: "Bulk Selection",
          description: "Table with checkboxes for selecting multiple rows and bulk actions",
          preview: <TableBulkActions />,
          code: `<div className="space-y-4">
  <div className="flex items-center gap-2">
    <span className="text-sm text-muted-foreground">2 selected</span>
    <Button variant="outline" size="sm">
      <Download className="mr-2 h-4 w-4" />
      Export
    </Button>
    <Button variant="outline" size="sm">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete
    </Button>
  </div>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[50px]">
          <Checkbox />
        </TableHead>
        <TableHead>Invoice</TableHead>
        <TableHead>Client</TableHead>
        {/* ... */}
      </TableRow>
    </TableHeader>
    <TableBody>
      {invoices.map((invoice) => (
        <TableRow key={invoice.id}>
          <TableCell>
            <Checkbox />
          </TableCell>
          {/* ... */}
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>`,
        },
        {
          title: "Approval Actions",
          description: "Table with approve/reject actions for workflow management",
          preview: <TableApprovalActions />,
          code: `<Table>
  <TableBody>
    {operations.map((op) => (
      <TableRow key={op.id}>
        <TableCell>{op.id}</TableCell>
        <TableCell>{op.client}</TableCell>
        <TableCell>{op.amount}</TableCell>
        <TableCell className="text-right">
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm">
              <Eye className="mr-2 h-4 w-4" />
              Review
            </Button>
            <Button variant="default" size="sm">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Approve
            </Button>
            <Button variant="destructive" size="sm">
              <XCircle className="mr-2 h-4 w-4" />
              Reject
            </Button>
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
        },
        {
          title: "Compact Mini Actions",
          description: "Minimal action buttons for dense tables with limited space",
          preview: <TableCompactActions />,
          code: `<Table>
  <TableBody>
    {items.map((item) => (
      <TableRow key={item.id}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.size}</TableCell>
        <TableCell>{item.status}</TableCell>
        <TableCell className="text-right">
          <div className="flex justify-end gap-1">
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Eye className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Download className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Trash2 className="h-3 w-3 text-destructive" />
            </Button>
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
        },
      ]}
    />
  );
}
