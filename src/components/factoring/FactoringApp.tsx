import { useState } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  LogOut,
  ChevronDown,
  Menu,
  Wallet,
  ShieldAlert,
  History,
  HelpCircle,
  Building2,
  User,
  BookOpen,
  UserCheck,
  Beaker
} from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Badge } from "../ui/badge";

// Vistas
import { FactoringDashboard } from "./views/FactoringDashboard"; // Keep for legacy reference if needed
import { BriefDashboard } from "./views/BriefDashboard"; // Screen 1
import { FactoringListView } from "./views/FactoringListView"; // Screen 2
import { FactoringNewOperation } from "./views/FactoringNewOperation"; // Nueva Operación Screen
import { OperationDetailStep1 } from "./views/OperationDetailStep1"; // Screen 3A
import { OperationDetailStep2 } from "./views/OperationDetailStep2"; // Screen 3B
import { RadianDashboard } from "./views/RadianDashboard"; // Screen 4 (NEW)
import { ClientDashboard } from "./views/ClientDashboard";
import { MultiStepFormPage } from "../pages/MultiStepFormPage";
import { RoleSelector } from "./auth/RoleSelector";
import { PlaygroundIndex } from "./playground/PlaygroundIndex"; // Playground for experimental screens

interface FactoringLayoutProps {
  onExit: () => void; // Para volver al DSM
}

type UserRole = "admin" | "client" | null;
// ⚠️ CRITICAL: Cada View ID debe tener su caso en renderView() switch
// ⚠️ ANTES DE ELIMINAR: Buscar referencias con Ctrl+F en todo el archivo
// ⚠️ Ver: /components/factoring/FACTORING_ARCHITECTURE.md
type View = "home" | "factoring-list" | "radian-dashboard" | "requests" | "new-request" | "vinculacion" | "operation-detail" | "operation-step-2" | "playground";

export function FactoringApp({ onExit }: FactoringLayoutProps) {
  const [userRole, setUserRole] = useState<UserRole>("admin"); // Default to admin for Brief demo
  const [currentView, setCurrentView] = useState<View>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedOperationId, setSelectedOperationId] = useState<string | null>(null);

  // Reset view when role changes
  const handleRoleSelect = (role: "admin" | "client") => {
    setUserRole(role);
    setCurrentView("home");
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  const navigateToModule = (module: "factoring" | "radian") => {
    if (module === "factoring") setCurrentView("factoring-list"); // Screen 2
    if (module === "radian") setCurrentView("radian-dashboard"); // Screen 4
  };

  // Render Logic
  // ⚠️ CRITICAL: NO ELIMINAR casos sin verificar referencias
  // ⚠️ Ver: /components/factoring/FACTORING_ARCHITECTURE.md para mapa completo
  const renderView = () => {
    switch (currentView) {
      case "home":
        // PANTALLA 1: DASHBOARD PRINCIPAL
        return <BriefDashboard onNavigate={navigateToModule} />;
      
      case "factoring-list":
        // PANTALLA 2: LISTADO FACTORING
        return (
          <FactoringListView 
            onNewOperation={() => setCurrentView("new-request")} 
            onViewDetail={(id) => {
              setSelectedOperationId(id);
              setCurrentView("operation-detail"); // Go to Screen 3A
            }}
          />
        );
      
      case "operation-detail":
        // PANTALLA 3A: DETALLE PASO 1
        return (
          <OperationDetailStep1 
            onBack={() => setCurrentView("factoring-list")}
            onContinue={() => setCurrentView("operation-step-2")} // Go to Screen 3B
          />
        );
      
      case "operation-step-2":
        // PANTALLA 3B: DETALLE PASO 2
        return (
          <OperationDetailStep2 
            onBack={() => setCurrentView("operation-detail")}
            onFinish={() => setCurrentView("factoring-list")} // Back to list on finish
          />
        );

      case "radian-dashboard":
        // PANTALLA 4: RADIAN DASHBOARD
        return <RadianDashboard />;

      case "new-request":
        return (
          <FactoringNewOperation 
            onBack={() => setCurrentView("factoring-list")}
            onStartOperation={() => setCurrentView("operation-detail")} 
          />
        );

      case "vinculacion":
        // PROCESO DE VINCULACIÓN DEL USUARIO
        return (
          <div className="space-y-6 p-8">
             <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => setCurrentView("home")}>← Volver</Button>
                <h2 className="text-2xl font-bold text-secondary">Proceso de Vinculación</h2>
             </div>
             <MultiStepFormPage />
          </div>
        );
      
      case "playground":
        return <PlaygroundIndex onBack={() => setCurrentView("home")} />;
      
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-[#5C5C5C]">
            <FileText className="h-16 w-16 mb-4 text-[#E5E7EB]" />
            <h2 className="text-xl font-semibold">Sección en construcción</h2>
            <p className="text-muted-foreground">La vista {currentView} estará disponible pronto.</p>
            <Button variant="outline" className="mt-4" onClick={() => setCurrentView("home")}>
              Volver al Inicio
            </Button>
          </div>
        );
    }
  };

  // If no role selected, show Role Selector
  if (!userRole) {
    return <RoleSelector onSelectRole={handleRoleSelect} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex">
      {/* Sidebar Desktop - RESTAURADO */}
      <aside className="hidden md:flex flex-col w-64 bg-secondary text-secondary-foreground fixed h-full z-30 border-r border-white/10">
        <div className="p-4 h-[64px] flex items-center gap-3 border-b border-white/10 bg-[#253646]">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
             <span className="font-bold text-primary-foreground">F</span>
          </div>
          <div>
            <span className="font-bold text-lg tracking-wide block leading-none">FINANCIO</span>
            <span className="text-xs text-slate-400 uppercase">
                {userRole === "admin" ? "Admin Console" : "Empresas"}
            </span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto py-6">
          <div className="text-xs font-medium text-slate-400 uppercase mb-2 px-2">Módulos</div>
          
          <Button
            variant="ghost"
            onClick={() => setCurrentView("home")}
            className={`w-full justify-start gap-3 ${currentView === "home" ? "bg-primary text-primary-foreground font-bold" : "text-slate-300 hover:text-white hover:bg-white/10"}`}
          >
            <LayoutDashboard className="h-4 w-4" />
            Inicio
          </Button>

          <Button
            variant="ghost"
            onClick={() => setCurrentView("factoring-list")}
            className={`w-full justify-start gap-3 ${currentView === "factoring-list" ? "bg-primary text-primary-foreground font-bold" : "text-slate-300 hover:text-white hover:bg-white/10"}`}
          >
            <Wallet className="h-4 w-4" />
            Factoring
          </Button>

          {userRole === "admin" && (
            <Button
              variant="ghost"
              onClick={() => setCurrentView("radian-dashboard")}
              className={`w-full justify-start gap-3 ${currentView === "radian-dashboard" ? "bg-primary text-primary-foreground font-bold" : "text-slate-300 hover:text-white hover:bg-white/10"}`}
            >
              <Bell className="h-4 w-4" />
              RADIAN
            </Button>
          )}

          <Button
            variant="ghost"
            onClick={() => setCurrentView("vinculacion")}
            className={`w-full justify-start gap-3 ${currentView === "vinculacion" ? "bg-primary text-primary-foreground font-bold" : "text-slate-300 hover:text-white hover:bg-white/10"}`}
          >
            <UserCheck className="h-4 w-4" />
            Vinculación
          </Button>
          
           <div className="text-xs font-medium text-slate-400 uppercase mb-2 px-2 mt-6">Gestión</div>

           <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-slate-300 hover:text-white hover:bg-white/10"
          >
            <Users className="h-4 w-4" />
            Clientes
          </Button>

           <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-slate-300 hover:text-white hover:bg-white/10"
          >
            <Settings className="h-4 w-4" />
            Administración
          </Button>

          {userRole === "admin" && (
            <>
              <div className="text-xs font-medium text-slate-400 uppercase mb-2 px-2 mt-6">Desarrollo</div>
              <Button
                variant="ghost"
                onClick={() => setCurrentView("playground")}
                className={`w-full justify-start gap-3 ${currentView === "playground" ? "bg-[#84cc16] text-white font-bold" : "text-slate-300 hover:text-white hover:bg-white/10"}`}
              >
                <Beaker className="h-4 w-4" />
                <span>Playground</span>
                <Badge className="ml-auto bg-[#84cc16] text-white text-[10px] px-1.5 py-0">DEV</Badge>
              </Button>
            </>
          )}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2 bg-[#172531]">
           <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-slate-300 hover:text-white hover:bg-white/10"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Cerrar Sesión
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-red-400 hover:text-red-300 hover:bg-red-900/20"
            onClick={onExit}
          >
            <LogOut className="h-4 w-4" />
            Salir al DSM
          </Button>
        </div>
      </aside>

      {/* Main Content Area - Con margen izquierdo para el sidebar */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
      
        {/* HEADER GLOBAL (Según Brief Screen 1) */}
        <header className="h-[64px] bg-[#2C2C2C] text-white flex items-center justify-between px-6 sticky top-0 z-50 shadow-md">
            {/* Mobile Menu Trigger */}
             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden text-white mr-2">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-secondary text-secondary-foreground border-r-zinc-800 p-0 w-64">
                    {/* Mobile Sidebar Content */}
                    <div className="p-4 h-[64px] flex items-center gap-3 border-b border-white/10 bg-[#253646]">
                        <span className="font-bold text-lg tracking-wide block leading-none">FINANCIO</span>
                    </div>
                     <nav className="flex-1 p-4 space-y-2">
                        <Button variant="ghost" onClick={() => {setCurrentView("home"); setIsMobileMenuOpen(false)}} className="w-full justify-start gap-3 text-slate-300">
                            <LayoutDashboard className="h-4 w-4" /> Inicio
                        </Button>
                        <Button variant="ghost" onClick={() => {setCurrentView("factoring-list"); setIsMobileMenuOpen(false)}} className="w-full justify-start gap-3 text-slate-300">
                            <Wallet className="h-4 w-4" /> Factoring
                        </Button>
                        <Button variant="ghost" onClick={() => {setCurrentView("vinculacion"); setIsMobileMenuOpen(false)}} className="w-full justify-start gap-3 text-slate-300">
                            <UserCheck className="h-4 w-4" /> Vinculación
                        </Button>
                     </nav>
                </SheetContent>
            </Sheet>

            {/* Breadcrumb / Title Area */}
            <div className="flex items-center gap-2">
                <span className="font-medium text-gray-400">C-FINANCIA</span>
                {currentView !== "home" && (
                    <>
                        <span className="text-gray-600">/</span>
                        <span className="font-semibold text-white capitalize">
                            {currentView === "factoring-list" ? "Factoring" : 
                             currentView === "radian-dashboard" ? "RADIAN" : "Inicio"}
                        </span>
                    </>
                )}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                {/* Instructivos Link - Mock */}
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10 hidden md:flex gap-2">
                    <BookOpen className="h-4 w-4" />
                    Instructivos
                </Button>

                <div className="h-6 w-px bg-white/20 mx-1 hidden md:block" />

                {/* User Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-3 pl-2 pr-1 h-auto py-1 hover:bg-white/10 text-white">
                            <Avatar className="h-9 w-9 border-2 border-primary">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback className="bg-secondary text-secondary-foreground">SP</AvatarFallback>
                            </Avatar>
                            <div className="hidden md:flex flex-col items-start text-xs">
                                <span className="font-medium text-white">soporte.cfinancia</span>
                                <span className="text-primary capitalize">
                                    {userRole === "admin" ? "Administrador" : "Cliente"}
                                </span>
                            </div>
                            <ChevronDown className="h-3 w-3 text-gray-400" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 bg-white text-secondary">
                        <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => setUserRole(userRole === "admin" ? "client" : "admin")}>
                            <Users className="mr-2 h-4 w-4" />
                            <span>Cambiar Rol ({userRole === "admin" ? "Cliente" : "Admin"})</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Administración</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Building2 className="mr-2 h-4 w-4" />
                            <span>Cambiar Empresa</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Cerrar Sesión</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={onExit} className="text-zinc-500">
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Volver al DSM</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto bg-[#F8F9FA]">
            {renderView()}
        </main>
      </div>
    </div>
  );
}

// Icono auxiliar
function PlusCircle(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
        </svg>
    )
}