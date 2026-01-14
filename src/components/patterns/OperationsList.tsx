import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { 
  Search, 
  Filter, 
  Eye,
  Edit,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  MoreVertical,
  Download,
  Send,
  AlertCircle,
  TrendingUp,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

type OperationStatus = "Creada" | "En Proceso" | "Negociada" | "Endosada" | "Liquidada" | "Rechazada";

interface Operation {
  id: string;
  cliente: string;
  rut: string;
  monto: number;
  plazo: number;
  tasa: number;
  comision: number;
  estado: OperationStatus;
  fechaCreacion: string;
  fechaVencimiento: string;
  facturas: number;
  ejecutivo: string;
}

// Mock data
const mockOperations: Operation[] = [
  {
    id: "OP-2025-156",
    cliente: "Distribuidora XYZ S.A.",
    rut: "76.123.456-7",
    monto: 45000,
    plazo: 30,
    tasa: 2.5,
    comision: 1125,
    estado: "Endosada",
    fechaCreacion: "2025-12-18",
    fechaVencimiento: "2025-01-17",
    facturas: 5,
    ejecutivo: "María González"
  },
  {
    id: "OP-2025-155",
    cliente: "Comercial ABC Ltda.",
    rut: "77.234.567-8",
    monto: 32000,
    plazo: 45,
    tasa: 2.75,
    comision: 1320,
    estado: "En Proceso",
    fechaCreacion: "2025-12-17",
    fechaVencimiento: "2025-01-31",
    facturas: 3,
    ejecutivo: "Juan Pérez"
  },
  {
    id: "OP-2025-154",
    cliente: "Importadora DEF S.A.",
    rut: "78.345.678-9",
    monto: 58000,
    plazo: 30,
    tasa: 2.5,
    comision: 1450,
    estado: "Liquidada",
    fechaCreacion: "2025-12-16",
    fechaVencimiento: "2025-01-15",
    facturas: 8,
    ejecutivo: "María González"
  },
  {
    id: "OP-2025-153",
    cliente: "Mayorista GHI SpA",
    rut: "79.456.789-0",
    monto: 41000,
    plazo: 60,
    tasa: 3.0,
    comision: 2460,
    estado: "Negociada",
    fechaCreacion: "2025-12-15",
    fechaVencimiento: "2025-02-13",
    facturas: 6,
    ejecutivo: "Carlos Rojas"
  },
  {
    id: "OP-2025-152",
    cliente: "Retail JKL S.A.",
    rut: "80.567.890-1",
    monto: 28000,
    plazo: 30,
    tasa: 2.5,
    comision: 700,
    estado: "Creada",
    fechaCreacion: "2025-12-14",
    fechaVencimiento: "2025-01-13",
    facturas: 4,
    ejecutivo: "Ana Martínez"
  },
  {
    id: "OP-2025-151",
    cliente: "Servicios MNO Ltda.",
    rut: "81.678.901-2",
    monto: 15000,
    plazo: 45,
    tasa: 2.75,
    comision: 619,
    estado: "Rechazada",
    fechaCreacion: "2025-12-13",
    fechaVencimiento: "2025-01-27",
    facturas: 2,
    ejecutivo: "Juan Pérez"
  },
  {
    id: "OP-2025-150",
    cliente: "Construcciones PQR S.A.",
    rut: "82.789.012-3",
    monto: 72000,
    plazo: 60,
    tasa: 3.0,
    comision: 4320,
    estado: "Endosada",
    fechaCreacion: "2025-12-12",
    fechaVencimiento: "2025-02-10",
    facturas: 10,
    ejecutivo: "María González"
  },
  {
    id: "OP-2025-149",
    cliente: "Alimentos STU Ltda.",
    rut: "83.890.123-4",
    monto: 38000,
    plazo: 30,
    tasa: 2.5,
    comision: 950,
    estado: "Liquidada",
    fechaCreacion: "2025-12-11",
    fechaVencimiento: "2025-01-10",
    facturas: 5,
    ejecutivo: "Carlos Rojas"
  },
];

const getStatusColor = (status: OperationStatus) => {
  const colors = {
    Creada: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    "En Proceso": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
    Negociada: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    Endosada: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    Liquidada: "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20",
    Rechazada: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  };
  return colors[status] || "";
};

const getStatusIcon = (status: OperationStatus) => {
  const icons = {
    Creada: <FileText className="h-3.5 w-3.5" />,
    "En Proceso": <Clock className="h-3.5 w-3.5" />,
    Negociada: <TrendingUp className="h-3.5 w-3.5" />,
    Endosada: <CheckCircle className="h-3.5 w-3.5" />,
    Liquidada: <CheckCircle className="h-3.5 w-3.5" />,
    Rechazada: <XCircle className="h-3.5 w-3.5" />,
  };
  return icons[status] || null;
};

export function OperationsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filtrado
  const filteredOperations = mockOperations.filter((op) => {
    const matchesSearch = 
      op.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.cliente.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.rut.includes(searchQuery);
    
    const matchesStatus = statusFilter === "all" || op.estado === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Paginación
  const totalPages = Math.ceil(filteredOperations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOperations = filteredOperations.slice(startIndex, startIndex + itemsPerPage);

  // Estadísticas rápidas
  const stats = {
    total: mockOperations.length,
    enProceso: mockOperations.filter(op => op.estado === "En Proceso").length,
    endosadas: mockOperations.filter(op => op.estado === "Endosada").length,
    liquidadas: mockOperations.filter(op => op.estado === "Liquidada").length,
  };

  const handleAction = (action: string, operationId: string) => {
    console.log(`Action: ${action} on ${operationId}`);
    // Aquí iría la lógica real de cada acción
  };

  return (
    <div className="space-y-6">
      {/* Stats rápidas */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="elevation-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Operaciones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              En Proceso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400">
              {stats.enProceso}
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Endosadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-green-600 dark:text-green-400">
              {stats.endosadas}
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Liquidadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
              {stats.liquidadas}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabla principal */}
      <Card className="elevation-2">
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>Operaciones de Factoring</CardTitle>
              <CardDescription>
                Gestión completa de operaciones con filtros y búsqueda
              </CardDescription>
            </div>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Nueva Operación
            </Button>
          </div>

          {/* Filtros */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center pt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por ID, cliente o RUT..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="Creada">Creada</SelectItem>
                <SelectItem value="En Proceso">En Proceso</SelectItem>
                <SelectItem value="Negociada">Negociada</SelectItem>
                <SelectItem value="Endosada">Endosada</SelectItem>
                <SelectItem value="Liquidada">Liquidada</SelectItem>
                <SelectItem value="Rechazada">Rechazada</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          {/* Tabla */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-sm">ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Cliente</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm">Monto</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Plazo</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Estado</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Fecha</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {paginatedOperations.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-8">
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <AlertCircle className="h-8 w-8" />
                        <p>No se encontraron operaciones</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginatedOperations.map((op) => (
                    <tr 
                      key={op.id} 
                      className="border-b hover:bg-muted/50 transition-colors"
                    >
                      <td className="py-3 px-4">
                        <div className="font-medium text-sm">{op.id}</div>
                        <div className="text-xs text-muted-foreground">{op.facturas} facturas</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-sm">{op.cliente}</div>
                        <div className="text-xs text-muted-foreground">{op.rut}</div>
                      </td>
                      <td className="text-right py-3 px-4">
                        <div className="font-semibold">${op.monto.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">
                          Com: ${op.comision.toLocaleString()}
                        </div>
                      </td>
                      <td className="text-center py-3 px-4">
                        <Badge variant="outline" className="text-xs">
                          {op.plazo} días
                        </Badge>
                      </td>
                      <td className="text-center py-3 px-4">
                        <Badge 
                          variant="outline" 
                          className={`${getStatusColor(op.estado)} flex items-center gap-1 justify-center w-fit mx-auto`}
                        >
                          {getStatusIcon(op.estado)}
                          {op.estado}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-sm">{op.fechaCreacion}</div>
                        <div className="text-xs text-muted-foreground">
                          Vence: {op.fechaVencimiento}
                        </div>
                      </td>
                      <td className="text-center py-3 px-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleAction("view", op.id)}>
                              <Eye className="h-4 w-4 mr-2" />
                              Ver Detalles
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("edit", op.id)}>
                              <Edit className="h-4 w-4 mr-2" />
                              Editar
                            </DropdownMenuItem>
                            {op.estado === "En Proceso" && (
                              <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => handleAction("approve", op.id)}>
                                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                  Aprobar
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleAction("reject", op.id)}>
                                  <XCircle className="h-4 w-4 mr-2 text-red-500" />
                                  Rechazar
                                </DropdownMenuItem>
                              </>
                            )}
                            {op.estado === "Negociada" && (
                              <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => handleAction("endorse", op.id)}>
                                  <Send className="h-4 w-4 mr-2 text-blue-500" />
                                  Endosar
                                </DropdownMenuItem>
                              </>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleAction("download", op.id)}>
                              <Download className="h-4 w-4 mr-2" />
                              Descargar PDF
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Paginación */}
          {filteredOperations.length > 0 && (
            <div className="flex items-center justify-between pt-4">
              <div className="text-sm text-muted-foreground">
                Mostrando {startIndex + 1} a {Math.min(startIndex + itemsPerPage, filteredOperations.length)} de {filteredOperations.length} operaciones
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Anterior
                </Button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-8 h-8 p-0"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Siguiente
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}