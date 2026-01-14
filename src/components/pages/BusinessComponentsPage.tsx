import { ComponentShowcase } from "../ui/component-showcase";
import { AuditLogViewer } from "../business/AuditLogViewer";
import { TestimonialsCarousel } from "../business/TestimonialsCarousel";
import { ContactForm } from "../business/ContactForm";
import { BookingCalendar } from "../business/BookingCalendar";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

/**
 * BusinessComponentsPage - Showcase de componentes de negocio de alta prioridad
 * 
 * Componentes implementados:
 * 1. Audit Log Viewer - Sistema de auditoría y tracking
 * 2. Testimonials Carousel - Carrusel de testimonios de clientes
 * 3. Contact Form - Formulario de contacto profesional
 * 4. Booking Calendar - Sistema de agendamiento de citas
 * 
 * Ubicación: /components/pages/BusinessComponentsPage.tsx
 * Estado: ✅ Completado - 4/4 componentes de alta prioridad
 */

export function BusinessComponentsPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="font-bold">Business Components</h1>
          <Badge className="bg-green-500 hover:bg-green-600 text-white">
            ALTA PRIORIDAD
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Componentes empresariales esenciales para aplicaciones profesionales.
          Incluye sistemas de auditoría, testimonios, formularios de contacto y reservas.
        </p>
      </div>

      <Separator />

      {/* 1. Audit Log Viewer */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Audit Log Viewer</h2>
            <Badge variant="secondary">Data Management</Badge>
          </div>
          <p className="text-muted-foreground">
            Sistema completo de visualización de logs de auditoría con filtros,
            búsqueda y estadísticas. Ideal para compliance y debugging.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <AuditLogViewer />
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Tabla con filas alternadas (striped) sin bordes</li>
            <li>Filtrado por estado (Success, Warning, Error)</li>
            <li>Búsqueda en tiempo real por usuario, acción o recurso</li>
            <li>Tarjetas de resumen con contadores por estado</li>
            <li>Iconos contextuales para cada tipo de acción</li>
            <li>Timestamps precisos e información de IP</li>
            <li>Exportación de datos (placeholder)</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* 2. Testimonials Carousel */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Testimonials Carousel</h2>
            <Badge variant="secondary">Social Proof</Badge>
          </div>
          <p className="text-muted-foreground">
            Carrusel elegante de testimonios de clientes con sistema de ratings,
            avatares y navegación intuitiva. Perfecto para landing pages.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <TestimonialsCarousel />
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Navegación con flechas y dots indicator</li>
            <li>Sistema de ratings con estrellas (1-5)</li>
            <li>Avatares con iniciales automáticas si no hay imagen</li>
            <li>Diseño responsive con quote icon decorativo</li>
            <li>Información de autor: nombre, rol, empresa y fecha</li>
            <li>Contador de testimonios (X de Y)</li>
            <li>Transiciones suaves entre testimonios</li>
            <li>Auto-play opcional (configurable)</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* 3. Contact Form */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Contact Form</h2>
            <Badge variant="secondary">Lead Generation</Badge>
          </div>
          <p className="text-muted-foreground">
            Formulario de contacto profesional con validación completa,
            campos personalizables y estados de éxito/error.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 flex justify-center">
          <ContactForm />
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Validación en tiempo real de campos requeridos</li>
            <li>Validación de formato de email</li>
            <li>Campos configurables (empresa, asunto, teléfono)</li>
            <li>Select con opciones predefinidas de asunto</li>
            <li>Checkbox de términos y condiciones</li>
            <li>Estados de carga (submitting) con feedback visual</li>
            <li>Pantalla de éxito con auto-reset</li>
            <li>Mensajes de error específicos por campo</li>
            <li>Diseño responsive en dos columnas</li>
            <li>Badge de tiempo de respuesta (24h)</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* 4. Booking Calendar */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Booking Calendar</h2>
            <Badge variant="secondary">Scheduling</Badge>
          </div>
          <p className="text-muted-foreground">
            Sistema completo de agendamiento de citas con calendario interactivo,
            selección de horarios y confirmación visual.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <BookingCalendar />
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Calendario interactivo con shadcn/ui Calendar</li>
            <li>Bloqueo automático de fines de semana y fechas pasadas</li>
            <li>Grid de horarios disponibles con estados (disponible/ocupado)</li>
            <li>Select de servicios con duración visible</li>
            <li>Tarjeta de resumen con todos los detalles</li>
            <li>Flujo de 3 pasos: fecha → hora → confirmación</li>
            <li>Pantalla de confirmación exitosa con auto-reset</li>
            <li>Layout responsive en dos columnas</li>
            <li>Badges de progreso (Paso X/3)</li>
            <li>Formato de fecha localizado en español</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* Implementation Notes */}
      <section className="bg-primary/5 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold">📋 Notas de Implementación</h3>
        <div className="space-y-3 text-sm">
          <p>
            <strong>Ubicación:</strong> Todos los componentes están en{" "}
            <code className="bg-muted px-2 py-1 rounded">/components/business/</code>
          </p>
          <p>
            <strong>Imports necesarios:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ AuditLogViewer }"} from "./components/business/AuditLogViewer"
              </code>
            </li>
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ TestimonialsCarousel }"} from "./components/business/TestimonialsCarousel"
              </code>
            </li>
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ ContactForm }"} from "./components/business/ContactForm"
              </code>
            </li>
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ BookingCalendar }"} from "./components/business/BookingCalendar"
              </code>
            </li>
          </ul>
          <p>
            <strong>Compatibilidad:</strong> Todos los componentes usan únicamente
            componentes oficiales de shadcn/ui y siguen los estándares de Guidelines.md
            (tipografía Satoshi, tokens de color, sin estilos inline).
          </p>
          <p>
            <strong>Estado:</strong> ✅ Fase 1 completada - 4 componentes de ALTA PRIORIDAD
            implementados y documentados.
          </p>
        </div>
      </section>
    </div>
  );
}
