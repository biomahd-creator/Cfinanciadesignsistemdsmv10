import { ComponentShowcase } from "../ui/component-showcase";
import { ChartShowcase } from "../advanced/ChartShowcase";

export function ChartsPage() {
  return (
    <ComponentShowcase
      title="Charts"
      description="Beautiful charts built using Recharts and Tailwind CSS."
      category="Advanced"
      
      // Main Preview
      preview={
        <div className="w-full">
          <ChartShowcase />
        </div>
      }
      
      // Main Code
      code={`import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  // ...
]

export function ChartDemo() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => \`$\${value}\`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}`}
      
      // Usage
      usage="We use Recharts for charts. Components are composable and can be styled with Tailwind CSS."
      usageCode={`import { BarChart, LineChart, PieChart } from "recharts"`}
      
      // Props Documentation
      props={[
        {
          name: "data",
          type: "any[]",
          description: "The data array to render",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "Chart Showcase",
          description: "A comprehensive showcase of different chart types",
          preview: <ChartShowcase />,
          code: `<ChartShowcase />`
        }
      ]}
    />
  );
}