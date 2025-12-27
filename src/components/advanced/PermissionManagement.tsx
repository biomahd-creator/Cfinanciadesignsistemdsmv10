import { Card } from "../ui/card";
import { Switch } from "../ui/switch";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const roles = ["Admin", "Editor", "Viewer", "Guest"];
const permissions = [
  { name: "View Documents", admin: true, editor: true, viewer: true, guest: false },
  { name: "Create Documents", admin: true, editor: true, viewer: false, guest: false },
  { name: "Edit Documents", admin: true, editor: true, viewer: false, guest: false },
  { name: "Delete Documents", admin: true, editor: false, viewer: false, guest: false },
  { name: "Manage Users", admin: true, editor: false, viewer: false, guest: false },
  { name: "System Settings", admin: true, editor: false, viewer: false, guest: false },
];

export function PermissionManagement() {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Permission</TableHead>
            {roles.map((role) => (
              <TableHead key={role} className="text-center">
                <Badge>{role}</Badge>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {permissions.map((permission) => (
            <TableRow key={permission.name}>
              <TableCell className="font-medium">{permission.name}</TableCell>
              <TableCell className="text-center">
                <Switch checked={permission.admin} />
              </TableCell>
              <TableCell className="text-center">
                <Switch checked={permission.editor} />
              </TableCell>
              <TableCell className="text-center">
                <Switch checked={permission.viewer} />
              </TableCell>
              <TableCell className="text-center">
                <Switch checked={permission.guest} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
