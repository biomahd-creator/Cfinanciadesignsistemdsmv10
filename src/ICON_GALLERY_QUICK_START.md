# 🚀 ICON GALLERY - QUICK START GUIDE

**Acceso rápido:** Sidebar > Resources > Icon Gallery

---

## ⚡ USO RÁPIDO (30 segundos)

### 1. Buscar un icono
```
1. Abre Icon Gallery
2. Escribe en el buscador: "user"
3. Click en el icono que necesitas
4. ✅ Código copiado automáticamente
```

### 2. Pegar en tu código
```tsx
// El código ya está en tu portapapeles:
import { User } from "lucide-react";

<User className="h-4 w-4" />
```

### 3. Personalizar (opcional)
```tsx
// Cambiar tamaño
<User className="h-6 w-6" />

// Cambiar color
<User className="h-6 w-6 text-primary" />

// Cambiar grosor
<User className="h-6 w-6" strokeWidth={2.5} />

// Con fill
<User className="h-6 w-6 text-primary fill-primary" />
```

---

## 📖 GUÍA COMPLETA

### Búsqueda Efectiva

**Por nombre exacto:**
```
Buscar: "Home"
Encuentra: Home, HomeIcon
```

**Por palabra clave:**
```
Buscar: "arrow"
Encuentra: ArrowUp, ArrowDown, ArrowLeft, ArrowRight, etc.
```

**Por categoría:**
```
Click en badge "Actions & Editing"
Muestra: Plus, Minus, Edit, Trash, Copy, Save, etc.
```

---

### Tamaños Recomendados

| Uso | Clase | Tamaño |
|-----|-------|--------|
| Texto inline | `h-3 w-3` | 12px |
| Botones pequeños | `h-4 w-4` | 16px |
| Botones normales | `h-5 w-5` | 20px |
| Botones grandes | `h-6 w-6` | 24px |
| Headers | `h-8 w-8` | 32px |

---

### Colores del Sistema

```tsx
// Primary (verde lima)
<Icon className="text-primary" />

// Secondary (azul oscuro)
<Icon className="text-secondary" />

// Destructive (rojo)
<Icon className="text-destructive" />

// Success (verde)
<Icon className="text-green-500" />

// Warning (amarillo)
<Icon className="text-yellow-500" />

// Info (azul)
<Icon className="text-blue-500" />

// Muted (gris)
<Icon className="text-muted-foreground" />
```

---

### Casos de Uso Comunes

#### En Botones
```tsx
<button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md">
  <Plus className="h-4 w-4" />
  Add Item
</button>
```

#### En Alerts
```tsx
<div className="flex gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
  <div>
    <p className="text-sm font-medium">Success</p>
    <p className="text-sm text-muted-foreground">Operation completed</p>
  </div>
</div>
```

#### En Navigation
```tsx
<button className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted">
  <Home className="h-5 w-5" />
  <span className="text-sm">Home</span>
</button>
```

#### En Badges
```tsx
<Badge className="gap-1">
  <CheckCircle2 className="h-3 w-3" />
  Verified
</Badge>
```

#### Icon-only Button (con accesibilidad)
```tsx
<button 
  className="h-10 w-10 inline-flex items-center justify-center rounded-md border"
  aria-label="Delete item"
>
  <Trash2 className="h-4 w-4" />
</button>
```

---

## 🎯 TIPS PRO

### 1. Consistencia
```tsx
// ✅ BUENO - Tamaño consistente en toda la app
const ICON_SIZE = "h-4 w-4";
<Icon className={ICON_SIZE} />

// ❌ MALO - Tamaños inconsistentes
<Icon className="h-3 w-3" />
<Icon className="h-5 w-5" />
<Icon className="h-4 w-4" />
```

### 2. Accesibilidad
```tsx
// ✅ BUENO - Con aria-label cuando no hay texto
<button aria-label="Delete">
  <Trash2 className="h-4 w-4" />
</button>

// ✅ BUENO - aria-hidden cuando hay texto
<button>
  <Trash2 className="h-4 w-4" aria-hidden="true" />
  Delete
</button>

// ❌ MALO - Sin aria-label y sin texto
<button>
  <Trash2 className="h-4 w-4" />
</button>
```

### 3. Colores Semánticos
```tsx
// ✅ BUENO - Usar colores con significado
<Trash2 className="text-destructive" />     // Rojo para eliminar
<CheckCircle2 className="text-green-500" /> // Verde para éxito
<AlertTriangle className="text-yellow-500" /> // Amarillo para warning

// ❌ MALO - Colores sin significado
<Trash2 className="text-blue-500" />
<CheckCircle2 className="text-red-500" />
```

### 4. Performance
```tsx
// ✅ BUENO - Importar solo lo necesario (tree-shaking)
import { User, Settings, Home } from "lucide-react";

// ❌ MALO - Importar todo (bundle size grande)
import * as Icons from "lucide-react";
<Icons.User />
```

### 5. Stroke Width
```tsx
// Para iconos delicados
<Icon strokeWidth={1} />

// Para iconos normales (default)
<Icon strokeWidth={2} />

// Para iconos enfatizados
<Icon strokeWidth={3} />
```

---

## 📂 CATEGORÍAS PRINCIPALES

| Categoría | Para buscar... |
|-----------|----------------|
| **Arrows & Navigation** | arrow, chevron, move, compass |
| **Actions & Editing** | plus, edit, trash, save, copy |
| **UI & Layout** | layout, menu, grid, sidebar |
| **Communication** | message, mail, phone, chat |
| **Media & Files** | file, folder, image, video |
| **Status & Alerts** | check, alert, warning, info |
| **User & People** | user, profile, account, team |
| **Commerce** | shopping, cart, payment, tag |
| **Time & Calendar** | calendar, clock, timer, alarm |
| **Weather** | sun, cloud, rain, wind |
| **Technology** | code, terminal, database, wifi |
| **Transport** | car, plane, train, bike |
| **Charts & Data** | chart, graph, analytics, trend |
| **Settings & Tools** | settings, wrench, filter, sliders |

---

## 🔍 BÚSQUEDAS COMUNES

| Necesito... | Buscar... | Encontrarás... |
|-------------|-----------|----------------|
| Botón agregar | "plus" | Plus, PlusCircle, PlusSquare |
| Botón eliminar | "trash" | Trash, Trash2, Delete |
| Botón editar | "edit" | Edit, Edit2, Edit3, Pencil |
| Botón descargar | "download" | Download, DownloadCloud |
| Botón compartir | "share" | Share, Share2, ShareNodes |
| Icono de usuario | "user" | User, User2, UserCircle |
| Icono de configuración | "settings" | Settings, Settings2, Cog |
| Icono de casa | "home" | Home, House, Building |
| Icono de búsqueda | "search" | Search, SearchCheck, SearchX |
| Icono de check | "check" | Check, CheckCircle, CheckSquare |
| Icono de error | "x" o "close" | X, XCircle, XSquare, Close |
| Icono de alerta | "alert" | Alert, AlertCircle, AlertTriangle |
| Icono de info | "info" | Info, InfoCircle, HelpCircle |

---

## 💡 EJEMPLOS RÁPIDOS

### Botón Primary con icono
```tsx
<button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md">
  <Plus className="h-4 w-4" />
  Agregar
</button>
```

### Botón Destructive
```tsx
<button className="inline-flex items-center gap-2 px-4 py-2 border border-destructive text-destructive rounded-md hover:bg-destructive/10">
  <Trash2 className="h-4 w-4" />
  Eliminar
</button>
```

### Alert de éxito
```tsx
<div className="flex gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
  <div>
    <p className="font-medium">¡Éxito!</p>
    <p className="text-sm text-muted-foreground">La operación se completó correctamente</p>
  </div>
</div>
```

### Alert de error
```tsx
<div className="flex gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
  <XCircle className="h-5 w-5 text-destructive shrink-0" />
  <div>
    <p className="font-medium">Error</p>
    <p className="text-sm text-muted-foreground">No se pudo completar la operación</p>
  </div>
</div>
```

### Item de navegación
```tsx
<button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-muted">
  <Home className="h-5 w-5" />
  <span>Inicio</span>
</button>
```

### Badge con icono
```tsx
<Badge className="gap-1">
  <Star className="h-3 w-3" />
  Premium
</Badge>
```

---

## ⚙️ CONFIGURACIÓN AVANZADA

### Animaciones
```tsx
// Rotating
<Settings className="animate-spin [animation-duration:3s]" />

// Pulsing
<Heart className="animate-pulse" />

// Bouncing
<Bell className="animate-bounce" />
```

### Con fill
```tsx
// Solo stroke (default)
<Heart className="h-6 w-6 text-red-500" />

// Con fill
<Heart className="h-6 w-6 text-red-500 fill-red-500" />
```

### Responsive sizes
```tsx
<Icon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
```

---

## 📚 DOCUMENTACIÓN COMPLETA

Para información detallada, ver:
- `/ICON_GALLERY_COMPLETE.md` - Documentación técnica completa
- `/ICON_CATEGORIES_REFERENCE.md` - Referencia de las 21 categorías
- `/ICON_GALLERY_SUMMARY.md` - Resumen ejecutivo

---

## ❓ FAQ

**P: ¿Cuántos iconos hay en total?**  
R: 1,000+ iconos de lucide-react, organizados en 21 categorías.

**P: ¿Cómo copio el código?**  
R: Click en cualquier icono. El código se copia automáticamente.

**P: ¿Puedo personalizar los iconos?**  
R: Sí. Usa className para tamaño, color, etc. Usa props como strokeWidth y fill.

**P: ¿Los iconos funcionan en dark mode?**  
R: Sí. Los colores del sistema (text-primary, etc.) se adaptan automáticamente.

**P: ¿Cómo busco un icono específico?**  
R: Usa el input de búsqueda o filtra por categoría con los badges.

**P: ¿Los iconos son accesibles?**  
R: Sí. Recuerda añadir aria-label en botones icon-only.

**P: ¿Puedo usar iconos de otras librerías?**  
R: Este proyecto usa exclusivamente lucide-react. Para máxima consistencia, usa solo estos iconos.

---

**Versión:** 2.0  
**Última actualización:** Enero 13, 2025  
**Mantenedor:** Sistema de Diseño Financio
