import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";
import { ArrowDownRight } from "lucide-react";

export type KpiCardState = "normal" | "hover" | "active" | "disabled";

interface KpiCardProps {
  label: string;
  description: string;
  value: string;
  count: number;
  state?: KpiCardState;
  variant?: "yellow" | "orange" | "blue" | "lime";
  onAction?: () => void;
  actionLabel?: string;
  className?: string;
  onClick?: () => void;
}

const getVariantClasses = (variant: "yellow" | "orange" | "blue" | "lime", state: KpiCardState) => {
  // Mapeo de variantes a clases Tailwind usando CSS variables
  const variantMap = {
    yellow: {
      bg: "bg-[rgb(var(--kpi-yellow-bg))]",
      text: "text-[rgb(var(--kpi-yellow-dark))]",
      badgeBg: "bg-[rgb(var(--kpi-yellow-dark))]",
      actionBg: "bg-[rgb(var(--kpi-yellow))]",
    },
    orange: {
      bg: "bg-[rgb(var(--kpi-orange-bg))]",
      text: "text-[rgb(var(--kpi-orange-dark))]",
      badgeBg: "bg-[rgb(var(--kpi-orange-dark))]",
      actionBg: "bg-[rgb(var(--kpi-orange))]",
    },
    blue: {
      bg: "bg-[rgb(var(--kpi-blue-bg))]",
      text: "text-[rgb(var(--kpi-blue-dark))]",
      badgeBg: "bg-[rgb(var(--kpi-blue-dark))]",
      actionBg: "bg-[rgb(var(--kpi-blue))]",
    },
    lime: {
      bg: "bg-[rgb(var(--kpi-lime-bg))]",
      text: "text-[rgb(var(--kpi-lime-dark))]",
      badgeBg: "bg-[rgb(var(--kpi-lime-dark))]",
      actionBg: "bg-[rgb(var(--kpi-lime))]",
    },
  };

  return variantMap[variant];
};

const getStateClasses = (state: KpiCardState, variant: "yellow" | "orange" | "blue" | "lime") => {
  const variantClasses = getVariantClasses(variant, state);

  const stateStyles = {
    normal: {
      card: "bg-card hover-lift transition-all duration-200",
      label: "text-muted-foreground",
      description: "text-muted-foreground/60",
      value: "text-muted-foreground",
      badge: "bg-muted-foreground text-background",
      showAction: false,
    },
    hover: {
      card: cn(
        "shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out",
        variantClasses.bg
      ),
      label: "text-foreground",
      description: "text-muted-foreground/60",
      value: variantClasses.text,
      badge: cn("text-background", variantClasses.badgeBg),
      showAction: true,
      actionBg: variantClasses.actionBg,
    },
    active: {
      card: cn(
        "shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out",
        variantClasses.bg
      ),
      label: "text-foreground",
      description: "text-muted-foreground/60",
      value: variantClasses.text,
      badge: cn("text-background", variantClasses.badgeBg),
      showAction: false,
    },
    disabled: {
      card: "bg-card cursor-not-allowed opacity-60",
      label: "text-muted/50",
      description: "text-muted/50",
      value: "text-muted/50",
      badge: "bg-muted/50 text-background",
      showAction: false,
    },
  };

  return stateStyles[state];
};

export function KpiCard({
  label,
  description,
  value,
  count,
  state = "normal",
  variant = "lime",
  onAction,
  actionLabel = "Ver Facturas",
  className,
  onClick,
}: KpiCardProps) {
  const [internalState, setInternalState] = useState<KpiCardState>(state);
  const [isPressed, setIsPressed] = useState(false);

  // Sincronizar internalState cuando el prop state cambia
  // Esto asegura que cuando un KPI se vuelve "active", su internalState se resetea
  useEffect(() => {
    if (state === "active" || state === "disabled") {
      setInternalState(state);
    } else if (state === "normal") {
      setInternalState("normal");
    }
  }, [state]);

  // Sincronizar estado interno con prop state
  // Si el componente está en estado "active", debe mantenerlo
  const currentState = state === "active" ? "active" : internalState;
  const styles = getStateClasses(currentState, variant);

  const handleMouseEnter = () => {
    // No cambiar estado si está activo o deshabilitado
    if (state === "active" || state === "disabled") return;
    setInternalState("hover");
  };

  const handleMouseLeave = () => {
    // No cambiar estado si está activo o deshabilitado
    if (state === "active" || state === "disabled") return;
    setInternalState("normal");
    setIsPressed(false);
  };

  const handleMouseDown = () => {
    // No cambiar estado si está deshabilitado
    // Permitir click en activo para toggle
    if (state === "disabled") return;
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    // No cambiar estado si está deshabilitado
    if (state === "disabled") return;
    setIsPressed(false);
  };

  const handleClick = () => {
    // Permitir click en cualquier estado excepto disabled
    // El componente padre maneja el toggle del estado active
    if (state !== "disabled" && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={cn(
        "relative border border-border rounded-lg overflow-hidden h-[103px]",
        styles.card,
        state !== "disabled" && "cursor-pointer",
        isPressed && state !== "active" && "scale-[0.98]",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
    >
      {/* Content Area */}
      <div className="px-4 pt-[15px] pb-3 flex flex-col gap-0.5">
        {/* Header: Label + Badge */}
        <div className="flex items-center justify-between gap-2">
          <p
            className={cn(
              "text-sm font-medium tracking-[0.07px] leading-[1.5] transition-colors duration-200",
              styles.label
            )}
          >
            {label}
          </p>
          <div
            className={cn(
              "flex items-center justify-center px-2 py-[3px] rounded-full transition-colors duration-200 min-h-[24px]",
              styles.badge
            )}
          >
            <span className="text-xs font-medium tracking-[0.18px] leading-[1.5]">
              {count}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className={cn(
            "text-xs font-normal leading-[12px] transition-colors duration-200",
            styles.description
          )}
        >
          {description}
        </p>

        {/* Value */}
        <p
          className={cn(
            "text-xl font-bold leading-[1.2] tracking-[-0.4px] mt-1 transition-colors duration-200",
            styles.value
          )}
        >
          {value}
        </p>
      </div>

      {/* Action Button - Sobrepuesto en la parte inferior del card solo en hover */}
      {styles.showAction && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAction?.();
          }}
          className={cn(
            "absolute left-0 right-0 bottom-0 h-[38px] text-white text-sm font-medium tracking-[0.1px] transition-all duration-300 ease-out flex items-center justify-center gap-2 hover:opacity-90",
            styles.actionBg
          )}
        >
          <ArrowDownRight className="h-4 w-4" />
          {actionLabel}
        </button>
      )}
    </div>
  );
}

// KpiCardGroup Component for displaying multiple KPI cards
interface KpiCardGroupProps {
  cards: Array<{
    id: string;
    label: string;
    description: string;
    value: string;
    count: number;
    variant: "yellow" | "orange" | "blue" | "lime";
    onAction: () => void;
  }>;
  activeId?: string | null;
  className?: string;
}

export function KpiCardGroup({ cards, activeId, className }: KpiCardGroupProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {cards.map((card) => (
        <KpiCard
          key={card.id}
          label={card.label}
          description={card.description}
          value={card.value}
          count={card.count}
          variant={card.variant}
          state={activeId === card.id ? "active" : "normal"}
          onAction={card.onAction}
          onClick={card.onAction}
        />
      ))}
    </div>
  );
}