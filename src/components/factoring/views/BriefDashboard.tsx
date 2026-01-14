import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Wallet, ArrowRight } from "lucide-react";

interface BriefDashboardProps {
  onNavigate: (module: "factoring" | "radian") => void;
}

export function BriefDashboard({ onNavigate }: BriefDashboardProps) {
  return (
    <div className="min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-white to-muted/30 flex flex-col items-center justify-start p-8 gap-12">
      
      {/* Module Selection */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-stretch justify-center gap-8 mt-8">
        
        {/* Card 1: Factoring */}
        <Card className="flex-1 max-w-md hover:shadow-xl transition-shadow duration-300 border-border group cursor-pointer" onClick={() => onNavigate("factoring")}>
          <CardContent className="p-8 flex flex-col h-full items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Wallet className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Factoring</h2>
              <p className="text-muted-foreground">
                Revise las operaciones de factoring, valide facturas y gestione desembolsos.
              </p>
            </div>
            <div className="pt-4 mt-auto w-full">
              <Button 
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                Acceder al Módulo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: RADIAN */}
        <Card className="flex-1 max-w-md hover:shadow-xl transition-shadow duration-300 border-border group cursor-pointer" onClick={() => onNavigate("radian")}>
          <CardContent className="p-8 flex flex-col h-full items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Wallet className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">RADIAN</h2>
              <p className="text-muted-foreground">
                Gestión y registro de facturas electrónicas como título valor en el sistema RADIAN.
              </p>
            </div>
            <div className="pt-4 mt-auto w-full">
              <Button 
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                Acceder al Módulo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}