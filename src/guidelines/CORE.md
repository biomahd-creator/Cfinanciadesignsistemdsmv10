# CORE SYSTEM GUIDELINES

## STACK OBLIGATORIO
- **Framework**: React 18 (Vite o CRA)
- **Routing**: React Router (implícito en la arquitectura actual)
- **UI Kit**: shadcn/ui únicamente
- **Estilos**: Tailwind CSS exclusivamente
- **Iconos**: Lucide React
- **Estado**: React Context / Hooks

🚫 **PROHIBIDO**: Next.js, SSR, App Router, Server Components.

## REGLAS GENERALES
- **Single Source of Truth**: Este sistema de diseño es la única fuente de verdad.
- **No Inline Styles**: Prohibido `style={{}}` salvo valores dinámicos estrictos.
- **No CSS Plano**: No usar `.css` files ni styled-components.
- **Layouts**: Flexbox y Grid por defecto.
- **Clean Code**: Separar lógica (hooks) de vista (components).

## ARQUITECTURA DEL SISTEMA
El sistema sigue una estructura híbrida optimizada para mantenibilidad y escalabilidad.

### Estructura de Directorios
```
/components/
├── ui/                 # Componentes base shadcn/ui (CÓDIGO FUENTE)
├── atomic/             # Atomic Design (atoms, molecules, organisms)
├── patterns/           # Patrones compuestos (Login, Dashboard)
├── advanced/           # Componentes complejos (Charts, Kanban)
├── pages/              # Páginas de showcase individuales
├── sections/           # Secciones agrupadas
└── accessibility/      # Componentes a11y (SkipLink, LiveRegion)
```

### Arquitectura de Navegación
- Sidebar dinámico con acordeones.
- PageRenderer como enrutador central.
- Categorías: Actions, Forms, Navigation, Data Display, Feedback, Layout, Patterns, Atomic, Advanced.

## DSM (DESIGN SYSTEM MANAGER)
El proyecto incluye un DSM integrado (tipo Storybook interno) para documentación viva.
- **ComponentShowcase**: Template para documentar componentes.
- **CodeBlock**: Visualizador de código fuente.
- **Objetivo**: Documentar Props, Usage y Examples para cada componente.

## COMPATIBILIDAD Y ACTUALIZACIONES
- **Modelo Copy-Paste**: shadcn/ui no es una dependencia npm, es código fuente.
- **Actualizaciones**: Selectivas y manuales. No hay breaking changes automáticos.
- **Aislamiento**: Customizaciones via `globals.css` (variables) y `ThemeProvider`.

## VALIDACIÓN Y VERIFICACIÓN
- **Official Verification**: Comparación contra catálogo shadcn oficial.
- **WCAG Accessibility**: Tests de contraste y navegación teclado.
- **Link Verification**: 100% de enlaces del sidebar deben ser funcionales.
