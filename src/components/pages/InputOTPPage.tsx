import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "../ui/input-otp";

export function InputOTPPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Input OTP</h1>
          <Badge>Forms</Badge>
        </div>
        <p className="text-muted-foreground">
          Input accesible para códigos de un solo uso (OTP) y códigos de verificación
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Input OTP Básico</h2>
          <p className="text-muted-foreground">Código de 6 dígitos</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Código de Verificación</CardTitle>
            <CardDescription>Ingresa el código de 6 dígitos que enviamos a tu email</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Variantes</h2>
          <p className="text-muted-foreground">Diferentes configuraciones</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>4 Dígitos</CardTitle>
              <CardDescription>PIN corto</CardDescription>
            </CardHeader>
            <CardContent>
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8 Dígitos</CardTitle>
              <CardDescription>Código largo con separadores</CardDescription>
            </CardHeader>
            <CardContent>
              <InputOTP maxLength={8}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                </InputOTPGroup>
              </InputOTP>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>♿ Accesibilidad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>✓ <strong>Auto-advance</strong> - Avanza automáticamente al siguiente campo</p>
          <p>✓ <strong>Keyboard navigation</strong> - Soporte para teclas de dirección</p>
          <p>✓ <strong>Paste support</strong> - Permite pegar códigos completos</p>
          <p>✓ <strong>ARIA labels</strong> - Etiquetas accesibles en cada slot</p>
        </CardContent>
      </Card>
    </div>
  );
}
