# DSM (DESIGN SYSTEM MANAGER) - ARQUITECTURA COMPLETA
**Última actualización:** Enero 2025

---

## 🎯 PROPÓSITO
Este documento es la **FUENTE DE VERDAD** del Design System Manager (DSM).
**ANTES DE HACER CAMBIOS:** Consultar este documento para no romper funcionalidades existentes.

---

## 📁 ESTRUCTURA DE ARCHIVOS CORE

```
/
├── App.tsx                          # CORE - Punto de entrada, router de modos (DSM/Factoring)
├── DSM_ARCHITECTURE.md              # Este documento (LEER ANTES DE CAMBIOS)
├── Guidelines.md                    # Guía oficial del sistema (PROVIDED BY USER)
├── /components/
│   ├── SidebarNew.tsx               # CRITICAL - Navegación principal con acordeones
│   ├── PageRenderer.tsx             # CRITICAL - Enrutador de páginas (150+ casos)
│   ├── Logo.tsx                     # Logo de Financio
│   ├── ThemeProvider.tsx            # Sistema de temas (claro/oscuro)
│   │
│   ├── /pages/                      # 80+ páginas individuales de componentes
│   │   ├── HomePage.tsx
│   │   ├── ButtonPageNew.tsx
│   │   ├── InputPageNew.tsx
│   │   └── ... (77+ más)
│   │
│   ├── /ui/                         # 43 componentes oficiales shadcn/ui
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── ... (41+ más)
│   │
│   ├── /atomic/                     # 23 componentes Atomic Design
│   │   ├── /molecules/
│   │   ├── /organisms/
│   │   ├── /templates/
│   │   └── /pages/
│   │
│   ├── /business/                   # Business Patterns
│   │   └── StatusKPICard.tsx
│   │
│   ├── /factoring/                  # Factoring App Module (ver FACTORING_ARCHITECTURE.md)
│   │   ├── FactoringApp.tsx
│   │   └── /views/
│   │
│   └── /accessibility/              # Componentes de accesibilidad WCAG
│       ├── SkipLink.tsx
│       ├── LiveRegion.tsx
│       └── FocusTrap.tsx
│
└── /styles/
    └── globals.css                  # Tokens de color, tipografía Satoshi, temas
```

---

## 🗺️ FLUJO DE NAVEGACIÓN PRINCIPAL

### **App.tsx** - Router de Modos

```typescript
type AppMode = "dsm" | "factoring";

if (appMode === "factoring") {
  return <FactoringApp onExit={() => setAppMode("dsm")} />
}

// DSM Mode (Default)
return (
  <ThemeProvider>
    <SidebarProvider>
      <SidebarNew activePage={activePage} onPageChange={setActivePage} />
      <PageRenderer pageId={activePage} />
    </SidebarProvider>
  </ThemeProvider>
)
```

### Flujo de Navegación:

```
Usuario → Click en sidebar (SidebarNew.tsx)
            ↓
        onPageChange(pageId) emitido
            ↓
        App.tsx actualiza activePage state
            ↓
        PageRenderer recibe nuevo pageId
            ↓
        Switch statement renderiza componente
            ↓
        Componente se muestra en pantalla
```

---

## 📋 MAPA COMPLETO DE PageId (150+ páginas)

### **Type Definition** (en SidebarNew.tsx)

```typescript
export type PageId =
  // Home (2)
  | "home" | "dsm-dashboard"
  
  // Actions (4)
  | "button" | "button-new" | "toggle" | "toggle-group"
  
  // Forms (18)
  | "input" | "input-new" | "input-file" 
  | "select" | "select-new" 
  | "checkbox" | "checkbox-new" 
  | "radio-group" | "switch" | "slider" 
  | "textarea" | "textarea-new" | "textarea-autoresize" 
  | "calendar" | "calendar-new" 
  | "form" | "form-new" 
  | "input-otp" | "input-otp-new" 
  | "label" | "combobox" | "combobox-new" 
  | "multi-select" | "date-picker" | "date-picker-new" 
  | "date-range-picker"
  
  // Navigation (9)
  | "tabs" | "tabs-new" | "breadcrumb" | "command" 
  | "dropdown-menu" | "menubar" | "navigation-menu" 
  | "pagination" | "context-menu"
  
  // Data Display (9)
  | "card" | "card-new" | "table" | "table-new" 
  | "badge" | "badge-new" | "avatar" | "hover-card" | "separator"
  
  // Feedback (11)
  | "alert" | "alert-new" | "alert-dialog" 
  | "dialog" | "dialog-new" | "toast" | "tooltip" 
  | "progress" | "skeleton" | "sheet" | "drawer" | "popover"
  
  // Layout (6)
  | "accordion" | "carousel" | "collapsible" 
  | "resizable" | "scroll-area" | "sidebar-showcase"
  
  // Business Patterns (13)
  | "invoice-generator" | "payment-form" | "editable-table" 
  | "invoice-upload" | "stats-dashboard" | "quick-action" 
  | "data-table-advanced" | "advanced-filter" 
  | "approval-timeline" | "multi-step-wizard" 
  | "multi-step-form" | "multi-step-form-vertical" 
  | "multi-step-wizard-vertical"
  
  // Atomic Design (5)
  | "atomic-atoms" | "atomic-molecules" 
  | "atomic-organisms" | "atomic-templates" | "atomic-pages"
  
  // Advanced (12)
  | "charts" | "color-picker" | "rating" | "kanban" 
  | "date-range-advanced" | "file-uploader" 
  | "rich-text-editor" | "timeline" | "data-table" 
  | "tree-table" | "pivot-table" | "export-data"
  
  // Special (7)
  | "comparison" | "official" | "accessibility" 
  | "brand-layout" | "theme-customizer" 
  | "elevation" | "grid-showcase"
  
  // Business Modules (6)
  | "factoring-selection" | "factoring-dashboard" 
  | "operations-list" | "approval-flow" 
  | "kpi-showcase" | "status-kpis"
  
  // C-Financia Platform (5)
  | "liquidity-calculator" | "onboarding" 
  | "cf-dashboard" | "admin-portal" | "brief-dashboard";
```

**Total: 107+ PageId values** ✅

---

## 🏗️ CATEGORÍAS DEL SIDEBAR (10 secciones)

| Categoría | ID | Icono | Count | PageIds |
|-----------|----|----|-------|---------|
| **Actions** | `actions` | MousePointerClick | 4 | button, button-new, toggle, toggle-group |
| **Forms** | `forms` | FormInput | 18 | input, select, checkbox, radio-group, etc. |
| **Navigation** | `navigation` | Compass | 9 | tabs, breadcrumb, command, dropdown-menu, etc. |
| **Data Display** | `data-display` | Grid3x3 | 9 | card, table, badge, avatar, separator, etc. |
| **Feedback** | `feedback` | MessageSquare | 11 | alert, dialog, toast, tooltip, progress, etc. |
| **Layout** | `layout` | LayoutGrid | 6 | accordion, carousel, collapsible, scroll-area, etc. |
| **Business Patterns** | `patterns` | Layers | 13 | invoice-generator, multi-step-wizard, etc. |
| **Atomic Design** | `atomic` | Atom | 5 | atoms, molecules, organisms, templates, pages |
| **Advanced** | `advanced` | Sparkles | 12 | charts, kanban, file-uploader, data-table, etc. |
| **Business Modules** | `business` | Briefcase | 11 | factoring-selection, approval-flow, etc. |

**Total: 107+ enlaces verificados** ✅

---

## 🚨 REGLAS CRÍTICAS (NO ROMPER)

### ❌ NUNCA HACER:

1. **Eliminar un PageId sin verificar TODAS sus referencias**
   - Buscar en `SidebarNew.tsx` (en el array `menuSections`)
   - Buscar en `PageRenderer.tsx` (en el switch statement)
   - Buscar en archivos que naveguen a ese PageId
   - Verificar imports en `PageRenderer.tsx`

2. **Cambiar nombre de PageId sin actualizar TODOS los lugares**
   - Type definition en `SidebarNew.tsx` (línea 50-80)
   - Case en switch de `PageRenderer.tsx`
   - Items en `menuSections` array de `SidebarNew.tsx`
   - Cualquier navegación programática que use ese PageId

3. **Modificar PageRenderer.tsx sin verificar imports**
   - Cada caso del switch requiere un import del componente
   - Eliminar un caso → Eliminar el import (o viceversa)
   - Agregar un caso → Agregar el import primero

4. **Cambiar estructura del sidebar sin actualizar este documento**
   - Cada sección debe estar documentada en la tabla de categorías
   - Los contadores (`count`) deben coincidir con items reales

5. **Modificar App.tsx sin entender el flujo de modos**
   - `appMode` controla si estamos en DSM o Factoring
   - Cambiar esto afecta TODO el comportamiento de la app

6. **Usar otra fuente que no sea Satoshi**
   - SOLO Satoshi está permitida en todo el sistema
   - Ver sección "REGLAS DE TIPOGRAFÍA" abajo

### ✅ SIEMPRE HACER:

1. **Antes de modificar:** Leer este documento completo (15 min)
2. **Antes de eliminar PageId:** Buscar TODAS las referencias con Ctrl+F
3. **Al agregar PageId:**
   - Agregar al type `PageId` en `SidebarNew.tsx`
   - Agregar caso en switch de `PageRenderer.tsx`
   - Agregar import del componente en `PageRenderer.tsx`
   - Agregar item en `menuSections` de `SidebarNew.tsx`
   - Actualizar la tabla de categorías en este documento
4. **Al eliminar PageId:**
   - Eliminar del type `PageId`
   - Eliminar caso del switch
   - Eliminar import
   - Eliminar de `menuSections`
   - Actualizar este documento
5. **Después de cambios grandes:** Probar navegación completa del sidebar

---

## 🔧 COMPONENTES CRÍTICOS EXPLICADOS

### 1. **App.tsx** - Router Principal

**Responsabilidades:**
- Controlar modo de app (DSM vs Factoring)
- Gestionar tema (dark/light mode)
- Gestionar página activa del DSM
- Proveer contextos globales (Theme, Sidebar, Toast)

**Estados críticos:**
```typescript
const [darkMode, setDarkMode] = useState(false);
const [activePage, setActivePage] = useState<PageId>("home");
const [appMode, setAppMode] = useState<AppMode>("dsm");
```

**NO MODIFICAR SIN:** Entender que afecta a toda la aplicación.

---

### 2. **SidebarNew.tsx** - Navegación Principal

**Responsabilidades:**
- Definir type `PageId` (FUENTE DE VERDAD de IDs)
- Renderizar sidebar con acordeones por categoría
- Emitir eventos de navegación (`onPageChange`)
- Mostrar badges "NEW" en componentes recientes
- Mostrar contadores por categoría

**Estructura de datos:**
```typescript
const menuSections: MenuSection[] = [
  {
    id: "actions",
    label: "Actions",
    icon: MousePointerClick,
    count: 4,
    items: [
      { id: "button", label: "Button" },
      { id: "button-new", label: "Button (DSM)", new: true },
      // ...
    ]
  },
  // ... 9 secciones más
];
```

**ANTES DE MODIFICAR:**
- Cada `items[].id` debe existir en el type `PageId`
- Cada `items[].id` debe tener un caso en `PageRenderer.tsx`
- El `count` debe coincidir con `items.length`

---

### 3. **PageRenderer.tsx** - Enrutador de Páginas

**Responsabilidades:**
- Recibir `pageId` y renderizar el componente correspondiente
- Importar TODOS los componentes de páginas
- Switch statement con 107+ casos

**Estructura:**
```typescript
export function PageRenderer({ pageId }: PageRendererProps) {
  switch (pageId) {
    case "home":
      return <HomePage />;
    case "button":
      return <ButtonPage />;
    case "button-new":
      return <ButtonPageNew />;
    // ... 104+ casos más
    default:
      return <ButtonPageNew />; // Fallback
  }
}
```

**ANTES DE MODIFICAR:**
- Verificar que el import del componente existe
- Verificar que el PageId existe en el type
- NO eliminar casos sin verificar referencias
- El default case es el fallback (actualmente ButtonPageNew)

---

## 📊 ESTADÍSTICAS DEL SISTEMA

### Componentes Implementados

| Categoría | Componentes | Archivos | Estado |
|-----------|-------------|----------|--------|
| **UI Base** (shadcn/ui) | 43 | /components/ui/ | ✅ 100% |
| **Páginas DSM** | 80+ | /components/pages/ | ✅ 95% |
| **Atomic Design** | 23 | /components/atomic/ | ✅ 100% |
| **Business Patterns** | 10+ | /components/business/ | ✅ 80% |
| **Business Modules** | 11 | /components/ | ✅ 90% |
| **Accesibilidad** | 3 | /components/accessibility/ | ✅ 100% |
| **Total** | **170+** | - | ✅ 95% |

### PageIds por Categoría

| Categoría | Count |
|-----------|-------|
| Home | 2 |
| Actions | 4 |
| Forms | 18 |
| Navigation | 9 |
| Data Display | 9 |
| Feedback | 11 |
| Layout | 6 |
| Business Patterns | 13 |
| Atomic Design | 5 |
| Advanced | 12 |
| Special | 7 |
| Business Modules | 11 |
| **TOTAL** | **107+** ✅ |

---

## 🔀 FLUJOS DE NAVEGACIÓN COMUNES

### Flujo 1: Navegar a un componente
```
Usuario → Click en sidebar item
            ↓
        SidebarNew emite onPageChange("button-new")
            ↓
        App.tsx actualiza setActivePage("button-new")
            ↓
        PageRenderer recibe pageId="button-new"
            ↓
        Switch case "button-new" → return <ButtonPageNew />
            ↓
        Componente ButtonPageNew se renderiza
```

### Flujo 2: Cambiar a modo Factoring
```
Usuario → Click en "Factoring Selection" (sidebar Business Modules)
            ↓
        onPageChange("factoring-selection")
            ↓
        PageRenderer → <FactoringSelectionPage />
            ↓
        Usuario → Click en botón "Abrir Factoring App"
            ↓
        setAppMode("factoring")
            ↓
        App.tsx renderiza <FactoringApp />
            ↓
        Nueva app completa (ver FACTORING_ARCHITECTURE.md)
```

### Flujo 3: Cambiar tema (dark/light)
```
Usuario → Click en botón Sol/Luna (header)
            ↓
        toggleDarkMode()
            ↓
        setDarkMode(!darkMode)
            ↓
        document.documentElement.classList.toggle("dark")
            ↓
        ThemeProvider aplica CSS variables de modo oscuro
```

---

## 🐛 DEBUGGING COMÚN

### Problema: "Página no se muestra al hacer click en sidebar"

**Verificaciones:**
1. ¿El PageId existe en el type `PageId`? (SidebarNew.tsx línea 50-80)
2. ¿El PageId está en el array `menuSections`? (SidebarNew.tsx línea 102+)
3. ¿Hay un caso para ese PageId en PageRenderer.tsx?
4. ¿El import del componente está correcto en PageRenderer.tsx?
5. ¿El componente existe en /components/pages/?

**Solución típica:**
```typescript
// 1. Agregar al type PageId
export type PageId = "..." | "nuevo-componente";

// 2. Agregar import en PageRenderer.tsx
import { NuevoComponentePage } from "./pages/NuevoComponentePage";

// 3. Agregar caso en switch
case "nuevo-componente":
  return <NuevoComponentePage />;

// 4. Agregar item en menuSections
items: [
  { id: "nuevo-componente", label: "Nuevo Componente", new: true }
]
```

---

### Problema: "Badge NEW no aparece"

**Verificación:**
- ¿El item tiene `new: true` en menuSections?

**Solución:**
```typescript
{ id: "button-new", label: "Button (DSM)", new: true }
```

---

### Problema: "Contador de categoría incorrecto"

**Verificación:**
- ¿El `count` coincide con `items.length`?

**Solución:**
```typescript
{
  id: "actions",
  label: "Actions",
  count: 4, // Debe ser igual a items.length
  items: [
    { id: "button", label: "Button" },
    { id: "button-new", label: "Button (DSM)" },
    { id: "toggle", label: "Toggle" },
    { id: "toggle-group", label: "Toggle Group" },
  ] // 4 items
}
```

---

### Problema: "Import error en PageRenderer"

**Error típico:**
```
Cannot find module './pages/ComponentePage'
```

**Verificaciones:**
1. ¿El archivo existe en /components/pages/?
2. ¿El nombre del archivo coincide con el import?
3. ¿El componente tiene export correcto?

**Solución:**
```typescript
// Archivo: /components/pages/ComponentePage.tsx
export function ComponentePage() { ... }

// PageRenderer.tsx
import { ComponentePage } from "./pages/ComponentePage";
```

---

## ⚠️ REGLAS DE TIPOGRAFÍA

### Fuente Única: Satoshi

**OBLIGATORIO EN TODO EL SISTEMA:**

**✅ USO CORRECTO:**
```css
/* En globals.css (YA CONFIGURADO) */
body {
  font-family: 'Satoshi', sans-serif;
  letter-spacing: var(--letter-spacing-base);
}

/* Si necesitas especificar en código inline */
font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif;
```

**❌ USO INCORRECTO:**
```css
/* NO HACER - Otras fuentes NO están permitidas */
font-family: 'Inter', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

### Configuración Actual (globals.css)

**Import de Satoshi:**
```css
@import url('https://fonts.cdnfonts.com/css/satoshi');
```

**Aplicación global:**
```css
body {
  font-family: 'Satoshi', sans-serif;
  letter-spacing: var(--letter-spacing-base); /* 0.025em */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**Font weights calibradas para Satoshi:**
```css
--font-weight-light: 300;
--font-weight-normal: 300;
--font-weight-medium: 400;
--font-weight-semibold: 500;
--font-weight-bold: 700;
```

### Escalas Tipográficas

**Títulos:**
- `text-4xl` / `text-5xl` + `font-semibold` - Títulos principales
- `text-2xl` / `text-3xl` + `font-semibold` - Títulos de sección
- `text-xl` + `font-semibold` - Subtítulos

**Cuerpo:**
- `text-base` / `text-sm` + `font-normal` - Texto base
- `text-xs` + `font-medium` - Labels y helpers

**Line-height:**
- Leading relaxed para mejor legibilidad
- Configurado en `line-height: 1.5` por defecto

### Reglas Críticas

1. **NUNCA importar otra fuente:**
   ```typescript
   // ❌ NO HACER
   import '@fontsource/inter';
   import 'https://fonts.googleapis.com/css2?family=Roboto';
   ```

2. **NUNCA usar font-family inline sin Satoshi:**
   ```typescript
   // ❌ NO HACER
   <div style={{ fontFamily: 'Arial, sans-serif' }}>Text</div>
   
   // ✅ HACER (o mejor: no especificar, hereda de body)
   <div style={{ fontFamily: "'Satoshi', sans-serif" }}>Text</div>
   ```

3. **NUNCA modificar el import en globals.css:**
   - El `@import url('https://fonts.cdnfonts.com/css/satoshi');` debe permanecer
   - NO agregar otros imports de fuentes

### Verificación

**Para verificar que Satoshi se está aplicando:**
1. Inspeccionar elemento en DevTools
2. Verificar `computed` styles
3. Debería mostrar: `font-family: Satoshi, sans-serif`

**Archivos que pueden tener font-family especificado:**
- `/styles/globals.css` (configuración global)
- Componentes que generan HTML para imprimir/exportar (debe usar Satoshi)

**Ver configuración completa:** `/styles/globals.css` líneas 1-235

---

## 📝 CHECKLIST ANTES DE CAMBIOS

Antes de modificar archivos core del DSM:

### Para App.tsx:
- [ ] ¿Entiendo el flujo de `appMode` (dsm/factoring)?
- [ ] ¿Mi cambio afecta la navegación global?
- [ ] ¿He probado en ambos modos (DSM y Factoring)?

### Para SidebarNew.tsx:
- [ ] ¿He verificado que el PageId existe en el type?
- [ ] ¿He actualizado el contador de la categoría?
- [ ] ¿He agregado/eliminado el item en `menuSections`?
- [ ] ¿El acordeón se expande correctamente con la página activa?

### Para PageRenderer.tsx:
- [ ] ¿He agregado/verificado el import del componente?
- [ ] ¿He agregado/eliminado el caso en el switch?
- [ ] ¿El componente existe y se exporta correctamente?
- [ ] ¿He probado la navegación a esa página?

### General:
- [ ] ¿He actualizado este documento (MAPA DE PageId, Tabla de Categorías, Historial)?
- [ ] ¿He probado que no rompí navegación existente?
- [ ] ¿He verificado que los badges "NEW" funcionan?

---

## 🔗 DEPENDENCIAS ENTRE ARCHIVOS

```
App.tsx
  ├── Importa: SidebarNew (type PageId)
  ├── Importa: PageRenderer
  ├── Importa: FactoringApp
  ├── Pasa: activePage (state) → PageRenderer
  └── Pasa: onPageChange → SidebarNew

SidebarNew.tsx
  ├── Exporta: type PageId (FUENTE DE VERDAD)
  ├── Exporta: SidebarNew component
  ├── Define: menuSections (array de navegación)
  └── Emite: onPageChange(pageId)

PageRenderer.tsx
  ├── Importa: type PageId de SidebarNew
  ├── Importa: 80+ componentes de /pages/
  ├── Recibe: pageId prop
  └── Renderiza: Componente correspondiente
```

**REGLA CRÍTICA:** `PageId` definido en `SidebarNew.tsx` es la fuente de verdad. NO duplicar definiciones.

---

## 📚 DOCUMENTACIÓN RELACIONADA

| Documento | Propósito | Ubicación |
|-----------|-----------|-----------|
| **DSM_ARCHITECTURE.md** | Arquitectura completa del DSM | `/DSM_ARCHITECTURE.md` |
| **FACTORING_ARCHITECTURE.md** | Arquitectura del módulo Factoring | `/components/factoring/FACTORING_ARCHITECTURE.md` |
| **Guidelines.md** | Guía oficial del sistema | `/Guidelines.md` |
| **DSM_IMPLEMENTATION_GUIDE.md** | Guía de implementación DSM | `/DSM_IMPLEMENTATION_GUIDE.md` |
| **LINK_VERIFICATION.md** | Verificación de enlaces | `/LINK_VERIFICATION.md` |

---

## 📋 HISTORIAL DE CAMBIOS

### 2025-01-12
- ✅ Creado documento de arquitectura completa del DSM
- ✅ Documentadas 10 categorías del sidebar
- ✅ Documentados 107+ PageIds
- ✅ Creados diagramas de flujo de navegación
- ✅ Agregadas reglas críticas y checklist
- ✅ Documentados componentes core (App, SidebarNew, PageRenderer)
- ✅ Agregada sección completa "REGLAS DE TIPOGRAFÍA"
- ✅ Corregido InvoiceGenerator.tsx para usar solo Satoshi
- ✅ Actualizado BrandLayoutPage.tsx con reglas de tipografía CRÍTICAS
- ✅ Agregados font weights y advertencias explícitas sobre Satoshi única fuente

### 2025-01-XX (Historial anterior)
- SidebarNew creado con sistema de acordeones
- PageRenderer implementado con 100+ casos
- Sistema de temas implementado
- Accesibilidad WCAG AA implementada
- Business Modules agregados

---

## 🆘 CONTACTO Y AYUDA

### Si necesitas hacer cambios complejos:
1. Lee este documento completo (15-20 min)
2. Identifica qué archivos vas a modificar
3. Usa el checklist correspondiente
4. Verifica dependencias entre archivos
5. Prueba exhaustivamente
6. Actualiza este documento (sección Historial)

### Si algo se rompió:
1. Verifica los flujos de navegación (sección FLUJOS)
2. Usa la sección DEBUGGING COMÚN
3. Verifica las dependencias entre archivos
4. Revisa el historial de cambios para restaurar

### Si tienes dudas sobre PageIds:
1. Consulta el MAPA COMPLETO DE PageId (línea 70)
2. Verifica en SidebarNew.tsx (línea 50-80) - FUENTE DE VERDAD
3. Verifica en PageRenderer.tsx que exista el caso

---

**FIN DEL DOCUMENTO - DSM_ARCHITECTURE.md**