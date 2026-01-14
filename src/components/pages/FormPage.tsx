import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export function FormPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Form</h1>
          <Badge variant="secondary">Pattern</Badge>
        </div>
        <p className="text-muted-foreground">
          Composición de componentes de formulario con labels y validación
        </p>
      </div>

      <Separator />

      {/* Complete Form Example */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Formulario Completo</h2>
          <p className="text-muted-foreground">Ejemplo de formulario con todos los tipos de campos</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Crear Cuenta</CardTitle>
            <CardDescription>Completa el formulario para registrarte</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Text Inputs */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre *</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido *</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
                <p className="text-xs text-muted-foreground">Nunca compartiremos tu email</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña *</Label>
                <Input id="password" type="password" placeholder="••••••••" required />
                <p className="text-xs text-muted-foreground">Mínimo 8 caracteres</p>
              </div>

              {/* Select */}
              <div className="space-y-2">
                <Label htmlFor="country">País</Label>
                <Select>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Selecciona tu país" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ar">Argentina</SelectItem>
                    <SelectItem value="mx">México</SelectItem>
                    <SelectItem value="es">España</SelectItem>
                    <SelectItem value="us">Estados Unidos</SelectItem>
                    <SelectItem value="br">Brasil</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Radio Group */}
              <div className="space-y-3">
                <Label>Tipo de cuenta</Label>
                <RadioGroup defaultValue="personal">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="personal" id="personal" />
                    <Label htmlFor="personal" className="font-normal">Personal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business" className="font-normal">Empresarial</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enterprise" id="enterprise" />
                    <Label htmlFor="enterprise" className="font-normal">Enterprise</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Textarea */}
              <div className="space-y-2">
                <Label htmlFor="bio">Biografía</Label>
                <Textarea
                  id="bio"
                  placeholder="Cuéntanos sobre ti..."
                  className="min-h-[100px]"
                />
                <p className="text-xs text-muted-foreground">Máximo 500 caracteres</p>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <Label>Preferencias</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="font-normal">
                      Recibir newsletter semanal
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications" defaultChecked />
                    <Label htmlFor="notifications" className="font-normal">
                      Notificaciones por email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing" className="font-normal">
                      Comunicaciones de marketing
                    </Label>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="font-normal">
                  Acepto los términos y condiciones *
                </Label>
              </div>

              <Separator />

              {/* Submit Buttons */}
              <div className="flex gap-3">
                <Button type="submit" className="flex-1">
                  Crear Cuenta
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Form Layouts */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Layouts de Formulario</h2>
          <p className="text-muted-foreground">Diferentes organizaciones visuales</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Login Form</CardTitle>
              <CardDescription>Layout vertical simple</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loginEmail">Email</Label>
                  <Input id="loginEmail" type="email" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loginPassword">Contraseña</Label>
                  <Input id="loginPassword" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="font-normal text-sm">
                    Recordarme
                  </Label>
                </div>
                <Button type="submit" className="w-full">
                  Iniciar Sesión
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Formulario de contacto</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Nombre</Label>
                  <Input id="contactName" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input id="contactEmail" type="email" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="Tu mensaje..." className="min-h-[80px]" />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Form States */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Estados del Formulario</h2>
          <p className="text-muted-foreground">Diferentes estados de campos</p>
        </div>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="normal">Normal</Label>
              <Input id="normal" placeholder="Campo normal" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled</Label>
              <Input id="disabled" placeholder="Campo deshabilitado" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="error">Con Error</Label>
              <Input id="error" placeholder="Campo con error" className="border-red-500" />
              <p className="text-xs text-red-500">Este campo es requerido</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="success">Validado</Label>
              <Input id="success" placeholder="Campo validado" className="border-green-500" />
              <p className="text-xs text-green-600">✓ Email válido</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Composition Info */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Composición</CardTitle>
          <CardDescription>Componentes shadcn/ui utilizados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">Input</Badge>
              Campos de texto y email
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">Textarea</Badge>
              Campos de texto multilínea
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">Select</Badge>
              Listas desplegables
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">Checkbox</Badge>
              Casillas de verificación
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">Radio Group</Badge>
              Opciones mutuamente excluyentes
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">Label</Badge>
              Etiquetas accesibles
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">Button</Badge>
              Acciones del formulario
            </p>
            <Separator className="my-3" />
            <p className="text-xs text-muted-foreground">
              Los formularios son composiciones de múltiples componentes shadcn/ui que trabajan
              juntos para crear experiencias de entrada de datos completas y accesibles.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
