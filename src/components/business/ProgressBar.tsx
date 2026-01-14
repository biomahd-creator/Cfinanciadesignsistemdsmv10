/**
 * ProgressBar Component
 * 
 * BUSINESS PATTERN: Barra de progreso reutilizable sin estilos inline
 * 
 * NO MODIFICAR sin consultar: /components/business/BUSINESS_COMPONENTS_ARCHITECTURE.md
 * Parte del sistema modular sin estilos inline
 */

import { cn } from "../ui/utils";

interface ProgressBarProps {
  value: number; // 0-100
  variant?: "default" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

const variantClasses = {
  default: "bg-primary",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
};

export function ProgressBar({
  value,
  variant = "default",
  size = "md",
  showLabel = false,
  className,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("space-y-1", className)}>
      <div className={cn("w-full bg-secondary/20 rounded-full overflow-hidden", sizeClasses[size])}>
        <div
          className={cn(
            "h-full rounded-full transition-all duration-300",
            variantClasses[variant]
          )}
          style={{ "--progress-width": `${percentage}%` } as React.CSSProperties}
          data-progress={percentage}
        />
      </div>
      {showLabel && (
        <p className="text-xs text-muted-foreground text-right">
          {percentage.toFixed(0)}%
        </p>
      )}
    </div>
  );
}