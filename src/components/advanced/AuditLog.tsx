import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Search } from "lucide-react";

const logs = [
  { id: "1", user: "John Doe", action: "Created", resource: "Invoice #1234", timestamp: "2024-12-23 10:30 AM", type: "create" },
  { id: "2", user: "Jane Smith", action: "Updated", resource: "Document #5678", timestamp: "2024-12-23 10:25 AM", type: "update" },
  { id: "3", user: "Bob Johnson", action: "Deleted", resource: "User #9012", timestamp: "2024-12-23 10:20 AM", type: "delete" },
  { id: "4", user: "Admin", action: "Login", resource: "System", timestamp: "2024-12-23 10:15 AM", type: "auth" },
];

export function AuditLog() {
  return (
    <div className="space-y-4">
      {/* Filters */}
      <Card className="p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search logs..." className="pl-9" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Actions</SelectItem>
              <SelectItem value="create">Create</SelectItem>
              <SelectItem value="update">Update</SelectItem>
              <SelectItem value="delete">Delete</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Log Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Resource</TableHead>
              <TableHead>Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="font-medium">{log.user}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      log.type === "delete"
                        ? "destructive"
                        : log.type === "create"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {log.action}
                  </Badge>
                </TableCell>
                <TableCell>{log.resource}</TableCell>
                <TableCell className="text-muted-foreground">{log.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
