import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Menu, Settings, User, Bell } from "lucide-react";

export function DrawerPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Drawer</h1>
          <Badge>Feedback</Badge>
        </div>
        <p className="text-muted-foreground">
          Panel deslizable desde los bordes de la pantalla, ideal para mobile
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Drawer Básico</h2>
          <p className="text-muted-foreground">Panel desde la parte inferior</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Drawer desde abajo</CardTitle>
            <CardDescription>Comportamiento nativo de mobile</CardDescription>
          </CardHeader>
          <CardContent>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Menu className="h-4 w-4 mr-2" />
                  Abrir Drawer
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Configuración</DrawerTitle>
                  <DrawerDescription>Ajusta tus preferencias</DrawerDescription>
                </DrawerHeader>
                <div className="px-4 py-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Notificaciones</span>
                    <Badge>Habilitado</Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Tema oscuro</span>
                    <Badge variant="outline">Auto</Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Idioma</span>
                    <Badge variant="secondary">Español</Badge>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Guardar cambios</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Ejemplos de Uso</h2>
          <p className="text-muted-foreground">Diferentes contextos del drawer</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Perfil de Usuario
              </CardTitle>
              <CardDescription>Información de cuenta</CardDescription>
            </CardHeader>
            <CardContent>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Ver Perfil
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Tu Perfil</DrawerTitle>
                    <DrawerDescription>Información de tu cuenta</DrawerDescription>
                  </DrawerHeader>
                  <div className="px-4 py-6 space-y-3">
                    <div>
                      <p className="text-sm font-medium">Nombre</p>
                      <p className="text-sm text-muted-foreground">Juan Pérez</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">juan@example.com</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm font-medium">Plan</p>
                      <Badge>Premium</Badge>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Editar Perfil</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cerrar</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notificaciones
              </CardTitle>
              <CardDescription>Centro de notificaciones</CardDescription>
            </CardHeader>
            <CardContent>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Bell className="h-4 w-4 mr-2" />
                    Ver Notificaciones
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Notificaciones</DrawerTitle>
                    <DrawerDescription>3 notificaciones nuevas</DrawerDescription>
                  </DrawerHeader>
                  <div className="px-4 py-6 space-y-4 max-h-[300px] overflow-y-auto">
                    <div className="flex gap-3">
                      <Badge className="h-fit">Nuevo</Badge>
                      <div>
                        <p className="text-sm font-medium">Nuevo mensaje</p>
                        <p className="text-xs text-muted-foreground">Hace 5 minutos</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex gap-3">
                      <Badge variant="outline" className="h-fit">Info</Badge>
                      <div>
                        <p className="text-sm font-medium">Actualización disponible</p>
                        <p className="text-xs text-muted-foreground">Hace 1 hora</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex gap-3">
                      <Badge variant="secondary" className="h-fit">Sistema</Badge>
                      <div>
                        <p className="text-sm font-medium">Mantenimiento programado</p>
                        <p className="text-xs text-muted-foreground">Hace 2 horas</p>
                      </div>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button variant="outline">Marcar todas como leídas</Button>
                    <DrawerClose asChild>
                      <Button>Cerrar</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">✅ Cuándo usar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Interfaces mobile-first</p>
            <p>• Menús de navegación en mobile</p>
            <p>• Filtros y opciones secundarias</p>
            <p>• Información contextual adicional</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">💡 Diferencia con Sheet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• <strong>Drawer:</strong> Desde abajo, gestualidad mobile</p>
            <p>• <strong>Sheet:</strong> Desde los lados, más desktop</p>
            <p>• Drawer tiene "pull to close"</p>
            <p>• Sheet es mejor para contenido extenso</p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>♿ Accesibilidad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>✓ <strong>Dialog role</strong> - ARIA role apropiado</p>
          <p>✓ <strong>Focus trap</strong> - Mantiene el foco dentro del drawer</p>
          <p>✓ <strong>Escape key</strong> - Cierra con tecla Escape</p>
          <p>✓ <strong>Swipe gestures</strong> - Deslizar para cerrar en touch</p>
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
              <Badge variant="outline" className="mr-2">Drawer</Badge>
              Basado en Vaul library de Emil Kowalski
            </p>
            <Separator className="my-3" />
            <p className="text-xs text-muted-foreground">
              El Drawer es ideal para mobile-first experiences. Incluye gestos de deslizamiento,
              animaciones suaves y accesibilidad completa.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
