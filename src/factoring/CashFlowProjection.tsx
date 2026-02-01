import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

interface CashFlowData {
  month: string;
  actual: number;
  projected: number;
  gap?: number;
}

interface CashFlowProjectionProps {
  data: CashFlowData[];
  title?: string;
  className?: string;
}

export function CashFlowProjection({
  data,
  title = "Proyección de Flujo de Caja",
  className,
}: CashFlowProjectionProps) {
  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: 'COP',
      maximumSignificantDigits: 3
    }).format(value);

  // Verificar que haya datos
  if (!data || data.length === 0) {
    return (
      <Card className={className}>
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div className="space-y-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              Comparativo de flujo real vs. proyectado
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
            No hay datos disponibles
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            Comparativo de flujo real vs. proyectado
          </CardDescription>
        </div>
        <Select defaultValue="6m">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Periodo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3m">3 Meses</SelectItem>
            <SelectItem value="6m">6 Meses</SelectItem>
            <SelectItem value="1y">1 Año</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full min-w-0" style={{ minHeight: '300px' }}>
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--info))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--info))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                className="text-xs text-muted-foreground"
                dy={10}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${value / 1000000}M`}
                className="text-xs text-muted-foreground"
              />
              <Tooltip 
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--popover))', 
                  borderRadius: 'var(--radius)',
                  border: '1px solid hsl(var(--border))',
                  boxShadow: 'var(--shadow-elevation-2)'
                }}
                labelStyle={{ color: 'hsl(var(--popover-foreground))' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Area
                type="monotone"
                dataKey="projected"
                name="Proyectado"
                stroke="hsl(var(--info))"
                fillOpacity={1}
                fill="url(#colorProjected)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="actual"
                name="Real"
                stroke="hsl(var(--success))"
                fillOpacity={1}
                fill="url(#colorActual)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
