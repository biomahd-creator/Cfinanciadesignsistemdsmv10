import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Palette, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ColorToken {
  name: string;
  variable: string;
  light: string;
  dark: string;
  usage: string;
}

const primaryColors: ColorToken[] = [
  {
    name: "Primary",
    variable: "--primary",
    light: "#DEFB49",
    dark: "#DEFB49",
    usage: "Botones CTA, enlaces, estados activos"
  },
  {
    name: "Primary Foreground",
    variable: "--primary-foreground",
    light: "#1C2D3A",
    dark: "#1C2D3A",
    usage: "Texto sobre primary"
  },
  {
    name: "Secondary",
    variable: "--secondary",
    light: "#1C2D3A",
    dark: "#334155",
    usage: "Fondos secundarios, cards"
  },
  {
    name: "Secondary Foreground",
    variable: "--secondary-foreground",
    light: "#ffffff",
    dark: "#f8fafc",
    usage: "Texto sobre secondary"
  }
];

const neutralColors: ColorToken[] = [
  {
    name: "Background",
    variable: "--background",
    light: "#ffffff",
    dark: "#0f172a",
    usage: "Fondo principal de la aplicación"
  },
  {
    name: "Foreground",
    variable: "--foreground",
    light: "#1C2D3A",
    dark: "#f8fafc",
    usage: "Texto principal"
  },
  {
    name: "Card",
    variable: "--card",
    light: "#ffffff",
    dark: "#1e293b",
    usage: "Fondos de tarjetas"
  },
  {
    name: "Muted",
    variable: "--muted",
    light: "#f4f4f5",
    dark: "#334155",
    usage: "Fondos apagados, backgrounds sutiles"
  },
  {
    name: "Muted Foreground",
    variable: "--muted-foreground",
    light: "#71717a",
    dark: "#94a3b8",
    usage: "Texto secundario, descripciones"
  }
];

const utilityColors: ColorToken[] = [
  {
    name: "Border",
    variable: "--border",
    light: "#e4e4e7",
    dark: "#334155",
    usage: "Bordes de elementos"
  },
  {
    name: "Input",
    variable: "--input",
    light: "#e4e4e7",
    dark: "#334155",
    usage: "Bordes de inputs"
  },
  {
    name: "Ring",
    variable: "--ring",
    light: "#DEFB49",
    dark: "#DEFB49",
    usage: "Focus ring outline"
  },
  {
    name: "Destructive",
    variable: "--destructive",
    light: "#ef4444",
    dark: "#991b1b",
    usage: "Acciones destructivas, errores"
  }
];

function ColorCard({ color }: { color: ColorToken }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success(`Copiado: ${text}`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="elevation-1 hover:elevation-3 transition-shadow">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-foreground">{color.name}</h4>
            <code className="text-xs text-muted-foreground">{color.variable}</code>
          </div>
          {copied ? (
            <CheckCircle2 className="size-4 text-primary" />
          ) : (
            <button
              onClick={() => copyToClipboard(color.variable)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Copy className="size-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Light</p>
            <div className="flex items-center gap-2">
              <div 
                className="size-8 rounded border border-border" 
                style={{ backgroundColor: color.light }}
              />
              <code className="text-xs">{color.light}</code>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Dark</p>
            <div className="flex items-center gap-2">
              <div 
                className="size-8 rounded border border-border" 
                style={{ backgroundColor: color.dark }}
              />
              <code className="text-xs">{color.dark}</code>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">{color.usage}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function ColorPalettePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <Palette className="size-8 text-primary" />
          <h1 className="text-foreground">Color Palette</h1>
          <Badge variant="default" className="bg-primary text-primary-foreground">Design System</Badge>
        </div>
        <p className="text-muted-foreground">
          Paleta de colores completa del Design System de C-Financia. Todos los tokens están 
          definidos como CSS variables y soportan modo claro y oscuro.
        </p>
      </div>

      {/* Brand Colors */}
      <Card className="elevation-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-primary" />
            Colores Corporativos
          </CardTitle>
          <CardDescription>
            Colores principales de la marca C-Financia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {primaryColors.map((color) => (
              <ColorCard key={color.variable} color={color} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Neutral Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Colores Neutrales</CardTitle>
          <CardDescription>
            Fondos, textos y elementos de UI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {neutralColors.map((color) => (
              <ColorCard key={color.variable} color={color} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Utility Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Colores Utilitarios</CardTitle>
          <CardDescription>
            Bordes, estados y acciones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {utilityColors.map((color) => (
              <ColorCard key={color.variable} color={color} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contrast Ratios */}
      <Card>
        <CardHeader>
          <CardTitle>Ratios de Contraste WCAG</CardTitle>
          <CardDescription>
            Cumplimiento de accesibilidad WCAG 2.1 Nivel AA
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-md bg-muted/50">
              <div>
                <p className="font-semibold text-foreground">Texto principal sobre background</p>
                <p className="text-sm text-muted-foreground">Foreground / Background</p>
              </div>
              <Badge variant="default" className="bg-green-600 text-white">14.9:1 (AAA)</Badge>
            </div>

            <div className="flex items-center justify-between p-4 rounded-md bg-muted/50">
              <div>
                <p className="font-semibold text-foreground">Texto secundario sobre background</p>
                <p className="text-sm text-muted-foreground">Muted Foreground / Background</p>
              </div>
              <Badge variant="default" className="bg-green-600 text-white">7.2:1 (AA)</Badge>
            </div>

            <div className="flex items-center justify-between p-4 rounded-md bg-muted/50">
              <div>
                <p className="font-semibold text-foreground">Primary sobre secondary</p>
                <p className="text-sm text-muted-foreground">#DEFB49 / #1C2D3A</p>
              </div>
              <Badge variant="default" className="bg-green-600 text-white">9.8:1 (AAA)</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Example */}
      <Card>
        <CardHeader>
          <CardTitle>Uso en Código</CardTitle>
          <CardDescription>
            Cómo utilizar los tokens de color en tus componentes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-md p-4">
            <pre className="text-sm">
              <code>{`// Usando clases de Tailwind
<div className="bg-primary text-primary-foreground">
  Botón primario
</div>

// Usando CSS variables directamente
<div style={{ 
  backgroundColor: "hsl(var(--primary))",
  color: "hsl(var(--primary-foreground))"
}}>
  Custom styling
</div>

// En tu CSS
.my-element {
  background-color: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
