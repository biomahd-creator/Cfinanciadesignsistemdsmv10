import { ComponentShowcase } from "../components/ui/component-showcase";
import { RiskIndicator } from "../factoring/RiskIndicator";
import { Separator } from "../components/ui/separator";

const riskIndicatorCode = `import { RiskIndicator } from "@/factoring/RiskIndicator";

export function RiskIndicatorDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <RiskIndicator level="low" score={95} />
      <RiskIndicator level="medium" score={60} />
      <RiskIndicator level="high" score={40} />
      <RiskIndicator level="critical" score={15} />
      
      <div className="flex gap-2">
        <RiskIndicator level="low" condensed />
        <RiskIndicator level="medium" condensed />
        <RiskIndicator level="high" condensed />
      </div>
    </div>
  );
}`;

export function RiskIndicatorPage() {
  return (
    <ComponentShowcase
      title="Risk Indicator"
      description="Indicador visual de nivel de riesgo con score numérico y variantes condensadas."
      category="Business Component"
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            <RiskIndicator level="low" score={95} />
            <RiskIndicator level="medium" score={60} />
            <RiskIndicator level="high" score={40} />
            <RiskIndicator level="critical" score={15} />
          </div>
          <Separator />
          <div className="flex gap-2">
            <RiskIndicator level="low" condensed />
            <RiskIndicator level="medium" condensed />
            <RiskIndicator level="high" condensed />
          </div>
        </div>
      }
      code={riskIndicatorCode}
      usage="Utilizado para mostrar el riesgo asociado a una operación o cliente."
    />
  );
}
