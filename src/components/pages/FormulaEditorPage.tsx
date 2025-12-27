import { ComponentShowcase } from "../ui/component-showcase";
import { FormulaEditor } from "../advanced/FormulaEditor";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calculator, Sigma, TrendingUp } from "lucide-react";

export function FormulaEditorPage() {
  return (
    <ComponentShowcase
      title="Formula Editor"
      description="A spreadsheet-like formula editor with function autocomplete, syntax validation, and cell references. Perfect for financial calculators, data analysis tools, and spreadsheet applications."
      category="Rich Editors"
      preview={
        <div className="space-y-6 w-full max-w-3xl mx-auto">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-5 h-5" />
              <h3 className="text-lg">Revenue Calculator</h3>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Unit Price</label>
                  <input type="number" defaultValue="99.99" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Units Sold</label>
                  <input type="number" defaultValue="1250" className="w-full p-2 border rounded-md" />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-2">Formula</label>
                <FormulaEditor 
                  value="=A1 * B1"
                  placeholder="Enter formula..."
                />
              </div>
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Result</p>
                <p className="text-2xl">$124,987.50</p>
              </div>
            </div>
          </Card>
        </div>
      }
      code={`import { FormulaEditor } from "@/components/advanced/FormulaEditor";

<FormulaEditor 
  value="=SUM(A1:A10)"
  onChange={(value) => console.log(value)}
  placeholder="Enter formula..."
/>`}
      usage="Formula Editor provides Excel-like formula capabilities for web applications. It supports cell references, mathematical operations, and built-in functions, making it ideal for financial tools, data analytics, and custom spreadsheet features."
      usageCode={`import { FormulaEditor } from "@/components/advanced/FormulaEditor";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function FinancialCalculator() {
  const [formula, setFormula] = useState("=SUM(A1:A12)");
  const [result, setResult] = useState(0);
  
  const calculateFormula = () => {
    // Parse and evaluate formula
    const value = evaluateFormula(formula);
    setResult(value);
  };
  
  return (
    <Card className="p-6">
      <h3>Annual Revenue Calculator</h3>
      <FormulaEditor 
        value={formula}
        onChange={setFormula}
        onEnter={calculateFormula}
      />
      <p>Result: {result}</p>
    </Card>
  );
}`}
      props={[
        {
          name: "value",
          type: "string",
          default: '""',
          description: "Current formula value",
          required: false,
        },
        {
          name: "onChange",
          type: "(value: string) => void",
          default: "undefined",
          description: "Callback when formula changes",
          required: false,
        },
        {
          name: "placeholder",
          type: "string",
          default: '"Enter formula..."',
          description: "Placeholder text",
          required: false,
        },
        {
          name: "functions",
          type: "string[]",
          default: '["SUM", "AVERAGE", "COUNT", "MAX", "MIN"]',
          description: "Available functions for autocomplete",
          required: false,
        },
        {
          name: "onEnter",
          type: "() => void",
          default: "undefined",
          description: "Callback when Enter key is pressed",
          required: false,
        },
        {
          name: "showSuggestions",
          type: "boolean",
          default: "true",
          description: "Show function suggestions",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Sales Commission Calculator",
          description: "Calculate sales commissions with formulas",
          preview: (
            <Card className="p-6 w-full">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5" />
                <h3 className="text-lg">Commission Calculator</h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Sales Amount</label>
                    <input type="number" defaultValue="50000" className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Base Rate (%)</label>
                    <input type="number" defaultValue="5" className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Bonus (%)</label>
                    <input type="number" defaultValue="2" className="w-full p-2 border rounded-md" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Commission Formula</label>
                  <FormulaEditor 
                    value="=A1 * (B1 + C1) / 100"
                    placeholder="Enter commission formula..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Base Commission</p>
                    <p className="text-xl">$2,500</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Total Commission</p>
                    <p className="text-xl">$3,500</p>
                  </div>
                </div>
              </div>
            </Card>
          ),
          code: `<FormulaEditor 
  value="=A1 * (B1 + C1) / 100"
  onChange={setFormula}
  onEnter={calculateCommission}
/>`,
        },
        {
          title: "Budget Planner",
          description: "Monthly budget with SUM formulas",
          preview: (
            <Card className="p-6 w-full">
              <h3 className="text-lg mb-4">Monthly Budget</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 border rounded-lg">
                    <p className="text-muted-foreground mb-1">Rent</p>
                    <p className="text-lg">$1,500</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="text-muted-foreground mb-1">Utilities</p>
                    <p className="text-lg">$300</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="text-muted-foreground mb-1">Food</p>
                    <p className="text-lg">$800</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="text-muted-foreground mb-1">Transportation</p>
                    <p className="text-lg">$400</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Total Expenses Formula</label>
                  <FormulaEditor 
                    value="=SUM(A1:D1)"
                    placeholder="=SUM(...)"
                  />
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>Total Monthly Expenses</span>
                    <span className="text-2xl">$3,000</span>
                  </div>
                </div>
              </div>
            </Card>
          ),
          code: `<FormulaEditor 
  value="=SUM(A1:D1)"
  onChange={setTotalFormula}
  functions={["SUM", "AVERAGE"]}
/>`,
        },
        {
          title: "Grade Calculator",
          description: "Calculate weighted average grades",
          preview: (
            <Card className="p-6 w-full">
              <div className="flex items-center gap-2 mb-4">
                <Sigma className="w-5 h-5" />
                <h3 className="text-lg">Final Grade Calculator</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <span>Assignment</span>
                    <span>Score</span>
                    <span>Weight</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 items-center">
                    <span className="text-sm">Midterm</span>
                    <input type="number" defaultValue="85" className="p-2 border rounded-md" />
                    <span className="text-sm">30%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 items-center">
                    <span className="text-sm">Final Exam</span>
                    <input type="number" defaultValue="92" className="p-2 border rounded-md" />
                    <span className="text-sm">40%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 items-center">
                    <span className="text-sm">Assignments</span>
                    <input type="number" defaultValue="88" className="p-2 border rounded-md" />
                    <span className="text-sm">30%</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Weighted Average Formula</label>
                  <FormulaEditor 
                    value="=(A1*0.3 + A2*0.4 + A3*0.3)"
                    placeholder="Enter grade formula..."
                  />
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>Final Grade</span>
                    <span className="text-2xl">89.1 (B+)</span>
                  </div>
                </div>
              </div>
            </Card>
          ),
          code: `<FormulaEditor 
  value="=(A1*0.3 + A2*0.4 + A3*0.3)"
  onChange={setGradeFormula}
/>`,
        },
        {
          title: "Investment Returns",
          description: "Calculate ROI and compound interest",
          preview: (
            <Card className="p-6 w-full">
              <h3 className="text-lg mb-4">Investment Calculator</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Initial Investment</label>
                    <input type="number" defaultValue="10000" className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Annual Return (%)</label>
                    <input type="number" defaultValue="8" className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Years</label>
                    <input type="number" defaultValue="10" className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Monthly Contribution</label>
                    <input type="number" defaultValue="500" className="w-full p-2 border rounded-md" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Future Value Formula</label>
                  <FormulaEditor 
                    value="=A1 * (1 + B1/100) ^ C1 + D1 * 12 * C1"
                    placeholder="Enter investment formula..."
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-muted rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-1">Total Invested</p>
                    <p className="text-lg">$70,000</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-1">Total Returns</p>
                    <p className="text-lg">$51,589</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-1">Final Value</p>
                    <p className="text-lg">$121,589</p>
                  </div>
                </div>
              </div>
            </Card>
          ),
          code: `<FormulaEditor 
  value="=A1 * (1 + B1/100) ^ C1 + D1 * 12 * C1"
  onChange={setInvestmentFormula}
/>`,
        },
        {
          title: "Pricing Calculator",
          description: "Dynamic pricing with markup and discount",
          preview: (
            <Card className="p-6 w-full">
              <h3 className="text-lg mb-4">Product Pricing</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Cost</label>
                    <input type="number" defaultValue="50" className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Markup (%)</label>
                    <input type="number" defaultValue="100" className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Discount (%)</label>
                    <input type="number" defaultValue="15" className="w-full p-2 border rounded-md" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Price Formula</label>
                  <FormulaEditor 
                    value="=A1 * (1 + B1/100) * (1 - C1/100)"
                    placeholder="Enter pricing formula..."
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Base Price</p>
                    <p className="text-lg">$100.00</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Discount</p>
                    <p className="text-lg text-red-500">-$15.00</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Final Price</p>
                    <p className="text-lg">$85.00</p>
                  </div>
                </div>
              </div>
            </Card>
          ),
          code: `<FormulaEditor 
  value="=A1 * (1 + B1/100) * (1 - C1/100)"
  onChange={setPricingFormula}
  functions={["MAX", "MIN", "ROUND"]}
/>`,
        },
      ]}
    />
  );
}