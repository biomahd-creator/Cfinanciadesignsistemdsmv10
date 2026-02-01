import { ComponentShowcase } from "../components/ui/component-showcase";
import { LiquidityMeter } from "../factoring/LiquidityMeter";

const liquidityMeterCode = `import { LiquidityMeter } from "@/factoring/LiquidityMeter";

export function LiquidityMeterDemo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <LiquidityMeter value={75} amount={150000000} />
      <LiquidityMeter value={30} amount={25000000} />
    </div>
  );
}`;

export function LiquidityMeterPage() {
  return (
    <ComponentShowcase
      title="Liquidity Meter"
      description="Visualizador de liquidez con medidor circular y valor monetario."
      category="Business Component"
      preview={
        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
          <LiquidityMeter value={75} amount={150000000} />
          <LiquidityMeter value={30} amount={25000000} />
        </div>
      }
      code={liquidityMeterCode}
      usage="Muestra el porcentaje de liquidez disponible y el monto total."
    />
  );
}
