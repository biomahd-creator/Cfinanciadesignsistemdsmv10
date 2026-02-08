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
import { FactoringApp } from "./factoring/FactoringApp";
import { HelpProvider } from "./components/help/HelpProvider";
import { HelpCenter } from "./components/help/HelpCenter";
import { LoadingProvider } from "./components/providers/LoadingProvider";
import { TransitionProvider } from "./components/providers/TransitionProvider";
import { LoadingOverlay } from "./components/ui/loading-overlay";
import { LanguageProvider, useLanguage } from "./components/i18n/LanguageProvider";
import { LanguageSelector } from "./components/i18n/LanguageSelector";
import "./styles/tour.css";

/**
 * App.tsx - Punto de Entrada Principal
 * 
 * ARQUITECTURA:
 * - Dos modos: DSM (Design System Manager) y Factoring
 * - Providers: Theme, Help, Loading, Transition, Language
 * - Accesibilidad: WCAG 2.1 AA compliant
 * - i18n: ES / EN
 */

type AppMode = "dsm" | "factoring";

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const { t, locale } = useLanguage();
  // Persist activePage in localStorage to survive Figma Make reloads
  const [activePage, setActivePage] = useState<PageId>(() => {
    const saved = localStorage.getItem('dsm-active-page');
    return (saved as PageId) || "home";
  });
  // Change default mode to "factoring"
  const [appMode, setAppMode] = useState<AppMode>("dsm");

  // Set lang attribute for WCAG compliance
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Save activePage to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dsm-active-page', activePage);
  }, [activePage]);

  // Listen for custom navigation events from child components (e.g., DSM Dashboard category clicks)
  useEffect(() => {
    const handler = (e: Event) => {
      const pageId = (e as CustomEvent<PageId>).detail;
      if (pageId) setActivePage(pageId);
    };
    window.addEventListener('dsm-navigate', handler);
    return () => window.removeEventListener('dsm-navigate', handler);
  }, []);

  // Sync dark mode class with theme state
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Modo Factoring: App completa de Factoring (Ahora es el default)
  if (appMode === "factoring") {
    return (
      <>
        <Toaster />
        <FactoringApp onExit={() => setAppMode("dsm")} />
      </>
    );
  }

  // Modo DSM: Design System Manager (Showcase de componentes)
  return (
    <>
      <Toaster />
      <SidebarProvider>
        {/* Accesibilidad: Skip Link */}
        <SkipLink />

        {/* Accesibilidad: Live Regions para Screen Readers */}
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

        {/* Sidebar de Navegación */}
        <SidebarNew
          activePage={activePage}
          onPageChange={setActivePage}
        />

        {/* Contenido Principal */}
        <SidebarInset>
          {/* Header */}
          <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12" role="banner">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="flex items-center gap-4">
                <div className="hidden md:block">
                  <h1 className="font-semibold text-foreground">
                    {t("header.title")}
                  </h1>
                  <p className="text-xs text-muted-foreground">
                    {t("header.subtitle")}
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              {/* Sistema de Ayuda */}
              <HelpCenter variant="header" />

              {/* Botón: Ir a App Factoring */}
              <Button
                variant="outline"
                className="flex gap-2 border-primary bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground"
                onClick={() => setAppMode("factoring")}
              >
                <LayoutTemplate className="h-4 w-4" />
                <span className="hidden md:inline">{t("header.goFactoring")}</span>
                <ArrowRight className="h-3 w-3 opacity-50 hidden md:block" />
              </Button>

              {/* Language Selector */}
              <LanguageSelector />

              {/* Toggle Theme */}
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
                aria-label={theme === "dark" ? t("header.toggleDark") : t("header.toggleLight")}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </header>

          {/* Contenido de Página */}
          <main id="main-content" className="flex flex-1 flex-col gap-4 p-4 pt-0 md:p-8 md:pt-6" role="main" tabIndex={-1}>
            <PageRenderer pageId={activePage} />
            
            {/* Footer */}
            <footer className="border-t border-border mt-auto pt-8" role="contentinfo">
              <div className="flex flex-col items-center gap-4">
                <Logo size="sm" variant="auto" />
                <p className="text-sm text-muted-foreground text-center">
                  {t("footer.builtWith")}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{t("footer.components")}</span>
                  <span>·</span>
                  <span>{t("footer.wcag")}</span>
                  <span>·</span>
                  <span>{t("footer.atomic")}</span>
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
      <LanguageProvider>
        <HelpProvider>
          <LoadingProvider>
            <TransitionProvider>
              <AppContent />
              <LoadingOverlay />
            </TransitionProvider>
          </LoadingProvider>
        </HelpProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}