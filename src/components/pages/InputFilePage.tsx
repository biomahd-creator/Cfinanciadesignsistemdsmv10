import { InputFile } from "../ui/input-file";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
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
          File upload component with drag & drop, preview of selected files,
          and support for multiple files.
        </p>
      </div>

      {/* Preview Principal */}
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            File input with all features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-foreground font-medium">Single file</label>
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
          <CardTitle>Variants</CardTitle>
          <CardDescription>
            Different component configurations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Múltiples archivos */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Multiple files</label>
            <p className="text-muted-foreground text-sm">
              Allows selecting multiple files with a defined maximum.
            </p>
            <InputFile
              onFilesChange={setFiles2}
              maxFiles={5}
              placeholder="Select up to 5 files"
            />
          </div>

          {/* Sin preview */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Without preview</label>
            <p className="text-muted-foreground text-sm">
              File input without showing the list of selected files.
            </p>
            <InputFile
              onFilesChange={setFiles3}
              showPreview={false}
            />
          </div>

          {/* Con tipo específico */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">PDFs only</label>
            <p className="text-muted-foreground text-sm">
              Input restricted to specific file types.
            </p>
            <InputFile
              accept=".pdf,application/pdf"
              placeholder="Select PDF files"
            />
          </div>

          {/* Disabled */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Disabled</label>
            <p className="text-muted-foreground text-sm">
              Disabled state of the component.
            </p>
            <InputFile
              disabled
              placeholder="Disabled input"
            />
          </div>
        </CardContent>
      </Card>

      {/* Uso */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Usage</CardTitle>
          <CardDescription>Component implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-md p-4">
            <pre className="text-sm">
              <code>{`import { InputFile } from "@/components/ui/input-file";
import { useState } from "react";

export function MyForm() {
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = () => {
    console.log("Selected files:", files);
  };

  return (
    <div>
      <InputFile
        onFilesChange={setFiles}
        maxFiles={3}
        accept="image/*,.pdf"
        placeholder="Select images or PDFs"
      />
      <button onClick={handleSubmit}>
        Upload files
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
          <CardTitle>Properties</CardTitle>
          <CardDescription>Component API</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Prop</th>
                  <th className="text-left p-2">Type</th>
                  <th className="text-left p-2">Default</th>
                  <th className="text-left p-2">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground text-sm">
                <tr className="border-b">
                  <td className="p-2 font-mono">onFilesChange</td>
                  <td className="p-2">(files: File[]) =&gt; void</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Callback when files change</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">maxFiles</td>
                  <td className="p-2">number</td>
                  <td className="p-2">1</td>
                  <td className="p-2">Maximum number of allowed files</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">showPreview</td>
                  <td className="p-2">boolean</td>
                  <td className="p-2">true</td>
                  <td className="p-2">Show list of selected files</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">accept</td>
                  <td className="p-2">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Allowed file types (e.g., .pdf, image/*)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">disabled</td>
                  <td className="p-2">boolean</td>
                  <td className="p-2">false</td>
                  <td className="p-2">Disable the input</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">className</td>
                  <td className="p-2">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Características */}
      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>Included functionalities</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Drag & drop of files</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Click to open file selector</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Preview with file name and size</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Button to remove individual files</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Support for multiple files</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>File type restriction with accept</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Fully accessible with keyboard navigation</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}