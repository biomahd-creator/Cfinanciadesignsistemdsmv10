import { ComponentShowcase } from "../components/ui/component-showcase";
import { DataTableAdvanced } from "../components/patterns/DataTableAdvanced";

const dataTableAdvancedCode = `import { DataTableAdvanced } from "@/components/patterns/DataTableAdvanced";

export function DataTableAdvancedDemo() {
  return <DataTableAdvanced />;
}`;

export function DataTableAdvancedPage() {
  return (
    <ComponentShowcase
      title="Data Table Advanced"
      description="Table + Input + Select + DropdownMenu + Badge + Pagination"
      category="Business Pattern"
      preview={<DataTableAdvanced />}
      code={dataTableAdvancedCode}
      usage="Tabla avanzada con filtrado, ordenamiento y paginación para gestión de datos complejos."
    />
  );
}
