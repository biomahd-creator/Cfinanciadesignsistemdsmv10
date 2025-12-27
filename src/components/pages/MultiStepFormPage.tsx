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
import { CalendarIcon, Check, X, Upload, FileText, Pencil, Trash2, Plus, CheckCircle2, AlertCircle, ChevronDown, Search } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

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
  
  // Paso 5
  documentos: Documento[];
  confirmacion: boolean;
  aceptaTerminos: boolean;
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
      { id: "1", nombre: "RUT (Registro Único Tributario)", archivo: null, requerido: true, tipo: "PDF/JPG/PNG", maxSize: 5, progress: 0, uploaded: false },
      { id: "2", nombre: "Cámara de Comercio", archivo: null, requerido: true, tipo: "PDF/JPG/PNG", maxSize: 5, progress: 0, uploaded: false },
      { id: "3", nombre: "Cédula Representante Legal", archivo: null, requerido: true, tipo: "PDF/JPG/PNG", maxSize: 5, progress: 0, uploaded: false },
      { id: "4", nombre: "Estados Financieros", archivo: null, requerido: false, tipo: "PDF/Excel", maxSize: 10, progress: 0, uploaded: false },
      { id: "5", nombre: "Documento Adicional", archivo: null, requerido: false, tipo: "Cualquier archivo", maxSize: 5, progress: 0, uploaded: false },
    ],
    confirmacion: false,
    aceptaTerminos: false,
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
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const validateStep = (step: number): boolean => {
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
        return todosRequeridosSubidos && formData.confirmacion && formData.aceptaTerminos;
      default:
        return false;
    }
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
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Solicitud de Factoring</h1>
          <p className="text-[#5C5C5C]">Complete el formulario para iniciar su solicitud</p>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    onClick={() => setCurrentStep(step.number)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 ${
                      currentStep > step.number
                        ? "bg-[#00D084] text-white"
                        : currentStep === step.number
                        ? "bg-[#00D084] text-white ring-4 ring-[#00D084]/20"
                        : "bg-[#E5E7EB] text-[#9CA3AF] hover:bg-[#D1D5DB]"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span className="text-sm">{step.number}</span>
                    )}
                  </div>
                  <p className="text-xs mt-2 text-center hidden md:block">{step.title}</p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 transition-all duration-200 ${
                      currentStep > step.number ? "bg-[#00D084]" : "bg-[#E5E7EB]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Badge variant="outline" className="border-[#00D084] text-[#00D084]">
              Paso {currentStep} de {totalSteps}
            </Badge>
          </div>
        </div>

        {/* Form Card */}
        <Card className="p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl mb-2">{steps[currentStep - 1].title}</h2>
            <p className="text-sm text-[#9CA3AF]">{steps[currentStep - 1].description}</p>
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
          <div className="flex gap-4 mt-8 pt-6 border-t border-[#E5E7EB]">
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
                      confirmacion: false,
                      aceptaTerminos: false,
                    });
                  }
                }}
              >
                Cancelar
              </Button>

            <div className="flex-1" />

            {currentStep < totalSteps ? (
              <Button
                style={{ backgroundColor: validateStep(currentStep) ? "#00D084" : "#E5E7EB" }}
                className={validateStep(currentStep) ? "" : "text-[#9CA3AF] cursor-not-allowed"}
                onClick={handleNext}
                disabled={!validateStep(currentStep)}
              >
                Siguiente
              </Button>
            ) : (
              <Button
                style={{ backgroundColor: validateStep(5) ? "#00D084" : "#E5E7EB" }}
                className={validateStep(5) ? "" : "text-[#9CA3AF] cursor-not-allowed"}
                onClick={handleSubmit}
                disabled={!validateStep(5)}
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
                <div className="w-16 h-16 rounded-full bg-[#00D084]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[#00D084]" />
                </div>
              </div>
              <DialogTitle className="text-center text-2xl">
                ¡Proceso Finalizado Exitosamente!
              </DialogTitle>
              <DialogDescription className="text-center space-y-4 pt-4">
                <p className="text-[#5C5C5C]">
                  Tu solicitud de factoring ha sido recibida correctamente y está siendo procesada.
                </p>
                
                <div className="bg-[#F8F8F8] p-4 rounded-lg">
                  <p className="text-xs text-[#9CA3AF] mb-1">Número de referencia:</p>
                  <p className="font-semibold text-[#00D084]">{transactionId}</p>
                </div>

                <div className="bg-[#FFF9E6] border border-[#FFE4A3] p-4 rounded-lg text-left">
                  <p className="text-sm text-[#8B6914] mb-2">
                    <strong>Próximos pasos:</strong>
                  </p>
                  <ul className="text-xs text-[#8B6914] space-y-1 list-disc list-inside">
                    <li>Recibirás un correo de confirmación en las próximas horas</li>
                    <li>Nuestro equipo revisará tu solicitud en 2-3 días hábiles</li>
                    <li>Serás contactado para confirmar la activación de tu cuenta</li>
                    <li>Te notificaremos cualquier documento adicional requerido</li>
                  </ul>
                </div>

                <p className="text-xs text-[#9CA3AF]">
                  Si tienes alguna pregunta, no dudes en contactarnos.
                </p>
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 mt-4">
              <Button
                style={{ backgroundColor: "#00D084" }}
                onClick={handleCloseSuccessModal}
                className="w-full"
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
        <h3 className="text-sm mb-4 pb-2 border-b border-[#E5E7EB]">Datos del Usuario</h3>
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
            <Label className="text-xs text-[#5C5C5C]">
              Tipo de Documento <span className="text-[#EF4444]">*</span>
            </Label>
            <Select
              value={formData.tipoDocumento}
              onValueChange={(value) => setFormData({ ...formData, tipoDocumento: value })}
            >
              <SelectTrigger className={`mt-1 transition-all duration-200 ${
                formData.tipoDocumento
                  ? "border-[#00D084] bg-[#F8F8F8]"
                  : "border-[#E5E7EB] bg-[#F8F8F8] hover:border-[#D1D5DB]"
              }`}>
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CC">Cédula de Ciudadanía</SelectItem>
                <SelectItem value="CE">Cédula de Extranjería</SelectItem>
                <SelectItem value="PA">Pasaporte</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-[#9CA3AF] mt-1">Tipo de identificación</p>
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
        <h3 className="text-sm mb-4 pb-2 border-b border-[#E5E7EB]">Datos de la Empresa</h3>
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
            <Label className="text-xs text-[#5C5C5C]">
              Fecha Constitución <span className="text-[#EF4444]">*</span>
            </Label>
            <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left transition-all duration-200 mt-1 ${
                    formData.fechaConstitucion
                      ? "border-[#00D084] bg-[#F8F8F8]"
                      : "border-[#E5E7EB] bg-[#F8F8F8] hover:border-[#D1D5DB]"
                  }`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.fechaConstitucion ? (
                    format(formData.fechaConstitucion, "dd/MM/yyyy", { locale: es })
                  ) : (
                    <span className="text-[#9CA3AF]">DD/MM/YYYY</span>
                  )}
                  {formData.fechaConstitucion && (
                    <Check className="ml-auto h-4 w-4 text-[#00D084]" />
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
            <p className="text-xs text-[#9CA3AF] mt-1">Fecha de constitución legal</p>
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
            <Label className="text-xs text-[#5C5C5C]">
              Actividad Económica <span className="text-[#EF4444]">*</span>
            </Label>
            <Select
              value={formData.actividadEconomica}
              onValueChange={(value) => setFormData({ ...formData, actividadEconomica: value })}
            >
              <SelectTrigger className={`mt-1 transition-all duration-200 ${
                formData.actividadEconomica
                  ? "border-[#00D084] bg-[#F8F8F8]"
                  : "border-[#E5E7EB] bg-[#F8F8F8] hover:border-[#D1D5DB]"
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
                <Check className="h-4 w-4 text-[#00D084]" />
              </div>
            )}
            <p className="text-xs text-[#9CA3AF] mt-1">Código CIIU principal</p>
          </div>

          {/* Municipio/Sede */}
          <div>
            <Label className="text-xs text-[#5C5C5C]">
              Municipio/Sede <span className="text-[#EF4444]">*</span>
            </Label>
            <Popover open={municipioOpen} onOpenChange={setMunicipioOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-between text-left transition-all duration-200 mt-1 ${
                    formData.municipio
                      ? "border-[#00D084] bg-[#F8F8F8]"
                      : "border-[#E5E7EB] bg-[#F8F8F8] hover:border-[#D1D5DB]"
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
            <p className="text-xs text-[#9CA3AF] mt-1">Ciudad principal de operación</p>
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
      <div className="flex items-start gap-3 p-4 bg-[#F8F8F8] rounded-lg border border-[#E5E7EB]">
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
          <p className="text-xs text-[#9CA3AF] mt-1">
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
              style={{ backgroundColor: "#00D084" }}
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
        <Card className="p-8 text-center border-dashed border-2 border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#F8F8F8] flex items-center justify-center">
              <Plus className="w-8 h-8 text-[#9CA3AF]" />
            </div>
            <div>
              <p className="text-[#5C5C5C] mb-1">No hay clientes agregados</p>
              <p className="text-xs text-[#9CA3AF]">Debe agregar al menos un cliente</p>
            </div>
            <Button
              style={{ backgroundColor: "#00D084" }}
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
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
                <Input
                  placeholder="Buscar por nombre, NIT, contacto o email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10 border-[#E5E7EB] bg-[#F8F8F8] focus:border-[#00D084] focus:ring-4 focus:ring-[#00D084]/10 transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#5C5C5C] transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
            <Button
              style={{ backgroundColor: "#00D084" }}
              size="sm"
              onClick={() => setMostrarFormCliente(true)}
              className="w-full md:w-auto"
            >
              <Plus className="w-4 h-4 mr-2" />
              Agregar Cliente
            </Button>
          </div>

          {/* Indicador de resultados */}
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm text-[#5C5C5C]">
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
            <div className="border border-[#E5E7EB] rounded-lg overflow-hidden">
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
                      <TableCell className="hidden lg:table-cell text-sm text-[#5C5C5C]">{cliente.email}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onEditarCliente(cliente.id)}
                            className="hover:bg-[#00D084]/10 hover:text-[#00D084]"
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
                            className="hover:bg-[#EF4444]/10 hover:text-[#EF4444]"
                          >
                            <Trash2 className="w-4 h-4 text-[#EF4444]" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <Card className="p-8 text-center border-dashed border-2 border-[#E5E7EB]">
              <div className="flex flex-col items-center gap-3">
                <AlertCircle className="w-12 h-12 text-[#9CA3AF]" />
                <div>
                  <p className="text-[#5C5C5C] mb-1">No se encontraron resultados</p>
                  <p className="text-xs text-[#9CA3AF]">
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
        <Label className="text-xs text-[#5C5C5C]">
          Nombre del Banco <span className="text-[#EF4444]">*</span>
        </Label>
        <Select
          value={formData.nombreBanco}
          onValueChange={(value) => setFormData({ ...formData, nombreBanco: value })}
        >
          <SelectTrigger className={`mt-1 transition-all duration-200 ${
            formData.nombreBanco
              ? "border-[#00D084] bg-[#F8F8F8]"
              : "border-[#E5E7EB] bg-[#F8F8F8] hover:border-[#D1D5DB]"
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
        <p className="text-xs text-[#9CA3AF] mt-1">Entidad bancaria principal</p>
      </div>

      <div>
        <Label className="text-xs text-[#5C5C5C]">
          Tipo de Cuenta <span className="text-[#EF4444]">*</span>
        </Label>
        <Select
          value={formData.tipoCuenta}
          onValueChange={(value) => setFormData({ ...formData, tipoCuenta: value })}
        >
          <SelectTrigger className={`mt-1 transition-all duration-200 ${
            formData.tipoCuenta
              ? "border-[#00D084] bg-[#F8F8F8]"
              : "border-[#E5E7EB] bg-[#F8F8F8] hover:border-[#D1D5DB]"
          }`}>
            <SelectValue placeholder="Seleccionar tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ahorros">Ahorros</SelectItem>
            <SelectItem value="corriente">Corriente</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-[#9CA3AF] mt-1">Tipo de cuenta bancaria</p>
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
        <Alert className="border-[#00D084]/20 bg-[#00D084]/5">
          <AlertCircle className="h-4 w-4 text-[#00D084]" />
          <AlertDescription className="text-xs text-[#5C5C5C]">
            Esta cuenta será utilizada para los desembolsos de factoring. Asegúrate de que la información sea correcta.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

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
    <div className="space-y-6">
      {/* Documentos */}
      <div className="space-y-4">
        <h3 className="text-sm text-[#5C5C5C]">Documentos Requeridos</h3>
        {documentos.map((doc) => (
          <DocumentoUpload
            key={doc.id}
            documento={doc}
            onUpload={onFileUpload}
            onEliminar={onEliminarDocumento}
          />
        ))}
      </div>

      {/* Resumen */}
      <div className="pt-6 border-t border-[#E5E7EB]">
        <h3 className="text-sm text-[#5C5C5C] mb-4">Resumen de la Solicitud</h3>
        <Card className="p-4 bg-[#F8F8F8]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-[#9CA3AF]">Razón Social</p>
              <p className="text-[#5C5C5C]">{formData.razonSocial || "-"}</p>
            </div>
            <div>
              <p className="text-[#9CA3AF]">NIT</p>
              <p className="text-[#5C5C5C]">{formData.nit || "-"}</p>
            </div>
            <div>
              <p className="text-[#9CA3AF]">Representante Legal</p>
              <p className="text-[#5C5C5C]">{formData.nombreRepresentante || "-"}</p>
            </div>
            <div>
              <p className="text-[#9CA3AF]">Clientes Registrados</p>
              <p className="text-[#5C5C5C]">{formData.clientes?.length || 0}</p>
            </div>
            <div>
              <p className="text-[#9CA3AF]">Banco</p>
              <p className="text-[#5C5C5C]">{formData.nombreBanco || "-"}</p>
            </div>
            <div>
              <p className="text-[#9CA3AF]">Documentos Subidos</p>
              <p className="text-[#5C5C5C]">
                {documentos.filter(d => d.uploaded).length} / {documentos.filter(d => d.requerido).length} requeridos
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Confirmación */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Checkbox
            id="confirmacion"
            checked={formData.confirmacion}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, confirmacion: checked as boolean })
            }
          />
          <Label
            htmlFor="confirmacion"
            className="text-xs text-[#5C5C5C] cursor-pointer"
          >
            Confirmo que la información proporcionada es correcta y verídica
          </Label>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="terminos"
            checked={formData.aceptaTerminos}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, aceptaTerminos: checked as boolean })
            }
          />
          <Label
            htmlFor="terminos"
            className="text-xs text-[#5C5C5C] cursor-pointer"
          >
            He leído y acepto los{" "}
            <a href="#" className="text-[#00D084] underline">
              términos y condiciones
            </a>
          </Label>
        </div>
      </div>

      {(!formData.confirmacion || !formData.aceptaTerminos) && (
        <Alert className="border-[#EF4444]/20 bg-[#FEF2F2]">
          <AlertCircle className="h-4 w-4 text-[#EF4444]" />
          <AlertDescription className="text-xs text-[#EF4444]">
            Debes aceptar la confirmación y los términos para continuar
          </AlertDescription>
        </Alert>
      )}
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
      <Label className="text-xs text-[#5C5C5C]">
        {label} {required && <span className="text-[#EF4444]">*</span>}
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
              ? "border-[#E5E7EB] bg-[#F8F8F8] hover:border-[#D1D5DB] focus:border-[#00D084] focus:ring-4 focus:ring-[#00D084]/10"
              : isValid
              ? "border-[#00D084] bg-[#F8F8F8]"
              : "border-[#EF4444] bg-[#FEF2F2]"
          }`}
        />
        {isValid === true && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Check className="h-4 w-4 text-[#00D084]" />
          </div>
        )}
        {isValid === false && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <AlertCircle className="h-4 w-4 text-[#EF4444]" />
          </div>
        )}
      </div>
      <p className={`text-xs mt-1 ${isValid === false ? "text-[#EF4444]" : "text-[#9CA3AF]"}`}>
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
    <Card className={`p-4 ${documento.uploaded ? "border-[#00D084]" : "border-[#E5E7EB]"}`}>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-sm text-[#5C5C5C]">{documento.nombre}</p>
            {documento.requerido && (
              <Badge variant="outline" className="text-xs border-[#EF4444] text-[#EF4444]">
                Requerido
              </Badge>
            )}
            {documento.uploaded && (
              <CheckCircle2 className="w-4 h-4 text-[#00D084]" />
            )}
          </div>
          <p className="text-xs text-[#9CA3AF] mb-2">
            {documento.tipo} • Máx. {documento.maxSize}MB
          </p>

          {!documento.uploaded ? (
            <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-4 text-center hover:border-[#00D084] transition-all duration-200">
              <input
                type="file"
                id={`file-${documento.id}`}
                className="hidden"
                onChange={handleFileChange}
                accept={documento.tipo === "PDF/JPG/PNG" ? ".pdf,.jpg,.jpeg,.png" : documento.tipo === "PDF/Excel" ? ".pdf,.xlsx,.xls" : "*"}
              />
              <label htmlFor={`file-${documento.id}`} className="cursor-pointer">
                <Upload className="w-6 h-6 text-[#9CA3AF] mx-auto mb-2" />
                <p className="text-xs text-[#5C5C5C]">
                  Arrastra el archivo o{" "}
                  <span className="text-[#00D084] underline">selecciona</span>
                </p>
              </label>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-[#00D084]" />
                <p className="text-xs text-[#5C5C5C]">{documento.archivo?.name}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEliminar(documento.id)}
                  className="ml-auto"
                >
                  <Trash2 className="w-4 h-4 text-[#EF4444]" />
                </Button>
              </div>
              {documento.progress < 100 && (
                <Progress value={documento.progress} className="h-1" />
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}