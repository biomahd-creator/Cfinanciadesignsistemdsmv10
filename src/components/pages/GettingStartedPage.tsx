import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { BookOpen, Rocket, Palette, Code2, CheckCircle2, ArrowRight } from "lucide-react";
import { Separator } from "../ui/separator";

export function GettingStartedPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <BookOpen className="size-8 text-primary" />
          <h1 className="text-foreground">Getting Started</h1>
          <Badge variant="default" className="bg-primary text-primary-foreground">Quick Start</Badge>
        </div>
        <p className="text-muted-foreground">
          Bienvenido al Design System Manager de C-Financia. Esta guía te ayudará a comenzar a usar 
          nuestro sistema de componentes de forma rápida y efectiva.
        </p>
      </div>

      {/* Quick Navigation */}
      <Card className="elevation-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="size-5 text-primary" />
            Inicio Rápido
          </CardTitle>
          <CardDescription>
            Accede directamente a las secciones principales del DSM
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Button 
              variant="outline" 
              className="justify-start h-auto py-4 px-4 flex-col items-start gap-2 hover:border-primary"
              onClick={() => window.scrollTo({ top: document.getElementById('components')?.offsetTop || 0, behavior: 'smooth' })}
            >
              <div className="flex items-center gap-2 w-full">
                <Code2 className="size-5 text-primary" />
                <span className="font-semibold">Componentes</span>
              </div>
              <span className="text-xs text-muted-foreground text-left">
                110+ componentes listos para usar
              </span>
            </Button>

            <Button 
              variant="outline" 
              className="justify-start h-auto py-4 px-4 flex-col items-start gap-2 hover:border-primary"
            >
              <div className="flex items-center gap-2 w-full">
                <Palette className="size-5 text-primary" />
                <span className="font-semibold">Design Tokens</span>
              </div>
              <span className="text-xs text-muted-foreground text-left">
                Colores, tipografía y espaciado
              </span>
            </Button>

            <Button 
              variant="outline" 
              className="justify-start h-auto py-4 px-4 flex-col items-start gap-2 hover:border-primary"
            >
              <div className="flex items-center gap-2 w-full">
                <CheckCircle2 className="size-5 text-primary" />
                <span className="font-semibold">Best Practices</span>
              </div>
              <span className="text-xs text-muted-foreground text-left">
                Guías y patrones recomendados
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* What is DSM */}
      <Card>
        <CardHeader>
          <CardTitle>¿Qué es el Design System Manager?</CardTitle>
          <CardDescription>
            Un sistema de diseño completo para C-Financia
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            El DSM es una colección de componentes reutilizables, patrones de diseño y tokens 
            que aseguran consistencia visual y funcional en todas las aplicaciones de C-Financia.
          </p>
          
          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Características principales:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                <span><strong>110+ Componentes:</strong> Basados en shadcn/ui y Radix UI</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                <span><strong>WCAG 2.1 AA:</strong> 98% de cumplimiento en accesibilidad</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                <span><strong>Tema Personalizado:</strong> Colores corporativos #DEFB49 y #1C2D3A</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                <span><strong>TypeScript:</strong> Tipado completo para mayor seguridad</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                <span><strong>Dark Mode:</strong> Soporte completo para modo oscuro</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* How to Use */}
      <Card id="components">
        <CardHeader>
          <CardTitle>Cómo usar los componentes</CardTitle>
          <CardDescription>
            Guía paso a paso para integrar componentes en tu proyecto
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-semibold">
                1
              </div>
              <h3 className="font-semibold text-foreground">Navega por la librería</h3>
            </div>
            <p className="text-muted-foreground pl-11">
              Explora las 7 secciones del sidebar: Actions, Forms, Navigation, Data Display, 
              Feedback, Layout, y Advanced Patterns.
            </p>
          </div>

          <Separator />

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-semibold">
                2
              </div>
              <h3 className="font-semibold text-foreground">Selecciona un componente</h3>
            </div>
            <p className="text-muted-foreground pl-11">
              Haz clic en cualquier componente para ver ejemplos interactivos, props, 
              variantes y código de uso.
            </p>
          </div>

          <Separator />

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-semibold">
                3
              </div>
              <h3 className="font-semibold text-foreground">Copia el código</h3>
            </div>
            <p className="text-muted-foreground pl-11">
              Cada componente incluye código copiable listo para usar en tu proyecto React + Tailwind.
            </p>
            <div className="bg-muted/50 rounded-md p-4 ml-11">
              <pre className="text-sm">
                <code>{`import { Button } from "@/components/ui/button";

export function MyComponent() {
  return (
    <Button variant="default">
      Click me
    </Button>
  );
}`}</code>
              </pre>
            </div>
          </div>

          <Separator />

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-semibold">
                4
              </div>
              <h3 className="font-semibold text-foreground">Personaliza según necesites</h3>
            </div>
            <p className="text-muted-foreground pl-11">
              Todos los componentes aceptan props adicionales y clases CSS para adaptarse 
              a tus necesidades específicas.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Recursos adicionales</CardTitle>
          <CardDescription>
            Documentación y herramientas complementarias
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Design Foundations</h4>
              <p className="text-sm text-muted-foreground">
                Explora los fundamentos del sistema: colores, tipografía, elevación y grid.
              </p>
              <Button variant="link" className="p-0 h-auto">
                Ver Design Foundations <ArrowRight className="ml-1 size-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Theme Customizer</h4>
              <p className="text-sm text-muted-foreground">
                Personaliza colores, radios, sombras y más en tiempo real.
              </p>
              <Button variant="link" className="p-0 h-auto">
                Abrir Customizer <ArrowRight className="ml-1 size-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Atomic Design</h4>
              <p className="text-sm text-muted-foreground">
                Metodología de diseño desde átomos hasta páginas completas.
              </p>
              <Button variant="link" className="p-0 h-auto">
                Explorar Atomic Design <ArrowRight className="ml-1 size-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Accessibility</h4>
              <p className="text-sm text-muted-foreground">
                98% de cumplimiento WCAG 2.1 Nivel AA con navegación por teclado.
              </p>
              <Button variant="link" className="p-0 h-auto">
                Ver Accessibility <ArrowRight className="ml-1 size-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="elevation-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Siguientes pasos</CardTitle>
          <CardDescription>
            Recomendaciones para aprovechar al máximo el DSM
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p className="text-muted-foreground">
                Explora la <strong>Library</strong> completa de 110+ componentes organizados por categoría
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p className="text-muted-foreground">
                Revisa los <strong>Design Foundations</strong> para entender los tokens del sistema
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p className="text-muted-foreground">
                Consulta <strong>Real Pages</strong> para ver ejemplos completos de páginas funcionales
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p className="text-muted-foreground">
                Verifica <strong>Quality & Metrics</strong> para conocer el estado de madurez del sistema
              </p>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex gap-3">
            <Button className="gap-2">
              <Code2 className="size-4" />
              Explorar Componentes
            </Button>
            <Button variant="outline" className="gap-2">
              <Palette className="size-4" />
              Ver Design Tokens
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
