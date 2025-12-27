import { useState, useRef, ReactNode } from "react";
import { Loader2, ArrowDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  threshold?: number;
  children: ReactNode;
  className?: string;
}

export function PullToRefresh({
  onRefresh,
  threshold = 80,
  children,
  className,
}: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [canRefresh, setCanRefresh] = useState(false);
  const startY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const container = containerRef.current;
    if (!container || isRefreshing) return;

    // Only start if scrolled to top
    if (container.scrollTop === 0) {
      startY.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!startY.current || isRefreshing) return;

    const currentY = e.touches[0].clientY;
    const distance = currentY - startY.current;

    if (distance > 0) {
      setPullDistance(Math.min(distance, threshold * 1.5));
      setCanRefresh(distance >= threshold);
    }
  };

  const handleTouchEnd = async () => {
    if (canRefresh && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
        setPullDistance(0);
        setCanRefresh(false);
      }
    } else {
      setPullDistance(0);
      setCanRefresh(false);
    }
    startY.current = 0;
  };

  const indicatorOpacity = Math.min(pullDistance / threshold, 1);
  const rotation = canRefresh ? 180 : 0;

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-y-auto h-full", className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Pull Indicator */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-center transition-all duration-300"
        style={{
          height: isRefreshing ? 60 : pullDistance,
          opacity: isRefreshing ? 1 : indicatorOpacity,
        }}
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {isRefreshing ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Refreshing...</span>
            </>
          ) : (
            <>
              <ArrowDown
                className="h-5 w-5 transition-transform duration-300"
                style={{ transform: `rotate(${rotation}deg)` }}
              />
              <span>{canRefresh ? "Release to refresh" : "Pull to refresh"}</span>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className="transition-transform duration-300"
        style={{
          transform: `translateY(${isRefreshing ? 60 : Math.min(pullDistance, threshold)}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
