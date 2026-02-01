import { ComponentShowcase } from "../components/ui/component-showcase";
import { PricingTable } from "../components/patterns/PricingTable";

const code = `import { PricingTable } from "@/components/patterns/PricingTable";

export function PricingTableDemo() {
  return (
    <PricingTable 
      plans={[
        { 
          id: "basic", 
          name: "Básico", 
          description: "Para pequeñas empresas", 
          price: { monthly: "$50k", yearly: "$500k" },
          features: ["5 Facturas/mes", "Soporte básico"],
          ctaText: "Empezar"
        },
        { 
          id: "pro", 
          name: "Pro", 
          description: "Para empresas en crecimiento", 
          price: { monthly: "$150k", yearly: "$1.5M" },
          features: ["Facturas ilimitadas", "Soporte 24/7", "API Access"],
          isPopular: true,
          ctaText: "Mejor Valor"
        },
        { 
          id: "enterprise", 
          name: "Enterprise", 
          description: "Soluciones a medida", 
          price: { monthly: "Custom", yearly: "Custom" },
          features: ["Todo ilimitado", "Gerente de cuenta"],
          ctaText: "Contactar"
        }
      ]}
    />
  );
}`;

export function PricingTablePage() {
  return (
    <ComponentShowcase
      title="Pricing Table"
      description="Tabla de precios para planes y suscripciones."
      category="Business Pattern"
      preview={
        <PricingTable 
          plans={[
            { 
              id: "basic", 
              name: "Básico", 
              description: "Para pequeñas empresas", 
              price: { monthly: "$50k", yearly: "$500k" },
              features: ["5 Facturas/mes", "Soporte básico"],
              ctaText: "Empezar"
            },
            { 
              id: "pro", 
              name: "Pro", 
              description: "Para empresas en crecimiento", 
              price: { monthly: "$150k", yearly: "$1.5M" },
              features: ["Facturas ilimitadas", "Soporte 24/7", "API Access"],
              isPopular: true,
              ctaText: "Mejor Valor"
            },
            { 
              id: "enterprise", 
              name: "Enterprise", 
              description: "Soluciones a medida", 
              price: { monthly: "Custom", yearly: "Custom" },
              features: ["Todo ilimitado", "Gerente de cuenta"],
              ctaText: "Contactar"
            }
          ]}
        />
      }
      code={code}
    />
  );
}
