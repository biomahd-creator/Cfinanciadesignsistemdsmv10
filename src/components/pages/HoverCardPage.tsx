import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { CalendarDays, MapPin, Mail, ExternalLink } from "lucide-react";

export function HoverCardPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-4xl font-semibold">Hover Card</h1>
          <Badge>Data Display</Badge>
        </div>
        <p className="text-muted-foreground">
          Card flotante con información adicional que aparece al hacer hover
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Basic Hover Card</h2>
          <p className="text-muted-foreground">User profile preview</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>User Preview</CardTitle>
            <CardDescription>Pasa el mouse sobre el nombre de usuario</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Creado por{" "}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto font-semibold">
                    @shadcn
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@shadcn</h4>
                      <p className="text-sm text-muted-foreground">
                        The React Framework – creado y mantenido por @vercel.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Usage Examples</h2>
          <p className="text-muted-foreground">Different hover card contexts</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Link Preview</CardTitle>
              <CardDescription>Preview de enlaces externos</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Visita{" "}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link" className="p-0 h-auto">
                      shadcn/ui
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-semibold">shadcn/ui</h4>
                      <p className="text-sm text-muted-foreground">
                        Beautifully designed and accessible UI components that you can
                        copy and paste into your apps.
                      </p>
                      <div className="flex items-center gap-2 pt-2">
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-xs text-muted-foreground">ui.shadcn.com</span>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                {" "}para más información
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Member</CardTitle>
              <CardDescription>Información del equipo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg transition-colors">
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">Product Manager</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">John Doe</h4>
                          <p className="text-sm text-muted-foreground">Product Manager</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 opacity-70" />
                          <span className="text-muted-foreground">john@company.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 opacity-70" />
                          <span className="text-muted-foreground">San Francisco, CA</span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Info</CardTitle>
              <CardDescription>Detalles de producto</CardDescription>
            </CardHeader>
            <CardContent>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors border">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">MacBook Pro 14"</p>
                        <p className="text-sm text-muted-foreground">Apple M3 Pro</p>
                      </div>
                      <Badge>En stock</Badge>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-semibold">MacBook Pro 14"</h4>
                    <p className="text-sm text-muted-foreground">
                      Chip Apple M3 Pro, 18GB RAM, 512GB SSD
                    </p>
                    <Separator />
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Precio</span>
                        <span className="font-semibold">$1,999</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Stock</span>
                        <Badge variant="outline">12 disponibles</Badge>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tooltip Avanzado</CardTitle>
              <CardDescription>Información rica de ayuda</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Email address{" "}
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-5 w-5 p-0 rounded-full">
                        ?
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-semibold">¿Por qué necesitamos tu email?</h4>
                        <p className="text-sm text-muted-foreground">
                          Usamos tu email para enviarte notificaciones importantes sobre
                          tu cuenta y actualizaciones del producto.
                        </p>
                        <Separator />
                        <p className="text-xs text-muted-foreground">
                          ✓ We will never share your email with third parties
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">✅ When to use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Previews de perfiles de usuario</p>
            <p>• Información adicional de links</p>
            <p>• Detalles de productos o items</p>
            <p>• Tooltips con contenido rico</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">💡 Diferencia con Tooltip</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• <strong>Tooltip:</strong> Texto breve y simple</p>
            <p>• <strong>Hover Card:</strong> Contenido rico y complejo</p>
            <p>• Hover Card puede tener imágenes, links, etc.</p>
            <p>• Tooltip es más ligero y rápido</p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>♿ Accessibility</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>✓ <strong>Keyboard accessible</strong> - Se abre con focus</p>
          <p>✓ <strong>Delay configurable</strong> - Tiempo antes de mostrar</p>
          <p>✓ <strong>ARIA attributes</strong> - aria-describedby apropiado</p>
          <p>✓ <strong>Focus management</strong> - No interfiere con navegación</p>
        </CardContent>
      </Card>

      <Separator />

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Composition</CardTitle>
          <CardDescription>shadcn/ui components used</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">HoverCard</Badge>
              Basado en Radix UI Hover Card
            </p>
            <Separator className="my-3" />
            <p className="text-xs text-muted-foreground">
              Hover Card proporciona una manera elegante de mostrar contenido adicional
              sin sobrecargar la interfaz. Ideal para previews y información contextual.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}