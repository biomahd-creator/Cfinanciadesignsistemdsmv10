/**
 * BarChart Component
 * 
 * BUSINESS PATTERN: Mini gráfico de barra sin estilos inline
 * 
 * NO MODIFICAR sin consultar: /components/business/BUSINESS_COMPONENTS_ARCHITECTURE.md
 * Parte del sistema modular sin estilos inline
 */

import { cn } from "../ui/utils";

interface BarChartProps {
  data: number[]; // Array de valores 0-100
  height?: string;
  variant?: "default" | "success" | "warning";
  className?: string;
  showTooltip?: boolean;
}

const heightClasses: Record<string, string> = {
  sm: "h-16",
  md: "h-24",
  lg: "h-32",
  xl: "h-40",
};

const variantClasses = {
  default: "bg-zinc-100 hover:bg-primary",
  success: "bg-zinc-100 hover:bg-green-500",
  warning: "bg-zinc-100 hover:bg-yellow-500",
};

export function BarChart({
  data,
  height = "h-24",
  variant = "default",
  className,
  showTooltip = true,
}: BarChartProps) {
  return (
    <div className={cn("flex items-end gap-1", height, className)}>
      {data.map((value, index) => (
        <div
          key={index}
          className={cn(
            "group relative flex-1 rounded-t-sm transition-all duration-300",
            variantClasses[variant]
          )}
          style={{ "--bar-height": `${value}%` } as React.CSSProperties}
          data-bar-height={value}
        >
          {showTooltip && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap">
              {value}%
            </div>
          )}
        </div>
      ))}
    </div>
  );
}