import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AtomicHierarchy } from "../atomic/AtomicHierarchy";

// Atoms (shadcn/ui base components)
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

// Molecules
import { SearchBar } from "../atomic/molecules/SearchBar";
import { FormField } from "../atomic/molecules/FormField";
import { StatCard } from "../atomic/molecules/StatCard";
import { ActionButton } from "../atomic/molecules/ActionButton";
import { FilterChip } from "../atomic/molecules/FilterChip";

// Organisms
import { LoginForm } from "../atomic/organisms/LoginForm";
import { InvoiceTable } from "../atomic/organisms/InvoiceTable";
import { StatsGrid } from "../atomic/organisms/StatsGrid";
import { NavigationBar } from "../atomic/organisms/NavigationBar";
import { FilterBar } from "../atomic/organisms/FilterBar";

// Templates & Pages
import { DashboardPage } from "../atomic/pages/DashboardPage";
import { InvoiceListPage } from "../atomic/pages/InvoiceListPage";
import { LoginPage } from "../atomic/pages/LoginPage";

import { DollarSign, Download, Settings, HelpCircle } from "lucide-react";

export function AtomicDesignSection({ defaultTab = "overview" }: { defaultTab?: string }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Atomic Design System</h2>
        <p className="text-sm text-muted-foreground">
          Metodología de Brad Frost: Atoms → Molecules → Organisms → Templates → Pages
        </p>
      </div>

      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="atoms">Atoms</TabsTrigger>
          <TabsTrigger value="molecules">Molecules</TabsTrigger>
          <TabsTrigger value="organisms">Organisms</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="pages">Pages</TabsTrigger>
        </TabsList>

        {/* OVERVIEW */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>¿Qué es Atomic Design?</CardTitle>
              <CardDescription>
                Metodología para crear sistemas de diseño mantenibles y escalables
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Card className="border-2">
                  <CardHeader className="pb-3">
                    <Badge variant="outline" className="w-fit">Nivel 1</Badge>
                    <CardTitle className="text-lg mt-2">Atoms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Elementos básicos más pequeños del sistema. Button, Input, Label, Badge.
                    </p>
                    <div className="mt-4">
                      <Badge variant="secondary">6 componentes</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader className="pb-3">
                    <Badge variant="outline" className="w-fit">Nivel 2</Badge>
                    <CardTitle className="text-lg mt-2">Molecules</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Grupos simples de átomos que funcionan juntos. SearchBar, FormField.
                    </p>
                    <div className="mt-4">
                      <Badge variant="secondary">6 componentes</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader className="pb-3">
                    <Badge variant="outline" className="w-fit">Nivel 3</Badge>
                    <CardTitle className="text-lg mt-2">Organisms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Componentes complejos que forman secciones completas. LoginForm, DataTable.
                    </p>
                    <div className="mt-4">
                      <Badge variant="secondary">5 componentes</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader className="pb-3">
                    <Badge variant="outline" className="w-fit">Nivel 4</Badge>
                    <CardTitle className="text-lg mt-2">Templates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Layouts que organizan organismos. DashboardTemplate, ListTemplate.
                    </p>
                    <div className="mt-4">
                      <Badge variant="secondary">3 templates</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader className="pb-3">
                    <Badge variant="outline" className="w-fit">Nivel 5</Badge>
                    <CardTitle className="text-lg mt-2">Pages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Instancias específicas con contenido real. Dashboard, Invoices, Login.
                    </p>
                    <div className="mt-4">
                      <Badge variant="secondary">3 pages</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Jerarquía Visual</h3>
                <AtomicHierarchy />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Principios Clave</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">🔄 Reutilización</h4>
                    <p className="text-sm text-muted-foreground">
                      Construye componentes una vez, úsalos en todas partes
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">🎯 Consistencia</h4>
                    <p className="text-sm text-muted-foreground">
                      Mantén una experiencia uniforme en toda la aplicación
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">📈 Escalabilidad</h4>
                    <p className="text-sm text-muted-foreground">
                      Crece tu sistema de diseño de manera organizada
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ATOMS */}
        <TabsContent value="atoms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Atoms - Elementos Básicos</CardTitle>
              <CardDescription>
                Componentes fundamentales de shadcn/ui. No se pueden dividir más.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Inputs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                  <Input placeholder="Text input" />
                  <Input type="email" placeholder="Email input" />
                  <Input type="password" placeholder="Password input" />
                  <Input disabled placeholder="Disabled input" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Labels & Badges</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <Label>Simple Label</Label>
                    <Label htmlFor="required">Required Label *</Label>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Checkboxes & Form Elements</h3>
                <div className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="atom1" />
                    <Label htmlFor="atom1">Accept terms</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="atom2" checked />
                    <Label htmlFor="atom2">Subscribe</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* MOLECULES */}
        <TabsContent value="molecules" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Molecules - Combinaciones Simples</CardTitle>
              <CardDescription>
                Grupos de átomos que funcionan juntos como una unidad
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">SearchBar</h3>
                <p className="text-sm text-muted-foreground">Input + Button</p>
                <div className="max-w-md">
                  <SearchBar placeholder="Buscar facturas..." />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">FormField</h3>
                <p className="text-sm text-muted-foreground">Label + Input + Helper Text + Error State</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                  <FormField
                    label="Nombre de Empresa"
                    id="company-name"
                    placeholder="Ej: Empresa ABC S.A."
                    required
                    helperText="Ingresa el nombre legal de la empresa"
                  />
                  <FormField
                    label="RUT"
                    id="rut"
                    placeholder="12.345.678-9"
                    required
                    error="RUT inválido"
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">StatCard</h3>
                <p className="text-sm text-muted-foreground">Card + Icon + Badge + Text</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <StatCard
                    title="Cartera Total"
                    value="$45.2M"
                    change="+12.5%"
                    trend="up"
                    icon={DollarSign}
                  />
                  <StatCard
                    title="Facturas Procesadas"
                    value="1,234"
                    change="+8.2%"
                    trend="up"
                    icon={Download}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">ActionButton</h3>
                <p className="text-sm text-muted-foreground">Button + Icon + Tooltip</p>
                <div className="flex gap-2">
                  <ActionButton icon={Settings} label="Configuración" />
                  <ActionButton icon={HelpCircle} label="Ayuda" />
                  <ActionButton icon={Download} label="Descargar" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">FilterChip</h3>
                <p className="text-sm text-muted-foreground">Badge + Button + Icon</p>
                <div className="flex flex-wrap gap-2">
                  <FilterChip label="Estado" value="Aprobada" onRemove={() => {}} />
                  <FilterChip label="Fecha" value="Enero 2024" onRemove={() => {}} />
                  <FilterChip label="Monto" value="$1M - $5M" onRemove={() => {}} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ORGANISMS */}
        <TabsContent value="organisms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Organisms - Componentes Complejos</CardTitle>
              <CardDescription>
                Secciones completas formadas por moléculas y átomos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">NavigationBar</h3>
                <p className="text-sm text-muted-foreground">
                  ActionButtons + DropdownMenu + Avatar + Badges
                </p>
                <div className="border rounded-lg overflow-hidden">
                  <NavigationBar />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">StatsGrid</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple StatCards en layout de grid
                </p>
                <StatsGrid />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">FilterBar</h3>
                <p className="text-sm text-muted-foreground">
                  SearchBar + Select + FilterChips + Buttons
                </p>
                <FilterBar />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">InvoiceTable</h3>
                <p className="text-sm text-muted-foreground">
                  Table + Badge + DropdownMenu + Buttons
                </p>
                <InvoiceTable />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">LoginForm</h3>
                <p className="text-sm text-muted-foreground">
                  Card + FormFields + Buttons + Separator + Checkbox
                </p>
                <div className="flex justify-center">
                  <LoginForm />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TEMPLATES */}
        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Templates - Layouts Estructurales</CardTitle>
              <CardDescription>
                Esqueletos de páginas que organizan organismos sin contenido específico
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">DashboardTemplate</h3>
                <p className="text-sm text-muted-foreground">
                  NavigationBar + Page Header + Content Area + Footer
                </p>
                <div className="border rounded-lg p-4 bg-muted/50">
                  <div className="space-y-2 text-sm">
                    <div className="p-2 bg-primary/10 rounded">NavigationBar</div>
                    <div className="p-2 bg-secondary/10 rounded">Page Header (Title + Description)</div>
                    <div className="p-8 bg-background rounded border-2 border-dashed">
                      Content Area (Children)
                    </div>
                    <div className="p-2 bg-muted rounded">Footer</div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">ListPageTemplate</h3>
                <p className="text-sm text-muted-foreground">
                  NavigationBar + Page Header + Primary Action + Filters + List Area
                </p>
                <div className="border rounded-lg p-4 bg-muted/50">
                  <div className="space-y-2 text-sm">
                    <div className="p-2 bg-primary/10 rounded">NavigationBar</div>
                    <div className="flex gap-2">
                      <div className="flex-1 p-2 bg-secondary/10 rounded">Page Header</div>
                      <div className="p-2 bg-primary rounded text-primary-foreground">Primary Action Button</div>
                    </div>
                    <div className="p-2 bg-muted rounded">Filters Section</div>
                    <div className="p-8 bg-background rounded border-2 border-dashed">
                      List Content Area
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">AuthTemplate</h3>
                <p className="text-sm text-muted-foreground">
                  Split Layout: Branding + Form Area
                </p>
                <div className="border rounded-lg p-4 bg-muted/50">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="p-8 bg-primary/10 rounded">
                      Branding Section<br/>
                      (Logo + Benefits)
                    </div>
                    <div className="p-8 bg-background rounded border-2 border-dashed">
                      Form Area<br/>
                      (Children)
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PAGES */}
        <TabsContent value="pages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pages - Instancias Completas</CardTitle>
              <CardDescription>
                Templates con contenido real y funcionalidad específica
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Dashboard Page</h3>
                    <p className="text-sm text-muted-foreground">
                      Vista ejecutiva con KPIs y actividad reciente
                    </p>
                  </div>
                  <Badge>Vista Completa Abajo</Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Invoice List Page</h3>
                    <p className="text-sm text-muted-foreground">
                      Gestión completa de facturas con filtros y paginación
                    </p>
                  </div>
                  <Badge>Vista Completa Abajo</Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Login Page</h3>
                    <p className="text-sm text-muted-foreground">
                      Autenticación con branding y opciones de SSO
                    </p>
                  </div>
                  <Badge>Vista Completa Abajo</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full Page Examples */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Preview: Dashboard Page</h3>
              <div className="border-4 rounded-lg overflow-hidden bg-muted/20 p-4">
                <DashboardPage />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Preview: Invoice List Page</h3>
              <div className="border-4 rounded-lg overflow-hidden bg-muted/20 p-4">
                <InvoiceListPage />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Preview: Login Page</h3>
              <div className="border-4 rounded-lg overflow-hidden bg-muted/20 p-4">
                <LoginPage />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}