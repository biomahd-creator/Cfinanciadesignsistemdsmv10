import React from "react";
import { cn } from "../../lib/utils";
import { Check, X, Minus } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export interface ComparisonFeature {
  name: string;
  values: {
    [key: string]: boolean | string | React.ReactNode;
  };
  tooltip?: string;
}

export interface ComparisonPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  isPopular?: boolean;
  buttonText?: string;
  onAction?: () => void;
}

interface ComparisonTableProps extends React.HTMLAttributes<HTMLDivElement> {
  plans: ComparisonPlan[];
  features: {
    category: string;
    items: ComparisonFeature[];
  }[];
}

export function ComparisonTable({ plans, features, className, ...props }: ComparisonTableProps) {
  const renderValue = (value: boolean | string | React.ReactNode) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="mx-auto h-5 w-5 text-primary" />
      ) : (
        <Minus className="mx-auto h-5 w-5 text-muted-foreground/30" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className={cn("w-full overflow-x-auto", className)} {...props}>
      <table className="w-full min-w-[700px] border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left w-1/4 min-w-[200px]" />
            {plans.map((plan) => (
              <th
                key={plan.id}
                className={cn(
                  "p-4 text-center align-top relative",
                  plan.isPopular && "bg-muted/30 rounded-t-xl border-t border-x border-primary/20"
                )}
              >
                {plan.isPopular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground hover:bg-primary">
                    Popular
                  </Badge>
                )}
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground min-h-[40px]">
                    {plan.description}
                  </p>
                  <Button
                    variant={plan.isPopular ? "default" : "outline"}
                    className="w-full mt-4"
                    onClick={plan.onAction}
                  >
                    {plan.buttonText || "Seleccionar"}
                  </Button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((section, sectionIndex) => (
            <React.Fragment key={section.category}>
              <tr>
                <td
                  colSpan={plans.length + 1}
                  className="bg-muted/50 p-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider text-left pl-4"
                >
                  {section.category}
                </td>
              </tr>
              {section.items.map((feature, featureIndex) => (
                <tr
                  key={feature.name}
                  className={cn(
                    "border-b transition-colors hover:bg-muted/10",
                    featureIndex === section.items.length - 1 && "border-none"
                  )}
                >
                  <td className="p-4 text-sm font-medium text-left">
                     <div className="flex items-center gap-1">
                        {feature.name}
                        {/* Tooltip implementation can go here */}
                     </div>
                  </td>
                  {plans.map((plan) => (
                    <td
                      key={`${plan.id}-${feature.name}`}
                      className={cn(
                        "p-4 text-center align-middle",
                        plan.isPopular && "bg-muted/30 border-x border-primary/20"
                      )}
                    >
                      {renderValue(feature.values[plan.id])}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
          {/* Bottom border for popular column */}
           <tr>
             <td />
             {plans.map((plan) => (
               <td 
                 key={`${plan.id}-footer`} 
                 className={cn("p-0 h-2", plan.isPopular && "bg-muted/30 rounded-b-xl border-b border-x border-primary/20")} 
               />
             ))}
           </tr>
        </tbody>
      </table>
    </div>
  );
}
