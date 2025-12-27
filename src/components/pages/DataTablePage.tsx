import { ComponentShowcase } from "../ui/component-showcase";
import { DataTable } from "../advanced/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { toast } from "sonner";

// Sample Data Type
type Invoice = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  client: string;
  date: string;
  riskScore: number;
};

// Sample Data
const data: Invoice[] = Array.from({ length: 50 }, (_, i) => ({
  id: `INV-${1000 + i}`,
  amount: Math.floor(Math.random() * 1000000) + 50000,
  status: ["pending", "processing", "success", "failed"][
    Math.floor(Math.random() * 4)
  ] as Invoice["status"],
  email: `client${i}@example.com`,
  client: `Client Company ${i + 1} S.A.`,
  date: new Date(2024, 0, 1 + i).toISOString().split("T")[0],
  riskScore: Math.floor(Math.random() * 1000),
}));

export const columns: ColumnDef<Invoice>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const config = {
        success: { color: "text-green-500 bg-green-500/10", icon: CheckCircle, label: "Paid" },
        pending: { color: "text-yellow-500 bg-yellow-500/10", icon: Clock, label: "Pending" },
        processing: { color: "text-blue-500 bg-blue-500/10", icon: AlertCircle, label: "Processing" },
        failed: { color: "text-red-500 bg-red-500/10", icon: XCircle, label: "Failed" },
      }[status] || { color: "text-gray-500", icon: AlertCircle, label: status };

      const Icon = config.icon;

      return (
        <Badge variant="outline" className={`${config.color} border-0 flex w-fit items-center gap-1`}>
            <Icon className="h-3 w-3" />
            {config.label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "client",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Client
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="font-medium ml-4">{row.getValue("client")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase text-muted-foreground">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
      accessorKey: "riskScore",
      header: "Risk Score",
      cell: ({ row }) => {
          const score = row.getValue("riskScore") as number;
          let colorClass = "text-green-500";
          if (score < 500) colorClass = "text-red-500";
          else if (score < 700) colorClass = "text-yellow-500";
          
          return (
              <div className="flex items-center gap-2">
                  <div className="h-2 bg-secondary/20 rounded-full overflow-hidden w-24">
                      <div className={`h-full ${score < 500 ? "bg-red-500" : score < 700 ? "bg-yellow-500" : "bg-green-500"}`} style={{ width: `${score/10}%` }}></div>
                  </div>
                  <span className={`text-xs font-medium ${colorClass}`}>{score}</span>
              </div>
          )
      }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                try {
                  navigator.clipboard.writeText(payment.id)
                    .then(() => toast.success("Invoice ID copied to clipboard"))
                    .catch(() => toast.error("Failed to copy Invoice ID"));
                } catch (error) {
                  toast.error("Clipboard access not available");
                }
              }}
            >
              Copy Invoice ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Download PDF</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTablePage() {
  return (
    <ComponentShowcase
      title="Data Table"
      description="Powerful table component with sorting, filtering, pagination, and selection. Built on top of TanStack Table."
      category="Advanced"
      
      // Main Preview
      preview={
        <DataTable 
          columns={columns} 
          data={data} 
          searchKey="client" 
          searchPlaceholder="Filter by client..." 
        />
      }
      
      // Main Code
      code={`import { DataTable } from "@/components/advanced/DataTable"
import { columns } from "./columns"

export function DataTableDemo() {
  return (
    <DataTable 
      columns={columns} 
      data={data} 
      searchKey="email" 
    />
  )
}`}
      
      // Usage
      usage="The Data Table component is a wrapper around TanStack Table that provides common functionality out of the box."
      usageCode={`import { DataTable } from "@/components/advanced/DataTable"`}
      
      // Props Documentation
      props={[
        {
          name: "columns",
          type: "ColumnDef<TData, TValue>[]",
          description: "Column definitions for the table",
        },
        {
          name: "data",
          type: "TData[]",
          description: "Array of data to display",
        },
        {
          name: "searchKey",
          type: "string",
          description: "Key to filter by",
        },
        {
          name: "searchPlaceholder",
          type: "string",
          default: '"Search..."',
          description: "Placeholder for the search input",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "Simple Table",
          description: "A basic table with just columns and data",
          preview: (
            <DataTable 
              columns={columns.slice(1, 5)} 
              data={data.slice(0, 5)} 
              searchKey="client"
            />
          ),
          code: `<DataTable 
  columns={columns} 
  data={data} 
  searchKey="client"
/>`
        }
      ]}
    />
  );
}
