import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowDownRight } from "lucide-react";
import { cn } from "../ui/utils";

export interface StatusKPICardProps {
  title: string;
  subtitle: string;
  amount: string;
  count: number;
  variant?: "negotiation" | "disbursed";
  hoverStyle?: "default" | "full";
  state?: "normal" | "hover" | "active" | "disabled";
  interactive?: boolean;
  onViewClick?: () => void;
  className?: string;
}

export function StatusKPICard({
  title,
  subtitle,
  amount,
  count,
  variant = "negotiation",
  hoverStyle = "default",
  state: controlledState,
  interactive = true,
  onViewClick,
  className,
}: StatusKPICardProps) {
  const [internalState, setInternalState] = useState<"normal" | "hover" | "active" | "disabled">("normal");
  const [isHovered, setIsHovered] = useState(false);

  // Use controlled state if provided, otherwise use internal state
  const currentState = controlledState !== undefined ? controlledState : internalState;
  
  const isDisabled = currentState === "disabled";
  const isActive = currentState === "active";
  const showButton = (currentState === "hover" || isHovered) && !isDisabled && !isActive && interactive;

  // Color schemes based on variant
  const colors = {
    negotiation: {
      badge: "bg-success text-success-foreground",
      badgeNormal: "bg-muted text-muted-foreground",
      badgeDisabled: "bg-muted/50 text-muted-foreground/50",
      amount: "text-success",
      button: "bg-success hover:bg-success/90 text-success-foreground",
      bgActive: "bg-success/10 dark:bg-success/20",
    },
    disbursed: {
      badge: "bg-success text-success-foreground",
      badgeNormal: "bg-muted text-muted-foreground",
      badgeDisabled: "bg-muted/50 text-muted-foreground/50",
      amount: "text-success",
      button: "bg-success hover:bg-success/90 text-success-foreground",
      bgActive: "bg-success/10 dark:bg-success/20",
    },
  };

  const variantColors = colors[variant];

  const handleMouseEnter = () => {
    if (!isDisabled && interactive && controlledState === undefined) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isDisabled && interactive && controlledState === undefined) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (!isDisabled && interactive && controlledState === undefined) {
      setInternalState(prev => prev === "active" ? "normal" : "active");
    }
  };

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 cursor-pointer group",
        isActive && [variantColors.bgActive, "shadow-lg -translate-y-1 border-primary/20 z-10"],
        (showButton || isHovered) && !isActive && variantColors.bgActive,
        isDisabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3
              className={cn(
                "font-medium mb-1",
                isDisabled ? "text-muted-foreground/30" : "text-foreground"
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "text-sm",
                isDisabled ? "text-muted-foreground/20" : "text-muted-foreground"
              )}
            >
              {subtitle}
            </p>
          </div>

          {/* Badge with count */}
          <Badge
            variant="secondary"
            className={cn(
              "h-8 w-8 rounded-full flex items-center justify-center p-0 text-sm font-medium",
              isDisabled
                ? variantColors.badgeDisabled
                : isActive || showButton || isHovered
                ? variantColors.badge
                : variantColors.badgeNormal
            )}
          >
            {count}
          </Badge>
        </div>

        {/* Amount - shown when not in hover state or when active */}
        <div
          className={cn(
            "transition-opacity duration-200",
            showButton && !isActive ? "opacity-0" : "opacity-100"
          )}
        >
          <p
            className={cn(
              "text-3xl font-medium",
              isDisabled
                ? "text-muted-foreground/30"
                : isActive
                ? variantColors.amount
                : "text-muted-foreground"
            )}
          >
            {amount}
          </p>
        </div>

        {/* Action Button - appears on hover */}
        {showButton && (
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 animate-in slide-in-from-bottom-2 duration-200",
              hoverStyle === "default" ? "p-4" : "p-0"
            )}
            onClick={(e) => {
              e.stopPropagation();
              onViewClick?.();
            }}
          >
            <button
              className={cn(
                "w-full text-white flex items-center justify-between transition-colors",
                hoverStyle === "default" ? "rounded-md py-3 px-4" : "py-4 px-6 rounded-none",
                variantColors.button
              )}
            >
              <span className="font-medium">Ver Facturas</span>
              <ArrowDownRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}