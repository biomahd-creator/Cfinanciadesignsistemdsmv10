import { GridShowcase } from "../ui/grid-showcase";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  Star,
  ShoppingCart,
  Heart,
  Eye,
  Grid3x3,
  Columns,
  Sparkles,
  Layout,
  Layers
} from "lucide-react";

export function GridShowcasePage() {
  return (
    <div className="space-y-12 max-w-7xl pb-16">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Grid3x3 className="h-8 w-8 text-primary" />
          <h1>Grid Layout Examples</h1>
        </div>
        <p className="text-muted-foreground">
          Demostración completa del componente GridShowcase con diferentes configuraciones de columnas y gaps.
        </p>
      </div>

      {/* Info Card */}
      <Card className="bg-primary/5 border-primary/20 elevation-1">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">¿Qué es GridShowcase?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                GridShowcase es un componente reutilizable que te permite controlar fácilmente el número 
                de columnas y el espaciado (gap) de tus layouts. Es completamente responsive y se adapta 
                automáticamente a diferentes tamaños de pantalla.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">1-4 Columnas</Badge>
                <Badge variant="outline">Auto-fit</Badge>
                <Badge variant="outline">Responsive</Badge>
                <Badge variant="outline">3 tamaños de gap</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== SECCIÓN 1: 4 COLUMNAS - STATS ===== */}
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Columns className="h-5 w-5 text-chart-1" />
            <h2>4 Columnas - Dashboard Stats</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Ideal para métricas y estadísticas principales. En mobile se muestra en 2 columnas.
          </p>
        </div>

        <GridShowcase columns={4} gap="sm">
          <Card className="elevation-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-chart-1" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">$45,231</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-chart-1">+20.1%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="elevation-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Active Users</CardTitle>
              <Users className="h-4 w-4 text-chart-2" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">2,350</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-chart-2">+180</span> new this week
              </p>
            </CardContent>
          </Card>

          <Card className="elevation-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-chart-3" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">+12.5%</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-chart-3">+2.3%</span> vs last quarter
              </p>
            </CardContent>
          </Card>

          <Card className="elevation-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Engagement</CardTitle>
              <Activity className="h-4 w-4 text-chart-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">89.2%</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-chart-4">+5.4%</span> increase
              </p>
            </CardContent>
          </Card>
        </GridShowcase>
      </div>

      {/* ===== SECCIÓN 2: 3 COLUMNAS - PRODUCTS ===== */}
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Layout className="h-5 w-5 text-chart-2" />
            <h2>3 Columnas - Product Cards</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Perfecto para catálogos de productos, portfolios o galerías. Mobile: 1 columna, Tablet: 2 columnas, Desktop: 3 columnas.
          </p>
        </div>

        <GridShowcase columns={3} gap="md">
          {[
            { name: "Premium Plan", price: "$29", icon: Star, color: "text-chart-1", bg: "bg-chart-1/10" },
            { name: "Business Plan", price: "$49", icon: TrendingUp, color: "text-chart-2", bg: "bg-chart-2/10" },
            { name: "Enterprise Plan", price: "$99", icon: Users, color: "text-chart-3", bg: "bg-chart-3/10" },
            { name: "Starter Plan", price: "$9", icon: Sparkles, color: "text-chart-4", bg: "bg-chart-4/10" },
            { name: "Pro Plan", price: "$79", icon: Activity, color: "text-chart-5", bg: "bg-chart-5/10" },
            { name: "Custom Plan", price: "Contact", icon: DollarSign, color: "text-primary", bg: "bg-primary/10" },
          ].map((product, i) => (
            <Card key={i} className="elevation-1 hover:elevation-2 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${product.bg}`}>
                    <product.icon className={`h-5 w-5 ${product.color}`} />
                  </div>
                  <Badge variant="outline">{product.price}</Badge>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>
                  Perfect for {product.name === "Custom Plan" ? "large teams" : "growing teams"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>✓ Unlimited projects</li>
                  <li>✓ Priority support</li>
                  <li>✓ Advanced analytics</li>
                </ul>
                <Button className="w-full" variant={i === 1 ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </GridShowcase>
      </div>

      {/* ===== SECCIÓN 3: 2 COLUMNAS - FORMS ===== */}
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="h-5 w-5 text-chart-3" />
            <h2>2 Columnas - Form Layouts</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Ideal para formularios lado a lado o comparaciones. Mobile: 1 columna, Desktop: 2 columnas.
          </p>
        </div>

        <GridShowcase columns={2} gap="lg">
          <Card className="elevation-1">
            <CardHeader>
              <CardTitle>Login Form</CardTitle>
              <CardDescription>Sign in to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="you@example.com" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Password</label>
                <Input type="password" placeholder="••••••••" className="mt-1" />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <input type="checkbox" id="remember" className="rounded" />
                <label htmlFor="remember" className="text-muted-foreground">Remember me</label>
              </div>
              <Button className="w-full">Sign In</Button>
              <p className="text-xs text-center text-muted-foreground">
                Don't have an account? <span className="text-primary cursor-pointer">Sign up</span>
              </p>
            </CardContent>
          </Card>

          <Card className="elevation-1">
            <CardHeader>
              <CardTitle>Register Form</CardTitle>
              <CardDescription>Create a new account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input placeholder="John Doe" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="you@example.com" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Password</label>
                <Input type="password" placeholder="••••••••" className="mt-1" />
              </div>
              <Button className="w-full">Create Account</Button>
              <p className="text-xs text-center text-muted-foreground">
                Already have an account? <span className="text-primary cursor-pointer">Sign in</span>
              </p>
            </CardContent>
          </Card>
        </GridShowcase>
      </div>

      {/* ===== SECCIÓN 4: AUTO-FIT - FEATURES ===== */}
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Grid3x3 className="h-5 w-5 text-chart-4" />
            <h2>Auto-fit - Dynamic Features</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Se adapta automáticamente al espacio disponible, creando tantas columnas como quepan (mínimo 280px por columna).
          </p>
        </div>

        <GridShowcase columns="auto" gap="md">
          {[
            { icon: "⚡", title: "Lightning Fast", description: "Optimized performance" },
            { icon: "🔒", title: "Secure", description: "Bank-level encryption" },
            { icon: "✅", title: "Reliable", description: "99.9% uptime SLA" },
            { icon: "📈", title: "Scalable", description: "Grows with your business" },
            { icon: "✨", title: "Modern UI", description: "Beautiful interfaces" },
            { icon: "🎯", title: "Focused", description: "Purpose-built tools" },
          ].map((feature, i) => (
            <Card key={i} className="elevation-1 text-center hover:elevation-2 transition-all">
              <CardContent className="pt-6 space-y-3">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </GridShowcase>
      </div>

      {/* ===== SECCIÓN 5: 1 COLUMNA - FULL WIDTH ===== */}
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Columns className="h-5 w-5 text-chart-5" />
            <h2>1 Columna - Full Width Components</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Para componentes que requieren todo el ancho disponible como tablas, timelines o gráficos.
          </p>
        </div>

        <GridShowcase columns={1} gap="md">
          <Card className="elevation-1">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>A list of your recent orders and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-3 text-sm font-medium">Order ID</th>
                      <th className="text-left p-3 text-sm font-medium">Customer</th>
                      <th className="text-left p-3 text-sm font-medium">Amount</th>
                      <th className="text-left p-3 text-sm font-medium">Status</th>
                      <th className="text-left p-3 text-sm font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "#3210", customer: "John Doe", amount: "$250.00", status: "Completed", date: "2024-12-15" },
                      { id: "#3209", customer: "Jane Smith", amount: "$120.00", status: "Processing", date: "2024-12-14" },
                      { id: "#3208", customer: "Bob Johnson", amount: "$350.00", status: "Completed", date: "2024-12-13" },
                      { id: "#3207", customer: "Alice Brown", amount: "$180.00", status: "Pending", date: "2024-12-12" },
                    ].map((order, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="p-3 text-sm font-medium">{order.id}</td>
                        <td className="p-3 text-sm">{order.customer}</td>
                        <td className="p-3 text-sm">{order.amount}</td>
                        <td className="p-3 text-sm">
                          <Badge 
                            variant={
                              order.status === "Completed" ? "default" : 
                              order.status === "Processing" ? "secondary" : 
                              "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="elevation-1">
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
              <CardDescription>Recent activities and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { title: "Order Completed", time: "2 hours ago", description: "Order #3210 has been delivered" },
                  { title: "Payment Received", time: "5 hours ago", description: "Payment of $250.00 confirmed" },
                  { title: "New Order", time: "1 day ago", description: "Order #3209 placed by Jane Smith" },
                  { title: "Account Updated", time: "2 days ago", description: "Profile information updated" },
                ].map((activity, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      {i !== 3 && <div className="w-0.5 h-full bg-border mt-2" />}
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </GridShowcase>
      </div>

      {/* ===== SECCIÓN 6: GAP VARIATIONS ===== */}
      <div>
        <div className="mb-6">
          <h2>Gap Variations</h2>
          <p className="text-sm text-muted-foreground">
            Comparación de los diferentes tamaños de espaciado disponibles.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">Gap Small (16px / 1rem)</h3>
            <GridShowcase columns={4} gap="sm">
              <Card className="elevation-1"><CardContent className="pt-6 text-center">Item 1</CardContent></Card>
              <Card className="elevation-1"><CardContent className="pt-6 text-center">Item 2</CardContent></Card>
              <Card className="elevation-1"><CardContent className="pt-6 text-center">Item 3</CardContent></Card>
              <Card className="elevation-1"><CardContent className="pt-6 text-center">Item 4</CardContent></Card>
            </GridShowcase>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">Gap Medium (24px / 1.5rem) - Default</h3>
            <GridShowcase columns={4} gap="md">
              <Card className="elevation-1"><CardContent className="pt-6 text-center">Item 1</CardContent></Card>
              <Card className="elevation-1"><CardContent className="pt-6 text-center">Item 2</CardContent></Card>
              <Card className="elevation-1"><CardContent className="pt-6 text-center">Item 3</CardContent></Card>
              <Card className="elevation-1"><CardContent className="pt-6 text-center">Item 4</CardContent></Card>
            </GridShowcase>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">Gap Large (32px / 2rem)</h3>
            <GridShowcase columns={4} gap="lg">
              <Card className="elevation-1"><CardContent className="pt-6 text-center">Item 1</CardContent></Card>
              <Card className="elevation-1"><CardContent className="pt-6 text-center">Item 2</CardContent></Card>
              <Card className="elevation-1"><CardContent className="pt-6 text-center">Item 3</CardContent></Card>
              <Card className="elevation-1"><CardContent className="pt-6 text-center">Item 4</CardContent></Card>
            </GridShowcase>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <Card className="elevation-1 bg-muted/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle>Cómo Usar</CardTitle>
          </div>
          <CardDescription>Ejemplo de código para usar el componente GridShowcase</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-secondary/10 p-4 rounded-md overflow-x-auto text-sm">
            <code>{`import { GridShowcase } from "../ui/grid-showcase";
import { Card } from "../ui/card";

// 3 columnas con gap medio
<GridShowcase columns={3} gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</GridShowcase>

// 4 columnas con gap pequeño
<GridShowcase columns={4} gap="sm">
  <Card>Stat 1</Card>
  <Card>Stat 2</Card>
  <Card>Stat 3</Card>
  <Card>Stat 4</Card>
</GridShowcase>

// Auto-fit (dinámico)
<GridShowcase columns="auto">
  <Card>Feature 1</Card>
  <Card>Feature 2</Card>
  <Card>Feature 3</Card>
</GridShowcase>`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Props Table */}
      <Card className="elevation-1">
        <CardHeader>
          <CardTitle>Props API</CardTitle>
          <CardDescription>Propiedades disponibles del componente GridShowcase</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-3 text-sm font-medium">Prop</th>
                  <th className="text-left p-3 text-sm font-medium">Type</th>
                  <th className="text-left p-3 text-sm font-medium">Default</th>
                  <th className="text-left p-3 text-sm font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-sm font-mono">title</td>
                  <td className="p-3 text-sm font-mono">string</td>
                  <td className="p-3 text-sm text-muted-foreground">-</td>
                  <td className="p-3 text-sm">Título opcional de la sección</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-sm font-mono">description</td>
                  <td className="p-3 text-sm font-mono">string</td>
                  <td className="p-3 text-sm text-muted-foreground">-</td>
                  <td className="p-3 text-sm">Descripción opcional</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-sm font-mono">columns</td>
                  <td className="p-3 text-sm font-mono">1 | 2 | 3 | 4 | "auto"</td>
                  <td className="p-3 text-sm font-mono">2</td>
                  <td className="p-3 text-sm">Número de columnas o "auto" para ajuste dinámico</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-sm font-mono">gap</td>
                  <td className="p-3 text-sm font-mono">"sm" | "md" | "lg"</td>
                  <td className="p-3 text-sm font-mono">"md"</td>
                  <td className="p-3 text-sm">Espaciado entre elementos (16px, 24px, 32px)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-sm font-mono">children</td>
                  <td className="p-3 text-sm font-mono">ReactNode</td>
                  <td className="p-3 text-sm text-muted-foreground">-</td>
                  <td className="p-3 text-sm">Contenido a mostrar en el grid</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm font-mono">className</td>
                  <td className="p-3 text-sm font-mono">string</td>
                  <td className="p-3 text-sm text-muted-foreground">-</td>
                  <td className="p-3 text-sm">Clases CSS adicionales</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
