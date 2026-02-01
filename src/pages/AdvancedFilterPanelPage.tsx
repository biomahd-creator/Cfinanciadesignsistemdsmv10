import { ComponentShowcase } from "../components/ui/component-showcase";
import { AdvancedFilterPanel } from "../components/patterns/AdvancedFilterPanel";

const advancedFilterCode = `import { AdvancedFilterPanel } from "@/components/patterns/AdvancedFilterPanel";

export function AdvancedFilterPanelDemo() {
  return <AdvancedFilterPanel />;
}`;

export function AdvancedFilterPanelPage() {
  return (
    <ComponentShowcase
      title="Advanced Filter Panel"
      description="Sheet + Form + DatePicker + Select + Checkbox + ScrollArea"
      category="Business Pattern"
      preview={<AdvancedFilterPanel />}
      code={advancedFilterCode}
      usage="Panel lateral para filtros complejos que no caben en una barra de herramientas estándar."
    />
  );
}
