import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { BarChart3, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Progress } from "../ui/progress";

interface MaturityLevel {
  level: "Stable" | "Beta" | "Alpha" | "Deprecated";
  color: string;
  description: string;
}

interface ComponentMaturity {
  category: string;
  components: {
    name: string;
    status: MaturityLevel["level"];
    coverage: number;
    documentation: boolean;
    tests: boolean;
    accessibility: boolean;
  }[];
}

const maturityLevels: Record<MaturityLevel["level"], MaturityLevel> = {
  "Stable": {
    level: "Stable",
    color: "bg-green-600",
    description: "Componente listo para producción con documentación completa"
  },
  "Beta": {
    level: "Beta",
    color: "bg-blue-600",
    description: "Componente funcional, puede tener cambios menores"
  },
  "Alpha": {
    level: "Alpha",
    color: "bg-yellow-600",
    description: "Componente en desarrollo, API puede cambiar"
  },
  "Deprecated": {
    level: "Deprecated",
    color: "bg-red-600",
    description: "Componente obsoleto, usar alternativa"
  }
};

const componentsData: ComponentMaturity[] = [
  {
    category: "Actions",
    components: [
      { name: "Button", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Toggle", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Toggle Group", status: "Stable", coverage: 95, documentation: true, tests: true, accessibility: true }
    ]
  },
  {
    category: "Forms",
    components: [
      { name: "Input", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Select", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Checkbox", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Radio Group", status: "Stable", coverage: 95, documentation: true, tests: true, accessibility: true },
      { name: "Textarea", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Date Picker", status: "Beta", coverage: 90, documentation: true, tests: false, accessibility: true },
      { name: "Multi Select", status: "Beta", coverage: 85, documentation: true, tests: false, accessibility: true }
    ]
  },
  {
    category: "Navigation",
    components: [
      { name: "Tabs", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Breadcrumb", status: "Stable", coverage: 95, documentation: true, tests: true, accessibility: true },
      { name: "Dropdown Menu", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Command", status: "Stable", coverage: 90, documentation: true, tests: true, accessibility: true }
    ]
  },
  {
    category: "Data Display",
    components: [
      { name: "Card", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Table", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Badge", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Avatar", status: "Stable", coverage: 95, documentation: true, tests: true, accessibility: true }
    ]
  },
  {
    category: "Feedback",
    components: [
      { name: "Alert", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Dialog", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Toast", status: "Stable", coverage: 100, documentation: true, tests: true, accessibility: true },
      { name: "Progress", status: "Stable", coverage: 95, documentation: true, tests: true, accessibility: true }
    ]
  },
  {
    category: "Advanced",
    components: [
      { name: "Data Table", status: "Beta", coverage: 85, documentation: true, tests: false, accessibility: true },
      { name: "Tree Table", status: "Beta", coverage: 80, documentation: true, tests: false, accessibility: true },
      { name: "Kanban Board", status: "Alpha", coverage: 70, documentation: false, tests: false, accessibility: false },
      { name: "Charts", status: "Beta", coverage: 90, documentation: true, tests: false, accessibility: true }
    ]
  }
];

function MaturityBadge({ status }: { status: MaturityLevel["level"] }) {
  const level = maturityLevels[status];
  return (
    <Badge className={`${level.color} text-white border-none`}>
      {status}
    </Badge>
  );
}

export function ComponentMaturityPage() {
  const totalComponents = componentsData.reduce((acc, cat) => acc + cat.components.length, 0);
  const stableComponents = componentsData.reduce(
    (acc, cat) => acc + cat.components.filter(c => c.status === "Stable").length, 
    0
  );
  const betaComponents = componentsData.reduce(
    (acc, cat) => acc + cat.components.filter(c => c.status === "Beta").length, 
    0
  );
  const alphaComponents = componentsData.reduce(
    (acc, cat) => acc + cat.components.filter(c => c.status === "Alpha").length, 
    0
  );

  const avgCoverage = Math.round(
    componentsData.reduce((acc, cat) => {
      const catAvg = cat.components.reduce((sum, c) => sum + c.coverage, 0) / cat.components.length;
      return acc + catAvg;
    }, 0) / componentsData.length
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <BarChart3 className="size-8 text-primary" />
          <h1 className="text-foreground">Component Maturity Matrix</h1>
          <Badge variant="default" className="bg-primary text-primary-foreground">Quality Metrics</Badge>
        </div>
        <p className="text-muted-foreground">
          Estado de madurez de todos los componentes del Design System. Métricas de cobertura, 
          documentación, testing y accesibilidad.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="elevation-1">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Componentes Totales</p>
                <p className="text-3xl font-semibold text-foreground">{totalComponents}</p>
              </div>
              <CheckCircle2 className="size-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Stable</p>
                <p className="text-3xl font-semibold text-green-600">{stableComponents}</p>
              </div>
              <div className="size-8 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold">
                ✓
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Beta / Alpha</p>
                <p className="text-3xl font-semibold text-blue-600">{betaComponents + alphaComponents}</p>
              </div>
              <Clock className="size-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Cobertura Promedio</p>
                <p className="text-3xl font-semibold text-primary">{avgCoverage}%</p>
              </div>
              <BarChart3 className="size-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Maturity Levels Legend */}
      <Card>
        <CardHeader>
          <CardTitle>Niveles de Madurez</CardTitle>
          <CardDescription>
            Clasificación del estado de cada componente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.values(maturityLevels).map((level) => (
              <div key={level.level} className="flex items-start gap-3 p-3 rounded-md border border-border">
                <div className={`size-3 rounded-full ${level.color} mt-1.5 shrink-0`} />
                <div>
                  <p className="font-semibold text-foreground">{level.level}</p>
                  <p className="text-sm text-muted-foreground">{level.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Components by Category */}
      {componentsData.map((category) => (
        <Card key={category.category}>
          <CardHeader>
            <CardTitle>{category.category}</CardTitle>
            <CardDescription>
              {category.components.length} componentes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {category.components.map((component) => (
                <div 
                  key={component.name}
                  className="p-4 rounded-md border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{component.name}</h4>
                        <MaturityBadge status={component.status} />
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          {component.documentation ? (
                            <CheckCircle2 className="size-3 text-green-600" />
                          ) : (
                            <AlertCircle className="size-3 text-yellow-600" />
                          )}
                          Docs
                        </span>
                        <span className="flex items-center gap-1">
                          {component.tests ? (
                            <CheckCircle2 className="size-3 text-green-600" />
                          ) : (
                            <AlertCircle className="size-3 text-yellow-600" />
                          )}
                          Tests
                        </span>
                        <span className="flex items-center gap-1">
                          {component.accessibility ? (
                            <CheckCircle2 className="size-3 text-green-600" />
                          ) : (
                            <AlertCircle className="size-3 text-yellow-600" />
                          )}
                          A11y
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-semibold text-foreground">{component.coverage}%</p>
                      <p className="text-xs text-muted-foreground">Cobertura</p>
                    </div>
                  </div>
                  <Progress value={component.coverage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Roadmap */}
      <Card className="elevation-2 border-primary/20">
        <CardHeader>
          <CardTitle>Roadmap</CardTitle>
          <CardDescription>
            Próximos pasos para mejorar la madurez del sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                Completar tests unitarios para componentes Beta (Data Table, Tree Table, Charts)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                Documentar componentes Alpha y crear páginas showcase dedicadas
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                Mejorar accesibilidad de Kanban Board (ARIA labels, keyboard navigation)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                Alcanzar 100% de cobertura de documentación en todos los componentes Stable
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
