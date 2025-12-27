import { TextareaAutoresize } from "../ui/textarea-autoresize";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { AlignLeft } from "lucide-react";

export function TextareaAutoresizePage() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("Este es un texto inicial.\nOcupa varias líneas.\nPuedes editar y agregar más.");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <h1 className="text-foreground">Textarea Autoresize</h1>
          <Badge variant="secondary">Forms</Badge>
          <Badge variant="outline" className="gap-1">
            <AlignLeft className="size-3" />
            NEW
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Textarea que se ajusta automáticamente en altura según el contenido. Ideal para
          comentarios, descripciones y campos de texto que necesitan crecer dinámicamente.
        </p>
      </div>

      {/* Preview Principal */}
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            Textarea con auto-resize activo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-foreground font-medium">Escribe un comentario</label>
            <TextareaAutoresize
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              placeholder="El textarea crecerá automáticamente mientras escribes..."
              minRows={3}
              maxRows={8}
            />
            <p className="text-muted-foreground text-xs">
              Caracteres: {value1.length}
            </p>
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
          {/* Con contenido inicial */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Con contenido inicial</label>
            <p className="text-muted-foreground text-sm">
              Textarea que ya tiene contenido y se ajusta automáticamente.
            </p>
            <TextareaAutoresize
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              minRows={2}
              maxRows={6}
            />
          </div>

          {/* Mínimo y máximo de filas */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">2 filas mínimo, 5 máximo</label>
            <p className="text-muted-foreground text-sm">
              Control de altura con minRows y maxRows.
            </p>
            <TextareaAutoresize
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              placeholder="Este textarea tiene 2 filas mínimo y 5 máximo..."
              minRows={2}
              maxRows={5}
            />
          </div>

          {/* Para mensajes largos */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Para mensajes largos</label>
            <p className="text-muted-foreground text-sm">
              Textarea con más espacio vertical (4-12 filas).
            </p>
            <TextareaAutoresize
              value={value4}
              onChange={(e) => setValue4(e.target.value)}
              placeholder="Escribe tu mensaje aquí. Este campo puede crecer hasta 12 líneas..."
              minRows={4}
              maxRows={12}
            />
          </div>

          {/* Deshabilitado */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Deshabilitado</label>
            <p className="text-muted-foreground text-sm">
              Estado deshabilitado del componente.
            </p>
            <TextareaAutoresize
              value="Este textarea está deshabilitado y no se puede editar."
              disabled
              minRows={3}
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
            {/* Comentarios */}
            <div className="space-y-3">
              <h3 className="text-foreground font-medium">Comentarios</h3>
              <p className="text-muted-foreground text-sm">
                Para sistemas de comentarios que se ajustan al contenido.
              </p>
              <TextareaAutoresize
                placeholder="Escribe tu comentario..."
                minRows={2}
                maxRows={6}
              />
            </div>

            {/* Descripción de productos */}
            <div className="space-y-3">
              <h3 className="text-foreground font-medium">Descripción de Producto</h3>
              <p className="text-muted-foreground text-sm">
                Ideal para formularios de creación de productos.
              </p>
              <TextareaAutoresize
                placeholder="Describe las características del producto..."
                minRows={3}
                maxRows={8}
              />
            </div>

            {/* Notas */}
            <div className="space-y-3">
              <h3 className="text-foreground font-medium">Notas Internas</h3>
              <p className="text-muted-foreground text-sm">
                Para sistemas de notas que crecen con el contenido.
              </p>
              <TextareaAutoresize
                placeholder="Agrega notas internas..."
                minRows={2}
                maxRows={10}
              />
            </div>

            {/* Mensajes */}
            <div className="space-y-3">
              <h3 className="text-foreground font-medium">Mensajes</h3>
              <p className="text-muted-foreground text-sm">
                Para chats y sistemas de mensajería.
              </p>
              <TextareaAutoresize
                placeholder="Escribe un mensaje..."
                minRows={1}
                maxRows={4}
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
              <code>{`import { TextareaAutoresize } from "@/components/ui/textarea-autoresize";
import { useState } from "react";

export function MyForm() {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    console.log("Comentario:", comment);
  };

  return (
    <div>
      <label>Comentario</label>
      <TextareaAutoresize
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escribe tu comentario..."
        minRows={3}
        maxRows={10}
      />
      <button onClick={handleSubmit}>
        Enviar
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
                  <td className="p-2 font-mono">minRows</td>
                  <td className="p-2">number</td>
                  <td className="p-2">3</td>
                  <td className="p-2">Número mínimo de filas visibles</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">maxRows</td>
                  <td className="p-2">number</td>
                  <td className="p-2">10</td>
                  <td className="p-2">Número máximo de filas antes de scroll</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">value</td>
                  <td className="p-2">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Valor controlado del textarea</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">onChange</td>
                  <td className="p-2">(e) =&gt; void</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Callback cuando cambia el valor</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">placeholder</td>
                  <td className="p-2">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Texto de placeholder</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">disabled</td>
                  <td className="p-2">boolean</td>
                  <td className="p-2">false</td>
                  <td className="p-2">Deshabilita el textarea</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">className</td>
                  <td className="p-2">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Clases CSS adicionales</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">...props</td>
                  <td className="p-2">TextareaHTMLAttributes</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Todas las props HTML de textarea</td>
                </tr>
              </tbody>
            </table>
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
              <span>Auto-ajuste de altura en tiempo real</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Control de altura mínima y máxima (minRows/maxRows)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Scrollbar automático cuando excede maxRows</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Funciona con contenido inicial</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Respeta tokens de diseño (border, padding, etc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Compatible con modo claro y oscuro</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Misma API que textarea estándar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Performance optimizado con useCallback</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
