import { useState } from "react";
import { SidebarNew, PageId } from "./components/SidebarNew";
import { PageRenderer } from "./components/PageRenderer";
import { Button } from "./components/ui/button";
import { Logo } from "./components/Logo";
import { Moon, Sun } from "lucide-react";
import { SkipLink } from "./components/accessibility/SkipLink";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/sonner";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "./components/ui/sidebar";
import { Separator } from "./components/ui/separator";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState<PageId>("home");

  // Set lang attribute for WCAG compliance
  useState(() => {
    document.documentElement.lang = "es";
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ThemeProvider>
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
               <Button
                variant="outline"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full"
                aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </header>

          {/* Content */}
          <main id="main-content" className="flex flex-1 flex-col gap-4 p-4 pt-0 md:p-8 md:pt-6" role="main" tabIndex={-1}>
            <PageRenderer pageId={activePage} />
            
            {/* Footer */}
            <footer className="border-t border-border mt-auto pt-8" role="contentinfo">
                <div className="flex flex-col items-center gap-4">
                  <Logo size="sm" />
                  <p className="text-sm text-muted-foreground text-center">
                    Built with React, Tailwind CSS, and shadcn/ui
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>110+ Components</span>
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
    </ThemeProvider>
  );
}