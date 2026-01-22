# PROMPT GUIDE FOR AI GENERATION

## ESTRATEGIA DE PROMPTS
Para obtener los mejores resultados de la IA, utiliza esta estructura de prompt:

1.  **Rol**: "Actúa como un desarrollador experto en React + Tailwind + shadcn/ui."
2.  **Contexto**: Referencia los archivos `CORE.md`, `TOKENS.md` y `COMPONENTS.md`.
3.  **Tarea**: Describe la pantalla o componente a crear.
4.  **Restricciones**: Lista las prohibiciones (Next.js, estilos inline, etc.).

## CHECKLIST DE GENERACIÓN
Antes de pedir código, verifica:
- [ ] ¿El componente ya existe en `COMPONENTS.md`?
- [ ] ¿Es una página completa o un fragmento?
- [ ] ¿Requiere estado complejo o backend (Supabase)?

## PLANTILLA DE PROMPT "CREAR PANTALLA"

> "Genera una pantalla de 'Dashboard de Ventas' usando el sistema de diseño actual.
>
> REQUISITOS:
> - Usa el componente `SidebarNew` para el layout.
> - Usa `StatsDashboard` pattern para los KPIs superiores.
> - Usa `Chart` (recharts) para una gráfica de ventas mensual.
> - Usa `Table` de shadcn para los últimos pedidos.
> - Estilos: Usa tokens de `TOKENS.md` (Primary: Lime, Secondary: Dark Blue).
> - Tipografía: Satoshi (clases `font-sans`).
>
> REGLAS:
> - No uses estilos inline.
> - No inventes colores hex.
> - Usa componentes de `/components/ui`."

## FORMATO DE SALIDA ESPERADO
La IA debe entregar:
1. Imports correctos (`from "@/components/ui/..."`).
2. Componente funcional exportado por defecto.
3. Uso de `PageRenderer` si es una página nueva para añadir al routing.

## PROHIBICIONES ESTRICTAS (RECORDATORIO)
- ❌ No Next.js / App Router.
- ❌ No CSS Modules / Styled Components.
- ❌ No crear componentes UI base nuevos (usar shadcn).
