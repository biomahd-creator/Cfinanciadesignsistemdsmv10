import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { PivotTable, PivotDataRow } from "../advanced/PivotTable";
import { Separator } from "../ui/separator";
import { AlertCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

// Sample data: Facturas de factoring
const facturasData: PivotDataRow[] = [
  { cliente: "Corporación Global", region: "Centro", estado: "Pagada", mes: "Enero", monto: 450000, cantidad: 1 },
  { cliente: "Corporación Global", region: "Centro", estado: "Pagada", mes: "Febrero", monto: 380000, cantidad: 1 },
  { cliente: "Corporación Global", region: "Norte", estado: "Pendiente", mes: "Enero", monto: 220000, cantidad: 1 },
  { cliente: "Corporación Global", region: "Norte", estado: "Aprobada", mes: "Marzo", monto: 510000, cantidad: 1 },
  
  { cliente: "Innovatech Solutions", region: "Sur", estado: "Pagada", mes: "Enero", monto: 320000, cantidad: 1 },
  { cliente: "Innovatech Solutions", region: "Sur", estado: "Aprobada", mes: "Febrero", monto: 290000, cantidad: 1 },
  { cliente: "Innovatech Solutions", region: "Centro", estado: "Pagada", mes: "Enero", monto: 175000, cantidad: 1 },
  { cliente: "Innovatech Solutions", region: "Centro", estado: "Rechazada", mes: "Marzo", monto: 0, cantidad: 1 },
  
  { cliente: "Distribuidora Nacional", region: "Norte", estado: "Pagada", mes: "Enero", monto: 420000, cantidad: 1 },
  { cliente: "Distribuidora Nacional", region: "Norte", estado: "Pagada", mes: "Febrero", monto: 440000, cantidad: 1 },
  { cliente: "Distribuidora Nacional", region: "Sur", estado: "Aprobada", mes: "Enero", monto: 380000, cantidad: 1 },
  { cliente: "Distribuidora Nacional", region: "Sur", estado: "Pendiente", mes: "Marzo", monto: 350000, cantidad: 1 },
  
  { cliente: "TechCorp Industries", region: "Centro", estado: "Pagada", mes: "Febrero", monto: 560000, cantidad: 1 },
  { cliente: "TechCorp Industries", region: "Centro", estado: "Aprobada", mes: "Marzo", monto: 490000, cantidad: 1 },
  { cliente: "TechCorp Industries", region: "Norte", estado: "Pendiente", mes: "Enero", monto: 310000, cantidad: 1 },
  { cliente: "TechCorp Industries", region: "Sur", estado: "Pagada", mes: "Febrero", monto: 275000, cantidad: 1 },
  
  { cliente: "Logística Express", region: "Sur", estado: "Pagada", mes: "Enero", monto: 190000, cantidad: 1 },
  { cliente: "Logística Express", region: "Sur", estado: "Pagada", mes: "Febrero", monto: 210000, cantidad: 1 },
  { cliente: "Logística Express", region: "Centro", estado: "Aprobada", mes: "Marzo", monto: 185000, cantidad: 1 },
  { cliente: "Logística Express", region: "Norte", estado: "Rechazada", mes: "Enero", monto: 0, cantidad: 1 },
  
  { cliente: "MegaCorp Internacional", region: "Norte", estado: "Pagada", mes: "Enero", monto: 680000, cantidad: 1 },
  { cliente: "MegaCorp Internacional", region: "Norte", estado: "Pagada", mes: "Febrero", monto: 720000, cantidad: 1 },
  { cliente: "MegaCorp Internacional", region: "Centro", estado: "Aprobada", mes: "Marzo", monto: 650000, cantidad: 1 },
  { cliente: "MegaCorp Internacional", region: "Sur", estado: "Pendiente", mes: "Febrero", monto: 590000, cantidad: 1 },
  
  { cliente: "Comercial del Pacífico", region: "Sur", estado: "Pagada", mes: "Enero", monto: 340000, cantidad: 1 },
  { cliente: "Comercial del Pacífico", region: "Sur", estado: "Aprobada", mes: "Marzo", monto: 370000, cantidad: 1 },
  { cliente: "Comercial del Pacífico", region: "Centro", estado: "Pendiente", mes: "Febrero", monto: 280000, cantidad: 1 },
  { cliente: "Comercial del Pacífico", region: "Norte", estado: "Pagada", mes: "Marzo", monto: 320000, cantidad: 1 },
  
  { cliente: "Industrias del Sur", region: "Sur", estado: "Pagada", mes: "Febrero", monto: 420000, cantidad: 1 },
  { cliente: "Industrias del Sur", region: "Sur", estado: "Aprobada", mes: "Marzo", monto: 390000, cantidad: 1 },
  { cliente: "Industrias del Sur", region: "Centro", estado: "Pagada", mes: "Enero", monto: 310000, cantidad: 1 },
  { cliente: "Industrias del Sur", region: "Norte", estado: "Pendiente", mes: "Febrero", monto: 280000, cantidad: 1 },
];

// Ventas por producto y región
const ventasData: PivotDataRow[] = [
  { producto: "Software CRM", categoria: "Tecnología", region: "Norte", trimestre: "Q1", ventas: 145000, unidades: 12 },
  { producto: "Software CRM", categoria: "Tecnología", region: "Norte", trimestre: "Q2", ventas: 168000, unidades: 14 },
  { producto: "Software CRM", categoria: "Tecnología", region: "Sur", trimestre: "Q1", ventas: 132000, unidades: 11 },
  { producto: "Software CRM", categoria: "Tecnología", region: "Centro", trimestre: "Q2", ventas: 156000, unidades: 13 },
  
  { producto: "Consultoría", categoria: "Servicios", region: "Norte", trimestre: "Q1", ventas: 280000, unidades: 8 },
  { producto: "Consultoría", categoria: "Servicios", region: "Sur", trimestre: "Q1", ventas: 310000, unidades: 9 },
  { producto: "Consultoría", categoria: "Servicios", region: "Centro", trimestre: "Q2", ventas: 295000, unidades: 8 },
  { producto: "Consultoría", categoria: "Servicios", region: "Norte", trimestre: "Q2", ventas: 325000, unidades: 10 },
  
  { producto: "Hardware", categoria: "Tecnología", region: "Centro", trimestre: "Q1", ventas: 95000, unidades: 45 },
  { producto: "Hardware", categoria: "Tecnología", region: "Sur", trimestre: "Q1", ventas: 88000, unidades: 42 },
  { producto: "Hardware", categoria: "Tecnología", region: "Norte", trimestre: "Q2", ventas: 102000, unidades: 48 },
  { producto: "Hardware", categoria: "Tecnología", region: "Centro", trimestre: "Q2", ventas: 98000, unidades: 46 },
  
  { producto: "Capacitación", categoria: "Servicios", region: "Sur", trimestre: "Q1", ventas: 75000, unidades: 25 },
  { producto: "Capacitación", categoria: "Servicios", region: "Norte", trimestre: "Q1", ventas: 82000, unidades: 28 },
  { producto: "Capacitación", categoria: "Servicios", region: "Centro", trimestre: "Q2", ventas: 79000, unidades: 26 },
  { producto: "Capacitación", categoria: "Servicios", region: "Sur", trimestre: "Q2", ventas: 85000, unidades: 29 },
];

export function PivotTablePage() {
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Pivot Table</h1>
          <Badge variant="default">📱 Responsive</Badge>
          <Badge variant="secondary">NEW</Badge>
        </div>
        <p className="text-muted-foreground">
          Tabla dinámica para análisis multidimensional de datos con agregaciones, drill-down y configuración en tiempo real
        </p>
      </div>

      <Separator />

      {/* Description */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          El <strong>Pivot Table</strong> permite analizar grandes volúmenes de datos mediante agregaciones dinámicas,
          agrupación por filas y columnas, y exploración interactiva con drill-down para ver detalles de cada celda.
        </AlertDescription>
      </Alert>

      {/* Example 1: Facturas por Cliente y Región */}
      <Card>
        <CardHeader>
          <CardTitle>Análisis de Facturas: Cliente × Región</CardTitle>
          <CardDescription>
            Suma de montos por cliente y región con totales automáticos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <PivotTable
            data={facturasData}
            initialConfig={{
              rows: ["cliente"],
              columns: ["region"],
              values: "monto",
              aggregation: "sum",
            }}
            availableFields={["cliente", "region", "estado", "mes", "monto", "cantidad"]}
          />
        </CardContent>
      </Card>

      {/* Example 2: Facturas por Estado y Mes */}
      <Card>
        <CardHeader>
          <CardTitle>Análisis por Estado × Mes</CardTitle>
          <CardDescription>
            Conteo de facturas agrupadas por estado y mes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <PivotTable
            data={facturasData}
            initialConfig={{
              rows: ["estado"],
              columns: ["mes"],
              values: "cantidad",
              aggregation: "count",
            }}
            availableFields={["cliente", "region", "estado", "mes", "monto", "cantidad"]}
          />
        </CardContent>
      </Card>

      {/* Example 3: Ventas por Producto y Trimestre */}
      <Card>
        <CardHeader>
          <CardTitle>Ventas: Producto × Trimestre</CardTitle>
          <CardDescription>
            Promedio de ventas por producto en cada trimestre
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <PivotTable
            data={ventasData}
            initialConfig={{
              rows: ["producto"],
              columns: ["trimestre"],
              values: "ventas",
              aggregation: "avg",
            }}
            availableFields={["producto", "categoria", "region", "trimestre", "ventas", "unidades"]}
          />
        </CardContent>
      </Card>

      {/* Example 4: Interactive Configuration */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="flex items-center gap-2">
                🎯 Configuración Dinámica
                <Badge variant="default">INTERACTIVO</Badge>
              </CardTitle>
              <CardDescription>
                Cambia filas, columnas, valores y tipo de agregación en tiempo real
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Explora tus Datos</AlertTitle>
            <AlertDescription className="space-y-2 mt-2">
              <p>
                Usa los selectores en la parte superior para <strong>cambiar la configuración</strong> del Pivot Table:
              </p>
              <p className="text-xs mt-2">
                🔹 <strong>Filas:</strong> Campo a usar como filas (ej: cliente, producto)<br />
                🔹 <strong>Columnas:</strong> Campo a usar como columnas (ej: región, trimestre)<br />
                🔹 <strong>Valores:</strong> Campo numérico a agregar (ej: monto, ventas)<br />
                🔹 <strong>Agregación:</strong> Función de cálculo (suma, promedio, conteo, min, max)
              </p>
            </AlertDescription>
          </Alert>
          
          <PivotTable
            data={facturasData}
            availableFields={["cliente", "region", "estado", "mes", "monto", "cantidad"]}
            onConfigChange={(config) => console.log("Nueva configuración:", config)}
          />
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Características Principales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium">✅ Funcionalidades Core</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Agregaciones dinámicas:</strong> suma, promedio, conteo, mínimo, máximo</li>
                <li>• <strong>Configuración en tiempo real:</strong> cambiar filas, columnas y valores</li>
                <li>• <strong>Totales automáticos:</strong> por fila, columna y gran total</li>
                <li>• <strong>Drill-down interactivo:</strong> click en celdas para ver detalles</li>
                <li>• <strong>Ordenamiento:</strong> click en headers para ordenar por columna</li>
                <li>• <strong>Indicadores visuales:</strong> colores según % del total</li>
                <li>• <strong>Badges de conteo:</strong> muestra cantidad de registros en cada celda</li>
                <li>• <strong>Dialog de detalles:</strong> tabla completa de items agrupados</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">🎨 UI/UX</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Responsive con scroll horizontal en mobile</li>
                <li>• Primera columna sticky para navegación fácil</li>
                <li>• Headers clickeables con iconos de ordenamiento</li>
                <li>• Hover states en celdas con datos</li>
                <li>• Indicadores de tendencia (↑↓) en totales por fila</li>
                <li>• Formato numérico localizado (es-ES)</li>
                <li>• Compatible con modo claro/oscuro</li>
                <li>• Accesibilidad WCAG AA compliant</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Casos de Uso en Factoring</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">📊 Análisis de Cartera</h4>
              <p className="text-sm text-muted-foreground">
                Analizar montos totales por cliente y región, identificar patrones de concentración de riesgo
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">📈 Reportes Ejecutivos</h4>
              <p className="text-sm text-muted-foreground">
                Generar dashboards de ventas por producto/región/trimestre para presentaciones ejecutivas
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">🔍 Exploración de Datos</h4>
              <p className="text-sm text-muted-foreground">
                Drill-down en celdas específicas para investigar anomalías o identificar oportunidades
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">💰 Análisis Financiero</h4>
              <p className="text-sm text-muted-foreground">
                Calcular promedios, mínimos y máximos de facturas por diferentes dimensiones de análisis
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">📅 Tendencias Temporales</h4>
              <p className="text-sm text-muted-foreground">
                Comparar rendimiento mes a mes o trimestre a trimestre con totales automáticos
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">🎯 KPIs Operativos</h4>
              <p className="text-sm text-muted-foreground">
                Monitorear estados de facturas (pendiente/aprobada/pagada) por cliente o región
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Example */}
      <Card>
        <CardHeader>
          <CardTitle>Ejemplo de Uso</CardTitle>
          <CardDescription>Cómo implementar el Pivot Table en tu aplicación</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-md overflow-x-auto">
            <pre className="text-sm">
              <code>{`import { PivotTable, PivotDataRow } from "./components/advanced/PivotTable";

const data: PivotDataRow[] = [
  { cliente: "Corporación Global", region: "Centro", monto: 450000 },
  { cliente: "Innovatech Solutions", region: "Sur", monto: 320000 },
  // ... más datos
];

<PivotTable
  data={data}
  initialConfig={{
    rows: ["cliente"],        // Campo para filas
    columns: ["region"],      // Campo para columnas
    values: "monto",          // Campo a agregar
    aggregation: "sum",       // Tipo de agregación
  }}
  availableFields={["cliente", "region", "estado", "monto"]}
  onConfigChange={(config) => {
    console.log("Nueva configuración:", config);
  }}
/>`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Technical Details */}
      <Card>
        <CardHeader>
          <CardTitle>Detalles Técnicos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">⚡ Performance</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Agregación optimizada con useMemo</li>
                  <li>• Re-cálculo solo cuando cambia data o config</li>
                  <li>• Manejo eficiente de datasets grandes (1000+ registros)</li>
                  <li>• Lazy rendering en drill-down dialog</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">🔧 Configuración</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Props para configuración inicial</li>
                  <li>• Callback onConfigChange para tracking</li>
                  <li>• availableFields customizables</li>
                  <li>• Soporte para múltiples tipos de agregación</li>
                </ul>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>💡 Tip de Implementación</AlertTitle>
              <AlertDescription>
                El Pivot Table funciona con cualquier dataset que tenga campos numéricos y categóricos.
                Para mejores resultados, asegúrate de que tus datos estén normalizados y los campos numéricos
                sean del tipo <code>number</code> en TypeScript.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
