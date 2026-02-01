import { InputFile } from "../components/ui/input-file";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useState } from "react";
import { FileText } from "lucide-react";

export function InputFilePage() {
  const [files1, setFiles1] = useState<File[]>([]);
  const [files2, setFiles2] = useState<File[]>([]);
  const [files3, setFiles3] = useState<File[]>([]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <h1 className="text-foreground">Input File</h1>
          <Badge variant="secondary">Forms</Badge>
          <Badge variant="outline" className="gap-1">
            <FileText className="size-3" />
            NEW
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Componente para carga de archivos con drag & drop, preview de archivos seleccionados
          y soporte para múltiples archivos.
        </p>
      </div>

      {/* Preview Principal */}
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            Input de archivo con todas las características
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-foreground font-medium">Archivo único</label>
            <InputFile
              onFilesChange={setFiles1}
              maxFiles={1}
              accept="image/*"
            />
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
          {/* Múltiples archivos */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Múltiples archivos</label>
            <p className="text-muted-foreground text-sm">
              Permite seleccionar múltiples archivos con un máximo definido.
            </p>
            <InputFile
              onFilesChange={setFiles2}
              maxFiles={5}
              placeholder="Selecciona hasta 5 archivos"
            />
          </div>

          {/* Sin preview */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Sin preview</label>
            <p className="text-muted-foreground text-sm">
              Input de archivo sin mostrar la lista de archivos seleccionados.
            </p>
            <InputFile
              onFilesChange={setFiles3}
              showPreview={false}
            />
          </div>

          {/* Con tipo específico */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Solo PDFs</label>
            <p className="text-muted-foreground text-sm">
              Input restringido a tipos de archivo específicos.
            </p>
            <InputFile
              accept=".pdf,application/pdf"
              placeholder="Selecciona archivos PDF"
            />
          </div>

          {/* Disabled */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Deshabilitado</label>
            <p className="text-muted-foreground text-sm">
              Estado deshabilitado del componente.
            </p>
            <InputFile
              disabled
              placeholder="Input deshabilitado"
            />
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
              <code>{`import { InputFile } from "@/components/ui/input-file";
import { useState } from "react";

export function MyForm() {
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = () => {
    console.log("Archivos seleccionados:", files);
  };

  return (
    <div>
      <InputFile
        onFilesChange={setFiles}
        maxFiles={3}
        accept="image/*,.pdf"
        placeholder="Selecciona imágenes o PDFs"
      />
      <button onClick={handleSubmit}>
        Subir archivos
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
                  <td className="p-2 font-mono">onFilesChange</td>
                  <td className="p-2">(files: File[]) =&gt; void</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Callback cuando cambian los archivos</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">maxFiles</td>
                  <td className="p-2">number</td>
                  <td className="p-2">1</td>
                  <td className="p-2">Número máximo de archivos permitidos</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">showPreview</td>
                  <td className="p-2">boolean</td>
                  <td className="p-2">true</td>
                  <td className="p-2">Mostrar lista de archivos seleccionados</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">accept</td>
                  <td className="p-2">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Tipos de archivo permitidos (ej: .pdf, image/*)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">disabled</td>
                  <td className="p-2">boolean</td>
                  <td className="p-2">false</td>
                  <td className="p-2">Deshabilita el input</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">className</td>
                  <td className="p-2">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Clases CSS adicionales</td>
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
              <span>Drag & drop de archivos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Click para abrir selector de archivos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Preview con nombre y tamaño de archivos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Botón para eliminar archivos individuales</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Soporte para archivos múltiples</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Restricción de tipos de archivo con accept</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Totalmente accesible con navegación por teclado</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
