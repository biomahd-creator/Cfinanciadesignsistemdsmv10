import { ComponentShowcase } from "../components/ui/component-showcase";
import { AuditLogViewer } from "../components/widgets/AuditLogViewer";

const auditLogCode = `import { AuditLogViewer } from "@/components/widgets/AuditLogViewer";

export function AuditLogDemo() {
  return <AuditLogViewer />;
}`;

export function AuditLogViewerPage() {
  return (
    <ComponentShowcase
      title="Audit Log Viewer"
      description="Sistema completo de visualización de logs de auditoría con filtros, búsqueda y estadísticas."
      category="Business Component"
      preview={
        <div className="w-full border rounded-lg p-6 bg-card">
          <AuditLogViewer />
        </div>
      }
      code={auditLogCode}
      usage="Ideal para compliance, seguridad y debugging de acciones de usuarios."
    />
  );
}
