import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "../ui/context-menu";

export function ContextMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Context Menu</h1>
          <Badge>Navigation</Badge>
        </div>
        <p className="text-muted-foreground">
          Menú contextual que aparece al hacer click derecho
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Context Menu Básico</h2>
          <p className="text-muted-foreground">Click derecho en el área gris</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Right Click Menu</CardTitle>
            <CardDescription>Haz click derecho para ver el menú contextual</CardDescription>
          </CardHeader>
          <CardContent>
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[200px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Click derecho aquí
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem inset>
                  Back
                  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset disabled>
                  Forward
                  <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset>
                  Reload
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      Save Page As...
                      <ContextMenuShortcut>⌘S</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                    <ContextMenuItem>Name Window...</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem checked>
                  Show Bookmarks Bar
                  <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup value="pedro">
                  <ContextMenuRadioItem value="pedro">
                    Pedro Duarte
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Casos de Uso</h2>
          <p className="text-muted-foreground">Diferentes contextos de aplicación</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>File Context Menu</CardTitle>
              <CardDescription>Acciones de archivo</CardDescription>
            </CardHeader>
            <CardContent>
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                  📄 documento.pdf
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Open</ContextMenuItem>
                  <ContextMenuItem>Open with...</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Rename</ContextMenuItem>
                  <ContextMenuItem>Duplicate</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Move to Trash</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Get Info</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Image Context Menu</CardTitle>
              <CardDescription>Acciones de imagen</CardDescription>
            </CardHeader>
            <CardContent>
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm bg-muted/30">
                  🖼️ image.jpg
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>View Image</ContextMenuItem>
                  <ContextMenuItem>Copy Image</ContextMenuItem>
                  <ContextMenuItem>Copy Image Address</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Save Image As...</ContextMenuItem>
                  <ContextMenuItem>Open Image in New Tab</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Search Image with Google</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Text Context Menu</CardTitle>
              <CardDescription>Acciones de texto</CardDescription>
            </CardHeader>
            <CardContent>
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm p-4">
                  <p className="text-center">
                    Selecciona este texto y haz click derecho para ver opciones
                  </p>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>
                    Cut
                    <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem>
                    Copy
                    <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem>
                    Paste
                    <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Select All</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuSub>
                    <ContextMenuSubTrigger>Format</ContextMenuSubTrigger>
                    <ContextMenuSubContent>
                      <ContextMenuItem>Bold</ContextMenuItem>
                      <ContextMenuItem>Italic</ContextMenuItem>
                      <ContextMenuItem>Underline</ContextMenuItem>
                    </ContextMenuSubContent>
                  </ContextMenuSub>
                </ContextMenuContent>
              </ContextMenu>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Table Row Menu</CardTitle>
              <CardDescription>Acciones de fila</CardDescription>
            </CardHeader>
            <CardContent>
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                  Click derecho en esta fila
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Edit Row</ContextMenuItem>
                  <ContextMenuItem>Duplicate Row</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Insert Row Above</ContextMenuItem>
                  <ContextMenuItem>Insert Row Below</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem className="text-red-600">Delete Row</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">✅ Cuándo usar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Acciones contextuales sobre elementos</p>
            <p>• Alternativa al menú de opciones</p>
            <p>• Aplicaciones desktop-style</p>
            <p>• Power users que usan click derecho</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">💡 Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• No confíes SOLO en context menu</p>
            <p>• Provee alternativas (botones, toolbars)</p>
            <p>• Mobile no tiene click derecho</p>
            <p>• Usa para acciones secundarias</p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>♿ Accesibilidad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>✓ <strong>Keyboard shortcut</strong> - Context menu key o Shift+F10</p>
          <p>✓ <strong>ARIA menu</strong> - Role menu apropiado</p>
          <p>✓ <strong>Focus management</strong> - Navegación con flechas</p>
          <p>✓ <strong>Escape key</strong> - Cierra el menú</p>
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
              <Badge variant="outline" className="mr-2">ContextMenu</Badge>
              Basado en Radix UI Context Menu
            </p>
            <Separator className="my-3" />
            <p className="text-xs text-muted-foreground">
              Context Menu es ideal para aplicaciones con muchas acciones contextuales.
              Soporta checkboxes, radio groups, submenús y atajos de teclado.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
