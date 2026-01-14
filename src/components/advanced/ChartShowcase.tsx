import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity } from "lucide-react";
import { ChartLegendItem } from "../business/ChartLegendItem";
import { getThemeColor, getChartColorsMap, getUIColors } from "../../lib/theme-utils";

// Data
const lineData = [
  { month: "Ene", aprobadas: 45, rechazadas: 12, pendientes: 8 },
  { month: "Feb", aprobadas: 52, rechazadas: 15, pendientes: 10 },
  { month: "Mar", aprobadas: 61, rechazadas: 9, pendientes: 6 },
  { month: "Abr", aprobadas: 58, rechazadas: 11, pendientes: 9 },
  { month: "May", aprobadas: 70, rechazadas: 8, pendientes: 5 },
  { month: "Jun", aprobadas: 65, rechazadas: 10, pendientes: 7 },
];

const barData = [
  { category: "Comercial", monto: 45000000, count: 45 },
  { category: "Industrial", monto: 32000000, count: 32 },
  { category: "Servicios", monto: 28000000, count: 28 },
  { category: "Construcción", monto: 21000000, count: 21 },
  { category: "Tecnología", monto: 18000000, count: 18 },
];

const horizontalBarData = [
  { region: "Santiago", value: 85 },
  { region: "Valparaíso", value: 72 },
  { region: "Concepción", value: 65 },
  { region: "La Serena", value: 48 },
  { region: "Temuco", value: 35 },
];

const stackedBarData = [
  { month: "Ene", pequeña: 15, mediana: 20, grande: 10 },
  { month: "Feb", pequeña: 18, mediana: 22, grande: 12 },
  { month: "Mar", pequeña: 20, mediana: 25, grande: 16 },
  { month: "Abr", pequeña: 17, mediana: 23, grande: 18 },
  { month: "May", pequeña: 22, mediana: 28, grande: 20 },
  { month: "Jun", pequeña: 19, mediana: 26, grande: 20 },
];

const pieData = [
  { name: "Aprobadas", value: 65, color: "var(--primary)" },
  { name: "Pendientes", value: 20, color: "var(--secondary)" },
  { name: "Rechazadas", value: 10, color: "var(--destructive)" },
  { name: "En Revisión", value: 5, color: "var(--warning)" },
];

const donutData = [
  { name: "Q1", value: 28000, color: "var(--chart-1)" },
  { name: "Q2", value: 32000, color: "var(--chart-2)" },
  { name: "Q3", value: 29000, color: "var(--chart-3)" },
  { name: "Q4", value: 35000, color: "var(--chart-4)" },
];

const areaData = [
  { date: "01", cartera: 35000000, proyectado: 36000000 },
  { date: "05", cartera: 38000000, proyectado: 39000000 },
  { date: "10", cartera: 42000000, proyectado: 43000000 },
  { date: "15", cartera: 45000000, proyectado: 46000000 },
  { date: "20", cartera: 43000000, proyectado: 47000000 },
  { date: "25", cartera: 48000000, proyectado: 50000000 },
  { date: "30", cartera: 51000000, proyectado: 53000000 },
];

const radarData = [
  { subject: "Liquidez", A: 85, fullMark: 100 },
  { subject: "Rentabilidad", A: 72, fullMark: 100 },
  { subject: "Solvencia", A: 90, fullMark: 100 },
  { subject: "Eficiencia", A: 68, fullMark: 100 },
  { subject: "Crecimiento", A: 78, fullMark: 100 },
];

const mixedData = [
  { month: "Ene", operaciones: 45, monto: 12000000 },
  { month: "Feb", operaciones: 52, monto: 15000000 },
  { month: "Mar", operaciones: 48, monto: 14000000 },
  { month: "Abr", operaciones: 61, monto: 18000000 },
  { month: "May", operaciones: 55, monto: 16000000 },
  { month: "Jun", operaciones: 67, monto: 20000000 },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg elevation-2">
        <p className="font-semibold mb-1">{payload[0].payload.month || payload[0].payload.category || payload[0].name}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function ChartShowcase() {
  // Get colors from CSS variables
  const primary = getThemeColor('--primary');
  const destructive = getThemeColor('--destructive');
  const warning = getThemeColor('--warning');
  const success = getThemeColor('--success');
  const chart1 = getChartColorsMap().chart1;
  const chart2 = getChartColorsMap().chart2;
  const chart3 = getChartColorsMap().chart3;
  const chart4 = getChartColorsMap().chart4;
  const muted = getUIColors().mutedForeground;
  const border = getUIColors().border;

  return (
    <Tabs defaultValue="line" className="w-full">
      <TabsList className="grid w-full grid-cols-7">
        <TabsTrigger value="line">Line</TabsTrigger>
        <TabsTrigger value="bar">Bar</TabsTrigger>
        <TabsTrigger value="pie">Pie</TabsTrigger>
        <TabsTrigger value="area">Area</TabsTrigger>
        <TabsTrigger value="mixed">Mixed</TabsTrigger>
        <TabsTrigger value="sizes">Sizes</TabsTrigger>
        <TabsTrigger value="mobile">Mobile</TabsTrigger>
      </TabsList>

      {/* LINE CHARTS */}
      <TabsContent value="line" className="space-y-6">
        <div className="grid gap-6">
          {/* Multi-line chart */}
          <Card className="elevation-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Tendencia Mensual de Facturas</CardTitle>
                  <CardDescription>Evolución de estados por mes</CardDescription>
                </div>
                <Badge variant="default">Multi-line</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={border} />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fill: muted }}
                  />
                  <YAxis 
                    tick={{ fill: muted }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="aprobadas"
                    stroke={primary}
                    strokeWidth={3}
                    name="Aprobadas"
                    dot={{ fill: primary, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="rechazadas"
                    stroke={destructive}
                    strokeWidth={3}
                    name="Rechazadas"
                    dot={{ fill: destructive, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="pendientes"
                    stroke={warning}
                    strokeWidth={3}
                    name="Pendientes"
                    dot={{ fill: warning, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Simple line chart - smooth */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="elevation-1">
              <CardHeader>
                <CardTitle className="text-lg">Curva Suave (Smooth)</CardTitle>
                <CardDescription>type="monotone"</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={border} />
                    <XAxis dataKey="month" tick={{ fill: muted }} />
                    <YAxis tick={{ fill: muted }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="aprobadas"
                      stroke={primary}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="elevation-1">
              <CardHeader>
                <CardTitle className="text-lg">Línea Recta (Linear)</CardTitle>
                <CardDescription>type="linear"</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={border} />
                    <XAxis dataKey="month" tick={{ fill: muted }} />
                    <YAxis tick={{ fill: muted }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="linear"
                      dataKey="aprobadas"
                      stroke={chart2}
                      strokeWidth={2}
                      dot={{ fill: chart2, r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      {/* BAR CHARTS */}
      <TabsContent value="bar" className="space-y-6">
        <div className="grid gap-6">
          {/* Vertical bars with gradient */}
          <Card className="elevation-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Monto por Sector</CardTitle>
                  <CardDescription>Distribución de cartera por industria</CardDescription>
                </div>
                <Badge variant="default">Vertical</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <RechartsBarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={border} />
                  <XAxis 
                    dataKey="category" 
                    tick={{ fill: muted }}
                  />
                  <YAxis 
                    tick={{ fill: muted }}
                  />
                  <Tooltip 
                    content={<CustomTooltip />}
                    formatter={(value: number) => `$${(value / 1000000).toFixed(1)}M`}
                  />
                  <Bar 
                    dataKey="monto" 
                    fill={primary} 
                    radius={[8, 8, 0, 0]}
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Horizontal and Stacked */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="elevation-1">
              <CardHeader>
                <CardTitle className="text-lg">Barras Horizontales</CardTitle>
                <CardDescription>Operaciones por región</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart data={horizontalBarData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke={border} />
                    <XAxis type="number" tick={{ fill: muted }} />
                    <YAxis 
                      type="category" 
                      dataKey="region" 
                      width={100}
                      tick={{ fill: muted }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="value" fill={success} radius={[0, 8, 8, 0]} />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="elevation-1">
              <CardHeader>
                <CardTitle className="text-lg">Barras Apiladas (Stacked)</CardTitle>
                <CardDescription>Por tamaño de empresa</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart data={stackedBarData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={border} />
                    <XAxis dataKey="month" tick={{ fill: muted }} />
                    <YAxis tick={{ fill: muted }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="pequeña" stackId="a" fill={chart2} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="mediana" stackId="a" fill={primary} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="grande" stackId="a" fill={success} radius={[8, 8, 0, 0]} />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      {/* PIE CHARTS */}
      <TabsContent value="pie" className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Standard Pie */}
          <Card className="elevation-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Distribución de Estados</CardTitle>
                  <CardDescription>Porcentaje de facturas por estado</CardDescription>
                </div>
                <Badge variant="default">Pie Chart</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Donut Chart */}
          <Card className="elevation-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Ingresos Trimestrales</CardTitle>
                  <CardDescription>Distribución por quarter (miles USD)</CardDescription>
                </div>
                <Badge variant="secondary">Donut Chart</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, value }) =>
                      `${name}: $${(value / 1000).toFixed(0)}K`
                    }
                    innerRadius={70}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={2}
                  >
                    {donutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      {/* AREA CHARTS */}
      <TabsContent value="area" className="space-y-6">
        <div className="grid gap-6">
          {/* Stacked Area Chart */}
          <Card className="elevation-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Evolución de Cartera</CardTitle>
                  <CardDescription>Real vs Proyectado (millones USD)</CardDescription>
                </div>
                <Badge variant="default">Multi-Area</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="colorCartera" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={primary} stopOpacity={0.8}/>
                      <stop offset="95%" stopColor={primary} stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorProyectado" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={chart2} stopOpacity={0.6}/>
                      <stop offset="95%" stopColor={chart2} stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={border} />
                  <XAxis dataKey="date" tick={{ fill: muted }} />
                  <YAxis tick={{ fill: muted }} />
                  <Tooltip 
                    content={<CustomTooltip />}
                    formatter={(value: number) => `$${(value / 1000000).toFixed(1)}M`}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="cartera"
                    stroke={primary}
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorCartera)"
                    name="Cartera Real"
                  />
                  <Area
                    type="monotone"
                    dataKey="proyectado"
                    stroke={chart2}
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fillOpacity={1}
                    fill="url(#colorProyectado)"
                    name="Proyectado"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Radar Chart */}
          <Card className="elevation-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Evaluación de Indicadores Financieros</CardTitle>
                  <CardDescription>Score de salud financiera (0-100)</CardDescription>
                </div>
                <Badge variant="secondary">Radar Chart</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke={border} />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: muted }}
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]}
                    tick={{ fill: muted }}
                  />
                  <Radar
                    name="Indicador"
                    dataKey="A"
                    stroke={primary}
                    fill={primary}
                    fillOpacity={0.4}
                    strokeWidth={2}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      {/* MIXED/COMPOSED CHARTS */}
      <TabsContent value="mixed" className="space-y-6">
        <Card className="elevation-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Operaciones y Montos</CardTitle>
                <CardDescription>Gráfico combinado: Barras + Línea</CardDescription>
              </div>
              <Badge variant="default">Composed Chart</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={mixedData}>
                <CartesianGrid strokeDasharray="3 3" stroke={border} />
                <XAxis dataKey="month" tick={{ fill: muted }} />
                <YAxis 
                  yAxisId="left"
                  tick={{ fill: muted }}
                  label={{ value: 'Operaciones', angle: -90, position: 'insideLeft' }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: muted }}
                  label={{ value: 'Monto (USD)', angle: 90, position: 'insideRight' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar 
                  yAxisId="left"
                  dataKey="operaciones" 
                  fill={primary} 
                  radius={[8, 8, 0, 0]}
                  name="N° Operaciones"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="monto"
                  stroke={chart2}
                  strokeWidth={3}
                  dot={{ fill: chart2, r: 5 }}
                  name="Monto Total"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </TabsContent>

      {/* SIZES */}
      <TabsContent value="sizes" className="space-y-6">
        <div className="space-y-6">
          {/* Small and Medium in grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Small */}
            <Card className="elevation-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Pequeño (200px)</CardTitle>
                  <Badge variant="outline">Small</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={border} />
                    <XAxis dataKey="month" tick={{ fill: muted, fontSize: 10 }} />
                    <YAxis tick={{ fill: muted, fontSize: 10 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="aprobadas"
                      stroke={primary}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Medium */}
            <Card className="elevation-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Mediano (300px)</CardTitle>
                  <Badge variant="outline">Medium</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={border} />
                    <XAxis dataKey="category" tick={{ fill: muted }} />
                    <YAxis tick={{ fill: muted }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="count" fill={chart2} radius={[8, 8, 0, 0]} />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Large - Full width */}
          <Card className="elevation-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Grande (500px)</CardTitle>
                <Badge variant="default">Large</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={500}>
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="largeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={primary} stopOpacity={0.8}/>
                      <stop offset="95%" stopColor={primary} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={border} />
                  <XAxis dataKey="date" tick={{ fill: muted }} />
                  <YAxis tick={{ fill: muted }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="cartera"
                    stroke={primary}
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#largeGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      {/* MOBILE */}
      <TabsContent value="mobile" className="space-y-6">
        <div className="space-y-4">
          {/* Header Info */}
          <Card className="elevation-1 bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Badge variant="default" className="mt-1">📱 Mobile-First</Badge>
                <div className="space-y-1">
                  <p className="font-medium">Gráficos Optimizados para Móviles</p>
                  <p className="text-sm text-muted-foreground">
                    Alturas reducidas, fuentes pequeñas, menor información en ejes, tooltips táctiles
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compact Line Chart - Single metric */}
          <Card className="elevation-1">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Facturas del Mes</CardTitle>
                <Badge variant="outline" className="text-xs">150px</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <ResponsiveContainer width="100%" height={150}>
                <LineChart data={lineData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={border} opacity={0.3} />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fill: muted, fontSize: 10 }}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fill: muted, fontSize: 10 }}
                    tickLine={false}
                    width={30}
                  />
                  <Tooltip 
                    content={<CustomTooltip />}
                    cursor={{ stroke: primary, strokeWidth: 1 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="aprobadas"
                    stroke={primary}
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 4, fill: primary }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Ene - Jun 2024</span>
                <span className="font-medium text-foreground">+25% vs mes anterior</span>
              </div>
            </CardContent>
          </Card>

          {/* Compact Bar Chart - Horizontal for better mobile UX */}
          <Card className="elevation-1">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Top 5 Sectores</CardTitle>
                <Badge variant="outline" className="text-xs">180px</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <ResponsiveContainer width="100%" height={180}>
                <RechartsBarChart 
                  data={barData.slice(0, 5)} 
                  layout="vertical"
                  margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={border} opacity={0.3} horizontal={false} />
                  <XAxis 
                    type="number" 
                    tick={{ fill: muted, fontSize: 10 }}
                    tickLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <YAxis 
                    type="category" 
                    dataKey="category" 
                    tick={{ fill: muted, fontSize: 10 }}
                    tickLine={false}
                    width={80}
                  />
                  <Tooltip 
                    content={<CustomTooltip />}
                    cursor={{ fill: border, opacity: 0.2 }}
                  />
                  <Bar 
                    dataKey="count" 
                    fill={chart2} 
                    radius={[0, 4, 4, 0]}
                    maxBarSize={20}
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Two compact charts side by side */}
          <div className="grid gap-4 grid-cols-2">
            {/* Mini Pie Chart */}
            <Card className="elevation-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Estados</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <ResponsiveContainer width="100%" height={140}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      fill="#8884d8"
                      dataKey="value"
                      label={false}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      content={<CustomTooltip />}
                      position={{ x: 0, y: 0 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-1 mt-2">
                  {pieData.slice(0, 2).map((item, i) => (
                    <ChartLegendItem
                      key={i}
                      color={item.color}
                      label={item.name}
                      value={`${item.value}%`}
                      shape="circle"
                      size="sm"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mini Area Chart */}
            <Card className="elevation-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Tendencia</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <ResponsiveContainer width="100%" height={140}>
                  <AreaChart 
                    data={lineData} 
                    margin={{ top: 5, right: 0, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="mobileGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={success} stopOpacity={0.6}/>
                        <stop offset="95%" stopColor={success} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={border} opacity={0.2} />
                    <XAxis 
                      dataKey="month" 
                      tick={{ fill: muted, fontSize: 9 }}
                      tickLine={false}
                    />
                    <YAxis hide />
                    <Tooltip 
                      content={<CustomTooltip />}
                      cursor={{ stroke: success, strokeWidth: 1 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="aprobadas"
                      stroke={success}
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#mobileGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="mt-2 text-xs text-center">
                  <span className="text-muted-foreground">Promedio: </span>
                  <span className="font-medium text-foreground">58.5</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sparkline style - Ultra compact */}
          <Card className="elevation-1">
            <CardContent className="py-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-xs text-muted-foreground">Operaciones Diarias</p>
                  <p className="text-lg font-semibold">2,847</p>
                </div>
                <Badge variant="default" className="text-xs">+12%</Badge>
              </div>
              <ResponsiveContainer width="100%" height={60}>
                <AreaChart 
                  data={lineData} 
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={primary} stopOpacity={0.4}/>
                      <stop offset="95%" stopColor={primary} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="aprobadas"
                    stroke={primary}
                    strokeWidth={1.5}
                    fillOpacity={1}
                    fill="url(#sparkGradient)"
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Mobile-optimized stacked bar */}
          <Card className="elevation-1">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Distribución Mensual</CardTitle>
                <Badge variant="outline" className="text-xs">200px</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <ResponsiveContainer width="100%" height={200}>
                <RechartsBarChart 
                  data={stackedBarData} 
                  margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={border} opacity={0.3} />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fill: muted, fontSize: 10 }}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fill: muted, fontSize: 10 }}
                    tickLine={false}
                    width={30}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="pequeña" stackId="a" fill={chart2} radius={[0, 0, 0, 0]} maxBarSize={40} />
                  <Bar dataKey="mediana" stackId="a" fill={primary} radius={[0, 0, 0, 0]} maxBarSize={40} />
                  <Bar dataKey="grande" stackId="a" fill={success} radius={[4, 4, 0, 0]} maxBarSize={40} />
                </RechartsBarChart>
              </ResponsiveContainer>
              {/* Manual legend for better mobile UX */}
              <div className="flex items-center justify-center gap-4 mt-3 flex-wrap">
                <ChartLegendItem color="chart2" label="Pequeña" />
                <ChartLegendItem color="primary" label="Mediana" />
                <ChartLegendItem color="success" label="Grande" />
              </div>
            </CardContent>
          </Card>

          {/* Best Practices Card */}
          <Card className="elevation-1 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Badge variant="default" className="text-xs">💡 Tips</Badge>
                Mejores Prácticas Mobile
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Altura:</strong> 150-200px para gráficos principales, 60-100px para sparklines</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Fuentes:</strong> 9-10px para ejes, 12-14px para títulos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Orientación:</strong> Barras horizontales funcionan mejor en móvil</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Simplificación:</strong> Mostrar solo métricas clave, ocultar gridlines innecesarias</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Touch:</strong> Áreas táctiles grandes, tooltips optimizados para dedo</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Leyendas:</strong> Debajo del gráfico, no flotantes</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}