import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { BookOpen, AlertTriangle, CheckCircle2, ArrowRight, Code2, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";

interface BreakingChange {
  component: string;
  old: string;
  new: string;
  description: string;
  migration: string;
}

const breakingChanges: BreakingChange[] = [
  {
    component: "Button",
    old: "color='primary'",
    new: "variant='default'",
    description: "La prop 'color' fue renombrada a 'variant' para consistencia",
    migration: "Reemplazar todas las instancias de color='primary' con variant='default'"
  },
  {
    component: "Input",
    old: "type='text'",
    new: "type='text' (sin cambios)",
    description: "Input mantiene compatibilidad, pero ahora soporta más tipos",
    migration: "No requiere cambios, pero considera usar los nuevos tipos disponibles"
  },
  {
    component: "Card",
    old: "elevation={2}",
    new: "className='elevation-2'",
    description: "Elevation ahora usa clases CSS en lugar de prop numérica",
    migration: "Reemplazar elevation={2} con className='elevation-2'"
  },
  {
    component: "Dialog",
    old: "onClose={() => {}}",
    new: "onOpenChange={(open) => {}}",
    description: "Callback unificado para apertura y cierre",
    migration: "Usar onOpenChange en lugar de onClose, verificar estado 'open'"
  }
];

interface MigrationStep {
  step: number;
  title: string;
  description: string;
  code?: string;
  warning?: string;
}

const migrationSteps: MigrationStep[] = [
  {
    step: 1,
    title: "Actualizar dependencias",
    description: "Actualiza el package.json con las nuevas versiones del DSM",
    code: `npm install @cfinancia/dsm@2.0.0\n# o\nyarn add @cfinancia/dsm@2.0.0`,
  },
  {
    step: 2,
    title: "Revisar Breaking Changes",
    description: "Lee cuidadosamente la lista de cambios que rompen compatibilidad",
    warning: "Algunos componentes tienen cambios importantes en sus APIs"
  },
  {
    step: 3,
    title: "Actualizar imports",
    description: "Cambia los imports de componentes a la nueva estructura",
    code: `// Antes (v1.0)
import { Button } from '@cfinancia/dsm/components';

// Después (v2.0)
import { Button } from '@cfinancia/dsm/ui/button';`
  },
  {
    step: 4,
    title: "Migrar props deprecadas",
    description: "Reemplaza props antiguas con las nuevas equivalentes",
    code: `// Antes
<Button color="primary" />

// Después
<Button variant="default" />`
  },
  {
    step: 5,
    title: "Actualizar estilos globales",
    description: "Importa el nuevo archivo de estilos globales",
    code: `// En tu archivo principal (main.tsx o _app.tsx)
import '@cfinancia/dsm/styles/globals.css';`
  },
  {
    step: 6,
    title: "Probar en desarrollo",
    description: "Ejecuta tu aplicación en modo desarrollo y verifica que todo funcione",
    code: `npm run dev\n# Revisa la consola en busca de warnings`
  },
  {
    step: 7,
    title: "Ejecutar tests",
    description: "Corre tu suite de tests para detectar problemas",
    warning: "Algunos tests pueden fallar si usan snapshots de componentes"
  },
  {
    step: 8,
    title: "Desplegar a staging",
    description: "Despliega a un ambiente de staging antes de producción",
  }
];

export function MigrationGuidesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <BookOpen className="size-8 text-primary" />
          <h1 className="text-foreground">Migration Guides</h1>
          <Badge variant="default" className="bg-primary text-primary-foreground">Documentation</Badge>
        </div>
        <p className="text-muted-foreground">
          Guías completas de migración entre versiones del Design System. Actualiza tu proyecto 
          de forma segura siguiendo estos pasos.
        </p>
      </div>

      {/* Version Overview */}
      <Card className="elevation-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="size-5 text-primary" />
            Migración v1.0 → v2.0
          </CardTitle>
          <CardDescription>
            Actualización mayor con mejoras significativas y algunos breaking changes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-md bg-muted/50">
              <p className="font-semibold text-foreground mb-1">Versión Anterior</p>
              <code className="text-sm text-muted-foreground">v1.0.x</code>
            </div>
            <div className="p-4 rounded-md bg-muted/50">
              <p className="font-semibold text-foreground mb-1">Versión Nueva</p>
              <code className="text-sm text-muted-foreground">v2.0.0</code>
            </div>
            <div className="p-4 rounded-md bg-muted/50">
              <p className="font-semibold text-foreground mb-1">Tiempo Estimado</p>
              <code className="text-sm text-muted-foreground">2-4 horas</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Alert */}
      <Alert className="border-yellow-200 dark:border-yellow-900 bg-yellow-50 dark:bg-yellow-950/20">
        <AlertTriangle className="size-4 text-yellow-600" />
        <AlertTitle className="text-yellow-900 dark:text-yellow-100">Importante</AlertTitle>
        <AlertDescription className="text-yellow-800 dark:text-yellow-200">
          Esta es una actualización mayor con cambios que rompen compatibilidad. 
          Te recomendamos realizar la migración en una rama separada y probar exhaustivamente 
          antes de llevar a producción.
        </AlertDescription>
      </Alert>

      {/* Migration Tabs */}
      <Tabs defaultValue="steps" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="steps">Pasos</TabsTrigger>
          <TabsTrigger value="breaking">Breaking Changes</TabsTrigger>
          <TabsTrigger value="new">Nuevas Features</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        {/* Migration Steps */}
        <TabsContent value="steps" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Guía Paso a Paso</CardTitle>
              <CardDescription>
                Sigue estos pasos en orden para una migración exitosa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {migrationSteps.map((step) => (
                <div key={step.step} className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{step.description}</p>

                      {step.code && (
                        <div className="bg-muted/50 rounded-md p-3 mt-3">
                          <pre className="text-xs">
                            <code>{step.code}</code>
                          </pre>
                        </div>
                      )}

                      {step.warning && (
                        <Alert className="mt-3 border-yellow-200 dark:border-yellow-900">
                          <AlertTriangle className="size-4 text-yellow-600" />
                          <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                            {step.warning}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </div>
                  {step.step < migrationSteps.length && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Breaking Changes */}
        <TabsContent value="breaking" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="size-5 text-yellow-600" />
                Breaking Changes
              </CardTitle>
              <CardDescription>
                Cambios que requieren actualización manual en tu código
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {breakingChanges.map((change, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{change.component}</Badge>
                    <h4 className="font-semibold text-foreground">{change.old} → {change.new}</h4>
                  </div>
                  
                  <p className="text-muted-foreground">{change.description}</p>

                  <div className="bg-muted/50 rounded-md p-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Migración:</p>
                    <p className="text-sm text-muted-foreground">{change.migration}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-md border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
                      <p className="text-xs font-semibold text-red-900 dark:text-red-100 mb-1">❌ Antes (v1.0)</p>
                      <code className="text-xs text-red-800 dark:text-red-200">{change.old}</code>
                    </div>
                    <div className="p-3 rounded-md border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20">
                      <p className="text-xs font-semibold text-green-900 dark:text-green-100 mb-1">✅ Después (v2.0)</p>
                      <code className="text-xs text-green-800 dark:text-green-200">{change.new}</code>
                    </div>
                  </div>

                  {index < breakingChanges.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* New Features */}
        <TabsContent value="new" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="size-5 text-green-600" />
                Nuevas Features en v2.0
              </CardTitle>
              <CardDescription>
                Mejoras y nuevas funcionalidades disponibles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-md bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
                  <CheckCircle2 className="size-5 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">ComponentShowcase Wrapper</p>
                    <p className="text-sm text-muted-foreground">
                      Nuevo componente para documentar componentes con preview, code, props y ejemplos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
                  <CheckCircle2 className="size-5 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Elevation System</p>
                    <p className="text-sm text-muted-foreground">
                      Sistema de elevación con clases elevation-1 a elevation-4 que adaptan color según tema
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
                  <CheckCircle2 className="size-5 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">15+ Componentes Nuevos</p>
                    <p className="text-sm text-muted-foreground">
                      Input File, Textarea Autoresize, Multi Select, Date Range Picker, y más
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
                  <CheckCircle2 className="size-5 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Theme Customizer Live</p>
                    <p className="text-sm text-muted-foreground">
                      Editor en tiempo real de colores, radios, sombras y más
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
                  <CheckCircle2 className="size-5 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Accesibilidad WCAG 2.1 AA</p>
                    <p className="text-sm text-muted-foreground">
                      98% de cumplimiento con navegación por teclado y ratios de contraste verificados
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
                  <CheckCircle2 className="size-5 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Atomic Design Completo</p>
                    <p className="text-sm text-muted-foreground">
                      Metodología Brad Frost implementada: Atoms, Molecules, Organisms, Templates, Pages
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FAQ */}
        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Preguntas Frecuentes</CardTitle>
              <CardDescription>
                Respuestas a dudas comunes sobre la migración
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">¿Puedo migrar gradualmente?</h4>
                  <p className="text-sm text-muted-foreground">
                    Sí. Puedes instalar v2.0 y mantener compatibilidad con componentes v1.0 temporalmente. 
                    Sin embargo, recomendamos migrar todo el proyecto de una vez para evitar inconsistencias.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-foreground mb-2">¿Hay un script de migración automática?</h4>
                  <p className="text-sm text-muted-foreground">
                    Actualmente no tenemos un script automatizado, pero estamos trabajando en un codemod 
                    que facilite la migración. Mientras tanto, sigue la guía paso a paso.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-foreground mb-2">¿Cuánto tiempo tomará la migración?</h4>
                  <p className="text-sm text-muted-foreground">
                    Depende del tamaño de tu proyecto. Un proyecto pequeño (10-20 componentes) puede tomar 
                    2-3 horas. Un proyecto grande (100+ componentes) puede tomar 1-2 días.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-foreground mb-2">¿Puedo seguir usando v1.0?</h4>
                  <p className="text-sm text-muted-foreground">
                    Sí, v1.0 seguirá recibiendo parches de seguridad durante 6 meses. Sin embargo, 
                    nuevas features solo estarán disponibles en v2.0+.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-foreground mb-2">¿Qué pasa si encuentro un bug durante la migración?</h4>
                  <p className="text-sm text-muted-foreground">
                    Reporta el bug en nuestro repositorio de GitHub con el tag "migration". 
                    Nuestro equipo te ayudará a resolverlo lo antes posible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Support */}
      <Card className="elevation-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="size-5 text-primary" />
            ¿Necesitas Ayuda?
          </CardTitle>
          <CardDescription>
            Recursos y canales de soporte para asistirte en la migración
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">Documentación:</strong> Consulta la documentación completa en docs.dsm.cfinancia.com
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">GitHub Issues:</strong> Abre un issue en github.com/cfinancia/dsm con tag "migration"
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">Slack:</strong> Únete al canal #dsm-support en nuestro Slack interno
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">Email:</strong> Contacta a dsm-support@cfinancia.com para soporte directo
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
