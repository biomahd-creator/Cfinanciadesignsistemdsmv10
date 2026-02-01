import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { GanttChart } from "../components/advanced/GanttChart";
import { InfiniteScroll } from "../components/advanced/InfiniteScroll";
import { MasonryGrid } from "../components/advanced/MasonryGrid";
import { OrgChart } from "../components/advanced/OrgChart";
import { SankeyDiagram } from "../components/advanced/SankeyDiagram";
import { TransferList } from "../components/advanced/TransferList";
import { VirtualizedList } from "../components/advanced/VirtualizedList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

export function NewAdvancedPage() {
  // Mock State for Infinite Scroll
  const [infiniteItems, setInfiniteItems] = useState(Array.from({ length: 20 }, (_, i) => i));
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = async () => {
    if (isLoading) return;
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setInfiniteItems(prev => [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i)]);
    setIsLoading(false);
  };

  return (
    <div className="space-y-8 p-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Componentes Avanzados</h2>
          <Badge variant="outline">Advanced</Badge>
        </div>
        <p className="text-muted-foreground">
          Visualizaciones complejas y gestión de listas de alto rendimiento
        </p>
      </div>

      <Separator />

      <Tabs defaultValue="visualizations" className="w-full">
        <TabsList>
          <TabsTrigger value="visualizations">Visualizaciones</TabsTrigger>
          <TabsTrigger value="lists">Listas y Grids</TabsTrigger>
          <TabsTrigger value="interaction">Interacción</TabsTrigger>
        </TabsList>

        <TabsContent value="visualizations" className="space-y-8 mt-6">
          <Card>
            <CardHeader><CardTitle>Sankey Diagram (Flujo de Fondos)</CardTitle></CardHeader>
            <CardContent>
              <SankeyDiagram 
                data={{
                  nodes: [
                    { name: "Cartera Total" },
                    { name: "Aprobados" },
                    { name: "Rechazados" },
                    { name: "Desembolsados" },
                    { name: "Pendientes Desembolso" },
                    { name: "Riesgo Alto" },
                  ],
                  links: [
                    { source: 0, target: 1, value: 800 },
                    { source: 0, target: 2, value: 200 },
                    { source: 1, target: 3, value: 600 },
                    { source: 1, target: 4, value: 200 },
                    { source: 2, target: 5, value: 200 },
                  ]
                }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Gantt Chart (Cronograma)</CardTitle></CardHeader>
            <CardContent>
              <GanttChart 
                tasks={[
                  { id: "1", name: "Análisis de Riesgo", startDate: new Date(2023, 10, 1), endDate: new Date(2023, 10, 5), progress: 100, color: "bg-green-500" },
                  { id: "2", name: "Verificación Documental", startDate: new Date(2023, 10, 3), endDate: new Date(2023, 10, 8), progress: 80, color: "bg-blue-500" },
                  { id: "3", name: "Aprobación Comité", startDate: new Date(2023, 10, 9), endDate: new Date(2023, 10, 10), progress: 0, color: "bg-yellow-500" },
                  { id: "4", name: "Formalización Legal", startDate: new Date(2023, 10, 11), endDate: new Date(2023, 10, 15), progress: 0 },
                ]}
              />
            </CardContent>
          </Card>

          <Card>
             <CardHeader><CardTitle>Org Chart (Estructura)</CardTitle></CardHeader>
             <CardContent>
               <OrgChart 
                 data={{
                   id: "root",
                   name: "CEO",
                   role: "Director General",
                   children: [
                     {
                       id: "cfo",
                       name: "CFO",
                       role: "Director Financiero",
                       children: [
                         { id: "acc", name: "Contador", role: "Jefe Contabilidad" },
                         { id: "fin", name: "Analista", role: "Analista Financiero" }
                       ]
                     },
                     {
                       id: "cto",
                       name: "CTO",
                       role: "Director Tecnología",
                       children: [
                         { id: "dev1", name: "Tech Lead", role: "Líder Técnico" },
                         { id: "dev2", name: "DevOps", role: "Ingeniero DevOps" }
                       ]
                     }
                   ]
                 }}
               />
             </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lists" className="space-y-8 mt-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader><CardTitle>Virtualized List (1000 items)</CardTitle></CardHeader>
                <CardContent>
                  <VirtualizedList 
                    height={300}
                    itemHeight={50}
                    items={Array.from({ length: 1000 }, (_, i) => ({ id: i, label: `Item ${i}` }))}
                    renderItem={(item, index, style) => (
                      <div style={style} className="flex items-center px-4 border-b hover:bg-muted/50">
                        Row {item.label}
                      </div>
                    )}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Infinite Scroll</CardTitle></CardHeader>
                <CardContent>
                   <div className="h-[300px] overflow-auto border rounded-md p-4">
                     <InfiniteScroll
                       loadMore={loadMore}
                       hasMore={infiniteItems.length < 100}
                       isLoading={isLoading}
                     >
                       {infiniteItems.map((item) => (
                         <div key={item} className="p-4 border-b mb-2 bg-muted/20 rounded">
                           Item #{item}
                         </div>
                       ))}
                     </InfiniteScroll>
                   </div>
                </CardContent>
              </Card>
           </div>

           <Card>
             <CardHeader><CardTitle>Masonry Grid</CardTitle></CardHeader>
             <CardContent>
               <MasonryGrid gutter="16px">
                 {Array.from({ length: 8 }).map((_, i) => (
                   <div 
                     key={i} 
                     className="bg-muted/30 rounded-lg border p-4 flex items-center justify-center"
                     style={{ height: `${Math.floor(Math.random() * 200) + 100}px` }}
                   >
                     Card {i + 1}
                   </div>
                 ))}
               </MasonryGrid>
             </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="interaction" className="space-y-8 mt-6">
           <Card>
             <CardHeader><CardTitle>Transfer List</CardTitle></CardHeader>
             <CardContent>
               <TransferList 
                 items={[
                   { id: "1", label: "Factura INV-001" },
                   { id: "2", label: "Factura INV-002" },
                   { id: "3", label: "Factura INV-003" },
                   { id: "4", label: "Factura INV-004", disabled: true },
                   { id: "5", label: "Factura INV-005" },
                 ]}
               />
             </CardContent>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
