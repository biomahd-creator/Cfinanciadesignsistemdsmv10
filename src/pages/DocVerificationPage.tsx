import { ComponentShowcase } from "../components/ui/component-showcase";
import { DocumentVerificationStatus } from "../factoring/DocumentVerificationStatus";

const docVerificationCode = `import { DocumentVerificationStatus } from "@/factoring/DocumentVerificationStatus";

export function DocVerificationDemo() {
  const documents = [
    { id: "1", name: "Cámara de Comercio", status: "verified", timestamp: "Verificado hoy" },
    { id: "2", name: "RUT", status: "verified", timestamp: "Verificado ayer" },
    { id: "3", name: "Estados Financieros", status: "pending", message: "En revisión por analista" },
    { id: "4", name: "Composición Accionaria", status: "missing", required: true },
    { id: "5", name: "Referencia Bancaria", status: "rejected", message: "Documento ilegible" },
  ];

  return <DocumentVerificationStatus 
    documents={documents}
    onUpload={(id) => alert(\`Upload clicked for \${id}\`)}
  />;
}`;

export function DocVerificationPage() {
  const documents = [
    { id: "1", name: "Cámara de Comercio", status: "verified", timestamp: "Verificado hoy" },
    { id: "2", name: "RUT", status: "verified", timestamp: "Verificado ayer" },
    { id: "3", name: "Estados Financieros", status: "pending", message: "En revisión por analista" },
    { id: "4", name: "Composición Accionaria", status: "missing", required: true },
    { id: "5", name: "Referencia Bancaria", status: "rejected", message: "Documento ilegible" },
  ];

  return (
    <ComponentShowcase
      title="Document Verification"
      description="Lista de estado de documentos con acciones de carga."
      category="Business Component"
      preview={
        <div className="w-full max-w-md border rounded-lg p-4 bg-background">
          <DocumentVerificationStatus 
            documents={documents}
            onUpload={(id) => alert(`Upload clicked for ${id}`)}
          />
        </div>
      }
      code={docVerificationCode}
      usage="Gestión de requisitos documentales para procesos de onboarding o crédito."
    />
  );
}
