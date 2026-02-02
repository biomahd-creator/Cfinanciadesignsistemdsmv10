import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../lib/utils";

interface VirtualizedListProps<T> {
  items: T[];
  height: number;
  itemHeight: number;
  renderItem: (item: T, index: number, style: React.CSSProperties) => React.ReactNode;
  className?: string;
}

export function VirtualizedList<T>({
  items,
  height,
  itemHeight,
  renderItem,
  className,
}: VirtualizedListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalHeight = items.length * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const visibleCount = Math.ceil(height / itemHeight);
  const endIndex = Math.min(items.length, startIndex + visibleCount + 5); // +5 buffer

  const visibleItems = items.slice(startIndex, endIndex);
  const offsetY = startIndex * itemHeight;

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div
      ref={scrollRef}
      className={cn("overflow-y-auto relative w-full", className)}
      style={{ height }}
      onScroll={onScroll}
    >
      <div style={{ height: totalHeight, position: "relative", width: "100%" }}>
        {visibleItems.map((item, index) => {
          const actualIndex = startIndex + index;
          return (
            <React.Fragment key={actualIndex}>
              {renderItem(item, actualIndex, {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: itemHeight,
                transform: `translateY(${offsetY + index * itemHeight}px)`,
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
