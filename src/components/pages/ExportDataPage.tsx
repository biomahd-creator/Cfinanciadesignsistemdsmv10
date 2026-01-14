import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ExportData, ExportColumn, quickExportCSV } from "../advanced/ExportData";
import { Separator } from "../ui/separator";
import { AlertCircle, Info, Download } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

// Sample data: Facturas
const facturasData = [
  {
    id: "F-2024-001",
    cliente: "Corporación Global S.A.",
    monto: 450000,
    estado: "Pagada",
    fecha: "2024-01-15",
    region: "Centro",
    moneda: "CLP",
  },
  {
    id: "F-2024-002",
    cliente: "Innovatech Solutions",
    monto: 320000,
    estado: "Aprobada",
    fecha: "2024-01-18",
    region: "Sur",
    moneda: "CLP",
  },
  {
    id: "F-2024-003",
    cliente: "Distribuidora Nacional",
    monto: 420000,
    estado: "Pagada",
    fecha: "2024-01-20",
    region: "Norte",
    moneda: "CLP",
  },
  {
    id: "F-2024-004",
    cliente: "TechCorp Industries",
    monto: 560000,
    estado: "Pendiente",
    fecha: "2024-01-22",
    region: "Centro",
    moneda: "CLP",
  },
  {
    id: "F-2024-005",
    cliente: "Logística Express",
    monto: 190000,
    estado: "Aprobada",
    fecha: "2024-01-25",
    region: "Sur",
    moneda: "CLP",
  },
  {
    id: "F-2024-006",
    cliente: "MegaCorp Internacional",
    monto: 680000,
    estado: "Pagada",
    fecha: "2024-02-01",
    region: "Norte",
    moneda: "CLP",
  },
  {
    id: "F-2024-007",
    cliente: "Comercial del Pacífico",
    monto: 340000,
    estado: "Rechazada",
    fecha: "2024-02-05",
    region: "Sur",
    moneda: "CLP",
  },
  {
    id: "F-2024-008",
    cliente: "Industrias del Sur",
    monto: 420000,
    estado: "Pagada",
    fecha: "2024-02-08",
    region: "Sur",
    moneda: "CLP",
  },
];

// Custom columns with formatting
const facturasColumns: ExportColumn[] = [
  { key: "id", label: "ID Factura" },
  { key: "cliente", label: "Cliente" },
  {
    key: "monto",
    label: "Monto",
    format: (value) => `$${value.toLocaleString("es-ES")}`,
  },
  { key: "estado", label: "Estado" },
  {
    key: "fecha",
    label: "Fecha",
    format: (value) => new Date(value).toLocaleDateString("es-ES"),
  },
  { key: "region", label: "Región" },
  { key: "moneda", label: "Moneda" },
];

// Large dataset example (100 records)
const generateLargeDataset = (count: number = 100) => {
  const clientes = [
    "Corporación Global",
    "Innovatech Solutions",
    "Distribuidora Nacional",
    "TechCorp Industries",
    "Logística Express",
    "MegaCorp Internacional",
  ];
  const estados: Array<"Pagada" | "Aprobada" | "Pendiente" | "Rechazada"> = [
    "Pagada",
    "Aprobada",
    "Pendiente",
    "Rechazada",
  ];
  const regiones = ["Centro", "Norte", "Sur"];

  return Array.from({ length: count }, (_, i) => ({
    id: `F-2024-${String(i + 1).padStart(4, "0")}`,
    cliente: clientes[Math.floor(Math.random() * clientes.length)],
    monto: Math.floor(Math.random() * 500000) + 100000,
    estado: estados[Math.floor(Math.random() * estados.length)],
    fecha: new Date(2024, 0, Math.floor(Math.random() * 28) + 1)
      .toISOString()
      .split("T")[0],
    region: regiones[Math.floor(Math.random() * regiones.length)],
    moneda: "CLP",
  }));
};

const largeDataset = generateLargeDataset(100);

// Ventas dataset
const ventasData = [
  {
    producto: "Software CRM",
    categoria: "Tecnología",
    precio: 12000,
    stock: 45,
    proveedor: "TechSupply Inc.",
  },
  {
    producto: "Consultoría",
    categoria: "Servicios",
    precio: 35000,
    stock: 0,
    proveedor: "BusinessConsult",
  },
  {
    producto: "Hardware Servidor",
    categoria: "Tecnología",
    precio: 2100,
    stock: 12,
    proveedor: "TechSupply Inc.",
  },
  {
    producto: "Capacitación",
    categoria: "Servicios",
    precio: 3000,
    stock: 0,
    proveedor: "EduCorp",
  },
  {
    producto: "Licencias Office",
    categoria: "Software",
    precio: 450,
    stock: 120,
    proveedor: "SoftwarePlus",
  },
];

export function ExportDataPage() {
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Export to CSV/Excel</h1>
          <Badge variant="default">📊 Data</Badge>
          <Badge variant="secondary">NEW</Badge>
        </div>
        <p className="text-muted-foreground">
          Exportación configurable de datos a formatos CSV y Excel (XLSX) con
          selección de columnas, formato personalizado y vista previa
        </p>
      </div>

      <Separator />

      {/* Description */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          El componente <strong>ExportData</strong> permite exportar cualquier
          dataset a CSV o Excel con configuración avanzada: selección de
          columnas, formato de datos, nombres personalizados y vista previa
          antes de descargar.
        </AlertDescription>
      </Alert>

      {/* Example 1: Basic Export */}
      <Card>
        <CardHeader>
          <CardTitle>Exportación Básica: Facturas</CardTitle>
          <CardDescription>
            8 facturas con todas las columnas disponibles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Data Table */}
          <div className="rounded-md border overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="text-right">Monto</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Región</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {facturasData.map((factura) => (
                  <TableRow key={factura.id}>
                    <TableCell className="font-medium">{factura.id}</TableCell>
                    <TableCell>{factura.cliente}</TableCell>
                    <TableCell className="text-right">
                      ${factura.monto.toLocaleString("es-ES")}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          factura.estado === "Pagada"
                            ? "outline"
                            : factura.estado === "Aprobada"
                            ? "default"
                            : factura.estado === "Pendiente"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {factura.estado}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(factura.fecha).toLocaleDateString("es-ES")}
                    </TableCell>
                    <TableCell>{factura.region}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Export Component */}
          <ExportData
            data={facturasData}
            defaultFilename="facturas-2024"
            availableColumns={facturasColumns}
            onExport={(format, config) => {
              console.log(
                `Exportado ${data.length} registros a ${format}`,
                config
              );
            }}
          />
        </CardContent>
      </Card>

      {/* Example 2: Custom Columns */}
      <Card>
        <CardHeader>
          <CardTitle>Con Formato Personalizado</CardTitle>
          <CardDescription>
            Columnas con formato customizado para montos y fechas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              Las columnas <strong>Monto</strong> y <strong>Fecha</strong> usan
              formatters personalizados que se aplicarán en la exportación:
              <br />
              • Monto: <code>$XXX,XXX</code> (formato es-ES)
              <br />• Fecha: <code>DD/MM/YYYY</code> (localizado)
            </AlertDescription>
          </Alert>

          <div className="rounded-md border overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="text-right">Monto</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Fecha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {facturasData.slice(0, 5).map((factura) => (
                  <TableRow key={factura.id}>
                    <TableCell className="font-medium">
                      {factura.cliente}
                    </TableCell>
                    <TableCell className="text-right">
                      ${factura.monto.toLocaleString("es-ES")}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{factura.estado}</Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(factura.fecha).toLocaleDateString("es-ES")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <ExportData
            data={facturasData}
            defaultFilename="facturas-formateadas"
            availableColumns={facturasColumns}
          />
        </CardContent>
      </Card>

      {/* Example 3: Large Dataset */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="flex items-center gap-2">
                🚀 Dataset Grande: 100 Facturas
                <Badge variant="default">PERFORMANCE</Badge>
              </CardTitle>
              <CardDescription>
                Exportación optimizada para grandes volúmenes de datos
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Optimización para Grandes Datos</AlertTitle>
            <AlertDescription className="space-y-2 mt-2">
              <p>
                El componente está optimizado para manejar datasets de{" "}
                <strong>1000+ registros</strong>:
              </p>
              <p className="text-xs mt-2">
                ✅ Generación eficiente de archivos CSV/Excel
                <br />
                ✅ Vista previa limitada a 5 filas (rendimiento)
                <br />
                ✅ Streaming de datos para evitar bloqueos
                <br />✅ Progress indicator durante exportación
              </p>
            </AlertDescription>
          </Alert>

          <div className="p-4 border rounded-lg bg-muted/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-semibold">
                  {largeDataset.length}
                </div>
                <div className="text-xs text-muted-foreground">Registros</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">7</div>
                <div className="text-xs text-muted-foreground">Columnas</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">~50KB</div>
                <div className="text-xs text-muted-foreground">CSV</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">~25KB</div>
                <div className="text-xs text-muted-foreground">Excel</div>
              </div>
            </div>
          </div>

          <ExportData
            data={largeDataset}
            defaultFilename="facturas-completo-2024"
            availableColumns={facturasColumns}
          />
        </CardContent>
      </Card>

      {/* Example 4: Quick Export */}
      <Card>
        <CardHeader>
          <CardTitle>Exportación Rápida (Sin UI)</CardTitle>
          <CardDescription>
            Función utilitaria para exportar sin diálogo de configuración
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              Usa la función <code>quickExportCSV()</code> para exportar
              directamente sin mostrar el diálogo de configuración. Ideal para
              botones de "Descargar todo".
            </AlertDescription>
          </Alert>

          <div className="rounded-md border overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Producto</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead className="text-right">Precio</TableHead>
                  <TableHead className="text-right">Stock</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ventasData.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">
                      {item.producto}
                    </TableCell>
                    <TableCell>{item.categoria}</TableCell>
                    <TableCell className="text-right">
                      ${item.precio.toLocaleString("es-ES")}
                    </TableCell>
                    <TableCell className="text-right">{item.stock}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Button
            onClick={() => quickExportCSV(ventasData, "productos-stock")}
            variant="default"
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Descargar CSV Inmediatamente
          </Button>

          <div className="bg-muted p-4 rounded-md overflow-x-auto">
            <pre className="text-xs">
              <code>{`import { quickExportCSV } from "./components/advanced/ExportData";

// Exportación directa sin UI
quickExportCSV(data, "mi-archivo");

// Con columnas específicas
quickExportCSV(data, "mi-archivo", [
  { key: "id", label: "ID" },
  { key: "name", label: "Nombre" },
  { key: "amount", label: "Monto", format: (v) => \`$\${v}\` }
]);`}</code>
            </pre>
          </div>
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
                <li>
                  • <strong>Exportación dual:</strong> CSV y Excel (XLSX)
                </li>
                <li>
                  • <strong>Selección de columnas:</strong> elige qué campos
                  exportar
                </li>
                <li>
                  • <strong>Formato personalizado:</strong> formatters por
                  columna
                </li>
                <li>
                  • <strong>Vista previa:</strong> revisa datos antes de
                  exportar
                </li>
                <li>
                  • <strong>Nombre customizable:</strong> filename editable
                </li>
                <li>
                  • <strong>Headers opcionales:</strong> con/sin encabezados
                </li>
                <li>
                  • <strong>Quick export:</strong> función sin UI para uso
                  programático
                </li>
                <li>
                  • <strong>Callback onExport:</strong> tracking de
                  exportaciones
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">🎨 UI/UX</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dialog de configuración completo</li>
                <li>• Checkbox para selección de columnas</li>
                <li>• Botones "Todas/Ninguna" para selección rápida</li>
                <li>• Contador de columnas seleccionadas</li>
                <li>• Alert con resumen de exportación</li>
                <li>• Vista previa con tabla completa</li>
                <li>• Badges para identificar formato (CSV/Excel)</li>
                <li>• Compatible con modo claro/oscuro</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integration Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Integración con Otras Tablas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>💡 Casos de Uso</AlertTitle>
              <AlertDescription className="space-y-2 mt-2">
                <p>
                  El componente <strong>ExportData</strong> se integra
                  perfectamente con:
                </p>
                <ul className="text-xs space-y-1 mt-2">
                  <li>
                    ✅ <strong>Data Table</strong> - Exportar resultados
                    filtrados/ordenados
                  </li>
                  <li>
                    ✅ <strong>Tree Table</strong> - Exportar jerarquías
                    aplanadas
                  </li>
                  <li>
                    ✅ <strong>Pivot Table</strong> - Exportar datos agregados
                  </li>
                  <li>
                    ✅ <strong>Forms</strong> - Exportar datos de formularios
                    complejos
                  </li>
                  <li>
                    ✅ <strong>API Responses</strong> - Exportar respuestas de
                    backend
                  </li>
                </ul>
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">📊 Reportes Financieros</h4>
                <p className="text-sm text-muted-foreground">
                  Exportar facturas, pagos y estados de cuenta para análisis
                  externo
                </p>
              </div>

              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">📈 Dashboards</h4>
                <p className="text-sm text-muted-foreground">
                  Permitir a usuarios descargar datos visualizados en gráficos
                  y tablas
                </p>
              </div>

              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">🔍 Auditoría</h4>
                <p className="text-sm text-muted-foreground">
                  Generar archivos de respaldo para cumplimiento y auditorías
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Example */}
      <Card>
        <CardHeader>
          <CardTitle>Ejemplo de Uso</CardTitle>
          <CardDescription>
            Cómo implementar ExportData en tu aplicación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-md overflow-x-auto">
            <pre className="text-sm">
              <code>{`import { ExportData, ExportColumn } from "./components/advanced/ExportData";

// Define columnas con formato opcional
const columns: ExportColumn[] = [
  { key: "id", label: "ID" },
  { key: "cliente", label: "Cliente" },
  { 
    key: "monto", 
    label: "Monto",
    format: (value) => \`$\${value.toLocaleString("es-ES")}\`
  },
  { 
    key: "fecha", 
    label: "Fecha",
    format: (value) => new Date(value).toLocaleDateString("es-ES")
  },
];

// Renderizar componente
<ExportData
  data={facturasData}
  defaultFilename="facturas-2024"
  availableColumns={columns}
  onExport={(format, config) => {
    // Tracking o analytics
    console.log(\`Exportado a \${format}\`, config);
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
                <h4 className="font-medium">📦 Dependencias</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    • <code>xlsx</code> - Generación de archivos Excel (dynamic
                    import)
                  </li>
                  <li>
                    • <code>Blob API</code> - Creación de archivos en el
                    navegador
                  </li>
                  <li>
                    • Native CSV - Sin dependencias adicionales
                  </li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">⚡ Performance</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Dynamic import de xlsx (code splitting)</li>
                  <li>• Streaming para datasets grandes</li>
                  <li>• Vista previa limitada (primeras 5 filas)</li>
                  <li>• Generación asíncrona sin bloqueos</li>
                </ul>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>💡 Diferencias CSV vs Excel</AlertTitle>
              <AlertDescription className="space-y-2 mt-2">
                <div className="grid md:grid-cols-2 gap-4 text-xs mt-2">
                  <div>
                    <strong>CSV (Comma-Separated Values)</strong>
                    <ul className="mt-2 space-y-1">
                      <li>✅ Universal, compatible con todo</li>
                      <li>✅ Archivos más pequeños</li>
                      <li>✅ Fácil de procesar programáticamente</li>
                      <li>❌ Sin formato (colores, estilos)</li>
                      <li>❌ Solo una hoja</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Excel (XLSX)</strong>
                    <ul className="mt-2 space-y-1">
                      <li>✅ Formato rico (colores, estilos)</li>
                      <li>✅ Múltiples hojas</li>
                      <li>✅ Fórmulas y cálculos</li>
                      <li>✅ Anchos de columna automáticos</li>
                      <li>❌ Archivos más grandes</li>
                    </ul>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
