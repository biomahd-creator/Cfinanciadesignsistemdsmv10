import React from "react";
import { cn } from "../lib/utils";
import { AlertTriangle, ShieldCheck, ShieldAlert, Shield } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";

export type RiskLevel = "low" | "medium" | "high" | "critical";

interface RiskIndicatorProps {
  level: RiskLevel;
  score?: number; // 0-100
  showLabel?: boolean;
  className?: string;
  condensed?: boolean;
}

const riskConfig = {
  low: {
    label: "Riesgo Bajo",
    color: "bg-success",
    textColor: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/20",
    icon: ShieldCheck,
  },
  medium: {
    label: "Riesgo Medio",
    color: "bg-warning",
    textColor: "text-warning",
    bgColor: "bg-warning/10",
    borderColor: "border-warning/20",
    icon: Shield,
  },
  high: {
    label: "Riesgo Alto",
    color: "bg-kpi-orange",
    textColor: "text-kpi-orange",
    bgColor: "bg-kpi-orange-bg/50",
    borderColor: "border-kpi-orange/20",
    icon: ShieldAlert,
  },
  critical: {
    label: "Crítico",
    color: "bg-destructive",
    textColor: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/20",
    icon: AlertTriangle,
  },
};

export function RiskIndicator({ 
  level, 
  score, 
  showLabel = true, 
  className,
  condensed = false
}: RiskIndicatorProps) {
  const config = riskConfig[level];
  const Icon = config.icon;

  if (condensed) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className={cn(
              "inline-flex items-center justify-center rounded-full h-8 w-8 border",
              config.bgColor,
              config.borderColor,
              className
            )}>
              <Icon className={cn("h-4 w-4", config.textColor)} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{config.label} {score !== undefined && `(${score}/100)`}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div className={cn(
      "inline-flex items-center gap-2 rounded-lg border px-3 py-1.5",
      config.bgColor,
      config.borderColor,
      className
    )}>
      <Icon className={cn("h-4 w-4", config.textColor)} />
      
      <div className="flex flex-col">
        {showLabel && (
          <span className={cn("text-sm font-medium leading-none", config.textColor)}>
            {config.label}
          </span>
        )}
        {score !== undefined && (
          <div className="mt-1.5 h-1.5 w-16 bg-muted rounded-full overflow-hidden">
            <div 
              className={cn("h-full rounded-full transition-all duration-300", config.color)} 
              style={{ width: `${score}%` }} 
            />
          </div>
        )}
      </div>
      
      {score !== undefined && (
        <span className={cn("ml-1 text-xs font-bold tabular-nums", config.textColor)}>
          {score}
        </span>
      )}
    </div>
  );
}
