import { useState, useMemo } from "react";
import { 
  Upload,
  Clock,
  FileText,
  CheckCircle2,
  Download,
  Search,
  Filter,
  ChevronDown,
  X,
  ArrowRight,
  HelpCircle,
  Building2,
  ArrowLeft,
  ChevronRight as ChevronRightIcon,
  Home
} from "lucide-react";
import { NavigationBar } from "../../components/widgets/NavigationBar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../../components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Badge } from "../../components/ui/badge";
import { Checkbox } from "../../components/ui/checkbox";
import { Progress } from "../../components/ui/progress";
import { KpiCardGroup } from "../../components/patterns/KpiCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../../components/ui/breadcrumb";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { FactoringSelectionPage } from "../../components/patterns/factoring/FactoringSelectionPage";
import { UploadInvoicesDialog } from "../modals/UploadInvoicesDialog";
import imgEllipse348 from "figma:asset/97fb249d8224347851df11e33a2650a2e731b545.png";

interface FactoringNewOperationProps {
  onBack: () => void;
  onStartOperation: () => void;
}

interface Invoice {
  id: string;
  valorFactura: number;
  valorAdelanto: number;
  vigencia: { desde: string; hasta: string };
  diasVencimiento: number;
  ultimoEvento: string;
  estado: string;
  observaciones: string;
  statusColor: "success" | "warning" | "destructive" | "muted";
  invoiceNumber: string;
}

interface Debtor {
  id: string;
  name: string;
  rut: string;
  availableLimit: number;
  rate: number;
  invoices: Invoice[];
}

export function FactoringNewOperation({ onBack, onStartOperation }: FactoringNewOperationProps) {
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("elegibles");
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);

  // Mock data generation based on tab
  const getDebtors = (): Debtor[] => {
    const baseInvoice = {
      valorFactura: 8345679,
      valorAdelanto: 10000000,
      vigencia: { desde: "27 Nov", hasta: "27 Dic" },
      diasVencimiento: 30,
    };

    const generateInvoices = (count: number, prefix: string, status: string, color: any, event: string): Invoice[] => {
      return Array(count).fill(null).map((_, i) => ({
        ...baseInvoice,
        id: `${prefix}-${i + 1}`,
        invoiceNumber: `F-${prefix}-${i + 1}`,
        ultimoEvento: event,
        estado: status,
        observaciones: "Observación de prueba...",
        statusColor: color,
      }));
    };

    let invoices: Invoice[] = [];

    switch (activeTab) {
      case 'pendientes':
        invoices = generateInvoices(5, "PEND", "Pendiente", "warning", "Documento Vencido");
        break;
      case 'no-elegibles':
        invoices = generateInvoices(4, "NOEL", "No Elegible", "destructive", "Rechazo por Riesgo");
        break;
      case 'descartadas':
        invoices = generateInvoices(3, "DESC", "Descartada", "muted", "Descarte Manual");
        break;
      case 'elegibles':
      default:
        invoices = generateInvoices(8, "SETP", "Endosable", "success", "Aceptación expresa");
        break;
    }

    // Split invoices into mock debtors
    return [
      {
        id: "D001",
        name: "Industria Nacional de Plásticos",
        rut: "76.123.456-7",
        availableLimit: 25000000,
        rate: 2.5,
        invoices: invoices.slice(0, Math.ceil(invoices.length / 2))
      },
      {
        id: "D002",
        name: "Comercializadora del Sur Ltda.",
        rut: "77.890.123-4",
        availableLimit: 15000000,
        rate: 2.8,
        invoices: invoices.slice(Math.ceil(invoices.length / 2))
      }
    ].filter(d => d.invoices.length > 0);
  };

  const debtors = getDebtors();

  const toggleInvoiceSelection = (id: string) => {
    setSelectedInvoices(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateDebtorSelectedTotal = (debtor: Debtor) => {
    return debtor.invoices
      .filter(inv => selectedInvoices.includes(inv.id))
      .reduce((sum, inv) => sum + inv.valorFactura, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 fade-in pb-32">
      <NavigationBar />
      <div className="w-full px-6 pb-6 pt-24 space-y-6">
        
        {/* Breadcrumb & Header */}
        <div className="space-y-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" onClick={onBack}>Factoring</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Nueva Operación</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full h-8 w-8 hover:bg-white/50">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                Nueva Operación
              </h1>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/50">
              <HelpCircle className="h-5 w-5 text-muted-foreground" />
            </Button>
          </div>
        </div>

        {/* Client Card / Standard Header */}
        <Card className="border-border shadow-sm hover-lift bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between gap-6">
              {/* Avatar y Company Info */}
              <div className="flex items-center gap-4 shrink-0">
                <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
                  <AvatarImage src={imgEllipse348} alt="EVOAGRO" />
                  <AvatarFallback>EV</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-base font-semibold">EVOAGRO Nutrición S.A.S.</p>
                  <p className="text-base text-muted-foreground">NIT 9004892348</p>
                </div>
              </div>

              {/* Steps */}
              <div className="flex items-start gap-8 hidden xl:flex">
                {/* Step 1 */}
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="h-10 w-10 shrink-0 rounded-full text-base flex items-center justify-center shadow-sm">
                    1
                  </Badge>
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-sm font-medium">Selecciona tus facturas</p>
                    <p className="w-[160px] text-xs leading-tight text-muted-foreground">
                      Elige las facturas que quieres adelantar. Puedes seleccionar facturas de diferentes pagadores.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3 opacity-60">
                  <Badge variant="outline" className="h-10 w-10 shrink-0 rounded-full text-base flex items-center justify-center border-muted-foreground/30 text-muted-foreground">
                    2
                  </Badge>
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-sm font-medium text-muted-foreground">Revisa tu Operación</p>
                    <p className="w-[160px] text-xs leading-tight text-muted-foreground">
                      Verifica que todos los datos sean correctos y confirma tu operación.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3 opacity-60">
                  <Badge variant="outline" className="h-10 w-10 shrink-0 rounded-full text-base flex items-center justify-center border-muted-foreground/30 text-muted-foreground">
                    3
                  </Badge>
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-sm font-medium text-muted-foreground">Recibe tu Dinero</p>
                    <p className="w-[160px] text-xs leading-tight text-muted-foreground">
                      Cuando tu operación sea aprobada, recibirás el dinero directamente.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0">
                <Button 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
                    onClick={() => setIsUploadDialogOpen(true)}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Cargar Facturas
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Invoice Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <KpiCardGroup
            className="mb-6"
            activeId={activeTab}
            cards={[
              {
                id: "elegibles",
                label: "Facturas Elegibles",
                description: "Facturas disponibles para Operar",
                value: "$ 234.847.908",
                count: 234,
                variant: "lime",
                onAction: () => setActiveTab("elegibles"),
              },
              {
                id: "pendientes",
                label: "Facturas Pendientes",
                description: "Vencidas / Otros Eventos",
                value: "$ 87.948.009",
                count: 12,
                variant: "yellow",
                onAction: () => setActiveTab("pendientes"),
              },
              {
                id: "no-elegibles",
                label: "Facturas No Elegibles",
                description: "Vencidas / Otros Eventos",
                value: "$ 0",
                count: 5,
                variant: "orange",
                onAction: () => setActiveTab("no-elegibles"),
              },
              {
                id: "descartadas",
                label: "Facturas Descartadas",
                description: "Manuales de Usuario",
                value: "$ 0",
                count: 8,
                variant: "blue",
                onAction: () => setActiveTab("descartadas"),
              },
            ]}
          />

          <TabsContent value={activeTab} className="mt-0 space-y-4">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar por valor, fecha..." className="pl-9 bg-white shadow-sm" />
                </div>
                <Select defaultValue="estado">
                  <SelectTrigger className="w-32 bg-white shadow-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="estado">Estado</SelectItem>
                    <SelectItem value="endosable">Endosable</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="text-xs bg-white hover:bg-slate-50 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Seleccionar Todas Elegibles
                </Button>
                <Button variant="outline" size="sm" className="text-xs bg-white hover:bg-slate-50 shadow-sm">
                  <X className="h-4 w-4 mr-2" />
                  Deseleccionar Todas
                </Button>
              </div>
            </div>

            {/* Accordion Grouped Tables - REMOVED */}


            {/* DSM Implementation */}
            <FactoringSelectionPage />
          </TabsContent>
        </Tabs>
      </div>

      <UploadInvoicesDialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen} />
    </div>
  );
}
