import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";

// Advanced Components
import { DateRangePicker } from "../advanced/DateRangePicker";
import { ChartShowcase } from "../advanced/ChartShowcase";
import { ColorPicker } from "../advanced/ColorPicker";
import { Rating } from "../advanced/RatingComponent";
import { KanbanBoard } from "../advanced/KanbanBoard";
import { Combobox } from "../advanced/Combobox";
import { DatePickerWithPresets } from "../advanced/DatePickerWithPresets";

export function AdvancedComponentsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Advanced Components</h2>
        <p className="text-sm text-muted-foreground">
          Componentes avanzados para aplicaciones enterprise - Nivel Hero UI Pro
        </p>
      </div>

      <Tabs defaultValue="charts" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="charts">Charts</TabsTrigger>
          <TabsTrigger value="pickers">Pickers</TabsTrigger>
          <TabsTrigger value="rating">Rating</TabsTrigger>
          <TabsTrigger value="kanban">Kanban</TabsTrigger>
          <TabsTrigger value="more">Más</TabsTrigger>
        </TabsList>

        {/* CHARTS */}
        <TabsContent value="charts" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Data Visualization - Charts</CardTitle>
                  <CardDescription>
                    Gráficos interactivos usando Recharts
                  </CardDescription>
                </div>
                <Badge variant="default">Recharts</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ChartShowcase />
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Tipos de Charts Disponibles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Line Chart</h4>
                  <p className="text-sm text-muted-foreground">
                    Perfecto para tendencias temporales y evolución de métricas
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Bar Chart</h4>
                  <p className="text-sm text-muted-foreground">
                    Ideal para comparaciones entre categorías
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Pie Chart</h4>
                  <p className="text-sm text-muted-foreground">
                    Muestra distribuciones y porcentajes
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Area Chart</h4>
                  <p className="text-sm text-muted-foreground">
                    Visualiza volumen y tendencias acumuladas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PICKERS */}
        <TabsContent value="pickers" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Date Range Picker</CardTitle>
                <CardDescription>
                  Selección de rangos de fechas para filtros
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <DateRangePicker />
                
                <Separator />
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Características:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Selección de rango (desde - hasta)</li>
                    <li>✓ Vista de dos meses simultáneos</li>
                    <li>✓ Formato de fecha localizado (español)</li>
                    <li>✓ Integración con Calendar de shadcn/ui</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Color Picker</CardTitle>
                <CardDescription>
                  Selector de colores con presets y personalización
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ColorPicker />
                
                <Separator />
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Características:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Colores predefinidos del sistema</li>
                    <li>✓ Selector de color nativo HTML5</li>
                    <li>✓ Input manual de código HEX</li>
                    <li>✓ Vista previa en tiempo real</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Más Pickers Disponibles</CardTitle>
              <CardDescription>
                Otros componentes de selección que puedes usar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg bg-background">
                  <h4 className="font-medium mb-2">Calendar</h4>
                  <p className="text-sm text-muted-foreground">
                    Ya disponible en shadcn/ui para selección de fecha única
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-background">
                  <h4 className="font-medium mb-2">Select</h4>
                  <p className="text-sm text-muted-foreground">
                    Selector dropdown con búsqueda y multi-selección
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-background">
                  <h4 className="font-medium mb-2">Combobox</h4>
                  <p className="text-sm text-muted-foreground">
                    Autocomplete con Command para búsqueda avanzada
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-background">
                  <h4 className="font-medium mb-2">Date Picker with Presets</h4>
                  <p className="text-sm text-muted-foreground">
                    Selector de fecha con opciones predefinidas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* RATING */}
        <TabsContent value="rating" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Rating Component</CardTitle>
              <CardDescription>
                Sistema de calificación con estrellas interactivas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-3">Tamaños Disponibles</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm w-24">Small:</span>
                      <Rating size="sm" value={4} />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm w-24">Medium:</span>
                      <Rating size="md" value={3} />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm w-24">Large:</span>
                      <Rating size="lg" value={5} />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Estados</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm w-24">Interactivo:</span>
                      <Rating value={0} />
                      <span className="text-xs text-muted-foreground">
                        (Hover y click para seleccionar)
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm w-24">Solo lectura:</span>
                      <Rating value={4} readonly />
                      <span className="text-xs text-muted-foreground">
                        (No editable)
                      </span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Casos de Uso</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          Calidad de Servicio
                        </span>
                        <Rating value={5} readonly size="sm" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Calificación del cliente sobre el proceso
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          Nivel de Riesgo
                        </span>
                        <Rating value={2} readonly size="sm" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Evaluación de riesgo crediticio
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* KANBAN */}
        <TabsContent value="kanban" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Kanban Board</CardTitle>
              <CardDescription>
                Visualización de workflow con columnas de estado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <KanbanBoard />
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Características del Kanban</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium">Funcionalidades Actuales:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Múltiples columnas de estado</li>
                    <li>✓ Tarjetas con información completa</li>
                    <li>✓ Indicadores de prioridad (Alta/Media/Baja)</li>
                    <li>✓ Asignación de usuarios con avatares</li>
                    <li>✓ Menú de acciones por tarjeta</li>
                    <li>✓ Contador de tarjetas por columna</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Próximas Mejoras:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>⏳ Drag & Drop entre columnas (react-dnd)</li>
                    <li>⏳ Filtros por prioridad y asignado</li>
                    <li>⏳ Límites WIP por columna</li>
                    <li>⏳ Vista de swimlanes</li>
                    <li>⏳ Persistencia de posición</li>
                    <li>⏳ Métricas de tiempo en cada estado</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* MORE */}
        <TabsContent value="more" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Combobox (Autocomplete)</CardTitle>
                <CardDescription>
                  Command + Popover = Búsqueda con autocomplete
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Combobox
                  options={[
                    { value: "empresa-abc", label: "Empresa ABC S.A." },
                    { value: "comercial-xyz", label: "Comercial XYZ Ltda." },
                    { value: "industrias-def", label: "Industrias DEF S.A." },
                    { value: "servicios-ghi", label: "Servicios GHI Ltda." },
                    { value: "tech-solutions", label: "Tech Solutions Ltd." },
                  ]}
                  placeholder="Seleccionar empresa..."
                  emptyText="No se encontró la empresa."
                />
                
                <Separator />
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Características:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Búsqueda en tiempo real</li>
                    <li>✓ Keyboard navigation (↑↓ Enter Esc)</li>
                    <li>✓ Componente oficial shadcn/ui</li>
                    <li>✓ Accesible y responsive</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Date Picker with Presets</CardTitle>
                <CardDescription>
                  Calendar + Popover con opciones rápidas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <DatePickerWithPresets />
                
                <Separator />
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Presets incluidos:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Hoy</li>
                    <li>✓ Mañana</li>
                    <li>✓ En una semana</li>
                    <li>✓ En un mes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator />

          <Card>
            <CardHeader>
              <CardTitle>Componentes Adicionales en Desarrollo</CardTitle>
              <CardDescription>
                Próximas implementaciones para alcanzar nivel Hero UI Pro
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">En Desarrollo Activo:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="p-3 border rounded-lg bg-yellow-500/5 border-yellow-500/20">
                      <Badge variant="outline" className="mb-2">En Progreso</Badge>
                      <p className="font-medium text-sm">Rich Text Editor</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Editor WYSIWYG para comentarios
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg bg-yellow-500/5 border-yellow-500/20">
                      <Badge variant="outline" className="mb-2">En Progreso</Badge>
                      <p className="font-medium text-sm">File Uploader Pro</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Con preview y drag & drop mejorado
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg bg-yellow-500/5 border-yellow-500/20">
                      <Badge variant="outline" className="mb-2">En Progreso</Badge>
                      <p className="font-medium text-sm">Data Grid Advanced</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Virtual scrolling y edición inline
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Planificados para Próxima Fase:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium text-sm">Timeline Vertical</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Historial de eventos con línea temporal
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium text-sm">Image Gallery</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Galería con lightbox y zoom
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium text-sm">Chat Interface</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Mensajería en tiempo real
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium text-sm">PDF Viewer</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Visualizador de documentos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}