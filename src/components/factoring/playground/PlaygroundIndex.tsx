import { useState } from "react";
import { Button } from "../../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { 
  ArrowLeft, 
  LogIn, 
  UserPlus, 
  FileText, 
  Settings,
  Layers,
  Beaker,
  LayoutGrid
} from "lucide-react";
import { LoginScreen } from "./LoginScreen";
import { ModulesScreen } from "./ModulesScreen";
import { OperacionesCreadasScreen } from "./OperacionesCreadasScreen";

/**
 * ⚠️ PLAYGROUND MODULE - Development & Testing Area
 * 
 * Este módulo sirve como área de desarrollo experimental dentro de Factoring.
 * 
 * PROPÓSITO:
 * - Desarrollar pantallas de forma iterativa
 * - Probar componentes antes de integrarlos
 * - Refinamiento de UX/UI sin afectar el flujo principal
 * 
 * FLUJO:
 * 1. Crear pantalla en /playground/
 * 2. Probar y refinar en este índice
 * 3. Una vez aprobada, integrar al flujo principal
 * 4. Actualizar FACTORING_ARCHITECTURE.md
 * 
 * Ubicación: /components/factoring/playground/PlaygroundIndex.tsx
 * Estado: Activo
 */

interface PlaygroundIndexProps {
  onBack: () => void;
}

type PlaygroundScreen = "index" | "login" | "register" | "dashboard" | "settings" | "modules" | "operaciones";

export function PlaygroundIndex({ onBack }: PlaygroundIndexProps) {
  const [currentScreen, setCurrentScreen] = useState<PlaygroundScreen>("index");

  // Renderizar pantalla seleccionada
  const renderScreen = () => {
    switch (currentScreen) {
      case "login":
        return (
          <LoginScreen
            onLogin={(email, password) => {
              console.log("Login:", email, password);
            }}
            onLoginSuccess={() => {
              // Navegar automáticamente a la pantalla de módulos después del login exitoso
              setCurrentScreen("modules");
            }}
            onForgotPassword={() => {
              alert("Funcionalidad de recuperación de contraseña - Próximamente");
            }}
            onBack={() => setCurrentScreen("index")}
          />
        );

      case "register":
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Registro</CardTitle>
                <CardDescription>Pantalla de registro - En desarrollo</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setCurrentScreen("index")}>
                  Volver al Índice
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case "dashboard":
        return (
          <div className="min-h-screen bg-slate-50 p-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
                <CardDescription>Dashboard experimental - En desarrollo</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setCurrentScreen("index")}>
                  Volver al Índice
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case "settings":
        return (
          <div className="min-h-screen bg-slate-50 p-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Configuración</CardTitle>
                <CardDescription>Configuración experimental - En desarrollo</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setCurrentScreen("index")}>
                  Volver al Índice
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case "modules":
        return (
          <ModulesScreen
            onSelectModule={(module) => {
              if (module === "factoring") {
                setCurrentScreen("operaciones");
              } else {
                alert(`Navegando a ${module} - En desarrollo`);
              }
            }}
            onBack={() => setCurrentScreen("index")}
          />
        );

      case "operaciones":
        return (
          <OperacionesCreadasScreen
            onBack={() => setCurrentScreen("index")}
          />
        );

      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 p-8">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Button
                  variant="ghost"
                  onClick={onBack}
                  className="mb-4 text-slate-600 hover:text-secondary"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver a Factoring App
                </Button>
                
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-xl bg-[#84cc16] text-white">
                    <Beaker className="h-6 w-6" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-secondary">
                      Playground - Desarrollo
                    </h1>
                    <p className="text-slate-600 mt-1">
                      Área experimental para desarrollo iterativo de pantallas
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <Card className="mb-6 border-[#84cc16] bg-[#84cc16]/5">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Layers className="h-5 w-5 text-[#84cc16]" />
                    ¿Qué es el Playground?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-slate-700">
                  <p>
                    <strong>Propósito:</strong> Desarrollar y probar pantallas de forma aislada antes de integrarlas al flujo principal.
                  </p>
                  <p>
                    <strong>Beneficios:</strong> Iteración rápida, testing seguro, refinamiento UX sin afectar producción.
                  </p>
                  <p>
                    <strong>Proceso:</strong> Crear → Probar → Refinar → Integrar → Documentar
                  </p>
                </CardContent>
              </Card>

              {/* Pantallas Disponibles */}
              <Tabs defaultValue="screens" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2 max-w-md">
                  <TabsTrigger value="screens">Pantallas</TabsTrigger>
                  <TabsTrigger value="components">Componentes</TabsTrigger>
                </TabsList>

                <TabsContent value="screens" className="space-y-4">
                  <h2 className="text-xl font-semibold text-secondary mb-4">
                    Pantallas en Desarrollo
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {/* Login Screen */}
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer border-slate-200">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="p-2 rounded-lg bg-[#84cc16]/10">
                            <LogIn className="h-5 w-5 text-[#84cc16]" />
                          </div>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            Completo
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">Login Screen</CardTitle>
                        <CardDescription>
                          Pantalla de inicio de sesión con SSO, validación y estados de error.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          onClick={() => setCurrentScreen("login")}
                          className="w-full bg-[#84cc16] hover:bg-[#65a30d] text-white"
                        >
                          Ver Pantalla
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Register Screen */}
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer border-slate-200 opacity-60">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="p-2 rounded-lg bg-slate-100">
                            <UserPlus className="h-5 w-5 text-slate-400" />
                          </div>
                          <Badge variant="outline" className="text-slate-500">
                            Pendiente
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">Register Screen</CardTitle>
                        <CardDescription>
                          Formulario de registro con validación en tiempo real.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          onClick={() => setCurrentScreen("register")}
                          variant="outline"
                          className="w-full"
                          disabled
                        >
                          En Desarrollo
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Dashboard Screen */}
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer border-slate-200 opacity-60">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="p-2 rounded-lg bg-slate-100">
                            <FileText className="h-5 w-5 text-slate-400" />
                          </div>
                          <Badge variant="outline" className="text-slate-500">
                            Pendiente
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">Dashboard Screen</CardTitle>
                        <CardDescription>
                          Vista principal con métricas y acciones rápidas.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          onClick={() => setCurrentScreen("dashboard")}
                          variant="outline"
                          className="w-full"
                          disabled
                        >
                          En Desarrollo
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Settings Screen */}
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer border-slate-200 opacity-60">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="p-2 rounded-lg bg-slate-100">
                            <Settings className="h-5 w-5 text-slate-400" />
                          </div>
                          <Badge variant="outline" className="text-slate-500">
                            Pendiente
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">Settings Screen</CardTitle>
                        <CardDescription>
                          Configuración de cuenta y preferencias.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          onClick={() => setCurrentScreen("settings")}
                          variant="outline"
                          className="w-full"
                          disabled
                        >
                          En Desarrollo
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Modules Screen */}
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer border-slate-200">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="p-2 rounded-lg bg-[#84cc16]/10">
                            <LayoutGrid className="h-5 w-5 text-[#84cc16]" />
                          </div>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            Completo
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">Modules Screen</CardTitle>
                        <CardDescription>
                          Pantalla de módulos con configuración y estado.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          onClick={() => setCurrentScreen("modules")}
                          className="w-full bg-[#84cc16] hover:bg-[#65a30d] text-white"
                        >
                          Ver Pantalla
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Operaciones Screen */}
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer border-slate-200">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="p-2 rounded-lg bg-[#84cc16]/10">
                            <FileText className="h-5 w-5 text-[#84cc16]" />
                          </div>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            Completo
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">Operaciones Screen</CardTitle>
                        <CardDescription>
                          Pantalla de operaciones creadas.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          onClick={() => setCurrentScreen("operaciones")}
                          className="w-full bg-[#84cc16] hover:bg-[#65a30d] text-white"
                        >
                          Ver Pantalla
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Placeholder para nueva pantalla */}
                    <Card className="border-dashed border-2 border-slate-300 hover:border-[#84cc16] transition-colors cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg text-slate-400">
                          Nueva Pantalla
                        </CardTitle>
                        <CardDescription>
                          Agrega una nueva pantalla al playground
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full" disabled>
                          Crear Pantalla
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="components" className="space-y-4">
                  <h2 className="text-xl font-semibold text-secondary mb-4">
                    Componentes Experimentales
                  </h2>

                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-slate-600 text-center py-8">
                        No hay componentes experimentales en desarrollo actualmente.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Documentation */}
              <Card className="mt-6 bg-slate-50 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg">Documentación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <strong className="text-secondary">Agregar nueva pantalla:</strong>
                    <ol className="list-decimal list-inside mt-2 space-y-1 text-slate-700 ml-4">
                      <li>Crear archivo en <code className="bg-white px-1 py-0.5 rounded text-xs">/components/factoring/playground/</code></li>
                      <li>Importar en <code className="bg-white px-1 py-0.5 rounded text-xs">PlaygroundIndex.tsx</code></li>
                      <li>Agregar caso en el switch de <code className="bg-white px-1 py-0.5 rounded text-xs">renderScreen()</code></li>
                      <li>Crear card en la grid de pantallas disponibles</li>
                    </ol>
                  </div>
                  <div>
                    <strong className="text-secondary">Integrar al flujo principal:</strong>
                    <ol className="list-decimal list-inside mt-2 space-y-1 text-slate-700 ml-4">
                      <li>Mover componente a carpeta correspondiente en <code className="bg-white px-1 py-0.5 rounded text-xs">/views/</code></li>
                      <li>Actualizar imports en <code className="bg-white px-1 py-0.5 rounded text-xs">FactoringApp.tsx</code></li>
                      <li>Agregar tipo en <code className="bg-white px-1 py-0.5 rounded text-xs">View</code> union</li>
                      <li>Actualizar switch en <code className="bg-white px-1 py-0.5 rounded text-xs">renderView()</code></li>
                      <li>Documentar en <code className="bg-white px-1 py-0.5 rounded text-xs">FACTORING_ARCHITECTURE.md</code></li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return renderScreen();
}