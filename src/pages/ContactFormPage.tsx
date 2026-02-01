import { ComponentShowcase } from "../components/ui/component-showcase";
import { ContactForm } from "../components/widgets/ContactForm";

const contactFormCode = `import { ContactForm } from "@/components/widgets/ContactForm";

export function ContactFormDemo() {
  return <ContactForm />;
}`;

export function ContactFormPage() {
  return (
    <ComponentShowcase
      title="Contact Form"
      description="Formulario de contacto profesional con validación y estados."
      category="Business Component"
      preview={
        <div className="w-full max-w-2xl border rounded-lg p-6 bg-card">
          <ContactForm />
        </div>
      }
      code={contactFormCode}
      usage="Generación de leads o soporte al cliente con validación integrada."
    />
  );
}
