# SYSTEM GUIDELINES INDEX

Este archivo es el índice maestro del sistema de diseño y arquitectura de Figma Make.
Para facilitar la lectura por IAs y humanos, la documentación se ha dividido en módulos especializados.

## MÓDULOS DE DOCUMENTACIÓN

### 1. [TOKENS.md](./TOKENS.md)
**Diseño Visual**. Definiciones de estilos, colores, tipografía y accesibilidad.
- Colores: Primary (Green), Secondary (Dark Blue).
- Tipografía: Satoshi.
- Modo Claro / Oscuro.

### 2. [COMPONENTS.md](./COMPONENTS.md)
**Catálogo**. Lista completa de componentes disponibles para evitar duplicidad.
- Shadcn/ui oficial.
- Patterns y Atomic Design.
- Componentes avanzados.

### 3. [PROMPT_GUIDE.md](./PROMPT_GUIDE.md)
**Automatización**. Guía para generar código nuevo usando IA.
- Plantillas de prompts.
- Checklists de validación.

---

## INFRAESTRUCTURA PERMITIDA

Este proyecto está habilitado **exclusivamente** para las siguientes plataformas:

| Plataforma | Uso | Workflow |
|---|---|---|
| **GitHub** | Repositorio, CI/CD (GitHub Actions), GitHub Pages | `validate.yml`, `storybook.yml` |
| **Storybook** | Documentación de componentes, testing visual, deploy a GitHub Pages | `storybook.yml` |
| **npm** | Publicación del paquete `@biomahd-creator/financio-design-system` | `publish.yml` |

**No se permite** integración con: Chromatic, Vercel, Netlify, Firebase, AWS, Docker, Heroku, CircleCI, Travis, Jenkins, Sentry, Datadog, ni ningún otro servicio externo.

---

## USO RÁPIDO
Para crear una nueva funcionalidad:
1. Consulta **COMPONENTS.md** para ver qué piezas tienes.
2. Revisa **TOKENS.md** para aplicar los estilos correctos.
3. Usa las reglas de **PROMPT_GUIDE.md** para pedirle a la IA que ensamble la pantalla.

---
*Última actualización: Febrero 2026*