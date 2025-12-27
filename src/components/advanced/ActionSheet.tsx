import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

export interface ActionSheetItem {
  label: string;
  icon?: React.ReactNode;
  variant?: "default" | "destructive";
  onClick: () => void;
}

interface ActionSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  actions: ActionSheetItem[];
  cancelLabel?: string;
  className?: string;
}

export function ActionSheet({
  open,
  onOpenChange,
  title,
  actions,
  cancelLabel = "Cancel",
  className,
}: ActionSheetProps) {
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

  const handleAction = (action: ActionSheetItem) => {
    action.onClick();
    onOpenChange(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 animate-in fade-in"
        onClick={() => onOpenChange(false)}
      />

      {/* Action Sheet */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300",
          className
        )}
      >
        <div className="mx-4 mb-4 space-y-2">
          {/* Actions Card */}
          <div className="bg-background/95 backdrop-blur rounded-2xl shadow-elevation-4 overflow-hidden">
            {title && (
              <div className="px-4 py-3 text-center border-b">
                <p className="text-sm text-muted-foreground">{title}</p>
              </div>
            )}
            <div className="divide-y">
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleAction(action)}
                  className={cn(
                    "w-full px-4 py-4 flex items-center justify-center gap-3 transition-colors",
                    action.variant === "destructive"
                      ? "text-destructive hover:bg-destructive/10"
                      : "hover:bg-muted/50"
                  )}
                >
                  {action.icon && <span className="text-lg">{action.icon}</span>}
                  <span className="font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Cancel Button */}
          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-2xl bg-background/95 backdrop-blur"
            onClick={() => onOpenChange(false)}
          >
            {cancelLabel}
          </Button>
        </div>
      </div>
    </>
  );
}
