import { ComponentShowcase } from "../components/ui/component-showcase";
import { MasonryGrid } from "../components/advanced/MasonryGrid";

const masonryCode = `import { MasonryGrid } from "@/components/advanced/MasonryGrid";

export function MasonryDemo() {
  return (
    <MasonryGrid gutter="16px">
      {Array.from({ length: 8 }).map((_, i) => (
        <div 
          key={i} 
          className="bg-muted/30 rounded-lg border p-4 flex items-center justify-center"
          style={{ height: \`\${Math.floor(Math.random() * 200) + 100}px\` }}
        >
          Card {i + 1}
        </div>
      ))}
    </MasonryGrid>
  );
}`;

export function MasonryGridPage() {
  return (
    <ComponentShowcase
      title="Masonry Grid"
      description="Grid tipo Pinterest que optimiza el espacio vertical."
      category="Advanced"
      preview={
        <MasonryGrid gutter="16px">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i} 
              className="bg-muted/30 rounded-lg border p-4 flex items-center justify-center w-full"
              style={{ height: `${Math.floor(Math.random() * 200) + 100}px` }}
            >
              Card {i + 1}
            </div>
          ))}
        </MasonryGrid>
      }
      code={masonryCode}
      usage="Útil para galerías de imágenes o tarjetas con contenido de altura variable."
    />
  );
}
