import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { KpiCard, KpiCardGroup } from "../components/patterns/KpiCard";
import { Separator } from "../components/ui/separator";

export function KpiShowcasePage() {
  const realTabs = [
    {
      id: "1",
      label: "Creadas",
      description: "Facturas registradas para operacion",
      value: "$ 125.340",
      count: 18,
      variant: "yellow" as const,
      onAction: () => console.log("Ver facturas creadas"),
    },
    {
      id: "2",
      label: "En Proceso",
      description: "En proceso de revision",
      value: "$ 89.750",
      count: 12,
      variant: "orange" as const,
      onAction: () => console.log("Ver facturas en proceso"),
    },
    {
      id: "3",
      label: "Negociadas",
      description: "Facturas aprobadas",
      value: "$ 234.680",
      count: 31,
      variant: "blue" as const,
      onAction: () => console.log("Ver facturas negociadas"),
    },
    {
      id: "4",
      label: "Endosadas a Fondeador",
      description: "Transferidas para Desembolso",
      value: "$ 456.920",
      count: 47,
      variant: "lime" as const,
      onAction: () => console.log("Ver facturas endosadas"),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">KPI Cards</h1>
        <p className="text-muted-foreground mt-2">
          Tarjetas de indicadores con estados interactivos (Normal, Hover, Active, Disabled)
        </p>
      </div>

      <Separator />

      {/* Estados Individuales */}
      <Card>
        <CardHeader>
          <CardTitle>Estados del Componente</CardTitle>
          <CardDescription>
            Cada card tiene cuatro estados visuales: Normal, Hover, Active y Disabled
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Normal State */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-center">Normal</p>
              <KpiCard
                label="En Negociación"
                description="Pendientes de confirmación"
                value="$ 0,00"
                count={0}
                state="normal"
                onAction={() => console.log("Action")}
              />
            </div>

            {/* Hover State */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-center">Hover</p>
              <KpiCard
                label="En Negociación"
                description="Pendientes de confirmación"
                value="$ 0,00"
                count={0}
                state="hover"
                onAction={() => console.log("Action")}
              />
            </div>

            {/* Active State */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-center">Active</p>
              <KpiCard
                label="En Negociación"
                description="Pendientes de confirmación"
                value="$ 0,00"
                count={0}
                state="active"
                onAction={() => console.log("Action")}
              />
            </div>

            {/* Disabled State */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-center">Disabled</p>
              <KpiCard
                label="En Negociación"
                description="Pendientes de confirmación"
                value="$ 0,00"
                count={0}
                state="disabled"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variantes de Color */}
      <Card>
        <CardHeader>
          <CardTitle>Variantes de Color - Factoring</CardTitle>
          <CardDescription>
            Las cards soportan 4 variantes de color: Yellow (Creadas), Orange (En Proceso), Blue (Negociadas), Lime (Endosadas)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-center">Yellow - Creadas</p>
              <KpiCard
                label="Creadas"
                description="Facturas registradas para operacion"
                value="$ 125.340"
                count={18}
                variant="yellow"
                state="hover"
                onAction={() => console.log("Action")}
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-center">Orange - En Proceso</p>
              <KpiCard
                label="En Proceso"
                description="En proceso de revision"
                value="$ 89.750"
                count={12}
                variant="orange"
                state="hover"
                onAction={() => console.log("Action")}
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-center">Blue - Negociadas</p>
              <KpiCard
                label="Negociadas"
                description="Facturas aprobadas"
                value="$ 234.680"
                count={31}
                variant="blue"
                state="hover"
                onAction={() => console.log("Action")}
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-center">Lime - Endosadas</p>
              <KpiCard
                label="Endosadas a Fondeador"
                description="Transferidas para Desembolso"
                value="$ 456.920"
                count={47}
                variant="lime"
                state="hover"
                onAction={() => console.log("Action")}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grupo con Funcionalidad de Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Estados de Facturas (Tabs Interactivos)</CardTitle>
          <CardDescription>
            Click en un tab para activarlo. Solo uno puede estar activo a la vez - comportamiento real del flujo Factoring
          </CardDescription>
        </CardHeader>
        <CardContent>
          <KpiCardGroup cards={realTabs} />
        </CardContent>
      </Card>

      {/* Ejemplo con Diferentes Métricas */}
      <Card>
        <CardHeader>
          <CardTitle>Dashboard Completo de Factoring</CardTitle>
          <CardDescription>
            Vista completa con todas las métricas y estados de facturas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <KpiCard
              label="Creadas"
              description="Facturas registradas para operacion"
              value="$ 125.340"
              count={18}
              variant="yellow"
              onAction={() => console.log("Ver facturas creadas")}
            />
            <KpiCard
              label="En Proceso"
              description="En proceso de revision"
              value="$ 89.750"
              count={12}
              variant="orange"
              onAction={() => console.log("Ver facturas en proceso")}
            />
            <KpiCard
              label="Negociadas"
              description="Facturas aprobadas"
              value="$ 234.680"
              count={31}
              variant="blue"
              onAction={() => console.log("Ver facturas negociadas")}
            />
            <KpiCard
              label="Endosadas a Fondeador"
              description="Transferidas para Desembolso"
              value="$ 456.920"
              count={47}
              variant="lime"
              onAction={() => console.log("Ver facturas endosadas")}
            />
          </div>
        </CardContent>
      </Card>

      {/* Ejemplo Sin Acciones */}
      <Card>
        <CardHeader>
          <CardTitle>KPIs de Solo Lectura</CardTitle>
          <CardDescription>
            Cards sin botón de acción - solo información estadística
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <KpiCard
              label="Total Operaciones"
              description="Este mes"
              value="$ 906.690"
              count={108}
              variant="lime"
            />
            <KpiCard
              label="Promedio por Operación"
              description="Últimos 30 días"
              value="$ 8.395"
              count={108}
              variant="blue"
            />
            <KpiCard
              label="Tasa Aprobación"
              description="Histórico"
              value="94.2%"
              count={98}
              variant="lime"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
