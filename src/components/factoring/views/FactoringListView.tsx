import { useState } from "react";
import { 
  Upload,
  Clock,
  FileText,
  XCircle,
  Ban,
  RefreshCw,
  Search, 
  Eye, 
  Plus, 
  FileSearch, 
  ChevronLeft, 
  ChevronRight,
  Filter
} from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Card, CardContent } from "../../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Badge } from "../../ui/badge";
import { Checkbox } from "../../ui/checkbox";
import { StatusKPICard } from "../../business/StatusKPICard";

interface FactoringListViewProps {
  onNewOperation: () => void;
  onViewDetail: (id: string) => void;
}

export function FactoringListView({ onNewOperation, onViewDetail }: FactoringListViewProps) {
  const [activeTab, setActiveTab] = useState("creadas");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // Datos mockeados del Brief
  const operations = [
    {
      id: "27007",
      date: "2025-12-31",
      nit: "900985442",
      reason: "CI PETROIL S.A.S.",
      invoices: 1,
      factValue: "$ 102.938.617",
      disburseValue: "$ 89.383.968",
    },
    {
      id: "27006",
      date: "2025-12-31",
      nit: "900142127",
      reason: "ODIN PETROIL Y GAS S.A.S.",
      invoices: 1,
      factValue: "$ 1.157.547.355",
      disburseValue: "$ 1.005.158.371",
    },
    {
      id: "26988",
      date: "2025-12-30",
      nit: "900985442",
      reason: "CI PETROIL S.A.S.",
      invoices: 1,
      factValue: "$ 100.000.000",
      disburseValue: "$ 87.500.000",
    },
    {
      id: "26985",
      date: "2025-12-29",
      nit: "800145223",
      reason: "SERVICIOS INDUSTRIALES LTDA",
      invoices: 3,
      factValue: "$ 450.200.000",
      disburseValue: "$ 398.150.000",
    }
  ];

  return (
    <div className="space-y-8 p-6 animate-in fade-in duration-500">
      
      {/* Breadcrumb Visual */}
      <div className="text-sm text-muted-foreground">
        <span>Inicio</span>
        <span className="mx-2">{'>'}</span>
        <span className="font-medium text-secondary">Factoring</span>
      </div>

      {/* KPI Card - Especificación Brief */}
      <Card className="bg-white border-border shadow-sm overflow-hidden relative">
        <CardContent className="p-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* Main Stats */}
            <div className="space-y-2">
              <h3 className="text-secondary font-medium text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Monto en operaciones validadas en factoring:
              </h3>
              <p className="text-foreground text-4xl md:text-5xl font-semibold tracking-tight">
                $358.475.339.641,16
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  Última actualización: hace 5 min
                </span>
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="h-4 w-4" />
                  Sincronización automática
                </span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 min-w-[300px]">
              <div className="bg-muted/50 p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <Upload className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs font-medium text-muted-foreground uppercase">Procesadas Hoy</span>
                </div>
                <p className="text-2xl font-bold text-secondary">24</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <Ban className="h-4 w-4 text-destructive" />
                  <span className="text-xs font-medium text-muted-foreground uppercase">Rechazadas</span>
                </div>
                <p className="text-2xl font-bold text-destructive">2</p>
              </div>
            </div>
          </div>
        </CardContent>
        {/* Decorative stripe top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
      </Card>

      {/* Main Content with Tabs */}
      <Tabs defaultValue="creadas" value={activeTab} onValueChange={setActiveTab} className="w-full">
        
        {/* KPI Tabs Replacement */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {/* Tab: Creadas */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredTab("creadas")}
              onMouseLeave={() => setHoveredTab(null)}
              onClick={() => setActiveTab("creadas")}
            >
              <StatusKPICard
                title="Creadas"
                subtitle="Ingresadas recientemente"
                amount="$ 1.250.000"
                count={4}
                variant="negotiation"
                state={activeTab === "creadas" ? "active" : (hoveredTab === "creadas" ? "hover" : "normal")}
                onViewClick={() => setActiveTab("creadas")}
              />
            </div>

            {/* Tab: En Proceso */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredTab("proceso")}
              onMouseLeave={() => setHoveredTab(null)}
              onClick={() => setActiveTab("proceso")}
            >
              <StatusKPICard
                title="En Proceso"
                subtitle="Validación en curso"
                amount="$ 450.000"
                count={2}
                variant="negotiation"
                state={activeTab === "proceso" ? "active" : (hoveredTab === "proceso" ? "hover" : "normal")}
                onViewClick={() => setActiveTab("proceso")}
              />
            </div>

            {/* Tab: Negociadas */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredTab("negociadas")}
              onMouseLeave={() => setHoveredTab(null)}
              onClick={() => setActiveTab("negociadas")}
            >
              <StatusKPICard
                title="Negociadas"
                subtitle="Listas para desembolso"
                amount="$ 2.100.000"
                count={8}
                variant="disbursed"
                state={activeTab === "negociadas" ? "active" : (hoveredTab === "negociadas" ? "hover" : "normal")}
                onViewClick={() => setActiveTab("negociadas")}
              />
            </div>

            {/* Tab: Endosadas */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredTab("endosadas")}
              onMouseLeave={() => setHoveredTab(null)}
              onClick={() => setActiveTab("endosadas")}
            >
              <StatusKPICard
                title="Endosadas"
                subtitle="Finalizadas exitosamente"
                amount="$ 5.400.000"
                count={15}
                variant="disbursed"
                state={activeTab === "endosadas" ? "active" : (hoveredTab === "endosadas" ? "hover" : "normal")}
                onViewClick={() => setActiveTab("endosadas")}
              />
            </div>
        </div>

        {/* Filters & Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 bg-white p-4 rounded-lg border border-border shadow-sm">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar por ID, NIT o Razón..." className="pl-9 bg-muted/50" />
            </div>
            <Button variant="outline" className="hidden md:flex gap-2">
                <Filter className="h-4 w-4" />
                Filtros
            </Button>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button variant="outline" className="flex-1 md:flex-none border-secondary text-secondary hover:bg-accent">
              <FileSearch className="mr-2 h-4 w-4" />
              Consultar facturas
            </Button>
            <Button 
              className="flex-1 md:flex-none bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={onNewOperation}
            >
              <Plus className="mr-2 h-4 w-4" />
              Nueva operación
            </Button>
          </div>
        </div>

        {/* Data Table */}
        <TabsContent value={activeTab} className="mt-0">
            {activeTab === "creadas" ? (
                <Card className="border-border shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-muted/30">
                        <TableRow>
                            <TableHead className="w-[50px] text-center">
                                <Checkbox />
                            </TableHead>
                            <TableHead className="font-medium text-foreground">ID</TableHead>
                            <TableHead className="font-medium text-foreground">FECHA OPERACIÓN</TableHead>
                            <TableHead className="font-medium text-foreground">NIT CLIENTE</TableHead>
                            <TableHead className="font-medium text-foreground">RAZÓN CLIENTE</TableHead>
                            <TableHead className="font-medium text-foreground text-center">FACTURAS</TableHead>
                            <TableHead className="font-medium text-foreground text-right">VALOR FACTURA</TableHead>
                            <TableHead className="font-medium text-foreground text-right">VALOR DESEMBOLSO</TableHead>
                            <TableHead className="font-medium text-foreground text-center">OPCIONES</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {operations.map((op) => (
                            <TableRow 
                            key={op.id} 
                            className="hover:bg-accent/50 cursor-pointer transition-colors group"
                            onClick={() => onViewDetail(op.id)}
                            >
                            <TableCell className="text-center" onClick={(e) => e.stopPropagation()}>
                                <Checkbox />
                            </TableCell>
                            <TableCell className="font-medium text-secondary group-hover:underline">{op.id}</TableCell>
                            <TableCell>{op.date}</TableCell>
                            <TableCell>{op.nit}</TableCell>
                            <TableCell className="font-medium">{op.reason}</TableCell>
                            <TableCell className="text-center">
                                <Badge variant="secondary" className="bg-muted text-muted-foreground font-normal">
                                {op.invoices}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right font-medium">{op.factValue}</TableCell>
                            <TableCell className="text-right font-semibold text-foreground">{op.disburseValue}</TableCell>
                            <TableCell className="text-center">
                                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                                <Eye className="h-4 w-4" />
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </div>

                    {/* Pagination */}
                    <div className="border-t border-border p-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-muted/20">
                    <div className="text-sm text-muted-foreground">
                        Página 1 de 10
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Ir a página:</span>
                        <Input className="w-16 h-8 bg-white" defaultValue="1" />
                    </div>

                    <div className="flex items-center gap-4">
                        <Select defaultValue="10">
                            <SelectTrigger className="w-[130px] h-8 bg-white">
                                <SelectValue placeholder="Mostrar" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="10">Mostrar 10</SelectItem>
                                <SelectItem value="25">Mostrar 25</SelectItem>
                                <SelectItem value="50">Mostrar 50</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="flex items-center gap-1">
                            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8 bg-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground border-secondary">
                                1
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                                2
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                                3
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    </div>
                </Card>
            ) : (
                <div className="text-center py-12 text-muted-foreground bg-white rounded-lg border border-dashed">
                    <FileSearch className="h-12 w-12 mb-4 mx-auto opacity-20" />
                    <p>No hay operaciones en estado <span className="font-semibold">{activeTab}</span>.</p>
                </div>
            )}
        </TabsContent>
      </Tabs>
    </div>
  );
}