// ====================================
// EJEMPLO PRÁCTICO: Uso de GridShowcase
// ====================================

import { GridShowcase } from "./components/ui/grid-showcase";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Badge } from "./components/ui/badge";

export function ExampleGridPage() {
  return (
    <div className="space-y-12 max-w-7xl">
      {/* ===== SECCIÓN 1: STATS (4 COLUMNAS) ===== */}
      <GridShowcase
        title="Estadísticas del Dashboard"
        description="Métricas principales en 4 columnas"
        columns={4}
        gap="sm"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,234</p>
            <Badge variant="outline" className="mt-2">+12%</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$45,678</p>
            <Badge variant="outline" className="mt-2">+8%</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">567</p>
            <Badge variant="outline" className="mt-2">+23%</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">89%</p>
            <Badge variant="outline" className="mt-2">+5%</Badge>
          </CardContent>
        </Card>
      </GridShowcase>

      {/* ===== SECCIÓN 2: FORMS (2 COLUMNAS) ===== */}
      <GridShowcase
        title="Formularios de Usuario"
        description="Formularios lado a lado para comparación"
        columns={2}
        gap="lg"
      >
        <Card>
          <CardHeader>
            <CardTitle>Login Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm">Email</label>
              <Input type="email" placeholder="tu@email.com" />
            </div>
            <div>
              <label className="text-sm">Password</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full">Sign In</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Register Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm">Full Name</label>
              <Input placeholder="John Doe" />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <Input type="email" placeholder="tu@email.com" />
            </div>
            <Button className="w-full">Sign Up</Button>
          </CardContent>
        </Card>
      </GridShowcase>

      {/* ===== SECCIÓN 3: PRODUCTS (3 COLUMNAS) ===== */}
      <GridShowcase
        title="Catálogo de Productos"
        description="Productos en grilla de 3 columnas"
        columns={3}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Product {i}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-32 bg-muted rounded-md flex items-center justify-center">
                <span className="text-muted-foreground">Image {i}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Descripción del producto {i}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-bold">$99.00</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </GridShowcase>

      {/* ===== SECCIÓN 4: FEATURES (AUTO) ===== */}
      <GridShowcase
        title="Features Destacadas"
        description="Se adapta automáticamente al espacio disponible"
        columns="auto"
      >
        {[
          { title: "Fast", icon: "⚡" },
          { title: "Secure", icon: "🔒" },
          { title: "Reliable", icon: "✅" },
          { title: "Scalable", icon: "📈" },
          { title: "Modern", icon: "✨" },
        ].map((feature, i) => (
          <Card key={i} className="text-center">
            <CardContent className="pt-6 space-y-2">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                Feature description here
              </p>
            </CardContent>
          </Card>
        ))}
      </GridShowcase>

      {/* ===== SECCIÓN 5: FULL WIDTH (1 COLUMNA) ===== */}
      <GridShowcase
        title="Componentes Full Width"
        description="Componentes que requieren todo el ancho"
        columns={1}
      >
        <Card>
          <CardHeader>
            <CardTitle>Data Table</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md p-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">ID</th>
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Email</th>
                    <th className="text-left p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((i) => (
                    <tr key={i} className="border-b">
                      <td className="p-2">{i}</td>
                      <td className="p-2">User {i}</td>
                      <td className="p-2">user{i}@example.com</td>
                      <td className="p-2">
                        <Badge>Active</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Timeline Component</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-medium">Event {i}</p>
                    <p className="text-sm text-muted-foreground">
                      Event description here
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </GridShowcase>
    </div>
  );
}

// ====================================
// VARIACIONES DE ESPACIADO
// ====================================

export function GapVariationsExample() {
  return (
    <div className="space-y-12">
      {/* Gap pequeño */}
      <GridShowcase columns={4} gap="sm" title="Gap Small (16px)">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
        <Card>Item 4</Card>
      </GridShowcase>

      {/* Gap medio */}
      <GridShowcase columns={4} gap="md" title="Gap Medium (24px)">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
        <Card>Item 4</Card>
      </GridShowcase>

      {/* Gap grande */}
      <GridShowcase columns={4} gap="lg" title="Gap Large (32px)">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
        <Card>Item 4</Card>
      </GridShowcase>
    </div>
  );
}

// ====================================
// USO DIRECTO CON TAILWIND (SIN GridShowcase)
// ====================================

export function DirectTailwindExample() {
  return (
    <div className="space-y-8">
      {/* Método 1: Grid simple de 3 columnas */}
      <div>
        <h2>3 Columnas Responsive</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <Card>Item 1</Card>
          <Card>Item 2</Card>
          <Card>Item 3</Card>
        </div>
      </div>

      {/* Método 2: Grid con auto-fit */}
      <div>
        <h2>Auto-fit (dinámico)</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-4">
          <Card>Item 1</Card>
          <Card>Item 2</Card>
          <Card>Item 3</Card>
          <Card>Item 4</Card>
        </div>
      </div>

      {/* Método 3: Grid con columnas específicas por breakpoint */}
      <div>
        <h2>Todas las columnas responsive</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-4">
          <Card>1</Card>
          <Card>2</Card>
          <Card>3</Card>
          <Card>4</Card>
          <Card>5</Card>
        </div>
      </div>
    </div>
  );
}
