import { ComponentShowcase } from "../components/ui/component-showcase";
import { BottomSheet } from "../components/ui/bottom-sheet";
import { Button } from "../components/ui/button";
import { Download, MessageSquare } from "lucide-react";

const code = `import { BottomSheet } from "@/components/ui/bottom-sheet";

export function BottomSheetDemo() {
  return (
    <BottomSheet 
      trigger={<Button>Abrir Sheet</Button>}
      title="Opciones de Factura"
      description="Selecciona una acción para la factura seleccionada"
    >
      <div className="space-y-2">
        <Button variant="outline" className="w-full justify-start">
          <Download className="mr-2 h-4 w-4"/> Descargar PDF
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <MessageSquare className="mr-2 h-4 w-4"/> Enviar Comentario
        </Button>
      </div>
    </BottomSheet>
  );
}`;

export function BottomSheetPage() {
  return (
    <ComponentShowcase
      title="Bottom Sheet"
      description="Panel deslizable desde el fondo, ideal para opciones en móvil."
      category="UI Pattern"
      preview={
        <div className="h-[200px] flex items-center justify-center">
          <BottomSheet 
            trigger={<Button>Abrir Sheet</Button>}
            title="Opciones de Factura"
            description="Selecciona una acción para la factura seleccionada"
          >
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start"><Download className="mr-2 h-4 w-4"/> Descargar PDF</Button>
              <Button variant="outline" className="w-full justify-start"><MessageSquare className="mr-2 h-4 w-4"/> Enviar Comentario</Button>
            </div>
          </BottomSheet>
        </div>
      }
      code={code}
    />
  );
}
