# SYSTEM SPECIFICATION: FACTORING DESIGN SYSTEM (DSM)
## Handoff Documentation for New Figma Make Instance

**Date:** January 2026
**Version:** 2.1 (KPI Navigation Update)
**Stack:** React 18, Tailwind CSS 4.0, shadcn/ui, Lucide React, Recharts

---

### 1. CORE ARCHITECTURE & RULES

#### Technology Constraints
- **Framework:** React 18 (Vite/CRA compatible) - NO Next.js/SSR.
- **Styling:** Tailwind CSS 4.0 exclusively. No Styled Components. No plain CSS (except globals).
- **Icons:** `lucide-react` only.
- **Imports:** STRICT relative paths (e.g., `../ui/button`). NEVER use `@/` aliases.
- **Typography:** Satoshi (from Fontshare).
- **Theme:** Dark Mode compatible (CSS Variables strategy).

#### Directory Structure
```
/src
  /components
    /ui/              # Atomic primitives (shadcn/ui - DO NOT MODIFY LOGIC)
    /business/        # Domain-specific components (e.g., StatusKPICard)
    /factoring/       # Main Application Modules
      /views/         # Full page layouts (Dashboards, Lists)
      /modals/        # Business dialogs
    /layout/          # Layout wrappers (Sidebar, Shell)
    /pages/           # DSM Documentation Pages (Showcases)
  /styles
    globals.css       # ALL Design Tokens & Theme Variables
  App.tsx             # Entry point & Router
```

---

### 2. DESIGN TOKENS (Source of Truth)

**File:** `/styles/globals.css`
**Critical**: Must use Tailwind v4 `@theme inline` or CSS variables configuration.

#### Colors (Semantic)
- **Primary:** `#DEFB49` (Lime/Yellow) - Actions, Focus rings.
- **Secondary:** `#1C2D3A` (Dark Blue) - Backgrounds, Text.
- **Background:** `#ffffff` (Light) / `#0f172a` (Dark).
- **Surface/Card:** `#ffffff` (Light) / `#1e293b` (Dark).
- **Muted:** `#f4f4f5` (Light) / `#334155` (Dark).

#### Typography (Satoshi)
- **Weights:**
  - `light` (300) - Large text, delicate reading.
  - `normal` (400) - Body text.
  - `medium` (500) - UI Labels, Buttons.
  - `semibold` (700) - Headings.
  - `bold` (900) - Hero titles.
- **Rules:** explicit `font-normal` or `font-light` may be needed for body text if it appears too bold.

---

### 3. COMPONENT CATALOG

#### A. Primitives (shadcn/ui)
*Must be implemented exactly as per standard shadcn registry.*
- **Core:** Button, Input, Card, Badge, Separator, Skeleton.
- **Forms:** Label, Checkbox, RadioGroup, Switch, Select, Textarea, Form (hook-form).
- **Feedback:** Alert, Dialog, Sheet, Progress, Toast (Sonner).
- **Data Display:** Table, Avatar, Tooltip, ScrollArea.
- **Navigation:** Tabs, Breadcrumb, DropdownMenu.
- **Layout:** Resizable, Accordion.

#### B. Business Components (`/components/business`)
1. **StatusKPICard**
   - **Purpose:** Navigation & Summary for dashboards.
   - **Props:** `title`, `count`, `amount`, `status` (active/inactive), `onClick`.
   - **Visual:** Card with left-border color coding, hover elevation, click interactive.

#### C. Factoring Views (`/components/factoring/views`)
1. **FactoringListView**
   - **Type:** Data Grid.
   - **Features:** KPI Header navigation, Search, Status filtering, Data Table.
2. **RadianDashboard**
   - **Type:** Operational Dashboard.
   - **Features:** KPI Header navigation (Solicitudes, Operaciones, Cursadas), Charts.
3. **BriefDashboard**
   - **Type:** Summary View.
   - **Features:** Simplified metrics, high-level overview.

---

### 4. RECENT ITERATIONS (Changelog)

**v2.1 - KPI Navigation Strategy**
- **Change:** Replaced text-based Tabs with `StatusKPICard` grid for main navigation in Dashboards.
- **Rationale:** Better visibility of critical metrics (Count + Amount) directly in the navigation controls.
- **Affected Files:** `FactoringListView.tsx`, `RadianDashboard.tsx`.

**v2.0.1 - Visual Polish**
- **Typography:** Tuned body text to `font-normal` or `font-light` to avoid "fake bold" rendering issues with Satoshi.
- **Tabs:** Reduced font weight in Tab triggers.

---

### 5. PROMPT FOR NEW INSTANCE

*Use this prompt to initialize the agent:*

> "Create a Factoring Web Application Design System (DSM).
> **Stack:** React 18, Tailwind 4, Lucide Icons.
> **Design:**
> - Font: Satoshi.
> - Primary Color: #DEFB49.
> - Secondary Color: #1C2D3A.
> - Mode: Light/Dark support.
>
> **Architecture:**
> 1. Setup `/styles/globals.css` with the specific colors and Satoshi import.
> 2. Implement core shadcn/ui components in `/components/ui`.
> 3. Create a `/components/business/StatusKPICard.tsx` component for dashboard navigation.
> 4. Create a main Layout with a Sidebar.
> 5. Implement a `FactoringListView` using the KPI Cards for filtering the table.
>
> **Important:** Use strict relative imports. Do not use Next.js features. Ensure accessibility compliance (WCAG AA)."

