import React from "react";
import { 
  ArrowLeft, 
  User, 
  Upload, 
  Calendar as CalendarIcon, 
  Landmark, 
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Logo } from "../Logo";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { cn } from "../ui/utils";
import { format } from "date-fns";
import { Separator } from "../ui/separator";

export function FactoringOperationPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 0, 1));

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* 1. Header Navigation - Secondary (Dark Blue) */}
      <header className="bg-secondary text-secondary-foreground px-6 py-4 flex items-center justify-between shadow-elevation-2">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo variant="dark" className="text-secondary-foreground" />
            <span className="text-xl font-bold tracking-tight">Financia</span>
          </div>

          {/* Navigation Pills */}
          <nav className="flex items-center gap-2">
            <Button 
              variant="default" 
              className="rounded-full px-6 font-semibold"
            >
              Factoring
            </Button>
            <Button 
              variant="ghost" 
              className="text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary-foreground/10 rounded-full px-6"
            >
              Radian
            </Button>
            <Button 
              variant="ghost" 
              className="text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary-foreground/10 rounded-full px-6"
            >
              <User className="w-4 h-4 mr-2" /> Vinculaciones
            </Button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 text-right">
          <div className="flex flex-col">
            <span className="text-xs text-secondary-foreground/60">soporte.cfinancia</span>
            <span className="text-sm font-semibold">CFINANCIA</span>
          </div>
          <div className="h-10 w-10 rounded-full border border-secondary-foreground/20 flex items-center justify-center bg-secondary-foreground/5">
            <User className="w-6 h-6 text-secondary-foreground/80" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 max-w-[1600px] mx-auto space-y-8">
        
        {/* 2. Page Title Area */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <Button 
              size="icon" 
              variant="default"
              className="rounded-full h-8 w-8"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-semibold text-foreground">
              Factoring <span className="font-normal text-muted-foreground">Nueva Operación</span>
            </h1>
          </div>
          <p className="text-muted-foreground ml-11">
            Completa a continuación la información de la negociación
          </p>
        </div>

        {/* 3. Summary Card - Primary (Yellow) */}
        <div className="bg-primary rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          {/* Company Info */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-primary-foreground underline decoration-1 underline-offset-4">
              Horizon Edge Technologies
            </h2>
            <p className="text-sm font-medium text-primary-foreground/80">NIT 9004892348</p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />

          {/* Stat 1 */}
          <div className="flex flex-col">
            <span className="text-xs font-medium text-primary-foreground/70 uppercase">Facturas</span>
            <span className="text-xl font-bold text-primary-foreground">256</span>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />

          {/* Stat 2 */}
          <div className="flex flex-col">
            <span className="text-xs font-medium text-primary-foreground/70 uppercase">Valor Facturas</span>
            <span className="text-xl font-bold text-primary-foreground">$ 256.658.268</span>
          </div>

           {/* Vertical Divider */}
           <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />

          {/* Stat 3 */}
          <div className="flex flex-col">
            <span className="text-xs font-medium text-primary-foreground/70 uppercase">Valor Desembolso</span>
            <span className="text-xl font-bold text-primary-foreground">$ 251.658.268</span>
          </div>

          {/* Action Button */}
          <Button variant="secondary" className="gap-2 ml-auto">
            <Upload className="h-4 w-4" />
            Cargar Más Facturas
          </Button>
        </div>

        {/* 4. Forms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Información Endosatario */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-bold text-foreground">
                Información Endosatario
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="endosar" defaultChecked />
                <Label
                  htmlFor="endosar"
                  className="font-medium cursor-pointer"
                >
                  Endosar a un Tercero
                </Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="razon-social">Razón social</Label>
                <Input id="razon-social" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tipo Documento</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nit">NIT</SelectItem>
                      <SelectItem value="cc">CC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="num-doc">Número Documento</Label>
                  <Input id="num-doc" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Información de Negociación */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-bold text-foreground">
                Información de Negociación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Operación</Label>
                  <Tabs defaultValue="factoring" className="w-full">
                    <TabsList className="w-full grid grid-cols-2">
                      <TabsTrigger value="factoring">Factoring</TabsTrigger>
                      <TabsTrigger value="confirming">Confirming</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <div className="space-y-2">
                  <Label>Tipo</Label>
                  <Select defaultValue="rec">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rec">Recurso</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Porcentaje Financiamiento</Label>
                  <div className="relative">
                    <Input placeholder="Value" className="pr-8" />
                    <span className="absolute right-3 top-2.5 text-muted-foreground font-medium text-sm">%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Tasa Efectiva Anual</Label>
                  <div className="relative">
                    <Input placeholder="Value" className="pr-8" />
                    <span className="absolute right-3 top-2.5 text-muted-foreground font-medium text-sm">%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Entrega del Titulo</Label>
                <Tabs defaultValue="con-responsabilidad" className="w-full">
                  <TabsList className="w-full grid grid-cols-2">
                    <TabsTrigger value="con-responsabilidad">Con Responsabilidad</TabsTrigger>
                    <TabsTrigger value="sin-responsabilidad">Sin Responsabilidad</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="space-y-2">
                <Label>Fecha de Pago</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "yyyy - MM - dd") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Información Bancaria */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-base font-bold text-foreground">
                Información Bancaria
              </CardTitle>
              <Button variant="secondary" size="sm" className="h-8 text-xs">
                <Landmark className="mr-2 h-3 w-3" />
                Agregar Cuenta
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="titular">Titular Cuenta</Label>
                <Input id="titular" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tipo Documento</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nit">NIT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Número Documento</Label>
                  <Input />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Banco</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bancolombia">Bancolombia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tipo de Cuenta</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ahorros">Ahorros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Número de Cuenta</Label>
                <Input />
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
}
