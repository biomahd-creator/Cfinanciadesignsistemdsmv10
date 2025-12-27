import React, { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { toast } from "sonner@2.0.3";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../ui/table";
import { Badge } from "../ui/badge";
import { 
  Plus, 
  Trash2, 
  Printer, 
  Send, 
  Download, 
  CreditCard,
  Building2,
  User
} from "lucide-react";
import { Textarea } from "../ui/textarea";

// Tipos para los items de la factura
interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
}

export function InvoiceGenerator() {
  // Estado para los datos de la factura
  const [invoiceNumber, setInvoiceNumber] = useState("INV-001");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState(new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  
  // Estado para los items
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: "1", description: "Diseño de Interfaz UI/UX", quantity: 1, price: 1500 },
    { id: "2", description: "Desarrollo Frontend React", quantity: 40, price: 85 },
    { id: "3", description: "Configuración de Servidor", quantity: 1, price: 250 },
  ]);

  // Cálculos
  const subtotal = items.reduce((acc, item) => acc + (item.quantity * item.price), 0);
  const taxRate = 0.21; // 21% IVA
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  // Manejadores
  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Math.random().toString(36).substr(2, 9),
      description: "Nuevo servicio",
      quantity: 1,
      price: 0
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById('invoice-preview');
    if (!element) return;
    
    setIsGeneratingPDF(true);
    toast.info("Generando PDF...");
    
    try {
      const canvas = await html2canvas(element, {
        scale: 2, // Higher quality
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff"
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      // Handle multi-page if content is long
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`factura-${invoiceNumber}.pdf`);
      toast.success("Factura descargada correctamente");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Error al generar el PDF");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Generador de Facturas</h1>
          <p className="text-muted-foreground">Crea, gestiona y exporta facturas comerciales.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Imprimir
          </Button>
          <Button variant="outline" onClick={handleDownloadPDF} disabled={isGeneratingPDF}>
            <Download className="mr-2 h-4 w-4" />
            {isGeneratingPDF ? "Generando..." : "PDF"}
          </Button>
          <Button>
            <Send className="mr-2 h-4 w-4" />
            Enviar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna Principal - Factura */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="overflow-hidden border-2" id="invoice-preview">
            <CardHeader className="bg-muted/30 border-b pb-8">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                    F
                  </div>
                  <span className="text-2xl font-bold tracking-tight">Financio</span>
                </div>
                <div className="text-right">
                  <h2 className="text-3xl font-bold text-muted-foreground/20 uppercase tracking-widest">Factura</h2>
                  <div className="mt-2 flex items-center justify-end gap-2">
                    <span className="font-medium text-sm text-muted-foreground">Nº:</span>
                    <Input 
                      value={invoiceNumber} 
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                      className="w-32 h-8 text-right font-mono"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-6 md:p-10 space-y-10">
              {/* Info Emisor y Receptor */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                    <Building2 className="h-3 w-3" /> De (Emisor)
                  </Label>
                  <div className="space-y-1">
                    <Input className="font-semibold text-lg border-none px-0 h-auto focus-visible:ring-0 rounded-none bg-transparent placeholder:text-muted-foreground/50" placeholder="Nombre de tu Empresa" defaultValue="Financio Solutions S.L." />
                    <Input className="text-sm border-none px-0 h-auto focus-visible:ring-0 rounded-none bg-transparent text-muted-foreground" placeholder="Dirección línea 1" defaultValue="Calle Innovación 123" />
                    <Input className="text-sm border-none px-0 h-auto focus-visible:ring-0 rounded-none bg-transparent text-muted-foreground" placeholder="Dirección línea 2" defaultValue="28001, Madrid, España" />
                    <Input className="text-sm border-none px-0 h-auto focus-visible:ring-0 rounded-none bg-transparent text-muted-foreground" placeholder="Email de contacto" defaultValue="billing@financio.com" />
                    <Input className="text-sm border-none px-0 h-auto focus-visible:ring-0 rounded-none bg-transparent text-muted-foreground" placeholder="NIF / VAT ID" defaultValue="ES-B12345678" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                    <User className="h-3 w-3" /> Para (Cliente)
                  </Label>
                  <div className="space-y-1">
                    <Input className="font-semibold text-lg border-dashed border-input px-2 h-9 bg-accent/10" placeholder="Nombre del Cliente" />
                    <Input className="text-sm border-dashed border-input px-2 h-8 bg-transparent" placeholder="Dirección del Cliente" />
                    <Input className="text-sm border-dashed border-input px-2 h-8 bg-transparent" placeholder="Ciudad, País" />
                    <Input className="text-sm border-dashed border-input px-2 h-8 bg-transparent" placeholder="Email del Cliente" />
                    <Input className="text-sm border-dashed border-input px-2 h-8 bg-transparent" placeholder="NIF / VAT ID" />
                  </div>
                </div>
              </div>

              {/* Fechas */}
              <div className="grid grid-cols-2 gap-6 p-4 bg-muted/20 rounded-lg border border-border/50">
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Fecha de Emisión</Label>
                  <Input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Fecha de Vencimiento</Label>
                  <Input 
                    type="date" 
                    value={dueDate} 
                    onChange={(e) => setDueDate(e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>

              {/* Tabla de Items */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-semibold">Conceptos</Label>
                  <Button size="sm" variant="ghost" onClick={addItem} className="h-8 text-primary">
                    <Plus className="h-4 w-4 mr-1" /> Añadir Línea
                  </Button>
                </div>
                
                <div className="rounded-md border">
                  <Table>
                    <TableHeader className="bg-muted/40">
                      <TableRow>
                        <TableHead className="w-[40%]">Descripción</TableHead>
                        <TableHead className="w-[15%] text-right">Cantidad</TableHead>
                        <TableHead className="w-[20%] text-right">Precio Unit.</TableHead>
                        <TableHead className="w-[20%] text-right">Total</TableHead>
                        <TableHead className="w-[5%]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {items.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <Input 
                              value={item.description} 
                              onChange={(e) => updateItem(item.id, "description", e.target.value)}
                              className="h-8 border-transparent hover:border-input focus:border-input bg-transparent px-2"
                              placeholder="Descripción del servicio o producto"
                            />
                          </TableCell>
                          <TableCell className="text-right">
                            <Input 
                              type="number" 
                              min="1"
                              value={item.quantity} 
                              onChange={(e) => updateItem(item.id, "quantity", parseFloat(e.target.value))}
                              className="h-8 text-right border-transparent hover:border-input focus:border-input bg-transparent px-2"
                            />
                          </TableCell>
                          <TableCell className="text-right">
                            <Input 
                              type="number" 
                              min="0"
                              step="0.01"
                              value={item.price} 
                              onChange={(e) => updateItem(item.id, "price", parseFloat(e.target.value))}
                              className="h-8 text-right border-transparent hover:border-input focus:border-input bg-transparent px-2"
                            />
                          </TableCell>
                          <TableCell className="text-right font-medium">
                            {formatCurrency(item.quantity * item.price)}
                          </TableCell>
                          <TableCell>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 text-muted-foreground hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Totales */}
              <div className="flex justify-end">
                <div className="w-full md:w-1/2 lg:w-1/3 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">IVA (21%)</span>
                    <span>{formatCurrency(taxAmount)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-2xl text-primary-foreground bg-primary px-3 py-1 rounded-md">
                      {formatCurrency(total)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Notas y Términos */}
              <div className="space-y-4 pt-6">
                <div className="space-y-2">
                  <Label>Notas</Label>
                  <Textarea 
                    placeholder="Notas adicionales para el cliente..." 
                    className="min-h-[80px] resize-none"
                    defaultValue="Gracias por su confianza. Esperamos trabajar juntos de nuevo."
                  />
                </div>
                <div className="space-y-2">
                  <Label>Términos y Condiciones</Label>
                  <Textarea 
                    placeholder="Términos de pago, información legal..." 
                    className="min-h-[80px] resize-none text-xs text-muted-foreground"
                    defaultValue="El pago debe realizarse dentro de los 15 días siguientes a la emisión de esta factura."
                  />
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="bg-muted/30 border-t p-6 flex justify-between items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span>Financio Solutions S.L.</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>IBAN: ES91 0000 0000 0000 0000</span>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Columna Lateral - Configuración */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Configuración</CardTitle>
              <CardDescription>Ajustes de la factura</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Moneda</Label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-primary/10 border-primary text-primary-foreground font-semibold">EUR (€)</Button>
                  <Button variant="outline" size="sm" className="flex-1">USD ($)</Button>
                  <Button variant="outline" size="sm" className="flex-1">GBP (£)</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Impuestos</Label>
                <div className="flex items-center gap-2 border rounded-md p-2">
                  <Input type="number" className="h-8 w-20 border-none focus-visible:ring-0" defaultValue="21" />
                  <span className="text-muted-foreground text-sm">% IVA</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Color de Marca</Label>
                <div className="flex gap-2">
                  <div className="h-6 w-6 rounded-full bg-[#DEFB49] border-2 border-primary cursor-pointer ring-2 ring-offset-2 ring-primary"></div>
                  <div className="h-6 w-6 rounded-full bg-blue-500 cursor-pointer hover:opacity-80"></div>
                  <div className="h-6 w-6 rounded-full bg-purple-500 cursor-pointer hover:opacity-80"></div>
                  <div className="h-6 w-6 rounded-full bg-red-500 cursor-pointer hover:opacity-80"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Historial</CardTitle>
              <CardDescription>Facturas recientes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "INV-001", client: "Acme Corp", date: "Hoy", status: "Draft" },
                  { id: "INV-002", client: "Globex Inc", date: "Ayer", status: "Sent" },
                  { id: "INV-003", client: "Soylent Corp", date: "12 Dic", status: "Paid" },
                ].map((inv) => (
                  <div key={inv.id} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-md cursor-pointer transition-colors">
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">{inv.id}</span>
                      <span className="text-xs text-muted-foreground">{inv.client}</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge variant={inv.status === "Paid" ? "default" : inv.status === "Sent" ? "secondary" : "outline"} className="text-[10px] h-5">
                        {inv.status}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">{inv.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="w-full mt-2 h-8 text-xs">
                Ver todas las facturas
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/20 rounded-full text-primary-foreground">
                  <CreditCard className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Pagos en línea</h4>
                  <p className="text-xs text-muted-foreground mb-3">Conecta Stripe para permitir que tus clientes paguen esta factura online.</p>
                  <Button size="sm" className="w-full h-7 text-xs">Conectar Stripe</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
