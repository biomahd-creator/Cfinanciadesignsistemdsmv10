import { cn } from "../ui/utils";
import { Card, CardContent } from "../ui/card";
import React from "react";

interface FactoringKpiCardProps {
  label: string;
  description: string;
  value: string;
  count: number;
  variant?: "default" | "blue" | "yellow" | "green" | "purple";
  isActive?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

/* ── Colour hex per variant ────────────────────────────── */
const variantHex: Record<string, string> = {
  blue: "#3b82f6",
  yellow: "#eab308",
  green: "#22c55e",
  purple: "#a855f7",
};

const GRAY = "#9ca3af";

export function FactoringKpiCard({
  label,
  description,
  value,
  count,
  variant = "default",
  isActive = false,
  onClick,
  icon,
  className,
}: FactoringKpiCardProps) {
  const hasColor = variant !== "default" && variant in variantHex;
  const accentColor = hasColor ? variantHex[variant] : GRAY;
  const [isHovered, setIsHovered] = React.useState(false);

  /* ── Resolved colours per state ── */
  const showColor = isActive || (isHovered && hasColor);

  const borderColor = showColor ? accentColor : GRAY;
  const badgeColor = showColor ? accentColor : GRAY;

  /* Label uses accent color when active, otherwise theme-aware text */
  const labelStyle = isActive && hasColor ? { color: accentColor } : undefined;
  const labelClass = isActive && hasColor
    ? ""
    : showColor
      ? "text-foreground"
      : "text-muted-foreground";

  /* Description & Value: theme-aware (foreground in light+dark) */
  const descClass = showColor ? "text-muted-foreground" : "text-muted-foreground/60";
  const valueClass = showColor ? "text-foreground" : "text-muted-foreground";

  /* ── Shadow ── */
  const shadowClass = isActive && hasColor
    ? "shadow-lg"
    : "shadow-sm";

  return (
    <Card
      className={cn(
        "relative bg-card border-0 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden",
        shadowClass,
        className
      )}
      style={{ borderBottom: `4px solid ${borderColor}` }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="pt-6 pb-7 px-6 relative">
        <div className="flex flex-col gap-2 w-full">
          {/* ── Label ── */}
          <div className="flex items-center justify-between w-full min-h-5">
            <p
              className={cn("font-bold leading-[20px] text-[14px] transition-colors duration-300", labelClass)}
              style={labelStyle}
            >
              {label}
            </p>
          </div>

          {/* ── Separator + Description ── */}
          <div className="flex flex-col items-start pt-2 w-full relative">
            <div
              aria-hidden="true"
              className="absolute border-gray-300 border-solid border-t inset-0 pointer-events-none"
            />
            <div className="flex items-center justify-between w-full min-h-5">
              <p
                className={cn("text-[12px] leading-[12px] transition-colors duration-300", descClass)}
              >
                {description}
              </p>
            </div>
          </div>

          {/* ── Value + Icon ── */}
          <div className="flex items-end justify-between w-full min-h-8">
            <p
              className={cn("font-bold leading-[32px] text-[24px] transition-colors duration-300", valueClass)}
            >
              {value}
            </p>
            {icon && (
              <span className="text-gray-300 shrink-0 [&>svg]:w-8 [&>svg]:h-8">
                {icon}
              </span>
            )}
          </div>

          {/* ── Badge (counter) ── */}
          <div
            className="absolute right-6 top-6 flex items-center justify-center min-h-6 px-2 py-0.5 rounded-lg transition-colors duration-300"
            style={{ backgroundColor: badgeColor }}
          >
            <span className="font-medium leading-normal text-white text-xs text-center tracking-wide whitespace-nowrap">
              {count}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}