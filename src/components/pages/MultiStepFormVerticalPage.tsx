import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { Check, User, Briefcase, FileText, Mail } from "lucide-react";
import { cn } from "../ui/utils";

interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const steps: Step[] = [
  { id: 1, title: "Información Personal", icon: <User className="h-5 w-5" />, description: "Datos básicos" },
  { id: 2, title: "Información Laboral", icon: <Briefcase className="h-5 w-5" />, description: "Datos profesionales" },
  { id: 3, title: "Documentos", icon: <FileText className="h-5 w-5" />, description: "Carga de archivos" },
  { id: 4, title: "Confirmación", icon: <Mail className="h-5 w-5" />, description: "Revisión final" },
];

export function MultiStepFormVerticalPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    // Step 2
    empresa: "",
    cargo: "",
    antiguedad: "",
    salario: "",
    // Step 3
    documentos: {
      cedula: false,
      certificadoLaboral: false,
      extractoBancario: false,
    },
    // Step 4
    aceptaTerminos: false,
  });

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateDocumento = (doc: string, value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      documentos: {
        ...prev.documentos,
        [doc]: value,
      },
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Formulario enviado:", formData);
    alert("¡Formulario enviado exitosamente!");
  };

  const isStepCompleted = (stepId: number) => stepId < currentStep;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-4xl font-semibold mb-2">Multi-Step Form (Vertical)</h2>
        <p className="text-muted-foreground">
          Ejemplo de formulario multi-paso con stepper vertical a un lado
        </p>
      </div>

      <div className="grid md:grid-cols-[280px,1fr] gap-6">
        {/* Vertical Stepper - Sidebar */}
        <Card className="h-fit md:sticky md:top-6">
          <CardHeader>
            <CardTitle className="text-lg">Progreso</CardTitle>
            <CardDescription>Paso {currentStep} de {steps.length}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-0">
            {steps.map((step, index) => {
              const isActive = step.id === currentStep;
              const isCompleted = isStepCompleted(step.id);
              const isLast = index === steps.length - 1;

              return (
                <div key={step.id} className={cn("relative", !isLast && "pb-8")}>
                  {/* Connecting Line */}
                  {!isLast && (
                    <div 
                      className={cn(
                        "absolute left-8 top-8 bottom-[-2rem] w-0.5 -z-10",
                        isCompleted ? "bg-primary" : "bg-border"
                      )} 
                    />
                  )}

                  {/* Step Item */}
                  <button
                    onClick={() => setCurrentStep(step.id)}
                    className={cn(
                      "w-full text-left p-3 rounded-lg transition-all relative z-10",
                      "flex items-start gap-3",
                      isActive && "bg-primary/10 border-2 border-secondary",
                      !isActive && "hover:bg-muted/50 border-2 border-transparent"
                    )}
                  >
                    {/* Icon/Number Circle */}
                    <div
                      className={cn(
                        "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all bg-card",
                        isCompleted && "bg-primary text-primary-foreground",
                        isActive && !isCompleted && "bg-primary/20 text-secondary",
                        !isActive && !isCompleted && "bg-muted text-muted-foreground"
                      )}
                    >
                      {isCompleted ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        step.icon
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p
                          className={cn(
                            "text-sm font-medium truncate",
                            isActive && "text-secondary font-bold",
                            !isActive && isCompleted && "text-foreground",
                            !isActive && !isCompleted && "text-muted-foreground"
                          )}
                        >
                          {step.title}
                        </p>
                        {isCompleted && (
                          <Badge variant="outline" className="text-xs h-5">
                            <Check className="h-3 w-3" />
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Form Content */}
        <Card>
          <CardHeader>
            <CardTitle>{steps[currentStep - 1].title}</CardTitle>
            <CardDescription>{steps[currentStep - 1].description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Información Personal */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombres">Nombres *</Label>
                    <Input
                      id="nombres"
                      placeholder="Juan Carlos"
                      value={formData.nombres}
                      onChange={(e) => updateFormData("nombres", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellidos">Apellidos *</Label>
                    <Input
                      id="apellidos"
                      placeholder="Pérez González"
                      value={formData.apellidos}
                      onChange={(e) => updateFormData("apellidos", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    placeholder="+57 300 123 4567"
                    value={formData.telefono}
                    onChange={(e) => updateFormData("telefono", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Información Laboral */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa *</Label>
                  <Input
                    id="empresa"
                    placeholder="Nombre de la empresa"
                    value={formData.empresa}
                    onChange={(e) => updateFormData("empresa", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cargo">Cargo Actual *</Label>
                  <Input
                    id="cargo"
                    placeholder="Ej: Gerente de Ventas"
                    value={formData.cargo}
                    onChange={(e) => updateFormData("cargo", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="antiguedad">Antigüedad (años) *</Label>
                  <Select value={formData.antiguedad} onValueChange={(value) => updateFormData("antiguedad", value)}>
                    <SelectTrigger id="antiguedad">
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="menos-1">Menos de 1 año</SelectItem>
                      <SelectItem value="1-3">1 a 3 años</SelectItem>
                      <SelectItem value="3-5">3 a 5 años</SelectItem>
                      <SelectItem value="5+">Más de 5 años</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salario">Salario Mensual *</Label>
                  <Input
                    id="salario"
                    type="number"
                    placeholder="5000000"
                    value={formData.salario}
                    onChange={(e) => updateFormData("salario", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Documentos */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Selecciona los documentos que has cargado o tienes disponibles
                </p>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="cedula"
                      checked={formData.documentos.cedula}
                      onCheckedChange={(checked) => updateDocumento("cedula", checked as boolean)}
                    />
                    <div className="flex-1">
                      <Label htmlFor="cedula" className="cursor-pointer">
                        Cédula de Ciudadanía *
                      </Label>
                      <p className="text-xs text-muted-foreground mt-1">
                        Copia de ambos lados (PDF o imagen)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="certificado"
                      checked={formData.documentos.certificadoLaboral}
                      onCheckedChange={(checked) => updateDocumento("certificadoLaboral", checked as boolean)}
                    />
                    <div className="flex-1">
                      <Label htmlFor="certificado" className="cursor-pointer">
                        Certificado Laboral *
                      </Label>
                      <p className="text-xs text-muted-foreground mt-1">
                        Vigencia menor a 30 días
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="extracto"
                      checked={formData.documentos.extractoBancario}
                      onCheckedChange={(checked) => updateDocumento("extractoBancario", checked as boolean)}
                    />
                    <div className="flex-1">
                      <Label htmlFor="extracto" className="cursor-pointer">
                        Extracto Bancario
                      </Label>
                      <p className="text-xs text-muted-foreground mt-1">
                        Últimos 3 meses (Opcional)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmación */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="rounded-lg border p-4 space-y-4">
                  <h4 className="font-medium">Resumen de la Información</h4>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-muted-foreground">Nombre Completo</p>
                      <p className="font-medium">{formData.nombres} {formData.apellidos}</p>
                    </div>

                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <p className="font-medium">{formData.email}</p>
                    </div>

                    <div>
                      <p className="text-muted-foreground">Teléfono</p>
                      <p className="font-medium">{formData.telefono}</p>
                    </div>

                    <div className="pt-3 border-t">
                      <p className="text-muted-foreground">Empresa</p>
                      <p className="font-medium">{formData.empresa}</p>
                    </div>

                    <div>
                      <p className="text-muted-foreground">Cargo</p>
                      <p className="font-medium">{formData.cargo}</p>
                    </div>

                    <div className="pt-3 border-t">
                      <p className="text-muted-foreground">Documentos Cargados</p>
                      <div className="flex gap-2 mt-2">
                        {formData.documentos.cedula && (
                          <Badge variant="outline">
                            <Check className="h-3 w-3 mr-1" />
                            Cédula
                          </Badge>
                        )}
                        {formData.documentos.certificadoLaboral && (
                          <Badge variant="outline">
                            <Check className="h-3 w-3 mr-1" />
                            Certificado
                          </Badge>
                        )}
                        {formData.documentos.extractoBancario && (
                          <Badge variant="outline">
                            <Check className="h-3 w-3 mr-1" />
                            Extracto
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 border rounded-lg bg-muted/30">
                  <Checkbox
                    id="terminos"
                    checked={formData.aceptaTerminos}
                    onCheckedChange={(checked) => updateFormData("aceptaTerminos", checked)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="terminos" className="cursor-pointer">
                      Acepto los términos y condiciones *
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1">
                      He leído y acepto la política de privacidad y el tratamiento de datos personales
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Anterior
              </Button>

              {currentStep < steps.length ? (
                <Button onClick={handleNext}>
                  Siguiente
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.aceptaTerminos}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Enviar Solicitud
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}