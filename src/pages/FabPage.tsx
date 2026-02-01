import { ComponentShowcase } from "../components/ui/component-showcase";
import { FloatingActionButton } from "../components/ui/floating-action-button";

const code = `import { FloatingActionButton } from "@/components/ui/floating-action-button";

export function FabDemo() {
  return <FloatingActionButton position="bottom-right" />;
}`;

export function FabPage() {
  return (
    <ComponentShowcase
      title="Floating Action Button"
      description="Botón de acción principal flotante."
      category="UI Pattern"
      preview={
        <div className="h-[200px] w-full relative bg-muted/20 rounded-md overflow-hidden border">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            El botón flota en la esquina
          </div>
          <FloatingActionButton position="bottom-right" className="absolute" />
        </div>
      }
      code={code}
    />
  );
}
