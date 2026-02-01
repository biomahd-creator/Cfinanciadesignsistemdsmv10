import { ComponentShowcase } from "../components/ui/component-showcase";
import { InvoiceCard } from "../factoring/InvoiceCard";

const invoiceCardCode = `import { InvoiceCard } from "@/factoring/InvoiceCard";

export function InvoiceCardDemo() {
  return (
    <div className="space-y-4 max-w-md">
      <InvoiceCard 
        invoice={{
          id: "1",
          number: "FV-9921",
          clientName: "Logística y Transportes del Norte SAS",
          amount: 45000000,
          dueDate: "15 Oct 2024",
          issueDate: "15 Ago 2024",
          status: "pending",
          probability: 85
        }}
      />
      <InvoiceCard 
        invoice={{
          id: "2",
          number: "FV-9922",
          clientName: "Distribuidora de Alimentos",
          amount: 12500000,
          dueDate: "01 Sep 2024",
          issueDate: "01 Ago 2024",
          status: "overdue"
        }}
      />
    </div>
  );
}`;

export function InvoiceCardPage() {
  return (
    <ComponentShowcase
      title="Invoice Card"
      description="Tarjeta de resumen de factura con estado y probabilidad de pago."
      category="Business Component"
      preview={
        <div className="space-y-4 w-full max-w-md">
          <InvoiceCard 
            invoice={{
              id: "1",
              number: "FV-9921",
              clientName: "Logística y Transportes del Norte SAS",
              amount: 45000000,
              dueDate: "15 Oct 2024",
              issueDate: "15 Ago 2024",
              status: "pending",
              probability: 85
            }}
          />
          <InvoiceCard 
            invoice={{
              id: "2",
              number: "FV-9922",
              clientName: "Distribuidora de Alimentos",
              amount: 12500000,
              dueDate: "01 Sep 2024",
              issueDate: "01 Ago 2024",
              status: "overdue"
            }}
          />
        </div>
      }
      code={invoiceCardCode}
      usage="Representación visual compacta de una factura en listas o dashboards."
    />
  );
}
