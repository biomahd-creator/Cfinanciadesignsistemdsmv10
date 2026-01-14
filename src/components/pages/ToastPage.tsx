import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { toast } from "sonner@2.0.3";
import { 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  AlertTriangle,
  Loader2,
  X
} from "lucide-react";

export function ToastPage() {
  const showSuccessToast = () => {
    toast.success("Operación exitosa", {
      description: "Los cambios se han guardado correctamente.",
      duration: 3000,
    });
  };

  const showErrorToast = () => {
    toast.error("Error al procesar", {
      description: "No se pudo completar la operación. Intenta nuevamente.",
      duration: 4000,
    });
  };

  const showInfoToast = () => {
    toast.info("Nueva actualización disponible", {
      description: "Hay una nueva versión del sistema disponible para instalar.",
      duration: 5000,
    });
  };

  const showWarningToast = () => {
    toast.warning("Advertencia importante", {
      description: "Esta acción no se puede deshacer. ¿Estás seguro?",
      duration: 5000,
    });
  };

  const showLoadingToast = () => {
    const loadingId = toast.loading("Procesando...", {
      description: "Por favor espera mientras se completa la operación.",
    });

    // Simular una operación asíncrona
    setTimeout(() => {
      toast.success("¡Completado!", {
        id: loadingId,
        description: "La operación finalizó exitosamente.",
      });
    }, 3000);
  };

  const showPromiseToast = () => {
    const promise = new Promise<{ name: string }>((resolve) =>
      setTimeout(() => resolve({ name: "Usuario" }), 2000)
    );

    toast.promise(promise, {
      loading: "Cargando datos...",
      success: (data) => `¡Hola, ${data.name}!`,
      error: "Error al cargar los datos",
    });
  };

  const showCustomToast = () => {
    toast.custom(
      (t) => (
        <Card className="shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary rounded-full p-2">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <CardTitle className="text-base">Toast personalizado</CardTitle>
                  <CardDescription>
                    Este es un toast completamente personalizado con estilos propios.
                  </CardDescription>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={() => toast.dismiss(t)}
              >
                <X className="size-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Button size="sm" onClick={() => toast.dismiss(t)}>
              Entendido
            </Button>
          </CardContent>
        </Card>
      ),
      { duration: 5000 }
    );
  };

  const showActionToast = () => {
    toast("Archivo eliminado", {
      description: "El documento ha sido movido a la papelera.",
      action: {
        label: "Deshacer",
        onClick: () => toast.success("Acción deshecha"),
      },
      duration: 5000,
    });
  };

  const showRichToast = () => {
    toast(
      <div className="flex items-start gap-3">
        <div className="bg-primary/10 text-primary rounded-full p-2">
          <Info className="size-5" />
        </div>
        <div className="flex-1 space-y-1">
          <p className="font-medium">Toast con contenido rico</p>
          <p className="text-muted-foreground text-sm">
            Puedes incluir cualquier contenido React personalizado dentro del toast.
          </p>
          <div className="flex gap-2 pt-2">
            <Button size="sm" variant="default">
              Aceptar
            </Button>
            <Button size="sm" variant="outline">
              Cancelar
            </Button>
          </div>
        </div>
      </div>,
      { duration: 10000 }
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <h1 className="text-foreground">Toast (Sonner)</h1>
          <Badge variant="secondary">Feedback</Badge>
        </div>
        <p className="text-muted-foreground">
          Sistema de notificaciones toast con múltiples variantes y estados. Basado en Sonner,
          una librería de toasts moderna y accesible.
        </p>
      </div>

      {/* Toast Types */}
      <Card>
        <CardHeader>
          <CardTitle>Tipos de Toast</CardTitle>
          <CardDescription>
            Diferentes variantes según el tipo de mensaje
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600 size-5" />
                <h3 className="font-medium">Success</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Para operaciones exitosas y confirmaciones positivas.
              </p>
              <Button onClick={showSuccessToast} className="w-full">
                Mostrar Success
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="text-destructive size-5" />
                <h3 className="font-medium">Error</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Para errores y operaciones fallidas.
              </p>
              <Button onClick={showErrorToast} variant="destructive" className="w-full">
                Mostrar Error
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Info className="text-blue-600 size-5" />
                <h3 className="font-medium">Info</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Para información general y actualizaciones.
              </p>
              <Button onClick={showInfoToast} variant="secondary" className="w-full">
                Mostrar Info
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-orange-600 size-5" />
                <h3 className="font-medium">Warning</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Para advertencias y acciones que requieren atención.
              </p>
              <Button onClick={showWarningToast} variant="outline" className="w-full">
                Mostrar Warning
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced States */}
      <Card>
        <CardHeader>
          <CardTitle>Estados Avanzados</CardTitle>
          <CardDescription>
            Loading, promise y estados personalizados
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Loader2 className="text-muted-foreground size-5 animate-spin" />
                <h3 className="font-medium">Loading</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Muestra un estado de carga que se actualiza al completar.
              </p>
              <Button onClick={showLoadingToast} variant="outline" className="w-full">
                Mostrar Loading
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Loader2 className="text-primary size-5" />
                <h3 className="font-medium">Promise</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Toast que se actualiza automáticamente según el estado de una promesa.
              </p>
              <Button onClick={showPromiseToast} variant="outline" className="w-full">
                Mostrar Promise
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary size-5" />
                <h3 className="font-medium">Custom</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Toast completamente personalizado con tu propio contenido.
              </p>
              <Button onClick={showCustomToast} variant="outline" className="w-full">
                Mostrar Custom
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Features */}
      <Card>
        <CardHeader>
          <CardTitle>Funcionalidades Interactivas</CardTitle>
          <CardDescription>
            Toasts con acciones y contenido rico
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-medium">Con Acción</h3>
              <p className="text-muted-foreground text-sm">
                Toast con un botón de acción (ej: Deshacer).
              </p>
              <Button onClick={showActionToast} variant="outline" className="w-full">
                Mostrar con Acción
              </Button>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Contenido Rico</h3>
              <p className="text-muted-foreground text-sm">
                Toast con contenido React personalizado y múltiples acciones.
              </p>
              <Button onClick={showRichToast} variant="outline" className="w-full">
                Mostrar Contenido Rico
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Example */}
      <Card>
        <CardHeader>
          <CardTitle>Uso Básico</CardTitle>
          <CardDescription>Implementación en tu aplicación</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-md p-4">
            <pre className="text-sm">
              <code>{`import { toast } from "sonner@2.0.3";

// Success
toast.success("Operación exitosa", {
  description: "Los cambios se han guardado.",
});

// Error
toast.error("Error al procesar", {
  description: "Intenta nuevamente.",
});

// Info
toast.info("Nueva actualización");

// Warning
toast.warning("Acción irreversible");

// Loading
const id = toast.loading("Procesando...");
// Luego actualizar:
toast.success("¡Completado!", { id });

// Promise
toast.promise(fetchData(), {
  loading: "Cargando...",
  success: (data) => "¡Éxito!",
  error: "Error al cargar",
});

// Con acción
toast("Archivo eliminado", {
  action: {
    label: "Deshacer",
    onClick: () => console.log("Deshacer"),
  },
});`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Propiedades</CardTitle>
          <CardDescription>Opciones de configuración disponibles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Propiedad</th>
                  <th className="text-left p-2">Tipo</th>
                  <th className="text-left p-2">Default</th>
                  <th className="text-left p-2">Descripción</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground text-sm">
                <tr className="border-b">
                  <td className="p-2 font-mono">description</td>
                  <td className="p-2">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Texto descriptivo adicional</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">duration</td>
                  <td className="p-2">number</td>
                  <td className="p-2">4000</td>
                  <td className="p-2">Duración en milisegundos</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">action</td>
                  <td className="p-2">object</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Botón de acción con label y onClick</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">position</td>
                  <td className="p-2">string</td>
                  <td className="p-2">bottom-right</td>
                  <td className="p-2">Posición del toast en pantalla</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">id</td>
                  <td className="p-2">string | number</td>
                  <td className="p-2">auto</td>
                  <td className="p-2">ID único para actualizar el toast</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">dismissible</td>
                  <td className="p-2">boolean</td>
                  <td className="p-2">true</td>
                  <td className="p-2">Permite cerrar el toast manualmente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
