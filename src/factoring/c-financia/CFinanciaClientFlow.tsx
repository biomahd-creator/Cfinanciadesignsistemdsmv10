import { useState, useMemo } from "react";
import { CFinanciaNavbar } from "./CFinanciaNavbar";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { Progress } from "../../components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Search,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import imgEllipse348 from "figma:asset/97fb249d8224347851df11e33a2650a2e731b545.png";
import svgPaths from "../../imports/svg-xhnwietn29";
import { LoadInvoicesModal } from "./LoadInvoicesModal";
import { KpiCardGroup } from "../../components/patterns/KpiCard";

// Tipos para los datos
interface Invoice {
  id: string;
  number: string;
  invoiceValue: string;
  advanceValue: string;
  lastEvent: string;
  state: string;
  observations: string;
  validFrom: string;
  validTo: string;
  daysToExpire: number;
  progress: number;
  reviewStatus: string;
  rejectionReason: string;
  discardReason: string;
  discardDate: string;
  reviewer: string;
  rawAmount: number; // Para cálculos
  category: "elegibles" | "pendientes" | "no-elegibles" | "descartadas";
}

interface Client {
  id: string;
  name: string;
  nit: string;
  availableQuota: string;
  eligibleAmount: string;
  rate: string;
  selectedCount: number;
  totalCount: number;
  quotaUsage: number;
  invoices: Invoice[];
}

// Generador de datos aleatorios
const generateMockData = (): Client[] => {
  const clientNames = [
    "Industria Nacional de Plásticos",
    "Comercializadora Global S.A.S.",
    "Logística Avanzada del Norte",
    "Distribuidora de Alimentos del Valle",
    "Manufacturas Textiles de Occidente",
    "Servicios Integrales de Ingeniería",
    "Agroindustria del Campo Ltda.",
    "Tecnología y Sistemas Avanzados",
    "Transportes Rápidos de Colombia",
    "Constructora Bolívar y Asociados",
    "Importadora de Repuestos Automotrices",
  ];

  return clientNames.map((name, index) => {
    const clientId = `client-${index + 1}`;
    const invoiceCount = Math.floor(Math.random() * 15) + 20; // 20 a 35 facturas
    
    const invoices: Invoice[] = Array.from({ length: invoiceCount }).map((_, i) => {
      const amount = Math.floor(Math.random() * 50000000) + 5000000;
      const categories: Invoice["category"][] = ["elegibles", "pendientes", "no-elegibles", "descartadas"];
      const category = categories[Math.floor(Math.random() * categories.length)];
      
      return {
        id: `${clientId}-inv-${i + 1}`,
        number: `SETP${Math.floor(Math.random() * 10000000)}`,
        invoiceValue: `$ ${amount.toLocaleString("es-CO")}`,
        advanceValue: `$ ${(amount * 0.9).toLocaleString("es-CO")}`,
        lastEvent: ["Aceptación expresa", "Recibo mercancía", "Radicación"][Math.floor(Math.random() * 3)],
        state: category === "elegibles" ? "Endosable" : "Pendiente",
        observations: "Observación registrada en sistema",
        validFrom: `${Math.floor(Math.random() * 28) + 1} Ene`,
        validTo: `${Math.floor(Math.random() * 28) + 1} Feb`,
        daysToExpire: Math.floor(Math.random() * 60) + 10,
        progress: Math.floor(Math.random() * 100),
        reviewStatus: ["Pendiente de aprobación", "En revisión", "Requiere documentos"][Math.floor(Math.random() * 3)],
        rejectionReason: ["Factura vencida", "Monto excede cupo", "Nit no coincide"][Math.floor(Math.random() * 3)],
        discardReason: ["No cumple requisitos", "Duplicada", "Error en datos"][Math.floor(Math.random() * 3)],
        discardDate: `${Math.floor(Math.random() * 28) + 1} Ene 2026`,
        reviewer: ["Juan Pérez", "María García", "Carlos Ruiz", "Ana López"][Math.floor(Math.random() * 4)],
        rawAmount: amount,
        category,
      };
    });

    return {
      id: clientId,
      name,
      nit: `900.${Math.floor(Math.random() * 900) + 100}.${Math.floor(Math.random() * 900) + 100}`,
      availableQuota: `$ ${(Math.floor(Math.random() * 500000000) + 100000000).toLocaleString("es-CO")}`,
      eligibleAmount: `$ ${(Math.floor(Math.random() * 400000000) + 50000000).toLocaleString("es-CO")}`,
      rate: `${(Math.random() * 1.5 + 1.5).toFixed(2)} %`,
      selectedCount: Math.floor(Math.random() * invoiceCount),
      totalCount: invoiceCount,
      quotaUsage: Math.floor(Math.random() * 60) + 20, // 20% to 80% usage
      invoices,
    };
  });
};

const mockClientsData = generateMockData();

interface CFinanciaClientFlowProps {
  onExit?: () => void;
}

export function CFinanciaClientFlow({ onExit }: CFinanciaClientFlowProps) {
  const [activeTab, setActiveTab] = useState<"elegibles" | "pendientes" | "no-elegibles" | "descartadas">("elegibles");
  const [expandedClients, setExpandedClients] = useState<string[]>(["client-1"]);
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [clientPages, setClientPages] = useState<Record<string, number>>({});
  const [clientSearch, setClientSearch] = useState<Record<string, string>>({});

  // Calcular totales para KPI Cards basado en los datos reales
  const kpiStats = useMemo(() => {
    const stats = {
      elegibles: { count: 0, amount: 0 },
      pendientes: { count: 0, amount: 0 },
      "no-elegibles": { count: 0, amount: 0 },
      descartadas: { count: 0, amount: 0 },
    };

    mockClientsData.forEach(client => {
      client.invoices.forEach(inv => {
        if (stats[inv.category]) {
          stats[inv.category].count += 1;
          stats[inv.category].amount += inv.rawAmount;
        }
      });
    });

    return stats;
  }, []);

  const tabTitles = {
    "elegibles": "Facturas Elegibles",
    "pendientes": "Facturas Pendientes",
    "no-elegibles": "Facturas No Elegibles",
    "descartadas": "Facturas Descartadas",
  };

  const toggleClient = (clientId: string) => {
    setExpandedClients((prev) =>
      prev.includes(clientId)
        ? prev.filter((id) => id !== clientId)
        : [...prev, clientId]
    );
  };

  const toggleInvoice = (invoiceId: string) => {
    setSelectedInvoices((prev) =>
      prev.includes(invoiceId)
        ? prev.filter((id) => id !== invoiceId)
        : [...prev, invoiceId]
    );
  };

  const selectAll = (invoices: Invoice[]) => {
    const newIds = invoices.map(inv => inv.id);
    setSelectedInvoices(prev => {
      const combined = new Set([...prev, ...newIds]);
      return Array.from(combined);
    });
  };

  const deselectAll = (invoices: Invoice[]) => {
    const idsToRemove = new Set(invoices.map(inv => inv.id));
    setSelectedInvoices(prev => prev.filter(id => !idsToRemove.has(id)));
  };

  const handleLogout = () => {
    if (onExit) {
      onExit();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar C-Financia con variant full para mostrar avatar y opciones */}
      <CFinanciaNavbar onLogout={handleLogout} variant="full" />
      
      {/* Main Content */}
      <div className="min-h-screen bg-slate-50 p-8 pb-32 pt-[120px]">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Factoring Nueva operacion
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Completa a continuacion la informacion de la negociacion
          </p>
        </div>

        {/* Stepper horizontal / Client Card */}
        <div className="relative mb-8 rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Avatar y Company Info */}
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={imgEllipse348} alt="EVOAGRO" />
                <AvatarFallback>EV</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base">EVOAGRO Nutrición S.A.S.</p>
                <p className="text-base text-muted-foreground">NIT 9004892348</p>
              </div>
            </div>

            {/* Step 1 */}
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="h-10 w-10 shrink-0 rounded-full text-base flex items-center justify-center">
                1
              </Badge>
              <div className="flex flex-col items-start gap-2">
                <p className="text-sm">Selecciona tus facturas</p>
                <p className="w-[181px] text-xs leading-tight text-muted-foreground">
                  Elige las facturas que quieres adelantar. Puedes seleccionar facturas de diferentes pagadores.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="h-10 w-10 shrink-0 rounded-full text-base flex items-center justify-center">
                2
              </Badge>
              <div className="flex flex-col items-start gap-2">
                <p className="text-sm">Revisa tu Operacion</p>
                <p className="w-[182px] text-xs leading-tight text-muted-foreground">
                  Verifica que todos los datos sean correctos y confirma tu operación para seguir adelante.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="h-10 w-10 shrink-0 rounded-full text-base flex items-center justify-center">
                3
              </Badge>
              <div className="flex flex-col items-start gap-2">
                <p className="text-sm">Recibe tu Dinero</p>
                <p className="w-[195px] text-xs leading-tight text-muted-foreground">
                  Cuando tu operación sea aprobada, recibirás el dinero directamente en tu cuenta bancaria.
                </p>
              </div>
            </div>

            {/* Botón Cargar con Modal */}
            <LoadInvoicesModal>
              <Button className="rounded-lg bg-primary text-primary-foreground">
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 13.25 13.25">
                  <path d={svgPaths.p2b604500} fill="currentColor" />
                </svg>
                Cargar Mas Facturas
              </Button>
            </LoadInvoicesModal>
          </div>
        </div>

        {/* Stats Cards Grid - Sistema de Tabs usando DSM KpiCard */}
        <div className="mb-6">
          <KpiCardGroup
            cards={[
              {
                id: "elegibles",
                label: "Facturas Elegibles",
                description: "Facturas disponibles para Operar",
                value: `$ ${kpiStats.elegibles.amount.toLocaleString("es-CO")}`,
                count: kpiStats.elegibles.count,
                variant: "lime",
                onAction: () => setActiveTab("elegibles"),
              },
              {
                id: "pendientes",
                label: "Facturas Pendientes",
                description: "Pendientes de revisión",
                value: `$ ${kpiStats.pendientes.amount.toLocaleString("es-CO")}`,
                count: kpiStats.pendientes.count,
                variant: "orange",
                onAction: () => setActiveTab("pendientes"),
              },
              {
                id: "no-elegibles",
                label: "Facturas No Elegibles",
                description: "Vencidas / Otros Eventos",
                value: `$ ${kpiStats["no-elegibles"].amount.toLocaleString("es-CO")}`,
                count: kpiStats["no-elegibles"].count,
                variant: "blue",
                onAction: () => setActiveTab("no-elegibles"),
              },
              {
                id: "descartadas",
                label: "Facturas Descartadas",
                description: "Marcadas como Descarte",
                value: `$ ${kpiStats.descartadas.amount.toLocaleString("es-CO")}`,
                count: kpiStats.descartadas.count,
                variant: "yellow",
                onAction: () => setActiveTab("descartadas"),
              },
            ]}
            activeId={activeTab}
          />
        </div>

        {/* Sección Clientes/Pagadores */}
        <div>
          <h3 className="mb-4 text-sm font-medium">{tabTitles[activeTab]}</h3>

          {mockClientsData.map((client) => {
            // Filtrar facturas para mostrar en la tabla según el tab activo
            const searchQuery = (clientSearch[client.id] || "").toLowerCase();
            const filteredInvoices = client.invoices.filter(inv => {
              if (inv.category !== activeTab) return false;
              if (!searchQuery) return true;
              return (
                inv.number.toLowerCase().includes(searchQuery) ||
                inv.invoiceValue.toLowerCase().includes(searchQuery) ||
                inv.observations.toLowerCase().includes(searchQuery)
              );
            });
            const clientSelectedInvoices = client.invoices.filter(inv => selectedInvoices.includes(inv.id));
            const hasSelection = clientSelectedInvoices.length > 0;

            // Paginación
            const currentPage = clientPages[client.id] || 1;
            const itemsPerPage = 10;
            const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);
            const paginatedInvoices = filteredInvoices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

            const handlePageChange = (newPage: number) => {
              setClientPages(prev => ({ ...prev, [client.id]: newPage }));
            };
            
            return (
              <div key={client.id} className="mb-4 rounded-lg border bg-card">
                <div
                  className="flex cursor-pointer items-center justify-between p-4"
                  onClick={() => toggleClient(client.id)}
                >
                  <div className="flex flex-col items-start gap-1">
                    <h4 className="font-medium">{client.name}</h4>
                    <div 
                      className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-0.5 text-xs ${
                        hasSelection ? "bg-green-200 text-green-700" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {clientSelectedInvoices.length}/{client.totalCount} seleccionadas
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex flex-col gap-1.5 min-w-[120px]">
                      <div>
                        <span className="text-muted-foreground">Cupo Disponible </span>
                        <span className="font-medium">{client.availableQuota}</span>
                      </div>
                      <Progress value={client.quotaUsage} className="h-1.5 w-full" />
                    </div>
                    <div>
                      <span className="text-muted-foreground">Monto Elegible </span>
                      <span className="font-medium">{client.eligibleAmount}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Tasa N.M.V. </span>
                      <span className="font-medium">{client.rate}</span>
                    </div>
                    {expandedClients.includes(client.id) ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </div>

                {expandedClients.includes(client.id) && (
                  <div className="border-t px-4 pb-4 pt-4">
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="mb-2 flex items-center justify-between">
                        <div 
                          className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-0.5 text-xs ${
                            hasSelection ? "bg-green-200 text-green-700" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {clientSelectedInvoices.length}/{client.totalCount} seleccionadas
                        </div>
                      </div>
                      <Progress 
                        value={(clientSelectedInvoices.length / client.totalCount) * 100} 
                        className="h-2" 
                      />
                    </div>

                    <Card className="elevation-2 border-none shadow-md overflow-hidden bg-background mb-4">
                      <CardHeader className="pb-3 px-4 pt-4">
                        <div className="flex flex-col gap-3 md:flex-row md:items-center justify-between">
                          <div className="relative w-full md:w-72 lg:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input 
                              placeholder="Busca por valor, fecha..." 
                              className="pl-9 h-9 bg-background/50" 
                              value={clientSearch[client.id] || ""}
                              onChange={(e) => {
                                setClientSearch(prev => ({ ...prev, [client.id]: e.target.value }));
                                setClientPages(prev => ({ ...prev, [client.id]: 1 }));
                              }}
                            />
                          </div>
                          
                          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                             <Button variant="outline" size="sm" className="h-9 border-dashed px-3 text-muted-foreground bg-background/50 hover:text-foreground">
                               <Filter className="mr-2 h-3.5 w-3.5" />
                               Estado
                             </Button>
                             <Button variant="outline" size="sm" className="h-9" onClick={() => selectAll(client.invoices)}>
                               Selección Automática
                             </Button>
                             <Button variant="outline" size="sm" className="h-9" onClick={() => selectAll(client.invoices.filter(i => i.category === 'elegibles'))}>
                               Seleccionar Todas Elegibles
                             </Button>
                             <Button variant="outline" size="sm" className="h-9" onClick={() => deselectAll(client.invoices)}>
                               Deseleccionar Todas
                             </Button>
                             <Button variant="outline" size="sm" className="h-9">
                               Descartar
                             </Button>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-0">
                        <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-12"></TableHead>
                            <TableHead className="text-xs">Numeración</TableHead>
                            <TableHead className="text-xs">Valor Factura</TableHead>
                            
                            {/* Columnas específicas según el tab activo */}
                            {activeTab === "elegibles" && (
                              <>
                                <TableHead className="text-xs">Valor Adelanto</TableHead>
                                <TableHead className="text-xs">Ultimo Evento</TableHead>
                                <TableHead className="text-xs">Estado</TableHead>
                                <TableHead className="text-xs">Observaciones</TableHead>
                                <TableHead className="text-xs">Vigencia</TableHead>
                                <TableHead className="text-xs">Días al Vencimiento</TableHead>
                              </>
                            )}
                            
                            {activeTab === "pendientes" && (
                              <>
                                <TableHead className="text-xs">Estado de Revisión</TableHead>
                                <TableHead className="text-xs">Revisor Asignado</TableHead>
                                <TableHead className="text-xs">Ultimo Evento</TableHead>
                                <TableHead className="text-xs">Observaciones</TableHead>
                                <TableHead className="text-xs">Días al Vencimiento</TableHead>
                              </>
                            )}
                            
                            {activeTab === "no-elegibles" && (
                              <>
                                <TableHead className="text-xs">Motivo de Rechazo</TableHead>
                                <TableHead className="text-xs">Estado</TableHead>
                                <TableHead className="text-xs">Observaciones</TableHead>
                                <TableHead className="text-xs">Días al Vencimiento</TableHead>
                              </>
                            )}
                            
                            {activeTab === "descartadas" && (
                              <>
                                <TableHead className="text-xs">Motivo de Descarte</TableHead>
                                <TableHead className="text-xs">Fecha de Descarte</TableHead>
                                <TableHead className="text-xs">Descartado Por</TableHead>
                                <TableHead className="text-xs">Observaciones</TableHead>
                              </>
                            )}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredInvoices.length === 0 ? (
                             <TableRow>
                               <TableCell colSpan={8} className="text-center text-muted-foreground h-24">
                                 No hay facturas en esta categoría
                               </TableCell>
                             </TableRow>
                          ) : (
                            paginatedInvoices.map((invoice) => (
                              <TableRow key={invoice.id}>
                                <TableCell>
                                  <Checkbox
                                    checked={selectedInvoices.includes(invoice.id)}
                                    onCheckedChange={() => toggleInvoice(invoice.id)}
                                  />
                                </TableCell>
                                <TableCell className="text-sm font-medium text-foreground">{invoice.number}</TableCell>
                                <TableCell className="text-sm text-foreground">{invoice.invoiceValue}</TableCell>
                                
                                {activeTab === "elegibles" && (
                                  <>
                                    <TableCell className="text-sm text-foreground">{invoice.advanceValue}</TableCell>
                                    <TableCell>
                                      <Badge variant="secondary" className="bg-info/20 text-foreground">
                                        {invoice.lastEvent}
                                      </Badge>
                                    </TableCell>
                                    <TableCell>
                                      <Badge variant="secondary" className="bg-success/20 text-foreground">
                                        {invoice.state}
                                      </Badge>
                                    </TableCell>
                                    <TableCell className="text-sm text-foreground">
                                      <span>{invoice.observations} </span>
                                      <a href="#" className="text-info underline hover:text-info/80">
                                        mas
                                      </a>
                                    </TableCell>
                                    <TableCell>
                                      <div className="flex flex-col gap-1.5">
                                        <Progress value={invoice.progress} className="h-2" />
                                        <div className="flex items-center justify-between text-xs text-foreground">
                                          <span>{invoice.validFrom}</span>
                                          <ArrowRight className="h-3 w-3" />
                                          <span>{invoice.validTo}</span>
                                        </div>
                                      </div>
                                    </TableCell>
                                    <TableCell className="text-center text-sm text-foreground">
                                      {invoice.daysToExpire}
                                    </TableCell>
                                  </>
                                )}
                                
                                {activeTab === "pendientes" && (
                                  <>
                                    <TableCell>
                                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-orange-100 px-2 py-0.5 text-xs text-orange-700">
                                        {invoice.reviewStatus}
                                      </div>
                                    </TableCell>
                                    <TableCell className="text-sm">{invoice.reviewer}</TableCell>
                                    <TableCell>
                                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50/50 px-2 py-0.5 text-xs text-blue-700">
                                        {invoice.lastEvent}
                                      </div>
                                    </TableCell>
                                    <TableCell className="text-sm">
                                      <span>{invoice.observations} </span>
                                      <a href="#" className="text-blue-600 underline hover:text-blue-800">
                                        mas
                                      </a>
                                    </TableCell>
                                    <TableCell className="text-center text-sm">
                                      {invoice.daysToExpire}
                                    </TableCell>
                                  </>
                                )}
                                
                                {activeTab === "no-elegibles" && (
                                  <>
                                    <TableCell>
                                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-red-100 px-2 py-0.5 text-xs text-red-700">
                                        {invoice.rejectionReason}
                                      </div>
                                    </TableCell>
                                    <TableCell>
                                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-red-100 px-2 py-0.5 text-xs text-red-700">
                                        No Elegible
                                      </div>
                                    </TableCell>
                                    <TableCell className="text-sm">
                                      <span>{invoice.observations} </span>
                                      <a href="#" className="text-blue-600 underline hover:text-blue-800">
                                        mas
                                      </a>
                                    </TableCell>
                                    <TableCell className="text-center text-sm">
                                      {invoice.daysToExpire}
                                    </TableCell>
                                  </>
                                )}
                                
                                {activeTab === "descartadas" && (
                                  <>
                                    <TableCell>
                                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2 py-0.5 text-xs text-slate-700">
                                        {invoice.discardReason}
                                      </div>
                                    </TableCell>
                                    <TableCell className="text-sm">{invoice.discardDate}</TableCell>
                                    <TableCell className="text-sm">{invoice.reviewer}</TableCell>
                                    <TableCell className="text-sm">
                                      <span>{invoice.observations} </span>
                                      <a href="#" className="text-blue-600 underline hover:text-blue-800">
                                        mas
                                      </a>
                                    </TableCell>
                                  </>
                                )}
                              </TableRow>
                            ))
                          )}
                        </TableBody>
                      </Table>

                      {filteredInvoices.length > 0 && (
                        <div className="flex items-center justify-between p-4 border-t">
                          <div className="text-sm text-muted-foreground">
                            Mostrando {(currentPage - 1) * itemsPerPage + 1} a {Math.min(currentPage * itemsPerPage, filteredInvoices.length)} de {filteredInvoices.length} registros
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                              disabled={currentPage === 1}
                            >
                              <ChevronLeft className="h-4 w-4 mr-1" />
                              Anterior
                            </Button>
                            <div className="text-sm font-medium">
                              Página {currentPage} de {totalPages}
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
