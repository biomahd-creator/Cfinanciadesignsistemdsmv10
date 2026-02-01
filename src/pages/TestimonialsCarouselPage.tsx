import { ComponentShowcase } from "../components/ui/component-showcase";
import { TestimonialsCarousel } from "../components/widgets/TestimonialsCarousel";

const testimonialsCode = `import { TestimonialsCarousel } from "@/components/widgets/TestimonialsCarousel";

export function TestimonialsDemo() {
  return <TestimonialsCarousel />;
}`;

export function TestimonialsCarouselPage() {
  return (
    <ComponentShowcase
      title="Testimonials Carousel"
      description="Carrusel de testimonios con ratings, avatares y navegación."
      category="Business Component"
      preview={
        <div className="w-full max-w-4xl border rounded-lg p-6 bg-card">
          <TestimonialsCarousel />
        </div>
      }
      code={testimonialsCode}
      usage="Componente de prueba social para landing pages o secciones de reseñas."
    />
  );
}
