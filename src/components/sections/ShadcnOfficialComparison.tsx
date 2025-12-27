import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function ShadcnOfficialComparison() {
  // Lista OFICIAL completa de shadcn/ui (actualizada 2024)
  const officialComponents = {
    implemented: [
      { name: "Accordion", category: "Layout", status: "✅" },
      { name: "Alert", category: "Feedback", status: "✅" },
      { name: "Alert Dialog", category: "Feedback", status: "✅" },
      { name: "Avatar", category: "Data Display", status: "✅" },
      { name: "Badge", category: "Data Display", status: "✅" },
      { name: "Breadcrumb", category: "Navigation", status: "✅" },
      { name: "Button", category: "Actions", status: "✅" },
      { name: "Calendar", category: "Forms", status: "✅" },
      { name: "Card", category: "Data Display", status: "✅" },
      { name: "Carousel", category: "Layout", status: "✅" },
      { name: "Chart (Recharts)", category: "Data Display", status: "✅", note: "Main types" },
      { name: "Checkbox", category: "Forms", status: "✅" },
      { name: "Collapsible", category: "Layout", status: "✅" },
      { name: "Combobox", category: "Forms", status: "✅", note: "Multi-Select" },
      { name: "Command", category: "Navigation", status: "✅" },
      { name: "Context Menu", category: "Navigation", status: "✅" },
      { name: "Data Table", category: "Data Display", status: "✅", note: "Sort/Filter/Pag" },
      { name: "Date Picker", category: "Forms", status: "✅", note: "Range & Single" },
      { name: "Dialog", category: "Feedback", status: "✅" },
      { name: "Drawer", category: "Feedback", status: "✅" },
      { name: "Dropdown Menu", category: "Navigation", status: "✅" },
      { name: "Form", category: "Forms", status: "✅" },
      { name: "Hover Card", category: "Data Display", status: "✅" },
      { name: "Input", category: "Forms", status: "✅" },
      { name: "Input OTP", category: "Forms", status: "✅" },
      { name: "Label", category: "Forms", status: "✅" },
      { name: "Menubar", category: "Navigation", status: "✅" },
      { name: "Navigation Menu", category: "Navigation", status: "✅" },
      { name: "Pagination", category: "Navigation", status: "✅" },
      { name: "Popover", category: "Feedback", status: "✅" },
      { name: "Progress", category: "Feedback", status: "✅" },
      { name: "Radio Group", category: "Forms", status: "✅" },
      { name: "Resizable", category: "Layout", status: "✅" },
      { name: "ScrollArea", category: "Layout", status: "✅" },
      { name: "Select", category: "Forms", status: "✅" },
      { name: "Separator", category: "Layout", status: "✅" },
      { name: "Sheet", category: "Feedback", status: "✅" },
      { name: "Sidebar", category: "Layout", status: "✅" },
      { name: "Skeleton", category: "Feedback", status: "✅" },
      { name: "Slider", category: "Forms", status: "✅" },
      { name: "Sonner (Toast)", category: "Feedback", status: "✅" },
      { name: "Switch", category: "Forms", status: "✅" },
      { name: "Table", category: "Data Display", status: "✅" },
      { name: "Tabs", category: "Navigation", status: "✅" },
      { name: "Textarea", category: "Forms", status: "✅" },
      { name: "Toggle", category: "Actions", status: "✅" },
      { name: "Toggle Group", category: "Actions", status: "✅" },
      { name: "Tooltip", category: "Feedback", status: "✅" },
    ],
    missing: [],
    charts: [
      { name: "Area Chart", status: "✅" },
      { name: "Bar Chart", status: "✅" },
      { name: "Line Chart", status: "✅" },
      { name: "Pie Chart", status: "✅" },
      { name: "Radar Chart", status: "❌" },
      { name: "Radial Chart", status: "❌" },
      { name: "Tooltip (Charts)", status: "✅" },
    ],
  };

  const implementedCount = officialComponents.implemented.length;
  const missingCount = officialComponents.missing.filter(c => c.status === "❌").length;
  const partialCount = officialComponents.missing.filter(c => c.status === "⚠️").length;
  const totalOfficial = implementedCount + missingCount + partialCount;
  const completionRate = Math.round((implementedCount / totalOfficial) * 100);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold mb-2">
          Verificación Oficial shadcn/ui
        </h2>
        <p className="text-sm text-muted-foreground">
          Comparación exacta con la lista oficial de componentes en ui.shadcn.com
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Total Oficial</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-semibold">{totalOfficial}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Componentes en shadcn/ui
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/20 bg-green-500/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Implementados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-semibold text-green-500">
              {implementedCount}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {completionRate}% completado
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-yellow-500/20 bg-yellow-500/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              Parciales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-semibold text-yellow-500">
              {partialCount}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Implementación básica
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-500/20 bg-red-500/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-500" />
              Faltantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-semibold text-red-500">
              {missingCount}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Por implementar
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">Todos ({totalOfficial})</TabsTrigger>
          <TabsTrigger value="implemented">Implementados ({implementedCount})</TabsTrigger>
          <TabsTrigger value="missing">Faltantes ({missingCount + partialCount})</TabsTrigger>
          <TabsTrigger value="charts">Charts</TabsTrigger>
        </TabsList>

        {/* ALL */}
        <TabsContent value="all" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lista Completa Oficial</CardTitle>
              <CardDescription>
                Todos los componentes disponibles en ui.shadcn.com
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[...officialComponents.implemented, ...officialComponents.missing]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((component) => (
                    <div
                      key={component.name}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm">{component.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {component.category}
                        </p>
                        {component.note && (
                          <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                            {component.note}
                          </p>
                        )}
                      </div>
                      <span className="text-xl">{component.status}</span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* IMPLEMENTED */}
        <TabsContent value="implemented" className="space-y-6">
          <Card className="border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Componentes Implementados
              </CardTitle>
              <CardDescription>
                {implementedCount} de {totalOfficial} componentes oficiales ({completionRate}%)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {["Actions", "Forms", "Navigation", "Data Display", "Feedback", "Layout"].map(
                  (category) => {
                    const components = officialComponents.implemented.filter(
                      (c) => c.category === category
                    );
                    if (components.length === 0) return null;

                    return (
                      <div key={category}>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          {category}
                          <Badge variant="secondary">{components.length}</Badge>
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                          {components.map((component) => (
                            <div
                              key={component.name}
                              className="flex items-center gap-2 p-2 border rounded bg-green-500/5"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{component.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* MISSING */}
        <TabsContent value="missing" className="space-y-6">
          <Card className="border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-500" />
                Componentes Faltantes o Parciales
              </CardTitle>
              <CardDescription>
                Componentes que necesitan implementación o mejora
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {officialComponents.missing.map((component) => (
                <div
                  key={component.name}
                  className="p-4 border rounded-lg bg-muted/50"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{component.name}</h4>
                        <span className="text-xl">{component.status}</span>
                        {component.priority && (
                          <Badge variant="destructive" className="text-xs">
                            {component.priority}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {component.category}
                      </p>
                      {component.note && (
                        <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-2">
                          ℹ️ {component.note}
                        </p>
                      )}
                    </div>
                  </div>

                  {component.name === "Combobox" && (
                    <div className="mt-3 p-3 bg-background border rounded text-sm">
                      <p className="font-medium mb-2">Cómo implementar:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>✓ Combinar Command + Popover</li>
                        <li>✓ Agregar búsqueda y filtrado</li>
                        <li>✓ Implementar keyboard navigation</li>
                        <li>✓ Soportar single y multi-select</li>
                      </ul>
                    </div>
                  )}

                  {component.name === "Data Table" && (
                    <div className="mt-3 p-3 bg-background border rounded text-sm">
                      <p className="font-medium mb-2">Mejoras necesarias:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>✓ Sorting avanzado</li>
                        <li>✓ Filtros por columna</li>
                        <li>✓ Column visibility toggle</li>
                        <li>✓ Row selection</li>
                        <li>✓ Pagination integrado</li>
                      </ul>
                    </div>
                  )}

                  {component.name === "Date Picker" && (
                    <div className="mt-3 p-3 bg-background border rounded text-sm">
                      <p className="font-medium mb-2">Estado actual:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>✅ Tenemos Calendar (single date)</li>
                        <li>✅ Tenemos DateRangePicker (custom)</li>
                        <li>⏳ Falta: Popover + Calendar combinado oficial</li>
                      </ul>
                    </div>
                  )}

                  {component.name === "Chart (Recharts)" && (
                    <div className="mt-3 p-3 bg-background border rounded text-sm">
                      <p className="font-medium mb-2">Charts implementados:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>✅ Line Chart</li>
                        <li>✅ Bar Chart</li>
                        <li>✅ Pie Chart</li>
                        <li>✅ Area Chart</li>
                        <li>❌ Radar Chart</li>
                        <li>❌ Radial Chart</li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Plan de Acción</CardTitle>
              <CardDescription>Prioridades para alcanzar 100%</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Badge variant="destructive">Crítico</Badge>
                  Combobox
                </h4>
                <p className="text-sm text-muted-foreground">
                  Componente esencial para búsqueda y selección con autocomplete.
                  Usado en filtros avanzados y formularios complejos.
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Badge>Importante</Badge>
                  Data Table Avanzado
                </h4>
                <p className="text-sm text-muted-foreground">
                  Mejorar la implementación actual con sorting, filtros,
                  column visibility y row selection oficial de shadcn.
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Badge variant="secondary">Opcional</Badge>
                  Radar/Radial Charts
                </h4>
                <p className="text-sm text-muted-foreground">
                  Completar la suite de charts con los tipos faltantes.
                  Útil para comparaciones multidimensionales.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* CHARTS */}
        <TabsContent value="charts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Charts de shadcn/ui (Recharts)</CardTitle>
              <CardDescription>
                Componentes de visualización de datos con Recharts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {officialComponents.charts.map((chart) => (
                  <div
                    key={chart.name}
                    className={`p-4 border rounded-lg ${
                      chart.status === "✅"
                        ? "bg-green-500/5 border-green-500/20"
                        : "bg-red-500/5 border-red-500/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{chart.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {chart.status === "✅" ? "Implementado" : "Pendiente"}
                        </p>
                      </div>
                      <span className="text-2xl">{chart.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Próximos Charts a Implementar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium">Radar Chart</h4>
                <p className="text-sm text-muted-foreground">
                  Perfecto para comparar múltiples variables en un formato circular.
                  Útil para análisis de riesgo multidimensional en factoring.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">recharts</Badge>
                  <Badge variant="secondary">Data Analysis</Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-medium">Radial Chart</h4>
                <p className="text-sm text-muted-foreground">
                  Chart circular que muestra progreso o comparaciones radiales.
                  Ideal para KPIs y métricas de rendimiento.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">recharts</Badge>
                  <Badge variant="secondary">KPI Display</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
