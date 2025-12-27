import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface MasonryGridProps {
  children: ReactNode[];
  columns?: number;
  gap?: number;
  className?: string;
}

export function MasonryGrid({
  children,
  columns = 3,
  gap = 4,
  className,
}: MasonryGridProps) {
  // Distribute items across columns
  const columnArrays: ReactNode[][] = Array.from({ length: columns }, () => []);
  
  children.forEach((child, index) => {
    columnArrays[index % columns].push(child);
  });

  return (
    <div
      className={cn("flex", className)}
      style={{ gap: `${gap * 4}px` }}
    >
      {columnArrays.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className="flex-1 flex flex-col"
          style={{ gap: `${gap * 4}px` }}
        >
          {column}
        </div>
      ))}
    </div>
  );
}
