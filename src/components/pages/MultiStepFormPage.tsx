import { useState } from "react";
import { useForm } from "react-hook-form@7.55.0";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../ui/command";
import { Badge } from "../ui/badge";
import { Alert, AlertDescription } from "../ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Progress } from "../ui/progress";
import { Checkbox } from "../ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { CalendarIcon, Check, X, Upload, FileText, Pencil, Trash2, Plus, CheckCircle2, AlertCircle, ChevronDown, Search, HelpCircle } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import { Switch } from "../ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

// Tipos
interface Cliente {
  id: string;
  nombre: string;
  nit: string;
  contacto: string;
  email: string;
  telefono: string;
}

interface Documento {
  id: string;
  nombre: string;
  archivo: File | null;
  requerido: boolean;
  tipo: string;
  maxSize: number;
  progress: number;
  uploaded: boolean;
  ayuda?: string;
}

interface FormData {
  // Paso 1 - Datos del Usuario
  nombres: string;
  apellidos: string;
  tipoDocumento: string;
  numeroDocumento: string;
  celular: string;
  correoElectronico: string;
  
  // Paso 1 - Datos de la Empresa
  razonSocial: string;
  fechaConstitucion: Date | undefined;
  direccion: string;
  actividadEconomica: string;
  municipio: string;
  codigoPostal: string;
  nit: string;
  
  // Paso 2
  nombreRepresentante: string;
  cedulaRepresentante: string;
  cargoRepresentante: string;
  emailRepresentante: string;
  telefonoRepresentante: string;
  
  // Paso 3
  clientes: Cliente[];
  
  // Paso 4
  nombreBanco: string;
  tipoCuenta: string;
  numeroCuenta: string;
  
  // Paso 5 - Documentos
  documentos: Documento[];
  
  // Paso 5 - Situación Financiera
  obligacionesVencidas: boolean;
  insolvencia: boolean;

  // Paso 5 - Cumplimiento Legal
  registradaPais: boolean;
  cumpleRegulaciones: boolean;
  actividadesIlegales: boolean;
  esPEP: boolean;
  investigacionesJudiciales: boolean;
  sancionada: boolean;
  politicasSarlaft: boolean;

  // Paso 5 - Declaraciones
  infoVeraz: boolean;
  actualizarInfo: boolean;
  aceptaPolitica: boolean;
  autorizaConsulta: boolean;
}

// Datos mock
const actividadesEconomicas = [
  "4711 - Comercio al por menor en establecimientos no especializados",
  "6201 - Desarrollo de sistemas informáticos",
  "7020 - Consultorías de gestión empresarial",
  "4690 - Comercio al por mayor de productos diversos",
  "5610 - Expendio de comidas preparadas",
];

const municipios = [
  "BOGOTÁ, D.C.",
  "MEDELLÍN",
  "CALI",
  "BARRANQUILLA",
  "CARTAGENA",
  "BUCARAMANGA",
  "PEREIRA",
  "MANIZALES",
];

const bancos = [
  "Banco de Bogotá",
  "Bancolombia",
  "Davivienda",
  "BBVA Colombia",
  "Banco de Occidente",
  "Banco Popular",
  "Scotiabank Colpatria",
];

// Función para calcular dígito verificador NIT
function calcularDigitoVerificacion(nit: string): string {
  const nitNumeros = nit.replace(/\D/g, "");
  if (nitNumeros.length === 0) return "";
  
  const primos = [71, 67, 59, 53, 47, 43, 41, 37, 29, 23, 19, 17, 13, 7, 3];
  let suma = 0;
  
  for (let i = 0; i < nitNumeros.length; i++) {
    suma += parseInt(nitNumeros[nitNumeros.length - 1 - i]) * primos[primos.length - 1 - i];
  }
  
  const residuo = suma % 11;
  return residuo > 1 ? String(11 - residuo) : String(residuo);
}

// Función para formatear NIT
function formatearNIT(valor: string): string {
  const numeros = valor.replace(/\D/g, "");
  if (numeros.length === 0) return "";
  
  const nit = numeros.slice(0, 9);
  const dv = calcularDigitoVerificacion(nit);
  
  return nit.length > 0 ? `${nit}${dv ? '-' + dv : ''}` : "";
}

export function MultiStepFormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({
    clientes: [],
    documentos: [
      { id: "1", nombre: "Registro único tributario (RUT)", archivo: null, requerido: true, tipo: "PDF", maxSize: 5, progress: 0, uploaded: false },
      { id: "2", nombre: "Composición accionaria", archivo: null, requerido: true, tipo: "PDF", maxSize: 5, progress: 0, uploaded: false },
      { id: "3", nombre: "Certificado de cámara de comercio", archivo: null, requerido: true, tipo: "PDF", maxSize: 5, progress: 0, uploaded: false },
      { id: "4", nombre: "Documento de identificación del Rep. Legal", archivo: null, requerido: true, tipo: "PDF/JPG", maxSize: 5, progress: 0, uploaded: false },
      { id: "5", nombre: "Estados financieros al cierre de 2024", archivo: null, requerido: true, tipo: "PDF/Excel", maxSize: 10, progress: 0, uploaded: false },
      { id: "6", nombre: "Estados financieros con corte del año 2025", archivo: null, requerido: false, tipo: "PDF/Excel", maxSize: 10, progress: 0, uploaded: false },
      { id: "7", nombre: "Estado de Cuenta DIAN", archivo: null, requerido: true, tipo: "PDF", maxSize: 5, progress: 0, uploaded: false, ayuda: "Debe descargar el certificado de obligación tributaria desde el portal de la DIAN con fecha de expedición no mayor a 30 días." },
    ],
    // Boolean Defaults
    obligacionesVencidas: false,
    insolvencia: false,
    registradaPais: true,
    cumpleRegulaciones: true,
    actividadesIlegales: false,
    esPEP: false,
    investigacionesJudiciales: false,
    sancionada: false,
    politicasSarlaft: true,
    infoVeraz: false,
    actualizarInfo: false,
    aceptaPolitica: false,
    autorizaConsulta: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  
  // Cliente actual (para agregar/editar)
  const [clienteActual, setClienteActual] = useState<Cliente | null>(null);
  const [mostrarFormCliente, setMostrarFormCliente] = useState(false);

  const totalSteps = 5;

  const steps = [
    { number: 1, title: "Datos Generales", description: "Información de la empresa" },
    { number: 2, title: "Representante Legal", description: "Datos del representante" },
    { number: 3, title: "Clientes", description: "Lista de clientes" },
    { number: 4, title: "Datos Bancarios", description: "Información bancaria" },
    { number: 5, title: "Anexos", description: "Documentos requeridos" },
  ];

  const handleNext = () => {
    // Para demo: permitir avanzar sin validar si se desea, o mantener validación
    // Si se quiere navegación libre para demo, comentar el if
    // if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    // }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const validateStep = (step: number): boolean => {
    // Para demo: siempre retornar true para permitir navegación libre en los indicadores
    // En producción, descomentar la lógica de validación
    return true; 
    
    /* Lógica original de validación:
    switch (step) {
      case 1:
        return !!( 
          // Datos del Usuario
          formData.nombres &&
          formData.nombres.length >= 2 &&
          formData.apellidos &&
          formData.apellidos.length >= 2 &&
          formData.tipoDocumento &&
          formData.numeroDocumento &&
          formData.numeroDocumento.length >= 6 &&
          formData.celular &&
          formData.celular.length >= 10 &&
          formData.correoElectronico &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correoElectronico) &&
          // Datos de la Empresa
          formData.razonSocial &&
          formData.razonSocial.length >= 3 &&
          formData.fechaConstitucion &&
          formData.direccion &&
          formData.direccion.length >= 10 &&
          formData.actividadEconomica &&
          formData.municipio &&
          formData.codigoPostal &&
          formData.codigoPostal.length === 5 &&
          formData.nit &&
          formData.nit.length >= 10
        );
      case 2:
        return !!(
          formData.nombreRepresentante &&
          formData.cedulaRepresentante &&
          formData.cargoRepresentante &&
          formData.emailRepresentante &&
          formData.telefonoRepresentante
        );
      case 3:
        return formData.clientes && formData.clientes.length > 0;
      case 4:
        return !!(
          formData.nombreBanco &&
          formData.tipoCuenta &&
          formData.numeroCuenta
        );
      case 5:
        const docsRequeridos = formData.documentos?.filter(d => d.requerido) || [];
        const todosRequeridosSubidos = docsRequeridos.every(d => d.uploaded);
        return !!(
          todosRequeridosSubidos && 
          formData.infoVeraz && 
          formData.actualizarInfo && 
          formData.aceptaPolitica &&
          formData.autorizaConsulta
        );
      default:
        return false;
    }
    */
  };

  const handleAgregarCliente = (cliente: Omit<Cliente, "id">) => {
    const nuevoCliente: Cliente = {
      ...cliente,
      id: Date.now().toString(),
    };
    setFormData({
      ...formData,
      clientes: [...(formData.clientes || []), nuevoCliente],
    });
    setMostrarFormCliente(false);
    setClienteActual(null);
  };

  const handleEditarCliente = (id: string) => {
    const cliente = formData.clientes?.find(c => c.id === id);
    if (cliente) {
      setClienteActual(cliente);
      setMostrarFormCliente(true);
    }
  };

  const handleEliminarCliente = (id: string) => {
    setFormData({
      ...formData,
      clientes: formData.clientes?.filter(c => c.id !== id) || [],
    });
  };

  const handleFileUpload = (documentoId: string, file: File) => {
    const doc = formData.documentos?.find(d => d.id === documentoId);
    if (!doc) return;

    // Validar tamaño
    if (file.size > doc.maxSize * 1024 * 1024) {
      alert(`El archivo excede el tamaño máximo de ${doc.maxSize}MB`);
      return;
    }

    // Simular carga con progress
    setFormData({
      ...formData,
      documentos: formData.documentos?.map(d =>
        d.id === documentoId
          ? { ...d, archivo: file, progress: 0 }
          : d
      ) || [],
    });

    // Simular progreso
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress >= 100) {
        clearInterval(interval);
        setFormData(prev => ({
          ...prev,
          documentos: prev.documentos?.map(d =>
            d.id === documentoId
              ? { ...d, progress: 100, uploaded: true }
              : d
          ) || [],
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          documentos: prev.documentos?.map(d =>
            d.id === documentoId
              ? { ...d, progress }
              : d
          ) || [],
        }));
      }
    }, 200);
  };

  const handleEliminarDocumento = (documentoId: string) => {
    setFormData({
      ...formData,
      documentos: formData.documentos?.map(d =>
        d.id === documentoId
          ? { ...d, archivo: null, progress: 0, uploaded: false }
          : d
      ) || [],
    });
  };

  const handleSubmit = () => {
    if (!validateStep(5)) {
      alert("Por favor completa todos los campos requeridos");
      return;
    }

    // Generar ID de transacción
    const txId = `CFN-${Date.now().toString().slice(-8)}`;
    setTransactionId(txId);
    
    // Simular envío (1 segundo) y mostrar modal
    setTimeout(() => {
      setShowSuccess(true);
    }, 1000);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccess(false);
    setCurrentStep(1);
    setFormData({
      clientes: [],
      documentos: [
        { id: "1", nombre: "RUT (Registro Único Tributario)", archivo: null, requerido: true, tipo: "PDF/JPG/PNG", maxSize: 5, progress: 0, uploaded: false },
        { id: "2", nombre: "Cámara de Comercio", archivo: null, requerido: true, tipo: "PDF/JPG/PNG", maxSize: 5, progress: 0, uploaded: false },
        { id: "3", nombre: "Cédula Representante Legal", archivo: null, requerido: true, tipo: "PDF/JPG/PNG", maxSize: 5, progress: 0, uploaded: false },
        { id: "4", nombre: "Estados Financieros", archivo: null, requerido: false, tipo: "PDF/Excel", maxSize: 10, progress: 0, uploaded: false },
        { id: "5", nombre: "Documento Adicional", archivo: null, requerido: false, tipo: "Cualquier archivo", maxSize: 5, progress: 0, uploaded: false },
      ],
      confirmacion: false,
      aceptaTerminos: false,
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2 font-semibold tracking-tight text-foreground">Solicitud de Factoring</h1>
          <p className="text-muted-foreground">Complete el formulario para iniciar su solicitud</p>
        </div>

        {/* Stepper */}
        <div className="mb-8 w-full">
          <div className="flex items-center justify-between mb-4 w-full">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-1 items-center justify-center relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-1/2 top-1/2 h-0.5 w-full -translate-y-1/2 transition-all duration-200 ${
                      currentStep > step.number ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}

                {/* Circle */}
                <div
                  onClick={() => setCurrentStep(step.number)}
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 ${
                    currentStep > step.number
                      ? "bg-primary text-primary-foreground"
                      : currentStep === step.number
                      ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{step.number}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Step labels below circles */}
          <div className="flex items-start justify-between">
            {steps.map((step) => (
              <div key={`label-${step.number}`} className="flex-1 flex justify-center">
                <p className={`text-xs text-center hidden md:block whitespace-nowrap px-2 font-medium ${currentStep >= step.number ? "text-foreground" : "text-muted-foreground"}`}>
                  {step.title}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Badge variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Paso {currentStep} de {totalSteps}
            </Badge>
          </div>
        </div>

        {/* Form Card */}
        <Card className="p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl mb-2 font-semibold">{steps[currentStep - 1].title}</h2>
            <p className="text-sm text-muted-foreground">{steps[currentStep - 1].description}</p>
          </div>

          <div className="transition-all duration-250">
            {/* PASO 1: Datos Generales */}
            {currentStep === 1 && (
              <Paso1
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {/* PASO 2: Representante Legal */}
            {currentStep === 2 && (
              <Paso2
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {/* PASO 3: Clientes */}
            {currentStep === 3 && (
              <Paso3
                formData={formData}
                mostrarFormCliente={mostrarFormCliente}
                setMostrarFormCliente={setMostrarFormCliente}
                clienteActual={clienteActual}
                setClienteActual={setClienteActual}
                onAgregarCliente={handleAgregarCliente}
                onEditarCliente={handleEditarCliente}
                onEliminarCliente={handleEliminarCliente}
              />
            )}

            {/* PASO 4: Datos Bancarios */}
            {currentStep === 4 && (
              <Paso4
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {/* PASO 5: Anexos */}
            {currentStep === 5 && (
              <Paso5
                formData={formData}
                setFormData={setFormData}
                onFileUpload={handleFileUpload}
                onEliminarDocumento={handleEliminarDocumento}
              />
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-border">
            {currentStep > 1 && (
              <Button
                variant="outline"
                onClick={handleBack}
              >
                Atrás
              </Button>
            )}
            
            <Button
                variant="outline"
                onClick={() => {
                  if (confirm("¿Está seguro de cancelar el formulario?")) {
                    setCurrentStep(1);
                    setFormData({
                      clientes: [],
                      documentos: formData.documentos,
                      // Reset booleans
                      infoVeraz: false,
                      actualizarInfo: false,
                      aceptaPolitica: false,
                      autorizaConsulta: false,
                    });
                  }
                }}
              >
                Cancelar
              </Button>

            <div className="flex-1" />

            {currentStep < totalSteps ? (
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleNext}
              >
                Siguiente
              </Button>
            ) : (
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleSubmit}
              >
                Enviar Formulario
              </Button>
            )}
          </div>
        </Card>

        {/* Modal de Éxito */}
        <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
              </div>
              <DialogTitle className="text-center text-2xl">
                ¡Proceso Finalizado Exitosamente!
              </DialogTitle>
              <DialogDescription className="text-center space-y-4 pt-4" asChild>
                <div>
                  <p className="text-muted-foreground">
                    Tu solicitud de factoring ha sido recibida correctamente y está siendo procesada.
                  </p>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Número de referencia:</p>
                    <p className="font-semibold text-primary">{transactionId}</p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-left dark:bg-yellow-900/20 dark:border-yellow-800">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
                      <strong>Próximos pasos:</strong>
                    </p>
                    <ul className="text-xs text-yellow-800 dark:text-yellow-200 space-y-1 list-disc list-inside">
                      <li>Recibirás un correo de confirmación en las próximas horas</li>
                      <li>Nuestro equipo revisará tu solicitud en 2-3 días hábiles</li>
                      <li>Serás contactado para confirmar la activación de tu cuenta</li>
                      <li>Te notificaremos cualquier documento adicional requerido</li>
                    </ul>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Si tienes alguna pregunta, no dudes en contactarnos.
                  </p>
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 mt-4">
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleCloseSuccessModal}
              >
                Entendido
              </Button>
              <Button
                variant="outline"
                onClick={() => window.print()}
                className="w-full"
              >
                Descargar Comprobante
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

// ========== PASO 1: DATOS GENERALES ==========
function Paso1({
  formData,
  setFormData,
}: {
  formData: Partial<FormData>;
  setFormData: (data: Partial<FormData>) => void;
}) {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [municipioOpen, setMunicipioOpen] = useState(false);

  const handleNITChange = (valor: string) => {
    const formateado = formatearNIT(valor);
    setFormData({ ...formData, nit: formateado });
  };

  const isFieldValid = (field: keyof FormData) => {
    const value = formData[field];
    if (!value) return null;
    
    switch (field) {
      case "nombres":
      case "apellidos":
        return typeof value === "string" && value.length >= 2;
      case "numeroDocumento":
        return typeof value === "string" && value.length >= 6;
      case "celular":
        return typeof value === "string" && value.length >= 10;
      case "correoElectronico":
        return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "razonSocial":
        return typeof value === "string" && value.length >= 3;
      case "direccion":
        return typeof value === "string" && value.length >= 10;
      case "codigoPostal":
        return typeof value === "string" && value.length === 5 && /^\d+$/.test(value);
      case "nit":
        return typeof value === "string" && value.length >= 10;
      default:
        return !!value;
    }
  };

  return (
    <div className="space-y-8">
      {/* SECCIÓN 1: DATOS DEL USUARIO */}
      <div>
        <h3 className="text-sm mb-4 pb-2 border-b border-border">Datos del Usuario</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nombres */}
          <div>
            <InputField
              label="Nombres"
              placeholder="Ej: Juan Carlos"
              helper="Nombres completos"
              value={formData.nombres || ""}
              onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
              isValid={isFieldValid("nombres")}
              required
            />
          </div>

          {/* Apellidos */}
          <div>
            <InputField
              label="Apellidos"
              placeholder="Ej: García López"
              helper="Apellidos completos"
              value={formData.apellidos || ""}
              onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
              isValid={isFieldValid("apellidos")}
              required
            />
          </div>

          {/* Tipo de Documento */}
          <div>
            <Label className="text-xs text-muted-foreground">
              Tipo de Documento <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.tipoDocumento}
              onValueChange={(value) => setFormData({ ...formData, tipoDocumento: value })}
            >
              <SelectTrigger className={`mt-1 transition-all duration-200 ${
                formData.tipoDocumento
                  ? "border-primary"
                  : "border-input hover:border-border"
              }`}>
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CC">Cédula de Ciudadanía</SelectItem>
                <SelectItem value="CE">Cédula de Extranjería</SelectItem>
                <SelectItem value="PA">Pasaporte</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground mt-1">Tipo de identificación</p>
          </div>

          {/* Número de Documento */}
          <div>
            <InputField
              label="Número de Documento"
              placeholder="1234567890"
              helper="Número de identificación"
              value={formData.numeroDocumento || ""}
              onChange={(e) => {
                const valor = e.target.value.replace(/\D/g, "");
                setFormData({ ...formData, numeroDocumento: valor });
              }}
              isValid={isFieldValid("numeroDocumento")}
              required
            />
          </div>

          {/* Celular */}
          <div>
            <InputField
              label="Celular"
              placeholder="+57 301 234 5678"
              helper="Número de celular"
              value={formData.celular || ""}
              onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
              isValid={isFieldValid("celular")}
              required
            />
          </div>

          {/* Correo Electrónico */}
          <div>
            <InputField
              label="Correo Electrónico"
              placeholder="usuario@ejemplo.com"
              helper="Correo electrónico personal"
              value={formData.correoElectronico || ""}
              onChange={(e) => setFormData({ ...formData, correoElectronico: e.target.value })}
              isValid={isFieldValid("correoElectronico")}
              type="email"
              required
            />
          </div>
        </div>
      </div>

      {/* SECCIÓN 2: DATOS DE LA EMPRESA */}
      <div>
        <h3 className="text-sm mb-4 pb-2 border-b border-border">Datos de la Empresa</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Razón Social */}
          <div className="md:col-span-2">
            <InputField
              label="Razón Social"
              placeholder="Ej: Acme Corporation SAS"
              helper="Nombre legal de la empresa"
              value={formData.razonSocial || ""}
              onChange={(e) => setFormData({ ...formData, razonSocial: e.target.value })}
              isValid={isFieldValid("razonSocial")}
              required
            />
          </div>

          {/* Fecha Constitución */}
          <div>
            <Label className="text-xs text-muted-foreground">
              Fecha Constitución <span className="text-destructive">*</span>
            </Label>
            <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left transition-all duration-200 mt-1 ${
                    formData.fechaConstitucion
                      ? "border-primary"
                      : "border-input hover:border-border"
                  }`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.fechaConstitucion ? (
                    format(formData.fechaConstitucion, "dd/MM/yyyy", { locale: es })
                  ) : (
                    <span className="text-muted-foreground">DD/MM/YYYY</span>
                  )}
                  {formData.fechaConstitucion && (
                    <Check className="ml-auto h-4 w-4 text-primary" />
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={formData.fechaConstitucion}
                  onSelect={(date) => {
                    setFormData({ ...formData, fechaConstitucion: date });
                    setDatePickerOpen(false);
                  }}
                  disabled={(date) => date > new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <p className="text-xs text-muted-foreground mt-1">Fecha de constitución legal</p>
          </div>

          {/* NIT */}
          <div>
            <InputField
              label="NIT"
              placeholder="900123456-7"
              helper="NIT con dígito de verificación"
              value={formData.nit || ""}
              onChange={(e) => handleNITChange(e.target.value)}
              isValid={isFieldValid("nit")}
              required
            />
          </div>

          {/* Dirección */}
          <div className="md:col-span-2">
            <InputField
              label="Dirección"
              placeholder="Ej: Carrera 7 #100-50"
              helper="Dirección fiscal de la empresa"
              value={formData.direccion || ""}
              onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
              isValid={isFieldValid("direccion")}
              required
            />
          </div>

          {/* Actividad Económica */}
          <div>
            <Label className="text-xs text-muted-foreground">
              Actividad Económica <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.actividadEconomica}
              onValueChange={(value) => setFormData({ ...formData, actividadEconomica: value })}
            >
              <SelectTrigger className={`mt-1 transition-all duration-200 ${
                formData.actividadEconomica
                  ? "border-primary"
                  : "border-input hover:border-border"
              }`}>
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                {actividadesEconomicas.map((actividad) => (
                  <SelectItem key={actividad} value={actividad}>
                    {actividad}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formData.actividadEconomica && (
              <div className="absolute right-3 top-9 pointer-events-none">
                <Check className="h-4 w-4 text-primary" />
              </div>
            )}
            <p className="text-xs text-muted-foreground mt-1">Código CIIU principal</p>
          </div>

          {/* Municipio/Sede */}
          <div>
            <Label className="text-xs text-muted-foreground">
              Municipio/Sede <span className="text-destructive">*</span>
            </Label>
            <Popover open={municipioOpen} onOpenChange={setMunicipioOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-between text-left transition-all duration-200 mt-1 ${
                    formData.municipio
                      ? "border-primary"
                      : "border-input hover:border-border"
                  }`}
                >
                  {formData.municipio || "Buscar ciudad..."}
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0">
                <Command>
                  <CommandInput placeholder="Buscar ciudad..." />
                  <CommandEmpty>No se encontraron resultados</CommandEmpty>
                  <CommandGroup>
                    {municipios.map((municipio) => (
                      <CommandItem
                        key={municipio}
                        value={municipio}
                        onSelect={(value) => {
                          setFormData({ ...formData, municipio: value.toUpperCase() });
                          setMunicipioOpen(false);
                        }}
                      >
                        <Check
                          className={`mr-2 h-4 w-4 ${
                            formData.municipio === municipio ? "opacity-100" : "opacity-0"
                          }`}
                        />
                        {municipio}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <p className="text-xs text-muted-foreground mt-1">Ciudad principal de operación</p>
          </div>

          {/* Código Postal */}
          <div className="md:col-span-2">
            <InputField
              label="Código Postal"
              placeholder="110111"
              helper="Código postal de 5 dígitos"
              value={formData.codigoPostal || ""}
              onChange={(e) => {
                const valor = e.target.value.replace(/\D/g, "").slice(0, 5);
                setFormData({ ...formData, codigoPostal: valor });
              }}
              isValid={isFieldValid("codigoPostal")}
              maxLength={5}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== PASO 2: REPRESENTANTE LEGAL ==========
function Paso2({
  formData,
  setFormData,
}: {
  formData: Partial<FormData>;
  setFormData: (data: Partial<FormData>) => void;
}) {
  const [soyRepresentante, setSoyRepresentante] = useState(false);

  const handleSoyRepresentanteChange = (checked: boolean) => {
    setSoyRepresentante(checked);
    
    if (checked) {
      // Auto-completar con datos del usuario del Paso 1
      const nombreCompleto = `${formData.nombres || ""} ${formData.apellidos || ""}`.trim();
      setFormData({
        ...formData,
        nombreRepresentante: nombreCompleto,
        cedulaRepresentante: formData.numeroDocumento || "",
        emailRepresentante: formData.correoElectronico || "",
        telefonoRepresentante: formData.celular || "",
      });
    }
  };

  const isFieldValid = (field: keyof FormData) => {
    const value = formData[field];
    if (!value) return null;
    
    switch (field) {
      case "emailRepresentante":
        return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "telefonoRepresentante":
        return typeof value === "string" && value.length >= 10;
      case "cedulaRepresentante":
        return typeof value === "string" && value.length >= 6;
      default:
        return !!value;
    }
  };

  return (
    <div className="space-y-6">
      {/* Checkbox: Soy el representante legal */}
      <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-input">
        <Checkbox
          id="soyRepresentante"
          checked={soyRepresentante}
          onCheckedChange={handleSoyRepresentanteChange}
        />
        <div className="flex-1">
          <Label
            htmlFor="soyRepresentante"
            className="text-sm cursor-pointer"
          >
            Soy el representante legal
          </Label>
          <p className="text-xs text-muted-foreground mt-1">
            Marcar esta opción completará automáticamente los campos con tus datos personales
          </p>
        </div>
      </div>

      {/* Campos del formulario */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <InputField
            label="Nombre Completo"
            placeholder="Ej: Juan Carlos García López"
            helper="Nombre completo del representante legal"
            value={formData.nombreRepresentante || ""}
            onChange={(e) => setFormData({ ...formData, nombreRepresentante: e.target.value })}
            isValid={isFieldValid("nombreRepresentante")}
            required
          />
        </div>

        <div>
          <InputField
            label="Número de Cédula"
            placeholder="1234567890"
            helper="Cédula de ciudadanía"
            value={formData.cedulaRepresentante || ""}
            onChange={(e) => {
              const valor = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, cedulaRepresentante: valor });
            }}
            isValid={isFieldValid("cedulaRepresentante")}
            required
          />
        </div>

        <div>
          <InputField
            label="Cargo"
            placeholder="Ej: Gerente General"
            helper="Cargo en la empresa"
            value={formData.cargoRepresentante || ""}
            onChange={(e) => setFormData({ ...formData, cargoRepresentante: e.target.value })}
            isValid={isFieldValid("cargoRepresentante")}
            required
          />
        </div>

        <div>
          <InputField
            label="Email"
            placeholder="representante@empresa.com"
            helper="Correo electrónico corporativo"
            value={formData.emailRepresentante || ""}
            onChange={(e) => setFormData({ ...formData, emailRepresentante: e.target.value })}
            isValid={isFieldValid("emailRepresentante")}
            type="email"
            required
          />
        </div>

        <div>
          <InputField
            label="Teléfono"
            placeholder="+57 301 234 5678"
            helper="Número de contacto"
            value={formData.telefonoRepresentante || ""}
            onChange={(e) => setFormData({ ...formData, telefonoRepresentante: e.target.value })}
            isValid={isFieldValid("telefonoRepresentante")}
            required
          />
        </div>
      </div>
    </div>
  );
}

// ========== PASO 3: CLIENTES ==========
function Paso3({
  formData,
  mostrarFormCliente,
  setMostrarFormCliente,
  clienteActual,
  setClienteActual,
  onAgregarCliente,
  onEditarCliente,
  onEliminarCliente,
}: {
  formData: Partial<FormData>;
  mostrarFormCliente: boolean;
  setMostrarFormCliente: (show: boolean) => void;
  clienteActual: Cliente | null;
  setClienteActual: (cliente: Cliente | null) => void;
  onAgregarCliente: (cliente: Omit<Cliente, "id">) => void;
  onEditarCliente: (id: string) => void;
  onEliminarCliente: (id: string) => void;
}) {
  const [clienteForm, setClienteForm] = useState<Omit<Cliente, "id">>({
    nombre: "",
    nit: "",
    contacto: "",
    email: "",
    telefono: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const handleGuardarCliente = () => {
    if (
      !clienteForm.nombre ||
      !clienteForm.nit ||
      !clienteForm.contacto ||
      !clienteForm.email ||
      !clienteForm.telefono
    ) {
      alert("Por favor completa todos los campos");
      return;
    }

    onAgregarCliente(clienteForm);
    setClienteForm({
      nombre: "",
      nit: "",
      contacto: "",
      email: "",
      telefono: "",
    });
  };

  const clientes = formData.clientes || [];

  // Filtrar clientes según búsqueda
  const clientesFiltrados = clientes.filter((cliente) => {
    const query = searchQuery.toLowerCase();
    return (
      cliente.nombre.toLowerCase().includes(query) ||
      cliente.nit.toLowerCase().includes(query) ||
      cliente.contacto.toLowerCase().includes(query) ||
      cliente.email.toLowerCase().includes(query)
    );
  });

  if (mostrarFormCliente) {
    return (
      <div>
        <div className="mb-4">
          <Button
            variant="ghost"
            onClick={() => {
              setMostrarFormCliente(false);
              setClienteActual(null);
            }}
          >
            ← Volver a la lista
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <InputField
              label="Nombre Cliente"
              placeholder="Ej: Tienda ABC SAS"
              helper="Nombre o razón social del cliente"
              value={clienteForm.nombre}
              onChange={(e) => setClienteForm({ ...clienteForm, nombre: e.target.value })}
              required
            />
          </div>

          <div>
            <InputField
              label="NIT Cliente"
              placeholder="901234567-8"
              helper="NIT con dígito verificador"
              value={clienteForm.nit}
              onChange={(e) => {
                const formateado = formatearNIT(e.target.value);
                setClienteForm({ ...clienteForm, nit: formateado });
              }}
              required
            />
          </div>

          <div>
            <InputField
              label="Contacto"
              placeholder="Juan García"
              helper="Nombre de contacto en la empresa"
              value={clienteForm.contacto}
              onChange={(e) => setClienteForm({ ...clienteForm, contacto: e.target.value })}
              required
            />
          </div>

          <div>
            <InputField
              label="Email Contacto"
              placeholder="contacto@cliente.com"
              helper="Email principal del cliente"
              value={clienteForm.email}
              onChange={(e) => setClienteForm({ ...clienteForm, email: e.target.value })}
              type="email"
              required
            />
          </div>

          <div>
            <InputField
              label="Teléfono"
              placeholder="+57 301 234 5678"
              helper="Teléfono de contacto"
              value={clienteForm.telefono}
              onChange={(e) => setClienteForm({ ...clienteForm, telefono: e.target.value })}
              required
            />
          </div>

          <div className="md:col-span-2 flex gap-4">
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
              onClick={handleGuardarCliente}
            >
              Guardar Cliente
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setMostrarFormCliente(false);
                setClienteActual(null);
                setClienteForm({
                  nombre: "",
                  nit: "",
                  contacto: "",
                  email: "",
                  telefono: "",
                });
              }}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {clientes.length === 0 ? (
        <Card className="p-8 text-center border-dashed border-2 border-input">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <Plus className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-foreground mb-1">No hay clientes agregados</p>
              <p className="text-xs text-muted-foreground">Debe agregar al menos un cliente</p>
            </div>
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
              onClick={() => setMostrarFormCliente(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Agregar Cliente
            </Button>
          </div>
        </Card>
      ) : (
        <div>
          <div className="mb-4 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="flex-1 w-full md:w-auto">
              {/* Input de búsqueda/filtro */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nombre, NIT, contacto o email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10 border-input focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white w-full md:w-auto"
              size="sm"
              onClick={() => setMostrarFormCliente(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Agregar Cliente
            </Button>
          </div>

          {/* Indicador de resultados */}
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm text-foreground">
              {searchQuery ? (
                <>
                  {clientesFiltrados.length} resultado{clientesFiltrados.length !== 1 ? "s" : ""} de {clientes.length} cliente{clientes.length !== 1 ? "s" : ""}
                </>
              ) : (
                <>
                  {clientes.length} cliente{clientes.length !== 1 ? "s" : ""} agregado{clientes.length !== 1 ? "s" : ""}
                </>
              )}
            </p>
          </div>

          {/* Tabla de clientes */}
          {clientesFiltrados.length > 0 ? (
            <div className="border border-input rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>NIT</TableHead>
                    <TableHead className="hidden md:table-cell">Contacto</TableHead>
                    <TableHead className="hidden lg:table-cell">Email</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clientesFiltrados.map((cliente) => (
                    <TableRow key={cliente.id}>
                      <TableCell className="font-medium">{cliente.nombre}</TableCell>
                      <TableCell>{cliente.nit}</TableCell>
                      <TableCell className="hidden md:table-cell">{cliente.contacto}</TableCell>
                      <TableCell className="hidden lg:table-cell text-sm text-foreground">{cliente.email}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onEditarCliente(cliente.id)}
                            className="hover:bg-primary/10 hover:text-primary"
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              if (confirm(`¿Eliminar a ${cliente.nombre}?`)) {
                                onEliminarCliente(cliente.id);
                              }
                            }}
                            className="hover:bg-destructive/10 hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <Card className="p-8 text-center border-dashed border-2 border-input">
              <div className="flex flex-col items-center gap-3">
                <AlertCircle className="w-12 h-12 text-muted-foreground" />
                <div>
                  <p className="text-foreground mb-1">No se encontraron resultados</p>
                  <p className="text-xs text-muted-foreground">
                    No hay clientes que coincidan con "{searchQuery}"
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery("")}
                >
                  Limpiar búsqueda
                </Button>
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}

// ========== PASO 4: DATOS BANCARIOS ==========
function Paso4({
  formData,
  setFormData,
}: {
  formData: Partial<FormData>;
  setFormData: (data: Partial<FormData>) => void;
}) {
  const isFieldValid = (field: keyof FormData) => {
    const value = formData[field];
    return value ? !!value : null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label className="text-xs text-muted-foreground">
          Nombre del Banco <span className="text-destructive">*</span>
        </Label>
        <Select
          value={formData.nombreBanco}
          onValueChange={(value) => setFormData({ ...formData, nombreBanco: value })}
        >
          <SelectTrigger className={`mt-1 transition-all duration-200 ${
            formData.nombreBanco
              ? "border-primary"
              : "border-input hover:border-border"
          }`}>
            <SelectValue placeholder="Seleccionar banco" />
          </SelectTrigger>
          <SelectContent>
            {bancos.map((banco) => (
              <SelectItem key={banco} value={banco}>
                {banco}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground mt-1">Entidad bancaria principal</p>
      </div>

      <div>
        <Label className="text-xs text-muted-foreground">
          Tipo de Cuenta <span className="text-destructive">*</span>
        </Label>
        <Select
          value={formData.tipoCuenta}
          onValueChange={(value) => setFormData({ ...formData, tipoCuenta: value })}
        >
          <SelectTrigger className={`mt-1 transition-all duration-200 ${
            formData.tipoCuenta
              ? "border-primary"
              : "border-input hover:border-border"
          }`}>
            <SelectValue placeholder="Seleccionar tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ahorros">Ahorros</SelectItem>
            <SelectItem value="corriente">Corriente</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground mt-1">Tipo de cuenta bancaria</p>
      </div>

      <div className="md:col-span-2">
        <InputField
          label="Número de Cuenta"
          placeholder="1234567890"
          helper="Número de cuenta bancaria"
          value={formData.numeroCuenta || ""}
          onChange={(e) => {
            const valor = e.target.value.replace(/\D/g, "");
            setFormData({ ...formData, numeroCuenta: valor });
          }}
          isValid={isFieldValid("numeroCuenta")}
          required
        />
      </div>

      <div className="md:col-span-2">
        <Alert className="border-primary/20 bg-primary/5">
          <AlertCircle className="h-4 w-4 text-primary" />
          <AlertDescription className="text-xs text-foreground">
            Esta cuenta será utilizada para los desembolsos de factoring. Asegúrate de que la información sea correcta.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

import { Switch } from "../ui/switch";

// ========== PASO 5: ANEXOS ==========
function Paso5({
  formData,
  setFormData,
  onFileUpload,
  onEliminarDocumento,
}: {
  formData: Partial<FormData>;
  setFormData: (data: Partial<FormData>) => void;
  onFileUpload: (documentoId: string, file: File) => void;
  onEliminarDocumento: (documentoId: string) => void;
}) {
  const documentos = formData.documentos || [];

  return (
    <div className="space-y-8">
      {/* Sección Documentos Finales */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-secondary">Documentos finales</h3>
          <p className="text-sm text-destructive font-medium">* Documentos obligatorios</p>
        </div>
        
        <div className="space-y-3">
          {documentos.map((doc) => (
            <DocumentoUpload
              key={doc.id}
              documento={doc}
              onUpload={onFileUpload}
              onEliminar={onEliminarDocumento}
            />
          ))}
        </div>
      </div>

      {/* Sección Situación Financiera */}
      <div className="space-y-4 pt-6 border-t border-border">
        <h3 className="text-lg font-medium text-secondary">Situación Financiera</h3>
        <div className="space-y-4">
          <SwitchQuestion
            id="obligacionesVencidas"
            label="¿Presenta obligaciones financieras vencidas o en proceso de cobro judicial?"
            checked={formData.obligacionesVencidas}
            onCheckedChange={(checked) => setFormData({ ...formData, obligacionesVencidas: checked })}
          />
          <SwitchQuestion
            id="insolvencia"
            label="¿La empresa ha estado o está en proceso de insolvencia, reorganización o liquidación?"
            checked={formData.insolvencia}
            onCheckedChange={(checked) => setFormData({ ...formData, insolvencia: checked })}
          />
        </div>
      </div>

      {/* Sección Cumplimiento Legal */}
      <div className="space-y-4 pt-6 border-t border-border">
        <h3 className="text-lg font-medium text-secondary">Cumplimiento Legal</h3>
        <div className="space-y-4">
          <SwitchQuestion
            id="registradaPais"
            label="¿La empresa está registrada en el país donde opera?"
            checked={formData.registradaPais}
            onCheckedChange={(checked) => setFormData({ ...formData, registradaPais: checked })}
          />
          <SwitchQuestion
            id="cumpleRegulaciones"
            label="¿Cumple con todas las regulaciones locales e internacionales?"
            checked={formData.cumpleRegulaciones}
            onCheckedChange={(checked) => setFormData({ ...formData, cumpleRegulaciones: checked })}
          />
          <SwitchQuestion
            id="actividadesIlegales"
            label="¿Ha estado la empresa o alguno de sus directivos involucrado en actividades ilegales o financieras de dudosa procedencia?"
            checked={formData.actividadesIlegales}
            onCheckedChange={(checked) => setFormData({ ...formData, actividadesIlegales: checked })}
          />
          <SwitchQuestion
            id="esPEP"
            label="¿Algún accionista, socio o directivo es o ha sido Persona Expuesta Políticamente (PEP)?"
            checked={formData.esPEP}
            onCheckedChange={(checked) => setFormData({ ...formData, esPEP: checked })}
          />
          <SwitchQuestion
            id="investigacionesJudiciales"
            label="¿Alguno de los socios o directivos se encuentra o ha estado vinculado a investigaciones judiciales, disciplinarias o fiscales?"
            checked={formData.investigacionesJudiciales}
            onCheckedChange={(checked) => setFormData({ ...formData, investigacionesJudiciales: checked })}
          />
          <SwitchQuestion
            id="sancionada"
            label="¿Ha sido sancionada la empresa por incumplimientos tributarios o laborales?"
            checked={formData.sancionada}
            onCheckedChange={(checked) => setFormData({ ...formData, sancionada: checked })}
          />
           <SwitchQuestion
            id="politicasSarlaft"
            label="¿Cuenta con políticas internas de prevención de lavado de activos y financiación del terrorismo (SARLAFT / SAGRLAFT)?"
            checked={formData.politicasSarlaft}
            onCheckedChange={(checked) => setFormData({ ...formData, politicasSarlaft: checked })}
          />
        </div>
      </div>

      {/* Declaraciones Finales (Checkboxes) */}
      <div className="space-y-4 pt-6 border-t border-border">
        <CheckboxDeclaration
          id="infoVeraz"
          label="Declaro que la información suministrada es veraz, actual y verificable."
          checked={formData.infoVeraz}
          onCheckedChange={(checked) => setFormData({ ...formData, infoVeraz: checked as boolean })}
        />
        <CheckboxDeclaration
          id="actualizarInfo"
          label="Me comprometo a actualizar cualquier cambio relevante en la composición accionaria, revisoría fiscal o domicilio dentro de los 30 días siguientes a su ocurrencia."
          checked={formData.actualizarInfo}
          onCheckedChange={(checked) => setFormData({ ...formData, actualizarInfo: checked as boolean })}
        />
        <CheckboxDeclaration
          id="aceptaPolitica"
          label={
            <span>
              Confirmo que he leído, entiendo y acepto la{" "}
              <a href="#" className="text-primary underline hover:text-primary/80">
                Política de Seguridad, Privacidad y Tratamiento de Datos
              </a>.
            </span>
          }
          checked={formData.aceptaPolitica}
          onCheckedChange={(checked) => setFormData({ ...formData, aceptaPolitica: checked as boolean })}
        />
        <CheckboxDeclaration
          id="autorizaConsulta"
          label={
            <span>
              Autorizo la{" "}
              <a href="#" className="text-primary underline hover:text-primary/80">
                consulta en centrales de riesgo y en listas restrictivas (SAGRLAFT)
              </a>.
            </span>
          }
          checked={formData.autorizaConsulta}
          onCheckedChange={(checked) => setFormData({ ...formData, autorizaConsulta: checked as boolean })}
        />
      </div>

      {(!formData.infoVeraz || !formData.actualizarInfo || !formData.aceptaPolitica || !formData.autorizaConsulta) && (
        <Alert className="border-destructive/20 bg-destructive/5">
          <AlertCircle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-xs text-destructive">
            Debes aceptar todas las declaraciones y autorizaciones para continuar.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

// Helper: Pregunta con Switch
function SwitchQuestion({
  id,
  label,
  checked,
  onCheckedChange,
}: {
  id: string;
  label: string;
  checked?: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-zinc-50 transition-colors">
      <Label htmlFor={id} className="text-sm font-normal text-foreground flex-1 cursor-pointer leading-relaxed">
        {label}
      </Label>
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}

// Helper: Declaración con Checkbox
function CheckboxDeclaration({
  id,
  label,
  checked,
  onCheckedChange,
}: {
  id: string;
  label: React.ReactNode;
  checked?: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start gap-3">
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} className="mt-0.5" />
      <Label htmlFor={id} className="text-xs text-muted-foreground cursor-pointer leading-relaxed">
        {label}
      </Label>
    </div>
  );
}

// ========== COMPONENTE AUXILIAR: INPUT FIELD ==========
function InputField({
  label,
  placeholder,
  helper,
  value,
  onChange,
  isValid,
  required,
  type = "text",
  maxLength,
}: {
  label: string;
  placeholder: string;
  helper: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean | null;
  required?: boolean;
  type?: string;
  maxLength?: number;
}) {
  return (
    <div className="relative">
      <Label className="text-xs text-muted-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <div className="relative">
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          className={`mt-1 transition-all duration-200 pr-10 ${
            isValid === null
              ? "border-input hover:border-border focus:border-primary focus:ring-4 focus:ring-primary/10"
              : isValid
              ? "border-primary"
              : "border-destructive bg-destructive/5"
          }`}
        />
        {isValid === true && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Check className="h-4 w-4 text-primary" />
          </div>
        )}
        {isValid === false && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <AlertCircle className="h-4 w-4 text-destructive" />
          </div>
        )}
      </div>
      <p className={`text-xs mt-1 ${isValid === false ? "text-destructive" : "text-muted-foreground"}`}>
        {isValid === false ? "Este campo es requerido" : helper}
      </p>
    </div>
  );
}

// ========== COMPONENTE AUXILIAR: DOCUMENTO UPLOAD ==========
function DocumentoUpload({
  documento,
  onUpload,
  onEliminar,
}: {
  documento: Documento;
  onUpload: (documentoId: string, file: File) => void;
  onEliminar: (documentoId: string) => void;
}) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(documento.id, file);
    }
  };

  return (
    <div className={`flex items-center justify-between p-3 border rounded-lg transition-colors ${
        documento.uploaded ? "bg-green-50/50 border-green-200" : "bg-white border-zinc-200"
      }`}>
      <div className="flex items-center gap-3">
        {/* Icono */}
        <div className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${
            documento.uploaded ? "bg-green-100 text-green-600" : "bg-zinc-100 text-zinc-500"
          }`}>
           {documento.uploaded ? <CheckCircle2 className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
        </div>
        
        {/* Info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm font-medium text-zinc-700">{documento.nombre}</p>
             {documento.ayuda && (
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help hover:text-primary transition-colors" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-[250px] text-xs leading-normal">{documento.ayuda}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
             )}
             {documento.requerido && !documento.uploaded && (
                <Badge variant="outline" className="text-xs h-5 border-red-200 text-red-600 bg-red-50 font-medium">
                  Requerido
                </Badge>
              )}
          </div>
          <p className="text-xs text-zinc-500 truncate max-w-[200px] sm:max-w-xs">
             {documento.uploaded 
                ? documento.archivo?.name 
                : `${documento.tipo} • Máx. ${documento.maxSize}MB`}
          </p>
          {documento.progress > 0 && documento.progress < 100 && (
             <Progress value={documento.progress} className="h-1 w-24 mt-1" />
          )}
        </div>
      </div>

      {/* Acción */}
      <div className="ml-2">
         <input
            type="file"
            id={`file-${documento.id}`}
            className="hidden"
            onChange={handleFileChange}
            accept={documento.tipo === "PDF/JPG/PNG" ? ".pdf,.jpg,.jpeg,.png" : documento.tipo === "PDF/Excel" ? ".pdf,.xlsx,.xls" : "*"}
            disabled={documento.uploaded} 
          />
          
          {documento.uploaded ? (
             <Button 
               variant="ghost" 
               size="sm" 
               onClick={() => onEliminar(documento.id)}
               className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
             >
                <Trash2 className="w-4 h-4" />
             </Button>
          ) : (
            <Button variant="outline" size="sm" asChild className="cursor-pointer h-8 text-xs border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50">
               <label htmlFor={`file-${documento.id}`}>
                 <Upload className="w-3 h-3 mr-2" />
                 Subir
               </label>
            </Button>
          )}
      </div>
    </div>
  );
}