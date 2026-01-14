import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "../ui/utils";

export function DatePickerPage() {
  const [date, setDate] = useState<Date>();
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Date Picker</h1>
          <Badge variant="secondary">Pattern</Badge>
        </div>
        <p className="text-muted-foreground">
          Composición de Popover + Calendar + Button para seleccionar fechas
        </p>
      </div>

      <Separator />

      {/* Basic Date Picker */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Date Picker Básico</h2>
          <p className="text-muted-foreground">Selector de fecha simple con popover</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Seleccionar Fecha</CardTitle>
            <CardDescription>Click en el botón para abrir el calendario</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Selecciona una fecha</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {date && (
              <p className="text-sm text-muted-foreground">
                Fecha seleccionada: <strong>{format(date, "PPP")}</strong>
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Date Range Picker */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Date Range Picker</h2>
          <p className="text-muted-foreground">Selector de rango de fechas</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Seleccionar Rango</CardTitle>
            <CardDescription>Selecciona fecha de inicio y fin</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !dateRange.from && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Selecciona un rango</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  selected={{ from: dateRange.from, to: dateRange.to }}
                  onSelect={(range) => setDateRange({ from: range?.from, to: range?.to })}
                  numberOfMonths={2}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {dateRange.from && (
              <p className="text-sm text-muted-foreground">
                {dateRange.to ? (
                  <>
                    Rango: <strong>{format(dateRange.from, "PPP")}</strong> hasta{" "}
                    <strong>{format(dateRange.to, "PPP")}</strong>
                  </>
                ) : (
                  <>
                    Inicio: <strong>{format(dateRange.from, "PPP")}</strong>
                  </>
                )}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Code Example */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Composición</CardTitle>
          <CardDescription>Componentes shadcn/ui utilizados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">Popover</Badge>
              Contenedor flotante para el calendario
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">Calendar</Badge>
              Componente de selección de fechas
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">Button</Badge>
              Trigger para abrir el popover
            </p>
            <Separator className="my-3" />
            <p className="text-xs text-muted-foreground">
              El Date Picker es un pattern de shadcn/ui que combina Popover + Calendar + Button
              para crear un selector de fechas completo.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
