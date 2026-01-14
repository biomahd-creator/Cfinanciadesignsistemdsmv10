import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Badge } from "../../ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../../ui/table";
import { Checkbox } from "../../ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { 
  Search, 
  X, 
  Columns3, 
  Filter, 
  Calendar,
  ChevronDown,
  Plus,
  Download,
  Eye,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  User
} from "lucide-react";

/**
 * ⚠️ PLAYGROUND COMPONENT - Experimental Development
 * 
 * Pantalla de Operaciones Creadas - Vista principal de Factoring
 * Muestra tabla con todas las operaciones creadas
 * 
 * Ubicación: /components/factoring/playground/OperacionesCreadasScreen.tsx
 * Estado: En desarrollo
 * Propósito: Testing y refinamiento antes de integración final
 */

interface OperacionesCreadasScreenProps {
  onBack?: () => void;
  onNewOperation?: () => void;
  onViewOperation?: (id: string) => void;
  userEmail?: string;
  companyName?: string;
}

// Mock data para las operaciones
const mockOperaciones = [
  { id: "8134", fechaOperacion: "2025-01-02", nitCliente: "739285614", razonCliente: "Quantum Innovations Ltd", facturas: 34, valorFacturas: "$ 8,345,679,123", valorDesembolso: "$ 8,345,679,123" },
  { id: "7395", fechaOperacion: "2025-01-11", nitCliente: "658302947", razonCliente: "Horizon Edge Technologies", facturas: 23, valorFacturas: "$ 12,987,654,321", valorDesembolso: "$ 12,987,654,321", highlight: true },
  { id: "7164", fechaOperacion: "2025-01-06", nitCliente: "204758913", razonCliente: "Vertex Systems LLC", facturas: 76, valorFacturas: "$ 8,345,679,123", valorDesembolso: "$ 8,345,679,123" },
  { id: "1753", fechaOperacion: "2025-01-15", nitCliente: "560789142", razonCliente: "Titanium Solutions Group", facturas: 45, valorFacturas: "$ 12,987,654,321", valorDesembolso: "$ 12,987,654,321" },
  { id: "8591", fechaOperacion: "2025-01-04", nitCliente: "893752461", razonCliente: "Apex Dynamics Group", facturas: 3, valorFacturas: "$ 8,345,679,123", valorDesembolso: "$ 8,345,679,123" },
  { id: "9821", fechaOperacion: "2025-01-13", nitCliente: "835614790", razonCliente: "Infinite Loop Studios", facturas: 45, valorFacturas: "$ 12,987,654,321", valorDesembolso: "$ 12,987,654,321" },
  { id: "4819", fechaOperacion: "2025-01-08", nitCliente: "372015648", razonCliente: "Luminos Robotics Co", facturas: 12, valorFacturas: "$ 8,345,679,123", valorDesembolso: "$ 8,345,679,123" },
  { id: "2597", fechaOperacion: "2025-01-17", nitCliente: "304179625", razonCliente: "NovaDyne Technologies", facturas: 7, valorFacturas: "$ 12,987,654,321", valorDesembolso: "$ 12,987,654,321" },
  { id: "6483", fechaOperacion: "2025-01-03", nitCliente: "560439827", razonCliente: "NexGen Solutions Inc", facturas: 78, valorFacturas: "$ 8,345,679,123", valorDesembolso: "$ 8,345,679,123" },
  { id: "4168", fechaOperacion: "2025-01-12", nitCliente: "472918356", razonCliente: "Silverline Industries", facturas: 2, valorFacturas: "$ 12,987,654,321", valorDesembolso: "$ 12,987,654,321" },
  { id: "3628", fechaOperacion: "2025-01-07", nitCliente: "489736154", razonCliente: "EchoWave Enterprises", facturas: 19, valorFacturas: "$ 8,345,679,123", valorDesembolso: "$ 8,345,679,123" },
  { id: "8420", fechaOperacion: "2025-01-16", nitCliente: "785246913", razonCliente: "Zenith Engineering LLC", facturas: 23, valorFacturas: "$ 12,987,654,321", valorDesembolso: "$ 12,987,654,321" },
  { id: "2437", fechaOperacion: "2025-01-05", nitCliente: "671839205", razonCliente: "Synergy Networks", facturas: 10, valorFacturas: "$ 8,345,679,123", valorDesembolso: "$ 8,345,679,123" },
  { id: "6209", fechaOperacion: "2025-01-14", nitCliente: "219348766", razonCliente: "Stellar Innovations", facturas: 6, valorFacturas: "$ 12,987,654,321", valorDesembolso: "$ 12,987,654,321" },
  { id: "1506", fechaOperacion: "2025-01-09", nitCliente: "184672390", razonCliente: "Pinnacle Software Corp", facturas: 78, valorFacturas: "$ 8,345,679,123", valorDesembolso: "$ 8,345,679,123" },
];

export function OperacionesCreadasScreen({
  onBack,
  onNewOperation,
  onViewOperation,
  userEmail = "soporte.cfinancia",
  companyName = "CFINANCIA"
}: OperacionesCreadasScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("creadas");

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(mockOperaciones.map(op => op.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header Navigation */}
      <header className="bg-[#1a3a52] h-14 flex items-center justify-between px-6 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#84cc16] flex items-center justify-center">
            <span className="text-lg font-bold text-[#1a3a52]">F</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Financia</span>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-5 rounded-full font-medium gap-2"
          >
            <span>📁</span>
            Operaciones Creadas
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 h-9 px-5 rounded-full font-medium gap-2"
          >
            <span>📊</span>
            Radian
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 h-9 px-5 rounded-full font-medium gap-2"
          >
            <span>🔗</span>
            Vinculaciones
          </Button>
        </nav>

        {/* User Info */}
        <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-full">
          <User className="h-4 w-4 text-white" />
          <div className="text-sm">
            <div className="font-medium text-white leading-tight">{userEmail}</div>
            <div className="text-xs text-slate-300 leading-tight">{companyName}</div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 px-6 py-3">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span className="hover:text-[#84cc16] cursor-pointer">Home</span>
          <span>›</span>
          <span className="hover:text-[#84cc16] cursor-pointer">Factoring</span>
          <span>›</span>
          <span className="font-medium text-slate-900">Operaciones Creadas</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-6 py-6">
        {/* Title Section */}
        <div className="mb-6">
          <div className="text-sm text-slate-600 mb-1">Factoring</div>
          <h1 className="text-3xl font-bold text-[#1a1a1a]">Operaciones Creadas</h1>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-200">
          <Button
            variant="ghost"
            className={`rounded-none border-b-2 px-4 h-11 ${
              activeTab === "creadas"
                ? "border-[#84cc16] text-[#1a1a1a] font-semibold bg-slate-50"
                : "border-transparent text-slate-600 hover:text-[#1a1a1a] hover:bg-slate-50"
            }`}
            onClick={() => setActiveTab("creadas")}
          >
            Operaciones Creadas
            <Badge className="ml-2 bg-slate-200 text-slate-700 hover:bg-slate-200">8</Badge>
          </Button>
          <Button
            variant="ghost"
            className={`rounded-none border-b-2 px-4 h-11 ${
              activeTab === "proceso"
                ? "border-[#84cc16] text-[#1a1a1a] font-semibold bg-slate-50"
                : "border-transparent text-slate-600 hover:text-[#1a1a1a] hover:bg-slate-50"
            }`}
            onClick={() => setActiveTab("proceso")}
          >
            Operaciones en Proceso
          </Button>
          <Button
            variant="ghost"
            className={`rounded-none border-b-2 px-4 h-11 ${
              activeTab === "negociadas"
                ? "border-[#84cc16] text-[#1a1a1a] font-semibold bg-slate-50"
                : "border-transparent text-slate-600 hover:text-[#1a1a1a] hover:bg-slate-50"
            }`}
            onClick={() => setActiveTab("negociadas")}
          >
            Operaciones Negociadas
          </Button>
          <Button
            variant="ghost"
            className={`rounded-none border-b-2 px-4 h-11 ${
              activeTab === "endosadas"
                ? "border-[#84cc16] text-[#1a1a1a] font-semibold bg-slate-50"
                : "border-transparent text-slate-600 hover:text-[#1a1a1a] hover:bg-slate-50"
            }`}
            onClick={() => setActiveTab("endosadas")}
          >
            Endosadas a Fondeador
          </Button>
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 mb-4">
          <div className="flex items-center justify-between gap-3">
            {/* Left Side - Filters */}
            <div className="flex items-center gap-3 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Buscar"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-9 h-10 border-slate-300"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>

              {/* Columns Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-10 gap-2 border-slate-300">
                    <Columns3 className="h-4 w-4" />
                    Columnas
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>ID</DropdownMenuItem>
                  <DropdownMenuItem>Fecha Operación</DropdownMenuItem>
                  <DropdownMenuItem>NIT Cliente</DropdownMenuItem>
                  <DropdownMenuItem>Razón Cliente</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Filter Button */}
              <Button variant="outline" className="h-10 gap-2 border-slate-300">
                <Filter className="h-4 w-4" />
              </Button>

              {/* Date Picker */}
              <Button variant="outline" className="h-10 gap-2 border-slate-300">
                <Calendar className="h-4 w-4" />
                2025 - 01 - 01
              </Button>

              {/* Estado Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-10 gap-2 border-slate-300">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    Estado
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Todos</DropdownMenuItem>
                  <DropdownMenuItem>Activo</DropdownMenuItem>
                  <DropdownMenuItem>Pendiente</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Right Side - Actions */}
            <div className="flex items-center gap-3">
              <Button 
                className="h-10 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white gap-2"
                onClick={onNewOperation}
              >
                <Plus className="h-4 w-4" />
                Nueva Operación
              </Button>
              <Button variant="outline" className="h-10 gap-2 border-slate-300">
                <Download className="h-4 w-4" />
                Descargar
              </Button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-md border w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedRows.length === mockOperaciones.length}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead className="font-semibold">ID</TableHead>
                <TableHead className="font-semibold">Fecha Operación</TableHead>
                <TableHead className="font-semibold">NIT Cliente</TableHead>
                <TableHead className="font-semibold">Razón Cliente</TableHead>
                <TableHead className="font-semibold">Facturas</TableHead>
                <TableHead className="font-semibold">Valor Facturas</TableHead>
                <TableHead className="font-semibold">Valor Desembolso</TableHead>
                <TableHead className="font-semibold">Opciones</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOperaciones.map((operacion, index) => (
                <TableRow
                  key={operacion.id}
                  className={`${
                    operacion.highlight
                      ? "bg-primary/30 hover:bg-primary/40"
                      : index % 2 === 0
                      ? "bg-muted/50"
                      : ""
                  } hover:bg-muted/50 cursor-pointer transition-colors`}
                >
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(operacion.id)}
                      onCheckedChange={(checked) =>
                        handleSelectRow(operacion.id, checked as boolean)
                      }
                    />
                  </TableCell>
                  <TableCell className="font-medium">{operacion.id}</TableCell>
                  <TableCell>{operacion.fechaOperacion}</TableCell>
                  <TableCell>{operacion.nitCliente}</TableCell>
                  <TableCell>{operacion.razonCliente}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">
                      {operacion.facturas}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    {operacion.valorFacturas}
                  </TableCell>
                  <TableCell className="font-medium">
                    {operacion.valorDesembolso}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => onViewOperation?.(operacion.id)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Eliminar</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Mostrar</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1 border-slate-300">
                  <span className="text-sm">15 Registros</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>10 Registros</DropdownMenuItem>
                <DropdownMenuItem>15 Registros</DropdownMenuItem>
                <DropdownMenuItem>25 Registros</DropdownMenuItem>
                <DropdownMenuItem>50 Registros</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              className="h-9 px-3 gap-1 border-slate-300"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            {[1, 2, 3, 4].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                className={`h-9 w-9 ${
                  currentPage === page
                    ? "bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white"
                    : "border-slate-300"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            
            <span className="px-2 text-slate-400">...</span>
            
            <Button
              variant="outline"
              size="sm"
              className="h-9 w-9 border-slate-300"
              onClick={() => setCurrentPage(10)}
            >
              10
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="h-9 px-3 gap-1 border-slate-300"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Back to Playground */}
        {onBack && (
          <div className="mt-6">
            <Button
              type="button"
              variant="ghost"
              className="text-sm text-slate-500 hover:text-[#84cc16]"
              onClick={onBack}
            >
              ← Volver al Playground
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a3a52] h-12 flex items-center justify-center text-slate-300 text-sm mt-auto">
        <p>CESIONBNK - Factoring Electrónico - 2025 www.cesionbnk.com</p>
      </footer>
    </div>
  );
}