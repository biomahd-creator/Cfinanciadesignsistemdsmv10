import { ComponentShowcase } from "../components/ui/component-showcase";
import { OrgChart } from "../components/advanced/OrgChart";

const orgChartCode = `import { OrgChart } from "@/components/advanced/OrgChart";

export function OrgChartDemo() {
  const data = {
    id: "root",
    name: "CEO",
    role: "Director General",
    children: [
      {
        id: "cfo",
        name: "CFO",
        role: "Director Financiero",
        children: [
          { id: "acc", name: "Contador", role: "Jefe Contabilidad" },
          { id: "fin", name: "Analista", role: "Analista Financiero" }
        ]
      },
      {
        id: "cto",
        name: "CTO",
        role: "Director Tecnología",
        children: [
          { id: "dev1", name: "Tech Lead", role: "Líder Técnico" },
          { id: "dev2", name: "DevOps", role: "Ingeniero DevOps" }
        ]
      }
    ]
  };

  return <OrgChart data={data} />;
}`;

export function OrgChartPage() {
  const data = {
    id: "root",
    name: "CEO",
    role: "Director General",
    children: [
      {
        id: "cfo",
        name: "CFO",
        role: "Director Financiero",
        children: [
          { id: "acc", name: "Contador", role: "Jefe Contabilidad" },
          { id: "fin", name: "Analista", role: "Analista Financiero" }
        ]
      },
      {
        id: "cto",
        name: "CTO",
        role: "Director Tecnología",
        children: [
          { id: "dev1", name: "Tech Lead", role: "Líder Técnico" },
          { id: "dev2", name: "DevOps", role: "Ingeniero DevOps" }
        ]
      }
    ]
  };

  return (
    <ComponentShowcase
      title="Organizational Chart"
      description="Visualización jerárquica de estructuras organizacionales."
      category="Advanced"
      preview={<OrgChart data={data} />}
      code={orgChartCode}
      usage="Muestra la estructura de la empresa, departamentos o jerarquías de aprobación."
    />
  );
}
