import { cn } from "../../lib/utils";

export interface FunnelStage {
  name: string;
  value: number;
  color?: string;
}

interface FunnelChartProps {
  data: FunnelStage[];
  showPercentages?: boolean;
  showValues?: boolean;
  className?: string;
}

export function FunnelChart({
  data,
  showPercentages = true,
  showValues = true,
  className,
}: FunnelChartProps) {
  const maxValue = data[0]?.value || 1;
  const defaultColors = [
    "#DEFB49",
    "#b8d940",
    "#92b737",
    "#6c952e",
    "#467325",
  ];

  return (
    <div className={cn("w-full space-y-2", className)}>
      {data.map((stage, index) => {
        const percentage = ((stage.value / maxValue) * 100).toFixed(1);
        const width = `${(stage.value / maxValue) * 100}%`;
        const color = stage.color || defaultColors[index % defaultColors.length];
        const conversionRate =
          index > 0
            ? (((stage.value / data[index - 1].value) * 100).toFixed(1))
            : "100.0";

        return (
          <div key={index} className="flex items-center gap-4">
            <div className="flex-1 relative">
              <div
                className="h-16 flex items-center justify-between px-4 text-sm font-medium transition-all hover:brightness-110"
                style={{
                  width,
                  backgroundColor: color,
                  clipPath: index === data.length - 1
                    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                <span className="text-foreground">{stage.name}</span>
                <div className="flex gap-3 text-xs">
                  {showValues && (
                    <span className="font-semibold">{stage.value.toLocaleString()}</span>
                  )}
                  {showPercentages && (
                    <span className="text-muted-foreground">({percentage}%)</span>
                  )}
                </div>
              </div>
            </div>
            {index > 0 && (
              <div className="w-16 text-xs text-muted-foreground text-right">
                {conversionRate}%
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
