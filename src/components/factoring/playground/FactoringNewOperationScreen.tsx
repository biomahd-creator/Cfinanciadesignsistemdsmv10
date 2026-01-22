import { useState } from "react";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Input } from "../../ui/input";
import { Checkbox } from "../../ui/checkbox";
import { Progress } from "../../ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import {
  Search,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Upload,
} from "lucide-react";

// Datos mock para las facturas
const mockInvoices = [
  {
    id: "1",
    number: "SETP123456790",
    invoiceValue: "$ 8.345.679.123",
    advanceValue: "$ 10.000.000.000",
    lastEvent: "Aceptación expresa",
    state: "Endosable",
    observations: "Agravamiento Riesgo: ...",
    validFrom: "27 Nov",
    validTo: "27 Dic",
    daysToExpire: 30,
    progress: 75,
  },
  {
    id: "2",
    number: "SETP123456790",
    invoiceValue: "$ 8.345.679.123",
    advanceValue: "$ 10.000.000.000",
    lastEvent: "Aceptación expresa",
    state: "Endosable",
    observations: "Agravamiento Riesgo: ...",
    validFrom: "27 Nov",
    validTo: "27 Dic",
    daysToExpire: 30,
    progress: 75,
  },
  {
    id: "3",
    number: "SETP123456790",
    invoiceValue: "$ 8.345.679.123",
    advanceValue: "$ 10.000.000.000",
    lastEvent: "Aceptación expresa",
    state: "Endosable",
    observations: "Agravamiento Riesgo: ...",
    validFrom: "27 Nov",
    validTo: "27 Dic",
    daysToExpire: 30,
    progress: 75,
  },
];

export function FactoringNewOperationScreen() {
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [expandedClients, setExpandedClients] = useState<string[]>(["client-1"]);

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

  const selectAll = () => {
    setSelectedInvoices(mockInvoices.map((inv) => inv.id));
  };

  const deselectAll = () => {
    setSelectedInvoices([]);
  };

  return (
    <div className="min-h-screen bg-background p-8 pb-32">
      <div className="mx-auto max-w-[1500px]">
        {/* Header Section con Stepper */}
        <div className="mb-8 rounded-lg border bg-card p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl">
              Factoring <span className="text-muted-foreground">Nueva Operación</span>
            </h1>
          </div>

          {/* Stepper horizontal */}
          <div className="relative mb-8">
            <div className="flex items-start justify-between">
              {/* Step 1 */}
              <div className="flex flex-1 flex-col items-center">
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <span>1</span>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm">EVOAGRO Nutrición S.A.S.</p>
                    <p className="text-xs text-muted-foreground">NIT 9004592348</p>
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-xs">Selecciona tus facturas</p>
                  <p className="text-xs text-muted-foreground">
                    Elige las facturas que quieres agregar...
                  </p>
                </div>
              </div>

              {/* Connector línea */}
              <div className="mx-8 mt-5 h-px flex-1 bg-border" />

              {/* Step 2 */}
              <div className="flex flex-1 flex-col items-center">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <span>2</span>
                </div>
                <div className="text-center">
                  <p className="text-xs">Revisa tu Operación</p>
                  <p className="text-xs text-muted-foreground">
                    Verifica que todos los datos...
                  </p>
                </div>
              </div>

              {/* Connector línea */}
              <div className="mx-8 mt-5 h-px flex-1 bg-border" />

              {/* Step 3 */}
              <div className="flex flex-1 flex-col items-center">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <span>3</span>
                </div>
                <div className="text-center">
                  <p className="text-xs">Recibe tu Dinero</p>
                  <p className="text-xs text-muted-foreground">
                    Cuando tu operación sea...
                  </p>
                </div>
              </div>

              {/* Botón Cargar */}
              <Button className="ml-8 mt-0 rounded-full">
                <Upload className="mr-2 h-4 w-4" />
                Cargar Mas Facturas
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="mb-6 grid grid-cols-4 gap-4">
          <div className="rounded-lg border bg-card p-4">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Facturas Elegibles</p>
              <Badge variant="secondary" className="rounded-full">
                234
              </Badge>
            </div>
            <p className="mb-1 text-xs text-muted-foreground">
              Facturas disponibles para Operar
            </p>
            <p className="text-2xl text-primary">$ 234.847.908</p>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Facturas Pendientes</p>
              <Badge variant="secondary" className="rounded-full">
                234
              </Badge>
            </div>
            <p className="mb-1 text-xs text-muted-foreground">
              Pendientes de revisión
            </p>
            <p className="text-2xl">$ 87.948.009</p>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Facturas No Elegibles</p>
              <Badge variant="secondary" className="rounded-full">
                234
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Vencidas / Otros Eventos
            </p>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Facturas Descartadas</p>
              <Badge variant="secondary" className="rounded-full">
                218
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Marcadas como Descarte
            </p>
          </div>
        </div>

        {/* Sección Clientes/Pagadores */}
        <div>
          <h3 className="mb-4 text-sm">Clientes/Pagadores</h3>

          {/* Cliente 1 - Expandido */}
          <div className="mb-4 rounded-lg border bg-card">
            <div
              className="flex cursor-pointer items-center justify-between p-4"
              onClick={() => toggleClient("client-1")}
            >
              <div className="flex items-center gap-3">
                <h4>Industria Nacional de Plásticos</h4>
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-[#bbf7d0] px-2 py-0.5 text-xs text-[#15803d]">
                  4/34 seleccionadas
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Cupo Disponible </span>
                  <span>$ 215.365.241</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Monto Elegible </span>
                  <span>$ 201.365.241</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Tasa N.M.V. </span>
                  <span>2.63 %</span>
                </div>
                {expandedClients.includes("client-1") ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
            </div>

            {expandedClients.includes("client-1") && (
              <div className="border-t px-4 pb-4 pt-4">
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-[#bbf7d0] px-2 py-0.5 text-xs text-[#15803d]">
                      4/34 seleccionadas
                    </div>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                {/* Filtros y búsqueda */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Busca por valor, fecha..." className="pl-9" />
                  </div>
                  <Button variant="outline" size="sm">
                    Estado
                  </Button>
                  <Button variant="outline" size="sm" onClick={selectAll}>
                    Selección Automática
                  </Button>
                  <Button variant="outline" size="sm" onClick={selectAll}>
                    Seleccionar Todas Elegibles
                  </Button>
                  <Button variant="outline" size="sm" onClick={deselectAll}>
                    Deseleccionar Todas
                  </Button>
                  <Button variant="outline" size="sm">
                    Descartar
                  </Button>
                </div>

                {/* Tabla de facturas */}
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12"></TableHead>
                        <TableHead className="text-xs">Numeración</TableHead>
                        <TableHead className="text-xs">Valor Factura</TableHead>
                        <TableHead className="text-xs">Valor Adelanto</TableHead>
                        <TableHead className="text-xs">Ultimo Evento</TableHead>
                        <TableHead className="text-xs">Estado</TableHead>
                        <TableHead className="text-xs">Observaciones</TableHead>
                        <TableHead className="text-xs">Vigencia</TableHead>
                        <TableHead className="text-xs">Días al Vencimiento</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockInvoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell>
                            <Checkbox
                              checked={selectedInvoices.includes(invoice.id)}
                              onCheckedChange={() => toggleInvoice(invoice.id)}
                            />
                          </TableCell>
                          <TableCell className="text-sm">{invoice.number}</TableCell>
                          <TableCell className="text-sm">{invoice.invoiceValue}</TableCell>
                          <TableCell className="text-sm">{invoice.advanceValue}</TableCell>
                          <TableCell>
                            <div className="inline-flex items-center gap-1.5 rounded-lg bg-[rgba(191,222,255,0.7)] px-2 py-0.5 text-xs">
                              {invoice.lastEvent}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="inline-flex items-center gap-1.5 rounded-lg bg-[rgba(185,251,210,0.7)] px-2 py-0.5 text-xs">
                              {invoice.state}
                            </div>
                          </TableCell>
                          <TableCell className="text-sm">
                            <span>{invoice.observations} </span>
                            <a href="#" className="text-blue-600 underline">
                              mas
                            </a>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-1.5 text-xs">
                                <span>{invoice.validFrom}</span>
                                <ArrowRight className="h-3 w-3" />
                                <span>{invoice.validTo}</span>
                              </div>
                              <Progress value={invoice.progress} className="h-1.5" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center text-sm">
                            {invoice.daysToExpire}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
          </div>

          {/* Cliente 2 - Colapsado */}
          <div className="mb-4 rounded-lg border bg-card">
            <div
              className="flex cursor-pointer items-center justify-between p-4"
              onClick={() => toggleClient("client-2")}
            >
              <div className="flex items-center gap-3">
                <h4>Industria Nacional de Plásticos</h4>
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-[rgba(185,251,210,0.7)] px-2 py-0.5 text-xs">
                  4/34 seleccionadas
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Cupo Disponible </span>
                  <span>$ 215.365.241</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Monto Elegible </span>
                  <span>$ 201.365.241</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Tasa N.M.V. </span>
                  <span>2.63 %</span>
                </div>
                {expandedClients.includes("client-2") ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
            </div>
          </div>

          {/* Cliente 3 - Colapsado */}
          <div className="mb-4 rounded-lg border bg-card">
            <div
              className="flex cursor-pointer items-center justify-between p-4"
              onClick={() => toggleClient("client-3")}
            >
              <div className="flex items-center gap-3">
                <h4>Industria Nacional de Plásticos</h4>
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-[rgba(185,251,210,0.7)] px-2 py-0.5 text-xs">
                  4/34 seleccionadas
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Cupo Disponible </span>
                  <span>$ 215.365.241</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Monto Elegible </span>
                  <span>$ 201.365.241</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Tasa N.M.V. </span>
                  <span>2.63 %</span>
                </div>
                {expandedClients.includes("client-3") ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra flotante inferior - FIXED */}
      <div className="fixed bottom-8 left-1/2 w-[calc(100%-4rem)] max-w-[1500px] -translate-x-1/2 rounded-lg bg-secondary p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="text-center">
              <p className="text-sm text-white">Facturas Elegidas</p>
              <p className="text-2xl text-primary">37</p>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-center">
              <p className="text-sm text-white">Pagadores</p>
              <p className="text-2xl text-primary">4</p>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-center">
              <p className="text-sm text-white">Monto Total</p>
              <p className="text-2xl text-primary">$ 72.266.214</p>
            </div>
            <ArrowRight className="h-6 w-6 text-primary" />
            <div className="text-center">
              <p className="text-sm text-white">Adelanto Estimado</p>
              <p className="text-2xl text-primary">$ 70.265.214</p>
            </div>
          </div>
          <Button className="rounded-lg">Iniciar Operación</Button>
        </div>
      </div>
    </div>
  );
}
