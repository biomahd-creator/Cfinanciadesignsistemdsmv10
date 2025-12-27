import { DashboardTemplate } from "../templates/DashboardTemplate";
import { StatsGrid } from "../organisms/StatsGrid";
import { InvoiceTable } from "../organisms/InvoiceTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";

export function DashboardPage() {
  return (
    <DashboardTemplate
      title="Dashboard Ejecutivo"
      description="Resumen de las operaciones y métricas clave"
    >
      {/* Stats Section */}
      <section>
        <StatsGrid />
      </section>

      {/* Recent Invoices Section */}
      <section>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Facturas Recientes</CardTitle>
              <CardDescription>
                Últimas operaciones procesadas en el sistema
              </CardDescription>
            </div>
            <Button variant="outline">
              Ver todas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <InvoiceTable />
          </CardContent>
        </Card>
      </section>

      {/* Activity Summary */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
            <CardDescription>Últimos eventos del sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3 pb-4 border-b last:border-b-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-medium">{i}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Factura aprobada</p>
                    <p className="text-xs text-muted-foreground">
                      INV-00{i} - Hace {i} hora{i > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pendientes de Revisión</CardTitle>
            <CardDescription>Operaciones que requieren atención</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">3 Facturas pendientes</p>
                  <p className="text-xs text-muted-foreground">
                    Requieren aprobación
                  </p>
                </div>
                <Button size="sm">Revisar</Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">2 Documentos faltantes</p>
                  <p className="text-xs text-muted-foreground">
                    Completar información
                  </p>
                </div>
                <Button size="sm" variant="outline">Ver</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </DashboardTemplate>
  );
}
