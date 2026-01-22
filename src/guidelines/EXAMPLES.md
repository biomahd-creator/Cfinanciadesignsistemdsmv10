# IMPLEMENTATION EXAMPLES

## CASO DE ESTUDIO: MULTI-STEP FORMS

### ❌ Incorrecto (Manual)
```tsx
// Código duplicado y difícil de mantener
<div className="flex">
  <div className="w-10 h-10 rounded-full bg-primary">1</div>
  <div className="w-10 h-10 rounded-full bg-muted">2</div>
</div>
```

### ✅ Correcto (Componente Avanzado)
```tsx
import { StepIndicator } from "../advanced/StepIndicator";

<StepIndicator
  steps={steps}
  currentStep={currentStep}
  orientation="horizontal"
  variant="default"
  onStepClick={handleStep}
/>
```
**Beneficio**: 82% menos código, accesible y consistente.

---

## USO DEL DSM (COMPONENT SHOWCASE)

Para documentar un nuevo componente en el sistema:

```tsx
import { ComponentShowcase } from "../ui/component-showcase";
import { MyComponent } from "../ui/my-component";

export function MyComponentPage() {
  return (
    <ComponentShowcase
      title="My Component"
      description="Componente para acciones principales."
      category="Actions"
      preview={<MyComponent variant="default" />}
      code={`<MyComponent variant="default" />`}
      props={[
        { name: "variant", type: "string", default: "default", description: "Estilo visual" }
      ]}
    />
  );
}
```

## MIGRACIÓN DE DUPLICADOS
Si encuentras un componente repetido (ej: un Card custom):
1. Importar `Card`, `CardHeader`, `CardContent` de shadcn.
2. Reemplazar la estructura HTML plana.
3. Verificar que los estilos usen tokens (`bg-card`, `text-card-foreground`).
