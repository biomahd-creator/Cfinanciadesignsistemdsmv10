import React, { useState } from "react";
import { ComponentShowcase } from "../components/ui/component-showcase";
import { Button } from "../components/ui/button";
import { 
  Spinner, 
  PageLoader, 
  CardSkeleton, 
  TableSkeleton, 
  ButtonLoader, 
  DotLoader 
} from "../components/ui/loading-states";

const code = `import { Spinner, ButtonLoader, DotLoader, CardSkeleton, TableSkeleton } from "@/components/ui/loading-states";

export function LoadingStatesDemo() {
  return (
    <>
      <Spinner />
      <Button disabled><ButtonLoader /> Loading</Button>
      <DotLoader />
      <CardSkeleton />
      <TableSkeleton rows={3} />
    </>
  );
}`;

export function LoadingStatesPage() {
  const [showPageLoader, setShowPageLoader] = useState(false);

  return (
    <ComponentShowcase
      title="Loading States"
      description="Colección de indicadores de carga y skeletons."
      category="UI Pattern"
      preview={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="flex items-center gap-4 border p-4 rounded">
            <Spinner />
            <span>Spinner Simple</span>
          </div>
          <div className="border p-4 rounded">
            <Button onClick={() => setShowPageLoader(true)}>Probar Page Loader (3s)</Button>
            {showPageLoader && (() => {
              setTimeout(() => setShowPageLoader(false), 3000);
              return <PageLoader />;
            })()}
          </div>
          <div className="border p-4 rounded">
            <Button disabled><ButtonLoader /> Procesando</Button>
          </div>
          <div className="border p-4 rounded">
            <DotLoader />
          </div>
          <div className="md:col-span-2 border p-4 rounded space-y-4">
             <p className="text-sm font-medium text-muted-foreground">Skeletons</p>
             <CardSkeleton />
             <TableSkeleton rows={2} />
          </div>
        </div>
      }
      code={code}
    />
  );
}
