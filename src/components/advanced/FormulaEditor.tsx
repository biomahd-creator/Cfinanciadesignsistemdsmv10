import { useState } from "react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";

interface FormulaEditorProps {
  value?: string;
  onChange?: (value: string) => void;
}

export function FormulaEditor({ value = "", onChange }: FormulaEditorProps) {
  const [latex, setLatex] = useState(value);

  const handleChange = (newValue: string) => {
    setLatex(newValue);
    onChange?.(newValue);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(latex);
  };

  const insertSymbol = (symbol: string) => {
    handleChange(latex + symbol);
  };

  const commonSymbols = [
    { label: "Sum", value: "\\sum_{i=1}^{n}" },
    { label: "Integral", value: "\\int_{a}^{b}" },
    { label: "Fraction", value: "\\frac{a}{b}" },
    { label: "Square Root", value: "\\sqrt{x}" },
    { label: "Power", value: "x^{2}" },
    { label: "Subscript", value: "x_{i}" },
    { label: "Greek α", value: "\\alpha" },
    { label: "Greek β", value: "\\beta" },
    { label: "Infinity", value: "\\infty" },
    { label: "≤", value: "\\leq" },
    { label: "≥", value: "\\geq" },
    { label: "±", value: "\\pm" },
  ];

  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-center gap-2">
        <Input
          value={latex}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Enter LaTeX formula..."
          className="font-mono"
        />
        <Button variant="outline" size="icon" onClick={handleCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </div>

      {/* Symbol Toolbar */}
      <div className="flex flex-wrap gap-2">
        {commonSymbols.map((symbol) => (
          <Button
            key={symbol.value}
            variant="outline"
            size="sm"
            onClick={() => insertSymbol(symbol.value)}
          >
            {symbol.label}
          </Button>
        ))}
      </div>

      {/* Preview */}
      <div className="border rounded-lg p-6 bg-muted/20 min-h-[120px] flex items-center justify-center">
        <div className="text-2xl font-serif">
          {latex ? (
            <span className="font-mono text-muted-foreground">
              Preview: {latex}
              <br />
              <span className="text-xs">(LaTeX rendering requires MathJax/KaTeX library)</span>
            </span>
          ) : (
            <span className="text-muted-foreground">Formula preview will appear here</span>
          )}
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Examples:</p>
        <div className="space-y-1 text-xs text-muted-foreground font-mono">
          <div>Quadratic: x = \frac{"{-b \\pm \\sqrt{b^2-4ac}}"}{"{2a}"}</div>
          <div>Einstein: E = mc^2</div>
          <div>Euler: e^{"{i\\pi}"} + 1 = 0</div>
        </div>
      </div>
    </Card>
  );
}
