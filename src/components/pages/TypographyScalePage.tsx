import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Type, Copy } from "lucide-react";
import { toast } from "sonner";

interface TypeScale {
  name: string;
  className: string;
  fontSize: string;
  lineHeight: string;
  usage: string;
}

const typeScales: TypeScale[] = [
  {
    name: "Display Large",
    className: "text-5xl",
    fontSize: "3rem (48px)",
    lineHeight: "1.2",
    usage: "Títulos heroicos, landing pages"
  },
  {
    name: "Display",
    className: "text-4xl",
    fontSize: "2.25rem (36px)",
    lineHeight: "1.3",
    usage: "Títulos principales de página"
  },
  {
    name: "Heading 1",
    className: "text-3xl",
    fontSize: "1.875rem (30px)",
    lineHeight: "1.4",
    usage: "Títulos de sección principales"
  },
  {
    name: "Heading 2",
    className: "text-2xl",
    fontSize: "1.5rem (24px)",
    lineHeight: "1.4",
    usage: "Subtítulos y secciones secundarias"
  },
  {
    name: "Heading 3",
    className: "text-xl",
    fontSize: "1.25rem (20px)",
    lineHeight: "1.5",
    usage: "Títulos de cards y subsecciones"
  },
  {
    name: "Body Large",
    className: "text-lg",
    fontSize: "1.125rem (18px)",
    lineHeight: "1.75",
    usage: "Párrafos destacados, introducción"
  },
  {
    name: "Body",
    className: "text-base",
    fontSize: "1rem (16px)",
    lineHeight: "1.75",
    usage: "Texto base del sistema"
  },
  {
    name: "Body Small",
    className: "text-sm",
    fontSize: "0.875rem (14px)",
    lineHeight: "1.5",
    usage: "Descripciones, texto secundario"
  },
  {
    name: "Caption",
    className: "text-xs",
    fontSize: "0.75rem (12px)",
    lineHeight: "1.5",
    usage: "Labels, helpers, metadata"
  }
];

const fontWeights = [
  { name: "Regular", className: "font-normal", weight: "400", usage: "Texto general" },
  { name: "Medium", className: "font-medium", weight: "500", usage: "Énfasis leve, labels" },
  { name: "Semibold", className: "font-semibold", weight: "600", usage: "Títulos, botones" },
  { name: "Bold", className: "font-bold", weight: "700", usage: "Énfasis fuerte" },
];

function TypeScaleExample({ scale }: { scale: TypeScale }) {
  const copyClassName = () => {
    navigator.clipboard.writeText(scale.className);
    toast.success(`Copiado: ${scale.className}`);
  };

  return (
    <div className="space-y-2 p-4 rounded-md border border-border hover:border-primary/50 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-foreground">{scale.name}</p>
          <code className="text-xs text-muted-foreground">{scale.className}</code>
        </div>
        <button
          onClick={copyClassName}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Copy className="size-4" />
        </button>
      </div>
      
      <p className={scale.className + " text-foreground"}>
        The quick brown fox jumps over the lazy dog
      </p>
      
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span>Size: {scale.fontSize}</span>
        <span>•</span>
        <span>Line: {scale.lineHeight}</span>
      </div>
      
      <p className="text-xs text-muted-foreground">{scale.usage}</p>
    </div>
  );
}

export function TypographyScalePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <Type className="size-8 text-primary" />
          <h1 className="text-foreground">Typography Scale</h1>
          <Badge variant="default" className="bg-primary text-primary-foreground">Design System</Badge>
        </div>
        <p className="text-muted-foreground">
          Escala tipográfica completa del Design System de C-Financia. Utilizamos la fuente 
          Satoshi para todo el sistema con una jerarquía clara y legible.
        </p>
      </div>

      {/* Font Family */}
      <Card className="elevation-2 border-primary/20">
        <CardHeader>
          <CardTitle>Fuente Principal</CardTitle>
          <CardDescription>
            Satoshi - Unique system font
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-6 rounded-md bg-muted/50">
              <div>
                <p className="text-4xl font-semibold text-foreground mb-2">Satoshi</p>
                <p className="text-muted-foreground">
                  Fuente geométrica moderna con excelente legibilidad
                </p>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-md p-4">
              <p className="text-xs text-muted-foreground mb-2">CSS Variable:</p>
              <code className="text-sm">font-family: var(--font-satoshi), sans-serif;</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Type Scale */}
      <Card>
        <CardHeader>
          <CardTitle>Size Scale</CardTitle>
          <CardDescription>
            Typographic hierarchy from largest to smallest
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {typeScales.map((scale) => (
            <TypeScaleExample key={scale.className} scale={scale} />
          ))}
        </CardContent>
      </Card>

      {/* Font Weights */}
      <Card>
        <CardHeader>
          <CardTitle>Pesos de Fuente</CardTitle>
          <CardDescription>
            Variantes de peso disponibles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {fontWeights.map((weight) => (
              <div 
                key={weight.className} 
                className="flex items-center justify-between p-4 rounded-md border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-1">
                  <p className={`text-2xl ${weight.className} text-foreground`}>
                    {weight.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{weight.usage}</p>
                </div>
                <div className="text-right">
                  <code className="text-xs text-muted-foreground block">{weight.className}</code>
                  <span className="text-xs text-muted-foreground">{weight.weight}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Line Heights */}
      <Card>
        <CardHeader>
          <CardTitle>Alturas de Línea</CardTitle>
          <CardDescription>
            Line-height para diferentes contextos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-md border border-border">
              <p className="font-semibold text-foreground mb-2">Títulos (1.2 - 1.4)</p>
              <p className="leading-tight text-2xl text-muted-foreground">
                Este es un título con line-height compacto para mejor jerarquía visual
              </p>
            </div>

            <div className="p-4 rounded-md border border-border">
              <p className="font-semibold text-foreground mb-2">Cuerpo (1.5 - 1.75)</p>
              <p className="leading-relaxed text-muted-foreground">
                Este es un párrafo de texto con line-height cómodo (leading-relaxed) 
                que facilita la lectura de bloques largos de contenido. La altura de 
                línea amplia mejora la legibilidad y reduce la fatiga visual.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Guías de Uso</CardTitle>
          <CardDescription>
            Mejores prácticas tipográficas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">Jerarquía clara:</strong> Usa máximo 3 niveles 
                de títulos por página para mantener claridad visual.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">Contraste de peso:</strong> Combina pesos diferentes 
                para crear énfasis sin cambiar el tamaño.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">Longitud de línea:</strong> Mantén entre 50-75 
                caracteres por línea para óptima legibilidad.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
              <p>
                <strong className="text-foreground">Espaciado vertical:</strong> Usa espaciado generoso 
                entre secciones (gap-6, gap-8) para respiración visual.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Example */}
      <Card>
        <CardHeader>
          <CardTitle>Ejemplo de Código</CardTitle>
          <CardDescription>
            Implementación en componentes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-md p-4">
            <pre className="text-sm">
              <code>{`// Títulos
<h1 className="text-4xl font-semibold text-foreground">
  Título Principal
</h1>

<h2 className="text-2xl font-semibold text-foreground">
  Subtítulo
</h2>

// Cuerpo de texto
<p className="text-base text-muted-foreground leading-relaxed">
  Párrafo de texto con line-height cómodo
</p>

// Labels y helpers
<label className="text-sm font-medium text-foreground">
  Email
</label>
<span className="text-xs text-muted-foreground">
  Helper text
</span>`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}