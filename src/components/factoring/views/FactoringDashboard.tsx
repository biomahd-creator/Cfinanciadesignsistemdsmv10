import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  DollarSign, 
  Users, 
  FileText, 
  Clock,
  MoreHorizontal,
  TrendingUp,
  Activity
} from "lucide-react";
import { Progress } from "../../ui/progress";

interface DashboardProps {
  onViewChange: (view: any) => void;
}

export function FactoringDashboard({ onViewChange }: DashboardProps) {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">Dashboard General</h1>
          <p className="text-muted-foreground mt-1">Resumen de operaciones y estado de cartera.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Descargar Reporte</Button>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
            onClick={() => onViewChange("new-request")}
          >
            Nueva Solicitud
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard 
          title="Cartera Total" 
          value="$1,234,567.89" 
          change="+12.5% vs mes anterior" 
          trend="up"
          icon={DollarSign}
        />
        <KpiCard 
          title="Solicitudes Activas" 
          value="24" 
          change="+4 nuevas esta semana" 
          trend="up"
          icon={FileText}
        />
        <KpiCard 
          title="Clientes Activos" 
          value="156" 
          change="+2.1% crecimiento" 
          trend="up"
          icon={Users}
        />
        <KpiCard 
          title="Tasa Promedio" 
          value="2.4%" 
          change="-0.1% vs mes anterior" 
          trend="down"
          icon={TrendingUp}
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Activity / Chart Placeholder */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Comportamiento de Cartera</CardTitle>
            <CardDescription>Volumen de operaciones últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-end justify-between gap-2 pt-4 pb-2">
              {/* Mock Chart Bars */}
              {[35, 45, 30, 60, 55, 75, 50, 65, 80, 70, 60, 85].map((h, i) => (
                <div 
                  key={i} 
                  className="group relative flex-1 bg-muted/50 hover:bg-primary rounded-t-sm transition-all duration-300" 
                  style={{ "--bar-height": `${h}%` } as React.CSSProperties}
                  data-bar-height={h}
                >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded pointer-events-none">
                        ${h}M
                    </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2 px-1">
              <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span>
              <span>Jul</span><span>Ago</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dic</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent Requests List */}
        <Card>
          <CardHeader>
            <CardTitle>Solicitudes Recientes</CardTitle>
            <CardDescription>Últimas 5 operaciones ingresadas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { id: "REQ-001", client: "Tech Solutions SAS", amount: "$45.2M", status: "review", time: "Hace 2h" },
              { id: "REQ-002", client: "Importadora Global", amount: "$128.5M", status: "approved", time: "Hace 5h" },
              { id: "REQ-003", client: "Servicios Rápidos", amount: "$12.0M", status: "pending", time: "Hace 1d" },
              { id: "REQ-004", client: "Constructora Elite", amount: "$245.0M", status: "review", time: "Hace 1d" },
              { id: "REQ-005", client: "Distribuidora del Norte", amount: "$32.4M", status: "rejected", time: "Hace 2d" },
            ].map((req) => (
              <div key={req.id} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    req.status === 'approved' ? 'bg-success' : 
                    req.status === 'rejected' ? 'bg-destructive' : 
                    req.status === 'review' ? 'bg-info' : 'bg-warning'
                  }`} />
                  <div>
                    <p className="text-sm font-medium leading-none group-hover:text-primary transition-colors cursor-pointer">{req.client}</p>
                    <p className="text-xs text-muted-foreground mt-1">{req.id} • {req.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{req.amount}</p>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full text-xs" onClick={() => onViewChange("requests")}>
              Ver todas las solicitudes
            </Button>
          </CardContent>
        </Card>
      </div>

       {/* Limits and Usage */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Cupo Global Utilizado</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-semibold mb-2">68%</div>
                    <Progress value={68} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">$2.4B / $3.5B asignados</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Facturas por Vencer (7 días)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-semibold mb-2 text-warning">12</div>
                    <p className="text-xs text-muted-foreground">Valor total: $145,000,000</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Tiempo Promedio Aprobación</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-semibold mb-2 text-success">4.2 horas</div>
                    <p className="text-xs text-muted-foreground">-15% vs mes anterior</p>
                </CardContent>
            </Card>
       </div>
    </div>
  );
}

function KpiCard({ title, value, change, trend, icon: Icon }: any) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-semibold text-foreground">{value}</div>
                <p className={`text-xs flex items-center mt-1 ${
                    trend === 'up' ? 'text-success' : 'text-destructive'
                }`}>
                    {trend === 'up' ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                    {change}
                </p>
            </CardContent>
        </Card>
    )
}