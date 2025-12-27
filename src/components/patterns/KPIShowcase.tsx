import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Users,
  FileText,
  Activity,
  Target,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  ShoppingCart,
  ArrowUp,
  ArrowDown,
  Minus,
  ArrowRight,
  Clock,
  CheckCircle,
  Percent,
  Wallet
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from "recharts";
import { getChartColorsMap, getBrandColors, getUIColors } from "../../lib/theme-utils";
import { ComponentShowcase } from "../ui/component-showcase";

// ==========================================
// DATA CONSTANTS (Mock Data)
// ==========================================
const monthlyRevenueData = [
  { mes: "Ene", ingresos: 45000, gastos: 28000, meta: 50000 },
  { mes: "Feb", ingresos: 52000, gastos: 31000, meta: 50000 },
  { mes: "Mar", ingresos: 48000, gastos: 29000, meta: 50000 },
  { mes: "Abr", ingresos: 61000, gastos: 35000, meta: 55000 },
  { mes: "May", ingresos: 55000, gastos: 32000, meta: 55000 },
  { mes: "Jun", ingresos: 67000, gastos: 38000, meta: 60000 },
  { mes: "Jul", ingresos: 72000, gastos: 41000, meta: 65000 },
  { mes: "Ago", ingresos: 68000, gastos: 39000, meta: 65000 },
  { mes: "Sep", ingresos: 75000, gastos: 43000, meta: 70000 },
  { mes: "Oct", ingresos: 81000, gastos: 46000, meta: 75000 },
  { mes: "Nov", ingresos: 78000, gastos: 44000, meta: 75000 },
  { mes: "Dic", ingresos: 85000, gastos: 48000, meta: 80000 },
];

const clientGrowthData = [
  { mes: "Ene", nuevos: 5, activos: 32, inactivos: 3 },
  { mes: "Feb", nuevos: 8, activos: 37, inactivos: 2 },
  { mes: "Mar", nuevos: 6, activos: 41, inactivos: 4 },
  { mes: "Abr", nuevos: 10, activos: 47, inactivos: 3 },
  { mes: "May", nuevos: 7, activos: 51, inactivos: 5 },
  { mes: "Jun", nuevos: 12, activos: 58, inactivos: 2 },
];

const performanceMetrics = [
  { categoria: "Aprobación", score: 92, fullMark: 100 },
  { categoria: "Cobranza", score: 88, fullMark: 100 },
  { categoria: "Liquidez", score: 75, fullMark: 100 },
  { categoria: "Satisfacción", score: 94, fullMark: 100 },
  { categoria: "Eficiencia", score: 85, fullMark: 100 },
];

const operationalData = [
  { dia: "Lun", operaciones: 12, monto: 145000, tiempo: 2.3 },
  { dia: "Mar", operaciones: 15, monto: 178000, tiempo: 2.1 },
  { dia: "Mié", operaciones: 18, monto: 210000, tiempo: 1.9 },
  { dia: "Jue", operaciones: 14, monto: 165000, tiempo: 2.2 },
  { dia: "Vie", operaciones: 20, monto: 235000, tiempo: 1.8 },
  { dia: "Sáb", operaciones: 8, monto: 95000, tiempo: 2.5 },
];

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  format?: "currency" | "percentage" | "number";
}

function KPICard({ title, value, change, changeLabel, icon, trend, format = "number" }: KPICardProps) {
  const formatValue = (val: string | number) => {
    if (format === "currency") return `$${val.toLocaleString()}`;
    if (format === "percentage") return `${val}%`;
    return val;
  };

  return (
    <Card className="elevation-2">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{formatValue(value)}</p>
            {change !== undefined && (
              <div className="flex items-center gap-2">
                {trend === "up" && (
                  <Badge variant="default" className="bg-green-500/10 text-green-600 border-green-500/20">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +{change}%
                  </Badge>
                )}
                {trend === "down" && (
                  <Badge variant="destructive" className="bg-red-500/10 text-red-600 border-red-500/20">
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                    -{change}%
                  </Badge>
                )}
                {changeLabel && (
                  <span className="text-xs text-muted-foreground">{changeLabel}</span>
                )}
              </div>
            )}
          </div>
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function KPIShowcase() {
  // ==========================================
  // STATES
  // ==========================================
  const [activeInteractiveCard, setActiveInteractiveCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("revenue");

  // ==========================================
  // THEME COLORS
  // ==========================================
  const chart1Color = getChartColorsMap().chart1;
  const chart2Color = getChartColorsMap().chart2;
  const chart3Color = getChartColorsMap().chart3;
  const chart4Color = getChartColorsMap().chart4;
  const chart5Color = getChartColorsMap().chart5;
  const mutedForegroundColor = getUIColors().mutedForeground;
  const cardBg = getUIColors().card;
  const borderColor = getUIColors().border;

  // ==========================================
  // PREVIEWS & CODE
  // ==========================================

  // --- 1. Interactive KPI Cards (MAIN PREVIEW) ---
  const InteractivePreview = (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
      {/* Interactive Card 1: Negotiating */}
      <div 
        onClick={() => setActiveInteractiveCard(activeInteractiveCard === "negotiating" ? null : "negotiating")}
        className={`
          group relative rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer h-[150px]
          ${activeInteractiveCard === "negotiating" 
            ? "bg-lime-50 border-lime-200 elevation-3" 
            : "bg-white border-border elevation-1 hover:elevation-3 hover:bg-lime-50 hover:border-lime-200"
          }
        `}
      >
        <div className="p-6 h-full flex flex-col justify-between relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-base text-foreground">En Negociación</h3>
              <p className="text-xs text-muted-foreground mt-1">Pendientes de confirmación</p>
            </div>
            <Badge className={`
              h-6 w-6 rounded-full flex items-center justify-center p-0 transition-colors font-medium text-xs
              ${activeInteractiveCard === "negotiating"
                ? "bg-lime-600 text-white"
                : "bg-gray-500 text-white group-hover:bg-lime-600"
              }
            `}>
              12
            </Badge>
          </div>
          <div className={`transition-opacity duration-200 ${activeInteractiveCard === "negotiating" ? "opacity-100" : "group-hover:opacity-0"}`}>
            <span className={`text-3xl font-bold tracking-tight ${activeInteractiveCard === "negotiating" ? "text-lime-600" : ""}`}>
              $ 12.5M
            </span>
          </div>
        </div>

        {/* Hover Action Button (Slides Up) - Only when NOT active */}
        {activeInteractiveCard !== "negotiating" && (
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out h-[60px] bg-lime-600 flex items-center justify-between px-6 text-white z-20">
            <span className="font-medium">View Invoices</span>
            <ArrowDownRight className="h-5 w-5" />
          </div>
        )}
      </div>

       {/* Interactive Card 2: Approved */}
       <div 
        onClick={() => setActiveInteractiveCard(activeInteractiveCard === "approved" ? null : "approved")}
        className={`
          group relative rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer h-[150px]
          ${activeInteractiveCard === "approved" 
            ? "bg-lime-50 border-lime-200 elevation-3" 
            : "bg-white border-border elevation-1 hover:elevation-3 hover:bg-lime-50 hover:border-lime-200"
          }
        `}
      >
        <div className="p-6 h-full flex flex-col justify-between relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-base text-foreground">Approved</h3>
              <p className="text-xs text-muted-foreground mt-1">Ready for disbursement</p>
            </div>
            <Badge className={`
              h-6 w-6 rounded-full flex items-center justify-center p-0 transition-colors font-medium text-xs
              ${activeInteractiveCard === "approved"
                ? "bg-lime-600 text-white"
                : "bg-gray-500 text-white group-hover:bg-lime-600"
              }
            `}>
              5
            </Badge>
          </div>
          <div className={`transition-opacity duration-200 ${activeInteractiveCard === "approved" ? "opacity-100" : "group-hover:opacity-0"}`}>
            <span className={`text-3xl font-bold tracking-tight ${activeInteractiveCard === "approved" ? "text-lime-600" : ""}`}>
              $ 4.2M
            </span>
          </div>
        </div>

        {/* Hover Action Button (Slides Up) - Only when NOT active */}
        {activeInteractiveCard !== "approved" && (
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out h-[60px] bg-lime-600 flex items-center justify-between px-6 text-white z-20">
            <span className="font-medium">View Invoices</span>
            <ArrowDownRight className="h-5 w-5" />
          </div>
        )}
      </div>

       {/* Interactive Card 3: Disabled Example */}
       <div 
        className="relative rounded-xl border border-border/50 bg-muted/30 p-6 overflow-hidden h-[150px] flex flex-col justify-between opacity-60 cursor-not-allowed grayscale"
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-base text-foreground">Rechazadas</h3>
            <p className="text-xs text-muted-foreground mt-1">No cumple requisitos</p>
          </div>
          <Badge className="h-6 w-6 rounded-full flex items-center justify-center p-0 bg-gray-400 text-white font-medium text-xs">
            0
          </Badge>
        </div>
        <div>
          <span className="text-3xl font-bold tracking-tight text-muted-foreground">$ 0.00</span>
        </div>
      </div>
    </div>
  );

  const interactiveCode = `
// Interactive KPI Card with 3 States (Normal, Hover, Active)
const [activeCard, setActiveCard] = useState<string | null>(null);

return (
  <div 
    onClick={() => setActiveCard(activeCard === "id" ? null : "id")}
    className={\`
      group relative rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer h-[150px]
      \${activeCard === "id" 
        ? "bg-lime-50 border-lime-200 elevation-3" 
        : "bg-white border-border elevation-1 hover:elevation-3 hover:bg-lime-50 hover:border-lime-200"
      }
    \`}
  >
    <div className="p-6 h-full flex flex-col justify-between relative z-10">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-base text-foreground">Título</h3>
          <p className="text-xs text-muted-foreground mt-1">Subtítulo</p>
        </div>
        <Badge className={\`
          h-6 w-6 rounded-full flex items-center justify-center p-0 transition-colors font-medium text-xs
          \${activeCard === "id"
            ? "bg-lime-600 text-white"
            : "bg-gray-500 text-white group-hover:bg-lime-600"
          }
        \`}>
          12
        </Badge>
      </div>
      <div className={\`transition-opacity duration-200 \${activeCard === "id" ? "opacity-100" : "group-hover:opacity-0"}\`}>
        <span className={\`text-3xl font-bold tracking-tight \${activeCard === "id" ? "text-lime-600" : ""}\`}>
          $ 12.5M
        </span>
      </div>
    </div>

    {/* Hover Action Button (Slides Up) - Only when NOT active */}
    {activeCard !== "id" && (
      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out h-[60px] bg-lime-600 flex items-center justify-between px-6 text-white z-20">
        <span className="font-medium">Ver Facturas</span>
        <ArrowDownRight className="h-5 w-5" />
      </div>
    )}
  </div>
);
`;

  // --- 2. Advanced Sparkline Cards (RECOVERED) ---
  const SparklinePreview = (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
      {/* Revenue Card with Sparkline */}
      <Card className="elevation-2 hover:elevation-3 transition-all">
        <CardContent className="p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                <ArrowUp className="h-3 w-3 mr-1" />
                12.5%
              </Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Revenue</p>
              <p className="text-2xl font-bold">$845.2K</p>
            </div>
            <ResponsiveContainer width="100%" height={40}>
              <AreaChart data={monthlyRevenueData.slice(-6)}>
                <Area
                  type="monotone"
                  dataKey="ingresos"
                  stroke={chart1Color}
                  fill={chart1Color}
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Users Card with Sparkline */}
      <Card className="elevation-2 hover:elevation-3 transition-all">
        <CardContent className="p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                <ArrowUp className="h-3 w-3 mr-1" />
                8.3%
              </Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Users</p>
              <p className="text-2xl font-bold">2,543</p>
            </div>
            <ResponsiveContainer width="100%" height={40}>
              <LineChart data={clientGrowthData}>
                <Line
                  type="monotone"
                  dataKey="activos"
                  stroke={chart2Color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Orders Card with Sparkline */}
      <Card className="elevation-2 hover:elevation-3 transition-all">
        <CardContent className="p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <Badge className="bg-red-500/10 text-red-600 border-red-500/20">
                <ArrowDown className="h-3 w-3 mr-1" />
                2.4%
              </Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Orders</p>
              <p className="text-2xl font-bold">1,248</p>
            </div>
            <ResponsiveContainer width="100%" height={40}>
              <BarChart data={operationalData}>
                <Bar
                  dataKey="operaciones"
                  fill={chart3Color}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Conversion Card with Sparkline */}
      <Card className="elevation-2 hover:elevation-3 transition-all">
        <CardContent className="p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <Badge className="bg-gray-500/10 text-gray-600 border-gray-500/20">
                <Minus className="h-3 w-3 mr-1" />
                0%
              </Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Conversion</p>
              <p className="text-2xl font-bold">3.24%</p>
            </div>
            <ResponsiveContainer width="100%" height={40}>
              <LineChart data={monthlyRevenueData.slice(-6)}>
                <Line
                  type="monotone"
                  dataKey="meta"
                  stroke={chart4Color}
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="3 3"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const sparklineCode = `
// KPI Card with Mini Area Chart
<Card className="elevation-2">
  <CardContent className="p-6">
    <div className="space-y-3">
      {/* Header with Icon & Badge */}
      <div className="flex items-center justify-between">
        <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
          <DollarSign className="h-5 w-5 text-blue-600" />
        </div>
        <Badge className="bg-green-500/10 text-green-600">
          +12.5%
        </Badge>
      </div>
      
      {/* Value */}
      <div>
        <p className="text-sm text-muted-foreground">Revenue</p>
        <p className="text-2xl font-bold">$845.2K</p>
      </div>

      {/* Sparkline Chart */}
      <ResponsiveContainer width="100%" height={40}>
        <AreaChart data={data}>
          <Area
            type="monotone"
            dataKey="value"
            stroke={chartColor}
            fill={chartColor}
            fillOpacity={0.3}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </CardContent>
</Card>
`;

  // --- 3. Progress & Status Cards (RECOVERED) ---
  const ProgressPreview = (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
      {/* Card with Linear Progress */}
      <Card className="elevation-2">
        <CardContent className="p-6">
          <div className="space-y-4">
             <div className="flex items-center justify-between">
                <div>
                   <p className="text-sm text-muted-foreground">Meta Mensual</p>
                   <p className="text-2xl font-bold">$45,231</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
             </div>
             <div className="space-y-1">
               <div className="flex items-center justify-between text-xs">
                 <span className="text-muted-foreground">Progreso</span>
                 <span className="font-medium text-primary">75%</span>
               </div>
               <Progress value={75} className="h-2" />
             </div>
          </div>
        </CardContent>
      </Card>

      {/* Mini Gradient Card 1 */}
      <Card className="elevation-1 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Margen Neto</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">41.2%</p>
              <p className="text-xs text-muted-foreground mt-1">+3.2% vs promedio</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
        </CardContent>
      </Card>

       {/* Mini Gradient Card 2 */}
       <Card className="elevation-1 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Tiempo Promedio</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">2.1 hrs</p>
              <p className="text-xs text-muted-foreground mt-1">-0.4 hrs esta semana</p>
            </div>
            <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // --- 4. Analytics Dashboard (RECOVERED) ---
  const AnalyticsPreview = (
    <div className="space-y-6 w-full">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Radar Chart */}
        <Card className="elevation-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Métricas de Performance
            </CardTitle>
            <CardDescription>Evaluación de 5 indicadores clave</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={performanceMetrics}>
                <PolarGrid stroke={borderColor} />
                <PolarAngleAxis dataKey="categoria" tick={{ fill: mutedForegroundColor, fontSize: 11 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: mutedForegroundColor, fontSize: 10 }} />
                <Radar name="Score" dataKey="score" stroke={chart1Color} fill={chart1Color} fillOpacity={0.5} />
                <Tooltip contentStyle={{ backgroundColor: cardBg, borderColor: borderColor }} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Composed Chart */}
        <Card className="elevation-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Análisis Operacional
            </CardTitle>
            <CardDescription>Operaciones, montos y tiempo promedio</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={operationalData}>
                <CartesianGrid strokeDasharray="3 3" stroke={borderColor} opacity={0.3} />
                <XAxis dataKey="dia" tick={{ fill: mutedForegroundColor, fontSize: 12 }} />
                <YAxis yAxisId="left" tick={{ fill: mutedForegroundColor, fontSize: 12 }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fill: mutedForegroundColor, fontSize: 12 }} domain={[0, 3]} />
                <Tooltip contentStyle={{ backgroundColor: cardBg, borderColor: borderColor }} />
                <Bar yAxisId="left" dataKey="operaciones" fill={chart3Color} radius={[8, 8, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="tiempo" stroke={chart5Color} strokeWidth={2} dot={{ r: 4 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // --- 5. Standard Cards ---
  const StandardPreview = (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
      <KPICard
        title="Ingresos Totales"
        value={845000}
        format="currency"
        change={12.5}
        changeLabel="vs mes anterior"
        trend="up"
        icon={<DollarSign className="h-6 w-6" />}
      />
      <KPICard
        title="Clientes Activos"
        value={58}
        change={8.3}
        changeLabel="este mes"
        trend="up"
        icon={<Users className="h-6 w-6" />}
      />
      <KPICard
        title="Operaciones"
        value={187}
        change={5.2}
        changeLabel="esta semana"
        trend="up"
        icon={<FileText className="h-6 w-6" />}
      />
      <KPICard
        title="Tasa de Aprobación"
        value={92}
        format="percentage"
        change={2.1}
        changeLabel="últimos 30 días"
        trend="up"
        icon={<Target className="h-6 w-6" />}
      />
    </div>
  );

  const standardCode = `
// Reusable KPI Component
function KPICard({ title, value, change, changeLabel, icon, trend, format = "number" }: KPICardProps) {
  // ... implementation details
  return (
    <Card className="elevation-2">
      <CardContent className="p-6">
        {/* ... layout ... */}
      </CardContent>
    </Card>
  );
}

// Usage
<KPICard
  title="Ingresos Totales"
  value={845000}
  format="currency"
  change={12.5}
  changeLabel="vs mes anterior"
  trend="up"
  icon={<DollarSign className="h-6 w-6" />}
/>
`;

  // --- 6. Tabs (Example) ---
  const TabsPreview = (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 w-full">
      <button
        onClick={() => setActiveTab("revenue")}
        className={`
          relative overflow-hidden rounded-lg border transition-all text-left
          ${activeTab === "revenue" 
            ? "border-primary bg-primary/5 elevation-3" 
            : "border-border bg-card elevation-1 hover:elevation-2 hover:border-primary/50"
          }
        `}
      >
        <div className="p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className={`
              h-7 w-7 rounded-md flex items-center justify-center transition-colors
              ${activeTab === "revenue" 
                ? "bg-blue-500 text-white" 
                : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
              }
            `}>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <dt className="text-xs text-muted-foreground font-medium">Revenue</dt>
              <dd className="text-lg font-semibold">$345K</dd>
            </div>
            <Badge 
              className="bg-green-500/10 text-green-600 border-green-500/20 text-[0.65rem]"
              variant="secondary"
            >
              <ArrowUpRight className="h-2.5 w-2.5 mr-0.5" />
              12%
            </Badge>
          </div>
        </div>
      </button>

      <button
        onClick={() => setActiveTab("users")}
        className={`
          relative overflow-hidden rounded-lg border transition-all text-left
          ${activeTab === "users" 
            ? "border-primary bg-primary/5 elevation-3" 
            : "border-border bg-card elevation-1 hover:elevation-2 hover:border-primary/50"
          }
        `}
      >
        <div className="p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className={`
              h-7 w-7 rounded-md flex items-center justify-center transition-colors
              ${activeTab === "users" 
                ? "bg-purple-500 text-white" 
                : "bg-purple-500/10 text-purple-600 dark:text-purple-400"
              }
            `}>
              <Users className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <dt className="text-xs text-muted-foreground font-medium">Users</dt>
              <dd className="text-lg font-semibold">5,400</dd>
            </div>
            <Badge 
              className="bg-green-500/10 text-green-600 border-green-500/20 text-[0.65rem]"
              variant="secondary"
            >
              <ArrowUpRight className="h-2.5 w-2.5 mr-0.5" />
              33%
            </Badge>
          </div>
        </div>
      </button>
    </div>
  );

  return (
    <ComponentShowcase
      title="KPI Dashboard & Cards"
      description="Colección integral de componentes para visualización de métricas (KPIs). Incluye tarjetas interactivas, grids de dashboard y selectores de tabulación."
      category="Patterns"
      preview={InteractivePreview}
      code={interactiveCode}
      usage="Utilice estos componentes para construir dashboards ejecutivos. Las tarjetas interactivas son ideales para acciones rápidas."
      props={[
        { name: "title", type: "string", description: "Título del KPI", required: true },
        { name: "value", type: "string | number", description: "Valor principal", required: true },
        { name: "change", type: "number", description: "Porcentaje de cambio", required: false },
        { name: "trend", type: "'up' | 'down' | 'neutral'", description: "Dirección de la tendencia", required: false },
        { name: "icon", type: "ReactNode", description: "Icono ilustrativo", required: true },
      ]}
      examples={[
        { 
          title: "Interactive KPI States", 
          description: "Muestra los 3 estados: Normal, Hover (Acción) y Active (Seleccionado).", 
          preview: InteractivePreview, 
          code: interactiveCode 
        },
        { 
          title: "Advanced Sparkline Cards", 
          description: "Tarjetas de KPI enriquecidas con micro-gráficos (sparklines) para mostrar tendencias inmediatas.", 
          preview: SparklinePreview, 
          code: sparklineCode 
        },
        { 
          title: "Progress & Gradient Cards", 
          description: "Variaciones visuales con barras de progreso y fondos con gradiente sutil.", 
          preview: ProgressPreview, 
          code: `// Gradient Card Example\n<Card className="elevation-1 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">...</Card>` 
        },
        { 
          title: "Standard KPI Grid", 
          description: "Layout clásico de 4 columnas para métricas principales.", 
          preview: StandardPreview, 
          code: standardCode 
        },
        { 
          title: "KPI Tabs Navigation", 
          description: "Tarjetas compactas que funcionan como pestañas de navegación.", 
          preview: TabsPreview, 
          code: `// See TabsPreview code above` 
        },
        { 
          title: "Analytics Dashboard", 
          description: "Visualizaciones avanzadas con Radar Charts y Composed Charts para análisis profundo.", 
          preview: AnalyticsPreview, 
          code: `// Recharts implementations for Radar and Composed charts` 
        }
      ]}
    />
  );
}