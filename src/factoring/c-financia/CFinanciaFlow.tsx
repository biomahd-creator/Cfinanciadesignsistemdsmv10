import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/button";
import { CFinanciaNavbar } from "./CFinanciaNavbar";
import { ModulosScreen } from "./ModulosScreen";
import { FactoringWorkspace } from "./FactoringWorkspace";
import { LoginScreen } from "./LoginScreen";
import { RadianAdminDashboard } from "../views/RadianAdminDashboard";

export function CFinanciaFlow({ onExit }: { onExit?: () => void }) {
  const [view, setView] = useState<"login" | "modules" | "workspace">("login");
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const handleLogin = () => {
    setView("modules");
  };

  const handleSelectModule = (moduleName: string) => {
    setSelectedModule(moduleName);
    setView("workspace");
    console.log(`Selected module: ${moduleName}`);
  };

  // Login View
  if (view === "login") {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Modules Selection View
  if (view === "modules") {
    return <ModulosScreen onSelectModule={handleSelectModule} onLogout={onExit} />;
  }

  // Workspace View - Renderiza el módulo correspondiente
  if (view === "workspace") {
    // Factoring Module
    if (selectedModule === "factoring") {
      return <FactoringWorkspace onLogout={onExit} />;
    }

    // Radian Module
    if (selectedModule === "radian") {
      return (
        <div className="min-h-screen bg-slate-50">
          <CFinanciaNavbar variant="full" onLogout={onExit} />
          <div className="pt-[80px]">
            <RadianAdminDashboard onBack={() => setView("modules")} />
          </div>
        </div>
      );
    }

    // Otros módulos - Placeholder
    return (
      <div className="min-h-screen bg-slate-50">
        <CFinanciaNavbar variant="full" onLogout={onExit} />
        <div className="pt-[80px] p-8">
          <h1 className="text-2xl font-bold text-[rgb(var(--cfinancia-navy))]">Workspace: {selectedModule}</h1>
          <p className="mt-4 text-muted-foreground">
              Aquí se cargará el módulo seleccionado.
          </p>
          <button 
              onClick={() => setView("modules")}
              className="mt-4 px-4 py-2 bg-muted rounded hover:bg-muted/80 transition-colors"
          >
              Volver a Módulos
          </button>
        </div>
      </div>
    );
  }

  // Fallback
  return null;
}
