import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { AlertTriangle, Trash2, LogOut, Info } from "lucide-react";

export function AlertDialogPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Alert Dialog</h1>
          <Badge>Feedback</Badge>
        </div>
        <p className="text-muted-foreground">
          Modal dialog para interrupciones importantes que requieren confirmación del usuario
        </p>
      </div>

      <Separator />

      {/* Basic Alert Dialog */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Alert Dialog Básico</h2>
          <p className="text-muted-foreground">Confirmación simple con dos acciones</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Confirmación de Acción</CardTitle>
            <CardDescription>Pide confirmación antes de realizar una acción destructiva</CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Eliminar Cuenta
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta
                    y removerá todos tus datos de nuestros servidores.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                    Sí, eliminar cuenta
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Different Alert Types */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tipos de Alert Dialog</h2>
          <p className="text-muted-foreground">Diferentes contextos de uso</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Warning Alert */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Advertencia
              </CardTitle>
              <CardDescription>Alert dialog con tono de advertencia</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Ver Advertencia
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      Cambios sin guardar
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Tienes cambios sin guardar. Si continúas, perderás todos los cambios
                      realizados en este documento.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>Continuar sin guardar</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>

          {/* Logout Confirmation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogOut className="h-5 w-5 text-primary" />
                Cerrar Sesión
              </CardTitle>
              <CardDescription>Confirmación de cierre de sesión</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <LogOut className="h-4 w-4 mr-2" />
                    Cerrar Sesión
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>¿Cerrar sesión?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Vas a cerrar tu sesión. Deberás iniciar sesión nuevamente para
                      acceder a tu cuenta.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>Cerrar Sesión</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>

          {/* Info Alert */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Información
              </CardTitle>
              <CardDescription>Alert dialog informativo</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Info className="h-4 w-4 mr-2" />
                    Ver Información
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-blue-600" />
                      Actualización Disponible
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Hay una nueva versión disponible con mejoras de rendimiento y
                      correcciones de bugs. Te recomendamos actualizar ahora.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Más tarde</AlertDialogCancel>
                    <AlertDialogAction>Actualizar Ahora</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>

          {/* Delete Item */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trash2 className="h-5 w-5 text-red-600" />
                Eliminar Item
              </CardTitle>
              <CardDescription>Confirmación de eliminación</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="w-full">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Eliminar Proyecto
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>¿Eliminar proyecto "Website Redesign"?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Esta acción no se puede deshacer. El proyecto y todos sus archivos
                      serán eliminados permanentemente.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>No, mantener</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                      Sí, eliminar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Best Practices */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Best Practices</h2>
          <p className="text-muted-foreground">Recomendaciones de uso</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">✅ Cuándo usar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Acciones destructivas (eliminar, cerrar sin guardar)</p>
              <p>• Decisiones críticas que no se pueden deshacer</p>
              <p>• Confirmaciones importantes que requieren atención</p>
              <p>• Avisos que el usuario debe leer antes de continuar</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">❌ Cuándo NO usar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Mensajes informativos no críticos (usa Toast)</p>
              <p>• Formularios complejos (usa Dialog)</p>
              <p>• Acciones que se pueden deshacer fácilmente</p>
              <p>• Información que no requiere confirmación</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Accessibility Features */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>♿ Accesibilidad</CardTitle>
          <CardDescription>Características de accesibilidad incluidas</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>✓ <strong>Role="alertdialog"</strong> - ARIA role apropiado</p>
          <p>✓ <strong>Focus trap</strong> - El foco se mantiene dentro del dialog</p>
          <p>✓ <strong>Escape key</strong> - Cierra el dialog al presionar Escape</p>
          <p>✓ <strong>aria-describedby</strong> - Descripción accesible</p>
          <p>✓ <strong>Tab navigation</strong> - Navegación por teclado entre acciones</p>
          <p>✓ <strong>Focus restoration</strong> - Restaura el foco al trigger al cerrar</p>
        </CardContent>
      </Card>

      <Separator />

      {/* Composition Info */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Composición</CardTitle>
          <CardDescription>Componentes shadcn/ui utilizados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">AlertDialog</Badge>
              Contenedor principal del dialog
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">AlertDialogTrigger</Badge>
              Botón que abre el dialog
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">AlertDialogContent</Badge>
              Contenido del modal
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">AlertDialogHeader/Footer</Badge>
              Secciones del dialog
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">AlertDialogAction/Cancel</Badge>
              Botones de acción
            </p>
            <Separator className="my-3" />
            <p className="text-xs text-muted-foreground">
              Alert Dialog está construido sobre Radix UI Alert Dialog con estilos de shadcn/ui.
              Incluye gestión de foco, accesibilidad y animaciones predefinidas.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
