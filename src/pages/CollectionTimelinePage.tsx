import { ComponentShowcase } from "../components/ui/component-showcase";
import { CollectionTimeline } from "../factoring/CollectionTimeline";

const collectionTimelineCode = `import { CollectionTimeline } from "@/factoring/CollectionTimeline";

export function CollectionTimelineDemo() {
  const events = [
    { id: "1", type: "email", title: "Recordatorio enviado", date: "Hoy", status: "completed" },
    { id: "2", type: "call", title: "Llamada a tesorería", date: "Ayer", description: "Compromiso de pago para el viernes", status: "completed", user: "Ana" },
    { id: "3", type: "payment", title: "Pago parcial recibido", date: "Hace 3 días", status: "completed" },
    { id: "4", type: "system", title: "Factura radicada", date: "Hace 10 días" },
  ];

  return <CollectionTimeline events={events} />;
}`;

export function CollectionTimelinePage() {
  const events = [
    { id: "1", type: "email", title: "Recordatorio enviado", date: "Hoy", status: "completed" },
    { id: "2", type: "call", title: "Llamada a tesorería", date: "Ayer", description: "Compromiso de pago para el viernes", status: "completed", user: "Ana" },
    { id: "3", type: "payment", title: "Pago parcial recibido", date: "Hace 3 días", status: "completed" },
    { id: "4", type: "system", title: "Factura radicada", date: "Hace 10 días" },
  ];

  return (
    <ComponentShowcase
      title="Collection Timeline"
      description="Línea de tiempo para seguimiento de gestión de cobranza."
      category="Business Component"
      preview={
        <div className="w-full max-w-md border rounded-lg p-4 bg-background">
          <CollectionTimeline events={events} />
        </div>
      }
      code={collectionTimelineCode}
      usage="Muestra el historial de interacciones y eventos relacionados con una factura."
    />
  );
}
