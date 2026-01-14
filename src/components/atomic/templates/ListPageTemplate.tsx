import { NavigationBar } from "../organisms/NavigationBar";
import { Button } from "../../ui/button";
import { Plus } from "lucide-react";
import { ReactNode } from "react";

interface ListPageTemplateProps {
  children: ReactNode;
  title: string;
  description?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  filters?: ReactNode;
}

export function ListPageTemplate({
  children,
  title,
  description,
  primaryAction,
  filters,
}: ListPageTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />

      <main className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-medium mb-2">{title}</h1>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
          {primaryAction && (
            <Button onClick={primaryAction.onClick}>
              <Plus className="mr-2 h-4 w-4" />
              {primaryAction.label}
            </Button>
          )}
        </div>

        {/* Filters Section */}
        {filters && <div className="mb-6">{filters}</div>}

        {/* List Content */}
        <div>{children}</div>
      </main>
    </div>
  );
}
