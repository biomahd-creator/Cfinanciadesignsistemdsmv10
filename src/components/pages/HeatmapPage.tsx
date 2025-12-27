import { ComponentShowcase } from "../ui/component-showcase";
import { Heatmap } from "../advanced/Heatmap";
import { Card } from "../ui/card";

export function HeatmapPage() {
  const weeklyActivityData = [
    { day: "Mon", hour: "9am", value: 45 },
    { day: "Mon", hour: "12pm", value: 78 },
    { day: "Mon", hour: "3pm", value: 92 },
    { day: "Mon", hour: "6pm", value: 34 },
    { day: "Tue", hour: "9am", value: 52 },
    { day: "Tue", hour: "12pm", value: 88 },
    { day: "Tue", hour: "3pm", value: 95 },
    { day: "Tue", hour: "6pm", value: 41 },
    { day: "Wed", hour: "9am", value: 61 },
    { day: "Wed", hour: "12pm", value: 85 },
    { day: "Wed", hour: "3pm", value: 89 },
    { day: "Wed", hour: "6pm", value: 38 },
    { day: "Thu", hour: "9am", value: 48 },
    { day: "Thu", hour: "12pm", value: 82 },
    { day: "Thu", hour: "3pm", value: 91 },
    { day: "Thu", hour: "6pm", value: 45 },
    { day: "Fri", hour: "9am", value: 55 },
    { day: "Fri", hour: "12pm", value: 76 },
    { day: "Fri", hour: "3pm", value: 68 },
    { day: "Fri", hour: "6pm", value: 28 },
  ];

  return (
    <ComponentShowcase
      title="Heatmap"
      description="A data visualization technique that uses color gradients to represent values in a matrix format. Perfect for identifying patterns, trends, and correlations in multi-dimensional data."
      category="Data Visualization"
      preview={
        <Card className="p-6 w-full">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg mb-2">Weekly User Activity</h3>
              <p className="text-sm text-muted-foreground">Hourly engagement throughout the week</p>
            </div>
            <Heatmap data={weeklyActivityData} />
          </div>
        </Card>
      }
      code={`import { Heatmap } from "@/components/advanced/Heatmap";

const data = [
  { day: "Mon", hour: "9am", value: 45 },
  { day: "Mon", hour: "12pm", value: 78 },
  { day: "Tue", hour: "9am", value: 52 },
  // ... more data points
];

<Heatmap data={data} />`}
      usage="Heatmaps excel at revealing patterns in large datasets where relationships between multiple variables need to be visualized. Common use cases include activity tracking, correlation analysis, and geographic data."
      usageCode={`import { Heatmap } from "@/components/advanced/Heatmap";
import { Card } from "@/components/ui/card";

export function ActivityDashboard() {
  const activityData = [
    { day: "Mon", hour: "9am", value: 45 },
    { day: "Mon", hour: "12pm", value: 78 },
    { day: "Tue", hour: "9am", value: 52 },
    // ... more data
  ];
  
  return (
    <Card className="p-6">
      <h3>User Activity Heatmap</h3>
      <Heatmap data={activityData} />
    </Card>
  );
}`}
      props={[
        {
          name: "data",
          type: "Array<{day: string, hour: string, value: number}>",
          default: "[]",
          description: "Array of data points with x-axis, y-axis, and value",
          required: true,
        },
        {
          name: "colorScheme",
          type: '"green" | "blue" | "red" | "yellow"',
          default: '"green"',
          description: "Color gradient scheme for the heatmap",
          required: false,
        },
        {
          name: "showValues",
          type: "boolean",
          default: "true",
          description: "Whether to display values inside cells",
          required: false,
        },
        {
          name: "cellSize",
          type: "number",
          default: "60",
          description: "Size of each cell in pixels",
          required: false,
        },
        {
          name: "showLegend",
          type: "boolean",
          default: "true",
          description: "Whether to show the color legend",
          required: false,
        },
      ]}
      examples={[
        {
          title: "User Activity Pattern",
          description: "Visualizing user engagement across different times and days",
          preview: (
            <Card className="p-6 w-full">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg">Website Traffic Heatmap</h3>
                  <p className="text-sm text-muted-foreground">Peak hours highlighted in green</p>
                </div>
                <Heatmap data={weeklyActivityData} colorScheme="green" />
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-200 rounded"></div>
                    <span>Low Activity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span>Medium Activity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-700 rounded"></div>
                    <span>High Activity</span>
                  </div>
                </div>
              </div>
            </Card>
          ),
          code: `<Heatmap 
  data={weeklyActivityData} 
  colorScheme="green"
  showValues={true}
  showLegend={true}
/>`,
        },
        {
          title: "Server Load Monitoring",
          description: "Tracking server load across different times and services",
          preview: (
            <Card className="p-6 w-full">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg">Server Load Distribution</h3>
                  <p className="text-sm text-muted-foreground">CPU usage by hour and service</p>
                </div>
                <Heatmap 
                  data={[
                    { day: "API", hour: "00:00", value: 25 },
                    { day: "API", hour: "06:00", value: 42 },
                    { day: "API", hour: "12:00", value: 88 },
                    { day: "API", hour: "18:00", value: 95 },
                    { day: "DB", hour: "00:00", value: 30 },
                    { day: "DB", hour: "06:00", value: 38 },
                    { day: "DB", hour: "12:00", value: 72 },
                    { day: "DB", hour: "18:00", value: 85 },
                    { day: "Cache", hour: "00:00", value: 15 },
                    { day: "Cache", hour: "06:00", value: 22 },
                    { day: "Cache", hour: "12:00", value: 58 },
                    { day: "Cache", hour: "18:00", value: 68 },
                  ]} 
                  colorScheme="red"
                />
              </div>
            </Card>
          ),
          code: `<Heatmap 
  data={serverLoadData} 
  colorScheme="red"
  cellSize={70}
/>`,
        },
        {
          title: "Sales Performance Matrix",
          description: "Product sales across different regions",
          preview: (
            <Card className="p-6 w-full">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg">Regional Sales Performance</h3>
                  <p className="text-sm text-muted-foreground">Revenue by product and region</p>
                </div>
                <Heatmap 
                  data={[
                    { day: "Product A", hour: "North", value: 125 },
                    { day: "Product A", hour: "South", value: 98 },
                    { day: "Product A", hour: "East", value: 142 },
                    { day: "Product A", hour: "West", value: 87 },
                    { day: "Product B", hour: "North", value: 156 },
                    { day: "Product B", hour: "South", value: 134 },
                    { day: "Product B", hour: "East", value: 178 },
                    { day: "Product B", hour: "West", value: 112 },
                    { day: "Product C", hour: "North", value: 89 },
                    { day: "Product C", hour: "South", value: 76 },
                    { day: "Product C", hour: "East", value: 94 },
                    { day: "Product C", hour: "West", value: 68 },
                  ]} 
                  colorScheme="blue"
                />
              </div>
            </Card>
          ),
          code: `<Heatmap 
  data={salesData} 
  colorScheme="blue"
  showValues={true}
/>`,
        },
        {
          title: "Different Color Schemes",
          description: "Heatmaps with various color gradients for different data types",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <Card className="p-4">
                <p className="text-sm mb-3">Green Scheme (Growth)</p>
                <Heatmap 
                  data={weeklyActivityData.slice(0, 12)} 
                  colorScheme="green"
                  cellSize={50}
                />
              </Card>
              
              <Card className="p-4">
                <p className="text-sm mb-3">Red Scheme (Alerts)</p>
                <Heatmap 
                  data={weeklyActivityData.slice(0, 12)} 
                  colorScheme="red"
                  cellSize={50}
                />
              </Card>
              
              <Card className="p-4">
                <p className="text-sm mb-3">Blue Scheme (Performance)</p>
                <Heatmap 
                  data={weeklyActivityData.slice(0, 12)} 
                  colorScheme="blue"
                  cellSize={50}
                />
              </Card>
              
              <Card className="p-4">
                <p className="text-sm mb-3">Yellow Scheme (Warnings)</p>
                <Heatmap 
                  data={weeklyActivityData.slice(0, 12)} 
                  colorScheme="yellow"
                  cellSize={50}
                />
              </Card>
            </div>
          ),
          code: `// Green for growth metrics
<Heatmap data={data} colorScheme="green" />

// Red for error/alert tracking
<Heatmap data={data} colorScheme="red" />

// Blue for performance data
<Heatmap data={data} colorScheme="blue" />

// Yellow for warnings
<Heatmap data={data} colorScheme="yellow" />`,
        },
        {
          title: "Compact View",
          description: "Smaller cells for displaying large datasets",
          preview: (
            <Card className="p-6 w-full">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg">Monthly Activity Overview</h3>
                  <p className="text-sm text-muted-foreground">Compact view with smaller cells</p>
                </div>
                <Heatmap 
                  data={[
                    ...weeklyActivityData,
                    { day: "Sat", hour: "9am", value: 32 },
                    { day: "Sat", hour: "12pm", value: 45 },
                    { day: "Sat", hour: "3pm", value: 38 },
                    { day: "Sat", hour: "6pm", value: 22 },
                    { day: "Sun", hour: "9am", value: 28 },
                    { day: "Sun", hour: "12pm", value: 41 },
                    { day: "Sun", hour: "3pm", value: 35 },
                    { day: "Sun", hour: "6pm", value: 18 },
                  ]} 
                  colorScheme="green"
                  cellSize={40}
                  showValues={false}
                />
              </div>
            </Card>
          ),
          code: `<Heatmap 
  data={monthlyData} 
  cellSize={40}
  showValues={false}
/>`,
        },
      ]}
    />
  );
}
