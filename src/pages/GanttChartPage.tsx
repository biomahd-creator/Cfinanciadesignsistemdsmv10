import { ComponentShowcase } from "../components/ui/component-showcase";
import { GanttChart } from "../components/advanced/GanttChart";

const ganttCode = `import { GanttChart } from "@/components/advanced/GanttChart";

export function GanttDemo() {
  const tasks = [
    { id: "1", name: "Análisis de Riesgo", startDate: new Date(2023, 10, 1), endDate: new Date(2023, 10, 5), progress: 100, color: "bg-green-500" },
    { id: "2", name: "Verificación Documental", startDate: new Date(2023, 10, 3), endDate: new Date(2023, 10, 8), progress: 80, color: "bg-blue-500" },
    { id: "3", name: "Aprobación Comité", startDate: new Date(2023, 10, 9), endDate: new Date(2023, 10, 10), progress: 0, color: "bg-yellow-500" },
    { id: "4", name: "Formalización Legal", startDate: new Date(2023, 10, 11), endDate: new Date(2023, 10, 15), progress: 0 },
  ];

  return <GanttChart tasks={tasks} />;
}`;

export function GanttChartPage() {
  const tasks = [
    { id: "1", name: "Análisis de Riesgo", startDate: new Date(2023, 10, 1), endDate: new Date(2023, 10, 5), progress: 100, color: "bg-green-500" },
    { id: "2", name: "Verificación Documental", startDate: new Date(2023, 10, 3), endDate: new Date(2023, 10, 8), progress: 80, color: "bg-blue-500" },
    { id: "3", name: "Aprobación Comité", startDate: new Date(2023, 10, 9), endDate: new Date(2023, 10, 10), progress: 0, color: "bg-yellow-500" },
    { id: "4", name: "Formalización Legal", startDate: new Date(2023, 10, 11), endDate: new Date(2023, 10, 15), progress: 0 },
  ];

  return (
    <ComponentShowcase
      title="Gantt Chart"
      description="Cronograma de actividades y seguimiento de proyectos."
      category="Advanced"
      preview={<GanttChart tasks={tasks} />}
      code={ganttCode}
      usage="Utilizado para visualizar la planificación de proyectos, dependencias y progreso temporal."
    />
  );
}
