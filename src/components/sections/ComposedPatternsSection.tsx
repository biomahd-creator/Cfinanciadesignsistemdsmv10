import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { DataTableAdvanced } from "../patterns/DataTableAdvanced";
import { ApprovalTimeline } from "../patterns/ApprovalTimeline";
import { UploadZone } from "../patterns/UploadZone";
import { MultiStepWizard } from "../patterns/MultiStepWizard";
import { AdvancedFilterPanel } from "../patterns/AdvancedFilterPanel";
import { QuickActionToolbar } from "../patterns/QuickActionToolbar";
import { NotificationCenter } from "../patterns/NotificationCenter";
import { Separator } from "../ui/separator";

export function ComposedPatternsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Patrones Compuestos para Factoring</h2>
        <p className="text-sm text-muted-foreground">
          Componentes especializados creados mediante composición de elementos shadcn/ui
        </p>
      </div>

      <div className="space-y-12">
        {/* Stats Dashboard - MOVED TO KPI SHOWCASE */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1">KPIs Dashboard</h3>
            <p className="text-sm text-muted-foreground">
              Este patrón se ha movido a su propia página dedicada.
            </p>
          </div>
          <Card className="p-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="p-4 rounded-full bg-primary/10">
               <span className="text-2xl">📊</span>
            </div>
            <div>
              <h4 className="font-semibold">Ver KPI Showcase</h4>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                La documentación completa de KPIs, tarjetas interactivas y dashboards se encuentra en la nueva sección de KPI Showcase.
              </p>
            </div>
          </Card>
        </div>

        <Separator />

        {/* Quick Action Toolbar */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1">Quick Action Toolbar</h3>
            <p className="text-sm text-muted-foreground">
              Menubar + Command + TooltipProvider + Buttons
            </p>
          </div>
          <Card className="p-6">
            <QuickActionToolbar />
          </Card>
        </div>

        <Separator />

        {/* Data Table Advanced */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1">Data Table Avanzada</h3>
            <p className="text-sm text-muted-foreground">
              Table + Input + Select + DropdownMenu + Badge + Pagination
            </p>
          </div>
          <Card className="p-6">
            <DataTableAdvanced />
          </Card>
        </div>

        <Separator />

        {/* Advanced Filter Panel */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1">Panel de Filtros Avanzados</h3>
            <p className="text-sm text-muted-foreground">
              Sheet + Form + DatePicker + Select + Checkbox + ScrollArea
            </p>
          </div>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium mb-1">Gestión de Filtros</h4>
                <p className="text-sm text-muted-foreground">
                  Utiliza el panel lateral para aplicar filtros múltiples
                </p>
              </div>
              <div className="flex gap-2">
                <AdvancedFilterPanel />
                <NotificationCenter />
              </div>
            </div>
          </Card>
        </div>

        <Separator />

        {/* Approval Timeline */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1">Timeline de Aprobación</h3>
            <p className="text-sm text-muted-foreground">
              Card + Badge + Separator + Avatar + Icons
            </p>
          </div>
          <ApprovalTimeline />
        </div>

        <Separator />

        {/* Upload Zone */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1">Zona de Carga de Documentos</h3>
            <p className="text-sm text-muted-foreground">
              Card + Button + Progress + Alert + Badge
            </p>
          </div>
          <UploadZone />
        </div>

        <Separator />

        {/* Multi-Step Wizard */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1">Wizard Multi-Paso</h3>
            <p className="text-sm text-muted-foreground">
              Card + Tabs + Form + Button + Progress + Select
            </p>
          </div>
          <MultiStepWizard />
        </div>

        <Separator />

        {/* Summary Card */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Sistema de Diseño Completo</CardTitle>
            <CardDescription>
              Todos los patrones utilizan exclusivamente componentes de shadcn/ui sin código custom
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Patrones Implementados</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ KPIs Dashboard - Financial metrics</li>
                  <li>✓ Quick Action Toolbar - Quick actions</li>
                  <li>✓ Data Table Avanzada - Invoice management</li>
                  <li>✓ Panel de Filtros - Advanced search</li>
                  <li>✓ Timeline de Aprobación - Visual workflow</li>
                  <li>✓ Upload Zone - Document upload</li>
                  <li>✓ Multi-Step Wizard - Guided processes</li>
                  <li>✓ Notification Center - Alert center</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Componentes Base Utilizados</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Card, Button, Input, Select, Checkbox</li>
                  <li>• Table, Badge, Progress, Separator</li>
                  <li>• Tabs, Form, Label, Textarea</li>
                  <li>• Sheet, Popover, Tooltip, Alert</li>
                  <li>• Calendar, Command, Menubar</li>
                  <li>• DropdownMenu, ScrollArea, Avatar</li>
                  <li>• Pagination, NavigationMenu</li>
                  <li>• 100% shadcn/ui - Sin componentes custom</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}