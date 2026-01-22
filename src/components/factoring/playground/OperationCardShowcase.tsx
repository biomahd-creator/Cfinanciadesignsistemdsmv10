import React, { useState } from "react";
import { OperationDetailCard } from "@/components/business/OperationDetailCard";
import { SidebarNew, PageId } from "@/components/SidebarNew";
import { SidebarProvider } from "@/components/ui/sidebar";

export function OperationCardShowcase() {
  const [activePage, setActivePage] = useState<PageId>("business-components");

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background">
        <SidebarNew activePage={activePage} onPageChange={setActivePage} />
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <header className="border-b h-14 flex items-center px-6 bg-card/50 backdrop-blur-sm">
            <h1 className="font-bold text-lg">Playground: Operation Detail Card</h1>
          </header>
          
          <main className="flex-1 overflow-auto p-8 bg-muted/20">
            <div className="max-w-4xl mx-auto space-y-8">
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">Component Preview</h2>
                <p className="text-muted-foreground text-sm max-w-lg">
                  Este componente visualiza los detalles financieros de una operación de factoring, 
                  siguiendo los lineamientos de diseño (Satoshi, Sombras suaves, Paleta de colores) 
                  y utilizando Recharts para la visualización de datos.
                </p>
                
                <div className="flex flex-col gap-8 p-10 bg-background border rounded-xl items-center justify-center">
                  <OperationDetailCard />
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">Variations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                     <h3 className="text-sm font-medium">Small Operation</h3>
                     <OperationDetailCard 
                       totalFacturas={50000} 
                       montoCredito={45000} 
                       totalAnticipo={42000}
                       plazoDias={30}
                       tasaPlazo={30}
                     />
                  </div>

                  <div className="space-y-2">
                     <h3 className="text-sm font-medium">Large Operation (USD)</h3>
                     <OperationDetailCard 
                       currency="USD"
                       totalFacturas={120000} 
                       montoCredito={100000} 
                       totalAnticipo={95000}
                       plazoDias={180}
                     />
                  </div>
                </div>
              </section>

            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
