import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
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
  Clock,
  ShoppingCart,
  CreditCard,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Minus,
  ArrowRight,
  Wallet,
  HandCoins,
  CheckCircle,
  AlertCircle,
  XCircle
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
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
import { getThemeColor, getChartColorsMap, getBrandColors, getUIColors } from "../../lib/theme-utils";

// Data para gráficos
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
  // Estado para tabs activos
  const [activeTab, setActiveTab] = useState<string>("revenue");

  // Colores dinámicos
  const primaryColor = getBrandColors().primary;
  const chart1Color = getChartColorsMap().chart1;
  const chart2Color = getChartColorsMap().chart2;
  const chart3Color = getChartColorsMap().chart3;
  const chart4Color = getChartColorsMap().chart4;
  const chart5Color = getChartColorsMap().chart5;
  const mutedForegroundColor = getUIColors().mutedForeground;
  const cardBg = getUIColors().card;
  const borderColor = getUIColors().border;

  // Portfolio distribution con colores dinámicos
  const portfolioDistribution = [
    { sector: "Retail", value: 35, color: chart1Color },
    { sector: "Manufactura", value: 25, color: chart2Color },
    { sector: "Servicios", value: 20, color: chart3Color },
    { sector: "Construcción", value: 15, color: chart4Color },
    { sector: "Otros", value: 5, color: chart5Color },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold mb-2">Dashboard de KPIs</h1>
        <p className="text-muted-foreground">
          Indicadores clave de rendimiento con visualizaciones interactivas
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

      {/* Gráfico de Línea - Tendencia de Ingresos */}
      <Card className="elevation-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Tendencia de Ingresos vs Gastos
          </CardTitle>
          <CardDescription>
            Comparación mensual de ingresos, gastos y meta (últimos 12 meses)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={monthlyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke={borderColor} opacity={0.3} />
              <XAxis 
                dataKey="mes"
                tick={{ fill: mutedForegroundColor, fontSize: 12 }}
              />
              <YAxis 
                tick={{ fill: mutedForegroundColor, fontSize: 12 }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="ingresos" 
                name="Ingresos"
                stroke={chart2Color}
                strokeWidth={3}
                dot={{ fill: chart2Color, r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="gastos" 
                name="Gastos"
                stroke={chart5Color}
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: chart5Color, r: 3 }}
              />
              <Line 
                type="monotone" 
                dataKey="meta" 
                name="Meta"
                stroke={mutedForegroundColor}
                strokeWidth={2}
                strokeDasharray="3 3"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Gráfico de Área - Crecimiento de Clientes */}
        <Card className="elevation-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Crecimiento de Clientes
            </CardTitle>
            <CardDescription>
              Nuevos, activos e inactivos por mes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={clientGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke={borderColor} opacity={0.3} />
                <XAxis 
                  dataKey="mes"
                  tick={{ fill: mutedForegroundColor, fontSize: 12 }}
                />
                <YAxis 
                  tick={{ fill: mutedForegroundColor, fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="activos" 
                  name="Activos"
                  stackId="1"
                  stroke={chart2Color}
                  fill={chart2Color}
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="nuevos" 
                  name="Nuevos"
                  stackId="1"
                  stroke={chart1Color}
                  fill={chart1Color}
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="inactivos" 
                  name="Inactivos"
                  stackId="1"
                  stroke={chart5Color}
                  fill={chart5Color}
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de Radar - Métricas de Performance */}
        <Card className="elevation-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Métricas de Performance
            </CardTitle>
            <CardDescription>
              Evaluación de 5 indicadores clave
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={performanceMetrics}>
                <PolarGrid stroke={borderColor} />
                <PolarAngleAxis 
                  dataKey="categoria" 
                  tick={{ fill: mutedForegroundColor, fontSize: 11 }}
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]}
                  tick={{ fill: mutedForegroundColor, fontSize: 10 }}
                />
                <Radar 
                  name="Score" 
                  dataKey="score" 
                  stroke={chart1Color}
                  fill={chart1Color}
                  fillOpacity={0.5}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                  formatter={(value: number) => [`${value}%`, 'Score']}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Gráfico de Barras - Operaciones por Día */}
        <Card className="elevation-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Actividad Semanal
            </CardTitle>
            <CardDescription>
              Operaciones y montos procesados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={operationalData}>
                <CartesianGrid strokeDasharray="3 3" stroke={borderColor} opacity={0.3} />
                <XAxis 
                  dataKey="dia"
                  tick={{ fill: mutedForegroundColor, fontSize: 12 }}
                />
                <YAxis 
                  yAxisId="left"
                  tick={{ fill: mutedForegroundColor, fontSize: 12 }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: mutedForegroundColor, fontSize: 12 }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Legend />
                <Bar 
                  yAxisId="left"
                  dataKey="operaciones" 
                  name="Operaciones"
                  fill={chart3Color}
                  radius={[8, 8, 0, 0]}
                />
                <Bar 
                  yAxisId="right"
                  dataKey="monto" 
                  name="Monto ($)"
                  fill={chart1Color}
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico Compuesto - Vista Completa */}
        <Card className="elevation-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Análisis Operacional Semanal
            </CardTitle>
            <CardDescription>
              Operaciones, montos y tiempo promedio de procesamiento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={operationalData}>
                <CartesianGrid strokeDasharray="3 3" stroke={borderColor} opacity={0.3} />
                <XAxis 
                  dataKey="dia"
                  tick={{ fill: mutedForegroundColor, fontSize: 12 }}
                />
                <YAxis 
                  yAxisId="left"
                  tick={{ fill: mutedForegroundColor, fontSize: 12 }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: mutedForegroundColor, fontSize: 12 }}
                  domain={[0, 3]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Legend />
                <Bar 
                  yAxisId="left"
                  dataKey="operaciones" 
                  name="Operaciones"
                  fill={chart3Color}
                  radius={[8, 8, 0, 0]}
                />
                <Area 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="monto" 
                  name="Monto ($)"
                  fill={chart1Color}
                  stroke={chart1Color}
                  fillOpacity={0.3}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="tiempo" 
                  name="Tiempo (hrs)"
                  stroke={chart5Color}
                  strokeWidth={2}
                  dot={{ fill: chart5Color, r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Mini KPIs adicionales */}
      <div className="grid gap-4 md:grid-cols-3">
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

        <Card className="elevation-1 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Ticket Promedio</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">$4,518</p>
                <p className="text-xs text-muted-foreground mt-1">+12.5% este mes</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ===== ADVANCED KPI CARDS ===== */}
      <div className="pt-8 border-t border-border">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Advanced KPI Cards</h2>
          <p className="text-sm text-muted-foreground">
            Componentes avanzados con mini-charts, progress rings y comparaciones de períodos
          </p>
        </div>

        {/* KPI Cards con Mini Sparklines */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          {/* Revenue Card con Sparkline */}
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

          {/* Users Card con Sparkline */}
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

          {/* Orders Card con Sparkline */}
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

          {/* Conversion Card con Sparkline */}
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

        {/* KPI Cards con Progress Bars */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          {/* Revenue Goal Card */}
          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Revenue Goal</p>
                    <p className="text-2xl font-bold">$85K / $100K</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-chart-1/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-chart-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground">$15K remaining to goal</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Satisfaction Card */}
          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                    <p className="text-2xl font-bold">94%</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-chart-2/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-chart-2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-medium">4.7/5.0</span>
                  </div>
                  <Progress value={94} className="h-2" />
                  <p className="text-xs text-muted-foreground">Based on 1,234 reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Task Completion Card */}
          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Task Completion</p>
                    <p className="text-2xl font-bold">67 / 89</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-chart-3/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-chart-3" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Completed</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-muted-foreground">22 tasks remaining</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison KPI Cards (This Month vs Last Month) */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Sales Comparison */}
          <Card className="elevation-2 border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">Total Sales</p>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">$125,420</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                      This Month
                    </Badge>
                  </div>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">vs Last Month</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <ArrowUpRight className="h-3 w-3" />
                      <span className="font-medium">+15.3%</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">$108,750 last month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Traffic Comparison */}
          <Card className="elevation-2 border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">Website Traffic</p>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">45.2K</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-600 border-purple-500/20">
                      This Month
                    </Badge>
                  </div>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">vs Last Month</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <ArrowUpRight className="h-3 w-3" />
                      <span className="font-medium">+8.1%</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">41.8K last month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* New Customers Comparison */}
          <Card className="elevation-2 border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">New Customers</p>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">1,245</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                      This Month
                    </Badge>
                  </div>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">vs Last Month</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <ArrowUpRight className="h-3 w-3" />
                      <span className="font-medium">+22.4%</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">1,017 last month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Time Comparison */}
          <Card className="elevation-2 border-l-4 border-l-orange-500">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">Avg Response Time</p>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">1.8h</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="secondary" className="bg-orange-500/10 text-orange-600 border-orange-500/20">
                      This Month
                    </Badge>
                  </div>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">vs Last Month</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <ArrowDownRight className="h-3 w-3" />
                      <span className="font-medium">-15.4%</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">2.1h last month (improved)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ===== TREND CARDS (HERO UI PRO STRUCTURE) ===== */}
        <div className="mt-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Trend Cards</h3>
            <p className="text-sm text-muted-foreground">
              Cards compactos con badges de tendencia posicionados absolutos
            </p>
          </div>

          {/* Trend Cards con Badge Top-Right */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            {/* Total Revenue */}
            <Card className="elevation-2 relative">
              <CardContent className="p-4">
                <div className="flex flex-col gap-y-2">
                  <dt className="text-sm text-muted-foreground font-medium">Total Revenue</dt>
                  <dd className="text-2xl font-semibold">$228,451</dd>
                </div>
                <Badge 
                  className="absolute top-4 right-4 bg-green-500/10 text-green-600 border-green-500/20"
                  variant="secondary"
                >
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  33%
                </Badge>
              </CardContent>
            </Card>

            {/* Total Expenses */}
            <Card className="elevation-2 relative">
              <CardContent className="p-4">
                <div className="flex flex-col gap-y-2">
                  <dt className="text-sm text-muted-foreground font-medium">Total Expenses</dt>
                  <dd className="text-2xl font-semibold">$71,887</dd>
                </div>
                <Badge 
                  className="absolute top-4 right-4 bg-red-500/10 text-red-600 border-red-500/20"
                  variant="secondary"
                >
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  13.0%
                </Badge>
              </CardContent>
            </Card>

            {/* Total Profit */}
            <Card className="elevation-2 relative">
              <CardContent className="p-4">
                <div className="flex flex-col gap-y-2">
                  <dt className="text-sm text-muted-foreground font-medium">Total Profit</dt>
                  <dd className="text-2xl font-semibold">$156,540</dd>
                </div>
                <Badge 
                  className="absolute top-4 right-4 bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                  variant="secondary"
                >
                  <ArrowRight className="h-3 w-3 mr-1" />
                  0.0%
                </Badge>
              </CardContent>
            </Card>

            {/* New Customers */}
            <Card className="elevation-2 relative">
              <CardContent className="p-4">
                <div className="flex flex-col gap-y-2">
                  <dt className="text-sm text-muted-foreground font-medium">New Customers</dt>
                  <dd className="text-2xl font-semibold">1,234</dd>
                </div>
                <Badge 
                  className="absolute top-4 right-4 bg-green-500/10 text-green-600 border-green-500/20"
                  variant="secondary"
                >
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  1.0%
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Trend Cards con Badge Bottom-Right */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Monthly Sales */}
            <Card className="elevation-2 relative">
              <CardContent className="p-4">
                <div className="flex flex-col gap-y-2">
                  <dt className="text-sm text-muted-foreground font-medium">Monthly Sales</dt>
                  <dd className="text-2xl font-semibold">$345,892</dd>
                </div>
                <Badge 
                  className="absolute bottom-4 right-4 bg-green-500 text-white border-none"
                  variant="default"
                >
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  12.5%
                </Badge>
              </CardContent>
            </Card>

            {/* Operating Costs */}
            <Card className="elevation-2 relative">
              <CardContent className="p-4">
                <div className="flex flex-col gap-y-2">
                  <dt className="text-sm text-muted-foreground font-medium">Operating Costs</dt>
                  <dd className="text-2xl font-semibold">$98,234</dd>
                </div>
                <Badge 
                  className="absolute bottom-4 right-4 bg-red-500 text-white border-none"
                  variant="default"
                >
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  18.3%
                </Badge>
              </CardContent>
            </Card>

            {/* Net Income */}
            <Card className="elevation-2 relative">
              <CardContent className="p-4">
                <div className="flex flex-col gap-y-2">
                  <dt className="text-sm text-muted-foreground font-medium">Net Income</dt>
                  <dd className="text-2xl font-semibold">$247,658</dd>
                </div>
                <Badge 
                  className="absolute bottom-4 right-4 bg-yellow-500 text-white border-none"
                  variant="default"
                >
                  <ArrowRight className="h-3 w-3 mr-1" />
                  15.2%
                </Badge>
              </CardContent>
            </Card>

            {/* Active Users */}
            <Card className="elevation-2 relative">
              <CardContent className="p-4">
                <div className="flex flex-col gap-y-2">
                  <dt className="text-sm text-muted-foreground font-medium">Active Users</dt>
                  <dd className="text-2xl font-semibold">2,847</dd>
                </div>
                <Badge 
                  className="absolute bottom-4 right-4 bg-green-500 text-white border-none"
                  variant="default"
                >
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  4.7%
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ===== KPI CARDS WITH ICONS & ACTION BUTTON ===== */}
        <div className="mt-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">KPI Cards con Iconos y Acción</h3>
            <p className="text-sm text-muted-foreground">
              Cards con iconos coloridos, badges de tendencia y botón de acción en footer
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Total Users Card */}
            <Card className="elevation-2 relative overflow-hidden">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-md bg-green-500/10">
                    <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <dt className="text-sm text-muted-foreground font-medium">Total Users</dt>
                    <dd className="text-2xl font-semibold">5,400</dd>
                  </div>
                  <Badge 
                    className="absolute top-4 right-4 bg-green-500/10 text-green-600 border-green-500/20"
                    variant="secondary"
                  >
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    33%
                  </Badge>
                </div>
              </CardContent>
              <div className="bg-muted/50">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-xs h-9 rounded-none hover:bg-muted"
                >
                  View All
                </Button>
              </div>
            </Card>

            {/* Total Sales Card */}
            <Card className="elevation-2 relative overflow-hidden">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-md bg-yellow-500/10">
                    <Wallet className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <dt className="text-sm text-muted-foreground font-medium">Total Sales</dt>
                    <dd className="text-2xl font-semibold">$15,400</dd>
                  </div>
                  <Badge 
                    className="absolute top-4 right-4 bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                    variant="secondary"
                  >
                    <ArrowRight className="h-3 w-3 mr-1" />
                    0.0%
                  </Badge>
                </div>
              </CardContent>
              <div className="bg-muted/50">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-xs h-9 rounded-none hover:bg-muted"
                >
                  View All
                </Button>
              </div>
            </Card>

            {/* Net Profit Card */}
            <Card className="elevation-2 relative overflow-hidden">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-md bg-red-500/10">
                    <HandCoins className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <dt className="text-sm text-muted-foreground font-medium">Net Profit</dt>
                    <dd className="text-2xl font-semibold">$10,400</dd>
                  </div>
                  <Badge 
                    className="absolute top-4 right-4 bg-red-500/10 text-red-600 border-red-500/20"
                    variant="secondary"
                  >
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                    3.3%
                  </Badge>
                </div>
              </CardContent>
              <div className="bg-muted/50">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-xs h-9 rounded-none hover:bg-muted"
                >
                  View All
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* ===== KPI TABS (COMPACT & ACTIVE VERSION) ===== */}
        <div className="mt-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">KPI Tabs (Versión Compacta y Activa)</h3>
            <p className="text-sm text-muted-foreground">
              Cards tipo tabs clickeables con estados hover y active. Perfectos para navegación entre métricas.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {/* Revenue Tab */}
            <button
              onClick={() => setActiveTab("revenue")}
              className={`
                group relative overflow-hidden rounded-lg border transition-all text-left
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
              
              {/* Hover Overlay Link */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-xs font-medium text-primary flex items-center gap-1 bg-background/95 px-2 py-0.5 rounded-full shadow-sm backdrop-blur-sm border border-primary/20">
                  Ver más <ArrowRight className="h-2.5 w-2.5" />
                </span>
              </div>
              
              {/* Active Indicator */}
              {activeTab === "revenue" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-in fade-in zoom-in duration-300" />
              )}
            </button>

            {/* Users Tab */}
            <button
              onClick={() => setActiveTab("users")}
              className={`
                group relative overflow-hidden rounded-lg border transition-all text-left
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

              {/* Hover Overlay Link */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-xs font-medium text-primary flex items-center gap-1 bg-background/95 px-2 py-0.5 rounded-full shadow-sm backdrop-blur-sm border border-primary/20">
                  Ver más <ArrowRight className="h-2.5 w-2.5" />
                </span>
              </div>

              {/* Active Indicator */}
              {activeTab === "users" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-in fade-in zoom-in duration-300" />
              )}
            </button>

            {/* Orders Tab */}
            <button
              onClick={() => setActiveTab("orders")}
              className={`
                group relative overflow-hidden rounded-lg border transition-all text-left
                ${activeTab === "orders" 
                  ? "border-primary bg-primary/5 elevation-3" 
                  : "border-border bg-card elevation-1 hover:elevation-2 hover:border-primary/50"
                }
              `}
            >
              <div className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`
                    h-7 w-7 rounded-md flex items-center justify-center transition-colors
                    ${activeTab === "orders" 
                      ? "bg-orange-500 text-white" 
                      : "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                    }
                  `}>
                    <ShoppingCart className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <dt className="text-xs text-muted-foreground font-medium">Orders</dt>
                    <dd className="text-lg font-semibold">1,248</dd>
                  </div>
                  <Badge 
                    className="bg-red-500/10 text-red-600 border-red-500/20 text-[0.65rem]"
                    variant="secondary"
                  >
                    <ArrowDown className="h-2.5 w-2.5 mr-0.5" />
                    2.4%
                  </Badge>
                </div>
              </div>

              {/* Hover Overlay Link */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-xs font-medium text-primary flex items-center gap-1 bg-background/95 px-2 py-0.5 rounded-full shadow-sm backdrop-blur-sm border border-primary/20">
                  Ver más <ArrowRight className="h-2.5 w-2.5" />
                </span>
              </div>

              {/* Active Indicator */}
              {activeTab === "orders" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-in fade-in zoom-in duration-300" />
              )}
            </button>

            {/* Conversion Tab */}
            <button
              onClick={() => setActiveTab("conversion")}
              className={`
                group relative overflow-hidden rounded-lg border transition-all text-left
                ${activeTab === "conversion" 
                  ? "border-primary bg-primary/5 elevation-3" 
                  : "border-border bg-card elevation-1 hover:elevation-2 hover:border-primary/50"
                }
              `}
            >
              <div className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`
                    h-7 w-7 rounded-md flex items-center justify-center transition-colors
                    ${activeTab === "conversion" 
                      ? "bg-green-500 text-white" 
                      : "bg-green-500/10 text-green-600 dark:text-green-400"
                    }
                  `}>
                    <Target className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <dt className="text-xs text-muted-foreground font-medium">Conversion</dt>
                    <dd className="text-lg font-semibold">3.24%</dd>
                  </div>
                  <Badge 
                    className="bg-gray-500/10 text-gray-600 border-gray-500/20 text-[0.65rem]"
                    variant="secondary"
                  >
                    <Minus className="h-2.5 w-2.5 mr-0.5" />
                    0%
                  </Badge>
                </div>
              </div>

              {/* Hover Overlay Link */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-xs font-medium text-primary flex items-center gap-1 bg-background/95 px-2 py-0.5 rounded-full shadow-sm backdrop-blur-sm border border-primary/20">
                  Ver más <ArrowRight className="h-2.5 w-2.5" />
                </span>
              </div>

              {/* Active Indicator */}
              {activeTab === "conversion" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-in fade-in zoom-in duration-300" />
              )}
            </button>
          </div>

          {/* Content based on active tab */}
          <Card className="mt-4 elevation-2">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-4">
                Contenido dinámico para: <span className="font-semibold text-foreground capitalize">{activeTab}</span>
              </p>
              <div className="h-40 rounded-lg bg-muted/30 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Aquí irían gráficos o detalles específicos de "{activeTab}"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ===== FACTORING INVOICE STATUS ===== */}
      <div className="mt-8">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Estado de las Facturas (Factoring)</h3>
          <p className="text-sm text-muted-foreground">
            Indicadores de estado para operaciones de factoring
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Facturas Elegibles */}
          <Card className="elevation-2 border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Facturas Elegibles</h4>
                  <p className="text-sm text-muted-foreground">Disponibles para anticipo</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase">Facturas</p>
                  <p className="text-2xl font-bold">68</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase">Monto</p>
                  <p className="text-2xl font-bold">$2,145,000</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Pendientes */}
          <Card className="elevation-2 border-l-4 border-l-orange-500">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Pendientes</h4>
                  <p className="text-sm text-muted-foreground">En revisión de riesgo</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase">Facturas</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase">Monto</p>
                  <p className="text-2xl font-bold">$85,300</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: En Negociación */}
          <Card className="elevation-2 border-l-4 border-l-yellow-500">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">En Negociación</h4>
                  <p className="text-sm text-muted-foreground">Pendientes de confirmación</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase">Facturas</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase">Monto</p>
                  <p className="text-2xl font-bold">$145,200</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Desembolsadas */}
          <Card className="elevation-2 border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Desembolsadas</h4>
                  <p className="text-sm text-muted-foreground">Operaciones finalizadas</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase">Facturas</p>
                  <p className="text-2xl font-bold">45</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase">Monto</p>
                  <p className="text-2xl font-bold">$890,500</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 5: No Elegibles */}
          <Card className="elevation-2 border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">No Elegibles</h4>
                  <p className="text-sm text-muted-foreground">Rechazadas por riesgo</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase">Facturas</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase">Monto</p>
                  <p className="text-2xl font-bold">$95,400</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}