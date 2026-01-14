# 💼 FACTORING APP - GUÍA RÁPIDA

## ⚠️ ANTES DE HACER CAMBIOS

**¿Vas a modificar `FactoringApp.tsx`?** 
👉 Lee primero: `/components/factoring/FACTORING_ARCHITECTURE.md`

**¿Vas a eliminar algo?**
👉 Busca TODAS las referencias con `Ctrl+F` primero

**¿Agregaste una vista nueva?**
👉 Actualiza `FACTORING_ARCHITECTURE.md` (sección "Mapa de Vistas")

---

## 📂 Archivos Principales

```
/components/factoring/
├── 🚨 FactoringApp.tsx              ← CORE - Enrutador principal
├── 📖 FACTORING_ARCHITECTURE.md     ← Documentación completa
├── 📖 README.md                     ← Esta guía
├── auth/
│   └── RoleSelector.tsx
└── views/
    ├── BriefDashboard.tsx           ← Pantalla 1: Dashboard
    ├── FactoringListView.tsx        ← Pantalla 2: Listado
    ├── FactoringNewOperation.tsx    ← Pantalla 2B: Nueva operación
    ├── OperationDetailStep1.tsx     ← Pantalla 3A: Detalle paso 1
    ├── OperationDetailStep2.tsx     ← Pantalla 3B: Detalle paso 2
    └── RadianDashboard.tsx          ← Pantalla 4: RADIAN
```

---

## 🗺️ Vistas Activas (7 vistas)

| View ID | ¿Dónde está? | ¿Cómo acceder? |
|---------|-------------|----------------|
| `"home"` | BriefDashboard | Sidebar → "Inicio" |
| `"factoring-list"` | FactoringListView | Sidebar → "Factoring" |
| `"new-request"` | FactoringNewOperation | Botón "Nueva operación" |
| `"vinculacion"` | MultiStepFormPage | Sidebar → "Vinculación" |
| `"operation-detail"` | OperationDetailStep1 | Click en fila de tabla |
| `"operation-step-2"` | OperationDetailStep2 | Botón "Continuar" |
| `"radian-dashboard"` | RadianDashboard | Sidebar → "RADIAN" |

---

## ✅ Checklist Rápido

Antes de hacer cambios en `FactoringApp.tsx`:

- [ ] Leí `FACTORING_ARCHITECTURE.md`
- [ ] Busqué todas las referencias con `Ctrl+F`
- [ ] Verifiqué que no rompo navegación existente
- [ ] Actualicé la documentación si agregué/eliminé vistas

---

## 🆘 Problemas Comunes

### "Desapareció una vista"
1. Verificar que existe el `case` en `renderView()` switch
2. Verificar que el View ID está en el type `View`
3. Verificar que hay un botón que navega a esa vista

### "Botón no funciona"
1. Verificar `onClick={() => setCurrentView("view-id")}`
2. Verificar que "view-id" existe en el type `View`

---

## 📞 Recursos

- **Documentación completa:** `FACTORING_ARCHITECTURE.md`
- **Mapa de flujos:** Ver sección "FLUJOS DE NAVEGACIÓN"
- **Tabla de vistas:** Ver sección "MAPA DE VISTAS"
