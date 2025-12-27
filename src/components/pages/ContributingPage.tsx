import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Users, GitBranch, CheckCircle2, Code2, FileText, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface CodeStandard {
  category: string;
  rules: { rule: string; description: string; example?: string }[];
}

const codeStandards: CodeStandard[] = [
  {
    category: "Componentes React",
    rules: [
      {
        rule: "Usar TypeScript",
        description: "Todos los componentes deben estar tipados con TypeScript",
        example: "export function MyComponent({ prop }: MyComponentProps) { ... }"
      },
      {
        rule: "Props interface",
        description: "Definir interface para props con JSDoc comments",
        example: "interface ButtonProps { variant?: 'default' | 'outline'; ... }"
      },
      {
        rule: "Naming convention",
        description: "PascalCase para componentes, camelCase para props",
      },
      {
        rule: "Export named",
        description: "Usar export named, no export default (excepto en pages)",
      }
    ]
  },
  {
    category: "Estilos",
    rules: [
      {
        rule: "Tailwind CSS únicamente",
        description: "No usar CSS plano, CSS modules, o styled-components",
      },
      {
        rule: "Tokens de diseño",
        description: "Usar variables CSS (--primary, --secondary, etc.)",
      },
      {
        rule: "Elevation classes",
        description: "Usar elevation-1 a elevation-4 en lugar de shadow-*",
      },
      {
        rule: "No inline styles",
        description: "Evitar style={{}} a menos que sea absolutamente necesario",
      }
    ]
  },
  {
    category: "Accesibilidad",
    rules: [
      {
        rule: "ARIA labels",
        description: "Todos los elementos interactivos deben tener aria-label",
      },
      {
        rule: "Keyboard navigation",
        description: "Soportar Tab, Enter, Escape, y flechas donde aplique",
      },
      {
        rule: "Contraste WCAG AA",
        description: "Ratio mínimo de contraste 4.5:1 para texto",
      },
      {
        rule: "Semantic HTML",
        description: "Usar elementos semánticos (button, nav, main, etc.)",
      }
    ]
  }
];

interface PRChecklist {
  category: string;
  items: string[];
}

const prChecklist: PRChecklist[] = [
  {
    category: "Código",
    items: [
      "El código compila sin errores TypeScript",
      "No hay warnings en la consola",
      "El código sigue las convenciones de naming",
      "Se eliminaron console.logs y debuggers"
    ]
  },
  {
    category: "Testing",
    items: [
      "Tests unitarios agregados para nuevas features",
      "Tests existentes pasan sin errores",
      "Testing manual realizado en Chrome y Safari",
      "Probado en modo claro y oscuro"
    ]
  },
  {
    category: "Documentación",
    items: [
      "JSDoc comments agregados a funciones públicas",
      "README actualizado si aplica",
      "Ejemplos de uso incluidos",
      "Props documentadas con tipos y descripciones"
    ]
  },
  {
    category: "Accesibilidad",
    items: [
      "Navegación por teclado funciona correctamente",
      "Screen reader probado (NVDA o VoiceOver)",
      "Contraste de colores verificado",
      "ARIA labels presentes donde necesarios"
    ]
  }
];

export function ContributingPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <Users className="size-8 text-primary" />
          <h1 className="text-foreground">Contributing Guidelines</h1>
          <Badge variant="default" className="bg-primary text-primary-foreground">Documentation</Badge>
        </div>
        <p className="text-muted-foreground">
          Cómo contribuir al Design System de C-Financia. Estándares de código, proceso de pull request, 
          y mejores prácticas para mantener la calidad del sistema.
        </p>
      </div>

      {/* Welcome Message */}
      <Card className="elevation-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="size-5 text-primary" />
            ¡Gracias por Contribuir!
          </CardTitle>
          <CardDescription>
            Tu contribución ayuda a mejorar el Design System para todo el equipo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            El Design System de C-Financia es un proyecto colaborativo mantenido por el equipo de diseño 
            y desarrollo. Apreciamos todas las contribuciones, desde reportes de bugs hasta nuevos componentes. 
            Esta guía te ayudará a hacer contribuciones efectivas.
          </p>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Primeros Pasos</CardTitle>
          <CardDescription>
            Configura tu ambiente de desarrollo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Fork el repositorio</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Crea tu propio fork del repositorio en GitHub
                </p>
                <div className="bg-muted/50 rounded-md p-3 mt-2">
                  <code className="text-xs">git clone https://github.com/tu-usuario/dsm.git</code>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Instala dependencias</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Usa npm o yarn para instalar las dependencias
                </p>
                <div className="bg-muted/50 rounded-md p-3 mt-2">
                  <code className="text-xs">npm install</code>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Crea una rama</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Crea una rama descriptiva para tu contribución
                </p>
                <div className="bg-muted/50 rounded-md p-3 mt-2">
                  <code className="text-xs">git checkout -b feature/nuevo-componente</code>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Haz tus cambios</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Implementa tu feature siguiendo los estándares de código
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                5
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Commit y push</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Usa mensajes de commit descriptivos
                </p>
                <div className="bg-muted/50 rounded-md p-3 mt-2">
                  <code className="text-xs">{`git commit -m "feat: agregar componente DateRangePicker"
git push origin feature/nuevo-componente`}</code>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                6
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">Abre un Pull Request</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Crea un PR describiendo tus cambios
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for Standards */}
      <Tabs defaultValue="code" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="code">Estándares de Código</TabsTrigger>
          <TabsTrigger value="commit">Commit Messages</TabsTrigger>
          <TabsTrigger value="pr">Pull Request</TabsTrigger>
          <TabsTrigger value="checklist">Checklist</TabsTrigger>
        </TabsList>

        {/* Code Standards */}
        <TabsContent value="code" className="space-y-4">
          {codeStandards.map((standard, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="size-5 text-primary" />
                  {standard.category}
                </CardTitle>
                <CardDescription>
                  Normas a seguir para {standard.category.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {standard.rules.map((rule, rIndex) => (
                  <div key={rIndex} className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{rule.rule}</p>
                        <p className="text-sm text-muted-foreground">{rule.description}</p>
                        {rule.example && (
                          <div className="bg-muted/50 rounded-md p-2 mt-2">
                            <code className="text-xs">{rule.example}</code>
                          </div>
                        )}
                      </div>
                    </div>
                    {rIndex < standard.rules.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Commit Messages */}
        <TabsContent value="commit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="size-5 text-primary" />
                Formato de Commit Messages
              </CardTitle>
              <CardDescription>
                Usamos Conventional Commits para mensajes consistentes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <FileText className="size-4" />
                <AlertTitle>Formato</AlertTitle>
                <AlertDescription>
                  <code className="text-xs">type(scope): descripción</code>
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tipos de Commit</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-600 text-white">feat</Badge>
                      <span className="text-sm text-muted-foreground">Nueva funcionalidad</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-600 text-white">fix</Badge>
                      <span className="text-sm text-muted-foreground">Corrección de bug</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-600 text-white">docs</Badge>
                      <span className="text-sm text-muted-foreground">Cambios en documentación</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-600 text-white">style</Badge>
                      <span className="text-sm text-muted-foreground">Cambios de formato/estilo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-orange-600 text-white">refactor</Badge>
                      <span className="text-sm text-muted-foreground">Refactorización de código</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-red-600 text-white">test</Badge>
                      <span className="text-sm text-muted-foreground">Agregar o modificar tests</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Ejemplos</h4>
                  <div className="space-y-2">
                    <div className="bg-muted/50 rounded-md p-2">
                      <code className="text-xs">feat(button): agregar variante outline</code>
                    </div>
                    <div className="bg-muted/50 rounded-md p-2">
                      <code className="text-xs">fix(input): corregir placeholder en dark mode</code>
                    </div>
                    <div className="bg-muted/50 rounded-md p-2">
                      <code className="text-xs">docs(readme): actualizar guía de instalación</code>
                    </div>
                    <div className="bg-muted/50 rounded-md p-2">
                      <code className="text-xs">refactor(theme): migrar a CSS variables</code>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pull Request */}
        <TabsContent value="pr" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Proceso de Pull Request</CardTitle>
              <CardDescription>
                Cómo crear un PR efectivo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-primary/20 bg-primary/5">
                <CheckCircle2 className="size-4 text-primary" />
                <AlertTitle>Template de PR</AlertTitle>
                <AlertDescription>
                  Usa el template de PR que aparece automáticamente al crear un nuevo Pull Request
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Tu PR debe incluir:</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p>
                      <strong className="text-foreground">Título descriptivo:</strong> Usa el formato de Conventional Commits
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p>
                      <strong className="text-foreground">Descripción clara:</strong> Explica qué cambios hiciste y por qué
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p>
                      <strong className="text-foreground">Screenshots:</strong> Incluye capturas si hay cambios visuales
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p>
                      <strong className="text-foreground">Tests:</strong> Menciona qué tests agregaste o ejecutaste
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p>
                      <strong className="text-foreground">Breaking changes:</strong> Indica si hay cambios que rompen compatibilidad
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-foreground mb-2">Proceso de Review</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Tu PR será revisado por al menos 2 miembros del equipo core. El proceso típicamente toma 2-3 días.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="size-2 rounded-full bg-yellow-600" />
                    <span className="text-muted-foreground">En revisión (amarillo)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="size-2 rounded-full bg-blue-600" />
                    <span className="text-muted-foreground">Cambios solicitados (azul)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="size-2 rounded-full bg-green-600" />
                    <span className="text-muted-foreground">Aprobado (verde)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="size-2 rounded-full bg-red-600" />
                    <span className="text-muted-foreground">Rechazado (rojo)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Checklist */}
        <TabsContent value="checklist" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Checklist de Contribución</CardTitle>
              <CardDescription>
                Verifica estos items antes de abrir tu PR
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {prChecklist.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-semibold text-foreground">{section.category}</h4>
                  <div className="space-y-2">
                    {section.items.map((item, iIndex) => (
                      <div key={iIndex} className="flex items-start gap-3 p-2 rounded-md hover:bg-muted/50">
                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  {index < prChecklist.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Important Notes */}
      <Alert className="border-yellow-200 dark:border-yellow-900 bg-yellow-50 dark:bg-yellow-950/20">
        <AlertTriangle className="size-4 text-yellow-600" />
        <AlertTitle className="text-yellow-900 dark:text-yellow-100">Importante</AlertTitle>
        <AlertDescription className="text-yellow-800 dark:text-yellow-200">
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>No hagas commits directos a la rama main</li>
            <li>Mantén tus PRs pequeños y enfocados (máximo 300 líneas)</li>
            <li>Responde a los comentarios de review en máximo 48 horas</li>
            <li>Actualiza tu rama con main antes de hacer merge</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Support */}
      <Card className="elevation-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>¿Necesitas Ayuda?</CardTitle>
          <CardDescription>
            Recursos para contribuidores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">Slack:</strong> Canal #dsm-contributors para dudas
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">GitHub Discussions:</strong> Para propuestas y discusiones técnicas
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">Office Hours:</strong> Todos los martes 3-4pm para ayuda en vivo
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
