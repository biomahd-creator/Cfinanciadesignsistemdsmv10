import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { Check, Info } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
  features: string[];
  limitations?: string[];
  isPopular?: boolean;
  ctaText: string;
  onCtaClick?: () => void;
}

interface PricingTableProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
  className?: string;
}

export function PricingTable({
  plans,
  title = "Planes Flexibles",
  description = "Elige el plan que mejor se adapte a tus necesidades de factoring.",
  className,
}: PricingTableProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className={cn("py-12", className)}>
      <div className="text-center mb-10 space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        
        <div className="flex items-center justify-center gap-4 mt-6">
          <Label htmlFor="billing-toggle" className={cn("cursor-pointer", !isYearly && "font-bold")}>
            Mensual
          </Label>
          <Switch
            id="billing-toggle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <Label htmlFor="billing-toggle" className={cn("cursor-pointer", isYearly && "font-bold")}>
            Anual
            <Badge variant="secondary" className="ml-2 text-primary-600 bg-primary-50">
              Ahorra 20%
            </Badge>
          </Label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {plans.map((plan) => (
          <Card 
            key={plan.id} 
            className={cn(
              "relative flex flex-col transition-all hover:shadow-lg",
              plan.isPopular ? "border-primary shadow-md scale-105 z-10" : "border-border"
            )}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary hover:bg-primary px-4 py-1 text-sm shadow-sm">
                  Más Popular
                </Badge>
              </div>
            )}

            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-muted-foreground ml-2">
                  /{isYearly ? "año" : "mes"}
                </span>
              </div>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                
                {plan.limitations?.map((limitation, i) => (
                  <div key={i} className="flex items-start gap-2 text-muted-foreground opacity-70">
                    <Info className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="text-sm">{limitation}</span>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button 
                className="w-full" 
                variant={plan.isPopular ? "default" : "outline"}
                onClick={plan.onCtaClick}
              >
                {plan.ctaText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
