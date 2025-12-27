import { ComponentShowcase } from "../ui/component-showcase";
import { PermissionManagement } from "../advanced/PermissionManagement";
import { Card } from "../ui/card";

export function PermissionManagementPage() {
  return (
    <ComponentShowcase
      title="Permission Management"
      description="Advanced permission and role management system with matrix view, bulk operations, and inheritance. Enterprise-grade access control interface."
      category="Hero UI Pro"
      preview={
        <Card className="p-6 w-full max-w-5xl">
          <div className="mb-4">
            <div className="text-lg mb-1">Role & Permission Matrix</div>
            <div className="text-xs text-muted-foreground">Manage user access across your application</div>
          </div>
          <PermissionManagement 
            roles={[
              { id: "1", name: "Admin", userCount: 5 },
              { id: "2", name: "Editor", userCount: 12 },
              { id: "3", name: "Viewer", userCount: 45 },
            ]}
            permissions={[
              { id: "1", name: "Create Posts", category: "Content" },
              { id: "2", name: "Edit Posts", category: "Content" },
              { id: "3", name: "Delete Posts", category: "Content" },
              { id: "4", name: "Manage Users", category: "Admin" },
            ]}
          />
        </Card>
      }
      code={`import { PermissionManagement } from "../advanced/PermissionManagement";

<PermissionManagement 
  roles={roles}
  permissions={permissions}
  onUpdatePermissions={handleUpdate}
/>`}
      usage="Permission Management provides a comprehensive interface for managing roles, permissions, and access control. Features include matrix view, bulk editing, permission inheritance, and audit logging."
      usageCode={`import { PermissionManagement } from "../advanced/PermissionManagement";
import { useState } from "react";

export function AccessControl() {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  
  const handleUpdate = async (roleId, permissionId, enabled) => {
    await api.updatePermission(roleId, permissionId, enabled);
  };
  
  return (
    <PermissionManagement
      roles={roles}
      permissions={permissions}
      onUpdatePermissions={handleUpdate}
    />
  );
}`}
      props={[
        { name: "roles", type: "Role[]", default: "[]", description: "List of user roles", required: true },
        { name: "permissions", type: "Permission[]", default: "[]", description: "List of permissions", required: true },
        { name: "onUpdatePermissions", type: "(roleId: string, permissionId: string, enabled: boolean) => void", default: "undefined", description: "Callback when permission is toggled" },
        { name: "showInheritance", type: "boolean", default: "true", description: "Show permission inheritance indicators" },
        { name: "allowBulkEdit", type: "boolean", default: "true", description: "Enable bulk permission editing" },
      ]}
      examples={[
        {
          title: "Role Matrix",
          description: "Permission matrix with role-based access",
          preview: (
            <Card className="p-4 w-full max-w-4xl">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Permission</th>
                      <th className="p-2">Admin</th>
                      <th className="p-2">Editor</th>
                      <th className="p-2">Viewer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Create", "Edit", "Delete", "Publish"].map((perm) => (
                      <tr key={perm} className="border-b">
                        <td className="p-2">{perm}</td>
                        <td className="p-2 text-center">
                          <div className="w-4 h-4 bg-green-500 rounded mx-auto" />
                        </td>
                        <td className="p-2 text-center">
                          <div className="w-4 h-4 bg-green-500 rounded mx-auto" />
                        </td>
                        <td className="p-2 text-center">
                          <div className="w-4 h-4 bg-muted rounded mx-auto" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ),
          code: `<PermissionManagement\n  roles={organizationRoles}\n  permissions={systemPermissions}\n  showInheritance={true}\n/>`,
        },
      ]}
    />
  );
}
