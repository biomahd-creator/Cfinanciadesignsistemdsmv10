import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { cn } from "../../lib/utils";

interface GaugeProps {
  value: number;
  max?: number;
  size?: number;
  label?: string;
  showValue?: boolean;
  type?: "circular" | "semicircle";
  colorZones?: { threshold: number; color: string }[];
  className?: string;
}

export function Gauge({
  value,
  max = 100,
  size = 200,
  label,
  showValue = true,
  type = "circular",
  colorZones = [
    { threshold: 33, color: "#ef4444" },
    { threshold: 66, color: "#f59e0b" },
    { threshold: 100, color: "#22c55e" },
  ],
  className,
}: GaugeProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const currentColor =
    colorZones.find((zone) => percentage <= zone.threshold)?.color || colorZones[colorZones.length - 1].color;

  const data = [
    {
      value: percentage,
      fill: currentColor,
    },
  ];

  const startAngle = type === "semicircle" ? 180 : 90;
  const endAngle = type === "semicircle" ? 0 : -270;

  return (
    <div className={cn("relative inline-flex flex-col items-center", className)}>
      <ResponsiveContainer width={size} height={type === "semicircle" ? size / 2 : size}>
        <RadialBarChart
          cx="50%"
          cy={type === "semicircle" ? "100%" : "50%"}
          innerRadius="70%"
          outerRadius="100%"
          barSize={20}
          data={data}
          startAngle={startAngle}
          endAngle={endAngle}
        >
          <RadialBar
            background
            dataKey="value"
            cornerRadius={10}
            fill={currentColor}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      {(showValue || label) && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          {showValue && (
            <div className="text-3xl font-bold" style={{ color: currentColor }}>
              {Math.round(percentage)}%
            </div>
          )}
          {label && <div className="text-sm text-muted-foreground mt-1">{label}</div>}
        </div>
      )}
    </div>
  );
}
