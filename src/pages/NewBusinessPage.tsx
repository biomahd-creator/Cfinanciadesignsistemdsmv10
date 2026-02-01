import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { CashFlowProjection } from "../factoring/CashFlowProjection";
import { CollectionTimeline } from "../factoring/CollectionTimeline";
import { DocumentVerificationStatus } from "../factoring/DocumentVerificationStatus";
import { FactoringRateDisplay } from "../factoring/FactoringRateDisplay";
import { InvoiceCard } from "../factoring/InvoiceCard";
import { LiquidityMeter } from "../factoring/LiquidityMeter";
import { PayorCard } from "../factoring/PayorCard";
import { RiskIndicator } from "../factoring/RiskIndicator";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";

export function NewBusinessPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Componentes de Negocio</h2>
          <Badge variant="outline">Business</Badge>
        </div>
        <p className="text-muted-foreground">
          Componentes específicos para el dominio de Factoring y Finanzas
        </p>
      </div>

      <Separator />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* SECTION 1: INDICATORS & METRICS */}
        <div className="space-y-6">
          <h3 className="text-xl font-medium">Indicadores y Métricas</h3>
          
          <Card>
            <CardHeader><CardTitle>Medidor de Liquidez</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <LiquidityMeter value={75} amount={150000000} />
                <LiquidityMeter value={30} amount={25000000} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Indicadores de Riesgo</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <RiskIndicator level="low" score={95} />
              <RiskIndicator level="medium" score={60} />
              <RiskIndicator level="high" score={40} />
              <RiskIndicator level="critical" score={15} />
              <Separator className="my-2" />
              <div className="flex gap-2">
                <RiskIndicator level="low" condensed />
                <RiskIndicator level="medium" condensed />
                <RiskIndicator level="high" condensed />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Desglose de Tasas</CardTitle></CardHeader>
            <CardContent>
              <FactoringRateDisplay 
                totalRate={2.5}
                annualRate={34.49}
                trend="down"
                components={[
                  { label: "Tasa Base", value: 1.8, description: "Interés corriente del banco" },
                  { label: "Spread de Riesgo", value: 0.5, description: "Basado en score del pagador" },
                  { label: "Comisión Plataforma", value: 0.2 },
                ]}
              />
            </CardContent>
          </Card>
        </div>
        
        {/* SECTION 2: ENTITIES & CARDS */}
        <div className="space-y-6">
          <h3 className="text-xl font-medium">Entidades y Tarjetas</h3>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Invoice Cards</h4>
            <InvoiceCard 
              invoice={{
                id: "1",
                number: "FV-9921",
                clientName: "Logística y Transportes del Norte SAS",
                amount: 45000000,
                dueDate: "15 Oct 2024",
                issueDate: "15 Ago 2024",
                status: "pending",
                probability: 85
              }}
            />
            <InvoiceCard 
              invoice={{
                id: "2",
                number: "FV-9922",
                clientName: "Distribuidora de Alimentos",
                amount: 12500000,
                dueDate: "01 Sep 2024",
                issueDate: "01 Ago 2024",
                status: "overdue"
              }}
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Payor Cards</h4>
            <PayorCard 
              payor={{
                id: "p1",
                name: "Almacenes Éxito S.A.",
                nit: "890.900.608-9",
                sector: "Retail",
                creditLimit: 5000000000,
                usedCredit: 1200000000,
                riskScore: 92,
                paymentBehavior: "excellent"
              }}
            />
          </div>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* SECTION 3: CHARTS & TIMELINES */}
         <div className="space-y-6">
            <h3 className="text-xl font-medium">Proyecciones</h3>
            <CashFlowProjection 
              data={[
                { month: "Ene", actual: 4000, projected: 4100 },
                { month: "Feb", actual: 3000, projected: 3200 },
                { month: "Mar", actual: 2000, projected: 2400 },
                { month: "Abr", actual: 2780, projected: 2900 },
                { month: "May", actual: 1890, projected: 2100 },
                { month: "Jun", actual: 2390, projected: 2500 },
              ]}
            />
         </div>

         <div className="space-y-6">
            <h3 className="text-xl font-medium">Seguimiento y Procesos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <Card>
                 <CardHeader><CardTitle>Cobranza</CardTitle></CardHeader>
                 <CardContent>
                   <CollectionTimeline 
                     events={[
                       { id: "1", type: "email", title: "Recordatorio enviado", date: "Hoy", status: "completed" },
                       { id: "2", type: "call", title: "Llamada a tesorería", date: "Ayer", description: "Compromiso de pago para el viernes", status: "completed", user: "Ana" },
                       { id: "3", type: "payment", title: "Pago parcial recibido", date: "Hace 3 días", status: "completed" },
                       { id: "4", type: "system", title: "Factura radicada", date: "Hace 10 días" },
                     ]}
                   />
                 </CardContent>
               </Card>

               <Card>
                 <CardHeader><CardTitle>Documentos</CardTitle></CardHeader>
                 <CardContent>
                   <DocumentVerificationStatus 
                     documents={[
                       { id: "1", name: "Cámara de Comercio", status: "verified", timestamp: "Verificado hoy" },
                       { id: "2", name: "RUT", status: "verified", timestamp: "Verificado ayer" },
                       { id: "3", name: "Estados Financieros", status: "pending", message: "En revisión por analista" },
                       { id: "4", name: "Composición Accionaria", status: "missing", required: true },
                       { id: "5", name: "Referencia Bancaria", status: "rejected", message: "Documento ilegible" },
                     ]}
                     onUpload={(id) => alert(`Upload clicked for ${id}`)}
                   />
                 </CardContent>
               </Card>
            </div>
         </div>
      </div>
    </div>
  );
}
