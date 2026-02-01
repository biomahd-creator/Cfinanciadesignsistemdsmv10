import { useState, useEffect } from "react";
import { MasterDataGrid } from "../../components/patterns/MasterDataGrid";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { KpiCardGroup } from "../../components/patterns/KpiCard";
import { SkeletonKpiCardGroup, SkeletonTable } from "../../components/ui/skeleton-variants";
import { useLoadingState } from "../../hooks/useLoadingState";
import { FadeInView } from "../../components/ui/page-transition";
import { motion, AnimatePresence } from "framer-motion";
import { ReportsConsultation } from "./ReportsConsultation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { 
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
  FileSearch,
  Plus,
  Home,
} from "lucide-react";

type OperationStatus = "Creada" | "En Proceso" | "Negociada" | "Endosada" | "Liquidada" | "Rechazada";
type SubEstadoNegociada = "Negociada" | "Desistida por Fondeador";
type SubEstadoEndosada = "Operacion notificada";

interface Operation {
  id: string;
  cliente: string;
  rut: string;
  monto: number;
  plazo: number;
  tasa: number;
  comision: number;
  estado: OperationStatus;
  subEstado?: SubEstadoNegociada | SubEstadoEndosada; // Sub-estado específico según el estado principal
  fechaCreacion: string;
  fechaVencimiento: string;
  facturas: number;
  ejecutivo: string;
  valorFacturas?: number;
  valorDesembolso?: number;
}

// Mock data
const mockOperations: Operation[] = [
  // === OPERACIONES ENDOSADAS ===
  {
    id: "OP-2025-156",
    cliente: "Distribuidora XYZ S.A.",
    rut: "76.123.456-7",
    monto: 45000,
    plazo: 30,
    tasa: 2.5,
    comision: 1125,
    estado: "Endosada",
    subEstado: "Operacion notificada",
    fechaCreacion: "2025-12-18",
    fechaVencimiento: "2025-01-17",
    facturas: 5,
    ejecutivo: "María González",
    valorFacturas: 48000,
    valorDesembolso: 44500
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
    subEstado: "Operacion notificada",
    fechaCreacion: "2025-12-12",
    fechaVencimiento: "2025-02-10",
    facturas: 10,
    ejecutivo: "María González",
    valorFacturas: 78000,
    valorDesembolso: 71500
  },
  {
    id: "OP-2025-145",
    cliente: "Logística Express Ltda.",
    rut: "85.234.567-1",
    monto: 55000,
    plazo: 45,
    tasa: 2.75,
    comision: 2268,
    estado: "Endosada",
    subEstado: "Operacion notificada",
    fechaCreacion: "2025-12-08",
    fechaVencimiento: "2025-01-22",
    facturas: 7,
    ejecutivo: "Carlos Rojas",
    valorFacturas: 59000,
    valorDesembolso: 54200
  },
  {
    id: "OP-2025-142",
    cliente: "Tecnología Digital S.A.",
    rut: "86.345.678-2",
    monto: 63000,
    plazo: 30,
    tasa: 2.5,
    comision: 1575,
    estado: "Endosada",
    subEstado: "Operacion notificada",
    fechaCreacion: "2025-12-05",
    fechaVencimiento: "2025-01-04",
    facturas: 8,
    ejecutivo: "Juan Pérez",
    valorFacturas: 67000,
    valorDesembolso: 62300
  },
  {
    id: "OP-2025-138",
    cliente: "Farmacéutica Central Ltda.",
    rut: "87.456.789-3",
    monto: 48000,
    plazo: 45,
    tasa: 2.75,
    comision: 1980,
    estado: "Endosada",
    subEstado: "Operacion notificada",
    fechaCreacion: "2025-12-02",
    fechaVencimiento: "2025-01-16",
    facturas: 6,
    ejecutivo: "Ana Martínez",
    valorFacturas: 52000,
    valorDesembolso: 47500
  },
  
  // === OPERACIONES EN PROCESO ===
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
    ejecutivo: "Juan Pérez",
    valorFacturas: 35000,
    valorDesembolso: 31800
  },
  {
    id: "OP-2025-147",
    cliente: "Servicios Industriales S.A.",
    rut: "88.567.890-4",
    monto: 41000,
    plazo: 60,
    tasa: 3.0,
    comision: 2460,
    estado: "En Proceso",
    fechaCreacion: "2025-12-10",
    fechaVencimiento: "2025-02-08",
    facturas: 5,
    ejecutivo: "María González",
    valorFacturas: 44000,
    valorDesembolso: 40500
  },
  {
    id: "OP-2025-144",
    cliente: "Productos Químicos Ltda.",
    rut: "89.678.901-5",
    monto: 28000,
    plazo: 30,
    tasa: 2.5,
    comision: 700,
    estado: "En Proceso",
    fechaCreacion: "2025-12-07",
    fechaVencimiento: "2025-01-06",
    facturas: 4,
    ejecutivo: "Carlos Rojas",
    valorFacturas: 31000,
    valorDesembolso: 27800
  },
  {
    id: "OP-2025-141",
    cliente: "Minera del Norte S.A.",
    rut: "90.789.012-6",
    monto: 85000,
    plazo: 60,
    tasa: 3.0,
    comision: 5100,
    estado: "En Proceso",
    fechaCreacion: "2025-12-04",
    fechaVencimiento: "2025-02-02",
    facturas: 12,
    ejecutivo: "Ana Martínez",
    valorFacturas: 92000,
    valorDesembolso: 84200
  },
  {
    id: "OP-2025-137",
    cliente: "Bebidas Premium Ltda.",
    rut: "91.890.123-7",
    monto: 36000,
    plazo: 45,
    tasa: 2.75,
    comision: 1485,
    estado: "En Proceso",
    fechaCreacion: "2025-12-01",
    fechaVencimiento: "2025-01-15",
    facturas: 5,
    ejecutivo: "Juan Pérez",
    valorFacturas: 39000,
    valorDesembolso: 35700
  },
  {
    id: "OP-2025-133",
    cliente: "Energías Renovables S.A.",
    rut: "92.901.234-8",
    monto: 95000,
    plazo: 60,
    tasa: 3.0,
    comision: 5700,
    estado: "En Proceso",
    fechaCreacion: "2025-11-28",
    fechaVencimiento: "2025-01-27",
    facturas: 15,
    ejecutivo: "María González",
    valorFacturas: 102000,
    valorDesembolso: 94100
  },

  // === OPERACIONES NEGOCIADAS ===
  {
    id: "OP-2025-153",
    cliente: "Mayorista GHI SpA",
    rut: "79.456.789-0",
    monto: 41000,
    plazo: 60,
    tasa: 3.0,
    comision: 2460,
    estado: "Negociada",
    subEstado: "Negociada",
    fechaCreacion: "2025-12-15",
    fechaVencimiento: "2025-02-13",
    facturas: 6,
    ejecutivo: "Carlos Rojas",
    valorFacturas: 44000,
    valorDesembolso: 40500
  },
  {
    id: "OP-2025-148",
    cliente: "Textiles UVW S.A.",
    rut: "84.901.234-5",
    monto: 22000,
    plazo: 45,
    tasa: 2.75,
    comision: 907,
    estado: "Negociada",
    subEstado: "Desistida por Fondeador",
    fechaCreacion: "2025-12-10",
    fechaVencimiento: "2025-01-24",
    facturas: 3,
    ejecutivo: "Ana Martínez",
    valorFacturas: 24000,
    valorDesembolso: 21500
  },
  {
    id: "OP-2025-146",
    cliente: "Manufactura Global Ltda.",
    rut: "93.012.345-9",
    monto: 52000,
    plazo: 45,
    tasa: 2.75,
    comision: 2145,
    estado: "Negociada",
    subEstado: "Negociada",
    fechaCreacion: "2025-12-09",
    fechaVencimiento: "2025-01-23",
    facturas: 7,
    ejecutivo: "Juan Pérez",
    valorFacturas: 56000,
    valorDesembolso: 51500
  },
  {
    id: "OP-2025-143",
    cliente: "Supermercados del Sur S.A.",
    rut: "94.123.456-0",
    monto: 68000,
    plazo: 30,
    tasa: 2.5,
    comision: 1700,
    estado: "Negociada",
    subEstado: "Negociada",
    fechaCreacion: "2025-12-06",
    fechaVencimiento: "2025-01-05",
    facturas: 9,
    ejecutivo: "María González",
    valorFacturas: 73000,
    valorDesembolso: 67300
  },
  {
    id: "OP-2025-140",
    cliente: "Automotriz Racer Ltda.",
    rut: "95.234.567-1",
    monto: 44000,
    plazo: 60,
    tasa: 3.0,
    comision: 2640,
    estado: "Negociada",
    subEstado: "Desistida por Fondeador",
    fechaCreacion: "2025-12-03",
    fechaVencimiento: "2025-02-01",
    facturas: 6,
    ejecutivo: "Carlos Rojas",
    valorFacturas: 47000,
    valorDesembolso: 43500
  },
  {
    id: "OP-2025-136",
    cliente: "Restaurantes Premium S.A.",
    rut: "96.345.678-2",
    monto: 31000,
    plazo: 45,
    tasa: 2.75,
    comision: 1278,
    estado: "Negociada",
    subEstado: "Negociada",
    fechaCreacion: "2025-11-30",
    fechaVencimiento: "2025-01-14",
    facturas: 4,
    ejecutivo: "Ana Martínez",
    valorFacturas: 34000,
    valorDesembolso: 30700
  },
  {
    id: "OP-2025-132",
    cliente: "Electrónica Smart Ltda.",
    rut: "97.456.789-3",
    monto: 58000,
    plazo: 30,
    tasa: 2.5,
    comision: 1450,
    estado: "Negociada",
    subEstado: "Negociada",
    fechaCreacion: "2025-11-27",
    fechaVencimiento: "2025-12-27",
    facturas: 8,
    ejecutivo: "Juan Pérez",
    valorFacturas: 62000,
    valorDesembolso: 57400
  },

  // === OPERACIONES CREADAS ===
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
    ejecutivo: "Ana Martínez",
    valorFacturas: 30000,
    valorDesembolso: 28500
  },
  {
    id: "OP-2025-151",
    cliente: "Servicios MNO Ltda.",
    rut: "81.678.901-2",
    monto: 15000,
    plazo: 45,
    tasa: 2.75,
    comision: 619,
    estado: "Creada",
    fechaCreacion: "2025-12-13",
    fechaVencimiento: "2025-01-27",
    facturas: 2,
    ejecutivo: "Juan Pérez",
    valorFacturas: 16500,
    valorDesembolso: 14800
  },
  {
    id: "OP-2025-149",
    cliente: "Alimentos STU Ltda.",
    rut: "83.890.123-4",
    monto: 38000,
    plazo: 30,
    tasa: 2.5,
    comision: 950,
    estado: "Creada",
    fechaCreacion: "2025-12-11",
    fechaVencimiento: "2025-01-10",
    facturas: 5,
    ejecutivo: "Carlos Rojas",
    valorFacturas: 41000,
    valorDesembolso: 37500
  },
  {
    id: "OP-2025-139",
    cliente: "Papelería Moderna S.A.",
    rut: "98.567.890-4",
    monto: 25000,
    plazo: 45,
    tasa: 2.75,
    comision: 1031,
    estado: "Creada",
    fechaCreacion: "2025-12-02",
    fechaVencimiento: "2025-01-16",
    facturas: 3,
    ejecutivo: "María González",
    valorFacturas: 27000,
    valorDesembolso: 24700
  },
  {
    id: "OP-2025-135",
    cliente: "Veterinaria Mascotas Ltda.",
    rut: "99.678.901-5",
    monto: 19000,
    plazo: 30,
    tasa: 2.5,
    comision: 475,
    estado: "Creada",
    fechaCreacion: "2025-11-29",
    fechaVencimiento: "2025-12-29",
    facturas: 3,
    ejecutivo: "Ana Martínez",
    valorFacturas: 21000,
    valorDesembolso: 18800
  },
  {
    id: "OP-2025-134",
    cliente: "Ferreterías Unidas S.A.",
    rut: "76.789.012-6",
    monto: 47000,
    plazo: 60,
    tasa: 3.0,
    comision: 2820,
    estado: "Creada",
    fechaCreacion: "2025-11-28",
    fechaVencimiento: "2025-01-27",
    facturas: 6,
    ejecutivo: "Carlos Rojas",
    valorFacturas: 51000,
    valorDesembolso: 46500
  },
  {
    id: "OP-2025-131",
    cliente: "Mueblería El Bosque Ltda.",
    rut: "77.890.123-7",
    monto: 33000,
    plazo: 45,
    tasa: 2.75,
    comision: 1361,
    estado: "Creada",
    fechaCreacion: "2025-11-26",
    fechaVencimiento: "2025-01-10",
    facturas: 4,
    ejecutivo: "Juan Pérez",
    valorFacturas: 36000,
    valorDesembolso: 32700
  },
  {
    id: "OP-2025-130",
    cliente: "Óptica Visión Clara S.A.",
    rut: "78.901.234-8",
    monto: 21000,
    plazo: 30,
    tasa: 2.5,
    comision: 525,
    estado: "Creada",
    fechaCreacion: "2025-11-25",
    fechaVencimiento: "2025-12-25",
    facturas: 3,
    ejecutivo: "María González",
    valorFacturas: 23000,
    valorDesembolso: 20800
  },

  // === OPERACIONES LIQUIDADAS (para vista general) ===
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
    ejecutivo: "María González",
    valorFacturas: 62000,
    valorDesembolso: 57200
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
    ejecutivo: "Carlos Rojas",
    valorFacturas: 41000,
    valorDesembolso: 37500
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

// Función para obtener colores de sub-estados específicos
const getSubEstadoColor = (subEstado: string) => {
  const colors: Record<string, string> = {
    "Negociada": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    "Desistida por Fondeador": "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    "Operacion notificada": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  };
  return colors[subEstado] || "";
};

// Función para obtener iconos de sub-estados específicos
const getSubEstadoIcon = (subEstado: string) => {
  const icons: Record<string, JSX.Element> = {
    "Negociada": <TrendingUp className="h-3.5 w-3.5" />,
    "Desistida por Fondeador": <XCircle className="h-3.5 w-3.5" />,
    "Operacion notificada": <CheckCircle className="h-3.5 w-3.5" />,
  };
  return icons[subEstado] || null;
};

interface OperationsListProps {
  onNewOperation?: () => void;
}

export function OperationsList({ onNewOperation }: OperationsListProps = {}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [activeKpiFilter, setActiveKpiFilter] = useState<OperationStatus | "all">("Creada");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [showReports, setShowReports] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    cliente: true,
    monto: true,
    plazo: true,
    estado: true,
    fecha: true,
    acciones: true,
  });
  const itemsPerPage = 5;

  // Loading state para simular carga de datos
  const { isLoading, showLoading, startLoading, stopLoading } = useLoadingState({
    delay: 0,
    minDuration: 800,
  });

  // Simular carga inicial de datos
  useEffect(() => {
    startLoading();
    setTimeout(() => {
      stopLoading();
    }, 1200);
  }, []);

  // Debug: Loggear cambios en activeKpiFilter
  useEffect(() => {
    console.log("🟢 activeKpiFilter changed to:", activeKpiFilter);
    console.log("🟢 Active card ID:", getActiveCardId());
    console.log("🟢 Filtered operations count:", filteredOperations.length);
  }, [activeKpiFilter]);

  // Columnas configurables
  const columns = [
    { id: 'id', label: 'ID / Facturas', visible: visibleColumns.id },
    { id: 'cliente', label: 'Cliente / RUT', visible: visibleColumns.cliente },
    { id: 'monto', label: 'Monto / Comisión', visible: visibleColumns.monto },
    { id: 'plazo', label: 'Plazo', visible: visibleColumns.plazo },
    { id: 'estado', label: 'Estado', visible: visibleColumns.estado },
    { id: 'fecha', label: 'Fechas', visible: visibleColumns.fecha },
    { id: 'acciones', label: 'Acciones', visible: visibleColumns.acciones },
  ];

  const handleColumnVisibilityChange = (columnId: string, visible: boolean) => {
    setVisibleColumns(prev => ({ ...prev, [columnId]: visible }));
  };

  const handleSortChange = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('desc');
    }
  };

  // Filtrado
  const filteredOperations = mockOperations.filter((op) => {
    const matchesSearch = 
      op.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.cliente.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.rut.includes(searchQuery);
    
    const matchesStatus = statusFilter === "all" || op.estado === statusFilter;
    
    // Filtro por KPI activo
    const matchesKpi = activeKpiFilter === "all" || op.estado === activeKpiFilter;
    
    return matchesSearch && matchesStatus && matchesKpi;
  });

  // Ordenamiento
  const sortedOperations = [...filteredOperations].sort((a, b) => {
    if (sortColumn === 'fecha') {
      const dateA = new Date(a.fechaCreacion).getTime();
      const dateB = new Date(b.fechaCreacion).getTime();
      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    }
    return 0;
  });

  // Paginación
  const totalPages = Math.ceil(sortedOperations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOperations = sortedOperations.slice(startIndex, startIndex + itemsPerPage);

  // Estadísticas rápidas
  const stats = {
    total: mockOperations.length,
    enProceso: mockOperations.filter(op => op.estado === "En Proceso").length,
    endosadas: mockOperations.filter(op => op.estado === "Endosada").length,
    liquidadas: mockOperations.filter(op => op.estado === "Liquidada").length,
  };

  // Calcular montos totales por estado
  const calculateTotalMonto = (estado: OperationStatus) => {
    return mockOperations
      .filter(op => op.estado === estado)
      .reduce((sum, op) => sum + op.monto, 0);
  };

  // Handler para click en KPI cards
  const handleKpiClick = (estado: OperationStatus) => {
    console.log("🔵 handleKpiClick called with estado:", estado);
    console.log("🔵 Current activeKpiFilter:", activeKpiFilter);
    
    if (activeKpiFilter === estado) {
      // Si ya está activo, desactivar (mostrar todo)
      console.log("🔵 Deactivating filter");
      setActiveKpiFilter("all");
    } else {
      // Activar el filtro
      console.log("🔵 Activating filter for:", estado);
      setActiveKpiFilter(estado);
    }
    setCurrentPage(1); // Reset a primera página
  };

  // Mapeo de estado a ID del card
  const getActiveCardId = () => {
    const mapping: Record<OperationStatus, string> = {
      "Creada": "creadas",
      "En Proceso": "en-proceso",
      "Negociada": "negociadas",
      "Endosada": "endosadas",
      "Liquidada": "liquidada",
      "Rechazada": "rechazada",
    };
    return activeKpiFilter === "all" ? null : mapping[activeKpiFilter];
  };

  const kpiCards = [
    {
      id: "creadas",
      label: "Creadas",
      description: "Facturas registradas para operacion",
      value: `$ ${calculateTotalMonto("Creada").toLocaleString("es-CL")}`,
      count: mockOperations.filter(op => op.estado === "Creada").length,
      variant: "yellow" as const,
      onAction: () => handleKpiClick("Creada"),
    },
    {
      id: "en-proceso",
      label: "En Proceso",
      description: "En proceso de revision",
      value: `$ ${calculateTotalMonto("En Proceso").toLocaleString("es-CL")}`,
      count: mockOperations.filter(op => op.estado === "En Proceso").length,
      variant: "orange" as const,
      onAction: () => handleKpiClick("En Proceso"),
    },
    {
      id: "negociadas",
      label: "Negociadas",
      description: "Facturas aprobadas",
      value: `$ ${calculateTotalMonto("Negociada").toLocaleString("es-CL")}`,
      count: mockOperations.filter(op => op.estado === "Negociada").length,
      variant: "blue" as const,
      onAction: () => handleKpiClick("Negociada"),
    },
    {
      id: "endosadas",
      label: "Endosadas a Fondeador",
      description: "Transferidas para Desembolso",
      value: `$ ${calculateTotalMonto("Endosada").toLocaleString("es-CL")}`,
      count: mockOperations.filter(op => op.estado === "Endosada").length,
      variant: "lime" as const,
      onAction: () => handleKpiClick("Endosada"),
    },
  ];

  const handleAction = (action: string, operationId: string) => {
    console.log(`Action: ${action} on ${operationId}`);
  };

  // Título dinámico según filtro activo
  const getTableTitle = () => {
    if (activeKpiFilter === "all") {
      return "Operaciones de Factoring";
    }
    return `Operaciones ${activeKpiFilter}s`;
  };

  const getTableDescription = () => {
    if (activeKpiFilter === "all") {
      return "Gestión centralizada de todas las operaciones registradas";
    }
    return `Mostrando solo operaciones en estado: ${activeKpiFilter}`;
  };

  // Mostrar skeleton mientras carga
  if (showLoading) {
    return (
      <div className="space-y-6">
        <div className="h-6 w-64 bg-muted rounded animate-pulse" />
        <SkeletonKpiCardGroup count={4} />
        <Card>
          <CardHeader>
            <div className="h-6 w-48 bg-muted rounded animate-pulse" />
          </CardHeader>
          <CardContent>
            <SkeletonTable rows={5} columns={7} showHeader />
          </CardContent>
        </Card>
      </div>
    );
  }

  // Si estamos mostrando reportes, renderizar solo esa vista
  if (showReports) {
    return <ReportsConsultation onBack={() => setShowReports(false)} />;
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <FadeInView>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-1">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/factoring">Factoring</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbPage>Operaciones</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      </FadeInView>

      {/* Título de Sección */}
      <FadeInView delay={0.1}>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Gestión de Operaciones</h1>
          <p className="text-muted-foreground">
            Monitorea y administra todas las operaciones de factoring en curso
          </p>
        </div>
      </FadeInView>

      {/* Stats rápidas con KPIs */}
      <FadeInView delay={0.2}>
        <KpiCardGroup cards={kpiCards} activeId={getActiveCardId()} />
      </FadeInView>

      {/* Tabla Principal Usando MasterDataGrid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeKpiFilter} // Forzar remount cuando cambia el filtro
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <MasterDataGrid
            title={getTableTitle()}
            description={getTableDescription()}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            searchPlaceholder="Buscar por ID, cliente o RUT..."
            
            // Solo mostrar botón principal "Nueva Operación" en tabla Creadas (se muestra en el header)
            onNewAction={activeKpiFilter === "Creada" ? undefined : undefined}
            newActionLabel={activeKpiFilter === "Creada" ? undefined : undefined}
            newActionIcon={activeKpiFilter === "Creada" ? undefined : undefined}
            
            // Botones personalizados del toolbar para tablas "Creadas" y "Endosadas"
            toolbarActions={
              activeKpiFilter === "Creada" ? (
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowReports(true)}
                    className="gap-2"
                  >
                    <FileSearch className="h-4 w-4" />
                    Consultar Facturas
                  </Button>
                  <Button 
                    onClick={onNewOperation || (() => console.log("Nueva Operación"))}
                    className="gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Nueva Operación
                  </Button>
                </div>
              ) : activeKpiFilter === "Endosada" ? (
                <Button 
                  variant="outline" 
                  onClick={() => setShowReports(true)}
                  className="gap-2"
                >
                  <FileSearch className="h-4 w-4" />
                  Consultar Facturas
                </Button>
              ) : undefined
            }
        
          filterOptions={[
            {
              label: "Estado",
              value: statusFilter,
              options: [
                { label: "Todos los estados", value: "all" },
                { label: "Creada", value: "Creada" },
                { label: "En Proceso", value: "En Proceso" },
                { label: "Negociada", value: "Negociada" },
                { label: "Endosada", value: "Endosada" },
                { label: "Liquidada", value: "Liquidada" },
                { label: "Rechazada", value: "Rechazada" },
              ]
            }
          ]}
          onFilterChange={(_, value) => setStatusFilter(value)}
          onResetFilters={statusFilter !== "all" ? () => setStatusFilter("all") : undefined}
          
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSortChange={handleSortChange}
          
          columns={columns}
          onColumnVisibilityChange={handleColumnVisibilityChange}
          
          showRefresh={true}
          showExport={true}
          showViewOptions={true}
          
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={sortedOperations.length}
          itemsPerPage={itemsPerPage}
          startIndex={startIndex}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  {visibleColumns.id && <th className="text-left py-3 px-4 font-semibold text-sm">ID</th>}
                  {visibleColumns.cliente && <th className="text-left py-3 px-4 font-semibold text-sm">Cliente</th>}
                  {visibleColumns.monto && <th className="text-right py-3 px-4 font-semibold text-sm">Monto</th>}
                  {/* Mostrar Valor Facturas y Valor Desembolso para todos los estados excepto "all" */}
                  {activeKpiFilter !== "all" && (
                    <>
                      <th className="text-right py-3 px-4 font-semibold text-sm">Valor Facturas</th>
                      <th className="text-right py-3 px-4 font-semibold text-sm">Valor Desembolso</th>
                    </>
                  )}
                  {visibleColumns.plazo && <th className="text-center py-3 px-4 font-semibold text-sm">Plazo</th>}
                  {/* Mostrar columna Estado solo para En Proceso, Negociadas y Endosadas (no para Creadas) */}
                  {visibleColumns.estado && activeKpiFilter !== "Creada" && activeKpiFilter !== "all" && (
                    <th className="text-center py-3 px-4 font-semibold text-sm">Estado</th>
                  )}
                  {/* Para tabla general (all), mostrar Estado normal */}
                  {visibleColumns.estado && activeKpiFilter === "all" && (
                    <th className="text-center py-3 px-4 font-semibold text-sm">Estado</th>
                  )}
                  {visibleColumns.fecha && (
                    <th className="text-left py-3 px-4 font-semibold text-sm">
                      {activeKpiFilter !== "all" ? "Fecha Operación" : "Fecha"}
                    </th>
                  )}
                  {visibleColumns.acciones && <th className="text-center py-3 px-4 font-semibold text-sm">Acciones</th>}
                </tr>
              </thead>
              <tbody>
                {paginatedOperations.length === 0 ? (
                  <tr>
                    <td colSpan={Object.values(visibleColumns).filter(Boolean).length} className="text-center py-8">
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
                      {visibleColumns.id && (
                        <td className="py-3 px-4">
                          <div className="font-medium text-sm">{op.id}</div>
                          <div className="text-xs text-muted-foreground">{op.facturas} facturas</div>
                        </td>
                      )}
                      {visibleColumns.cliente && (
                        <td className="py-3 px-4">
                          <div className="font-medium text-sm">{op.cliente}</div>
                          <div className="text-xs text-muted-foreground">{op.rut}</div>
                        </td>
                      )}
                      {visibleColumns.monto && (
                        <td className="text-right py-3 px-4">
                          <div className="font-semibold">${op.monto.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">
                            Com: ${op.comision.toLocaleString()}
                          </div>
                        </td>
                      )}
                      {/* Mostrar Valor Facturas y Valor Desembolso cuando hay filtro activo */}
                      {activeKpiFilter !== "all" && (
                        <>
                          <td className="text-right py-3 px-4">
                            <div className="font-semibold text-blue-600">
                              ${op.valorFacturas?.toLocaleString() || '0'}
                            </div>
                          </td>
                          <td className="text-right py-3 px-4">
                            <div className="font-semibold text-green-600">
                              ${op.valorDesembolso?.toLocaleString() || '0'}
                            </div>
                          </td>
                        </>
                      )}
                      {visibleColumns.plazo && (
                        <td className="text-center py-3 px-4">
                          <Badge variant="outline" className="text-xs">
                            {op.plazo} días
                          </Badge>
                        </td>
                      )}
                      {/* Mostrar Estado para En Proceso, Negociadas y Endosadas */}
                      {visibleColumns.estado && activeKpiFilter !== "Creada" && activeKpiFilter !== "all" && (
                        <td className="text-center py-3 px-4">
                          {/* Para tablas Negociadas y Endosadas, mostrar sub-estados */}
                          {(activeKpiFilter === "Negociada" || activeKpiFilter === "Endosada") && op.subEstado ? (
                            <Badge 
                              variant="outline" 
                              className={`${getSubEstadoColor(op.subEstado)} flex items-center gap-1 justify-center w-fit mx-auto`}
                            >
                              {getSubEstadoIcon(op.subEstado)}
                              {op.subEstado}
                            </Badge>
                          ) : (
                            <Badge 
                              variant="outline" 
                              className={`${getStatusColor(op.estado)} flex items-center gap-1 justify-center w-fit mx-auto`}
                            >
                              {getStatusIcon(op.estado)}
                              {op.estado}
                            </Badge>
                          )}
                        </td>
                      )}
                      {/* Mostrar Estado para vista general (all) */}
                      {visibleColumns.estado && activeKpiFilter === "all" && (
                        <td className="text-center py-3 px-4">
                          <Badge 
                            variant="outline" 
                            className={`${getStatusColor(op.estado)} flex items-center gap-1 justify-center w-fit mx-auto`}
                          >
                            {getStatusIcon(op.estado)}
                            {op.estado}
                          </Badge>
                        </td>
                      )}
                      {visibleColumns.fecha && (
                        <td className="py-3 px-4">
                          <div className="text-sm">{op.fechaCreacion}</div>
                          <div className="text-xs text-muted-foreground">
                            Vence: {op.fechaVencimiento}
                          </div>
                        </td>
                      )}
                      {visibleColumns.acciones && (
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
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </MasterDataGrid>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
