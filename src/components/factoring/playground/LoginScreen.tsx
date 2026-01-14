import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { ArrowRight, User } from "lucide-react";

/**
 * ⚠️ PLAYGROUND COMPONENT - Experimental Development
 * 
 * Esta es una pantalla experimental dentro del Playground de Factoring.
 * Diseño basado en referencia visual de CESIONBNK.
 * 
 * Ubicación: /components/factoring/playground/LoginScreen.tsx
 * Estado: En desarrollo
 * Propósito: Testing y refinamiento antes de integración final
 */

interface LoginScreenProps {
  onLogin?: (email: string, password: string) => void;
  onForgotPassword?: () => void;
  onBack?: () => void;
  onLoginSuccess?: () => void;
}

export function LoginScreen({ 
  onLogin, 
  onForgotPassword,
  onBack,
  onLoginSuccess
}: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    setIsLoading(true);
    
    // Simular llamada a API
    setTimeout(() => {
      setIsLoading(false);
      if (onLogin) {
        onLogin(email, password);
      }
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#84cc16] via-[#65a30d] to-[#16a34a] flex flex-col">
      {/* Header Navigation */}
      <header className="bg-[#1a1a1a] h-14 flex items-center justify-between px-6 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#84cc16] flex items-center justify-center border-2 border-[#84cc16]">
            <span className="text-lg font-bold text-[#1a1a1a]">F</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Financia</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            className="bg-[#84cc16] text-[#1a1a1a] hover:bg-[#65a30d] hover:text-white h-8 px-4 rounded-full font-medium"
          >
            <span className="mr-2">💼</span>
            Factoring
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 h-8 px-4 rounded-full font-medium"
          >
            <span className="mr-2">📋</span>
            Radian
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 h-8 px-4 rounded-full font-medium"
          >
            <span className="mr-2">👥</span>
            Vinculaciones
          </Button>
        </nav>

        {/* User Info */}
        <div className="flex items-center gap-2 text-white">
          <User className="h-4 w-4" />
          <div className="text-sm">
            <div className="font-medium">soporte@financia</div>
            <div className="text-xs text-slate-400">CFINANCIA</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-between px-16 py-12">
        {/* Left Side - Branding */}
        <div className="flex-1 flex flex-col items-start justify-center text-white">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-wider">
              CESION<span className="font-light">BNK</span>
            </h1>
            <p className="text-lg font-light tracking-wide">Factoring Electrónico</p>
          </div>
        </div>

        {/* Right Side - Login Card */}
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-0">
            <CardHeader className="space-y-2 pb-6">
              <CardTitle className="text-2xl font-semibold text-[#1a1a1a]">
                Inicio de Sesión
              </CardTitle>
              <CardDescription className="text-slate-600">
                Completa los datos a continuación para ingresar
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#1a1a1a] font-medium text-sm">
                    Correo Electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 border-slate-300 focus:border-primary focus:ring-primary"
                    disabled={isLoading}
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-[#1a1a1a] font-medium text-sm">
                      Contraseña
                    </Label>
                    <Button
                      type="button"
                      variant="link"
                      className="text-xs text-slate-600 hover:text-[#84cc16] p-0 h-auto"
                      onClick={onForgotPassword}
                      disabled={isLoading}
                    >
                      ¿Olvidaste tu contraseña?
                    </Button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 border-slate-300 focus:border-primary focus:ring-primary"
                    disabled={isLoading}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white font-medium h-12 text-base shadow-md hover:shadow-lg transition-all mt-6"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Ingresando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>Entrar</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </Button>
              </form>

              {/* Back to Playground */}
              {onBack && (
                <div className="mt-6 text-center">
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-sm text-slate-500 hover:text-[#84cc16]"
                    onClick={onBack}
                  >
                    ← Volver al Playground
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] h-12 flex items-center justify-center text-slate-400 text-sm">
        <p>CESIONBNK - Factoring Electrónico - 2025 www.cesionbnk.com</p>
      </footer>
    </div>
  );
}