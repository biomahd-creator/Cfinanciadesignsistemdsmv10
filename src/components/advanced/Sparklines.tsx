import { LineChart, Line, AreaChart, Area, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface SparklinesProps {
  data: number[];
  width?: number;
  height?: number;
  type?: "line" | "area";
  color?: string;
  showTrend?: boolean;
  className?: string;
}

export function Sparklines({
  data,
  width = 100,
  height = 30,
  type = "line",
  color = "#DEFB49",
  showTrend = false,
  className,
}: SparklinesProps) {
  const chartData = data.map((value, index) => ({ value, index }));
  const trend = data[data.length - 1] > data[0] ? "up" : "down";
  const trendPercent = ((data[data.length - 1] - data[0]) / data[0]) * 100;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <ResponsiveContainer width={width} height={height}>
        {type === "line" ? (
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        ) : (
          <AreaChart data={chartData}>
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              fill={color}
              fillOpacity={0.2}
              strokeWidth={2}
              isAnimationActive={false}
            />
          </AreaChart>
        )}
      </ResponsiveContainer>
      {showTrend && (
        <div className="flex items-center gap-1">
          {trend === "up" ? (
            <TrendingUp className="h-4 w-4 text-green-600" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-600" />
          )}
          <span
            className={cn(
              "text-xs font-medium",
              trend === "up" ? "text-green-600" : "text-red-600"
            )}
          >
            {Math.abs(trendPercent).toFixed(1)}%
          </span>
        </div>
      )}
    </div>
  );
}
