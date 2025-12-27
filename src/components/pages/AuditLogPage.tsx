import { ComponentShowcase } from "../ui/component-showcase";
import { AuditLog } from "../advanced/AuditLog";
import { Card } from "../ui/card";

export function AuditLogPage() {
  return (
    <ComponentShowcase
      title="Audit Log"
      description="Comprehensive audit trail with filtering, search, export, and detailed event tracking. Essential for compliance, security, and debugging."
      category="Hero UI Pro"
      preview={
        <Card className="p-6 w-full max-w-6xl">
          <div className="mb-4">
            <div className="text-lg mb-1">System Audit Log</div>
            <div className="text-xs text-muted-foreground">Track all user actions and system events</div>
          </div>
          <AuditLog 
            events={[
              { id: "1", user: "John Doe", action: "User Login", timestamp: new Date(), status: "success" },
              { id: "2", user: "Jane Smith", action: "Document Updated", timestamp: new Date(), status: "success" },
              { id: "3", user: "Admin", action: "Permission Changed", timestamp: new Date(), status: "warning" },
              { id: "4", user: "System", action: "Backup Failed", timestamp: new Date(), status: "error" },
            ]}
          />
        </Card>
      }
      code={`import { AuditLog } from "../advanced/AuditLog";

<AuditLog 
  events={auditEvents}
  onFilter={handleFilter}
  onExport={handleExport}
/>`}
      usage="Audit Log provides complete activity tracking with advanced filtering, search, timeline view, and export capabilities. Critical for compliance requirements and security monitoring."
      usageCode={`import { AuditLog } from "../advanced/AuditLog";
import { useState, useEffect } from "react";

export function AuditTrail() {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const fetchEvents = async () => {
      const data = await api.getAuditLog();
      setEvents(data);
    };
    fetchEvents();
  }, []);
  
  return (
    <AuditLog
      events={events}
      onFilter={(filters) => fetchFilteredEvents(filters)}
      onExport={(format) => exportLog(format)}
    />
  );
}`}
      props={[
        { name: "events", type: "AuditEvent[]", default: "[]", description: "Array of audit events", required: true },
        { name: "onFilter", type: "(filters: Filters) => void", default: "undefined", description: "Callback when filters change" },
        { name: "onExport", type: "(format: string) => void", default: "undefined", description: "Callback for export action" },
        { name: "showTimeline", type: "boolean", default: "true", description: "Show timeline visualization" },
        { name: "groupByUser", type: "boolean", default: "false", description: "Group events by user" },
        { name: "pageSize", type: "number", default: "50", description: "Number of events per page" },
      ]}
      examples={[
        {
          title: "Security Events",
          description: "Filter security-related audit entries",
          preview: (
            <Card className="p-4 w-full max-w-5xl">
              <div className="mb-3 flex gap-2">
                <select className="px-3 py-1 bg-muted rounded text-xs">
                  <option>All Users</option>
                  <option>Admin</option>
                </select>
                <select className="px-3 py-1 bg-muted rounded text-xs">
                  <option>All Actions</option>
                  <option>Login</option>
                  <option>Permission Change</option>
                </select>
                <select className="px-3 py-1 bg-muted rounded text-xs">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>
              <div className="space-y-2">
                {[
                  { time: "10:30 AM", user: "Admin", action: "Permission updated", status: "success" },
                  { time: "10:15 AM", user: "John", action: "Failed login attempt", status: "error" },
                  { time: "09:45 AM", user: "System", action: "Database backup", status: "success" },
                ].map((event, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg text-xs">
                    <div className="w-16 text-muted-foreground">{event.time}</div>
                    <div className="w-24">{event.user}</div>
                    <div className="flex-1">{event.action}</div>
                    <div className={`px-2 py-1 rounded-full ${
                      event.status === 'success' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'
                    }`}>
                      {event.status}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ),
          code: `<AuditLog\n  events={securityEvents}\n  onFilter={applySecurityFilter}\n  showTimeline={true}\n/>`,
        },
      ]}
    />
  );
}
