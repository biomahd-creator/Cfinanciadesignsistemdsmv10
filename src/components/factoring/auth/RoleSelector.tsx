import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Building2, UserCog, ShieldCheck } from "lucide-react";
import { Logo } from "../../Logo";

interface RoleSelectorProps {
  onSelectRole: (role: "admin" | "client") => void;
}

export function RoleSelector({ onSelectRole }: RoleSelectorProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-4">
      <div className="mb-12 flex flex-col items-center">
        <div className="mb-6 scale-150">
            <Logo variant="auto" />
        </div>
        <h1 className="text-3xl font-bold text-secondary text-center mt-4">Bienvenido a Financio</h1>
        <p className="text-zinc-500 mt-2 text-center max-w-md">
          Selecciona un perfil para ingresar a la demostración de la plataforma de Factoring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Client Card */}
        <Card 
            className="group hover:border-primary hover:shadow-xl transition-all cursor-pointer border-2 overflow-hidden"
            onClick={() => onSelectRole("client")}
        >
          <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center">
            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-secondary mb-2">Soy Cliente</h2>
            <p className="text-zinc-500 mb-6">
                Empresas que desean anticipar sus facturas para obtener liquidez inmediata.
            </p>
            <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Ingresar como Cliente
            </Button>
          </CardContent>
        </Card>

        {/* Admin Card */}
        <Card 
            className="group hover:border-primary hover:shadow-xl transition-all cursor-pointer border-2 overflow-hidden"
            onClick={() => onSelectRole("admin")}
        >
          <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center">
            <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="h-10 w-10 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-secondary mb-2">Soy Administrativo</h2>
            <p className="text-zinc-500 mb-6">
                Equipo interno de Financio (Analistas, Riesgos, Tesorería) que gestiona operaciones.
            </p>
            <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-zinc-50">
                Ingresar como Admin
            </Button>
          </CardContent>
        </Card>
      </div>

      <p className="mt-12 text-sm text-zinc-400">
        Demo Version 2.0 • Factoring System
      </p>
    </div>
  );
}