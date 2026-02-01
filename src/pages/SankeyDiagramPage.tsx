import { ComponentShowcase } from "../components/ui/component-showcase";
import { SankeyDiagram } from "../components/advanced/SankeyDiagram";

const sankeyCode = `import { SankeyDiagram } from "@/components/advanced/SankeyDiagram";

export function SankeyDemo() {
  const data = {
    nodes: [
      { name: "Cartera Total" },
      { name: "Aprobados" },
      { name: "Rechazados" },
      { name: "Desembolsados" },
      { name: "Pendientes Desembolso" },
      { name: "Riesgo Alto" },
    ],
    links: [
      { source: 0, target: 1, value: 800 },
      { source: 0, target: 2, value: 200 },
      { source: 1, target: 3, value: 600 },
      { source: 1, target: 4, value: 200 },
      { source: 2, target: 5, value: 200 },
    ]
  };

  return <SankeyDiagram data={data} />;
}`;

export function SankeyDiagramPage() {
  const data = {
    nodes: [
      { name: "Cartera Total" },
      { name: "Aprobados" },
      { name: "Rechazados" },
      { name: "Desembolsados" },
      { name: "Pendientes Desembolso" },
      { name: "Riesgo Alto" },
    ],
    links: [
      { source: 0, target: 1, value: 800 },
      { source: 0, target: 2, value: 200 },
      { source: 1, target: 3, value: 600 },
      { source: 1, target: 4, value: 200 },
      { source: 2, target: 5, value: 200 },
    ]
  };

  return (
    <ComponentShowcase
      title="Sankey Diagram"
      description="Visualización de flujos de datos y sus proporciones."
      category="Advanced"
      preview={
        <div className="w-full min-w-0">
          <SankeyDiagram data={data} />
        </div>
      }
      code={sankeyCode}
      usage="Ideal para visualizar el flujo de dinero, energía o procesos a través de múltiples etapas."
    />
  );
}
