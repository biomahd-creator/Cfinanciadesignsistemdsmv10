import { useState } from "react";
import { ComponentShowcase } from "../components/ui/component-showcase";
import { InfiniteScroll } from "../components/advanced/InfiniteScroll";

const infiniteScrollCode = `import { useState } from "react";
import { InfiniteScroll } from "@/components/advanced/InfiniteScroll";

export function InfiniteScrollDemo() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => i));
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = async () => {
    if (isLoading) return;
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setItems(prev => [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i)]);
    setIsLoading(false);
  };

  return (
    <div className="h-[300px] overflow-auto border rounded-md p-4">
      <InfiniteScroll
        loadMore={loadMore}
        hasMore={items.length < 100}
        isLoading={isLoading}
      >
        {items.map((item) => (
          <div key={item} className="p-4 border-b mb-2 bg-muted/20 rounded">
            Item #{item}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}`;

export function InfiniteScrollPage() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => i));
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = async () => {
    if (isLoading) return;
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setItems(prev => [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i)]);
    setIsLoading(false);
  };

  return (
    <ComponentShowcase
      title="Infinite Scroll"
      description="Carga automática de contenido al hacer scroll."
      category="Advanced"
      preview={
        <div className="h-[300px] overflow-auto border rounded-md p-4 min-w-[320px]">
          <InfiniteScroll
            loadMore={loadMore}
            hasMore={items.length < 100}
            isLoading={isLoading}
          >
            {items.map((item) => (
              <div key={item} className="p-4 border-b mb-2 bg-muted/20 rounded">
                Item #{item}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      }
      code={infiniteScrollCode}
      usage="Ideal para feeds de actividad, listas de comentarios o logs extensos."
    />
  );
}
