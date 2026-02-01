import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ActivityFeed } from "../components/patterns/ActivityFeed";
import { CommentThread } from "../components/patterns/CommentThread";
import { ComparisonTable } from "../components/patterns/ComparisonTable";
import { EmptyState } from "../components/ui/empty-state";
import { ErrorBoundary } from "../components/ui/error-boundary";
import { PricingTable } from "../components/patterns/PricingTable";
import { SearchResults } from "../components/patterns/SearchResults";
import { UserProfileCard } from "../components/patterns/UserProfileCard";
import { BottomSheet } from "../components/ui/bottom-sheet";
import { FloatingActionButton } from "../components/ui/floating-action-button";
import { SplitButton } from "../components/ui/split-button";
import { Button } from "../components/ui/button";
import { 
  Spinner, 
  PageLoader, 
  CardSkeleton, 
  TableSkeleton, 
  ButtonLoader, 
  DotLoader 
} from "../components/ui/loading-states";
import { FileSearch, Settings, MessageSquare, Plus, Download, Edit } from "lucide-react";

export function NewPatternsPage() {
  const [showPageLoader, setShowPageLoader] = useState(false);

  return (
    <div className="space-y-8 p-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Nuevos Patrones UI</h2>
          <Badge variant="outline">Patterns</Badge>
        </div>
        <p className="text-muted-foreground">
          Colección de componentes y patrones de interacción avanzados
        </p>
      </div>

      <Separator />

      <Tabs defaultValue="social" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
          <TabsTrigger value="social">Social & Feed</TabsTrigger>
          <TabsTrigger value="data">Data & Pricing</TabsTrigger>
          <TabsTrigger value="feedback">Feedback & States</TabsTrigger>
          <TabsTrigger value="actions">Actions</TabsTrigger>
        </TabsList>

        {/* SOCIAL & FEED TAB */}
        <TabsContent value="social" className="space-y-8 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Activity Feed */}
             <Card>
               <CardHeader>
                 <CardTitle>Activity Feed</CardTitle>
                 <CardDescription>Línea de tiempo de actividad</CardDescription>
               </CardHeader>
               <CardContent>
                 <ActivityFeed 
                   items={[
                     { id: "1", user: { name: "Ana García", initials: "AG" }, action: "creó la factura", target: "INV-001", timestamp: "Hace 5 min" },
                     { id: "2", user: { name: "Carlos Ruiz", initials: "CR" }, action: "comentó en", target: "Reporte Mensual", timestamp: "Hace 1 hora", description: "Excelente trabajo con los gráficos." },
                     { id: "3", user: { name: "Sistema", initials: "SYS" }, action: "actualizó el estado de", target: "Pago #452", timestamp: "Hace 2 horas" },
                   ]}
                 />
               </CardContent>
             </Card>

             {/* User Profile */}
             <div className="space-y-4">
                <UserProfileCard 
                  user={{
                    name: "María González",
                    role: "Gerente Financiera",
                    initials: "MG",
                    email: "maria.gonzalez@empresa.com",
                    company: "Tech Solutions SAS",
                    status: "active",
                    tags: ["Finanzas", "Aprobador", "Admin"],
                    stats: [
                      { label: "Operaciones", value: "145" },
                      { label: "Aprobadas", value: "98%" },
                      { label: "Equipo", value: "12" },
                    ]
                  }}
                />
             </div>
          </div>

          {/* Comments */}
          <Card>
            <CardHeader>
              <CardTitle>Hilo de Comentarios</CardTitle>
            </CardHeader>
            <CardContent>
              <CommentThread 
                comments={[
                  {
                    id: "1",
                    author: { name: "Juan Pérez", initials: "JP" },
                    content: "¿Podemos revisar los términos de pago para este cliente?",
                    timestamp: "Hace 2 horas",
                    likes: 5,
                    replies: [
                       {
                         id: "2",
                         author: { name: "Laura Torres", initials: "LT" },
                         content: "Claro, lo agendamos para la reunión de mañana.",
                         timestamp: "Hace 1 hora",
                         likes: 2
                       }
                    ]
                  }
                ]}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* DATA & PRICING TAB */}
        <TabsContent value="data" className="space-y-8 mt-6">
           <Card>
             <CardHeader><CardTitle>Pricing Table</CardTitle></CardHeader>
             <CardContent>
               <PricingTable 
                 plans={[
                   { 
                     id: "basic", 
                     name: "Básico", 
                     description: "Para pequeñas empresas", 
                     price: { monthly: "$50k", yearly: "$500k" },
                     features: ["5 Facturas/mes", "Soporte básico"],
                     ctaText: "Empezar"
                   },
                   { 
                     id: "pro", 
                     name: "Pro", 
                     description: "Para empresas en crecimiento", 
                     price: { monthly: "$150k", yearly: "$1.5M" },
                     features: ["Facturas ilimitadas", "Soporte 24/7", "API Access"],
                     isPopular: true,
                     ctaText: "Mejor Valor"
                   },
                   { 
                     id: "enterprise", 
                     name: "Enterprise", 
                     description: "Soluciones a medida", 
                     price: { monthly: "Custom", yearly: "Custom" },
                     features: ["Todo ilimitado", "Gerente de cuenta"],
                     ctaText: "Contactar"
                   }
                 ]}
               />
             </CardContent>
           </Card>

           <Card>
             <CardHeader><CardTitle>Comparison Table</CardTitle></CardHeader>
             <CardContent>
               <ComparisonTable 
                 plans={[
                   { id: "p1", name: "Start", price: "$0", description: "Free plan" },
                   { id: "p2", name: "Growth", price: "$49", description: "Growing teams", isPopular: true },
                   { id: "p3", name: "Scale", price: "$99", description: "Large orgs" },
                 ]}
                 features={[
                   {
                     category: "Core Features",
                     items: [
                       { name: "Users", values: { p1: "1", p2: "5", p3: "Unlimited" } },
                       { name: "Storage", values: { p1: "1GB", p2: "10GB", p3: "1TB" } },
                     ]
                   },
                   {
                     category: "Support",
                     items: [
                       { name: "Email Support", values: { p1: true, p2: true, p3: true } },
                       { name: "24/7 Phone", values: { p1: false, p2: true, p3: true } },
                     ]
                   }
                 ]}
               />
             </CardContent>
           </Card>

           <Card>
             <CardHeader><CardTitle>Resultados de Búsqueda</CardTitle></CardHeader>
             <CardContent>
               <SearchResults 
                 query="Factura"
                 onSelect={() => {}}
                 results={[
                   { id: "1", type: "invoice", title: "Factura #12345", subtitle: "Cliente ABC", status: "Pendiente" },
                   { id: "2", type: "client", title: "Empresa Factoring SAS", subtitle: "NIT 900.123.456" },
                   { id: "3", type: "operation", title: "Operación OP-998", subtitle: "Hace 2 días", status: "Aprobada" },
                 ]}
               />
             </CardContent>
           </Card>
        </TabsContent>

        {/* FEEDBACK & STATES TAB */}
        <TabsContent value="feedback" className="space-y-8 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle>Loading States</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 border p-4 rounded">
                  <Spinner />
                  <span>Spinner Simple</span>
                </div>
                <div className="border p-4 rounded">
                  <Button onClick={() => setShowPageLoader(true)}>Probar Page Loader (3s)</Button>
                  {showPageLoader && (() => {
                    setTimeout(() => setShowPageLoader(false), 3000);
                    return <PageLoader />;
                  })()}
                </div>
                <div className="border p-4 rounded">
                  <Button disabled><ButtonLoader /> Procesando</Button>
                </div>
                <div className="border p-4 rounded">
                  <DotLoader />
                </div>
              </CardContent>
            </Card>

            <Card>
               <CardHeader><CardTitle>Empty State</CardTitle></CardHeader>
               <CardContent>
                 <EmptyState 
                   title="No hay documentos"
                   description="Sube tu primer documento para comenzar el proceso de factoring."
                   action={{ label: "Subir Documento", onClick: () => {} }}
                   icon={FileSearch}
                 />
               </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Card>
               <CardHeader><CardTitle>Skeletons</CardTitle></CardHeader>
               <CardContent className="space-y-4">
                 <CardSkeleton />
                 <TableSkeleton rows={3} />
               </CardContent>
             </Card>

             <Card>
               <CardHeader><CardTitle>Error Boundary</CardTitle></CardHeader>
               <CardContent>
                 <ErrorBoundary>
                    <BuggyComponentWrapper />
                 </ErrorBoundary>
               </CardContent>
             </Card>
          </div>
        </TabsContent>

        {/* ACTIONS TAB */}
        <TabsContent value="actions" className="space-y-8 mt-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader><CardTitle>Bottom Sheet</CardTitle></CardHeader>
                <CardContent className="h-[200px] flex items-center justify-center">
                  <BottomSheet 
                    trigger={<Button>Abrir Sheet</Button>}
                    title="Opciones de Factura"
                    description="Selecciona una acción para la factura seleccionada"
                  >
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start"><Download className="mr-2 h-4 w-4"/> Descargar PDF</Button>
                      <Button variant="outline" className="w-full justify-start"><MessageSquare className="mr-2 h-4 w-4"/> Enviar Comentario</Button>
                    </div>
                  </BottomSheet>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Floating Action Button</CardTitle></CardHeader>
                <CardContent className="h-[200px] relative bg-muted/20 rounded-md overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    El botón flota en la esquina
                  </div>
                  <FloatingActionButton position="bottom-right" className="absolute" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Split Button</CardTitle></CardHeader>
                <CardContent className="h-[200px] flex items-center justify-center">
                  <SplitButton 
                    label="Guardar"
                    onMainAction={() => alert('Guardado')}
                    actions={[
                      { label: "Guardar como borrador", onClick: () => {} },
                      { label: "Guardar y enviar", onClick: () => {} },
                    ]}
                  />
                </CardContent>
              </Card>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Helper for ErrorBoundary demo
function BuggyComponentWrapper() {
  const [bomb, setBomb] = useState(false);
  if (bomb) throw new Error("¡Boom! Este error fue atrapado por el ErrorBoundary.");
  return (
    <div className="text-center">
      <p className="mb-4">Este componente funciona bien.</p>
      <Button variant="destructive" onClick={() => setBomb(true)}>
        Causar Error
      </Button>
    </div>
  );
}
