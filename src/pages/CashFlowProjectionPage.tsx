import { ComponentShowcase } from "../components/ui/component-showcase";
import { CashFlowProjection } from "../factoring/CashFlowProjection";

const cashFlowCode = `import { CashFlowProjection } from "@/factoring/CashFlowProjection";

export function CashFlowProjectionDemo() {
  const data = [
    { month: "Ene", actual: 4000, projected: 4100 },
    { month: "Feb", actual: 3000, projected: 3200 },
    { month: "Mar", actual: 2000, projected: 2400 },
    { month: "Abr", actual: 2780, projected: 2900 },
    { month: "May", actual: 1890, projected: 2100 },
    { month: "Jun", actual: 2390, projected: 2500 },
  ];

  return <CashFlowProjection data={data} />;
}`;

export function CashFlowProjectionPage() {
  const data = [
    { month: "Ene", actual: 4000, projected: 4100 },
    { month: "Feb", actual: 3000, projected: 3200 },
    { month: "Mar", actual: 2000, projected: 2400 },
    { month: "Abr", actual: 2780, projected: 2900 },
    { month: "May", actual: 1890, projected: 2100 },
    { month: "Jun", actual: 2390, projected: 2500 },
  ];

  return (
    <ComponentShowcase
      title="Cash Flow Projection"
      description="Gráfico de proyección de flujo de caja comparando real vs proyectado."
      category="Business Component"
      preview={
        <div className="w-full max-w-4xl">
          <CashFlowProjection data={data} />
        </div>
      }
      code={cashFlowCode}
      usage="Visualización financiera para el análisis de flujo de caja a lo largo del tiempo."
    />
  );
}
