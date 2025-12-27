import { ComponentShowcase } from "../ui/component-showcase";
import { VirtualList } from "../advanced/VirtualList";
import { Card } from "../ui/card";

export function VirtualListPage() {
  const largeDataset = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `Description for item ${i + 1}`,
  }));

  return (
    <ComponentShowcase
      title="Virtual List"
      description="High-performance list rendering for large datasets. Only renders visible items, enabling smooth scrolling through thousands of rows."
      category="Advanced Layouts"
      preview={
        <Card className="p-6 w-full max-w-3xl">
          <div className="mb-4">
            <div className="text-lg mb-1">Virtual Scrolling Demo</div>
            <div className="text-xs text-muted-foreground">
              Rendering 10,000 items efficiently • Only visible items are in DOM
            </div>
          </div>
          <VirtualList
            items={largeDataset}
            height={500}
            itemHeight={60}
            renderItem={(item) => (
              <div className="p-4 border-b flex items-center gap-3 hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                  {item.id}
                </div>
                <div className="flex-1">
                  <div className="text-sm">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              </div>
            )}
          />
          <div className="mt-3 text-xs text-center text-muted-foreground">
            Performance: 60fps • Memory: Optimized
          </div>
        </Card>
      }
      code={`import { VirtualList } from "../advanced/VirtualList";

const items = Array.from({ length: 10000 }, (_, i) => ({ id: i }));

<VirtualList
  items={items}
  height={500}
  itemHeight={60}
  renderItem={(item) => <ItemRow item={item} />}
/>`}
      usage="Virtual lists dramatically improve performance when rendering large datasets by only mounting DOM elements for visible items. Essential for tables, logs, and data-heavy applications."
      usageCode={`import { VirtualList } from "../advanced/VirtualList";
import { useState, useEffect } from "react";

export function DataTable() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Load large dataset
    const largeData = generateData(50000);
    setData(largeData);
  }, []);
  
  return (
    <VirtualList
      items={data}
      height={600}
      itemHeight={50}
      renderItem={(row) => (
        <div className="flex gap-4 p-3 border-b">
          <span>{row.id}</span>
          <span>{row.name}</span>
          <span>{row.value}</span>
        </div>
      )}
    />
  );
}`}
      props={[
        { name: "items", type: "T[]", default: "[]", description: "Array of items to virtualize", required: true },
        { name: "height", type: "number", default: "600", description: "Container height in pixels", required: true },
        { name: "itemHeight", type: "number", default: "50", description: "Height of each item in pixels", required: true },
        { name: "renderItem", type: "(item: T, index: number) => ReactNode", default: "undefined", description: "Function to render each item", required: true },
        { name: "overscan", type: "number", default: "5", description: "Number of items to render outside viewport" },
        { name: "onScroll", type: "(scrollTop: number) => void", default: "undefined", description: "Callback on scroll" },
      ]}
      examples={[
        {
          title: "Large Table",
          description: "Virtualized data table with 10,000 rows",
          preview: (
            <Card className="p-4 w-full max-w-4xl">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm">User Records (10,000 items)</div>
                <input 
                  placeholder="Search..."
                  className="px-3 py-1 bg-muted rounded text-xs w-48"
                />
              </div>
              <div className="border rounded-lg overflow-hidden">
                <div className="flex gap-4 p-3 bg-muted/50 border-b text-xs">
                  <div className="w-16">ID</div>
                  <div className="flex-1">Name</div>
                  <div className="w-32">Email</div>
                  <div className="w-24">Status</div>
                </div>
                <VirtualList
                  items={largeDataset.slice(0, 100)}
                  height={300}
                  itemHeight={45}
                  renderItem={(item) => (
                    <div className="flex gap-4 p-3 border-b text-xs items-center hover:bg-muted/30">
                      <div className="w-16">{item.id}</div>
                      <div className="flex-1">{item.title}</div>
                      <div className="w-32 text-muted-foreground">user@email.com</div>
                      <div className="w-24">
                        <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded-full">Active</span>
                      </div>
                    </div>
                  )}
                />
              </div>
            </Card>
          ),
          code: `<VirtualList\n  items={users}\n  height={400}\n  itemHeight={45}\n  renderItem={(user) => (\n    <TableRow key={user.id}>\n      <td>{user.id}</td>\n      <td>{user.name}</td>\n      <td>{user.email}</td>\n    </TableRow>\n  )}\n/>`,
        },
        {
          title: "Chat History",
          description: "Virtualized message list with varying content",
          preview: (
            <Card className="p-4 w-full max-w-2xl">
              <div className="mb-3 text-sm">Conversation History</div>
              <VirtualList
                items={largeDataset.slice(0, 50)}
                height={400}
                itemHeight={70}
                renderItem={(item) => (
                  <div className={`flex gap-3 p-3 ${item.id % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    {item.id % 2 !== 0 && <div className="w-8 h-8 rounded-full bg-blue-500/20" />}
                    <div className={`max-w-xs p-3 rounded-lg text-xs ${
                      item.id % 2 === 0 ? 'bg-primary/20' : 'bg-muted'
                    }`}>
                      <div>{item.description}</div>
                      <div className="text-xs text-muted-foreground mt-1">12:34 PM</div>
                    </div>
                    {item.id % 2 === 0 && <div className="w-8 h-8 rounded-full bg-primary/20" />}
                  </div>
                )}
              />
            </Card>
          ),
          code: `<VirtualList\n  items={messages}\n  height={400}\n  itemHeight={70}\n  renderItem={(msg) => (\n    <MessageBubble message={msg} />\n  )}\n/>`,
        },
      ]}
    />
  );
}
