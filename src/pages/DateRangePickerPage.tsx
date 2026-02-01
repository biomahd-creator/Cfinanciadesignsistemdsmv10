import { DateRangePicker } from "../components/ui/date-range-picker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useState } from "react";
import { CalendarRange } from "lucide-react";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

export function DateRangePickerPage() {
  const [range1, setRange1] = useState<DateRange | undefined>();
  const [range2, setRange2] = useState<DateRange | undefined>({
    from: new Date(2024, 11, 1),
    to: new Date(2024, 11, 15),
  });
  const [range3, setRange3] = useState<DateRange | undefined>();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <h1 className="text-foreground">Date Range Picker</h1>
          <Badge variant="secondary">Forms</Badge>
          <Badge variant="outline" className="gap-1">
            <CalendarRange className="size-3" />
            NEW
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Selector de rango de fechas con calendario visual, localización en español
          y formato personalizable. Ideal para filtros de reportes y búsquedas temporales.
        </p>
      </div>

      {/* Preview Principal */}
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            Date Range Picker con todas las características
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-foreground font-medium">Selecciona un rango de fechas</label>
            <DateRangePicker
              dateRange={range1}
              onDateRangeChange={setRange1}
            />
            {range1?.from && (
              <p className="text-muted-foreground text-sm">
                {range1.to
                  ? `Rango: ${format(range1.from, "dd/MM/yyyy")} - ${format(range1.to, "dd/MM/yyyy")}`
                  : `Inicio: ${format(range1.from, "dd/MM/yyyy")}`}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Variantes */}
      <Card>
        <CardHeader>
          <CardTitle>Variantes</CardTitle>
          <CardDescription>
            Diferentes configuraciones del componente
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Con valor por defecto */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Con valor por defecto</label>
            <p className="text-muted-foreground text-sm">
              Date Range Picker con un rango preseleccionado.
            </p>
            <DateRangePicker
              dateRange={range2}
              onDateRangeChange={setRange2}
            />
          </div>

          {/* Placeholder personalizado */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Placeholder personalizado</label>
            <p className="text-muted-foreground text-sm">
              Con texto de placeholder personalizado.
            </p>
            <DateRangePicker
              dateRange={range3}
              onDateRangeChange={setRange3}
              placeholder="Elige el período del reporte"
            />
          </div>

          {/* Deshabilitado */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Deshabilitado</label>
            <p className="text-muted-foreground text-sm">
              Estado deshabilitado del componente.
            </p>
            <DateRangePicker
              dateRange={{
                from: new Date(2024, 11, 1),
                to: new Date(2024, 11, 31),
              }}
              onDateRangeChange={() => {}}
              disabled
            />
          </div>
        </CardContent>
      </Card>

      {/* Ejemplos de uso */}
      <Card>
        <CardHeader>
          <CardTitle>Casos de Uso</CardTitle>
          <CardDescription>
            Ejemplos prácticos de implementación
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Filtro de reportes */}
            <div className="space-y-3">
              <h3 className="text-foreground font-medium">Filtro de Reportes</h3>
              <p className="text-muted-foreground text-sm">
                Selector de período para generar reportes financieros.
              </p>
              <DateRangePicker
                placeholder="Período del reporte"
                className="w-full"
              />
            </div>

            {/* Búsqueda de transacciones */}
            <div className="space-y-3">
              <h3 className="text-foreground font-medium">Búsqueda de Transacciones</h3>
              <p className="text-muted-foreground text-sm">
                Filtrar transacciones por rango de fechas.
              </p>
              <DateRangePicker
                placeholder="Fecha de transacciones"
                className="w-full"
              />
            </div>

            {/* Programación de eventos */}
            <div className="space-y-3">
              <h3 className="text-foreground font-medium">Programación de Eventos</h3>
              <p className="text-muted-foreground text-sm">
                Seleccionar fechas de inicio y fin de eventos.
              </p>
              <DateRangePicker
                placeholder="Duración del evento"
                className="w-full"
              />
            </div>

            {/* Reservas */}
            <div className="space-y-3">
              <h3 className="text-foreground font-medium">Sistema de Reservas</h3>
              <p className="text-muted-foreground text-sm">
                Elegir fechas de check-in y check-out.
              </p>
              <DateRangePicker
                placeholder="Fechas de estancia"
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Uso */}
      <Card>
        <CardHeader>
          <CardTitle>Uso Básico</CardTitle>
          <CardDescription>Implementación del componente</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-md p-4">
            <pre className="text-sm">
              <code>{`import { DateRangePicker } from "@/components/ui/date-range-picker";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export function MyFilter() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const handleFilter = () => {
    if (dateRange?.from && dateRange?.to) {
      console.log("Filtrar desde:", dateRange.from);
      console.log("Filtrar hasta:", dateRange.to);
    }
  };

  return (
    <div>
      <label>Período del reporte</label>
      <DateRangePicker
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        placeholder="Selecciona las fechas"
      />
      <button onClick={handleFilter}>
        Generar reporte
      </button>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Props */}
      <Card>
        <CardHeader>
          <CardTitle>Propiedades</CardTitle>
          <CardDescription>API del componente</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Prop</th>
                  <th className="text-left p-2">Tipo</th>
                  <th className="text-left p-2">Default</th>
                  <th className="text-left p-2">Descripción</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground text-sm">
                <tr className="border-b">
                  <td className="p-2 font-mono">dateRange</td>
                  <td className="p-2">DateRange | undefined</td>
                  <td className="p-2">undefined</td>
                  <td className="p-2">Rango de fechas seleccionado</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">onDateRangeChange</td>
                  <td className="p-2">(range) =&gt; void</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Callback cuando cambia el rango</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">placeholder</td>
                  <td className="p-2">string</td>
                  <td className="p-2">"Selecciona un rango..."</td>
                  <td className="p-2">Texto cuando no hay selección</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">disabled</td>
                  <td className="p-2">boolean</td>
                  <td className="p-2">false</td>
                  <td className="p-2">Deshabilita el componente</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">className</td>
                  <td className="p-2">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Clases CSS adicionales</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-muted/50 mt-4 rounded-md p-4">
            <p className="text-foreground mb-2 font-medium">DateRange Type:</p>
            <pre className="text-sm">
              <code>{`interface DateRange {
  from: Date | undefined;
  to?: Date | undefined;
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Características */}
      <Card>
        <CardHeader>
          <CardTitle>Características</CardTitle>
          <CardDescription>Funcionalidades incluidas</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Calendario visual con 2 meses simultáneos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Localización en español (fecha-fns)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Formato de fecha personalizable</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Resaltado visual del rango seleccionado</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Navegación por teclado completa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Popover responsivo con animaciones</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Compatible con modo claro y oscuro</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Accesible con ARIA y roles semánticos</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
