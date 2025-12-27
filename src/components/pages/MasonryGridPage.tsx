import { ComponentShowcase } from "../ui/component-showcase";
import { MasonryGrid } from "../advanced/MasonryGrid";
import { Card } from "../ui/card";

export function MasonryGridPage() {
  const items = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    height: Math.floor(Math.random() * 200) + 150,
    image: `https://images.unsplash.com/photo-${1506905925346 + i * 1000}?w=400`,
    title: `Item ${i + 1}`,
  }));

  return (
    <ComponentShowcase
      title="Masonry Grid"
      description="Pinterest-style masonry layout that arranges items of varying heights into columns. Perfect for image galleries, card grids, and dashboards."
      category="Advanced Layouts"
      preview={
        <div className="w-full max-w-6xl">
          <MasonryGrid columns={3} gap={16}>
            {items.map((item) => (
              <Card key={item.id} className="p-4">
                <div 
                  style={{ height: item.height }}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-3 flex items-center justify-center"
                >
                  {item.title}
                </div>
                <div className="text-sm">{item.title}</div>
              </Card>
            ))}
          </MasonryGrid>
        </div>
      }
      code={`import { MasonryGrid } from "../advanced/MasonryGrid";

<MasonryGrid columns={3} gap={16}>
  {items.map((item) => (
    <Card key={item.id}>{item.content}</Card>
  ))}
</MasonryGrid>`}
      usage="Masonry grids organize content of varying heights efficiently, filling vertical gaps automatically. Commonly used in image galleries, Pinterest-style layouts, and dashboard widgets."
      usageCode={`import { MasonryGrid } from "../advanced/MasonryGrid";

export function ImageGallery() {
  const photos = [...]; // varying heights
  
  return (
    <MasonryGrid columns={4} gap={16}>
      {photos.map(photo => (
        <img key={photo.id} src={photo.url} alt={photo.title} />
      ))}
    </MasonryGrid>
  );
}`}
      props={[
        { name: "columns", type: "number", default: "3", description: "Number of columns", required: true },
        { name: "gap", type: "number", default: "16", description: "Gap between items in pixels" },
        { name: "children", type: "ReactNode", default: "undefined", description: "Items to display", required: true },
      ]}
      examples={[
        {
          title: "Image Gallery",
          description: "Photo grid with varying aspect ratios",
          preview: (
            <MasonryGrid columns={4} gap={12}>
              {items.slice(0, 8).map((item) => (
                <div key={item.id} className="rounded-lg overflow-hidden elevation-1 hover:elevation-3 transition-all">
                  <div style={{ height: item.height }} className="bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                </div>
              ))}
            </MasonryGrid>
          ),
          code: `<MasonryGrid columns={4} gap={12}>\n  {photos.map(photo => (\n    <img key={photo.id} src={photo.url} />\n  ))}\n</MasonryGrid>`,
        },
        {
          title: "Dashboard Widgets",
          description: "Varied widget sizes in masonry layout",
          preview: (
            <MasonryGrid columns={3} gap={16}>
              {[
                { h: 120, title: "Quick Stats" },
                { h: 200, title: "Revenue Chart" },
                { h: 150, title: "Recent Orders" },
                { h: 180, title: "Top Products" },
                { h: 140, title: "User Activity" },
                { h: 220, title: "Analytics" },
              ].map((widget, i) => (
                <Card key={i} className="p-4" style={{ height: widget.h }}>
                  <div className="text-sm mb-2">{widget.title}</div>
                  <div className="text-muted-foreground text-xs">Widget content...</div>
                </Card>
              ))}
            </MasonryGrid>
          ),
          code: `<MasonryGrid columns={3} gap={16}>\n  {widgets.map(widget => (\n    <WidgetCard key={widget.id} data={widget} />\n  ))}\n</MasonryGrid>`,
        },
      ]}
    />
  );
}
