import { useState, useEffect } from "react";
import { SidebarNew, PageId } from "./components/SidebarNew";
import { PageRenderer } from "./components/PageRenderer";
import { Button } from "./components/ui/button";
import { Logo } from "./components/Logo";
import { Moon, Sun, ArrowRight, LayoutTemplate } from "lucide-react";
import { SkipLink } from "./components/accessibility/SkipLink";
import { ThemeProvider, useTheme } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/sonner";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "./components/ui/sidebar";
import { Separator } from "./components/ui/separator";
import { FactoringApp } from "./components/factoring/FactoringApp";
import { HelpProvider } from "./components/help/HelpProvider";
import { HelpCenter } from "./components/help/HelpCenter";
import "./styles/tour.css";

// ⚠️ CRITICAL: Este archivo controla el flujo principal de la aplicación
// ⚠️ ANTES DE MODIFICAR: Leer /DSM_ARCHITECTURE.md
// ⚠️ appMode controla DSM vs Factoring - cambios aquí afectan TODA la app
type AppMode = "dsm" | "factoring";

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [activePage, setActivePage] = useState<PageId>("home");
  const [appMode, setAppMode] = useState<AppMode>("dsm");

  // Set lang attribute for WCAG compliance
  useEffect(() => {
    document.documentElement.lang = "es";
  }, []);

  // Sync dark mode class with theme state
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Si estamos en modo Factoring, renderizamos la app completa
  if (appMode === "factoring") {
    return (
      <>
        <Toaster />
        <FactoringApp onExit={() => setAppMode("dsm")} />
      </>
    );
  }

  // Si estamos en modo DSM, renderizamos la documentación existente
  return (
    <>
      <Toaster />
      <SidebarProvider>
        {/* Skip Link for Accessibility */}
        <SkipLink />

        {/* Live Regions for Screen Readers */}
        <div
          id="live-region-polite"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        />
        <div
          id="live-region-assertive"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          className="sr-only"
        />

        {/* Sidebar */}
        <SidebarNew
          activePage={activePage}
          onPageChange={setActivePage}
        />

        {/* Main Content */}
        <SidebarInset>
          {/* Header */}
          <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12" role="banner">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="flex items-center gap-4">
                <div className="hidden md:block">
                  <h1 className="font-semibold text-foreground">
                    Component Showcase
                  </h1>
                  <p className="text-xs text-muted-foreground">
                    shadcn/ui · Satoshi · WCAG AA
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              {/* Help Center */}
              <HelpCenter variant="header" />

               <Button
                variant="outline"
                className="hidden md:flex gap-2 border-primary bg-primary/10 text-secondary hover:bg-primary hover:text-primary-foreground"
                onClick={() => setAppMode("factoring")}
               >
                 <LayoutTemplate className="h-4 w-4" />
                 <span>Ir a App Factoring</span>
                 <ArrowRight className="h-3 w-3 opacity-50" />
               </Button>

               <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
                aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </header>

          {/* Content */}
          <main id="main-content" className="flex flex-1 flex-col gap-4 p-4 pt-0 md:p-8 md:pt-6" role="main" tabIndex={-1}>
            <PageRenderer pageId={activePage} />
            
            {/* Footer */}
            <footer className="border-t border-border mt-auto pt-8" role="contentinfo">
                <div className="flex flex-col items-center gap-4">
                  <Logo size="sm" variant="auto" />
                  <p className="text-sm text-muted-foreground text-center">
                    Built with React, Tailwind CSS, and shadcn/ui
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>125+ Components</span>
                    <span>·</span>
                    <span>WCAG 2.1 AA</span>
                    <span>·</span>
                    <span>98% Accessibility Score</span>
                  </div>
                </div>
            </footer>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <HelpProvider>
        <AppContent />
      </HelpProvider>
    </ThemeProvider>
  );
}