# ATOMIC DESIGN - ARQUITECTURA Y DOCUMENTACIÓN
**Última actualización:** Enero 2025

---

## 🎯 PROPÓSITO
Este documento documenta el sistema de **Atomic Design** implementado en el DSM.
Basado en la metodología de **Brad Frost**, organiza componentes en 5 niveles jerárquicos.

---

## 📖 METODOLOGÍA ATOMIC DESIGN

### ¿Qué es Atomic Design?

Sistema de diseño modular que organiza componentes UI en 5 niveles:

```
ATOMS (Átomos)
   ↓ Se combinan para formar
MOLECULES (Moléculas)
   ↓ Se combinan para formar
ORGANISMS (Organismos)
   ↓ Se combinan para formar
TEMPLATES (Plantillas)
   ↓ Con datos reales forman
PAGES (Páginas completas)
```

### Beneficios:
- ✅ Reutilización máxima de componentes
- ✅ Consistencia visual garantizada
- ✅ Fácil mantenimiento y escalabilidad
- ✅ Documentación auto-explicativa
- ✅ Testing más simple (por nivel)

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
/components/atomic/
├── ATOMIC_DESIGN_ARCHITECTURE.md    # Este documento
├── AtomicHierarchy.tsx              # Visualización de la jerarquía
├── /atoms/                          # NO EXISTE - Se usan /ui/
├── /molecules/
│   ├── SearchBar.tsx
│   ├── StatCard.tsx
│   ├── FormField.tsx
│   ├── ActionButton.tsx
│   ├── FilterChip.tsx
│   └── TimelineItem.tsx
├── /organisms/
│   ├── NavigationBar.tsx
│   ├── LoginForm.tsx
│   ├── FilterBar.tsx
│   ├── StatsGrid.tsx
│   └── InvoiceTable.tsx
├── /templates/
│   ├── AuthTemplate.tsx
│   ├── DashboardTemplate.tsx
│   └── ListPageTemplate.tsx
└── /pages/
    ├── LoginPage.tsx
    ├── DashboardPage.tsx
    ├── InvoiceListPage.tsx
    └── FactoringSelectionPage.tsx
```

---

## 🧬 NIVEL 1: ATOMS (Átomos)

### Definición:
Componentes básicos, no divisibles. Son los bloques de construcción fundamentales.

### Ubicación:
**NO están en /atomic/atoms/** sino en `/components/ui/` (componentes shadcn/ui)

### Componentes (5 átomos base):

| Átomo | Archivo | Descripción |
|-------|---------|-------------|
| **Button** | /components/ui/button.tsx | Botón base (primary, secondary, etc.) |
| **Input** | /components/ui/input.tsx | Campo de entrada de texto |
| **Badge** | /components/ui/badge.tsx | Etiqueta de estado/categoría |
| **Label** | /components/ui/label.tsx | Etiqueta para formularios |
| **Avatar** | /components/ui/avatar.tsx | Imagen de perfil circular |

### Regla de Átomos:
- ✅ SOLO usar componentes de /components/ui/ (shadcn/ui)
- ❌ NO crear átomos custom fuera de shadcn/ui
- ✅ Átomos NO tienen lógica de negocio
- ✅ Átomos NO tienen estado complejo
- ✅ Átomos son altamente reutilizables

---

## 🧪 NIVEL 2: MOLECULES (Moléculas)

### Definición:
Combinación de 2-3 átomos que forman un componente funcional simple.

### Ubicación:
`/components/atomic/molecules/`

### Componentes (6 moléculas):

#### 1. **SearchBar** (`SearchBar.tsx`)
```typescript
Composición: Input + Button
Propósito: Barra de búsqueda con botón
Usado en: FilterBar (organismo)
```

#### 2. **StatCard** (`StatCard.tsx`)
```typescript
Composición: Card + Badge + Text
Propósito: Tarjeta de estadística con valor y badge
Usado en: StatsGrid (organismo)
```

#### 3. **FormField** (`FormField.tsx`)
```typescript
Composición: Label + Input + Text (error)
Propósito: Campo de formulario completo
Usado en: LoginForm (organismo)
```

#### 4. **ActionButton** (`ActionButton.tsx`)
```typescript
Composición: Button + Icon (lucide-react)
Propósito: Botón con icono integrado
Usado en: Múltiples organismos
```

#### 5. **FilterChip** (`FilterChip.tsx`)
```typescript
Composición: Badge + Button (close)
Propósito: Chip de filtro removible
Usado en: FilterBar (organismo)
```

#### 6. **TimelineItem** (`TimelineItem.tsx`)
```typescript
Composición: Avatar + Card + Text
Propósito: Item de línea de tiempo
Usado en: Timeline feeds
```

### Reglas de Moléculas:
- ✅ Compuestas de 2-3 átomos
- ✅ Tienen un propósito funcional claro
- ✅ Reutilizables en múltiples contextos
- ❌ NO tienen lógica de negocio compleja
- ❌ NO fetching de datos

---

## 🦠 NIVEL 3: ORGANISMS (Organismos)

### Definición:
Componentes complejos que combinan moléculas y átomos para formar secciones completas.

### Ubicación:
`/components/atomic/organisms/`

### Componentes (5 organismos):

#### 1. **NavigationBar** (`NavigationBar.tsx`)
```typescript
Composición: Breadcrumb + Command + Avatar
Propósito: Barra de navegación completa con búsqueda y perfil
Usado en: DashboardTemplate
Átomos/Moléculas: Breadcrumb, Command, Avatar
```

#### 2. **LoginForm** (`LoginForm.tsx`)
```typescript
Composición: Card + FormField[] + Button
Propósito: Formulario de login completo
Usado en: AuthTemplate
Átomos/Moléculas: FormField (molécula), Button, Card
```

#### 3. **FilterBar** (`FilterBar.tsx`)
```typescript
Composición: SearchBar + Select + Button
Propósito: Barra de filtros avanzados
Usado en: ListPageTemplate
Átomos/Moléculas: SearchBar (molécula), Select, Button
```

#### 4. **StatsGrid** (`StatsGrid.tsx`)
```typescript
Composición: Grid + StatCard[]
Propósito: Grid de estadísticas (KPIs)
Usado en: DashboardTemplate
Átomos/Moléculas: StatCard (molécula)
```

#### 5. **InvoiceTable** (`InvoiceTable.tsx`)
```typescript
Composición: Table + Badge + DropdownMenu
Propósito: Tabla de facturas con acciones
Usado en: ListPageTemplate, FactoringSelectionPage
Átomos/Moléculas: Table, Badge, DropdownMenu
```

### Reglas de Organismos:
- ✅ Combinan múltiples moléculas y átomos
- ✅ Representan secciones completas de la UI
- ✅ Pueden tener estado interno (useState)
- ✅ Pueden tener lógica de presentación
- ❌ NO fetchean datos (reciben props)
- ❌ NO tienen lógica de navegación global

---

## 📄 NIVEL 4: TEMPLATES (Plantillas)

### Definición:
Layouts de página completos sin datos reales. Estructuran organismos en posiciones específicas.

### Ubicación:
`/components/atomic/templates/`

### Componentes (3 templates):

#### 1. **AuthTemplate** (`AuthTemplate.tsx`)
```typescript
Composición: LoginForm + Layout centrado
Propósito: Plantilla de autenticación
Usado en: LoginPage
Organismos: LoginForm
Layout: Centrado vertical/horizontal, fondo con gradiente
```

#### 2. **DashboardTemplate** (`DashboardTemplate.tsx`)
```typescript
Composición: NavigationBar + StatsGrid + Layout
Propósito: Plantilla de dashboard
Usado en: DashboardPage
Organismos: NavigationBar, StatsGrid
Layout: Header fijo + grid de stats
```

#### 3. **ListPageTemplate** (`ListPageTemplate.tsx`)
```typescript
Composición: FilterBar + Table + Pagination + Layout
Propósito: Plantilla de listado con filtros
Usado en: InvoiceListPage
Organismos: FilterBar, InvoiceTable
Layout: Filtros top + tabla + paginación bottom
```

### Reglas de Templates:
- ✅ Definen estructura de página completa
- ✅ Posicionan organismos con layout (flex/grid)
- ✅ NO tienen datos reales (usan placeholders)
- ✅ Son reutilizables para múltiples páginas
- ❌ NO tienen lógica de negocio
- ❌ NO fetchean datos

---

## 🖼️ NIVEL 5: PAGES (Páginas)

### Definición:
Templates con datos reales. Son las páginas completas y funcionales de la aplicación.

### Ubicación:
`/components/atomic/pages/`

### Componentes (4 páginas):

#### 1. **LoginPage** (`LoginPage.tsx`)
```typescript
Template: AuthTemplate
Datos: Branding real, validación de formulario
Propósito: Página de login funcional
Features:
  - Validación de email/password
  - Manejo de errores
  - Navegación post-login
```

#### 2. **DashboardPage** (`DashboardPage.tsx`)
```typescript
Template: DashboardTemplate
Datos: KPIs reales, usuario actual
Propósito: Dashboard principal de la app
Features:
  - Estadísticas en tiempo real
  - Navegación a módulos
  - Perfil de usuario
```

#### 3. **InvoiceListPage** (`InvoiceListPage.tsx`)
```typescript
Template: ListPageTemplate
Datos: Lista de facturas reales
Propósito: Listado de facturas con filtros
Features:
  - Filtrado por múltiples criterios
  - Paginación funcional
  - Acciones por factura (ver, editar, eliminar)
```

#### 4. **FactoringSelectionPage** (`FactoringSelectionPage.tsx`)
```typescript
Template: Custom (complejo)
Datos: Operaciones de factoring reales
Propósito: Selección de facturas para factoring
Features:
  - Filtrado avanzado (elegible/no elegible)
  - Cálculos financieros
  - Selección múltiple
  - KPIs dinámicos
  - Wizard de pasos
```

### Reglas de Pages:
- ✅ Usan templates como base
- ✅ Inyectan datos reales
- ✅ Tienen lógica de negocio completa
- ✅ Pueden fetchear datos (useState, useEffect)
- ✅ Manejan navegación
- ✅ Son las páginas finales que ve el usuario

---

## 🔗 FLUJO DE COMPOSICIÓN

### Ejemplo: FactoringSelectionPage

```
PÁGINA (Page)
  FactoringSelectionPage
    ↓ usa
TEMPLATE (Template)
  Custom Layout (Header + Filters + Grid + Table)
    ↓ usa
ORGANISMOS (Organisms)
  - NavigationBar (breadcrumbs + search)
  - FilterBar (filtros de facturas)
  - StatsGrid (KPIs de operación)
  - InvoiceTable (tabla de facturas)
    ↓ usan
MOLÉCULAS (Molecules)
  - SearchBar (en FilterBar)
  - StatCard (en StatsGrid)
  - FormField (en filtros)
  - FilterChip (chips de filtro activo)
    ↓ usan
ÁTOMOS (Atoms)
  - Button (shadcn/ui)
  - Input (shadcn/ui)
  - Badge (shadcn/ui)
  - Card (shadcn/ui)
  - Table (shadcn/ui)
```

---

## 📊 ESTADÍSTICAS DEL SISTEMA

| Nivel | Count | Ubicación |
|-------|-------|-----------|
| Atoms | 5 base | /components/ui/ (shadcn/ui) |
| Molecules | 6 | /components/atomic/molecules/ |
| Organisms | 5 | /components/atomic/organisms/ |
| Templates | 3 | /components/atomic/templates/ |
| Pages | 4 | /components/atomic/pages/ |
| **TOTAL** | **23** | - |

---

## 🚨 REGLAS CRÍTICAS

### ❌ NUNCA HACER:

1. **Crear átomos custom fuera de shadcn/ui**
   - Usar SOLO componentes de /components/ui/
   - Si necesitas un átomo, verificar si ya existe en shadcn/ui

2. **Saltarse niveles en la composición**
   - ❌ Página que usa directamente átomos (sin moléculas/organismos)
   - ✅ Página → Template → Organismo → Molécula → Átomo

3. **Poner lógica de negocio en niveles bajos**
   - ❌ Molécula que fetcha datos
   - ❌ Organismo que maneja navegación global
   - ✅ Solo Pages tienen lógica de negocio completa

4. **Mezclar niveles sin justificación**
   - Respetar la jerarquía: Atoms → Molecules → Organisms → Templates → Pages

### ✅ SIEMPRE HACER:

1. **Respetar la jerarquía de composición**
   - Cada nivel usa componentes del nivel inferior

2. **Mantener componentes reutilizables**
   - Moléculas y Organismos deben ser genéricos
   - Lógica específica solo en Pages

3. **Documentar nuevos componentes**
   - Agregar a este documento en la sección correspondiente
   - Especificar composición, propósito y uso

4. **Nombrar componentes claramente**
   - Moléculas: `SearchBar`, `StatCard`, `FormField`
   - Organismos: `NavigationBar`, `LoginForm`, `FilterBar`
   - Templates: `AuthTemplate`, `DashboardTemplate`
   - Pages: `LoginPage`, `DashboardPage`

---

## 🔧 AGREGANDO NUEVOS COMPONENTES

### Para agregar una Molécula:

1. Crear archivo en `/components/atomic/molecules/NombreMolecula.tsx`
2. Componer 2-3 átomos de shadcn/ui
3. Exportar el componente
4. Actualizar este documento (tabla de Moléculas)
5. Usarla en organismos/templates/pages

### Para agregar un Organismo:

1. Crear archivo en `/components/atomic/organisms/NombreOrganismo.tsx`
2. Componer moléculas + átomos
3. Agregar estado interno si es necesario (useState)
4. Exportar el componente
5. Actualizar este documento (tabla de Organismos)
6. Usarlo en templates/pages

### Para agregar un Template:

1. Crear archivo en `/components/atomic/templates/NombreTemplate.tsx`
2. Componer organismos con layout (flex/grid)
3. Dejar datos como props (sin hardcodear)
4. Exportar el componente
5. Actualizar este documento (tabla de Templates)
6. Usarlo en pages

### Para agregar una Page:

1. Crear archivo en `/components/atomic/pages/NombrePage.tsx`
2. Usar un template como base
3. Inyectar datos reales
4. Agregar lógica de negocio
5. Exportar el componente
6. Agregar PageId en SidebarNew.tsx
7. Agregar caso en PageRenderer.tsx
8. Actualizar DSM_ARCHITECTURE.md

---

## 📚 NAVEGACIÓN EN EL DSM

### Acceso desde el Sidebar:

**Business Modules → Atomic Design**
- Atomic Atoms → `/atomic-atoms` → Visualización de átomos base
- Atomic Molecules → `/atomic-molecules` → Visualización de moléculas
- Atomic Organisms → `/atomic-organisms` → Visualización de organismos
- Atomic Templates → `/atomic-templates` → Visualización de templates
- Atomic Pages → `/atomic-pages` → Visualización de páginas completas

### PageIds relacionados:

```typescript
| "atomic-atoms"
| "atomic-molecules"
| "atomic-organisms"
| "atomic-templates"
| "atomic-pages"
```

---

## 📖 EJEMPLOS PRÁCTICOS

### Ejemplo 1: Crear una molécula de "UserBadge"

```typescript
// /components/atomic/molecules/UserBadge.tsx
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";
import { Badge } from "../../ui/badge";

export function UserBadge({ 
  name, 
  role, 
  imageUrl 
}: { 
  name: string; 
  role: string; 
  imageUrl?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src={imageUrl} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{name}</p>
        <Badge variant="secondary">{role}</Badge>
      </div>
    </div>
  );
}

// Composición: Avatar + Badge + Text
// Nivel: Molécula (combina 2 átomos)
```

### Ejemplo 2: Usar molécula en organismo

```typescript
// /components/atomic/organisms/TeamList.tsx
import { UserBadge } from "../molecules/UserBadge";
import { Card } from "../../ui/card";

export function TeamList({ members }: { members: Member[] }) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Team Members</h3>
      <div className="space-y-3">
        {members.map(member => (
          <UserBadge 
            key={member.id}
            name={member.name}
            role={member.role}
            imageUrl={member.avatar}
          />
        ))}
      </div>
    </Card>
  );
}

// Composición: Card + UserBadge[] (molécula)
// Nivel: Organismo (combina moléculas + átomos)
```

---

## 🐛 DEBUGGING COMÚN

### Problema: "No encuentro dónde está un átomo"

**Solución:** Los átomos NO están en `/atomic/atoms/` sino en `/components/ui/` (shadcn/ui)

---

### Problema: "Mi molécula es demasiado compleja"

**Solución:** Probablemente sea un organismo. Regla: Moléculas = 2-3 átomos, Organismos = múltiples moléculas

---

### Problema: "¿Dónde pongo la lógica de fetcheo de datos?"

**Solución:** SOLO en Pages. Templates, Organismos y Moléculas reciben datos por props.

---

## 📝 CHECKLIST DE VALIDACIÓN

### Para Moléculas:
- [ ] Compuesta de 2-3 átomos
- [ ] NO tiene lógica de negocio
- [ ] NO fetcha datos
- [ ] Reutilizable en múltiples contextos
- [ ] Tiene propósito funcional claro

### Para Organismos:
- [ ] Combina moléculas y/o átomos
- [ ] Representa una sección completa
- [ ] Puede tener estado interno (useState)
- [ ] NO fetcha datos (recibe props)
- [ ] Reutilizable en múltiples páginas

### Para Templates:
- [ ] Define layout completo de página
- [ ] Posiciona organismos con flex/grid
- [ ] NO tiene datos hardcodeados
- [ ] Recibe datos como props
- [ ] Reutilizable para múltiples páginas similares

### Para Pages:
- [ ] Usa template como base (o layout custom)
- [ ] Inyecta datos reales
- [ ] Tiene lógica de negocio
- [ ] Maneja fetcheo de datos
- [ ] Está registrada en PageRenderer.tsx

---

## 📋 HISTORIAL DE CAMBIOS

### 2025-01-12
- ✅ Creado documento de arquitectura de Atomic Design
- ✅ Documentados 5 niveles jerárquicos
- ✅ Documentados 23 componentes (5 + 6 + 5 + 3 + 4)
- ✅ Agregadas reglas críticas y checklist
- ✅ Agregados ejemplos prácticos de composición

---

## 🔗 DOCUMENTACIÓN RELACIONADA

- **DSM_ARCHITECTURE.md** - Arquitectura completa del DSM
- **Guidelines.md** - Guía oficial del sistema
- **FACTORING_ARCHITECTURE.md** - Arquitectura del módulo Factoring

---

**FIN DEL DOCUMENTO - ATOMIC_DESIGN_ARCHITECTURE.md**
