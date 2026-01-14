import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "../ui/resizable";

export function ResizablePage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Resizable</h1>
          <Badge>Layout</Badge>
        </div>
        <p className="text-muted-foreground">
          Paneles redimensionables con handles arrastrables
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Layout Horizontal</h2>
          <p className="text-muted-foreground">Paneles lado a lado</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Sidebar + Contenido</CardTitle>
            <CardDescription>Arrastra el handle para redimensionar</CardDescription>
          </CardHeader>
          <CardContent>
            <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
              <ResizablePanel defaultSize={25} minSize={15}>
                <div className="flex h-full items-center justify-center p-6">
                  <div className="text-center space-y-2">
                    <p className="font-semibold">Sidebar</p>
                    <p className="text-sm text-muted-foreground">Panel izquierdo</p>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <div className="text-center space-y-2">
                    <p className="font-semibold">Contenido Principal</p>
                    <p className="text-sm text-muted-foreground">Panel derecho</p>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Layout Vertical</h2>
          <p className="text-muted-foreground">Paneles apilados</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Header + Contenido + Footer</CardTitle>
            <CardDescription>Paneles verticales redimensionables</CardDescription>
          </CardHeader>
          <CardContent>
            <ResizablePanelGroup direction="vertical" className="min-h-[400px] rounded-lg border">
              <ResizablePanel defaultSize={20} minSize={10}>
                <div className="flex h-full items-center justify-center p-6">
                  <div className="text-center space-y-2">
                    <p className="font-semibold">Header</p>
                    <p className="text-sm text-muted-foreground">Panel superior</p>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={60}>
                <div className="flex h-full items-center justify-center p-6">
                  <div className="text-center space-y-2">
                    <p className="font-semibold">Contenido Principal</p>
                    <p className="text-sm text-muted-foreground">Panel central</p>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={20} minSize={10}>
                <div className="flex h-full items-center justify-center p-6">
                  <div className="text-center space-y-2">
                    <p className="font-semibold">Footer</p>
                    <p className="text-sm text-muted-foreground">Panel inferior</p>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Layout Complejo</h2>
          <p className="text-muted-foreground">Combinación de horizontal y vertical</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Layout de Aplicación Completa</CardTitle>
            <CardDescription>Sidebar + Header + Contenido + Panel lateral</CardDescription>
          </CardHeader>
          <CardContent>
            <ResizablePanelGroup direction="horizontal" className="min-h-[400px] rounded-lg border">
              <ResizablePanel defaultSize={20} minSize={15}>
                <div className="flex h-full items-center justify-center p-6 bg-muted/30">
                  <div className="text-center space-y-2">
                    <p className="font-semibold">Sidebar</p>
                    <p className="text-sm text-muted-foreground">Navegación</p>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={55}>
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={15} minSize={10}>
                    <div className="flex h-full items-center justify-center p-6 bg-muted/20">
                      <div className="text-center space-y-2">
                        <p className="font-semibold">Header</p>
                        <p className="text-sm text-muted-foreground">Barra superior</p>
                      </div>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={85}>
                    <div className="flex h-full items-center justify-center p-6">
                      <div className="text-center space-y-2">
                        <p className="font-semibold">Contenido Principal</p>
                        <p className="text-sm text-muted-foreground">Área de trabajo</p>
                      </div>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={25} minSize={15}>
                <div className="flex h-full items-center justify-center p-6 bg-muted/30">
                  <div className="text-center space-y-2">
                    <p className="font-semibold">Panel Derecho</p>
                    <p className="text-sm text-muted-foreground">Propiedades</p>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Casos de Uso</h2>
          <p className="text-muted-foreground">Aplicaciones comunes</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Code Editor</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Navegador de archivos + Editor + Panel de propiedades</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Email Client</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Lista de emails + Vista previa + Detalles</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Sidebar + Gráficas + Widgets personalizables</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">✅ Características</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Tamaños mínimos y máximos configurables</p>
            <p>• Handles visuales opcionales</p>
            <p>• Anidación de layouts horizontal y vertical</p>
            <p>• Persistencia de tamaños (localStorage)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">⌨️ Teclado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Focus en handles con Tab</p>
            <p>• Flechas para redimensionar con teclado</p>
            <p>• Enter para activar/desactivar resize</p>
            <p>• Completamente accesible</p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>♿ Accesibilidad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>✓ <strong>Keyboard navigation</strong> - Redimensionar con teclado</p>
          <p>✓ <strong>ARIA labels</strong> - Roles y labels apropiados</p>
          <p>✓ <strong>Focus visible</strong> - Indicadores claros de foco</p>
          <p>✓ <strong>Screen reader</strong> - Anuncia cambios de tamaño</p>
        </CardContent>
      </Card>

      <Separator />

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Composición</CardTitle>
          <CardDescription>Componentes shadcn/ui utilizados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">ResizablePanelGroup</Badge>
              Contenedor de paneles
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">ResizablePanel</Badge>
              Panel individual redimensionable
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">ResizableHandle</Badge>
              Handle arrastrable entre paneles
            </p>
            <Separator className="my-3" />
            <p className="text-xs text-muted-foreground">
              Basado en react-resizable-panels. Ideal para aplicaciones con layouts complejos
              como IDEs, dashboards y herramientas de productividad.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
