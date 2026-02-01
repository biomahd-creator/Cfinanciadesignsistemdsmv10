/**
 * 🧪 COMPONENTE DE PRUEBA NO DESTRUCTIVO
 * 
 * Este componente demuestra que las páginas ubicadas en /pages (raíz)
 * funcionan correctamente con las nuevas rutas de importación.
 * 
 * NO reemplaza el PageRenderer.tsx existente en /components
 */

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { CheckCircle2, AlertCircle } from "lucide-react";

// Importando desde la nueva ubicación /pages
import { HomePage } from "./HomePage";
import { ButtonPage } from "./ButtonPage";
import { CardPage } from "./CardPage";

export function TestPageRenderer() {
  const [currentPage, setCurrentPage] = useState<"home" | "button" | "card">("home");

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      {/* Header de prueba */}
      <Card className="mb-8 border-primary/20 bg-primary/5">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <CardTitle>🧪 Prueba No Destructiva - Nueva Estructura /pages</CardTitle>
                <Badge variant="default" className="bg-green-500">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Funcionando
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Este es un componente de prueba que renderiza páginas desde <code className="bg-black/10 px-1 rounded">/pages</code> en lugar de <code className="bg-black/10 px-1 rounded">/components/pages</code>
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
              <span>Archivos creados en <strong>/pages/</strong> (raíz del proyecto)</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
              <span>Imports actualizados para usar rutas relativas desde /pages</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
              <span>No se modificaron archivos existentes en /components/pages</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
              <span>3 páginas de ejemplo: HomePage, ButtonPage, CardPage</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navegación de prueba */}
      <Tabs value={currentPage} onValueChange={(v) => setCurrentPage(v as any)} className="mb-6">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="button">Button</TabsTrigger>
          <TabsTrigger value="card">Card</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Renderizado de páginas */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        {currentPage === "home" && <HomePage />}
        {currentPage === "button" && <ButtonPage />}
        {currentPage === "card" && <CardPage />}
      </div>

      {/* Footer informativo */}
      <Card className="mt-8 bg-yellow-50 border-yellow-200">
        <CardContent className="pt-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">📋 Próximos pasos para migración completa:</h3>
            <ol className="text-sm space-y-2 list-decimal list-inside text-muted-foreground">
              <li>Copiar todos los archivos de /components/pages/ a /pages/</li>
              <li>Actualizar imports en 5-7 archivos principales (PageRenderer, FactoringApp, etc.)</li>
              <li>Verificar que no haya referencias rotas</li>
              <li>Eliminar /components/pages/ una vez verificado</li>
            </ol>
            <p className="text-xs text-muted-foreground mt-4">
              <strong>Tiempo estimado:</strong> 30-45 minutos • <strong>Complejidad:</strong> Baja-Media
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
