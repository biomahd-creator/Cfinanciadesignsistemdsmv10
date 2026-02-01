import React, { useState } from "react";
import { ComponentShowcase } from "../components/ui/component-showcase";
import { ErrorBoundary } from "../components/ui/error-boundary";
import { Button } from "../components/ui/button";

const code = `import { ErrorBoundary } from "@/components/ui/error-boundary";

export function ErrorBoundaryDemo() {
  return (
    <ErrorBoundary>
      <MyComponentThatMightError />
    </ErrorBoundary>
  );
}`;

function BuggyComponentWrapper() {
  const [bomb, setBomb] = useState(false);
  if (bomb) throw new Error("¡Boom! Este error fue atrapado por el ErrorBoundary.");
  return (
    <div className="text-center">
      <p className="mb-4">Este componente funciona bien.</p>
      <Button variant="destructive" onClick={() => setBomb(true)}>
        Causar Error
      </Button>
    </div>
  );
}

export function ErrorBoundaryPage() {
  return (
    <ComponentShowcase
      title="Error Boundary"
      description="Captura errores de renderizado y muestra una UI de fallback amigable."
      category="Utility"
      preview={
        <div className="w-full p-4 border rounded-lg">
          <ErrorBoundary>
            <BuggyComponentWrapper />
          </ErrorBoundary>
        </div>
      }
      code={code}
    />
  );
}
