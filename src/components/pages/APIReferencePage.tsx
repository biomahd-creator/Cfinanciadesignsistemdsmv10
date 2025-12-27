import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { FileText, Code2, BookOpen, Terminal, AlertCircle, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

interface APIEndpoint {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
  params?: { name: string; type: string; required: boolean; description: string }[];
  response: string;
}

const componentAPIs: APIEndpoint[] = [
  {
    method: "GET",
    path: "/components/:id",
    description: "Obtiene información de un componente específico",
    params: [
      { name: "id", type: "string", required: true, description: "ID único del componente" },
      { name: "include", type: "string[]", required: false, description: "Datos adicionales a incluir" }
    ],
    response: "{ id: string, name: string, category: string, props: ComponentProps[], examples: Example[] }"
  },
  {
    method: "GET",
    path: "/components",
    description: "Lista todos los componentes disponibles",
    params: [
      { name: "category", type: "string", required: false, description: "Filtrar por categoría" },
      { name: "search", type: "string", required: false, description: "Buscar por nombre" }
    ],
    response: "{ components: Component[], total: number }"
  },
  {
    method: "POST",
    path: "/components/validate",
    description: "Valida props de un componente",
    params: [
      { name: "componentId", type: "string", required: true, description: "ID del componente" },
      { name: "props", type: "object", required: true, description: "Props a validar" }
    ],
    response: "{ valid: boolean, errors: ValidationError[] }"
  }
];

const themeAPIs: APIEndpoint[] = [
  {
    method: "GET",
    path: "/theme",
    description: "Obtiene la configuración del tema actual",
    response: "{ colors: ColorScheme, typography: TypographyConfig, spacing: SpacingConfig }"
  },
  {
    method: "PUT",
    path: "/theme",
    description: "Actualiza la configuración del tema",
    params: [
      { name: "colors", type: "ColorScheme", required: false, description: "Esquema de colores" },
      { name: "mode", type: "'light' | 'dark'", required: false, description: "Modo de tema" }
    ],
    response: "{ success: boolean, theme: ThemeConfig }"
  }
];

function MethodBadge({ method }: { method: APIEndpoint["method"] }) {
  const colors = {
    GET: "bg-blue-600",
    POST: "bg-green-600",
    PUT: "bg-yellow-600",
    DELETE: "bg-red-600"
  };

  return (
    <Badge className={`${colors[method]} text-white font-mono`}>
      {method}
    </Badge>
  );
}

export function APIReferencePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <FileText className="size-8 text-primary" />
          <h1 className="text-foreground">API Reference</h1>
          <Badge variant="default" className="bg-primary text-primary-foreground">Documentation</Badge>
        </div>
        <p className="text-muted-foreground">
          Documentación técnica completa de las APIs del Design System. Endpoints, parámetros, 
          respuestas y ejemplos de uso.
        </p>
      </div>

      {/* Quick Overview */}
      <Card className="elevation-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="size-5 text-primary" />
            Vista General
          </CardTitle>
          <CardDescription>
            El DSM expone varias APIs para interactuar con componentes, temas y configuraciones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-md bg-muted/50">
              <p className="font-semibold text-foreground mb-1">Base URL</p>
              <code className="text-sm text-muted-foreground">https://api.dsm.cfinancia.com/v1</code>
            </div>
            <div className="p-4 rounded-md bg-muted/50">
              <p className="font-semibold text-foreground mb-1">Autenticación</p>
              <code className="text-sm text-muted-foreground">Bearer Token (API Key)</code>
            </div>
            <div className="p-4 rounded-md bg-muted/50">
              <p className="font-semibold text-foreground mb-1">Formato</p>
              <code className="text-sm text-muted-foreground">JSON (application/json)</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Tabs */}
      <Tabs defaultValue="components" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="components">Components API</TabsTrigger>
          <TabsTrigger value="theme">Theme API</TabsTrigger>
          <TabsTrigger value="errors">Error Codes</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        {/* Components API */}
        <TabsContent value="components" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Components API</CardTitle>
              <CardDescription>
                Endpoints para consultar y validar componentes del DSM
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {componentAPIs.map((api, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MethodBadge method={api.method} />
                    <code className="text-sm font-mono text-foreground">{api.path}</code>
                  </div>
                  
                  <p className="text-muted-foreground">{api.description}</p>

                  {api.params && api.params.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Parámetros:</p>
                      <div className="space-y-2">
                        {api.params.map((param, pIndex) => (
                          <div key={pIndex} className="flex items-start gap-2 text-sm">
                            <code className="font-mono text-primary">{param.name}</code>
                            <Badge variant="outline" className="text-xs">{param.type}</Badge>
                            {param.required && <Badge className="bg-red-600 text-white text-xs">Required</Badge>}
                            <span className="text-muted-foreground">- {param.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Respuesta:</p>
                    <div className="bg-muted/50 rounded-md p-3">
                      <code className="text-xs text-muted-foreground">{api.response}</code>
                    </div>
                  </div>

                  {index < componentAPIs.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Theme API */}
        <TabsContent value="theme" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Theme API</CardTitle>
              <CardDescription>
                Endpoints para gestionar la configuración del tema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {themeAPIs.map((api, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MethodBadge method={api.method} />
                    <code className="text-sm font-mono text-foreground">{api.path}</code>
                  </div>
                  
                  <p className="text-muted-foreground">{api.description}</p>

                  {api.params && api.params.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Parámetros:</p>
                      <div className="space-y-2">
                        {api.params.map((param, pIndex) => (
                          <div key={pIndex} className="flex items-start gap-2 text-sm">
                            <code className="font-mono text-primary">{param.name}</code>
                            <Badge variant="outline" className="text-xs">{param.type}</Badge>
                            {param.required && <Badge className="bg-red-600 text-white text-xs">Required</Badge>}
                            <span className="text-muted-foreground">- {param.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Respuesta:</p>
                    <div className="bg-muted/50 rounded-md p-3">
                      <code className="text-xs text-muted-foreground">{api.response}</code>
                    </div>
                  </div>

                  {index < themeAPIs.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Error Codes */}
        <TabsContent value="errors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Códigos de Error</CardTitle>
              <CardDescription>
                Errores comunes y sus soluciones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-md bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900">
                  <AlertCircle className="size-5 text-red-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">400 - Bad Request</p>
                    <p className="text-sm text-muted-foreground">Parámetros inválidos o faltantes</p>
                    <code className="text-xs text-muted-foreground">Solución: Verificar que todos los parámetros requeridos estén presentes</code>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900">
                  <AlertCircle className="size-5 text-red-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">401 - Unauthorized</p>
                    <p className="text-sm text-muted-foreground">API Key inválida o expirada</p>
                    <code className="text-xs text-muted-foreground">Solución: Regenerar API Key en configuración</code>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900">
                  <AlertCircle className="size-5 text-yellow-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">404 - Not Found</p>
                    <p className="text-sm text-muted-foreground">Componente o recurso no encontrado</p>
                    <code className="text-xs text-muted-foreground">Solución: Verificar ID del componente</code>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-md bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900">
                  <AlertCircle className="size-5 text-red-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">500 - Internal Server Error</p>
                    <p className="text-sm text-muted-foreground">Error interno del servidor</p>
                    <code className="text-xs text-muted-foreground">Solución: Contactar soporte técnico</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Examples */}
        <TabsContent value="examples" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="size-5 text-primary" />
                Ejemplos de Uso
              </CardTitle>
              <CardDescription>
                Ejemplos prácticos de cómo consumir las APIs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Example 1 */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Obtener un componente</h4>
                <div className="bg-muted/50 rounded-md p-4">
                  <pre className="text-sm">
                    <code>{`// JavaScript / TypeScript
const response = await fetch('https://api.dsm.cfinancia.com/v1/components/button', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const component = await response.json();
console.log(component);
// { id: 'button', name: 'Button', category: 'Actions', ... }`}</code>
                  </pre>
                </div>
              </div>

              <Separator />

              {/* Example 2 */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Actualizar tema</h4>
                <div className="bg-muted/50 rounded-md p-4">
                  <pre className="text-sm">
                    <code>{`// JavaScript / TypeScript
const response = await fetch('https://api.dsm.cfinancia.com/v1/theme', {
  method: 'PUT',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    mode: 'dark',
    colors: {
      primary: '#DEFB49',
      secondary: '#1C2D3A'
    }
  })
});

const result = await response.json();
console.log(result);
// { success: true, theme: { ... } }`}</code>
                  </pre>
                </div>
              </div>

              <Separator />

              {/* Example 3 */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Validar props</h4>
                <div className="bg-muted/50 rounded-md p-4">
                  <pre className="text-sm">
                    <code>{`// JavaScript / TypeScript
const response = await fetch('https://api.dsm.cfinancia.com/v1/components/validate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    componentId: 'button',
    props: {
      variant: 'primary',
      size: 'large'
    }
  })
});

const validation = await response.json();
console.log(validation);
// { valid: true, errors: [] }`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Authentication Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Autenticación</CardTitle>
          <CardDescription>
            Cómo autenticarte en las APIs del DSM
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <CheckCircle2 className="size-4" />
            <AlertTitle>API Key Requerida</AlertTitle>
            <AlertDescription>
              Todas las peticiones requieren un API Key válido en el header Authorization.
            </AlertDescription>
          </Alert>

          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">Paso 1:</strong> Genera tu API Key en Configuración → API Keys
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">Paso 2:</strong> Incluye el header: <code className="text-xs">Authorization: Bearer YOUR_API_KEY</code>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">Paso 3:</strong> Guarda tu API Key de forma segura (no compartir públicamente)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rate Limits */}
      <Card>
        <CardHeader>
          <CardTitle>Rate Limits</CardTitle>
          <CardDescription>
            Límites de peticiones para proteger la API
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-md bg-muted/50 text-center">
              <p className="text-3xl font-semibold text-foreground">1000</p>
              <p className="text-sm text-muted-foreground">peticiones / hora</p>
            </div>
            <div className="p-4 rounded-md bg-muted/50 text-center">
              <p className="text-3xl font-semibold text-foreground">10000</p>
              <p className="text-sm text-muted-foreground">peticiones / día</p>
            </div>
            <div className="p-4 rounded-md bg-muted/50 text-center">
              <p className="text-3xl font-semibold text-foreground">50</p>
              <p className="text-sm text-muted-foreground">peticiones / minuto</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
