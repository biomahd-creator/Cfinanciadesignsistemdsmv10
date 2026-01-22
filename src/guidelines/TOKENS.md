# DESIGN TOKENS & THEME

## TIPOGRAFÍA
- **Fuente Única**: `Satoshi`
- **Configuración**: Definida en `/styles/globals.css` vía `@font-face`.
- **Escala**:
  - Headings: `text-4xl`, `text-3xl`, `font-semibold`
  - Body: `text-base`, `text-sm`, `leading-relaxed`
  - Small: `text-xs`, `font-medium`

## COLORES (TOKENS)
Todos los colores deben usarse a través de variables CSS o clases de Tailwind.

### Brand Colors
- **Primary**: `#84cc16` (Lime-500) - Para CTAs y estados activos.
- **Secondary**: `#1C2D3A` (Azul Oscuro) - Para texto principal y fondos oscuros.

### Modo Claro (Light Mode)
- **Background**: `#ffffff`
- **Foreground**: `#1C2D3A`
- **Muted**: `#f4f4f5`
- **Border**: `#e4e4e7`

### Modo Oscuro (Dark Mode)
- **Background**: `#0f172a` (Slate-900) - 🚫 NO usar negro puro (#000000).
- **Foreground**: `#f8fafc`
- **Card**: `#1e293b`
- **Border**: `#334155`

## ACCESIBILIDAD (WCAG 2.1 AA)
- **Contraste Mínimo**: 4.5:1 para texto normal.
- **Primary Color**: Cumple contraste sobre Secondary.
- **Dark Mode**: Optimizado para reducir fatiga visual (paleta Slate).

## TAILWIND CONFIGURATION
- **Spacing**: Estándar (p-4, gap-6, m-8).
- **Radius**: Configurable via tokens (`--radius`).
- **Variables**: Definidas en `:root` y `.dark`.

⚠️ **REGLA DE ORO**: Nunca usar valores hex hardcoded (ej: `#DEFB49`) en los componentes. Usar siempre clases de utilidad (`bg-primary`, `text-secondary`, `border-muted`).
