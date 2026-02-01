import { ComponentShowcase } from "../components/ui/component-showcase";
import { Button } from "../components/ui/button";
import { Mail, Loader2, ChevronRight, Download } from "lucide-react";

export function ButtonPage() {
  return (
    <ComponentShowcase
      title="Button"
      description="Displays a button or a component that looks like a button."
      category="Actions"
      
      // Main Preview
      preview={
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      }
      
      // Main Code
      code={`import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}`}
      
      // Usage
      usage="Importa el componente Button desde @/components/ui/button y úsalo con diferentes variantes según tu necesidad de diseño."
      usageCode={`import { Button } from "@/components/ui/button";

function MyComponent() {
  return (
    <Button onClick={() => console.log("Clicked!")}>
      Click me
    </Button>
  );
}`}
      
      // Props Documentation
      props={[
        {
          name: "variant",
          type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
          default: '"default"',
          description: "Estilo visual del botón",
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg" | "icon"',
          default: '"default"',
          description: "Tamaño del botón",
        },
      ]}
      
      // Examples
      examples={[
        {
          title: "With Icon",
          description: "Botones con iconos de Lucide React",
          preview: (
            <div className="flex flex-wrap gap-4">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";

export function ButtonWithIcon() {
  return (
    <div className="flex gap-4">
      <Button>
        <Mail className="mr-2 h-4 w-4" />
        Send Email
      </Button>
    </div>
  );
}`,
        },
        {
          title: "Loading State",
          description: "Botón con estado de carga utilizando el icono Loader2",
          preview: (
            <div className="flex flex-wrap gap-4">
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}`,
        },
        {
          title: "Sizes",
          description: "Diferentes tamaños disponibles para el botón",
          preview: (
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";

export function ButtonSizes() {
  return (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`,
        },
      ]}
    />
  );
}
