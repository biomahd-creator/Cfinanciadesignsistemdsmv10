import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { FormField } from "../molecules/FormField";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";

export function LoginForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Iniciar Sesión</CardTitle>
        <CardDescription>
          Ingresa tus credenciales para acceder al sistema
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <FormField
            label="Correo Electrónico"
            id="email"
            type="email"
            placeholder="usuario@empresa.cl"
            required
          />
          <FormField
            label="Contraseña"
            id="password"
            type="password"
            placeholder="••••••••"
            required
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm cursor-pointer">
                Recordarme
              </Label>
            </div>
            <Button variant="link" className="text-sm px-0">
              ¿Olvidaste tu contraseña?
            </Button>
          </div>
        </div>

        <Button className="w-full">Iniciar Sesión</Button>

        <div className="relative">
          <Separator />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
            o continúa con
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline">Google</Button>
          <Button variant="outline">Microsoft</Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          ¿No tienes cuenta?{" "}
          <Button variant="link" className="px-1">
            Regístrate
          </Button>
        </p>
      </CardContent>
    </Card>
  );
}
