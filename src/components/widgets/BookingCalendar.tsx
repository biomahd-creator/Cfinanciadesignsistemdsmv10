import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Mail,
  Phone,
  CheckCircle,
  X
} from "lucide-react";

/**
 * 🔒 BUSINESS PATTERN - Booking Calendar
 * 
 * Sistema de reserva de citas con calendario interactivo
 * Incluye selección de fecha, horarios disponibles y confirmación
 * 
 * Ubicación: /components/widgets/BookingCalendar.tsx
 * Categoría: Business Components - Alta Prioridad
 * Uso: Agendamiento de citas, reservas, scheduling
 */

interface TimeSlot {
  time: string;
  available: boolean;
}

interface BookingCalendarProps {
  onBookingConfirm?: (booking: BookingData) => void;
  businessHours?: { start: string; end: string };
  blockedDates?: Date[];
}

export interface BookingData {
  date: Date;
  time: string;
  service: string;
  duration: string;
  name?: string;
  email?: string;
  phone?: string;
}

const services = [
  { value: "demo", label: "Demo Plataforma", duration: "30 min" },
  { value: "consultoria", label: "Consultoría Financiera", duration: "60 min" },
  { value: "soporte", label: "Soporte Técnico", duration: "45 min" },
  { value: "asesoria", label: "Asesoría Comercial", duration: "30 min" },
];

const generateTimeSlots = (date: Date | undefined): TimeSlot[] => {
  if (!date) return [];
  
  const slots: TimeSlot[] = [];
  const dayOfWeek = date.getDay();
  
  // Weekend - no availability
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return slots;
  }
  
  // Generate slots from 9 AM to 5 PM
  for (let hour = 9; hour < 17; hour++) {
    ["00", "30"].forEach(minutes => {
      const time = `${hour.toString().padStart(2, '0')}:${minutes}`;
      // Simulate some slots being taken
      const available = Math.random() > 0.3;
      slots.push({ time, available });
    });
  }
  
  return slots;
};

export function BookingCalendar({ 
  onBookingConfirm,
  blockedDates = []
}: BookingCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [step, setStep] = useState<"date" | "time" | "confirm">("date");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const timeSlots = generateTimeSlots(date);
  const selectedServiceData = services.find(s => s.value === selectedService);

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    setSelectedTime("");
    if (newDate) {
      setStep("time");
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirmBooking = () => {
    if (date && selectedTime && selectedService) {
      const bookingData: BookingData = {
        date,
        time: selectedTime,
        service: selectedService,
        duration: selectedServiceData?.duration || "30 min"
      };
      
      setBookingConfirmed(true);
      
      if (onBookingConfirm) {
        onBookingConfirm(bookingData);
      }

      // Reset after 5 seconds
      setTimeout(() => {
        setDate(undefined);
        setSelectedTime("");
        setSelectedService("");
        setStep("date");
        setBookingConfirmed(false);
      }, 5000);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  if (bookingConfirmed && date) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="pt-12 pb-12">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">¡Cita Confirmada!</h3>
              <p className="text-muted-foreground">
                Tu reserva ha sido confirmada exitosamente
              </p>
            </div>
            <Card className="border-2 border-green-200 bg-green-50/50 max-w-md w-full">
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-5 w-5 text-green-600" />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Fecha</p>
                    <p className="font-semibold capitalize">{formatDate(date)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Hora</p>
                    <p className="font-semibold">{selectedTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-green-600" />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Servicio</p>
                    <p className="font-semibold">{selectedServiceData?.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground">
              Recibirás un email de confirmación con los detalles
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              Agendar Cita
            </CardTitle>
            <CardDescription>
              Selecciona fecha, hora y tipo de servicio
            </CardDescription>
          </div>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
            {step === "date" && "Paso 1/3"}
            {step === "time" && "Paso 2/3"}
            {step === "confirm" && "Paso 3/3"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Calendar */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Selecciona una fecha</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                disabled={(date) => {
                  const day = date.getDay();
                  const isWeekend = day === 0 || day === 6;
                  const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
                  const isBlocked = blockedDates.some(
                    blocked => blocked.toDateString() === date.toDateString()
                  );
                  return isWeekend || isPast || isBlocked;
                }}
                className="rounded-md border w-full"
              />
              <p className="text-xs text-muted-foreground mt-2">
                * Fines de semana no disponibles
              </p>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <h3 className="font-semibold">Tipo de servicio</h3>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  {services.map(service => (
                    <SelectItem key={service.value} value={service.value}>
                      <div className="flex items-center justify-between gap-3">
                        <span>{service.label}</span>
                        <Badge variant="secondary" className="ml-2">
                          {service.duration}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Right Column - Time Slots & Confirmation */}
          <div className="space-y-4">
            {date ? (
              <>
                <div>
                  <h3 className="font-semibold mb-3">Horarios disponibles</h3>
                  <p className="text-sm text-muted-foreground mb-3 capitalize">
                    {formatDate(date)}
                  </p>
                  
                  {timeSlots.length === 0 ? (
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <p className="text-muted-foreground">
                          No hay horarios disponibles para esta fecha
                        </p>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 max-h-96 overflow-y-auto">
                      {timeSlots.map(slot => (
                        <Button
                          key={slot.time}
                          variant={selectedTime === slot.time ? "default" : "outline"}
                          size="sm"
                          disabled={!slot.available}
                          onClick={() => handleTimeSelect(slot.time)}
                          className="w-full"
                        >
                          {slot.time}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Summary Card */}
                {selectedTime && selectedService && (
                  <Card className="border-2 border-primary/20 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="text-lg">Resumen de la cita</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CalendarIcon className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Fecha</p>
                          <p className="font-medium capitalize">{formatDate(date)}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Hora</p>
                          <p className="font-medium">{selectedTime}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <User className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Servicio</p>
                          <p className="font-medium">{selectedServiceData?.label}</p>
                          <Badge variant="secondary" className="mt-1">
                            {selectedServiceData?.duration}
                          </Badge>
                        </div>
                      </div>

                      <Button 
                        className="w-full gap-2 mt-4"
                        onClick={handleConfirmBooking}
                      >
                        <CheckCircle className="h-4 w-4" />
                        Confirmar Cita
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </>
            ) : (
              <Card className="bg-muted/50 h-full flex items-center justify-center">
                <CardContent className="pt-6 text-center">
                  <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">
                    Selecciona una fecha para ver horarios disponibles
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
