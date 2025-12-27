import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircle, Sparkles, CheckCircle2, Info } from "lucide-react";
import { FactoringSelectionPage } from "../atomic/pages/FactoringSelectionPage";

export function FactoringSelectionShowcasePage() {
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-4xl font-semibold">Factoring Selection Page</h1>
          <Badge variant="default">💼 Atomic Pages</Badge>
          <Badge variant="secondary">NEW</Badge>
        </div>
        <p className="text-muted-foreground">
          Página completa de gestión y selección de facturas para financiamiento con lógica
          de negocio avanzada y UX optimizada para maximizar liquidez
        </p>
      </div>

      <Separator />

      {/* Description */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Esta es una <strong>página completa de producción</strong> que implementa un flujo
          real de selección de facturas para factoring, incluyendo validación de cupos,
          cálculos automáticos, selección inteligente y confirmación de operación.
        </AlertDescription>
      </Alert>

      {/* Features Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Características Implementadas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Header & KPIs
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                <li>• 5 KPIs dinámicos (Totales, Elegibles, Pendientes, No Elegibles, Descartadas)</li>
                <li>• Card "Elegibles" destacado con border primary</li>
                <li>• Botón prominente "Cargar Facturas"</li>
                <li>• Cálculos en tiempo real al cambiar selección</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Listado de Pagadores
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                <li>• Accordion expandible por pagador</li>
                <li>• Nombre, RUT, Cupo Disponible, Tasa aplicable</li>
                <li>• Monto total de facturas elegibles</li>
                <li>• Badge con contador de facturas seleccionadas</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Smart Selection & Bulk Actions
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                <li>• Botón "Selección Inteligente" (respeta cupo)</li>
                <li>• Botón "Seleccionar Todas Elegibles"</li>
                <li>• Botón "Deseleccionar Todas" (local y global)</li>
                <li>• Botón "Descartar" individual con icono papelera</li>
                <li>• Priorización de facturas más grandes primero</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Límite de Cupo
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                <li>• Progress bar visual del cupo utilizado</li>
                <li>• Alert destructive al alcanzar límite</li>
                <li>• Bloqueo de selección si excede cupo</li>
                <li>• Indicador visual en facturas no seleccionables</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Master-Detail + Búsqueda & Ordenamiento
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                <li>• Accordion con scroll interno (400px)</li>
                <li>• Búsqueda en tiempo real por número/ID/monto</li>
                <li>• Ordenamiento por monto o fecha de vencimiento</li>
                <li>• Contador "X de Y facturas" filtradas</li>
                <li>• Soporta cientos de facturas sin lag</li>
                <li>• Checkbox individual por factura</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Sticky Footer Summary
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                <li>• Barra inferior persistente con totales</li>
                <li>• Monto Total Nominal seleccionado</li>
                <li>• Adelanto Neto Estimado (con tasas aplicadas)</li>
                <li>• Mensaje nudge con liquidez restante</li>
                <li>• Botón CTA "Confirmar Operación"</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Confirmation Modal
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                <li>• Resumen completo de la operación</li>
                <li>• Desglose por pagador con tasas</li>
                <li>• Términos y condiciones claros</li>
                <li>• Scroll interno para múltiples pagadores</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Upload Dialog
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                <li>• Dialog para carga de archivos</li>
                <li>• Zona drag & drop visual</li>
                <li>• Info sobre formatos aceptados (XML, PDF, Excel)</li>
                <li>• Botón de procesamiento</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Optimizations for Large Datasets */}
      <Card className="border-2 border-primary/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle>🚀 Optimizaciones para Cientos de Facturas</CardTitle>
            <Badge variant="default">HIGH VOLUME</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg space-y-2 bg-primary/5">
              <h4 className="font-medium">🔍 Búsqueda en Tiempo Real</h4>
              <p className="text-sm text-muted-foreground">
                Input con icono de búsqueda que filtra por número de factura, ID o monto.
                Actualización instantánea sin lag incluso con 500+ facturas.
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2 bg-primary/5">
              <h4 className="font-medium">↕️ Ordenamiento Multi-Criterio</h4>
              <p className="text-sm text-muted-foreground">
                Botones para ordenar por monto o fecha de vencimiento (ascendente/descendente).
                Iconos dinámicos que indican el estado de ordenamiento actual.
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2 bg-primary/5">
              <h4 className="font-medium">✅ Selección Masiva Inteligente</h4>
              <p className="text-sm text-muted-foreground">
                3 opciones: "Selección Inteligente" (hasta cupo), "Seleccionar Todas Elegibles"
                (sin límite), y "Deseleccionar Todas". Actualizaciones en lote optimizadas.
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2 bg-primary/5">
              <h4 className="font-medium">📊 Contador Visual Dinámico</h4>
              <p className="text-sm text-muted-foreground">
                Header sticky que muestra "X facturas mostradas de Y totales • Z seleccionadas".
                Actualización reactiva al filtrar o seleccionar.
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2 bg-primary/5">
              <h4 className="font-medium">📜 ScrollArea Optimizado</h4>
              <p className="text-sm text-muted-foreground">
                Altura fija de 400px con scroll interno suave. Maneja 1000+ facturas sin
                afectar el rendimiento del resto de la página.
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2 bg-primary/5">
              <h4 className="font-medium">🗑️ Descarte Individual Rápido</h4>
              <p className="text-sm text-muted-foreground">
                Botón de papelera en cada factura elegible para descartarla con un clic.
                Actualiza KPIs y remueve de selección automáticamente.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Highlights */}
      <Card>
        <CardHeader>
          <CardTitle>Detalles Técnicos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">🧮 Cálculos Dinámicos</h4>
              <p className="text-sm text-muted-foreground">
                Todos los totales se recalculan automáticamente usando <code>useMemo</code> al
                cambiar la selección, sin re-renders innecesarios
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">🎯 Smart Selection</h4>
              <p className="text-sm text-muted-foreground">
                Algoritmo que prioriza facturas más grandes y respeta límites de cupo por
                pagador automáticamente
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">✅ Validación en Tiempo Real</h4>
              <p className="text-sm text-muted-foreground">
                Validación de cupos al intentar seleccionar facturas, con feedback visual
                inmediato (alert, iconos, borders)
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">📊 Progress Indicators</h4>
              <p className="text-sm text-muted-foreground">
                Progress bar por pagador mostrando % de cupo utilizado, con colores semánticos
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">💰 Multi-Rate Calculation</h4>
              <p className="text-sm text-muted-foreground">
                Cálculo de adelanto neto aplicando tasas diferentes por pagador de forma
                transparente
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">🔔 Persuasive Nudges</h4>
              <p className="text-sm text-muted-foreground">
                Mensaje motivacional mostrando cuánto falta para alcanzar la liquidez máxima
                disponible
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Logic */}
      <Card>
        <CardHeader>
          <CardTitle>Lógica de Negocio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert>
              <Sparkles className="h-4 w-4" />
              <AlertTitle>Selección Inteligente</AlertTitle>
              <AlertDescription className="space-y-2 mt-2">
                <p className="text-sm">
                  Al hacer clic en "Selección Inteligente", el sistema:
                </p>
                <ol className="text-xs space-y-1 list-decimal list-inside ml-2">
                  <li>Filtra solo facturas elegibles del pagador</li>
                  <li>Las ordena de mayor a menor monto (priorización)</li>
                  <li>Va sumando hasta alcanzar el cupo disponible</li>
                  <li>Pre-selecciona automáticamente sin exceder el límite</li>
                  <li>Actualiza todos los totales globales en tiempo real</li>
                </ol>
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Validación de Cupos</AlertTitle>
              <AlertDescription className="space-y-2 mt-2">
                <p className="text-sm">
                  Antes de permitir seleccionar una factura, el sistema valida:
                </p>
                <ol className="text-xs space-y-1 list-decimal list-inside ml-2">
                  <li>
                    <strong>Estado:</strong> Solo facturas "elegibles" pueden seleccionarse
                  </li>
                  <li>
                    <strong>Cupo:</strong> Total seleccionado + nueva factura ≤ Cupo disponible
                  </li>
                  <li>
                    <strong>Feedback:</strong> Si excede, muestra icono de alerta rojo y no
                    permite check
                  </li>
                  <li>
                    <strong>Progress:</strong> Actualiza barra de progreso del pagador
                  </li>
                </ol>
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Cálculo de Adelanto Neto</AlertTitle>
              <AlertDescription className="space-y-2 mt-2">
                <p className="text-sm">Fórmula aplicada por pagador:</p>
                <div className="bg-muted p-3 rounded-md mt-2 text-xs font-mono">
                  <div>Total Pagador = Σ(facturas seleccionadas)</div>
                  <div>Descuento = Total × (Tasa% / 100)</div>
                  <div>Neto Pagador = Total - Descuento</div>
                  <div className="mt-2 pt-2 border-t">
                    Adelanto Neto Global = Σ(Neto de todos los pagadores)
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* UX Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Patrones UX Implementados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">🎨 Visual Hierarchy</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• KPI "Elegibles" destacado con border</li>
                <li>• Totales en sticky footer más grandes</li>
                <li>• Color primary en adelanto neto</li>
                <li>• Badges para estados de facturas</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">🔔 Progressive Disclosure</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Accordion colapsa detalles de pagadores</li>
                <li>• Scroll interno en listas largas</li>
                <li>• Modal de confirmación paso a paso</li>
                <li>• Alert de cupo solo cuando es relevante</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">⚡ Immediate Feedback</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Checkboxes responden instantáneamente</li>
                <li>• Progress bar actualiza en real-time</li>
                <li>• Totales recalculan sin delay</li>
                <li>• Borders y colores cambian al seleccionar</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">🎯 Persuasive Design</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Mensaje nudge con monto restante</li>
                <li>• Selección inteligente con icono sparkles</li>
                <li>• CTA prominente en sticky footer</li>
                <li>• Color primary en valores positivos</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">🛡️ Error Prevention</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Validación antes de permitir check</li>
                <li>• Facturas no elegibles disabled</li>
                <li>• Alert al alcanzar límite de cupo</li>
                <li>• Confirmación antes de procesar</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">📱 Responsive Design</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Grid KPIs adapta a 2 columnas en mobile</li>
                <li>• Sticky footer se reorganiza verticalmente</li>
                <li>• Accordion ocupa full width</li>
                <li>• Scroll areas funcionan en touch</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Demo Section */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle>🚀 Demo Interactivo</CardTitle>
            <Badge variant="default">LIVE</Badge>
          </div>
          <CardDescription>
            Página completa funcional con datos de ejemplo - Prueba todas las funcionalidades
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Sparkles className="h-4 w-4" />
            <AlertTitle>Instrucciones de Uso (con Cientos de Facturas)</AlertTitle>
            <AlertDescription className="space-y-2 mt-2">
              <ol className="text-sm space-y-1 list-decimal list-inside">
                <li>Expanda un pagador haciendo clic en su acordeón</li>
                <li><strong>Búsqueda:</strong> Usa el campo de búsqueda para filtrar por número, ID o monto</li>
                <li><strong>Ordenamiento:</strong> Haz clic en "Monto" o "Vencimiento" para ordenar</li>
                <li><strong>Selección Inteligente:</strong> Pre-selecciona facturas óptimas respetando cupo</li>
                <li><strong>Seleccionar Todas:</strong> Marca todas las facturas elegibles sin límite</li>
                <li><strong>Deseleccionar:</strong> Limpia la selección (local por pagador o global en footer)</li>
                <li><strong>Descartar:</strong> Clic en el icono papelera para descartar facturas individualmente</li>
                <li>Observa el contador dinámico "X de Y facturas • Z seleccionadas"</li>
                <li>Marca/desmarca facturas individuales con los checkboxes</li>
                <li>Revisa el sticky footer con el resumen global y "Deseleccionar Todas"</li>
                <li>Haz clic en "Confirmar Operación" para ver el modal de confirmación</li>
              </ol>
            </AlertDescription>
          </Alert>

          {/* Full Page Demo */}
          <div className="rounded-lg border-2 border-primary/20 overflow-hidden">
            <FactoringSelectionPage />
          </div>
        </CardContent>
      </Card>

      {/* Integration Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Guía de Integración</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>{`import { FactoringSelectionPage } from "./components/atomic/pages/FactoringSelectionPage";

// Usar como página completa
function App() {
  return (
    <div>
      <FactoringSelectionPage />
    </div>
  );
}

// Datos mockados incluidos, pero puedes reemplazarlos con:
// - API calls al backend
// - Redux/Zustand store
// - React Query para cache
// - Server-side props (Next.js)`}</code>
              </pre>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription className="text-xs">
                💡 <strong>Tip:</strong> La página usa <code>useState</code> local para el demo,
                pero en producción deberías conectarla a tu state management (Redux, Zustand) o
                fetching library (React Query, SWR) para sincronizar con el backend.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}