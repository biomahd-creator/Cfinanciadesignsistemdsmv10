import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

/**
 * 🔒 BUSINESS PATTERN - Testimonials Carousel
 * 
 * Carrusel de testimonios de clientes con diseño profesional
 * Incluye navegación, ratings, avatares y diseño responsive
 * 
 * Ubicación: /components/business/TestimonialsCarousel.tsx
 * Categoría: Business Components - Alta Prioridad
 * Uso: Landing pages, secciones de confianza, prueba social
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
  content: string;
  date?: string;
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "María Rodríguez",
    role: "CEO",
    company: "TechCorp Solutions",
    rating: 5,
    content: "La plataforma de factoring ha transformado completamente nuestra gestión financiera. Procesamos operaciones en minutos que antes tomaban días. El soporte técnico es excepcional.",
    date: "Enero 2025"
  },
  {
    id: "2",
    name: "Carlos Mendoza",
    role: "CFO",
    company: "Inversiones Global",
    rating: 5,
    content: "Excelente herramienta para optimizar el flujo de caja. La interfaz es intuitiva y el proceso de endoso electrónico es muy seguro. Definitivamente recomendado para empresas de cualquier tamaño.",
    date: "Diciembre 2024"
  },
  {
    id: "3",
    name: "Ana Jiménez",
    role: "Directora Financiera",
    company: "Comercial del Sur",
    rating: 5,
    content: "Llevamos 6 meses usando la plataforma y hemos mejorado nuestra liquidez en un 40%. El equipo de CFinancia nos acompañó en todo el proceso de implementación.",
    date: "Noviembre 2024"
  },
  {
    id: "4",
    name: "Roberto Vargas",
    role: "Gerente General",
    company: "Distribuidora Norte",
    rating: 4,
    content: "Sistema robusto y confiable. Nos ha permitido acceder a capital de trabajo de forma rápida y transparente. La integración con RADIAN fue muy sencilla.",
    date: "Octubre 2024"
  },
  {
    id: "5",
    name: "Laura Martínez",
    role: "Controller",
    company: "Grupo Empresarial ABC",
    rating: 5,
    content: "La mejor solución de factoring que hemos probado. Reportes detallados, seguimiento en tiempo real y excelente relación costo-beneficio. Muy satisfechos con el servicio.",
    date: "Septiembre 2024"
  }
];

export function TestimonialsCarousel({ 
  testimonials = mockTestimonials,
  autoPlay = false,
  interval = 5000
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-slate-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
          Testimonios
        </Badge>
        <h2 className="font-bold">Lo que dicen nuestros clientes</h2>
        <p className="text-muted-foreground">
          Empresas que confían en nuestra plataforma de factoring
        </p>
      </div>

      {/* Main Testimonial Card */}
      <Card className="relative overflow-hidden border-2">
        <CardContent className="p-8 md:p-12">
          {/* Quote Icon */}
          <div className="absolute top-6 right-6 opacity-10">
            <Quote className="h-24 w-24 text-primary" />
          </div>

          <div className="relative space-y-6">
            {/* Rating */}
            <div className="flex justify-center">
              {renderStars(currentTestimonial.rating)}
            </div>

            {/* Content */}
            <blockquote className="text-center text-lg leading-relaxed">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <Avatar className="h-16 w-16">
                {currentTestimonial.avatar ? (
                  <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                ) : (
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {getInitials(currentTestimonial.name)}
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="text-center">
                <p className="font-semibold">{currentTestimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {currentTestimonial.role} en {currentTestimonial.company}
                </p>
                {currentTestimonial.date && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {currentTestimonial.date}
                  </p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="h-10 w-10 rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="h-10 w-10 rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Counter */}
      <div className="text-center text-sm text-muted-foreground">
        {currentIndex + 1} de {testimonials.length}
      </div>
    </div>
  );
}
