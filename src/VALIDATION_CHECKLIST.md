# ✅ VALIDATION CHECKLIST
## Sistema de Validación de Tokens CSS

---

## 🎯 PROPÓSITO

Este checklist es **OBLIGATORIO** para:
- ✅ Crear nuevos componentes
- ✅ Modificar componentes existentes
- ✅ Realizar Pull Requests
- ✅ Code Reviews
- ✅ Auditorías de calidad

---

## 📋 CHECKLIST PARA DESARROLLADORES

### Antes de Escribir Código

- [ ] He leído `DESIGN_TOKENS_ENFORCEMENT.md`
- [ ] Conozco los tokens CSS disponibles en `/styles/globals.css`
- [ ] Entiendo la tabla de decisión rápida
- [ ] Sé qué colores están prohibidos (#DEFB49, #1C2D3A como hardcoded)

---

## 🔍 VALIDACIÓN DE CÓDIGO

### 1. Colores y Tokens

#### Prohibiciones Absolutas

- [ ] ✅ No uso `bg-[#DEFB49]` ni `bg-[#84cc16]` hardcoded
- [ ] ✅ No uso `text-[#1C2D3A]` hardcoded
- [ ] ✅ No uso `border-[#...]` con colores hex
- [ ] ✅ No uso `style={{ color: '#...', backgroundColor: '#...' }}`
- [ ] ✅ No creo colores inventados fuera del sistema

#### Tokens Correctos

- [ ] ✅ Uso `bg-primary` para fondos de marca
- [ ] ✅ Uso `bg-secondary` para fondos oscuros corporativos
- [ ] ✅ Uso `text-primary-foreground` sobre `bg-primary`
- [ ] ✅ Uso `text-secondary-foreground` sobre `bg-secondary`
- [ ] ✅ Uso `border-primary` para bordes destacados
- [ ] ✅ Uso `ring-primary` para focus rings

#### Estados y Variantes

- [ ] ✅ Hover states usan opacidad: `hover:bg-primary/90`
- [ ] ✅ Fondos sutiles usan opacidad: `bg-primary/10`
- [ ] ✅ Estados activos están claramente diferenciados
- [ ] ✅ Transiciones son suaves (transition-colors, transition-all)

---

### 2. Tipografía

- [ ] ✅ No especifico `font-family` (Satoshi es default)
- [ ] ✅ Uso clases de Tailwind para tamaños: `text-sm`, `text-base`, `text-lg`
- [ ] ✅ No uso tamaños hardcoded: `style={{ fontSize: '16px' }}`
- [ ] ✅ Jerarquía tipográfica clara (h1, h2, p)

---

### 3. Accesibilidad WCAG 2.1 AA

#### Contraste de Color

- [ ] ✅ Texto sobre `bg-primary` tiene contraste ≥ 4.5:1
- [ ] ✅ Texto sobre `bg-secondary` tiene contraste ≥ 4.5:1
- [ ] ✅ Texto grande (18px+) tiene contraste ≥ 3:1
- [ ] ✅ Iconos y gráficos tienen contraste ≥ 3:1
- [ ] ✅ He validado contraste con WebAIM Contrast Checker

**Herramienta:** https://webaim.org/resources/contrastchecker/

#### Navegación por Teclado

- [ ] ✅ Todos los elementos interactivos son accesibles con Tab
- [ ] ✅ Focus ring visible (`ring-primary`, `focus-visible:ring-2`)
- [ ] ✅ Orden de tabulación lógico
- [ ] ✅ No hay focus traps sin intención

#### Semántica

- [ ] ✅ Uso botones `<button>` en lugar de `<div onClick>`
- [ ] ✅ Uso enlaces `<a>` para navegación
- [ ] ✅ ARIA labels en elementos sin texto visible
- [ ] ✅ Roles semánticos correctos (`role="button"`, etc.)

---

### 4. Dark Mode Ready

- [ ] ✅ Uso solo tokens CSS (no valores hardcoded)
- [ ] ✅ Componente funciona en modo claro (default)
- [ ] ✅ Componente está preparado para modo oscuro
- [ ] ✅ No uso `bg-white` o `bg-black` directamente (usar `bg-background`)
- [ ] ✅ No uso `text-black` o `text-white` directamente (usar `text-foreground`)

---

### 5. Estructura y Organización

- [ ] ✅ Componente está en la carpeta correcta (`/components/...`)
- [ ] ✅ Imports organizados (React, UI, Utils, Types)
- [ ] ✅ Props tienen TypeScript types definidos
- [ ] ✅ Componente tiene nombre descriptivo
- [ ] ✅ No hay código duplicado

---

## 🔎 VALIDACIÓN AUTOMÁTICA

### Búsquedas Obligatorias

Ejecutar estos comandos **ANTES** de commit:

```bash
# 1. Buscar colores hardcoded en Tailwind
grep -r "bg-\[#" components/ --include="*.tsx" | grep -v "Page.tsx" | grep -v "ThemeProvider"

# 2. Buscar text colors hardcoded
grep -r "text-\[#" components/ --include="*.tsx" | grep -v "Page.tsx"

# 3. Buscar border colors hardcoded
grep -r "border-\[#" components/ --include="*.tsx" | grep -v "Page.tsx"

# 4. Buscar estilos inline de color
grep -r "style={{.*color.*#" components/ --include="*.tsx" | grep -v "InvoiceGenerator"
```

**Resultado esperado:** 0 ocurrencias

---

## 📝 CHECKLIST DE CODE REVIEW

### Para Reviewers

#### Validación de Tokens

- [ ] ✅ No hay colores hardcoded (#...) en clases de Tailwind
- [ ] ✅ No hay estilos inline de color sin justificación
- [ ] ✅ Solo se usan tokens autorizados (ver DESIGN_TOKENS_ENFORCEMENT.md)
- [ ] ✅ Tokens de foreground se usan correctamente

#### Validación de Accesibilidad

- [ ] ✅ Contraste WCAG validado (mínimo 4.5:1)
- [ ] ✅ Focus ring visible en elementos interactivos
- [ ] ✅ ARIA labels presentes donde sea necesario
- [ ] ✅ Navegación por teclado funcional

#### Validación de Calidad

- [ ] ✅ Código limpio y sin duplicación
- [ ] ✅ TypeScript types completos
- [ ] ✅ Componente reutilizable
- [ ] ✅ Documentación inline (comments) clara

#### Validación Visual

- [ ] ✅ Componente renderiza correctamente
- [ ] ✅ Responsive en mobile y desktop
- [ ] ✅ Hover/Active states funcionan
- [ ] ✅ Transiciones son suaves

---

## 🚨 DETECCIÓN DE VIOLACIONES

### Severidad Alta 🔴 (Bloquea merge)

- [ ] ❌ Colores hardcoded en componentes funcionales
- [ ] ❌ Contraste WCAG no cumplido
- [ ] ❌ Estilos inline de color sin justificación
- [ ] ❌ Modificación de tokens sin aprobación

**Acción:** Rechazar PR, solicitar corrección inmediata.

### Severidad Media 🟡 (Requiere corrección)

- [ ] ⚠️ Uso inconsistente de tokens
- [ ] ⚠️ Falta de foreground automático
- [ ] ⚠️ Hover states sin opacidad estándar
- [ ] ⚠️ Focus ring no visible

**Acción:** Solicitar cambios, explicar patrón correcto.

### Severidad Baja 🟢 (Sugerencia)

- [ ] 💡 Código podría simplificarse
- [ ] 💡 Componente podría ser más reutilizable
- [ ] 💡 Falta documentación inline
- [ ] 💡 Naming podría mejorarse

**Acción:** Comentar sugerencia, aprobar PR.

---

## 🎨 VALIDACIÓN DE TOKENS ESPECÍFICOS

### Primary Color (#84cc16)

**Uso correcto:**

- [ ] ✅ `bg-primary` para botones principales
- [ ] ✅ `text-primary` para textos destacados
- [ ] ✅ `border-primary` para bordes de marca
- [ ] ✅ `ring-primary` para focus rings
- [ ] ✅ `hover:bg-primary/90` para hover states
- [ ] ✅ `bg-primary/10` para fondos sutiles

**Uso incorrecto:**

- [ ] ❌ `bg-[#84cc16]` - Usar `bg-primary`
- [ ] ❌ `bg-[#DEFB49]` - Color viejo, usar `bg-primary`
- [ ] ❌ `style={{ backgroundColor: '#84cc16' }}` - Usar clases

### Secondary Color (#1C2D3A)

**Uso correcto:**

- [ ] ✅ `bg-secondary` para headers oscuros
- [ ] ✅ `text-secondary` para textos principales
- [ ] ✅ `border-secondary` para bordes corporativos
- [ ] ✅ `hover:bg-secondary/90` para hover states

**Uso incorrecto:**

- [ ] ❌ `bg-[#1C2D3A]` - Usar `bg-secondary`
- [ ] ❌ `text-[#1C2D3A]` - Usar `text-secondary`
- [ ] ❌ `style={{ color: '#1C2D3A' }}` - Usar clases

### Foreground Colors

**Uso correcto:**

- [ ] ✅ `text-primary-foreground` sobre `bg-primary`
- [ ] ✅ `text-secondary-foreground` sobre `bg-secondary`
- [ ] ✅ `text-foreground` para texto principal
- [ ] ✅ `text-muted-foreground` para texto secundario

**Uso incorrecto:**

- [ ] ❌ `text-white` sobre `bg-primary` - Usar `text-primary-foreground`
- [ ] ❌ `text-black` - Usar `text-foreground`
- [ ] ❌ Hardcodear color de texto sobre fondo con token

---

## 🧪 VALIDACIÓN DE CASOS ESPECIALES

### Componentes con CSS Inline (Excepciones)

**Casos permitidos:**

- [ ] ✅ `InvoiceGenerator.tsx` - CSS inline para PDF
- [ ] ✅ `CFDashboard.tsx` - Recharts con colores específicos
- [ ] ✅ Bibliotecas externas que requieren style props

**Requieren:**

- [ ] ✅ Comentario explicando por qué es necesario
- [ ] ✅ Documentación del caso especial
- [ ] ✅ Aprobación explícita en PR

### Documentación (Excepciones)

**Archivos permitidos con colores hardcoded:**

- [ ] ✅ `*Page.tsx` - Ejemplos visuales en documentación
- [ ] ✅ `AccessibilityPage.tsx` - Ejemplos de contraste
- [ ] ✅ `BrandLayoutPage.tsx` - Documentación de marca
- [ ] ✅ `ThemeProvider.tsx` - Configuración de sistema
- [ ] ✅ `ColorPicker.tsx` - Paleta de colores

**No requieren migración, pero deben tener:**

- [ ] ✅ Comentario `// Documentation example`
- [ ] ✅ Claridad de que es para demostración

---

## 📊 VALIDACIÓN DE MÉTRICAS

### KPIs del Componente

- [ ] ✅ 0 colores hardcoded (excepto casos especiales)
- [ ] ✅ 100% de contraste WCAG AA cumplido
- [ ] ✅ 100% navegable por teclado
- [ ] ✅ 100% de tokens CSS usados

### KPIs del Pull Request

- [ ] ✅ 0 violaciones de Severidad Alta
- [ ] ✅ <3 violaciones de Severidad Media
- [ ] ✅ Tests visuales pasados
- [ ] ✅ Documentación actualizada (si aplica)

---

## 🎓 EJEMPLOS DE VALIDACIÓN

### Ejemplo 1: Botón Primario

**❌ Incorrecto:**

```tsx
<Button className="bg-[#84cc16] text-[#1C2D3A] hover:bg-[#65a30d]">
  Click me
</Button>
```

**Problemas detectados:**
- [ ] ❌ Color hardcoded `bg-[#84cc16]`
- [ ] ❌ Texto hardcoded `text-[#1C2D3A]`
- [ ] ❌ Hover hardcoded `hover:bg-[#65a30d]`

**✅ Correcto:**

```tsx
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Click me
</Button>
```

**Validación:**
- [x] ✅ Usa token `bg-primary`
- [x] ✅ Usa foreground automático `text-primary-foreground`
- [x] ✅ Hover con opacidad `hover:bg-primary/90`
- [x] ✅ Contraste garantizado (8.9:1)

---

### Ejemplo 2: Card con Header

**❌ Incorrecto:**

```tsx
<Card>
  <CardHeader className="bg-[#1C2D3A]">
    <CardTitle className="text-white">
      Título
    </CardTitle>
  </CardHeader>
  <CardContent className="bg-white text-[#1C2D3A]">
    Contenido
  </CardContent>
</Card>
```

**Problemas detectados:**
- [ ] ❌ `bg-[#1C2D3A]` hardcoded
- [ ] ❌ `text-white` no usa token foreground
- [ ] ❌ `bg-white` no usa token background
- [ ] ❌ `text-[#1C2D3A]` hardcoded

**✅ Correcto:**

```tsx
<Card>
  <CardHeader className="bg-secondary">
    <CardTitle className="text-secondary-foreground">
      Título
    </CardTitle>
  </CardHeader>
  <CardContent className="bg-card text-card-foreground">
    Contenido
  </CardContent>
</Card>
```

**Validación:**
- [x] ✅ Usa token `bg-secondary`
- [x] ✅ Usa foreground automático `text-secondary-foreground`
- [x] ✅ Usa tokens semánticos `bg-card`, `text-card-foreground`
- [x] ✅ Dark mode ready
- [x] ✅ Contraste garantizado

---

### Ejemplo 3: Badge de Estado

**❌ Incorrecto:**

```tsx
<Badge style={{ backgroundColor: '#84cc16', color: '#1C2D3A' }}>
  Activo
</Badge>
```

**Problemas detectados:**
- [ ] ❌ Estilos inline de color
- [ ] ❌ No usa clases de Tailwind
- [ ] ❌ No es dark mode ready

**✅ Correcto:**

```tsx
<Badge className="bg-primary text-primary-foreground">
  Activo
</Badge>
```

**Validación:**
- [x] ✅ No usa estilos inline
- [x] ✅ Usa tokens CSS
- [x] ✅ Dark mode ready
- [x] ✅ Reutilizable

---

## 🔄 PROCESO DE VALIDACIÓN COMPLETO

### 1. Antes de Commit

```bash
# Ejecutar validaciones automáticas
npm run lint                    # ESLint
npm run type-check              # TypeScript
grep -r "bg-\[#" components/    # Colores hardcoded
```

**Checklist:**
- [ ] ✅ Lint pasado sin errores
- [ ] ✅ TypeScript sin errores
- [ ] ✅ No hay colores hardcoded
- [ ] ✅ Tests visuales pasados

### 2. Al Crear PR

**Template de PR:**

```markdown
## Descripción
[Descripción breve del cambio]

## Checklist de Validación
- [ ] ✅ No hay colores hardcoded
- [ ] ✅ Solo uso tokens CSS autorizados
- [ ] ✅ Contraste WCAG AA cumplido
- [ ] ✅ Dark mode ready
- [ ] ✅ Focus ring visible
- [ ] ✅ Navegable por teclado
- [ ] ✅ Tests visuales pasados

## Screenshots
[Adjuntar screenshots]

## Notas
[Cualquier consideración especial]
```

### 3. Durante Code Review

**Reviewer ejecuta:**

```bash
# Checkout del branch
git checkout feature/new-component

# Validaciones automáticas
grep -r "bg-\[#" components/ --include="*.tsx" | grep -v "Page.tsx"
grep -r "text-\[#" components/ --include="*.tsx" | grep -v "Page.tsx"

# Prueba visual
npm run dev
```

**Checklist de reviewer:**
- [ ] ✅ Validaciones automáticas pasadas
- [ ] ✅ Código sigue patrones del sistema
- [ ] ✅ Contraste validado visualmente
- [ ] ✅ Funciona en diferentes tamaños de pantalla
- [ ] ✅ Documentación actualizada (si aplica)

### 4. Post-Merge

**Validación en staging:**
- [ ] ✅ Build exitoso
- [ ] ✅ No hay warnings de tokens
- [ ] ✅ Componente renderiza correctamente
- [ ] ✅ Accesibilidad mantenida

---

## 📋 QUICK CHECKLIST (Resumen)

**Antes de commit, verificar:**

```
✅ No hay colores hardcoded (#DEFB49, #1C2D3A, etc.)
✅ Solo uso tokens CSS (primary, secondary, etc.)
✅ Foreground automático usado correctamente
✅ Contraste WCAG ≥ 4.5:1
✅ Focus ring visible (ring-primary)
✅ Navegable por teclado
✅ Dark mode ready
✅ TypeScript types completos
✅ Tests visuales pasados
```

**Antes de aprobar PR, verificar:**

```
✅ Búsquedas automáticas ejecutadas (0 resultados)
✅ No hay violaciones de Severidad Alta
✅ Código sigue patrones del sistema
✅ Documentación actualizada
✅ Screenshots adjuntos
```

---

## 🎯 RESULTADO ESPERADO

Después de completar este checklist:

- ✅ **Componente 100% conforme** con sistema de tokens
- ✅ **Calidad enterprise** garantizada
- ✅ **Accesibilidad WCAG AA** cumplida
- ✅ **Dark mode ready** automáticamente
- ✅ **Mantenible** a largo plazo

---

## 📞 SOPORTE

**¿Dudas sobre validación?**

1. Revisar ejemplos en `MIGRATION_REPORT.md`
2. Consultar tabla de decisión en `DESIGN_TOKENS_ENFORCEMENT.md`
3. Preguntar a Tech Lead
4. Crear issue con tag `validation-help`

---

## 📚 DOCUMENTOS RELACIONADOS

1. `DESIGN_TOKENS_ENFORCEMENT.md` - Reglas estrictas
2. `Guidelines.md` - Sistema de diseño completo
3. `MIGRATION_REPORT.md` - Histórico y ejemplos
4. `/styles/globals.css` - Definición de tokens

---

**Documento generado:** Enero 2025  
**Versión:** 1.0  
**Estado:** Obligatorio para todos los desarrolladores

---

**ESTE CHECKLIST ES OBLIGATORIO. NO ES OPCIONAL.**

---

**FIN DEL DOCUMENTO**
