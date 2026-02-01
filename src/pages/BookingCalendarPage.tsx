import { ComponentShowcase } from "../components/ui/component-showcase";
import { BookingCalendar } from "../components/widgets/BookingCalendar";

const bookingCalendarCode = `import { BookingCalendar } from "@/components/widgets/BookingCalendar";

export function BookingCalendarDemo() {
  return <BookingCalendar />;
}`;

export function BookingCalendarPage() {
  return (
    <ComponentShowcase
      title="Booking Calendar"
      description="Sistema de agendamiento de citas con calendario y horarios."
      category="Business Component"
      preview={
        <div className="w-full max-w-4xl border rounded-lg p-6 bg-card">
          <BookingCalendar />
        </div>
      }
      code={bookingCalendarCode}
      usage="Permite a los usuarios seleccionar fechas y horas disponibles para citas."
    />
  );
}
