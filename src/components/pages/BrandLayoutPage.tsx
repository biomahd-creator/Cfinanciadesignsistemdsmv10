import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Logo } from "../Logo";
import { Copy, Check, Ruler, Grid3x3, Palette, Type } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export function BrandLayoutPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(id);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colors = [
    {
      id: "primary",
      name: "Primary",
      hex: "#DEFB49",
      rgb: "rgb(222, 251, 73)",
      usage: "CTAs, estados activos, focus rings",
    },
    {
      id: "secondary",
      name: "Secondary",
      hex: "#1C2D3A",
      rgb: "rgb(28, 45, 58)",
      usage: "Primary text, backgrounds, dark elements",
    },
  ];

  const spacing = [
    { name: "xs", value: "4px", multiplier: "1×" },
    { name: "sm", value: "8px", multiplier: "2×" },
    { name: "md", value: "12px", multiplier: "3×" },
    { name: "base", value: "16px", multiplier: "4×" },
    { name: "lg", value: "24px", multiplier: "6×" },
    { name: "xl", value: "32px", multiplier: "8×" },
    { name: "2xl", value: "48px", multiplier: "12×" },
    { name: "3xl", value: "64px", multiplier: "16×" },
  ];

  const gridExamples = [
    { device: "Desktop", columns: 12, gutter: "24px", margin: "48px" },
    { device: "Tablet", columns: 6, gutter: "16px", margin: "32px" },
    { device: "Mobile", columns: 4, gutter: "16px", margin: "16px" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Palette className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-semibold">Brand & Layout Guidelines</h1>
        </div>
        <p className="text-muted-foreground">
          Complete design system: brand, colors, typography and grid system
        </p>
      </div>

      <Separator />

      {/* BRAND GUIDELINES */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Palette className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-semibold">Brand Guidelines</h2>
          <Badge variant="secondary">Identidad Visual</Badge>
        </div>

        {/* Logo Showcase */}
        <Card className="p-8 mb-6">
          <h3 className="text-xl font-semibold mb-6">Logo</h3>
          
          {/* Logo for Light Backgrounds */}
          <div className="mb-8">
            <h4 className="font-medium text-sm mb-4 text-muted-foreground">For light backgrounds</h4>
            <div className="space-y-8">
              {/* Extra Large */}
              <div className="flex items-center gap-8 p-6 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1">Extra Large</p>
                  <p className="text-xs text-muted-foreground">h-12 (48px)</p>
                </div>
                <Logo size="xl" variant="light" />
              </div>

              {/* Large */}
              <div className="flex items-center gap-8 p-6 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1">Large</p>
                  <p className="text-xs text-muted-foreground">h-10 (40px)</p>
                </div>
                <Logo size="lg" variant="light" />
              </div>

              {/* Medium */}
              <div className="flex items-center gap-8 p-6 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1">Medium</p>
                  <p className="text-xs text-muted-foreground">h-8 (32px)</p>
                </div>
                <Logo size="md" variant="light" />
              </div>

              {/* Small */}
              <div className="flex items-center gap-8 p-6 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1">Small</p>
                  <p className="text-xs text-muted-foreground">h-6 (24px)</p>
                </div>
                <Logo size="sm" variant="light" />
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Logo for Dark Backgrounds */}
          <div>
            <h4 className="font-medium text-sm mb-4 text-muted-foreground">For dark backgrounds</h4>
            <div className="space-y-8">
              {/* Extra Large */}
              <div className="flex items-center gap-8 p-6 bg-secondary rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1 text-white">Extra Large</p>
                  <p className="text-xs text-white/60">h-12 (48px)</p>
                </div>
                <Logo size="xl" variant="dark" />
              </div>

              {/* Large */}
              <div className="flex items-center gap-8 p-6 bg-secondary rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1 text-white">Large</p>
                  <p className="text-xs text-white/60">h-10 (40px)</p>
                </div>
                <Logo size="lg" variant="dark" />
              </div>

              {/* Medium */}
              <div className="flex items-center gap-8 p-6 bg-secondary rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1 text-white">Medium</p>
                  <p className="text-xs text-white/60">h-8 (32px)</p>
                </div>
                <Logo size="md" variant="dark" />
              </div>

              {/* Small */}
              <div className="flex items-center gap-8 p-6 bg-secondary rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1 text-white">Small</p>
                  <p className="text-xs text-white/60">h-6 (24px)</p>
                </div>
                <Logo size="sm" variant="dark" />
              </div>
            </div>
          </div>

          {/* Logo Usage Guidelines */}
          <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Logo Usage Guidelines
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Minimum size:</strong> 24px height (h-6) to ensure readability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Clear space:</strong> Maintain space equivalent to logo height around it</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Backgrounds:</strong> Use "light" variant for light backgrounds and "dark" for dark backgrounds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Do not modify:</strong> Do not stretch, rotate or change logo proportions</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Color Palette */}
        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-6">Color Palette</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {colors.map((color) => (
              <div key={color.id} className="space-y-4">
                {/* Color Swatch */}
                <div
                  className="h-32 rounded-lg shadow-sm border border-border flex items-center justify-center"
                  style={{ backgroundColor: color.hex }}
                >
                  <span
                    className="font-semibold text-lg"
                    style={{ 
                      color: color.id === "primary" ? "#1C2D3A" : "#ffffff" 
                    }}
                  >
                    {color.name}
                  </span>
                </div>

                {/* Color Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                    <div>
                      <p className="text-xs text-muted-foreground">HEX</p>
                      <p className="font-mono text-sm">{color.hex}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(color.hex, `${color.id}-hex`)}
                      className="h-8 w-8"
                    >
                      {copiedColor === `${color.id}-hex` ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                    <div>
                      <p className="text-xs text-muted-foreground">RGB</p>
                      <p className="font-mono text-sm">{color.rgb}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(color.rgb, `${color.id}-rgb`)}
                      className="h-8 w-8"
                    >
                      {copiedColor === `${color.id}-rgb` ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  <div className="p-3 bg-muted/50 rounded-md">
                    <p className="text-xs text-muted-foreground mb-1">Usage</p>
                    <p className="text-sm">{color.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Typography */}
        <Card className="p-8 mt-6">
          <div className="flex items-center gap-3 mb-6">
            <Type className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Typography</h3>
          </div>

          <div className="space-y-6">
            {/* Font Family */}
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Font Family</p>
              <p className="text-2xl font-semibold">Satoshi</p>
              <p className="text-sm text-muted-foreground mt-2">
                Fuente única del sistema - Variable font
              </p>
            </div>

            {/* Type Scale */}
            <div>
              <p className="text-sm font-medium mb-4">Type Scale</p>
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-5xl font-semibold mb-2">Heading 1</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    text-5xl · font-semibold · 48px
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-3xl font-semibold mb-2">Heading 2</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    text-3xl · font-semibold · 30px
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-xl font-semibold mb-2">Heading 3</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    text-xl · font-semibold · 20px
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-base mb-2">Body Text</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    text-base · font-normal · 16px
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-sm mb-2">Small Text</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    text-sm · font-normal · 14px
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-xs mb-2">Caption</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    text-xs · font-medium · 12px
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* LAYOUT SYSTEM */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Grid3x3 className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-semibold">Layout System</h2>
          <Badge variant="secondary">Grid & Spacing</Badge>
        </div>

        {/* Grid System */}
        <Card className="p-8 mb-6">
          <h3 className="text-xl font-semibold mb-6">Responsive Grid System</h3>

          <div className="space-y-8">
            {gridExamples.map((grid) => (
              <div key={grid.device} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{grid.device}</h4>
                    <p className="text-sm text-muted-foreground">
                      {grid.columns} columnas · Gutter {grid.gutter} · Margin {grid.margin}
                    </p>
                  </div>
                  <Badge>{grid.columns} cols</Badge>
                </div>

                {/* Visual Grid Representation */}
                <div 
                  className="grid gap-3 p-6 bg-muted/30 rounded-lg border border-border"
                  style={{
                    gridTemplateColumns: `repeat(${grid.columns}, 1fr)`,
                  }}
                >
                  {Array.from({ length: grid.columns }).map((_, i) => (
                    <div
                      key={i}
                      className="h-20 bg-primary/20 border-2 border-primary/40 rounded flex items-center justify-center"
                    >
                      <span className="text-xs font-mono text-muted-foreground">
                        {i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Grid Guidelines */}
          <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Grid Usage Guidelines
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Desktop (1280px+):</strong> 12 columnas para máxima flexibilidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Tablet (768px - 1279px):</strong> 6 columnas para layouts medianos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Mobile (hasta 767px):</strong> 4 columnas para contenido compacto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Gutters:</strong> Espacio entre columnas (16-24px según dispositivo)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Margins:</strong> Espacio exterior del grid (16-48px según dispositivo)</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Spacing System */}
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Ruler className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Spacing System</h3>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Spacing system based on 4px multiples for visual consistency
          </p>

          <div className="space-y-3">
            {spacing.map((space) => (
              <div
                key={space.name}
                className="flex items-center gap-6 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="w-24">
                  <p className="font-mono text-sm font-medium">{space.name}</p>
                  <p className="text-xs text-muted-foreground">{space.multiplier} base</p>
                </div>
                
                <div className="flex-1">
                  <div
                    className="h-8 bg-primary rounded"
                    style={{ width: space.value }}
                  />
                </div>

                <div className="w-20 text-right">
                  <p className="font-mono text-sm">{space.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Spacing Usage Examples */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-3 text-sm">Component Spacing</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">gap-2</span>
                  <span>Entre elementos pequeños (8px)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">gap-4</span>
                  <span>Entre elementos relacionados (16px)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">gap-6</span>
                  <span>Entre secciones (24px)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">gap-8</span>
                  <span>Entre bloques principales (32px)</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-3 text-sm">Padding Guidelines</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">p-4</span>
                  <span>Cards mínimo (16px)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">p-6</span>
                  <span>Cards estándar (24px)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">p-8</span>
                  <span>Cards destacadas (32px)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">p-12</span>
                  <span>Secciones principales (48px)</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}