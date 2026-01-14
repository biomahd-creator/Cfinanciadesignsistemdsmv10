import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { cn } from "../ui/utils";

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "svelte", label: "SvelteKit" },
];

const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
  { value: "pt", label: "Português" },
  { value: "it", label: "Italiano" },
];

export function ComboboxPage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState("");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Combobox</h1>
          <Badge variant="secondary">Pattern</Badge>
        </div>
        <p className="text-muted-foreground">
          Composición de Popover + Command para búsqueda y selección con autocompletado
        </p>
      </div>

      <Separator />

      {/* Basic Combobox */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Combobox Básico</h2>
          <p className="text-muted-foreground">Selector con búsqueda y autocompletado</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Seleccionar Framework</CardTitle>
            <CardDescription>Busca y selecciona tu framework favorito</CardDescription>
          </CardHeader>
          <CardContent>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[280px] justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)?.label
                    : "Selecciona framework..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[280px] p-0">
                <Command>
                  <CommandInput placeholder="Buscar framework..." />
                  <CommandList>
                    <CommandEmpty>No se encontraron resultados.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue);
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === framework.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            {value && (
              <p className="text-sm text-muted-foreground mt-4">
                Seleccionado: <strong>{frameworks.find((f) => f.value === value)?.label}</strong>
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Multiple Examples */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Variantes</h2>
          <p className="text-muted-foreground">Diferentes casos de uso del combobox</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Seleccionar Idioma</CardTitle>
              <CardDescription>Combobox con íconos de banderas</CardDescription>
            </CardHeader>
            <CardContent>
              <Popover open={open2} onOpenChange={setOpen2}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open2}
                    className="w-full justify-between"
                  >
                    {value2
                      ? languages.find((lang) => lang.value === value2)?.label
                      : "Selecciona idioma..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Buscar idioma..." />
                    <CommandList>
                      <CommandEmpty>No se encontraron idiomas.</CommandEmpty>
                      <CommandGroup>
                        {languages.map((lang) => (
                          <CommandItem
                            key={lang.value}
                            value={lang.value}
                            onSelect={(currentValue) => {
                              setValue2(currentValue === value2 ? "" : currentValue);
                              setOpen2(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value2 === lang.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {lang.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estados</CardTitle>
              <CardDescription>Diferentes estados del combobox</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">Normal</p>
                <Button variant="outline" className="w-full justify-between">
                  Selecciona una opción...
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Disabled</p>
                <Button variant="outline" className="w-full justify-between" disabled>
                  Selecciona una opción...
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">🔍 Búsqueda</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Filtra opciones en tiempo real mientras escribes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">⌨️ Teclado</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Navegación completa con teclas de dirección y Enter
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">♿ Accesible</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              ARIA compliant con roles y estados apropiados
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Code Example */}
      <Card className="bg-muted/50 dark:bg-card">
        <CardHeader>
          <CardTitle>Composición</CardTitle>
          <CardDescription>Componentes shadcn/ui utilizados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">Popover</Badge>
              Contenedor flotante para las opciones
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">Command</Badge>
              Sistema de búsqueda y filtrado
            </p>
            <p className="text-sm">
              <Badge variant="outline" className="mr-2">Button</Badge>
              Trigger para abrir el popover
            </p>
            <Separator className="my-3" />
            <p className="text-xs text-muted-foreground">
              El Combobox es un pattern de shadcn/ui que combina Popover + Command + Button
              para crear un selector con búsqueda y autocompletado.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
