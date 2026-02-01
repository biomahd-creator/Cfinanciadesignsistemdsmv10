import { useState } from "react";
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
  Building2
} from "lucide-react";
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

interface FactoringNewOperationProps {
  onBack: () => void;
  onStartOperation: () => void;
}

export function FactoringNewOperation({ onBack, onStartOperation }: FactoringNewOperationProps) {
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("elegibles");

  // Mock data para facturas
  const invoices = [
    {
      id: "SETP123456790",
      valorFactura: "8.345.679.123",
      valorAdelanto: "10.000.000.000",
      ultimoEvento: "Aceptación expresa",
      estado: "Endosable",
      observaciones: "Agravamiento Riesgo: ...",
      vigencia: { desde: "27 Nov", hasta: "27 Dic" },
      diasVencimiento: 30,
    },
    {
      id: "SETP123456790",
      valorFactura: "8.345.679.123",
      valorAdelanto: "10.000.000.000",
      ultimoEvento: "Aceptación expresa",
      estado: "Endosable",
      observaciones: "Agravamiento Riesgo: ...",
      vigencia: { desde: "27 Nov", hasta: "27 Dic" },
      diasVencimiento: 30,
    },
    {
      id: "SETP123456790",
      valorFactura: "8.345.679.123",
      valorAdelanto: "10.000.000.000",
      ultimoEvento: "Aceptación expresa",
      estado: "Endosable",
      observaciones: "Agravamiento Riesgo: ...",
      vigencia: { desde: "27 Nov", hasta: "27 Dic" },
      diasVencimiento: 30,
    },
  ];

  const toggleInvoiceSelection = (id: string) => {
    setSelectedInvoices(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-muted/10 pb-32">
      <div className="max-w-[1600px] mx-auto p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-secondary">
            Factoring <span className="font-normal text-muted-foreground">Nueva Operación</span>
          </h1>
          <Button variant="ghost" size="icon" className="rounded-full">
            <HelpCircle className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>

        {/* Client Card */}
        <Card className="border-border shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-secondary">EVOGIRO Nutrición S.A.S.</h2>
                  <p className="text-sm text-muted-foreground">NIT 900489234B</p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center">
                <span className="text-2xl font-semibold text-secondary">1</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wizard Steps */}
        <Card className="border-border shadow-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-lg font-semibold text-secondary">1</span>
                  </div>
                  {/* Connector line - hidden on last item */}
                  <div className="hidden md:block w-px h-full bg-border mt-2" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-secondary mb-1">Selecciona tus facturas</h3>
                  <p className="text-sm text-muted-foreground">
                    Elige tus facturas que quieres anticipar. Puedes seleccionar múltiples facturas a la vez.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center shrink-0">
                    <span className="text-lg font-semibold text-muted-foreground">2</span>
                  </div>
                  <div className="hidden md:block w-px h-full bg-border mt-2" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-secondary mb-1">Revisa tu Operación</h3>
                  <p className="text-sm text-muted-foreground">
                    Verifica que todos los datos sean correctos y confirma tu operación de factoring.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center shrink-0">
                    <span className="text-lg font-semibold text-muted-foreground">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-secondary mb-1">Recibe tu Dinero</h3>
                  <p className="text-sm text-muted-foreground">
                    Cuando tu operación sea aprobada, recibirás el dinero directamente en tu cuenta bancaria.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button className="bg-primary text-secondary hover:bg-primary/90">
                <Upload className="h-4 w-4 mr-2" />
                Cargar Más Facturas
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Invoice Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card 
              className={`cursor-pointer transition-all ${activeTab === 'elegibles' ? 'border-primary shadow-md' : 'border-border hover:border-muted-foreground'}`}
              onClick={() => setActiveTab('elegibles')}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-secondary">Facturas Elegibles</h3>
                      <Badge className="bg-primary text-secondary">234</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Facturas disponibles para Operar</p>
                  </div>
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-secondary">$ 234.847.908</p>
                  <Download className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all ${activeTab === 'pendientes' ? 'border-primary shadow-md' : 'border-border hover:border-muted-foreground'}`}
              onClick={() => setActiveTab('pendientes')}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-secondary">Facturas Pendientes</h3>
                      <Badge variant="secondary" className="bg-muted text-muted-foreground">234</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Vencidas / Otros Eventos</p>
                  </div>
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-muted-foreground">$ 87.948.009</p>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all ${activeTab === 'no-elegibles' ? 'border-primary shadow-md' : 'border-border hover:border-muted-foreground'}`}
              onClick={() => setActiveTab('no-elegibles')}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-secondary">Facturas No Elegibles</h3>
                      <Badge variant="secondary" className="bg-muted text-muted-foreground">234</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Vencidas / Otros Eventos</p>
                  </div>
                  <X className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all ${activeTab === 'descartadas' ? 'border-primary shadow-md' : 'border-border hover:border-muted-foreground'}`}
              onClick={() => setActiveTab('descartadas')}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-secondary">Facturas Descartadas</h3>
                      <Badge variant="secondary" className="bg-muted text-muted-foreground">234</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Manuales de Usuario</p>
                  </div>
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            {/* Clientes/Pagadores Section */}
            <Card className="border-border shadow-sm mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-secondary">Clientes/Pagadores</h3>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-secondary">Industria Nacional de Plásticos</h4>
                      <p className="text-sm text-muted-foreground">4/34 seleccionadas</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Seleccionado: $ 165.748.000</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">75 % del Cupo</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quota Progress Bar */}
                <div className="bg-muted/10 border border-border rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Cupo Disponible</p>
                      <p className="text-lg font-bold text-secondary">$ 215.365.241</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Monto Elegible</p>
                      <p className="text-lg font-bold text-secondary">$ 201.365.241</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Tasa N.M.V.</p>
                      <p className="text-lg font-bold text-secondary">2.63 %</p>
                    </div>
                    <div className="flex items-end">
                      <Select defaultValue="insuficiente">
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="insuficiente">Cupo Insuficiente</SelectItem>
                          <SelectItem value="suficiente">Cupo Suficiente</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar por valor, fecha..." className="pl-9" />
                </div>
                <Select defaultValue="estado">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="estado">Estado</SelectItem>
                    <SelectItem value="endosable">Endosable</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Seleccionar Todas Elegibles
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <X className="h-4 w-4 mr-2" />
                  Deseleccionar Todas
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <X className="h-4 w-4 mr-2" />
                  Descartar
                </Button>
              </div>
            </div>

            {/* Invoices Table */}
            <Card className="border-border shadow-sm">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow>
                      <TableHead className="w-[50px]">
                        <Checkbox />
                      </TableHead>
                      <TableHead className="font-semibold text-secondary">Numeración</TableHead>
                      <TableHead className="font-semibold text-secondary text-right">Valor Factura</TableHead>
                      <TableHead className="font-semibold text-secondary text-right">Valor Adelanto</TableHead>
                      <TableHead className="font-semibold text-secondary">Último Evento</TableHead>
                      <TableHead className="font-semibold text-secondary">Estado</TableHead>
                      <TableHead className="font-semibold text-secondary">Observaciones</TableHead>
                      <TableHead className="font-semibold text-secondary">Vigencia</TableHead>
                      <TableHead className="font-semibold text-secondary text-center">Días al Vencimiento</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice, index) => (
                      <TableRow key={index} className="hover:bg-muted/10">
                        <TableCell>
                          <Checkbox 
                            checked={selectedInvoices.includes(invoice.id + index)}
                            onCheckedChange={() => toggleInvoiceSelection(invoice.id + index)}
                          />
                        </TableCell>
                        <TableCell className="font-medium text-secondary">{invoice.id}</TableCell>
                        <TableCell className="text-right">$ {invoice.valorFactura}</TableCell>
                        <TableCell className="text-right">$ {invoice.valorAdelanto}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-info/20 text-info border-info/30">
                            {invoice.ultimoEvento}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-success/20 text-success hover:bg-success/30">
                            {invoice.estado}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm max-w-[200px] truncate">
                          {invoice.observaciones}
                          <button className="text-primary hover:underline ml-1">más</button>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm">
                            <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                              {invoice.vigencia.desde}
                            </Badge>
                            <ArrowRight className="h-3 w-3 text-muted-foreground" />
                            <Badge variant="outline" className="bg-muted text-muted-foreground border-border">
                              {invoice.vigencia.hasta}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="text-center font-semibold">{invoice.diasVencimiento}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Floating Summary Footer */}
        <div className="fixed bottom-8 left-8 right-8 bg-secondary border border-border shadow-2xl z-50 rounded-2xl">
          <div className="max-w-[1600px] mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8 text-secondary-foreground">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Facturas Elegidas</p>
                  <p className="text-2xl font-bold">37</p>
                </div>
                <div className="w-px h-12 bg-border/20" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Pagadores</p>
                  <p className="text-2xl font-bold">4</p>
                </div>
                <div className="w-px h-12 bg-border/20" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Monto Total</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">$ 72.266.214</p>
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="w-px h-12 bg-border/20" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Adelanto Estimado</p>
                  <p className="text-2xl font-bold">$ 70.265.214</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  className="text-secondary-foreground border-primary-foreground/20 hover:bg-white/10 hover:text-white bg-transparent"
                >
                  <X className="h-4 w-4 mr-2" />
                  Desactivar todas
                </Button>
                <Button 
                  className="bg-primary text-secondary hover:bg-primary/90 px-8"
                  onClick={onStartOperation}
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Iniciar Operación
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
