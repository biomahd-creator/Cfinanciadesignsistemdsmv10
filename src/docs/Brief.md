# 📋 BRIEF COMPLETO - C-FINANCIA FACTORING ELECTRÓNICO
**Para:** Creador Make (Figma)
**Versión:** 1.0 | Enero 2026
**Usuario:** Administrador / Fondeador

---

## 🎯 INSTRUCCIONES GENERALES

Crea el flujo completo de Gestión de Factoring Electrónico con:
- ✅ 6 pantallas principales
- ✅ 40+ componentes reutilizables
- ✅ Estados y variantes dinámicas
- ✅ Flujos de navegación interconectados
- ✅ Tablas filtradas y ordenables
- ✅ Formularios multi-paso (stepper)

---

## 🗺️ MAPA DE NAVEGACIÓN

PANTALLA 1: Dashboard (/)
├─ Factoring → PANTALLA 2
└─ RADIAN → PANTALLA 4

PANTALLA 2: Listado (/factoring/fondeador)
├─ Tabs: Creadas|Proceso|Negociadas|Endosadas
├─ Click fila → PANTALLA 3
└─ Nueva operación → PANTALLA 3

PANTALLA 3A: Detalle Paso 1
├─ Stepper: Step 1 (active)
├─ Form + Tabla Facturas
└─ Continuar → PANTALLA 3B

PANTALLA 3B: Detalle Paso 2
├─ Stepper: Step 2 (active)
├─ Tabla Desembolsos
└─ Crear Operación → PANTALLA 2

PANTALLA 4: RADIAN (/notificacionesRadian)
├─ Tabs: Operaciones|Mandatos|Títulos
└─ Tablas variadas por tab

PANTALLA 5: Admin (/administracion/fondeador)
└─ Tabla Clientes

---

## 📱 PANTALLA 1: DASHBOARD PRINCIPAL

### Header Global (Reutilizable)
- Logo C-Financia (negro)
- Avatar: "soporte.cfinancia"
- Dropdown menu: Instructivos, Admin, Cambiar empresa, Salir
- Bg: #2C2C2C, altura 64px

### Hero Section
- Gradiente blanco → gris claro
- Layout: flex, center, gap 32px
- Altura: 100vh

### Card 1: Factoring
- Icono: wallet
- Titulo: "Factoring"
- Desc: "Revise las operaciones..."
- Botón: "Acceder" → /factoring/fondeador
- Padding: 24px, border-radius: 8px
- Hover: elevate shadow

### Card 2: Eventos RADIAN
- Icono: bell
- Titulo: "Eventos RADIAN"
- Desc: "Notifique sus eventos..."
- Botón: "Acceder" → /notificacionesRadian
- Mismo estilo Card 1

---

## 📊 PANTALLA 2: LISTADO FACTORING

### Breadcrumb
Inicio > Factoring

### KPI Card
- Titulo: "Monto en operaciones validadas en factoring:"
- Valor: "$358.475.339.641,16" (48px, bold)
- Bg: #CDEB00 (Verde Lima)
- Padding: 32px

### Tab Navigation (4 tabs)
[✓ Operaciones creadas] [En Proceso] [Negociadas] [Endosadas]

- Active: #CDEB00 bg, black text
- Inactive: transparent bg, gray text
- Click: change tab + update tabla

### Search & Actions
- Input "Buscar"
- Botón "Consultar facturas" (secondary)
- Botón "Nueva operación" (primary, verde)

### Data Table

Columnas:
| Campo | Tipo | Filter | Sort |
|-------|------|--------|------|
| ID | text | Sí | Sí |
| FECHA OP | date | Sí | Sí |
| NIT | text | Sí | No |
| RAZÓN | text | No | No |
| FACTURAS | number | No | Sí |
| VALOR FACT | currency | No | Sí |
| VALOR DESEMB | currency | No | Sí |
| OPCIONES | actions | No | No |

Datos:
27007 | 2025-12-31 | 900985442 | CI PETROIL... | 1 | $102M | $89M | [👁]
27006 | 2025-12-31 | 900142127 | ODIN P... | 1 | $1,15B | $1B | [👁]
26988 | 2025-12-30 | 900985442 | CI PETROIL... | 1 | $100M | $87M | [👁]

Interacciones:
- Hover fila: bg #F5F5F5
- Click ID/fila: /factoring/fondeador/detalle/:id
- Click ojo: /factoring/fondeador/detalle/:id
- Combobox: filter options
- Tab change: update datos

### Pagination
Página X de Y
Input: Ir a página
Dropdown: Mostrar 10 (opciones: 10,25,50)
Navegación: ◀ 1 2 3 ▶

---

## 📝 PANTALLA 3A: DETALLE OPERACIÓN - PASO 1

### Breadcrumb
Inicio > Factoring > Nueva Operación

### Stepper (2 steps)
◯──1[ACTIVO]──◯──2[DISABLED]

Step 1 (verde): Validar facturas...
Step 2 (gris): Validar desembolsos...

### Form Left: Información Endosatario
- Toggle: "Endosar a un tercero" (default OFF)
- Fields (readonly cuando OFF):
  - Razón social: "CESIONBNK SAS"
  - Tipo doc: "NIT"
  - Número doc: "901298003-1"

### Form Right: Información Negociación

**Radio - Operación:**
- ✓ Factoring
- Confirming

**Radio - Producto:**
- ✓ Factoring Físico
- Factoring Proveedor

**Select - Tipo:**
- ✓ Endoso en propiedad
- Endoso en garantía
- Endoso en procuración
- Endoso con cesión ordinaria
- Transferencia derechos

**Radio - Entrega:**
- ✓ Con responsabilidad
- Sin responsabilidad

**Checkboxes - Cobros:**
- ☐ Megag
- ☐ Confecámaras

**Select - Origen:**
- ✓ Negociación por RADIAN
- Negociación por Cesión

**Input - Referenciador:**
- Type: number
- Sublabel: "NIT sin DV"

### Table: Facturas

Columnas:
NUMERACIÓN | EMISOR | PAGADOR | FECHA EMISIÓN | FECHA VENC | FECHA PAGO | FECHA DESEMB | VALOR TÍTULO | MONTO ACEPT | % FINANCIAR | TASA EA | TASA INVF | VALOR DESC | VALOR DESEMB | ESTADO RADIAN

Datos:
OPI261 | CI PETROIL... | BIOMAX... | 2025-12-31 | 2026-01-30 | [📅] | [📅] | $102.938.617 | $99.315.520 | [90] | [33] | [2,405] | $2.149.684 | $89.383.968 | [Link]

Editables:
- FECHA PAGO: date picker
- FECHA DESEMB: date picker
- % FINANCIAR: spinner
- TASA EA: spinner
- TASA INVF: spinner

Readonly (calculados):
- MONTO ACEPT
- VALOR DESC
- VALOR DESEMB

ESTADO: Badge "Factura Electrónica" turquesa + link

### Summary (Pie)
📋 Facturas: 1
   Valor total: $102.938.617,18
   Nota: El valor está sujeto...
   
   Valor Desembolso: $89.383.968,00
   [Continuar →]

Interacciones:
- Click Continuar: → PANTALLA 3B
- Click breadcrumb Factoring: → PANTALLA 2
- Cambiar tabla: update summary
- Click ESTADO: open DIAN link

---

## 💰 PANTALLA 3B: DETALLE OPERACIÓN - PASO 2

### Stepper (actualizado)
✓ 1 ────2[ACTIVO]
Completado | Validar desembolsos...

### Table: Cuentas Desembolso

Columnas:
NO. CUENTA | TIPO CUENTA | NOMBRE | NO. IDENTIF | IDENTIFIC | BANCO | VALOR | EXCEDENTE

Datos:
455970078917 | Ahorros | ODIN PETROIL... | NIT | 900985911 | DAVIVIENDA | $ 0 | [Toggle]

Interacciones:
- Toggle EXCEDENTE: checkbox

### Summary (igual Paso 1)
Facturas: 1
Valor: $102.938.617,18
Desembolso: $89.383.968,00

[Crear Operación]

Click: → PANTALLA 2 (actualizar tabla)
Toast: "Operación creada"

---

## 📢 PANTALLA 4: EVENTOS RADIAN

### Header Cards (3 cards)

**Card 1: Nuevo Endoso**
- Icono: document
- Titulo: "Nuevo Endoso"
- Desc: "Genera un nuevo endoso..."
- Botón: "Crear Endoso" → /notificacionesRadian/nuevoEndoso2

**Card 2: Consulta Facturas**
- Icono: search
- Titulo: "Consulta de Facturas"
- Desc: "Accede a la información..."
- Botón: "Consultar" → /notificacionesRadian/consultaFacturas

**Card 3: Histórico Endosos**
- Icono: history
- Titulo: "Histórico de Endosos"
- Desc: "Consulta el histórico completo..."
- Botón: "Ver Facturas" → link externo

### Tab Navigation (3 tabs)
[✓ Operaciones] [Mandatos] [Títulos]

### Tab 1: Operaciones

Tabla:
Columnas: NIT ENDOSANTE | RAZÓN ENDOSANTE | NIT ENDOSATARIO | RAZÓN ENDOSATARIO | FACTURAS | TOTAL FACTURAS | TOTAL ENDOSADO | OPCIONES

Datos:
901298003 | CESIONBNK SAS | 901061400 | PATRIMONIO... | 1 | $2.429.028 | $2.101.117 | [👁]
900278155 | HIDROSPOT SAS | 901298003 | CESIONBNK SAS | 1 | $2.429.028 | $2.090.803 | [👁]

Click fila: → /notificacionesRadian/detalleOperacion/:id

Pagination: Página 1 de 341

---

### Tab 2: Mandatos

Botón: "Agregar Mandato" (verde)

Tabla:
Columnas: NIT MANDANTE | RAZÓN MANDANTE | TIPO MANDATO | TIEMPO VIGENCIA | ESTADO MANDATO | OPCIONES

Datos:
830107457 | SUNAO TRADING SAS | Documento General | Ilimitado | [Vigente-verde] | [👁][❤️]
901366606 | SERVICIOS ESP... | Documento General | Ilimitado | [Vigente-verde] | [👁][❤️]

Filtros:
- TIPO MANDATO: Combobox "Todos"
- TIEMPO VIGENCIA: Combobox "Todo"

Estado:
- Vigente: badge verde

Opciones:
- Ojo: view
- Corazón: favorite (toggle)

---

### Tab 3: Títulos

Botones:
- "Estado de los Títulos" (verde)
- "Agregar Título" (verde)

Tabla:
Columnas: NUMERACIÓN | FECHA VENCIMIENTO | EMISOR | TENEDOR | VALOR ACTUAL | ESTADO RADIAN | OPCIONES

Datos:
OPI251 | 2025-01-30 | CI PETROIL... | CI PETROIL... | $102.938.617 | [Factura Elec-naranja] | [Opciones ▼]
OPI233 | 2026-01-30 | ODIN PETROIL... | ODIN PETROIL... | $1.157.547.355 | [Factura Elec-naranja] | [Opciones ▼]

Filtros:
- EMISOR: Combobox "Todo"
- TENEDOR: Combobox "Todo"
- ESTADO RADIAN: Combobox "Todo"

Estados:
- Factura Electrónica: badge naranja
- Endosada: badge verde

Opciones dropdown:
- Ver detalle
- Descargar
- Editar

---

## 🖥️ PANTALLA 5: ADMINISTRACIÓN

### Header
Titulo: "Administración"
Breadcrumb: Inicio > Administración

### Toolbar
Input: "Buscar"
Botón: "Crear Empresa" (verde)

### Table: Clientes

Columnas:
NIT CLIENTE | RAZÓN CLIENTE | REPRES. LEGAL | BUZÓN | % FINANCIAMIENTO | % EA | ESTADO | OPCIONES

Datos:
813004570 | DRIWO
