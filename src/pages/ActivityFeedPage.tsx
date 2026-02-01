import { ComponentShowcase } from "../components/ui/component-showcase";
import { ActivityFeed } from "../components/patterns/ActivityFeed";

const code = `import { ActivityFeed } from "@/components/patterns/ActivityFeed";

export function ActivityFeedDemo() {
  return (
    <ActivityFeed 
      items={[
        { id: "1", user: { name: "Ana García", initials: "AG" }, action: "creó la factura", target: "INV-001", timestamp: "Hace 5 min" },
        { id: "2", user: { name: "Carlos Ruiz", initials: "CR" }, action: "comentó en", target: "Reporte Mensual", timestamp: "Hace 1 hora", description: "Excelente trabajo con los gráficos." },
        { id: "3", user: { name: "Sistema", initials: "SYS" }, action: "actualizó el estado de", target: "Pago #452", timestamp: "Hace 2 horas" },
      ]}
    />
  );
}`;

export function ActivityFeedPage() {
  return (
    <ComponentShowcase
      title="Activity Feed"
      description="Línea de tiempo de actividad de usuarios y sistema."
      category="Business Pattern"
      preview={
        <ActivityFeed 
          items={[
            { id: "1", user: { name: "Ana García", initials: "AG" }, action: "creó la factura", target: "INV-001", timestamp: "Hace 5 min" },
            { id: "2", user: { name: "Carlos Ruiz", initials: "CR" }, action: "comentó en", target: "Reporte Mensual", timestamp: "Hace 1 hora", description: "Excelente trabajo con los gráficos." },
            { id: "3", user: { name: "Sistema", initials: "SYS" }, action: "actualizó el estado de", target: "Pago #452", timestamp: "Hace 2 horas" },
          ]}
        />
      }
      code={code}
    />
  );
}
