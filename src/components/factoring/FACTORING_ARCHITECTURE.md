# FACTORING APP - ARQUITECTURA Y FLUJOS
**Última actualización:** Enero 2025

---

## 🎯 PROPÓSITO
Este documento es la **FUENTE DE VERDAD** del módulo de Factoring.
**ANTES DE HACER CAMBIOS:** Consultar este documento para no romper funcionalidades existentes.

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
/components/factoring/
├── FactoringApp.tsx              # CORE - Enrutador principal (NO MODIFICAR SIN REVISAR)
├── auth/
│   └── RoleSelector.tsx          # Selector de rol (admin/client)
└── views/                        # TODAS LAS VISTAS/PANTALLAS
    ├── BriefDashboard.tsx        # Screen 1: Dashboard principal
    ├── FactoringListView.tsx     # Screen 2: Listado de operaciones
    ├── FactoringNewOperation.tsx # Screen 2B: Nueva operación (selección de facturas)
    ├── OperationDetailStep1.tsx  # Screen 3A: Detalle paso 1
    ├── OperationDetailStep2.tsx  # Screen 3B: Detalle paso 2
    ├── RadianDashboard.tsx       # Screen 4: Dashboard RADIAN
    └── (legacy files...)
```

---

## 🗺️ MAPA DE VISTAS (Views)

| View ID | Nombre | Archivo | Propósito | Acceso desde |
|---------|--------|---------|-----------|--------------|
| `"home"` | Dashboard Principal | `BriefDashboard.tsx` | Pantalla inicial con módulos | Sidebar: "Inicio" |
| `"factoring-list"` | Listado Factoring | `FactoringListView.tsx` | Tabla de operaciones de factoring | Sidebar: "Factoring" |
| `"new-request"` | Nueva Operación | `FactoringNewOperation.tsx` | Selección de facturas para nueva operación | Botón "Nueva operación" |
| `"vinculacion"` | Proceso Vinculación | `MultiStepFormPage.tsx` | Multi-step wizard para vincular usuario | Sidebar: "Vinculación" |
| `"operation-detail"` | Detalle Paso 1 | `OperationDetailStep1.tsx` | Primer paso del detalle de operación | Click en fila de tabla |
| `"operation-step-2"` | Detalle Paso 2 | `OperationDetailStep2.tsx` | Segundo paso del detalle | Botón "Continuar" |
| `"radian-dashboard"` | RADIAN Dashboard | `RadianDashboard.tsx` | Dashboard de facturación electrónica | Sidebar: "RADIAN" |

---

## 🔀 FLUJOS DE NAVEGACIÓN

### Flujo 1: Nueva Operación de Factoring
```
Inicio → Factoring → [Botón "Nueva operación"] → new-request
                                                       ↓
                                          [Pantalla de selección]
                                                       ↓
                                          [Botón "Iniciar Operación"]
                                                       ↓
                                              operation-detail
```

### Flujo 2: Vinculación de Usuario
```
Inicio → [Sidebar "Vinculación"] → vinculacion
                                        ↓
                                [Multi-step wizard]
                                        ↓
                                   [Completar]
                                        ↓
                                      home
```

### Flujo 3: Ver Detalle de Operación
```
Factoring → [Click en fila] → operation-detail → operation-step-2
                                     ↑                    ↓
                                     ← [Volver] ← ← ← ← ←
```

### Flujo 4: RADIAN
```
Inicio → [Sidebar "RADIAN"] → radian-dashboard
```

---

## 🚨 REGLAS CRÍTICAS (NO ROMPER)

### ❌ NUNCA HACER:
1. **Eliminar vistas sin verificar referencias**
   - Buscar en `FactoringApp.tsx` el `case` del switch
   - Verificar si hay botones que navegan a esa vista (`setCurrentView`)

2. **Cambiar nombres de View IDs sin actualizar todas las referencias**
   - View IDs están en el type: `type View = "home" | "factoring-list" | ...`
   - Buscar TODAS las apariciones del string en el archivo

3. **Reemplazar funcionalidades existentes sin crear nuevas vistas**
   - Ejemplo: Si hay una pantalla "Nueva Operación", NO reemplazarla con otra
   - En su lugar: Crear una nueva vista con diferente ID

4. **Modificar el sidebar sin actualizar este documento**
   - Cada botón del sidebar debe tener su entrada en la tabla de vistas

### ✅ SIEMPRE HACER:
1. **Antes de modificar:** Leer este documento completo
2. **Antes de eliminar:** Buscar todas las referencias en el código
3. **Después de agregar vista:** Actualizar la tabla de vistas arriba
4. **Después de agregar flujo:** Actualizar los diagramas de flujo
5. **Al terminar:** Actualizar la fecha de "Última actualización"

---

## 🔧 COMPONENTES IMPORTADOS

### Vistas Externas (de /components/pages/)
- `MultiStepFormPage` - Wizard de vinculación multi-paso
- `ClientDashboard` - Dashboard alternativo para clientes

### Componentes UI (de /components/ui/)
- Button, Avatar, Input, Badge, Sheet, DropdownMenu, etc.

### Icons (de lucide-react)
- LayoutDashboard, Wallet, UserCheck, Bell, etc.

---

## 🧭 SIDEBAR NAVIGATION

### Desktop Sidebar
```tsx
Módulos:
├── Inicio (LayoutDashboard)         → "home"
├── Factoring (Wallet)               → "factoring-list"
├── RADIAN (Bell) [Solo Admin]       → "radian-dashboard"
└── Vinculación (UserCheck)          → "vinculacion"

Gestión:
├── Clientes (Users)                 → [Mock]
└── Administración (Settings)        → [Mock]

Footer:
├── Cerrar Sesión                    → Logout
└── Salir al DSM                     → onExit()
```

### Mobile Sidebar (Sheet)
```tsx
├── Inicio                           → "home"
├── Factoring                        → "factoring-list"
└── Vinculación                      → "vinculacion"
```

---

## 📋 CHECKLIST ANTES DE CAMBIOS

Antes de modificar `FactoringApp.tsx`, verificar:

- [ ] ¿He leído la sección de "REGLAS CRÍTICAS"?
- [ ] ¿He identificado qué vista voy a modificar/agregar/eliminar?
- [ ] ¿He buscado TODAS las referencias a esa vista en el código?
- [ ] ¿He verificado que no rompo ningún flujo de navegación?
- [ ] ¿He actualizado la tabla de vistas si agregué/eliminé una?
- [ ] ¿He actualizado los diagramas de flujo si cambié navegación?
- [ ] ¿He probado manualmente todos los flujos afectados?
- [ ] ¿He actualizado la fecha de este documento?

---

## 🐛 DEBUGGING COMÚN

### Problema: "Vista no se muestra"
1. Verificar que el `case` existe en el switch de `renderView()`
2. Verificar que el import del componente está correcto
3. Verificar que el View ID coincide exactamente (case-sensitive)

### Problema: "Botón del sidebar no funciona"
1. Verificar que el `onClick` llama a `setCurrentView("view-id")`
2. Verificar que el View ID existe en el type `View`
3. Verificar que hay un `case` para ese ID en el switch

### Problema: "Se perdió una funcionalidad"
1. Revisar historial de cambios en este documento
2. Buscar el View ID que falta en el type `View`
3. Buscar el componente eliminado en `/views/`
4. Restaurar el `case` en el switch + botón en sidebar

---

## 📊 ESTADO DEL PROYECTO

### Vistas Implementadas: 7/7 ✅
- [x] Dashboard Principal
- [x] Listado Factoring
- [x] Nueva Operación
- [x] Vinculación
- [x] Detalle Paso 1
- [x] Detalle Paso 2
- [x] RADIAN Dashboard

### Vistas Mock: 2
- [ ] Clientes (botón sin funcionalidad)
- [ ] Administración (botón sin funcionalidad)

### Roles Implementados: 2/2 ✅
- [x] Admin (acceso completo)
- [x] Client (acceso limitado)

---

## 📝 HISTORIAL DE CAMBIOS

### 2025-01-12
- ✅ Creada vista `"vinculacion"` (proceso de vinculación del usuario)
- ✅ Creada vista `"new-request"` (nueva operación de factoring)
- ✅ Separadas ambas funcionalidades (antes estaban mezcladas)
- ✅ Agregado botón "Vinculación" en sidebar (desktop + mobile)
- ✅ Actualizado flujo de navegación
- ✅ Creado este documento de arquitectura

### 2025-01-XX (anterior)
- Vista `BriefDashboard` implementada
- Vista `FactoringListView` implementada
- Vista `RadianDashboard` implementada
- Vistas de detalle implementadas

---

## 🆘 CONTACTO

Si tienes dudas sobre la arquitectura o necesitas hacer cambios complejos:
1. Lee este documento completo
2. Verifica los flujos de navegación
3. Usa el checklist antes de modificar
4. Documenta tus cambios en el historial

---

**FIN DEL DOCUMENTO**
