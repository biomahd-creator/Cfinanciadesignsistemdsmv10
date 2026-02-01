# SYSTEM GUIDELINES INDEX

Este archivo es el índice maestro del sistema de diseño y arquitectura de Figma Make.
Para facilitar la lectura por IAs y humanos, la documentación se ha dividido en módulos especializados.

## MÓDULOS DE DOCUMENTACIÓN

### 1. [CORE.md](./CORE.md)
**Fundamental**. Contiene el stack tecnológico, arquitectura del proyecto, estructura de carpetas y reglas inquebrantables del sistema.
- Stack: React + Vite + Tailwind.
- Single Source of Truth.
- Arquitectura híbrida.

### 2. [TOKENS.md](./TOKENS.md)
**Diseño Visual**. Definiciones de estilos, colores, tipografía y accesibilidad.
- Colores: Primary (Green), Secondary (Dark Blue).
- Tipografía: Satoshi.
- Modo Claro / Oscuro.

### 3. [COMPONENTS.md](./COMPONENTS.md)
**Catálogo**. Lista completa de componentes disponibles para evitar duplicidad.
- Shadcn/ui oficial.
- Patterns y Atomic Design.
- Componentes avanzados.

### 4. [EXAMPLES.md](./EXAMPLES.md)
**Referencia**. Ejemplos de código correcto, migraciones y casos de uso.
- Cómo usar el DSM.
- Refactorización de componentes legacy.

### 5. [PROMPT_GUIDE.md](./PROMPT_GUIDE.md)
**Automatización**. Guía para generar código nuevo usando IA.
- Plantillas de prompts.
- Checklists de validación.

### 6. [ANIMATIONS.md](./ANIMATIONS.md)
**Sistema de Animaciones**. Configuración global de transiciones, loading states, hover effects y skeleton loaders.
- Configuración centralizada de duraciones y easings.
- Providers globales (Loading, Transition).
- Hooks personalizados (useLoadingState, usePageTransition).
- Componentes de animación (PageTransition, LoadingOverlay, Skeleton variants).
- CSS utilities para hover effects consistentes.
- Accesibilidad: respeto a `prefers-reduced-motion`.

---

## USO RÁPIDO
Para crear una nueva funcionalidad:
1. Consulta **COMPONENTS.md** para ver qué piezas tienes.
2. Revisa **TOKENS.md** para aplicar los estilos correctos.
3. Usa **ANIMATIONS.md** para agregar transiciones y loading states.
4. Usa las reglas de **PROMPT_GUIDE.md** para pedirle a la IA que ensamble la pantalla.

---
*Última actualización: Enero 2026*