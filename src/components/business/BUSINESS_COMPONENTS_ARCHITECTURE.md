# BUSINESS COMPONENTS - ARQUITECTURA
**Última actualización:** Enero 2025

---

## 🎯 PROPÓSITO

Los **Business Components** son componentes reutilizables y modulares que implementan patrones de negocio específicos.

**PRINCIPIOS FUNDAMENTALES:**
- ✅ SIN estilos inline
- ✅ Máxima modularidad y reutilización
- ✅ Solo clases Tailwind CSS
- ✅ Componentes puramente presentacionales
- ✅ Fácil de mantener y escalar

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
/components/business/
├── ColorSwatch.tsx                  # Muestra de color reutilizable
├── GridSystemPreview.tsx            # Preview de sistema de grid
├── SpacingPreview.tsx               # Preview de escalas de espaciado
├── StatusKPICard.tsx                # KPI card para estado de facturas
└── BUSINESS_COMPONENTS_ARCHITECTURE.md  # Este documento
```

---

## 📦 COMPONENTES DISPONIBLES

### 1. **ColorSwatch** (ColorSwatch.tsx)

**Propósito:** Muestra visual de muestras de color con información y copy-to-clipboard.

**Props:**
```typescript
interface ColorSwatchProps {
  id: string;              // Identificador único del color
  name: string;            // Nombre del color (ej: "Primary")
  hex: string;             // Código hexadecimal (#DEFB49)
  rgb: string;             // Código RGB (rgb(222, 251, 73))
  usage: string;           // Descripción de uso
  isPrimary?: boolean;     // Si es el color primario
  copiedColor: string | null;  // Estado de copiado
  onCopy: (text: string, id: string) => void;  // Callback de copy
}
```

**Uso:**
```typescript
<ColorSwatch
  id="primary"
  name="Primary"
  hex="#DEFB49"
  rgb="rgb(222, 251, 73)"
  usage="CTAs, estados activos, focus rings"
  isPrimary={true}
  copiedColor={copiedColor}
  onCopy={copyToClipboard}
/>
```

**Características:**
- ✅ Sin estilos inline
- ✅ Usa solo clases Tailwind
- ✅ Botón de copy integrado
- ✅ Muestra HEX, RGB y uso

---

### 2. **GridSystemPreview** (GridSystemPreview.tsx)

**Propósito:** Visualización de sistemas de grid responsivos.

**Props:**
```typescript
interface GridSystemPreviewProps {
  device: string;    // Nombre del dispositivo (Desktop/Tablet/Mobile)
  columns: number;   // Número de columnas (12, 6, 4)
  gutter: string;    // Espacio entre columnas (24px, 16px)
  margin: string;    // Margen exterior (48px, 32px, 16px)
}
```

**Uso:**
```typescript
<GridSystemPreview
  device="Desktop"
  columns={12}
  gutter="24px"
  margin="48px"
/>
```

**Características:**
- ✅ Sin estilos inline
- ✅ Grid dinámico usando Tailwind grid-cols-*
- ✅ Soporta 4, 6 y 12 columnas
- ✅ Badge con contador de columnas

---

### 3. **SpacingPreview** (SpacingPreview.tsx)

**Propósito:** Visualización de escalas de espaciado del sistema.

**Props:**
```typescript
interface SpacingPreviewProps {
  name: string;        // Nombre del espacio (xs, sm, md, base, lg, xl, 2xl, 3xl)
  value: string;       // Valor en píxeles (4px, 8px, 12px, etc.)
  multiplier: string;  // Multiplicador base (1×, 2×, 3×, etc.)
}
```

**Uso:**
```typescript
<SpacingPreview
  name="base"
  value="16px"
  multiplier="4×"
/>
```

**Características:**
- ✅ Sin estilos inline
- ✅ Mapeo de valores a clases Tailwind (w-1, w-2, w-3, etc.)
- ✅ Visualización clara del tamaño
- ✅ Información de multiplicador

---

### 4. **StatusKPICard** (StatusKPICard.tsx)

**Propósito:** Tarjeta KPI para mostrar estadísticas de estado de facturas.

**Props:**
```typescript
interface StatusKPICardProps {
  title: string;
  value: number;
  total: number;
  percentage?: number;
  icon?: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
}
```

**Uso:**
```typescript
<StatusKPICard
  title="Facturas Aprobadas"
  value={45}
  total={100}
  percentage={45}
  variant="success"
/>
```

**Características:**
- ✅ Sin estilos inline
- ✅ Variantes de color predefinidas
- ✅ Progress bar integrado
- ✅ Icono personalizable

---

## 🚨 REGLAS CRÍTICAS

### ❌ NUNCA HACER:

1. **NUNCA usar estilos inline:**
   ```typescript
   // ❌ INCORRECTO
   <div style={{ backgroundColor: color.hex }}>...</div>
   
   // ✅ CORRECTO
   <div className="bg-primary">...</div>
   ```

2. **NUNCA hardcodear valores:**
   ```typescript
   // ❌ INCORRECTO
   <div style={{ width: "16px" }}>...</div>
   
   // ✅ CORRECTO
   <div className="w-4">...</div>
   ```

3. **NUNCA mezclar lógica de negocio:**
   ```typescript
   // ❌ INCORRECTO - Lógica de negocio en componente
   const fetchData = () => { ... }
   
   // ✅ CORRECTO - Solo presentación
   const ColorSwatch = ({ data }) => { ... }
   ```

### ✅ SIEMPRE HACER:

1. **Usar clases Tailwind dinámicas con cn():**
   ```typescript
   import { cn } from "../../lib/utils";
   
   <div className={cn(
     "base-classes",
     isPrimary && "bg-[#DEFB49]",
     !isPrimary && "bg-secondary"
   )}>
   ```

2. **Documentar con comentarios protectores:**
   ```typescript
   /**
    * ColorSwatch Component
    * 
    * BUSINESS PATTERN: Componente reutilizable para mostrar muestras de color
    * 
    * NO MODIFICAR sin consultar: /DSM_ARCHITECTURE.md
    * Parte del sistema modular de Brand Guidelines
    */
   ```

3. **Separar presentación de lógica:**
   - Componentes solo renderizan
   - Lógica de estado en páginas padres
   - Callbacks para acciones

---

## 📝 CHECKLIST ANTES DE CREAR COMPONENTE

Antes de crear un nuevo Business Component:

- [ ] ¿Es reutilizable en al menos 2 lugares diferentes?
- [ ] ¿Está libre de estilos inline?
- [ ] ¿Usa solo clases Tailwind CSS?
- [ ] ¿Tiene TypeScript interfaces definidas?
- [ ] ¿Está documentado con comentarios protectores?
- [ ] ¿Es puramente presentacional (sin lógica de negocio)?
- [ ] ¿Tiene un nombre descriptivo y claro?
- [ ] ¿Ha sido agregado a este documento?

---

## 🎯 CONVENCIONES DE NOMENCLATURA

### Nombres de archivos:
- **PascalCase** para componentes: `ColorSwatch.tsx`
- Mismo nombre que el componente exportado
- Ubicación: `/components/business/`

### Nombres de componentes:
- **Descriptivo** del propósito: `StatusKPICard`, no `Card1`
- **No genérico:** `GridSystemPreview`, no `GridPreview`
- **Específico:** `ColorSwatch`, no `ColorDisplay`

### Nombres de props:
- **Claros y específicos:** `isPrimary`, no `primary`
- **Consistentes:** Mismo patrón en todos los componentes
- **TypeScript interfaces:** Siempre tipar las props

---

## 🔄 FLUJO DE USO

### 1. Importar en página:
```typescript
import { ColorSwatch } from "../business/ColorSwatch";
import { GridSystemPreview } from "../business/GridSystemPreview";
import { SpacingPreview } from "../business/SpacingPreview";
import { StatusKPICard } from "../business/StatusKPICard";
```

### 2. Usar en renderizado:
```typescript
export function BrandLayoutPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  
  return (
    <div>
      {colors.map((color) => (
        <ColorSwatch
          key={color.id}
          {...color}
          copiedColor={copiedColor}
          onCopy={copyToClipboard}
        />
      ))}
    </div>
  );
}
```

---

## 📊 BENEFICIOS DEL SISTEMA

### Para Desarrolladores:
- ✅ Componentes listos para usar
- ✅ Sin necesidad de escribir estilos inline
- ✅ Fácil de mantener y actualizar
- ✅ TypeScript para autocompletado

### Para el Sistema:
- ✅ Consistencia visual garantizada
- ✅ Fácil de escalar
- ✅ Separación de preocupaciones
- ✅ Reutilización de código

### Para el Diseño:
- ✅ Componentes modulares y predecibles
- ✅ Facilita iteraciones de diseño
- ✅ Mantiene coherencia de marca

---

## 📚 DOCUMENTACIÓN RELACIONADA

| Documento | Propósito | Ubicación |
|-----------|-----------|-----------|\n| **DSM_ARCHITECTURE.md** | Arquitectura completa del DSM | `/DSM_ARCHITECTURE.md` |
| **README.md** | Guía general del proyecto | `/README.md` |
| **Guidelines.md** | Guía oficial del sistema (PROVIDED BY USER) | `/Guidelines.md` |

---

## 📋 HISTORIAL DE CAMBIOS

### 2025-01-16
- ✅ Removido HorizontalStepper duplicado - usar StepIndicator del DSM oficial
- ✅ Actualizado StepperShowcase para usar componente oficial del DSM
- ✅ Total componentes Business: 4 (ColorSwatch, GridSystemPreview, SpacingPreview, StatusKPICard)

### 2025-01-12
- ✅ Creados componentes modulares: ColorSwatch, GridSystemPreview, SpacingPreview
- ✅ Eliminados TODOS los estilos inline de BrandLayoutPage
- ✅ Refactorizado para máxima reutilización
- ✅ Documentado sistema completo de Business Components
- ✅ Establecidas reglas y convenciones

---

## 🆘 SOPORTE

### Si necesitas crear un nuevo Business Component:
1. Verifica el checklist completo
2. Sigue las convenciones de nomenclatura
3. Documenta con comentarios protectores
4. Agrega a este documento
5. Prueba en al menos 2 contextos

### Si necesitas modificar un componente existente:
1. Lee los comentarios protectores en el archivo
2. Verifica que los cambios no rompan otros usos
3. Mantén la ausencia de estilos inline
4. Actualiza la documentación
5. Prueba en todas las páginas que lo usan

---

**FIN DEL DOCUMENTO - BUSINESS_COMPONENTS_ARCHITECTURE.md**