import { ComponentShowcase } from "../ui/component-showcase";
import { Sparklines } from "../advanced/Sparklines";
import { Card } from "../ui/card";

export function SparklinesPage() {
  const sampleData = [4, 6, 8, 5, 9, 12, 7, 10, 8, 11, 14, 9, 13];
  const stockData = [100, 102, 98, 105, 103, 110, 115, 112, 118, 120, 117, 125];
  const volatileData = [50, 55, 45, 60, 40, 65, 35, 70, 30, 75, 28, 80];

  return (
    <ComponentShowcase
      title="Sparklines"
      description="Compact, word-sized charts that provide visual context for data trends without axes or labels. Perfect for displaying inline metrics and KPIs."
      category="Data Visualization"
      preview={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <Card className="p-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Revenue Trend</p>
              <div className="flex items-end gap-3">
                <span className="text-2xl">$12,345</span>
                <div className="flex-1">
                  <Sparklines data={sampleData} color="#DEFB49" height={40} />
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Stock Price</p>
              <div className="flex items-end gap-3">
                <span className="text-2xl">$125.00</span>
                <div className="flex-1">
                  <Sparklines data={stockData} color="#22c55e" height={40} />
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Volatility</p>
              <div className="flex items-end gap-3">
                <span className="text-2xl">80pts</span>
                <div className="flex-1">
                  <Sparklines data={volatileData} color="#ef4444" height={40} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      }
      code={`import { Sparklines } from "@/components/advanced/Sparklines";

const data = [4, 6, 8, 5, 9, 12, 7, 10, 8, 11, 14, 9, 13];

<Sparklines 
  data={data} 
  color="#DEFB49" 
  height={40} 
/>`}
      usage="Sparklines are ideal for showing trends at a glance within confined spaces like table cells, cards, or inline with text. They sacrifice detail for compactness and visual impact."
      usageCode={`import { Sparklines } from "@/components/advanced/Sparklines";
import { Card } from "@/components/ui/card";

export function MetricCard() {
  const data = [100, 102, 98, 105, 103, 110, 115];
  
  return (
    <Card className="p-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Revenue</p>
        <div className="flex items-end gap-3">
          <span className="text-2xl">$12,345</span>
          <div className="flex-1">
            <Sparklines data={data} color="#DEFB49" height={40} />
          </div>
        </div>
      </div>
    </Card>
  );
}`}
      props={[
        {
          name: "data",
          type: "number[]",
          default: "[]",
          description: "Array of numeric values to plot",
          required: true,
        },
        {
          name: "color",
          type: "string",
          default: '"#DEFB49"',
          description: "Line color (hex, rgb, or named color)",
          required: false,
        },
        {
          name: "height",
          type: "number",
          default: "40",
          description: "Chart height in pixels",
          required: false,
        },
        {
          name: "width",
          type: "string",
          default: '"100%"',
          description: "Chart width (CSS value)",
          required: false,
        },
        {
          name: "strokeWidth",
          type: "number",
          default: "2",
          description: "Line thickness in pixels",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Positive Trend",
          description: "Displaying upward trending data with green color",
          preview: (
            <Card className="p-6 w-full">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">User Growth</p>
                <div className="flex items-end gap-3">
                  <span className="text-2xl">+24.5%</span>
                  <div className="flex-1">
                    <Sparklines 
                      data={[100, 105, 110, 108, 115, 120, 125, 130]} 
                      color="#22c55e" 
                      height={40} 
                    />
                  </div>
                </div>
              </div>
            </Card>
          ),
          code: `<Sparklines 
  data={[100, 105, 110, 108, 115, 120, 125, 130]} 
  color="#22c55e" 
  height={40} 
/>`,
        },
        {
          title: "Negative Trend",
          description: "Displaying downward trending data with red color",
          preview: (
            <Card className="p-6 w-full">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Error Rate</p>
                <div className="flex items-end gap-3">
                  <span className="text-2xl">-12.3%</span>
                  <div className="flex-1">
                    <Sparklines 
                      data={[100, 95, 90, 92, 85, 80, 75, 70]} 
                      color="#ef4444" 
                      height={40} 
                    />
                  </div>
                </div>
              </div>
            </Card>
          ),
          code: `<Sparklines 
  data={[100, 95, 90, 92, 85, 80, 75, 70]} 
  color="#ef4444" 
  height={40} 
/>`,
        },
        {
          title: "Table Integration",
          description: "Sparklines embedded in table cells for compact data visualization",
          preview: (
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Metric</th>
                    <th className="text-left p-3">Value</th>
                    <th className="text-left p-3">Trend (7 days)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Revenue</td>
                    <td className="p-3">$45,231</td>
                    <td className="p-3">
                      <Sparklines 
                        data={[100, 102, 105, 103, 108, 112, 115]} 
                        color="#DEFB49" 
                        height={30} 
                      />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Users</td>
                    <td className="p-3">1,234</td>
                    <td className="p-3">
                      <Sparklines 
                        data={[80, 85, 82, 90, 95, 92, 98]} 
                        color="#22c55e" 
                        height={30} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Errors</td>
                    <td className="p-3">23</td>
                    <td className="p-3">
                      <Sparklines 
                        data={[50, 45, 40, 42, 35, 30, 28]} 
                        color="#ef4444" 
                        height={30} 
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
          code: `<table>
  <tbody>
    <tr>
      <td>Revenue</td>
      <td>$45,231</td>
      <td>
        <Sparklines 
          data={[100, 102, 105, 103, 108, 112, 115]} 
          color="#DEFB49" 
          height={30} 
        />
      </td>
    </tr>
  </tbody>
</table>`,
        },
        {
          title: "Different Heights",
          description: "Sparklines with varying heights for different emphasis levels",
          preview: (
            <div className="space-y-6 w-full">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Small (24px)</span>
                  <div className="w-32">
                    <Sparklines data={sampleData} color="#DEFB49" height={24} />
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Medium (40px)</span>
                  <div className="w-32">
                    <Sparklines data={sampleData} color="#DEFB49" height={40} />
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Large (60px)</span>
                  <div className="w-32">
                    <Sparklines data={sampleData} color="#DEFB49" height={60} />
                  </div>
                </div>
              </Card>
            </div>
          ),
          code: `// Small
<Sparklines data={data} color="#DEFB49" height={24} />

// Medium
<Sparklines data={data} color="#DEFB49" height={40} />

// Large
<Sparklines data={data} color="#DEFB49" height={60} />`,
        },
        {
          title: "Color Variations",
          description: "Different color schemes for various data contexts",
          preview: (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <Card className="p-4">
                <p className="text-xs text-muted-foreground mb-2">Primary</p>
                <Sparklines data={sampleData} color="#DEFB49" height={32} />
              </Card>
              <Card className="p-4">
                <p className="text-xs text-muted-foreground mb-2">Success</p>
                <Sparklines data={sampleData} color="#22c55e" height={32} />
              </Card>
              <Card className="p-4">
                <p className="text-xs text-muted-foreground mb-2">Warning</p>
                <Sparklines data={sampleData} color="#f59e0b" height={32} />
              </Card>
              <Card className="p-4">
                <p className="text-xs text-muted-foreground mb-2">Danger</p>
                <Sparklines data={sampleData} color="#ef4444" height={32} />
              </Card>
            </div>
          ),
          code: `// Primary
<Sparklines data={data} color="#DEFB49" />

// Success
<Sparklines data={data} color="#22c55e" />

// Warning
<Sparklines data={data} color="#f59e0b" />

// Danger
<Sparklines data={data} color="#ef4444" />`,
        },
      ]}
    />
  );
}
