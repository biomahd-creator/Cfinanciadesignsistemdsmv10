import { ComponentShowcase } from "../components/ui/component-showcase";
import { ComparisonTable } from "../components/patterns/ComparisonTable";

const code = `import { ComparisonTable } from "@/components/patterns/ComparisonTable";

export function ComparisonTableDemo() {
  return (
    <ComparisonTable 
      plans={[
        { id: "p1", name: "Start", price: "$0", description: "Free plan" },
        { id: "p2", name: "Growth", price: "$49", description: "Growing teams", isPopular: true },
        { id: "p3", name: "Scale", price: "$99", description: "Large orgs" },
      ]}
      features={[
        {
          category: "Core Features",
          items: [
            { name: "Users", values: { p1: "1", p2: "5", p3: "Unlimited" } },
            { name: "Storage", values: { p1: "1GB", p2: "10GB", p3: "1TB" } },
          ]
        },
        {
          category: "Support",
          items: [
            { name: "Email Support", values: { p1: true, p2: true, p3: true } },
            { name: "24/7 Phone", values: { p1: false, p2: true, p3: true } },
          ]
        }
      ]}
    />
  );
}`;

export function ComparisonTablePage() {
  return (
    <ComponentShowcase
      title="Comparison Table"
      description="Tabla comparativa de características entre planes o productos."
      category="Business Pattern"
      preview={
        <ComparisonTable 
          plans={[
            { id: "p1", name: "Start", price: "$0", description: "Free plan" },
            { id: "p2", name: "Growth", price: "$49", description: "Growing teams", isPopular: true },
            { id: "p3", name: "Scale", price: "$99", description: "Large orgs" },
          ]}
          features={[
            {
              category: "Core Features",
              items: [
                { name: "Users", values: { p1: "1", p2: "5", p3: "Unlimited" } },
                { name: "Storage", values: { p1: "1GB", p2: "10GB", p3: "1TB" } },
              ]
            },
            {
              category: "Support",
              items: [
                { name: "Email Support", values: { p1: true, p2: true, p3: true } },
                { name: "24/7 Phone", values: { p1: false, p2: true, p3: true } },
              ]
            }
          ]}
        />
      }
      code={code}
    />
  );
}
