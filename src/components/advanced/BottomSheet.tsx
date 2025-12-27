import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

interface BottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  snapPoints?: ("full" | "half" | "peek")[];
  defaultSnapPoint?: "full" | "half" | "peek";
  children: React.ReactNode;
  className?: string;
}

const snapPointHeights = {
  full: "calc(100vh - 40px)",
  half: "50vh",
  peek: "30vh",
};

export function BottomSheet({
  open,
  onOpenChange,
  title,
  description,
  snapPoints = ["full", "half"],
  defaultSnapPoint = "half",
  children,
  className,
}: BottomSheetProps) {
  const [currentSnap, setCurrentSnap] = useState<"full" | "half" | "peek">(defaultSnapPoint);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        onClick={() => onOpenChange(false)}
      />

      {/* Bottom Sheet */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-3xl shadow-elevation-4 transition-all duration-300",
          className
        )}
        style={{ height: snapPointHeights[currentSnap] }}
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-muted-foreground/30 rounded-full" />
        </div>

        {/* Header */}
        {(title || description) && (
          <div className="px-6 pb-4 border-b">
            <div className="flex items-start justify-between">
              <div>
                {title && <h2 className="text-lg font-semibold">{title}</h2>}
                {description && (
                  <p className="text-sm text-muted-foreground mt-1">{description}</p>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onOpenChange(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto px-6 py-4" style={{ maxHeight: "calc(100% - 100px)" }}>
          {children}
        </div>

        {/* Snap Point Indicators */}
        {snapPoints.length > 1 && (
          <div className="absolute right-4 top-20 flex flex-col gap-2">
            {snapPoints.map((point) => (
              <button
                key={point}
                onClick={() => setCurrentSnap(point)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  currentSnap === point ? "bg-primary" : "bg-muted-foreground/30"
                )}
                aria-label={`Snap to ${point}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
