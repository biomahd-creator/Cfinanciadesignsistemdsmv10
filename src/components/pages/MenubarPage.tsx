import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "../ui/menubar";

export function MenubarPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Menubar</h1>
          <Badge>Navigation</Badge>
        </div>
        <p className="text-muted-foreground">
          Barra de menús tradicional estilo desktop con submenús y atajos
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Menubar Completo</h2>
          <p className="text-muted-foreground">Ejemplo completo con File, Edit, View</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Application Menubar</CardTitle>
            <CardDescription>Barra de menús completa con todas las características</CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    New Window <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>New Incognito Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Email link</MenubarItem>
                      <MenubarItem>Messages</MenubarItem>
                      <MenubarItem>Notes</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Find</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Search the web</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Find...</MenubarItem>
                      <MenubarItem>Find Next</MenubarItem>
                      <MenubarItem>Find Previous</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem checked>Always Show Bookmarks Bar</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Always Show Full URLs</MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem inset>
                    Reload <MenubarShortcut>⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled inset>
                    Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Hide Sidebar</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value="default">
                    <MenubarRadioItem value="default">Default Profile</MenubarRadioItem>
                    <MenubarRadioItem value="work">Work Profile</MenubarRadioItem>
                    <MenubarRadioItem value="personal">Personal Profile</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem inset>Edit Profiles...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Menubar Simple</h2>
          <p className="text-muted-foreground">Versión simplificada</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Simple Menubar</CardTitle>
            <CardDescription>Menús básicos sin anidación</CardDescription>
          </CardHeader>
          <CardContent>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Home</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Dashboard</MenubarItem>
                  <MenubarItem>Analytics</MenubarItem>
                  <MenubarItem>Reports</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Projects</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>All Projects</MenubarItem>
                  <MenubarItem>Active</MenubarItem>
                  <MenubarItem>Archived</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>New Project</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Account</MenubarItem>
                  <MenubarItem>Preferences</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Log out</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Características</h2>
          <p className="text-muted-foreground">Tipos de items disponibles</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Checkbox Items</CardTitle>
              <CardDescription>Items con estado checked</CardDescription>
            </CardHeader>
            <CardContent>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Options</MenubarTrigger>
                  <MenubarContent>
                    <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
                    <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
                    <MenubarCheckboxItem checked>Show Minimap</MenubarCheckboxItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Radio Items</CardTitle>
              <CardDescription>Items con selección única</CardDescription>
            </CardHeader>
            <CardContent>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Theme</MenubarTrigger>
                  <MenubarContent>
                    <MenubarRadioGroup value="light">
                      <MenubarRadioItem value="light">Light</MenubarRadioItem>
                      <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
                      <MenubarRadioItem value="system">System</MenubarRadioItem>
                    </MenubarRadioGroup>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
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
            <p>• Aplicaciones desktop-style</p>
            <p>• Herramientas de productividad</p>
            <p>• Editores y IDEs</p>
            <p>• Cuando necesitas muchas acciones organizadas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">💡 Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Agrupa acciones relacionadas</p>
            <p>• Usa separadores para claridad visual</p>
            <p>• Incluye atajos de teclado cuando aplique</p>
            <p>• Deshabilita items cuando no apliquen</p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>♿ Accesibilidad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>✓ <strong>Keyboard navigation</strong> - Flechas para navegar</p>
          <p>✓ <strong>ARIA menubar</strong> - Role apropiado</p>
          <p>✓ <strong>Focus management</strong> - Tab entre menús principales</p>
          <p>✓ <strong>Escape key</strong> - Cierra submenús y menú principal</p>
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
              <Badge variant="outline" className="mr-2">Menubar</Badge>
              Basado en Radix UI Menubar
            </p>
            <Separator className="my-3" />
            <p className="text-xs text-muted-foreground">
              Menubar es ideal para aplicaciones de escritorio con muchas acciones organizadas
              jerárquicamente. Soporta checkboxes, radio groups, submenús y atajos.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
