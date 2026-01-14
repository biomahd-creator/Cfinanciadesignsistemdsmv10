import React from "react";
import { StatusKPICard } from "../business/StatusKPICard";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Separator } from "../ui/separator";

export function StatusKPIsPage() {
  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-medium mb-2">Status KPI Cards</h1>
        <p className="text-muted-foreground">
          Tarjetas de estado interactivas para el dashboard de factoring con múltiples estados visuales
        </p>
      </div>

      <Separator />

      {/* Estado Normal */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Estado Normal</h2>
          <p className="text-muted-foreground">
            Estado predeterminado de las tarjetas sin interacción del usuario
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <StatusKPICard
            title="En Negociación"
            subtitle="Pendientes de confirmación"
            amount="$ 0,00"
            count={0}
            variant="negotiation"
            state="normal"
            interactive={false}
          />

          <StatusKPICard
            title="Desembolsadas"
            subtitle="En tránsito a tu cuenta"
            amount="$ 0,00"
            count={0}
            variant="disbursed"
            state="normal"
            interactive={false}
          />
        </div>
      </section>

      <Separator />

      {/* Estado Hover */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Estado Hover</h2>
          <p className="text-muted-foreground">
            Cuando el usuario pasa el mouse sobre la tarjeta, aparece el botón "Ver Facturas"
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <StatusKPICard
            title="En Negociación"
            subtitle="Pendientes de confirmación"
            amount="$ 0,00"
            count={0}
            variant="negotiation"
            state="hover"
            interactive={false}
            onViewClick={() => alert("Navegando a facturas en negociación")}
          />

          <StatusKPICard
            title="Desembolsadas"
            subtitle="En tránsito a tu cuenta"
            amount="$ 0,00"
            count={0}
            variant="disbursed"
            state="hover"
            interactive={false}
            onViewClick={() => alert("Navegando a facturas desembolsadas")}
          />
        </div>
      </section>

      <Separator />

      {/* Estado Active */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Estado Active</h2>
          <p className="text-muted-foreground">
            Cuando la tarjeta está seleccionada, el fondo cambia y el monto se muestra en color
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <StatusKPICard
            title="En Negociación"
            subtitle="Pendientes de confirmación"
            amount="$ 0,00"
            count={0}
            variant="negotiation"
            state="active"
            interactive={false}
          />

          <StatusKPICard
            title="Desembolsadas"
            subtitle="En tránsito a tu cuenta"
            amount="$ 0,00"
            count={0}
            variant="disbursed"
            state="active"
            interactive={false}
          />
        </div>
      </section>

      <Separator />

      {/* Estado Disabled */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Estado Disabled</h2>
          <p className="text-muted-foreground">
            Cuando la tarjeta está deshabilitada, todos los elementos se muestran en gris claro
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <StatusKPICard
            title="En Negociación"
            subtitle="Pendientes de confirmación"
            amount="$ 0,00"
            count={0}
            variant="negotiation"
            state="disabled"
            interactive={false}
          />

          <StatusKPICard
            title="Desembolsadas"
            subtitle="En tránsito a tu cuenta"
            amount="$ 0,00"
            count={0}
            variant="disbursed"
            state="disabled"
            interactive={false}
          />
        </div>
      </section>

      <Separator />

      {/* Ejemplo Interactivo */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Ejemplo Interactivo</h2>
          <p className="text-muted-foreground">
            Las siguientes tarjetas son completamente interactivas. Haz hover para ver el botón "Ver Facturas" 
            y haz clic para activar/desactivar el estado activo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatusKPICard
            title="En Negociación"
            subtitle="Pendientes de confirmación"
            amount="$ 145,200"
            count={12}
            variant="negotiation"
            onViewClick={() => alert("Navegando a facturas en negociación")}
          />

          <StatusKPICard
            title="Aprobadas"
            subtitle="Listas para desembolso"
            amount="$ 320,000"
            count={8}
            variant="negotiation"
            onViewClick={() => alert("Navegando a facturas aprobadas")}
          />

          <StatusKPICard
            title="Desembolsadas"
            subtitle="En tránsito a tu cuenta"
            amount="$ 890,500"
            count={45}
            variant="disbursed"
            onViewClick={() => alert("Navegando a facturas desembolsadas")}
          />

          <StatusKPICard
            title="Finalizadas"
            subtitle="Pagadas por el deudor"
            amount="$ 2,150,000"
            count={128}
            variant="disbursed"
            onViewClick={() => alert("Navegando a facturas finalizadas")}
          />
        </div>
      </section>

      <Separator />

      {/* Variante Hover Full Width */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Variante Hover Full Width</h2>
          <p className="text-muted-foreground">
            Variante alternativa donde el botón de acción ocupa todo el ancho inferior de la tarjeta.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatusKPICard
            title="En Negociación"
            subtitle="Pendientes de confirmación"
            amount="$ 145,200"
            count={12}
            variant="negotiation"
            hoverStyle="full"
            onViewClick={() => alert("Navegando a facturas en negociación")}
          />

          <StatusKPICard
            title="Aprobadas"
            subtitle="Listas para desembolso"
            amount="$ 320,000"
            count={8}
            variant="negotiation"
            hoverStyle="full"
            onViewClick={() => alert("Navegando a facturas aprobadas")}
          />

          <StatusKPICard
            title="Desembolsadas"
            subtitle="En tránsito a tu cuenta"
            amount="$ 890,500"
            count={45}
            variant="disbursed"
            hoverStyle="full"
            onViewClick={() => alert("Navegando a facturas desembolsadas")}
          />

          <StatusKPICard
            title="Finalizadas"
            subtitle="Pagadas por el deudor"
            amount="$ 2,150,000"
            count={128}
            variant="disbursed"
            hoverStyle="full"
            onViewClick={() => alert("Navegando a facturas finalizadas")}
          />
        </div>
      </section>

      {/* Documentación */}
      <Separator />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Documentación de Uso</h2>

        <Card>
          <CardHeader>
            <CardTitle>Props del Componente</CardTitle>
            <CardDescription>StatusKPICard acepta las siguientes propiedades</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-muted/50 rounded-md">
                <span className="font-medium">title</span>
                <span className="text-sm text-muted-foreground">Título principal de la tarjeta</span>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-muted/50 rounded-md">
                <span className="font-medium">subtitle</span>
                <span className="text-sm text-muted-foreground">Texto descriptivo secundario</span>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-muted/50 rounded-md">
                <span className="font-medium">amount</span>
                <span className="text-sm text-muted-foreground">Monto a mostrar (ej: "$ 145,200")</span>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-muted/50 rounded-md">
                <span className="font-medium">count</span>
                <span className="text-sm text-muted-foreground">Número a mostrar en el badge circular</span>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-muted/50 rounded-md">
                <span className="font-medium">variant</span>
                <span className="text-sm text-muted-foreground">"negotiation" | "disbursed" - Esquema de colores</span>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-muted/50 rounded-md">
                <span className="font-medium">state</span>
                <span className="text-sm text-muted-foreground">"normal" | "hover" | "active" | "disabled" - Estado visual (opcional)</span>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-muted/50 rounded-md">
                <span className="font-medium">hoverStyle</span>
                <span className="text-sm text-muted-foreground">"default" | "full" - Estilo del botón hover (con márgenes o ancho completo)</span>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-muted/50 rounded-md">
                <span className="font-medium">interactive</span>
                <span className="text-sm text-muted-foreground">boolean - Habilita interacciones (hover/click) - Default: true</span>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-muted/50 rounded-md">
                <span className="font-medium">onViewClick</span>
                <span className="text-sm text-muted-foreground">Callback cuando se hace clic en "Ver Facturas"</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ejemplo de Código</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-x-auto text-sm">
              {`import { StatusKPICard } from "../business/StatusKPICard";

function Dashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <StatusKPICard
        title="En Negociación"
        subtitle="Pendientes de confirmación"
        amount="$ 145,200"
        count={12}
        variant="negotiation"
        onViewClick={() => navigate("/facturas/negociacion")}
      />

      <StatusKPICard
        title="Desembolsadas"
        subtitle="En tránsito a tu cuenta"
        amount="$ 890,500"
        count={45}
        variant="disbursed"
        onViewClick={() => navigate("/facturas/desembolsadas")}
      />
    </div>
  );
}`}
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
