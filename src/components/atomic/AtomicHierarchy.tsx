import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowDown } from "lucide-react";

export function AtomicHierarchy() {
  return (
    <div className="space-y-4">
      {/* Atoms */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Badge variant="outline" className="mb-2">Nivel 1</Badge>
              <h3 className="text-xl font-semibold">Atoms</h3>
              <p className="text-sm text-muted-foreground">Elementos básicos indivisibles</p>
            </div>
            <Badge className="text-lg px-4 py-2">6</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Button</Badge>
            <Badge variant="secondary">Input</Badge>
            <Badge variant="secondary">Label</Badge>
            <Badge variant="secondary">Badge</Badge>
            <Badge variant="secondary">Checkbox</Badge>
            <Badge variant="secondary">Switch</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Molecules */}
      <Card className="border-2 border-blue-500/20 bg-blue-500/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Badge variant="outline" className="mb-2">Nivel 2</Badge>
              <h3 className="text-xl font-semibold">Molecules</h3>
              <p className="text-sm text-muted-foreground">Combinaciones simples de átomos</p>
            </div>
            <Badge className="text-lg px-4 py-2">6</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">SearchBar</Badge>
            <Badge variant="secondary">FormField</Badge>
            <Badge variant="secondary">StatCard</Badge>
            <Badge variant="secondary">ActionButton</Badge>
            <Badge variant="secondary">TimelineItem</Badge>
            <Badge variant="secondary">FilterChip</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Organisms */}
      <Card className="border-2 border-purple-500/20 bg-purple-500/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Badge variant="outline" className="mb-2">Nivel 3</Badge>
              <h3 className="text-xl font-semibold">Organisms</h3>
              <p className="text-sm text-muted-foreground">Componentes complejos completos</p>
            </div>
            <Badge className="text-lg px-4 py-2">5</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">LoginForm</Badge>
            <Badge variant="secondary">InvoiceTable</Badge>
            <Badge variant="secondary">StatsGrid</Badge>
            <Badge variant="secondary">NavigationBar</Badge>
            <Badge variant="secondary">FilterBar</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Templates */}
      <Card className="border-2 border-orange-500/20 bg-orange-500/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Badge variant="outline" className="mb-2">Nivel 4</Badge>
              <h3 className="text-xl font-semibold">Templates</h3>
              <p className="text-sm text-muted-foreground">Layouts estructurales sin contenido</p>
            </div>
            <Badge className="text-lg px-4 py-2">3</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">DashboardTemplate</Badge>
            <Badge variant="secondary">ListPageTemplate</Badge>
            <Badge variant="secondary">AuthTemplate</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Pages */}
      <Card className="border-2 border-green-500/20 bg-green-500/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Badge variant="outline" className="mb-2">Nivel 5</Badge>
              <h3 className="text-xl font-semibold">Pages</h3>
              <p className="text-sm text-muted-foreground">Instancias con contenido real</p>
            </div>
            <Badge className="text-lg px-4 py-2">3</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">DashboardPage</Badge>
            <Badge variant="secondary">InvoiceListPage</Badge>
            <Badge variant="secondary">LoginPage</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
