/**
 * StatusAlert Component
 * 
 * BUSINESS PATTERN: Alertas de estado sin estilos inline
 * 
 * NO MODIFICAR sin consultar: /components/business/BUSINESS_COMPONENTS_ARCHITECTURE.md
 * Parte del sistema modular sin estilos inline
 */

import { cn } from "../ui/utils";

interface StatusAlertProps {
  variant: "success" | "warning" | "info" | "danger";
  message: string;
  icon?: string;
  className?: string;
}

const variantClasses = {
  success: {
    bg: "bg-green-500/10",
    border: "border-l-4 border-green-500",
    text: "text-green-700 dark:text-green-400",
  },
  warning: {
    bg: "bg-yellow-500/10",
    border: "border-l-4 border-yellow-500",
    text: "text-yellow-700 dark:text-yellow-400",
  },
  info: {
    bg: "bg-blue-500/10",
    border: "border-l-4 border-blue-500",
    text: "text-blue-700 dark:text-blue-400",
  },
  danger: {
    bg: "bg-red-500/10",
    border: "border-l-4 border-red-500",
    text: "text-red-700 dark:text-red-400",
  },
};

const defaultIcons = {
  success: "✓",
  warning: "⚠",
  info: "ℹ",
  danger: "✕",
};

export function StatusAlert({
  variant,
  message,
  icon,
  className,
}: StatusAlertProps) {
  const classes = variantClasses[variant];
  const displayIcon = icon || defaultIcons[variant];

  return (
    <div
      className={cn(
        "p-3 rounded-lg",
        classes.bg,
        classes.border,
        className
      )}
    >
      <p className={cn("text-sm font-medium", classes.text)}>
        {displayIcon} {message}
      </p>
    </div>
  );
}