import { ComponentShowcase } from "../ui/component-showcase";
import { Gauges } from "../advanced/Gauges";
import { Card } from "../ui/card";

export function GaugesPage() {
  return (
    <ComponentShowcase
      title="Gauges & Meters"
      description="Visual indicators that display progress, performance, or status as a radial or linear gauge. Ideal for dashboards and KPI monitoring."
      category="Data Visualization"
      preview={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <Card className="p-6">
            <Gauges 
              value={75} 
              max={100} 
              title="Performance Score" 
              color="#DEFB49"
            />
          </Card>
          
          <Card className="p-6">
            <Gauges 
              value={42} 
              max={100} 
              title="CPU Usage" 
              color="#22c55e"
            />
          </Card>
          
          <Card className="p-6">
            <Gauges 
              value={88} 
              max={100} 
              title="Storage Used" 
              color="#ef4444"
            />
          </Card>
        </div>
      }
      code={`import { Gauges } from "@/components/advanced/Gauges";

<Gauges 
  value={75} 
  max={100} 
  title="Performance Score" 
  color="#DEFB49"
/>`}
      usage="Gauges are perfect for displaying metrics that have a maximum value or target range. They provide immediate visual feedback about how close a value is to its limit or goal."
      usageCode={`import { Gauges } from "@/components/advanced/Gauges";
import { Card } from "@/components/ui/card";

export function MetricsDashboard() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card className="p-6">
        <Gauges 
          value={85} 
          max={100} 
          title="Server Health" 
          color="#22c55e"
        />
      </Card>
      
      <Card className="p-6">
        <Gauges 
          value={42} 
          max={100} 
          title="CPU Usage" 
          color="#DEFB49"
        />
      </Card>
      
      <Card className="p-6">
        <Gauges 
          value={95} 
          max={100} 
          title="Memory" 
          color="#ef4444"
        />
      </Card>
    </div>
  );
}`}
      props={[
        {
          name: "value",
          type: "number",
          default: "0",
          description: "Current value of the gauge",
          required: true,
        },
        {
          name: "max",
          type: "number",
          default: "100",
          description: "Maximum value of the gauge",
          required: false,
        },
        {
          name: "title",
          type: "string",
          default: '""',
          description: "Label or title for the gauge",
          required: false,
        },
        {
          name: "color",
          type: "string",
          default: '"#DEFB49"',
          description: "Color of the gauge indicator",
          required: false,
        },
        {
          name: "size",
          type: "number",
          default: "200",
          description: "Size of the gauge in pixels",
          required: false,
        },
        {
          name: "showValue",
          type: "boolean",
          default: "true",
          description: "Whether to display the numeric value",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Health Status Indicators",
          description: "Color-coded gauges showing system health metrics",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <Card className="p-6">
                <Gauges 
                  value={92} 
                  max={100} 
                  title="System Health" 
                  color="#22c55e"
                />
                <p className="text-xs text-center mt-2 text-muted-foreground">Excellent</p>
              </Card>
              
              <Card className="p-6">
                <Gauges 
                  value={65} 
                  max={100} 
                  title="API Response" 
                  color="#f59e0b"
                />
                <p className="text-xs text-center mt-2 text-muted-foreground">Warning</p>
              </Card>
              
              <Card className="p-6">
                <Gauges 
                  value={28} 
                  max={100} 
                  title="Error Rate" 
                  color="#ef4444"
                />
                <p className="text-xs text-center mt-2 text-muted-foreground">Critical</p>
              </Card>
            </div>
          ),
          code: `// Healthy (Green)
<Gauges value={92} max={100} title="System Health" color="#22c55e" />

// Warning (Orange)
<Gauges value={65} max={100} title="API Response" color="#f59e0b" />

// Critical (Red)
<Gauges value={28} max={100} title="Error Rate" color="#ef4444" />`,
        },
        {
          title: "Resource Monitoring",
          description: "Monitoring server resources with real-time gauges",
          preview: (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <Card className="p-4">
                <Gauges 
                  value={42} 
                  max={100} 
                  title="CPU" 
                  color="#DEFB49"
                  size={120}
                />
              </Card>
              
              <Card className="p-4">
                <Gauges 
                  value={78} 
                  max={100} 
                  title="Memory" 
                  color="#f59e0b"
                  size={120}
                />
              </Card>
              
              <Card className="p-4">
                <Gauges 
                  value={55} 
                  max={100} 
                  title="Disk" 
                  color="#22c55e"
                  size={120}
                />
              </Card>
              
              <Card className="p-4">
                <Gauges 
                  value={15} 
                  max={100} 
                  title="Network" 
                  color="#3b82f6"
                  size={120}
                />
              </Card>
            </div>
          ),
          code: `<div className="grid grid-cols-4 gap-4">
  <Gauges value={42} max={100} title="CPU" color="#DEFB49" size={120} />
  <Gauges value={78} max={100} title="Memory" color="#f59e0b" size={120} />
  <Gauges value={55} max={100} title="Disk" color="#22c55e" size={120} />
  <Gauges value={15} max={100} title="Network" color="#3b82f6" size={120} />
</div>`,
        },
        {
          title: "Goal Progress Tracking",
          description: "Track progress towards goals or targets",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <Card className="p-6">
                <Gauges 
                  value={8500} 
                  max={10000} 
                  title="Monthly Sales Target" 
                  color="#DEFB49"
                />
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  $8,500 / $10,000 (85%)
                </p>
              </Card>
              
              <Card className="p-6">
                <Gauges 
                  value={342} 
                  max={500} 
                  title="New Customers" 
                  color="#22c55e"
                />
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  342 / 500 (68%)
                </p>
              </Card>
            </div>
          ),
          code: `<Gauges 
  value={8500} 
  max={10000} 
  title="Monthly Sales Target" 
  color="#DEFB49"
/>

<Gauges 
  value={342} 
  max={500} 
  title="New Customers" 
  color="#22c55e"
/>`,
        },
        {
          title: "Different Sizes",
          description: "Gauges in various sizes for different contexts",
          preview: (
            <div className="flex flex-wrap items-center justify-around gap-6 w-full">
              <Card className="p-4">
                <Gauges 
                  value={75} 
                  max={100} 
                  title="Small" 
                  color="#DEFB49"
                  size={100}
                />
              </Card>
              
              <Card className="p-6">
                <Gauges 
                  value={75} 
                  max={100} 
                  title="Medium" 
                  color="#DEFB49"
                  size={160}
                />
              </Card>
              
              <Card className="p-8">
                <Gauges 
                  value={75} 
                  max={100} 
                  title="Large" 
                  color="#DEFB49"
                  size={240}
                />
              </Card>
            </div>
          ),
          code: `// Small (100px)
<Gauges value={75} max={100} title="Small" size={100} />

// Medium (160px)
<Gauges value={75} max={100} title="Medium" size={160} />

// Large (240px)
<Gauges value={75} max={100} title="Large" size={240} />`,
        },
        {
          title: "Performance Dashboard",
          description: "Complete dashboard with multiple performance indicators",
          preview: (
            <div className="space-y-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <Gauges 
                    value={94} 
                    max={100} 
                    title="Overall Performance" 
                    color="#22c55e"
                  />
                </Card>
                
                <Card className="p-6">
                  <Gauges 
                    value={87} 
                    max={100} 
                    title="User Satisfaction" 
                    color="#DEFB49"
                  />
                </Card>
                
                <Card className="p-6">
                  <Gauges 
                    value={72} 
                    max={100} 
                    title="Code Quality" 
                    color="#3b82f6"
                  />
                </Card>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4">
                  <Gauges 
                    value={99.9} 
                    max={100} 
                    title="Uptime" 
                    color="#22c55e"
                    size={120}
                  />
                </Card>
                
                <Card className="p-4">
                  <Gauges 
                    value={156} 
                    max={200} 
                    title="Response Time" 
                    color="#DEFB49"
                    size={120}
                  />
                </Card>
                
                <Card className="p-4">
                  <Gauges 
                    value={0.02} 
                    max={1} 
                    title="Error Rate" 
                    color="#22c55e"
                    size={120}
                  />
                </Card>
                
                <Card className="p-4">
                  <Gauges 
                    value={8.5} 
                    max={10} 
                    title="User Rating" 
                    color="#DEFB49"
                    size={120}
                  />
                </Card>
              </div>
            </div>
          ),
          code: `// Main metrics
<Gauges value={94} max={100} title="Overall Performance" color="#22c55e" />
<Gauges value={87} max={100} title="User Satisfaction" color="#DEFB49" />

// Supporting metrics (smaller)
<Gauges value={99.9} max={100} title="Uptime" size={120} />
<Gauges value={8.5} max={10} title="User Rating" size={120} />`,
        },
      ]}
    />
  );
}
