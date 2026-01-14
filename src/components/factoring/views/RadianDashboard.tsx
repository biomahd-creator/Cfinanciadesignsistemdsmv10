import { useState } from "react";
import { 
  FileText, 
  Search, 
  History, 
  Plus, 
  Filter, 
  Eye, 
  Heart, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Download,
  Edit
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { StatusKPICard } from "../../business/StatusKPICard";

export function RadianDashboard() {
  const [activeTab, setActiveTab] = useState("operaciones");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // MOCK DATA - OPERACIONES
  const operaciones = [
    {
        nitEndosante: "901298003",
        razonEndosante: "CESIONBNK SAS",
        nitEndosatario: "901061400",
        razonEndosatario: "PATRIMONIO AUTÓNOMO...",
        facturas: 1,
        totalFacturas: "$2.429.028",
        totalEndosado: "$2.101.117"
    },
    {
        nitEndosante: "900278155",
        razonEndosante: "HIDROSPOT SAS",
        nitEndosatario: "901298003",
        razonEndosatario: "CESIONBNK SAS",
        facturas: 1,
        totalFacturas: "$2.429.028",
        totalEndosado: "$2.090.803"
    }
  ];

  // MOCK DATA - MANDATOS
  const mandatos = [
      {
          nit: "830107457",
          razon: "SUNAO TRADING SAS",
          tipo: "Documento General",
          vigencia: "Ilimitado",
          estado: "Vigente"
      },
      {
          nit: "901366606",
          razon: "SERVICIOS ESP. DE...",
          tipo: "Documento General",
          vigencia: "Ilimitado",
          estado: "Vigente"
      }
  ];

  // MOCK DATA - TITULOS
  const titulos = [
      {
          num: "OPI251",
          venc: "2025-01-30",
          emisor: "CI PETROIL S.A.S.",
          tenedor: "CI PETROIL S.A.S.",
          valor: "$102.938.617",
          estado: "Factura Electrónica"
      },
      {
          num: "OPI233",
          venc: "2026-01-30",
          emisor: "ODIN PETROIL Y GAS...",
          tenedor: "ODIN PETROIL Y GAS...",
          valor: "$1.157.547.355",
          estado: "Factura Electrónica"
      }
  ];

  return (
    <div className="space-y-8 p-6 animate-in fade-in duration-500">
      
      {/* HEADER CARDS (3 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Nuevo Endoso */}
        <Card className="hover:border-primary transition-colors group">
            <CardContent className="p-6 flex flex-col items-start gap-4 h-full">
                <div className="p-3 rounded-full bg-blue-50 text-blue-600 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <FileText className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg text-foreground">Nuevo Endoso</h3>
                    <p className="text-sm text-zinc-500 mt-1">Genera un nuevo endoso electrónico para tus facturas.</p>
                </div>
                <Button className="w-full mt-auto bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Crear Endoso
                </Button>
            </CardContent>
        </Card>

        {/* Card 2: Consulta Facturas */}
        <Card className="hover:border-primary transition-colors group">
            <CardContent className="p-6 flex flex-col items-start gap-4 h-full">
                <div className="p-3 rounded-full bg-orange-50 text-orange-600 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Search className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg text-foreground">Consulta de Facturas</h3>
                    <p className="text-sm text-zinc-500 mt-1">Accede a la información detallada de tus títulos valores.</p>
                </div>
                <Button variant="outline" className="w-full mt-auto border-secondary text-secondary hover:bg-zinc-50">
                    Consultar
                </Button>
            </CardContent>
        </Card>

        {/* Card 3: Histórico Endosos */}
        <Card className="hover:border-primary transition-colors group">
            <CardContent className="p-6 flex flex-col items-start gap-4 h-full">
                <div className="p-3 rounded-full bg-purple-50 text-purple-600 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <History className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg text-foreground">Histórico de Endosos</h3>
                    <p className="text-sm text-zinc-500 mt-1">Consulta el histórico completo de tus operaciones pasadas.</p>
                </div>
                <Button variant="outline" className="w-full mt-auto border-secondary text-secondary hover:bg-zinc-50">
                    Ver Facturas
                </Button>
            </CardContent>
        </Card>

      </div>

      {/* TABS & CONTENT */}
      <Tabs defaultValue="operaciones" value={activeTab} onValueChange={setActiveTab} className="w-full">
        
        {/* KPI Tabs Replacement */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
            {/* Tab: Operaciones */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredTab("operaciones")}
              onMouseLeave={() => setHoveredTab(null)}
              onClick={() => setActiveTab("operaciones")}
            >
              <StatusKPICard
                title="Operaciones"
                subtitle="Gestión de endosos"
                amount="$ 120.000.000"
                count={12}
                variant="negotiation"
                state={activeTab === "operaciones" ? "active" : (hoveredTab === "operaciones" ? "hover" : "normal")}
                onViewClick={() => setActiveTab("operaciones")}
              />
            </div>

            {/* Tab: Mandatos */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredTab("mandatos")}
              onMouseLeave={() => setHoveredTab(null)}
              onClick={() => setActiveTab("mandatos")}
            >
              <StatusKPICard
                title="Mandatos"
                subtitle="Contratos activos"
                amount="$ -"
                count={5}
                variant="negotiation"
                state={activeTab === "mandatos" ? "active" : (hoveredTab === "mandatos" ? "hover" : "normal")}
                onViewClick={() => setActiveTab("mandatos")}
              />
            </div>

            {/* Tab: Títulos */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredTab("titulos")}
              onMouseLeave={() => setHoveredTab(null)}
              onClick={() => setActiveTab("titulos")}
            >
              <StatusKPICard
                title="Títulos Valor"
                subtitle="Registrados en RADIAN"
                amount="$ 890.500.000"
                count={45}
                variant="disbursed"
                state={activeTab === "titulos" ? "active" : (hoveredTab === "titulos" ? "hover" : "normal")}
                onViewClick={() => setActiveTab("titulos")}
              />
            </div>
        </div>

        {/* TAB 1: OPERACIONES */}
        <TabsContent value="operaciones" className="mt-0 space-y-4">
             <Card>
                <Table>
                    <TableHeader className="bg-zinc-50">
                        <TableRow>
                            <TableHead className="font-medium text-foreground text-xs">NIT ENDOSANTE</TableHead>
                            <TableHead className="font-medium text-foreground text-xs">RAZÓN ENDOSANTE</TableHead>
                            <TableHead className="font-medium text-foreground text-xs">NIT ENDOSATARIO</TableHead>
                            <TableHead className="font-medium text-foreground text-xs">RAZÓN ENDOSATARIO</TableHead>
                            <TableHead className="font-medium text-foreground text-xs text-center">FACTURAS</TableHead>
                            <TableHead className="font-medium text-foreground text-xs text-right">TOTAL FACTURAS</TableHead>
                            <TableHead className="font-medium text-foreground text-xs text-right">TOTAL ENDOSADO</TableHead>
                            <TableHead className="font-bold text-secondary text-xs text-center">OPCIONES</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {operaciones.map((op, idx) => (
                            <TableRow key={idx} className="hover:bg-zinc-50">
                                <TableCell className="text-xs">{op.nitEndosante}</TableCell>
                                <TableCell className="text-xs font-medium">{op.razonEndosante}</TableCell>
                                <TableCell className="text-xs">{op.nitEndosatario}</TableCell>
                                <TableCell className="text-xs font-medium">{op.razonEndosatario}</TableCell>
                                <TableCell className="text-xs text-center">{op.facturas}</TableCell>
                                <TableCell className="text-xs text-right">{op.totalFacturas}</TableCell>
                                <TableCell className="text-xs text-right">{op.totalEndosado}</TableCell>
                                <TableCell className="text-center">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary hover:text-primary-foreground">
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
                {/* Pagination */}
                <div className="border-t p-4 flex items-center justify-between text-xs text-zinc-500">
                    <span>Página 1 de 341</span>
                    <div className="flex gap-1">
                        <Button variant="outline" size="icon" className="h-7 w-7" disabled><ChevronLeft className="h-3 w-3" /></Button>
                        <Button variant="outline" size="icon" className="h-7 w-7"><ChevronRight className="h-3 w-3" /></Button>
                    </div>
                </div>
             </Card>
        </TabsContent>

        {/* TAB 2: MANDATOS */}
        <TabsContent value="mandatos" className="mt-0 space-y-4">
            
            {/* Filters & Actions */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-lg border border-zinc-100 shadow-sm">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="w-full md:w-48">
                        <Select>
                            <SelectTrigger className="h-9 text-xs">
                                <SelectValue placeholder="Tipo Mandato: Todos" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todos</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full md:w-48">
                        <Select>
                            <SelectTrigger className="h-9 text-xs">
                                <SelectValue placeholder="Vigencia: Todo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-9">
                    <Plus className="mr-2 h-4 w-4" />
                    Agregar Mandato
                </Button>
            </div>

            <Card>
                <Table>
                    <TableHeader className="bg-zinc-50">
                        <TableRow>
                            <TableHead className="font-bold text-secondary text-xs">NIT MANDANTE</TableHead>
                            <TableHead className="font-bold text-secondary text-xs">RAZÓN MANDANTE</TableHead>
                            <TableHead className="font-bold text-secondary text-xs">TIPO MANDATO</TableHead>
                            <TableHead className="font-bold text-secondary text-xs">TIEMPO VIGENCIA</TableHead>
                            <TableHead className="font-bold text-secondary text-xs text-center">ESTADO MANDATO</TableHead>
                            <TableHead className="font-bold text-secondary text-xs text-center">OPCIONES</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mandatos.map((m, idx) => (
                            <TableRow key={idx} className="hover:bg-zinc-50">
                                <TableCell className="text-xs">{m.nit}</TableCell>
                                <TableCell className="text-xs font-medium">{m.razon}</TableCell>
                                <TableCell className="text-xs">{m.tipo}</TableCell>
                                <TableCell className="text-xs">{m.vigencia}</TableCell>
                                <TableCell className="text-center">
                                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                                        {m.estado}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-center">
                                    <div className="flex items-center justify-center gap-1">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary hover:text-primary-foreground">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-600 hover:bg-red-50">
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </TabsContent>

        {/* TAB 3: TITULOS */}
        <TabsContent value="titulos" className="mt-0 space-y-4">
             {/* Filters & Actions */}
             <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-lg border border-zinc-100 shadow-sm">
                <div className="flex items-center gap-4 w-full md:w-auto flex-wrap">
                    <div className="w-full md:w-40">
                        <Select>
                            <SelectTrigger className="h-9 text-xs">
                                <SelectValue placeholder="Emisor: Todo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full md:w-40">
                        <Select>
                            <SelectTrigger className="h-9 text-xs">
                                <SelectValue placeholder="Tenedor: Todo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="w-full md:w-40">
                        <Select>
                            <SelectTrigger className="h-9 text-xs">
                                <SelectValue placeholder="Estado: Todo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 h-9 text-xs">
                        Estado de los Títulos
                    </Button>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-9 text-xs">
                        <Plus className="mr-2 h-3 w-3" />
                        Agregar Título
                    </Button>
                </div>
            </div>

            <Card>
                <Table>
                    <TableHeader className="bg-zinc-50">
                        <TableRow>
                            <TableHead className="font-bold text-secondary text-xs">NUMERACIÓN</TableHead>
                            <TableHead className="font-bold text-secondary text-xs">FECHA VENCIMIENTO</TableHead>
                            <TableHead className="font-bold text-secondary text-xs">EMISOR</TableHead>
                            <TableHead className="font-bold text-secondary text-xs">TENEDOR</TableHead>
                            <TableHead className="font-bold text-secondary text-xs text-right">VALOR ACTUAL</TableHead>
                            <TableHead className="font-bold text-secondary text-xs text-center">ESTADO RADIAN</TableHead>
                            <TableHead className="font-bold text-secondary text-xs text-center">OPCIONES</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {titulos.map((t, idx) => (
                            <TableRow key={idx} className="hover:bg-zinc-50">
                                <TableCell className="text-xs font-medium">{t.num}</TableCell>
                                <TableCell className="text-xs">{t.venc}</TableCell>
                                <TableCell className="text-xs max-w-[150px] truncate">{t.emisor}</TableCell>
                                <TableCell className="text-xs max-w-[150px] truncate">{t.tenedor}</TableCell>
                                <TableCell className="text-xs text-right">{t.valor}</TableCell>
                                <TableCell className="text-center">
                                    <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50 text-xs px-2 py-0.5">
                                        {t.estado}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-center">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <MoreVertical className="h-4 w-4 text-zinc-400" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>
                                                <Eye className="mr-2 h-4 w-4" /> Ver Detalle
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Edit className="mr-2 h-4 w-4" /> Editar
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Download className="mr-2 h-4 w-4" /> Descargar
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}