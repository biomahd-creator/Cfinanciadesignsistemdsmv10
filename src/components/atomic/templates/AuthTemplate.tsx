import { ReactNode } from "react";

interface AuthTemplateProps {
  children: ReactNode;
}

export function AuthTemplate({ children }: AuthTemplateProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block space-y-6">
          <div>
            <h1 className="text-2xl font-medium mb-4">Factoring Pro</h1>
            <p className="text-xl text-muted-foreground">
              Sistema integral de gestión de facturas y financiamiento
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-xl">✓</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Procesamiento Rápido</h3>
                <p className="text-sm text-muted-foreground">
                  Aprueba facturas en menos de 24 horas
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-xl">✓</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Seguridad Garantizada</h3>
                <p className="text-sm text-muted-foreground">
                  Encriptación de extremo a extremo
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-xl">✓</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Soporte 24/7</h3>
                <p className="text-sm text-muted-foreground">
                  Asistencia técnica disponible siempre
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
