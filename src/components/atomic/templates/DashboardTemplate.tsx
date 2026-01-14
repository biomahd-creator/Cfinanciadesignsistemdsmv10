import { NavigationBar } from "../organisms/NavigationBar";
import { ReactNode } from "react";

interface DashboardTemplateProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function DashboardTemplate({
  children,
  title = "Dashboard",
  description,
}: DashboardTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      
      <main className="container mx-auto px-6 py-8">
        {/* Page Header */}
        {(title || description) && (
          <div className="mb-8">
            <h1 className="text-2xl font-medium mb-2">{title}</h1>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
        )}

        {/* Page Content */}
        <div className="space-y-8">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-6 py-8">
          <p className="text-sm text-muted-foreground text-center">
            © 2024 Factoring Pro. Sistema de Gestión de Facturas.
          </p>
        </div>
      </footer>
    </div>
  );
}
