import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Search, Filter, SlidersHorizontal, MoreHorizontal, Download } from "lucide-react";
import { useState } from "react";

// Mock Data
const mockInvoices = [
  { id: "INV001", client: "Acme Corp", date: "2024-01-15", amount: 2500, status: "Paid", method: "Credit Card" },
  { id: "INV002", client: "TechStart Inc", date: "2024-01-18", amount: 1800, status: "Pending", method: "PayPal" },
  { id: "INV003", client: "Global Solutions", date: "2024-01-20", amount: 3200, status: "Paid", method: "Bank Transfer" },
  { id: "INV004", client: "NextGen Systems", date: "2024-01-22", amount: 4500, status: "Processing", method: "Credit Card" },
  { id: "INV005", client: "Innovate Ltd", date: "2024-01-25", amount: 5500, status: "Failed", method: "PayPal" },
];

export function TablePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    client: true,
    date: true,
    status: true,
    method: true,
    amount: true,
    actions: true,
  });

  const filteredInvoices = mockInvoices.filter((invoice) => {
    const matchesSearch =
      invoice.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || invoice.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const toggleColumn = (column: keyof typeof visibleColumns) => {
    setVisibleColumns((prev) => ({ ...prev, [column]: !prev[column] }));
  };

  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Table</h2>
          <Badge>Data Display</Badge>
          <Badge variant="outline" className="border-primary/50 text-primary">📱 Responsive</Badge>
        </div>
        <p className="text-muted-foreground">
          A responsive table component for displaying data in rows and columns. Automatically scrolls horizontally on mobile devices.
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Advanced Table with Toolbar</CardTitle>
          <CardDescription>
            A complex table example with search, filtering, and column visibility controls.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="flex flex-1 items-center gap-2">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search invoices..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[150px]">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <SelectValue placeholder="Status" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                      <SlidersHorizontal className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[150px]">
                    <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={visibleColumns.id}
                      onCheckedChange={() => toggleColumn("id")}
                    >
                      ID
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={visibleColumns.client}
                      onCheckedChange={() => toggleColumn("client")}
                    >
                      Client
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={visibleColumns.date}
                      onCheckedChange={() => toggleColumn("date")}
                    >
                      Date
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={visibleColumns.status}
                      onCheckedChange={() => toggleColumn("status")}
                    >
                      Status
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={visibleColumns.method}
                      onCheckedChange={() => toggleColumn("method")}
                    >
                      Method
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={visibleColumns.amount}
                      onCheckedChange={() => toggleColumn("amount")}
                    >
                      Amount
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    {visibleColumns.id && <TableHead className="w-[100px]">Invoice</TableHead>}
                    {visibleColumns.client && <TableHead>Client</TableHead>}
                    {visibleColumns.date && <TableHead>Date</TableHead>}
                    {visibleColumns.status && <TableHead>Status</TableHead>}
                    {visibleColumns.method && <TableHead>Method</TableHead>}
                    {visibleColumns.amount && <TableHead className="text-right">Amount</TableHead>}
                    {visibleColumns.actions && <TableHead className="text-right">Actions</TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInvoices.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={Object.values(visibleColumns).filter(Boolean).length}
                        className="h-24 text-center"
                      >
                        No results found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredInvoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        {visibleColumns.id && <TableCell className="font-medium">{invoice.id}</TableCell>}
                        {visibleColumns.client && <TableCell>{invoice.client}</TableCell>}
                        {visibleColumns.date && <TableCell>{invoice.date}</TableCell>}
                        {visibleColumns.status && (
                          <TableCell>
                            <Badge
                              variant={
                                invoice.status === "Paid"
                                  ? "default"
                                  : invoice.status === "Pending"
                                  ? "secondary"
                                  : invoice.status === "Processing"
                                  ? "outline"
                                  : "destructive"
                              }
                            >
                              {invoice.status}
                            </Badge>
                          </TableCell>
                        )}
                        {visibleColumns.method && <TableCell>{invoice.method}</TableCell>}
                        {visibleColumns.amount && (
                          <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
                        )}
                        {visibleColumns.actions && (
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View details</DropdownMenuItem>
                                <DropdownMenuItem>Download PDF</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        )}
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
              <div className="flex-1 text-sm text-muted-foreground">
                Showing {filteredInvoices.length} of {mockInvoices.length} row(s).
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Simple Table</CardTitle>
          <CardDescription>Basic data table with headers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>INV001</TableCell>
                  <TableCell><Badge>Paid</Badge></TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>INV002</TableCell>
                  <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>INV003</TableCell>
                  <TableCell><Badge>Paid</Badge></TableCell>
                  <TableCell>Bank Transfer</TableCell>
                  <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Table with Caption</CardTitle>
          <CardDescription>Table with descriptive caption</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableCaption>A list of your recent invoices</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>001</TableCell>
                  <TableCell>Acme Corp</TableCell>
                  <TableCell>2024-01-15</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>002</TableCell>
                  <TableCell>TechStart Inc</TableCell>
                  <TableCell>2024-01-18</TableCell>
                  <TableCell className="text-right">$1,800.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>003</TableCell>
                  <TableCell>Global Solutions</TableCell>
                  <TableCell>2024-01-20</TableCell>
                  <TableCell className="text-right">$3,200.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}