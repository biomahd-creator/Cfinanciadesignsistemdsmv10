import { useState } from "react";
import {
  User,
  Building2,
  CreditCard,
  Users,
  FileText,
  Shield,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
} from "lucide-react";
import { StepIndicator, Step } from "../../advanced/StepIndicator";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";

/**
 * Showcase del StepIndicator component (DSM Official)
 * Demuestra los diferentes estados y variantes del stepper oficial
 */

export function StepperShowcase() {
  const [currentStep, setCurrentStep] = useState(1); // Datos de la Empresa (index 1)

  // Configuración de los 6 pasos según la imagen
  const steps: Step[] = [
    {
      id: "user-info",
      title: "Información del Usuario",
      description: "Datos personales del solicitante",
      icon: <User className="h-5 w-5" />,
    },
    {
      id: "company-data",
      title: "Datos de la Empresa",
      description: "Información corporativa",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      id: "bank-accounts",
      title: "Cuentas Bancarias",
      description: "Información financiera",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      id: "shareholders",
      title: "Composición Accionaria",
      description: "Estructura societaria",
      icon: <Users className="h-5 w-5" />,
    },
    {
      id: "financial-statements",
      title: "Estados Financieros",
      description: "Reportes contables",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      id: "sarlaft",
      title: "SARLAFT",
      description: "Sistema antilavado de activos",
      icon: <Shield className="h-5 w-5" />,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    // Permitir navegar solo a pasos completados o el actual
    if (stepIndex <= currentStep) {
      setCurrentStep(stepIndex);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al Playground
        </Button>

        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            Step Indicator Showcase (DSM Official)
          </h1>
          <p className="text-muted-foreground">
            Componente oficial del DSM para procesos multi-paso con estados: pending, active, completed
          </p>
        </div>

        {/* Main Example - Factoring Nueva Operación */}
        <Card className="shadow-md">
          <CardHeader className="border-b border-border">
            <div className="flex items-baseline gap-2">
              <CardTitle className="text-2xl font-semibold">Factoring</CardTitle>
              <span className="text-muted-foreground font-normal">Nueva Operación</span>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {/* Stepper - Horizontal Default */}
              <StepIndicator
                steps={steps}
                currentStep={currentStep}
                orientation="horizontal"
                variant="default"
                showProgress={true}
                showLabels={true}
                clickable={true}
                onStepClick={handleStepClick}
              />

              {/* Content Area */}
              <Card className="bg-muted/30 border-dashed">
                <CardContent className="p-12 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center">
                      {steps[currentStep].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {steps[currentStep].title}
                      </h3>
                      <p className="text-muted-foreground">
                        {steps[currentStep].description}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Paso {currentStep + 1} de {steps.length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Anterior
                </Button>

                <div className="text-sm text-muted-foreground">
                  Paso {currentStep + 1} de {steps.length}
                </div>

                <Button
                  onClick={handleNext}
                  disabled={currentStep === steps.length - 1}
                  className="gap-2 bg-primary text-secondary hover:bg-primary/90"
                >
                  Siguiente
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Variant: Compact */}
        <Card>
          <CardHeader>
            <CardTitle>Variante: Compact</CardTitle>
            <CardDescription>Versión compacta sin labels, ideal para espacios reducidos</CardDescription>
          </CardHeader>
          <CardContent>
            <StepIndicator
              steps={steps}
              currentStep={currentStep}
              orientation="horizontal"
              variant="compact"
              showProgress={true}
              showLabels={false}
              clickable={false}
            />
          </CardContent>
        </Card>

        {/* Variant: Minimal */}
        <Card>
          <CardHeader>
            <CardTitle>Variante: Minimal</CardTitle>
            <CardDescription>Solo barra de progreso con contador</CardDescription>
          </CardHeader>
          <CardContent>
            <StepIndicator
              steps={steps}
              currentStep={currentStep}
              orientation="horizontal"
              variant="minimal"
              showProgress={true}
            />
          </CardContent>
        </Card>

        {/* Variant: Vertical */}
        <Card>
          <CardHeader>
            <CardTitle>Variante: Vertical</CardTitle>
            <CardDescription>Orientación vertical para sidebars o formularios largos</CardDescription>
          </CardHeader>
          <CardContent>
            <StepIndicator
              steps={steps.slice(0, 4)} // Mostrar solo 4 pasos para no ocupar mucho espacio
              currentStep={Math.min(currentStep, 3)}
              orientation="vertical"
              variant="default"
              showLabels={true}
              clickable={true}
              onStepClick={handleStepClick}
            />
          </CardContent>
        </Card>

        {/* All States Example */}
        <Card>
          <CardHeader>
            <CardTitle>Todos los Estados</CardTitle>
            <CardDescription>Demostración de estados: pending, active, completed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* All Completed */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3">Todos Completados</p>
              <StepIndicator
                steps={steps.slice(0, 3)}
                currentStep={2}
                orientation="horizontal"
                variant="default"
                showProgress={false}
                showLabels={true}
              />
            </div>

            {/* First Active */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3">Primer Paso Activo</p>
              <StepIndicator
                steps={steps.slice(0, 3)}
                currentStep={0}
                orientation="horizontal"
                variant="default"
                showProgress={false}
                showLabels={true}
              />
            </div>

            {/* Middle Active */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3">Paso Intermedio Activo</p>
              <StepIndicator
                steps={steps.slice(0, 3)}
                currentStep={1}
                orientation="horizontal"
                variant="default"
                showProgress={false}
                showLabels={true}
              />
            </div>
          </CardContent>
        </Card>

        {/* Props Documentation */}
        <Card>
          <CardHeader>
            <CardTitle>Propiedades del Componente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-4 font-semibold">Prop</th>
                    <th className="text-left py-2 px-4 font-semibold">Tipo</th>
                    <th className="text-left py-2 px-4 font-semibold">Default</th>
                    <th className="text-left py-2 px-4 font-semibold">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-mono text-xs">steps</td>
                    <td className="py-2 px-4">Step[]</td>
                    <td className="py-2 px-4">-</td>
                    <td className="py-2 px-4">Array de pasos del proceso</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-mono text-xs">currentStep</td>
                    <td className="py-2 px-4">number</td>
                    <td className="py-2 px-4">-</td>
                    <td className="py-2 px-4">Índice del paso actual (0-based)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-mono text-xs">orientation</td>
                    <td className="py-2 px-4">"horizontal" | "vertical"</td>
                    <td className="py-2 px-4">"horizontal"</td>
                    <td className="py-2 px-4">Orientación del stepper</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-mono text-xs">variant</td>
                    <td className="py-2 px-4">"default" | "compact" | "minimal"</td>
                    <td className="py-2 px-4">"default"</td>
                    <td className="py-2 px-4">Estilo visual del componente</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-mono text-xs">showProgress</td>
                    <td className="py-2 px-4">boolean</td>
                    <td className="py-2 px-4">true</td>
                    <td className="py-2 px-4">Mostrar barra de progreso</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-mono text-xs">showLabels</td>
                    <td className="py-2 px-4">boolean</td>
                    <td className="py-2 px-4">true</td>
                    <td className="py-2 px-4">Mostrar títulos de los pasos</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-mono text-xs">clickable</td>
                    <td className="py-2 px-4">boolean</td>
                    <td className="py-2 px-4">false</td>
                    <td className="py-2 px-4">Permitir navegación haciendo clic</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-mono text-xs">onStepClick</td>
                    <td className="py-2 px-4">(index: number) =&gt; void</td>
                    <td className="py-2 px-4">-</td>
                    <td className="py-2 px-4">Callback al hacer clic en un paso</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Usage Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Instrucciones de Uso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">1. Importar el componente</h4>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`import { StepIndicator, Step } from "@/components/advanced/StepIndicator";`}
              </pre>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-2">2. Definir los pasos</h4>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`const steps: Step[] = [
  {
    id: "step-1",
    title: "Información del Usuario",
    description: "Datos personales del solicitante",
    icon: <User className="h-5 w-5" />
  },
  {
    id: "step-2",
    title: "Datos de la Empresa",
    description: "Información corporativa",
    icon: <Building2 className="h-5 w-5" />
  },
  // ...más pasos
];`}
              </pre>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-2">3. Usar el componente</h4>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`<StepIndicator
  steps={steps}
  currentStep={currentStep}
  orientation="horizontal"
  variant="default"
  showProgress={true}
  showLabels={true}
  clickable={true}
  onStepClick={(index) => setCurrentStep(index)}
/>`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Design Tokens */}
        <Card>
          <CardHeader>
            <CardTitle>Tokens de Diseño Utilizados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="space-y-1">
                <div className="w-full h-12 rounded bg-primary flex items-center justify-center">
                  <span className="text-secondary font-medium">bg-primary</span>
                </div>
                <p className="text-xs text-muted-foreground">Paso activo/completado</p>
              </div>
              <div className="space-y-1">
                <div className="w-full h-12 rounded border-2 border-primary flex items-center justify-center">
                  <span className="text-foreground font-medium">border-primary</span>
                </div>
                <p className="text-xs text-muted-foreground">Borde paso activo</p>
              </div>
              <div className="space-y-1">
                <div className="w-full h-12 rounded border-2 border-muted flex items-center justify-center">
                  <span className="text-foreground font-medium">border-muted</span>
                </div>
                <p className="text-xs text-muted-foreground">Borde paso pendiente</p>
              </div>
              <div className="space-y-1">
                <div className="w-full h-12 rounded bg-muted flex items-center justify-center">
                  <span className="text-foreground font-medium">bg-muted</span>
                </div>
                <p className="text-xs text-muted-foreground">Fondo paso pendiente</p>
              </div>
              <div className="space-y-1">
                <div className="w-full h-12 rounded flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">text-muted-foreground</span>
                </div>
                <p className="text-xs text-muted-foreground">Texto pendiente</p>
              </div>
              <div className="space-y-1">
                <div className="w-full h-12 rounded flex items-center justify-center border border-border">
                  <span className="text-foreground font-medium">text-foreground</span>
                </div>
                <p className="text-xs text-muted-foreground">Texto activo/completado</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
