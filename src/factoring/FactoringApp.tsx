import { useState } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  UserCheck, 
  Beaker, 
  LogOut, 
  Menu, 
  BookOpen, 
  ChevronDown, 
  Users, 
  Settings, 
  Building2 
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "../components/ui/sheet";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

// Vistas
import { ClientDashboard } from "./views/ClientDashboard";
import { RadianAdminDashboard } from "./views/RadianAdminDashboard";
import { MultiStepFormPage } from "../pages/MultiStepFormPage"; 
import { PlaygroundIndex } from "./playground/PlaygroundIndex";
import { CFinanciaFlow } from "./c-financia/CFinanciaFlow";
import { CFinanciaClientFlow } from "./c-financia/CFinanciaClientFlow";

interface FactoringLayoutProps {
  onExit: () => void;
}

type UserRole = "admin" | "client" | null;
type View = "welcome" | "radian-dashboard" | "vinculacion" | "playground" | "c-financia" | "c-financia-cliente";

export function FactoringApp({ onExit }: FactoringLayoutProps) {
  const [userRole, setUserRole] = useState<UserRole>("admin");
  const [currentView, setCurrentView] = useState<View>("welcome"); // Default to Welcome screen with Sidebar
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedOperationId, setSelectedOperationId] = useState<string | null>(null);

  const handleRoleSelect = (role: "admin" | "client") => {
    setUserRole(role);
    setCurrentView("welcome");
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  const renderView = () => {
    switch (currentView) {
      case "welcome":
        return (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-8">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <LayoutDashboard className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Bienvenido a Financio</h2>
            <p className="mt-2 text-center max-w-md">
              Seleccione una opción del menú lateral para comenzar.
            </p>
          </div>
        );

      case "radian-dashboard":
        return <RadianAdminDashboard />;

      case "vinculacion":
        return (
          <div className="space-y-8 p-8">
             <div className="flex items-center gap-6">
                <Button variant="ghost" onClick={() => setCurrentView("welcome")}>← Volver</Button>
                <h2 className="text-2xl font-bold text-secondary">Proceso de Vinculación</h2>
             </div>
             <MultiStepFormPage />
          </div>
        );

      case "playground":
        return <PlaygroundIndex onBack={() => setCurrentView("welcome")} />;

      case "c-financia":
        return <CFinanciaFlow />;
      
      case "c-financia-cliente":
        return <CFinanciaClientFlow />;
      
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-muted-foreground">
            <FileText className="h-16 w-16 mb-4 text-muted" />
            <h2 className="text-xl font-semibold">Sección en construcción</h2>
            <p className="text-muted-foreground">La vista {currentView} estará disponible pronto.</p>
            <Button variant="outline" className="mt-4" onClick={() => setCurrentView("welcome")}>
              Volver al Inicio
            </Button>
          </div>
        );
    }
  };

  // Fullscreen overrides - Sidebar will be hidden for these views
  if (currentView === "c-financia") {
    return <CFinanciaFlow onExit={() => setCurrentView("welcome")} />;
  }

  if (currentView === "c-financia-cliente") {
    return <CFinanciaClientFlow onExit={() => setCurrentView("welcome")} />;
  }

  return (
    <div className="min-h-screen bg-muted/10 flex">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-secondary text-secondary-foreground fixed h-full z-30 border-r border-white/10">
        <div className="p-4 h-[64px] flex items-center gap-3 border-b border-white/10 bg-black/10">
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
          
          {/* Sidebar items */}
          {userRole === "admin" && (
            <>
              <div className="text-xs font-medium text-slate-400 uppercase mb-2 px-2 mt-6">Desarrollo</div>
              <Button
                variant="ghost"
                onClick={() => setCurrentView("vinculacion")}
                className={`w-full justify-start gap-3 ${currentView === "vinculacion" ? "bg-primary text-primary-foreground font-bold" : "text-slate-300 hover:text-white hover:bg-white/10"}`}
              >
                <UserCheck className="h-4 w-4" />
                Vinculación
              </Button>
              <Button
                variant="ghost"
                onClick={() => setCurrentView("playground")}
                className={`w-full justify-start gap-3 ${currentView === "playground" ? "bg-primary text-primary-foreground font-bold" : "text-slate-300 hover:text-white hover:bg-white/10"}`}
              >
                <Beaker className="h-4 w-4" />
                <span>Playground</span>
                <Badge className="ml-auto bg-primary text-primary-foreground text-[10px] px-1.5 py-0">DEV</Badge>
              </Button>
              <Button
                variant="ghost"
                onClick={() => setCurrentView("c-financia")}
                className={`w-full justify-start gap-3 ${currentView === "c-financia" ? "bg-primary text-primary-foreground font-bold" : "text-slate-300 hover:text-white hover:bg-white/10"}`}
              >
                <FileText className="h-4 w-4" />
                <span>C-Financia Admin</span>
                <Badge className="ml-auto bg-green-500 text-white text-[10px] px-1.5 py-0">NEW</Badge>
              </Button>
              <Button
                variant="ghost"
                onClick={() => setCurrentView("c-financia-cliente")}
                className={`w-full justify-start gap-3 ${currentView === "c-financia-cliente" ? "bg-primary text-primary-foreground font-bold" : "text-slate-300 hover:text-white hover:bg-white/10"}`}
              >
                <FileText className="h-4 w-4" />
                <span>C-Financia Cliente</span>
                <Badge className="ml-auto bg-green-500 text-white text-[10px] px-1.5 py-0">NEW</Badge>
              </Button>
            </>
          )}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2 bg-black/20">
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

      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
      
        <header className="h-[64px] bg-secondary text-secondary-foreground flex items-center justify-between px-6 sticky top-0 z-50 shadow-md">
             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden text-white mr-2">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-secondary text-secondary-foreground border-r-zinc-800 p-0 w-64">
                    <div className="p-4 h-[64px] flex items-center gap-3 border-b border-white/10 bg-black/10">
                        <span className="font-bold text-lg tracking-wide block leading-none">FINANCIO</span>
                    </div>
                     <nav className="flex-1 p-4 space-y-2">
                        <Button variant="ghost" onClick={() => {setCurrentView("vinculacion"); setIsMobileMenuOpen(false)}} className="w-full justify-start gap-3 text-slate-300">
                            <UserCheck className="h-4 w-4" /> Vinculación
                        </Button>
                     </nav>
                </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2">
                <span className="font-medium text-gray-400">C-FINANCIA</span>
                <>
                    <span className="text-gray-600">/</span>
                    <span className="font-semibold text-white capitalize">
                        {currentView === "welcome" ? "Inicio" : currentView.replace("-", " ")}
                    </span>
                </>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10 hidden md:flex gap-2">
                    <BookOpen className="h-4 w-4" />
                    Instructivos
                </Button>

                <div className="h-6 w-px bg-white/20 mx-1 hidden md:block" />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-3 pl-2 pr-1 h-auto py-1 hover:bg-white/10 text-white">
                                <Avatar className="h-9 w-9 border-2 border-primary">
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

        <main className="flex-1 overflow-auto bg-muted/10">
            {renderView()}
        </main>
      </div>
    </div>
  );
}
