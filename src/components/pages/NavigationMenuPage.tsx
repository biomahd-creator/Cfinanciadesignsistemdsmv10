import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "../ui/utils";
import * as React from "react";

const components = [
  {
    title: "Alert Dialog",
    href: "#",
    description: "Modal dialog para confirmaciones importantes.",
  },
  {
    title: "Hover Card",
    href: "#",
    description: "Preview de contenido al hacer hover sobre un elemento.",
  },
  {
    title: "Progress",
    href: "#",
    description: "Barra de progreso para indicar estado de carga.",
  },
  {
    title: "Scroll Area",
    href: "#",
    description: "Custom scrollable and styled area.",
  },
  {
    title: "Tabs",
    href: "#",
    description: "Organiza contenido en pestañas navegables.",
  },
  {
    title: "Tooltip",
    href: "#",
    description: "Popup con información adicional sobre un elemento.",
  },
];

export function NavigationMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-4xl font-semibold">Navigation Menu</h1>
          <Badge>Navigation</Badge>
        </div>
        <p className="text-muted-foreground">
          Menú de navegación avanzado con mega menús y contenido rico
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Navigation Menu Completo</h2>
          <p className="text-muted-foreground">Mega menú con contenido rico</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Website Navigation</CardTitle>
            <CardDescription>Navegación principal con submenús extensos</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Componentes bellamente diseñados construidos con Radix UI y
                              Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#" title="Introduction">
                        Re-usable components construidos con Radix UI y Tailwind CSS.
                      </ListItem>
                      <ListItem href="#" title="Installation">
                        Cómo instalar dependencias y estructurar tu app.
                      </ListItem>
                      <ListItem href="#" title="Typography">
                        Estilos para headings, paragraphs, listas...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    Documentation
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Navigation Simple</h2>
          <p className="text-muted-foreground">Sin submenús, solo links</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Simple Links</CardTitle>
            <CardDescription>Navegación básica sin mega menú</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    Products
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">✅ When to use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Navegación principal de sitios web</p>
            <p>• Mega menús con contenido rico</p>
            <p>• Cuando tienes muchas categorías</p>
            <p>• Marketing y landing pages</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">💡 vs Menubar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• <strong>Navigation Menu:</strong> Websites, horizontal</p>
            <p>• <strong>Menubar:</strong> Apps, estilo desktop</p>
            <p>• Navigation Menu es más visual</p>
            <p>• Menubar tiene más funcionalidad</p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>♿ Accesibilidad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>✓ <strong>Keyboard navigation</strong> - Flechas y Tab</p>
          <p>✓ <strong>ARIA navigation</strong> - Role navigation apropiado</p>
          <p>✓ <strong>Focus management</strong> - Focus visible y lógico</p>
          <p>✓ <strong>Escape key</strong> - Cierra submenús</p>
        </CardContent>
      </Card>

      <Separator />

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Composición</CardTitle>
          <CardDescription>Componentes shadcn/ui utilizados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">NavigationMenu</Badge>
              Basado en Radix UI Navigation Menu
            </p>
            <Separator className="my-3" />
            <p className="text-xs text-muted-foreground">
              Navigation Menu es perfecto para sitios web con muchas páginas organizadas
              en categorías. Soporta mega menús con contenido rico y personalizado.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";