import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { DollarSign, FileText, Clock, User } from "lucide-react";

/**
 * ⚠️ PLAYGROUND COMPONENT - Experimental Development
 * 
 * Pantalla de Módulos de Operación - Dashboard principal después del login
 * Muestra los tres módulos principales: Factoring, RADIAN y Vinculaciones
 * 
 * Ubicación: /components/factoring/playground/ModulesScreen.tsx
 * Estado: En desarrollo
 * Propósito: Testing y refinamiento antes de integración final
 */

interface ModulesScreenProps {
  onSelectModule?: (module: "factoring" | "radian" | "vinculaciones") => void;
  onBack?: () => void;
  userEmail?: string;
  companyName?: string;
}

export function ModulesScreen({ 
  onSelectModule,
  onBack,
  userEmail = "soporte.cfinancia",
  companyName = "CFINANCIA"
}: ModulesScreenProps) {

  const handleModuleClick = (module: "factoring" | "radian" | "vinculaciones") => {
    if (onSelectModule) {
      onSelectModule(module);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#84cc16] via-[#65a30d] to-[#16a34a] flex flex-col">
      {/* Header Navigation */}
      <header className="bg-[#1a1a1a] h-14 flex items-center justify-between px-6 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#84cc16] flex items-center justify-center border-2 border-[#84cc16]">
            <span className="text-lg font-bold text-[#1a1a1a]">F</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Financia</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 rounded-full font-medium"
          >
            <span className="mr-2">💼</span>
            Factoring
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 h-8 px-4 rounded-full font-medium"
          >
            <span className="mr-2">📋</span>
            Radian
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 h-8 px-4 rounded-full font-medium"
          >
            <span className="mr-2">👥</span>
            Vinculaciones
          </Button>
        </nav>

        {/* User Info */}
        <div className="flex items-center gap-2 text-white">
          <User className="h-4 w-4" />
          <div className="text-sm">
            <div className="font-medium">{userEmail}</div>
            <div className="text-xs text-slate-400">{companyName}</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-between px-16 py-16">
        {/* Left Side - Modules */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-3">
              Módulos de Operación
            </h1>
            <p className="text-lg text-white/90">
              Accede a las funcionalidades principales de la plataforma.
            </p>
          </div>

          <div className="space-y-4">
            {/* Factoring Module */}
            <Card 
              className="bg-[#1a1a1a] border-0 p-6 cursor-pointer hover:bg-[#2a2a2a] transition-all hover:shadow-xl group"
              onClick={() => handleModuleClick("factoring")}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#84cc16] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <div className="relative">
                    <DollarSign className="h-6 w-6 text-[#1a1a1a]" strokeWidth={2.5} />
                    <div className="absolute -right-1 -bottom-1 w-3 h-3 border-2 border-[#1a1a1a] rounded-full bg-[#84cc16]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Factoring
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Revisa las operaciones en curso y las oportunidades de tener liquidez en 24 hrs.
                  </p>
                </div>
              </div>
            </Card>

            {/* RADIAN Module */}
            <Card 
              className="bg-primary border-0 p-6 cursor-pointer hover:bg-primary/90 transition-all hover:shadow-xl group"
              onClick={() => handleModuleClick("radian")}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FileText className="h-6 w-6 text-primary" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-1">
                    Eventos RADIAN
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/80 leading-relaxed">
                    Notifica eventos a RADIAN
                  </p>
                </div>
              </div>
            </Card>

            {/* Vinculaciones Module */}
            <Card 
              className="bg-white border-0 p-6 cursor-pointer hover:bg-slate-50 transition-all hover:shadow-xl group"
              onClick={() => handleModuleClick("vinculaciones")}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-slate-200">
                  <Clock className="h-6 w-6 text-[#1a1a1a]" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-1">
                    Vinculaciones
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Revisa y Aprueba las Solicitudes de Vinculación de tus Clientes
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Back to Playground */}
          {onBack && (
            <div className="mt-8">
              <Button
                type="button"
                variant="ghost"
                className="text-sm text-white/80 hover:text-white hover:bg-white/10"
                onClick={onBack}
              >
                ← Volver al Playground
              </Button>
            </div>
          )}
        </div>

        {/* Right Side - Branding */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Text Branding */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white tracking-wider mb-2">
              CESION<span className="font-light">BNK</span>
            </h2>
            <p className="text-lg text-white/90 font-light tracking-wide">
              Factoring Electrónico
            </p>
          </div>

          {/* Large Logo Circle */}
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-primary flex items-center justify-center">
              {/* Large "C" Shape */}
              <div className="relative w-48 h-48">
                {/* Outer circle border to create the "C" */}
                <div className="absolute inset-0 border-[32px] border-[#1a1a1a] rounded-full border-r-transparent rotate-45" />
                
                {/* Small cyan dot */}
                <div className="absolute top-4 right-8 w-10 h-10 rounded-full bg-[#22d3ee]" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] h-12 flex items-center justify-center text-slate-400 text-sm">
        <p>CESIONBNK - Factoring Electrónico - 2025 www.cesionbnk.com</p>
      </footer>
    </div>
  );
}