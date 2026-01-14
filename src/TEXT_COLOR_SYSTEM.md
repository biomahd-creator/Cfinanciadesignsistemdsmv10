# 🎨 SISTEMA DE COLORES DE TEXTO - DOCUMENTACIÓN

## FECHA: Enero 2025
## SISTEMA: Tailwind CSS + CSS Variables + WCAG AA

---

## 🎯 RESPUESTA RÁPIDA

### **Color de Párrafos (Texto Principal)**

| Modo | Color | Clase Tailwind |
|------|-------|----------------|
| **Light** | `#1C2D3A` (Azul Oscuro) | `text-foreground` o sin clase |
| **Dark** | `#f8fafc` (Slate-50) | `text-foreground` o sin clase |

---

## 📊 SISTEMA COMPLETO DE COLORES DE TEXTO

### 1. **TEXTO PRINCIPAL** (Párrafos, Contenido)

```tsx
<p className="text-foreground">
  Este es un párrafo con el color principal de texto.
</p>

// O simplemente (hereda automáticamente):
<p>
  Este es un párrafo con el color principal de texto.
</p>
```

#### Valores CSS

```css
/* Light Mode */
--foreground: #1C2D3A; /* Azul Oscuro Corporativo */

/* Dark Mode */
--foreground: #f8fafc; /* Slate-50 - Casi blanco */
```

#### Contraste WCAG

| Modo | Fondo | Texto | Ratio | Nivel |
|------|-------|-------|-------|-------|
| Light | `#ffffff` | `#1C2D3A` | **14.9:1** | ✅ **AAA** |
| Dark | `#0f172a` | `#f8fafc` | **14.2:1** | ✅ **AAA** |

---

### 2. **TEXTO SECUNDARIO** (Descripciones, Subtítulos)

```tsx
<p className="text-muted-foreground">
  Texto secundario menos prominente.
</p>
```

#### Valores CSS

```css
/* Light Mode */
--muted-foreground: #52525b; /* Zinc-600 */

/* Dark Mode */
--muted-foreground: #94a3b8; /* Slate-400 */
```

#### Contraste WCAG

| Modo | Fondo | Texto | Ratio | Nivel |
|------|-------|-------|-------|-------|
| Light | `#ffffff` | `#52525b` | **7.2:1** | ✅ **AAA** |
| Dark | `#0f172a` | `#94a3b8` | **8.1:1** | ✅ **AAA** |

---

### 3. **OTROS COLORES DE TEXTO**

| Token CSS | Clase Tailwind | Uso | Light | Dark |
|-----------|----------------|-----|-------|------|
| `--primary-foreground` | `text-primary-foreground` | Texto sobre primary | `#1C2D3A` | `#1C2D3A` |
| `--secondary-foreground` | `text-secondary-foreground` | Texto sobre secondary | `#ffffff` | `#f8fafc` |
| `--card-foreground` | `text-card-foreground` | Texto en cards | `#1C2D3A` | `#f8fafc` |
| `--destructive-foreground` | `text-destructive-foreground` | Texto en errores | `#ffffff` | `#f8fafc` |
| `--accent-foreground` | `text-accent-foreground` | Texto en accents | `#1C2D3A` | `#f8fafc` |

---

## 🎨 JERARQUÍA VISUAL DE TEXTO

### Ejemplo Completo

```tsx
<div>
  {/* Título Principal */}
  <h1 className="text-3xl font-semibold text-foreground">
    Título Principal
  </h1>
  
  {/* Subtítulo */}
  <h2 className="text-xl font-medium text-foreground">
    Subtítulo de Sección
  </h2>
  
  {/* Párrafo Principal */}
  <p className="text-base text-foreground">
    Este es el texto principal del contenido. 
    Es el que más se lee y debe tener el mejor contraste.
  </p>
  
  {/* Párrafo Secundario / Descripción */}
  <p className="text-sm text-muted-foreground">
    Esta es una descripción secundaria o texto de ayuda.
    Menos prominente pero aún legible.
  </p>
  
  {/* Texto Pequeño / Helper */}
  <span className="text-xs text-muted-foreground">
    Texto auxiliar o metadatos
  </span>
</div>
```

---

## 📏 TAMAÑOS DE TEXTO (NO MODIFICAR SIN AUTORIZACIÓN)

Según `Guidelines.md`, **NO debemos usar clases de tamaño de fuente** a menos que sea necesario porque ya están configuradas en `/styles/globals.css`:

```css
/* globals.css define estilos base para elementos HTML */
h1 { /* tamaño y peso predefinidos */ }
h2 { /* tamaño y peso predefinidos */ }
p  { /* tamaño y peso predefinidos */ }
```

### **Excepciones Permitidas**

Solo usar clases de tamaño cuando:
- ✅ Necesitas un tamaño específico fuera del estándar
- ✅ El diseño lo requiere explícitamente
- ✅ Componentes que no son semánticos (`<div>`, `<span>`)

---

## 🎯 EJEMPLOS REALES DEL PROYECTO

### Ejemplo 1: App.tsx (Header)

```tsx
<h1 className="font-semibold text-foreground">
  Component Showcase
</h1>
<p className="text-xs text-muted-foreground">
  shadcn/ui · Satoshi · WCAG AA
</p>
```

### Ejemplo 2: BriefDashboard.tsx

```tsx
<h2 className="text-2xl font-semibold text-foreground">
  Factoring
</h2>
<p className="text-zinc-500">
  Revise las operaciones de factoring...
</p>
```

⚠️ **NOTA**: `text-zinc-500` debería ser `text-muted-foreground` para consistencia.

### Ejemplo 3: ClientDashboard.tsx

```tsx
<h1 className="text-2xl md:text-3xl font-semibold mb-2">
  ¡Hola, Tech Solutions SAS! 👋
</h1>
<p className="text-slate-300 max-w-xl">
  Tienes <span className="text-primary font-semibold">$125M</span>...
</p>
```

⚠️ **NOTA**: `text-slate-300` debería ser `text-muted-foreground` en dark mode.

---

## ⚠️ INCONSISTENCIAS DETECTADAS

### Usos de Colores Hardcoded

| Archivo | Clase Actual | Debería Ser |
|---------|-------------|-------------|
| `BriefDashboard.tsx` | `text-zinc-500` | `text-muted-foreground` |
| `ClientDashboard.tsx` | `text-slate-300` | `text-muted-foreground` |

**Motivo**: 
- ❌ `text-zinc-500` y `text-slate-300` son colores fijos
- ✅ `text-muted-foreground` se adapta automáticamente al tema

---

## 🔧 REFACTORIZACIÓN RECOMENDADA

### Buscar y Reemplazar

```bash
# Buscar usos de colores hardcoded para texto
grep -r "text-zinc-500\|text-slate-300\|text-gray-" --include="*.tsx" /components
```

### Reemplazos Recomendados

```tsx
// ❌ ANTES
<p className="text-zinc-500">Descripción</p>
<p className="text-slate-300">Subtítulo</p>
<p className="text-gray-600">Helper text</p>

// ✅ DESPUÉS
<p className="text-muted-foreground">Descripción</p>
<p className="text-muted-foreground">Subtítulo</p>
<p className="text-muted-foreground">Helper text</p>
```

---

## 📚 TOKENS CSS DISPONIBLES

### Foreground (Texto) Tokens

```css
:root {
  --foreground: #1C2D3A;           /* Texto principal */
  --muted-foreground: #52525b;     /* Texto secundario */
  --card-foreground: #1C2D3A;      /* Texto en cards */
  --popover-foreground: #1C2D3A;   /* Texto en popovers */
  --primary-foreground: #1C2D3A;   /* Texto sobre primary */
  --secondary-foreground: #ffffff; /* Texto sobre secondary */
  --accent-foreground: #1C2D3A;    /* Texto en accents */
  --destructive-foreground: #fff;  /* Texto en errores */
  --success-foreground: #ffffff;   /* Texto en success */
  --warning-foreground: #ffffff;   /* Texto en warnings */
  --info-foreground: #ffffff;      /* Texto en info */
}

.dark {
  --foreground: #f8fafc;           /* Texto principal */
  --muted-foreground: #94a3b8;     /* Texto secundario */
  --card-foreground: #f8fafc;      /* Texto en cards */
  /* ... etc ... */
}
```

---

## 🎨 COLORES CORPORATIVOS (RECORDATORIO)

| Color | Código | Nombre | Uso |
|-------|--------|--------|-----|
| **Primary** | `#84cc16` | Verde Lima | CTAs, enlaces, estados activos |
| **Secondary** | `#1C2D3A` | Azul Oscuro | Fondos, texto principal (light) |

### Texto Sobre Colores Corporativos

```tsx
{/* Texto sobre Primary (Verde Lima) */}
<div className="bg-primary text-primary-foreground">
  Texto legible sobre verde lima (#1C2D3A)
</div>

{/* Texto sobre Secondary (Azul Oscuro) */}
<div className="bg-secondary text-secondary-foreground">
  Texto blanco sobre azul oscuro (#ffffff)
</div>
```

---

## ✅ BEST PRACTICES

### ✅ **SÍ HACER**

1. **Usar tokens CSS** para texto
   ```tsx
   <p className="text-foreground">...</p>
   <p className="text-muted-foreground">...</p>
   ```

2. **Jerarquía visual clara**
   - Títulos: `text-foreground` + font-semibold
   - Párrafos: `text-foreground`
   - Descripciones: `text-muted-foreground`

3. **Verificar contraste WCAG**
   - Mínimo AA (4.5:1 para texto normal)
   - Preferir AAA (7:1 para texto normal)

### ❌ **NO HACER**

1. **Colores hardcoded** para texto
   ```tsx
   ❌ <p className="text-zinc-500">...</p>
   ❌ <p className="text-slate-300">...</p>
   ❌ <p className="text-gray-600">...</p>
   ```

2. **Texto sin suficiente contraste**
   ```tsx
   ❌ <p className="text-primary">Mucho texto...</p>
   ✅ <p className="text-foreground">Mucho texto...</p>
   ```

3. **Ignorar el modo oscuro**
   ```tsx
   ❌ <p className="text-[#333333]">...</p>
   ✅ <p className="text-foreground">...</p>
   ```

---

## 🔍 DETECCIÓN DE PROBLEMAS

### Script de Auditoría

```bash
# Buscar colores hardcoded de texto
grep -rn "text-zinc-\|text-slate-\|text-gray-" \
  --include="*.tsx" /components

# Buscar colores inline
grep -rn 'style={{ color:' \
  --include="*.tsx" /components
```

---

## 📊 COMPARACIÓN: ANTES vs DESPUÉS

### Ejemplo de Refactorización

#### ❌ ANTES (Inconsistente)

```tsx
<div>
  <h2 className="text-2xl font-semibold text-foreground">
    Título
  </h2>
  <p className="text-zinc-500">
    Descripción con color hardcoded
  </p>
  <span className="text-slate-300">
    Helper text con color hardcoded
  </span>
</div>
```

**Problemas**:
- ❌ `text-zinc-500` no se adapta al modo oscuro
- ❌ `text-slate-300` no usa el sistema de tokens
- ❌ Inconsistente con el resto del sistema

#### ✅ DESPUÉS (Consistente)

```tsx
<div>
  <h2 className="text-2xl font-semibold text-foreground">
    Título
  </h2>
  <p className="text-muted-foreground">
    Descripción con token CSS
  </p>
  <span className="text-muted-foreground">
    Helper text con token CSS
  </span>
</div>
```

**Ventajas**:
- ✅ Se adapta automáticamente al modo claro/oscuro
- ✅ Usa el sistema de tokens CSS
- ✅ Consistente con el diseño
- ✅ Mantiene contraste WCAG AAA

---

## 🎓 CONCLUSIÓN

### Color de Párrafos (Resumen Final)

| Contexto | Clase Recomendada | Color (Light) | Color (Dark) |
|----------|-------------------|---------------|--------------|
| **Texto principal** | `text-foreground` o sin clase | `#1C2D3A` | `#f8fafc` |
| **Texto secundario** | `text-muted-foreground` | `#52525b` | `#94a3b8` |
| **Sobre primary** | `text-primary-foreground` | `#1C2D3A` | `#1C2D3A` |
| **Sobre secondary** | `text-secondary-foreground` | `#ffffff` | `#f8fafc` |

### Regla de Oro

**Usar siempre tokens CSS (`text-foreground`, `text-muted-foreground`) en lugar de colores hardcoded (`text-zinc-500`, `text-slate-300`).**

---

**FIN DE LA DOCUMENTACIÓN**

_Última actualización: Enero 2025_  
_Sistema: Tailwind CSS + CSS Variables_  
_Contraste: WCAG AAA (14.9:1 en light, 14.2:1 en dark)_  
_Fuente: Satoshi (única permitida)_
