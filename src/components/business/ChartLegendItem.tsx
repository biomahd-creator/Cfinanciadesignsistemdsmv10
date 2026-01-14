/**
 * ChartLegendItem Component
 * 
 * BUSINESS PATTERN: Item de leyenda para gráficos sin estilos inline
 * 
 * NO MODIFICAR sin consultar: /components/business/BUSINESS_COMPONENTS_ARCHITECTURE.md
 * Parte del sistema modular sin estilos inline
 */

import { cn } from "../ui/utils";

interface ChartLegendItemProps {
  color: string;
  label: string;
  value?: string | number;
  shape?: "square" | "circle";
  size?: "sm" | "md";
  className?: string;
}

const shapeClasses = {
  square: "rounded-sm",
  circle: "rounded-full",
};

const sizeClasses = {
  sm: "w-2 h-2",
  md: "w-2.5 h-2.5",
};

export function ChartLegendItem({
  color,
  label,
  value,
  shape = "square",
  size = "md",
  className,
}: ChartLegendItemProps) {
  // Mapeo de colores conocidos
  const colorMap: Record<string, string> = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    success: "bg-green-500",
    chart1: "bg-chart-1",
    chart2: "bg-chart-2",
    chart3: "bg-chart-3",
    chart4: "bg-chart-4",
    chart5: "bg-chart-5",
  };

  const bgClass = colorMap[color] || `bg-[${color}]`;

  return (
    <div className={cn("flex items-center gap-1.5 text-xs", className)}>
      <div
        className={cn(
          sizeClasses[size],
          shapeClasses[shape],
          bgClass
        )}
      />
      <span className="text-muted-foreground">{label}</span>
      {value && <span className="font-medium">{value}</span>}
    </div>
  );
}