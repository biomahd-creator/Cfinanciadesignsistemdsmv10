import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { cn } from "../../lib/utils";

export interface HeatmapData {
  date: Date;
  value: number;
  label?: string;
}

interface HeatmapProps {
  data: HeatmapData[];
  startDate?: Date;
  endDate?: Date;
  colorScale?: { min: string; max: string };
  cellSize?: number;
  cellGap?: number;
  className?: string;
}

export function Heatmap({
  data,
  startDate = new Date(new Date().getFullYear(), 0, 1),
  endDate = new Date(),
  colorScale = { min: "#f0f0f0", max: "#DEFB49" },
  cellSize = 12,
  cellGap = 3,
  className,
}: HeatmapProps) {
  const getIntensityColor = (value: number, max: number) => {
    if (value === 0) return colorScale.min;
    const intensity = Math.min(value / max, 1);
    // Simple interpolation between min and max colors
    return `rgba(222, 251, 73, ${intensity})`;
  };

  const maxValue = Math.max(...data.map((d) => d.value));

  // Generate all days between start and end
  const days: Date[] = [];
  const current = new Date(startDate);
  while (current <= endDate) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  // Group by weeks
  const weeks: Date[][] = [];
  let currentWeek: Date[] = [];
  days.forEach((day, index) => {
    currentWeek.push(day);
    if (day.getDay() === 6 || index === days.length - 1) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
  });

  const getDataForDate = (date: Date) => {
    return data.find(
      (d) => d.date.toDateString() === date.toDateString()
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <TooltipProvider>
      <div className={cn("inline-block", className)}>
        <div className="flex gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => {
                const dataPoint = getDataForDate(day);
                const value = dataPoint?.value || 0;
                const color = getIntensityColor(value, maxValue);

                return (
                  <Tooltip key={dayIndex}>
                    <TooltipTrigger asChild>
                      <div
                        className="rounded-sm cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                        style={{
                          width: cellSize,
                          height: cellSize,
                          backgroundColor: color,
                        }}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-xs">
                        <div className="font-medium">{formatDate(day)}</div>
                        <div className="text-muted-foreground">
                          {dataPoint?.label || `${value} contributions`}
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
