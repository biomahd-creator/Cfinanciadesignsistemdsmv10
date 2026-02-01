import { ComponentShowcase } from "../components/ui/component-showcase";
import { EmptyState } from "../components/ui/empty-state";
import { FileSearch } from "lucide-react";

const code = `import { EmptyState } from "@/components/ui/empty-state";
import { FileSearch } from "lucide-react";

export function EmptyStateDemo() {
  return (
    <EmptyState 
      title="No hay documentos"
      description="Sube tu primer documento para comenzar el proceso de factoring."
      action={{ label: "Subir Documento", onClick: () => {} }}
      icon={FileSearch}
    />
  );
}`;

export function EmptyStatePage() {
  return (
    <ComponentShowcase
      title="Empty State"
      description="Estado vacío para listas o contenedores sin datos."
      category="UI Pattern"
      preview={
        <EmptyState 
          title="No hay documentos"
          description="Sube tu primer documento para comenzar el proceso de factoring."
          action={{ label: "Subir Documento", onClick: () => {} }}
          icon={FileSearch}
        />
      }
      code={code}
    />
  );
}
