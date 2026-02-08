import { Badge } from "../../components/ui/badge";
import { cn } from "../../lib/utils";

interface StatusBadgeProps {
  status: string;
  className?: string;
  variant?: "outline" | "default";
}

const statusConfig: Record<string, { 
  base: string;
  text: string;
  border: string;
  bg: string;
}> = {
  // Estados de pago
  paid: {
    base: "text-success border-success/30 bg-success/10",
    text: "text-success",
    border: "border-success/30",
    bg: "bg-success/10"
  },
  pending: {
    base: "text-warning border-warning/30 bg-warning/10",
    text: "text-warning",
    border: "border-warning/30",
    bg: "bg-warning/10"
  },
  overdue: {
    base: "text-destructive border-destructive/30 bg-destructive/10",
    text: "text-destructive",
    border: "border-destructive/30",
    bg: "bg-destructive/10"
  },
  
  // Estados de operación
  "Aprobada": {
    base: "text-green-500 border-green-500/30 bg-green-500/10",
    text: "text-green-500",
    border: "border-green-500/30",
    bg: "bg-green-500/10"
  },
  "Pendiente": {
    base: "text-orange-500 border-orange-500/30 bg-orange-500/10",
    text: "text-orange-500",
    border: "border-orange-500/30",
    bg: "bg-orange-500/10"
  },
  "Rechazada": {
    base: "text-destructive border-destructive/30 bg-destructive/10",
    text: "text-destructive",
    border: "border-destructive/30",
    bg: "bg-destructive/10"
  },
  
  // Estados urgentes
  "urgente": {
    base: "text-destructive border-destructive/30 bg-destructive/10",
    text: "text-destructive",
    border: "border-destructive/30",
    bg: "bg-destructive/10"
  },
  "completado": {
    base: "text-green-500 border-green-500/30 bg-green-500/10",
    text: "text-green-500",
    border: "border-green-500/30",
    bg: "bg-green-500/10"
  }
};

export function StatusBadge({ status, className, variant = "outline" }: StatusBadgeProps) {
  const config = statusConfig[status] || statusConfig["Pendiente"];
  
  return (
    <Badge 
      variant={variant} 
      className={cn(config.base, className)}
    >
      {status}
    </Badge>
  );
}

export function getStatusColor(status: string): string {
  const config = statusConfig[status] || statusConfig["Pendiente"];
  return config.base;
}

export function getStatusIconBg(status: string): string {
  const config = statusConfig[status] || statusConfig["Pendiente"];
  return config.bg;
}

export function getStatusTextColor(status: string): string {
  const config = statusConfig[status] || statusConfig["Pendiente"];
  return config.text;
}
