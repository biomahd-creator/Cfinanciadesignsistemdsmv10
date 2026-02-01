import { useTheme } from "../components/ThemeProvider";
import { Palette, Download, Upload, RotateCcw, Check, Copy, Sparkles } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Progress } from "../components/ui/progress";
import { toast } from "sonner@2.0.3";
import { getUIColors } from "../lib/theme-utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { Slider } from "../components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { MasterDataGrid } from "../components/patterns/MasterDataGrid";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

export function ThemeCustomizerPage() {
  const { config, updateConfig, resetToDefaults, exportConfig, importConfig, applyPreset } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleColorChange = (key: string, value: string) => {
    updateConfig({ [key]: value });
  };

  const handleExport = () => {
    const configString = exportConfig();
    // Fallback para cuando clipboard API está bloqueado
    try {
      navigator.clipboard.writeText(configString).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast.success("Configuración copiada al portapapeles");
      }).catch(() => {
        // Fallback: crear elemento temporal para copiar
        const textArea = document.createElement("textarea");
        textArea.value = configString;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
          toast.success("Configuración copiada al portapapeles");
        } catch (err) {
          toast.error("No se pudo copiar. Intenta manualmente.");
          console.log(configString);
        }
        textArea.remove();
      });
    } catch (err) {
      toast.error("No se pudo copiar. Revisa la consola.");
      console.log("Config to copy:", configString);
    }
  };

  const handleImport = () => {
    // Fallback para cuando clipboard API está bloqueado
    const jsonString = prompt("Pega la configuración JSON:");
    if (jsonString) {
      try {
        importConfig(jsonString);
        toast.success("Configuración importada correctamente");
      } catch (error) {
        toast.error("Error al importar configuración");
      }
    }
  };

  const handleReset = () => {
    resetToDefaults();
    toast.success("Tema restaurado a valores por defecto");
  };

  const handlePreset = (preset: string) => {
    applyPreset(preset);
    toast.success(`Preset "${preset}" aplicado`);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        updateConfig({ logoUrl: base64String });
        toast.success("Logo actualizado correctamente");
      };
      reader.readAsDataURL(file);
    }
  };

  // Sample data for charts
  const chartData = [
    { name: "Ene", value: 400, revenue: 240, expenses: 140 },
    { name: "Feb", value: 300, revenue: 139, expenses: 221 },
    { name: "Mar", value: 200, revenue: 980, expenses: 229 },
    { name: "Abr", value: 278, revenue: 390, expenses: 200 },
    { name: "May", value: 189, revenue: 480, expenses: 218 },
  ];

  const pieData = [
    { name: "Marketing", value: 400 },
    { name: "Desarrollo", value: 300 },
    { name: "Diseño", value: 300 },
    { name: "Ventas", value: 200 },
    { name: "Soporte", value: 150 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Palette className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-medium">Theme Customizer</h1>
          <Badge variant="secondary">
            <Sparkles className="h-3 w-3 mr-1" />
            Live Preview
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Personaliza colores, gráficos y parámetros visuales. Los cambios se reflejan en tiempo real.
        </p>
      </div>

      <Separator />

      {/* Actions Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={handleExport} variant="outline">
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Copiado
            </>
          ) : (
            <>
              <Download className="h-4 w-4 mr-2" />
              Exportar Config
            </>
          )}
        </Button>
        <Button onClick={handleImport} variant="outline">
          <Upload className="h-4 w-4 mr-2" />
          Importar Config
        </Button>
        <Button onClick={handleReset} variant="outline">
          <RotateCcw className="h-4 w-4 mr-2" />
          Restaurar Defaults
        </Button>
      </div>

      {/* Layout: Full width (stacked) */}
      <div className="flex flex-col gap-8">
        {/* Controls Section */}
        <div className="space-y-6 w-full">
          {/* Presets */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Presets de Temas</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button onClick={() => handlePreset("default")} variant="outline" className="h-auto py-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-6 w-6 rounded-full bg-primary border-2 border-border" />
                    <div className="h-6 w-6 rounded-full bg-secondary border-2 border-border" />
                  </div>
                  <span>Default</span>
                </div>
              </Button>
              <Button onClick={() => handlePreset("ocean")} variant="outline" className="h-auto py-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-6 w-6 rounded-full bg-[#06B6D4] border-2 border-border" />
                    <div className="h-6 w-6 rounded-full bg-[#0E7490] border-2 border-border" />
                  </div>
                  <span>Ocean</span>
                </div>
              </Button>
              <Button onClick={() => handlePreset("sunset")} variant="outline" className="h-auto py-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-6 w-6 rounded-full bg-[#F59E0B] border-2 border-border" />
                    <div className="h-6 w-6 rounded-full bg-[#DC2626] border-2 border-border" />
                  </div>
                  <span>Sunset</span>
                </div>
              </Button>
              <Button onClick={() => handlePreset("forest")} variant="outline" className="h-auto py-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-6 w-6 rounded-full bg-[#84CC16] border-2 border-border" />
                    <div className="h-6 w-6 rounded-full bg-[#15803D] border-2 border-border" />
                  </div>
                  <span>Forest</span>
                </div>
              </Button>
              <Button onClick={() => handlePreset("purple")} variant="outline" className="h-auto py-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-6 w-6 rounded-full bg-[#A855F7] border-2 border-border" />
                    <div className="h-6 w-6 rounded-full bg-[#7C3AED] border-2 border-border" />
                  </div>
                  <span>Purple</span>
                </div>
              </Button>
            </div>
          </Card>

          <Tabs defaultValue="brand" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="brand">Brand</TabsTrigger>
              <TabsTrigger value="ui">UI Elements</TabsTrigger>
              <TabsTrigger value="inputs">Inputs</TabsTrigger>
              <TabsTrigger value="charts">Charts</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
            </TabsList>

            {/* Brand Colors Tab */}
            <TabsContent value="brand" className="space-y-4 mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Identidad de Marca</h3>
                
                <div className="space-y-6">
                  {/* Logo URL */}
                  <div className="space-y-3">
                    <Label>Logo Image</Label>
                    <div className="flex flex-col gap-3">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="cursor-pointer"
                      />
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">Or use URL</span>
                        </div>
                      </div>
                      <Input
                        type="text"
                        placeholder="https://example.com/logo.png"
                        value={config.logoUrl || ""}
                        onChange={(e) => handleColorChange("logoUrl", e.target.value)}
                        className="flex-1"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Sube una imagen (se guardará localmente) o pega una URL externa.
                    </p>
                  </div>
                </div>
                
                <Separator className="my-6" />

                <h3 className="text-xl font-semibold mb-6">Colores de Marca</h3>
                
                <div className="space-y-6">
                  {/* Primary Color */}
                  <div className="space-y-3">
                    <Label>Primary Color</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.primary}
                        onChange={(e) => handleColorChange("primary", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.primary}
                        onChange={(e) => handleColorChange("primary", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color principal para CTAs, estados activos y elementos destacados
                    </p>
                  </div>

                  {/* Secondary Color */}
                  <div className="space-y-3">
                    <Label>Secondary Color</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.secondary}
                        onChange={(e) => handleColorChange("secondary", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.secondary}
                        onChange={(e) => handleColorChange("secondary", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color secundario para texto principal y fondos oscuros
                    </p>
                  </div>

                  {/* Destructive Color */}
                  <div className="space-y-3">
                    <Label>Destructive Color</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.destructive}
                        onChange={(e) => handleColorChange("destructive", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.destructive}
                        onChange={(e) => handleColorChange("destructive", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color para acciones destructivas y errores
                    </p>
                  </div>

                  {/* Accent Color */}
                  <div className="space-y-3">
                    <Label>Accent Color</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.accent}
                        onChange={(e) => handleColorChange("accent", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.accent}
                        onChange={(e) => handleColorChange("accent", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color de acento para hover states y elementos interactivos
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* UI Elements Colors Tab */}
            <TabsContent value="ui" className="space-y-4 mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Links & Navigation</h3>
                
                <div className="space-y-6">
                  {/* Link Color */}
                  <div className="space-y-3">
                    <Label>Link Color (Default)</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.link}
                        onChange={(e) => handleColorChange("link", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.link}
                        onChange={(e) => handleColorChange("link", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color por defecto de enlaces y navegación
                    </p>
                  </div>

                  {/* Link Hover Color */}
                  <div className="space-y-3">
                    <Label>Link Hover Color</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.linkHover}
                        onChange={(e) => handleColorChange("linkHover", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.linkHover}
                        onChange={(e) => handleColorChange("linkHover", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color al pasar el mouse sobre enlaces
                    </p>
                  </div>

                  {/* Link Visited Color */}
                  <div className="space-y-3">
                    <Label>Link Visited Color</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.linkVisited}
                        onChange={(e) => handleColorChange("linkVisited", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.linkVisited}
                        onChange={(e) => handleColorChange("linkVisited", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color de enlaces ya visitados
                    </p>
                  </div>

                  {/* Preview */}
                  <div className="p-4 border rounded-lg space-y-2 bg-muted/20">
                    <p className="text-sm">
                      Ejemplo:{" "}
                      <a href="#" style={{ color: config.link }} className="underline">
                        Este es un enlace
                      </a>
                      {" "}y{" "}
                      <a href="#" style={{ color: config.linkHover }} className="underline">
                        este está en hover
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Status & Feedback</h3>
                
                <div className="space-y-6">
                  {/* Success Color */}
                  <div className="space-y-3">
                    <Label>Success Color</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.success}
                        onChange={(e) => handleColorChange("success", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.success}
                        onChange={(e) => handleColorChange("success", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color para mensajes de éxito y confirmación
                    </p>
                  </div>

                  {/* Warning Color */}
                  <div className="space-y-3">
                    <Label>Warning Color</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.warning}
                        onChange={(e) => handleColorChange("warning", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.warning}
                        onChange={(e) => handleColorChange("warning", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color para advertencias y precauciones
                    </p>
                  </div>

                  {/* Info Color */}
                  <div className="space-y-3">
                    <Label>Info Color</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.info}
                        onChange={(e) => handleColorChange("info", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.info}
                        onChange={(e) => handleColorChange("info", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color para mensajes informativos
                    </p>
                  </div>

                  {/* Preview */}
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: config.success + "20", borderLeft: `4px solid ${config.success}` }}>
                      <p className="text-sm font-medium" style={{ color: config.success }}>✓ Operación exitosa</p>
                    </div>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: config.warning + "20", borderLeft: `4px solid ${config.warning}` }}>
                      <p className="text-sm font-medium" style={{ color: config.warning }}>⚠ Advertencia importante</p>
                    </div>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: config.info + "20", borderLeft: `4px solid ${config.info}` }}>
                      <p className="text-sm font-medium" style={{ color: config.info }}>ℹ Información relevante</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Interactive Elements</h3>
                
                <div className="space-y-6">
                  {/* Focus Ring Color */}
                  <div className="space-y-3">
                    <Label>Focus Ring Color</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.focusRing}
                        onChange={(e) => handleColorChange("focusRing", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.focusRing}
                        onChange={(e) => handleColorChange("focusRing", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color del anillo de foco en elementos interactivos (accesibilidad)
                    </p>
                  </div>

                  {/* Selection Color */}
                  <div className="space-y-3">
                    <Label>Selection Color</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.selection}
                        onChange={(e) => handleColorChange("selection", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.selection}
                        onChange={(e) => handleColorChange("selection", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color de texto seleccionado y highlight
                    </p>
                  </div>

                  {/* Preview */}
                  <div className="p-4 border rounded-lg space-y-3 bg-muted/20">
                    <Button 
                      className="w-full"
                      style={{ 
                        outline: `2px solid ${config.focusRing}`,
                        outlineOffset: "2px"
                      }}
                    >
                      Botón con Focus Ring
                    </Button>
                    <p className="text-sm p-2" style={{ backgroundColor: config.selection + "40" }}>
                      Este texto tiene el color de selección aplicado
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Inputs Colors Tab */}
            <TabsContent value="inputs" className="space-y-4 mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Colores de Inputs</h3>
                
                <div className="space-y-6">
                  {/* Input Background Light */}
                  <div className="space-y-3">
                    <Label>Input Background (Light Mode)</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.inputBackgroundLight}
                        onChange={(e) => handleColorChange("inputBackgroundLight", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.inputBackgroundLight}
                        onChange={(e) => handleColorChange("inputBackgroundLight", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color de fondo para inputs en modo claro
                    </p>
                  </div>

                  {/* Input Background Dark */}
                  <div className="space-y-3">
                    <Label>Input Background (Dark Mode)</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.inputBackgroundDark}
                        onChange={(e) => handleColorChange("inputBackgroundDark", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.inputBackgroundDark}
                        onChange={(e) => handleColorChange("inputBackgroundDark", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color de fondo para inputs en modo oscuro
                    </p>
                  </div>

                  {/* Input Border Color */}
                  <div className="space-y-3">
                    <Label>Input Border Color</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        value={config.inputBorder}
                        onChange={(e) => handleColorChange("inputBorder", e.target.value)}
                        className="w-20 h-12 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={config.inputBorder}
                        onChange={(e) => handleColorChange("inputBorder", e.target.value)}
                        className="flex-1 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Color del borde de los inputs
                    </p>
                  </div>

                  {/* Preview */}
                  <div className="p-4 border rounded-lg space-y-3 bg-muted/20">
                    <Input 
                      placeholder="Input example" 
                      style={{ 
                        backgroundColor: config.inputBackgroundLight, 
                        borderColor: config.inputBorder 
                      }} 
                    />
                    <Select>
                      <SelectTrigger style={{ backgroundColor: config.inputBackgroundLight, borderColor: config.inputBorder }}>
                        <SelectValue placeholder="Select example" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Option 1</SelectItem>
                        <SelectItem value="2">Option 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Charts Tab */}
            <TabsContent value="charts" className="space-y-4 mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Colores de Gráficos</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Controls */}
                  <div className="space-y-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="space-y-3">
                        <Label>Chart Color {i + 1}</Label>
                        <div className="flex items-center gap-3">
                          <Input
                            type="color"
                            value={config[`chart${i + 1}` as keyof typeof config]}
                            onChange={(e) => handleColorChange(`chart${i + 1}`, e.target.value)}
                            className="w-20 h-12 cursor-pointer"
                          />
                          <Input
                            type="text"
                            value={config[`chart${i + 1}` as keyof typeof config]}
                            onChange={(e) => handleColorChange(`chart${i + 1}`, e.target.value)}
                            className="flex-1 font-mono"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Previews */}
                  <div className="space-y-8">
                    <div className="h-[200px] w-full min-w-0" style={{ minHeight: '200px' }}>
                      <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                        <BarChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                          <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                          <YAxis fontSize={12} tickLine={false} axisLine={false} />
                          <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                          />
                          <Bar dataKey="value" fill={config.chart1} radius={[4, 4, 0, 0]} />
                          <Bar dataKey="revenue" fill={config.chart2} radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="h-[200px] w-full min-w-0" style={{ minHeight: '200px' }}>
                      <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={config[`chart${(index % 5) + 1}` as keyof typeof config]} 
                              />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Layout Tab */}
            <TabsContent value="layout" className="space-y-4 mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Layout & Spacing</h3>
                
                <div className="space-y-6">
                  {/* Radius */}
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Border Radius</Label>
                      <span className="text-sm text-muted-foreground">{config.radius}rem</span>
                    </div>
                    <Slider
                      value={[parseFloat(config.radius)]}
                      min={0}
                      max={2}
                      step={0.1}
                      onValueChange={(value) => handleColorChange("radius", value[0].toString())}
                    />
                    <div className="flex gap-4 pt-4">
                      <div 
                        className="h-16 w-16 border-2 border-primary bg-primary/10 flex items-center justify-center text-xs"
                        style={{ borderRadius: `${config.radius}rem` }}
                      >
                        Box
                      </div>
                      <Button style={{ borderRadius: `${config.radius}rem` }}>
                        Button
                      </Button>
                      <Input 
                        placeholder="Input" 
                        className="w-32"
                        style={{ borderRadius: `${config.radius}rem` }} 
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Sidebar Width */}
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Sidebar Width (Expanded)</Label>
                      <span className="text-sm text-muted-foreground">{config.sidebarWidth}</span>
                    </div>
                    <div className="flex gap-2">
                      {["16rem", "18rem", "20rem", "24rem"].map((width) => (
                        <Button
                          key={width}
                          variant={config.sidebarWidth === width ? "default" : "outline"}
                          onClick={() => handleColorChange("sidebarWidth", width)}
                          className="flex-1"
                        >
                          {width}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Header Height */}
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Header Height</Label>
                      <span className="text-sm text-muted-foreground">{config.headerHeight}</span>
                    </div>
                    <div className="flex gap-2">
                      {["3.5rem", "4rem", "5rem"].map((height) => (
                        <Button
                          key={height}
                          variant={config.headerHeight === height ? "default" : "outline"}
                          onClick={() => handleColorChange("headerHeight", height)}
                          className="flex-1"
                        >
                          {height}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
