import { ComponentShowcase } from "../ui/component-showcase";
import { FunnelChart } from "../advanced/FunnelChart";
import { Card } from "../ui/card";

export function FunnelChartPage() {
  const salesFunnelData = [
    { stage: "Visitors", value: 10000, color: "#3b82f6" },
    { stage: "Sign Ups", value: 5000, color: "#8b5cf6" },
    { stage: "Free Trial", value: 2500, color: "#ec4899" },
    { stage: "Paid Users", value: 1200, color: "#f59e0b" },
    { stage: "Premium", value: 450, color: "#DEFB49" },
  ];

  const conversionFunnelData = [
    { stage: "Landing Page", value: 50000, color: "#22c55e" },
    { stage: "Product Page", value: 25000, color: "#10b981" },
    { stage: "Add to Cart", value: 12000, color: "#059669" },
    { stage: "Checkout", value: 8000, color: "#047857" },
    { stage: "Purchase", value: 5500, color: "#065f46" },
  ];

  return (
    <ComponentShowcase
      title="Funnel Chart"
      description="A specialized chart for visualizing sequential stages in a process, commonly used for sales pipelines, conversion rates, and user journey analysis. Shows drop-off at each stage."
      category="Data Visualization"
      preview={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg">Sales Funnel</h3>
                <p className="text-sm text-muted-foreground">Customer acquisition stages</p>
              </div>
              <FunnelChart data={salesFunnelData} />
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg">E-commerce Conversion</h3>
                <p className="text-sm text-muted-foreground">Purchase journey funnel</p>
              </div>
              <FunnelChart data={conversionFunnelData} />
            </div>
          </Card>
        </div>
      }
      code={`import { FunnelChart } from "@/components/advanced/FunnelChart";

const data = [
  { stage: "Visitors", value: 10000, color: "#3b82f6" },
  { stage: "Sign Ups", value: 5000, color: "#8b5cf6" },
  { stage: "Free Trial", value: 2500, color: "#ec4899" },
  { stage: "Paid Users", value: 1200, color: "#f59e0b" },
  { stage: "Premium", value: 450, color: "#DEFB49" },
];

<FunnelChart data={data} />`}
      usage="Funnel charts are essential for analyzing conversion rates and identifying bottlenecks in multi-step processes. They make it easy to spot where users drop off and which stages need optimization."
      usageCode={`import { FunnelChart } from "@/components/advanced/FunnelChart";
import { Card } from "@/components/ui/card";

export function SalesDashboard() {
  const funnelData = [
    { stage: "Leads", value: 1000, color: "#3b82f6" },
    { stage: "Qualified", value: 650, color: "#8b5cf6" },
    { stage: "Proposal", value: 320, color: "#ec4899" },
    { stage: "Negotiation", value: 180, color: "#f59e0b" },
    { stage: "Closed Won", value: 95, color: "#22c55e" },
  ];
  
  return (
    <Card className="p-6">
      <h3>Sales Pipeline</h3>
      <FunnelChart data={funnelData} />
    </Card>
  );
}`}
      props={[
        {
          name: "data",
          type: "Array<{stage: string, value: number, color: string}>",
          default: "[]",
          description: "Array of funnel stages with values and colors",
          required: true,
        },
        {
          name: "showPercentages",
          type: "boolean",
          default: "true",
          description: "Display conversion percentages between stages",
          required: false,
        },
        {
          name: "showLabels",
          type: "boolean",
          default: "true",
          description: "Show stage names and values",
          required: false,
        },
        {
          name: "height",
          type: "number",
          default: "400",
          description: "Chart height in pixels",
          required: false,
        },
        {
          name: "colorScheme",
          type: '"gradient" | "solid" | "custom"',
          default: '"custom"',
          description: "Color scheme for funnel stages",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Marketing Campaign Funnel",
          description: "Tracking user journey from awareness to conversion",
          preview: (
            <Card className="p-6 w-full">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg">Campaign Performance</h3>
                  <p className="text-sm text-muted-foreground">Q4 2024 Marketing Funnel</p>
                </div>
                <FunnelChart 
                  data={[
                    { stage: "Ad Impressions", value: 500000, color: "#dbeafe" },
                    { stage: "Ad Clicks", value: 25000, color: "#93c5fd" },
                    { stage: "Landing Page", value: 20000, color: "#60a5fa" },
                    { stage: "Sign Up Form", value: 8000, color: "#3b82f6" },
                    { stage: "Email Verified", value: 6500, color: "#2563eb" },
                    { stage: "First Purchase", value: 2400, color: "#1e40af" },
                  ]}
                />
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Click Rate</p>
                    <p className="text-xl">5.0%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Conversion Rate</p>
                    <p className="text-xl">12.0%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Final CVR</p>
                    <p className="text-xl">0.48%</p>
                  </div>
                </div>
              </div>
            </Card>
          ),
          code: `<FunnelChart 
  data={[
    { stage: "Ad Impressions", value: 500000, color: "#dbeafe" },
    { stage: "Ad Clicks", value: 25000, color: "#93c5fd" },
    { stage: "Landing Page", value: 20000, color: "#60a5fa" },
    { stage: "Sign Up Form", value: 8000, color: "#3b82f6" },
    { stage: "Email Verified", value: 6500, color: "#2563eb" },
    { stage: "First Purchase", value: 2400, color: "#1e40af" },
  ]}
  showPercentages={true}
/>`,
        },
        {
          title: "SaaS User Onboarding",
          description: "Tracking new user activation and retention",
          preview: (
            <Card className="p-6 w-full">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg">User Onboarding Flow</h3>
                  <p className="text-sm text-muted-foreground">30-day activation funnel</p>
                </div>
                <FunnelChart 
                  data={[
                    { stage: "Account Created", value: 15000, color: "#DEFB49" },
                    { stage: "Profile Completed", value: 12000, color: "#c5e042" },
                    { stage: "Tutorial Finished", value: 9500, color: "#abc53b" },
                    { stage: "First Action", value: 7200, color: "#91aa34" },
                    { stage: "Active User (7d)", value: 5800, color: "#778f2d" },
                    { stage: "Active User (30d)", value: 4200, color: "#5d7426" },
                  ]}
                />
                <div className="bg-muted/20 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Insight:</strong> Biggest drop-off is between "Tutorial Finished" 
                    and "First Action" (24% drop). Consider improving in-app guidance.
                  </p>
                </div>
              </div>
            </Card>
          ),
          code: `<FunnelChart 
  data={onboardingData}
  showPercentages={true}
  height={500}
/>`,
        },
        {
          title: "Recruitment Pipeline",
          description: "Candidate journey from application to hire",
          preview: (
            <Card className="p-6 w-full">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg">Hiring Funnel</h3>
                  <p className="text-sm text-muted-foreground">Senior Developer Position</p>
                </div>
                <FunnelChart 
                  data={[
                    { stage: "Applications", value: 450, color: "#f3e8ff" },
                    { stage: "Resume Screen", value: 120, color: "#e9d5ff" },
                    { stage: "Phone Screen", value: 45, color: "#d8b4fe" },
                    { stage: "Technical Interview", value: 22, color: "#c084fc" },
                    { stage: "Final Interview", value: 12, color: "#a855f7" },
                    { stage: "Offer Extended", value: 5, color: "#9333ea" },
                    { stage: "Offer Accepted", value: 3, color: "#7e22ce" },
                  ]}
                />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Time to Hire</p>
                    <p className="text-xl">42 days</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Offer Acceptance Rate</p>
                    <p className="text-xl">60%</p>
                  </div>
                </div>
              </div>
            </Card>
          ),
          code: `<FunnelChart 
  data={recruitmentData}
  showPercentages={true}
/>`,
        },
        {
          title: "Subscription Upgrade Path",
          description: "Free to premium conversion funnel",
          preview: (
            <Card className="p-6 w-full">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg">Upgrade Funnel</h3>
                  <p className="text-sm text-muted-foreground">Free to paid conversion</p>
                </div>
                <FunnelChart 
                  data={[
                    { stage: "Free Users", value: 50000, color: "#e0f2fe" },
                    { stage: "Viewed Pricing", value: 15000, color: "#bae6fd" },
                    { stage: "Started Trial", value: 8000, color: "#7dd3fc" },
                    { stage: "Used Premium Features", value: 6200, color: "#38bdf8" },
                    { stage: "Entered Payment Info", value: 3800, color: "#0ea5e9" },
                    { stage: "Completed Purchase", value: 3200, color: "#0284c7" },
                  ]}
                />
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground">Trial to Paid CVR</p>
                    <p className="text-2xl">40%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Overall CVR</p>
                    <p className="text-2xl">6.4%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">MRR</p>
                    <p className="text-2xl">$96K</p>
                  </div>
                </div>
              </div>
            </Card>
          ),
          code: `<FunnelChart 
  data={upgradeData}
  showPercentages={true}
  colorScheme="gradient"
/>`,
        },
        {
          title: "Compact Funnel View",
          description: "Smaller funnel for dashboard widgets",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <Card className="p-4">
                <p className="text-sm mb-3">Quick View</p>
                <FunnelChart 
                  data={[
                    { stage: "Visits", value: 1000, color: "#DEFB49" },
                    { stage: "Trials", value: 400, color: "#c5e042" },
                    { stage: "Sales", value: 120, color: "#91aa34" },
                  ]}
                  height={200}
                />
              </Card>
              
              <Card className="p-4">
                <p className="text-sm mb-3">Support Funnel</p>
                <FunnelChart 
                  data={[
                    { stage: "Tickets", value: 500, color: "#3b82f6" },
                    { stage: "Assigned", value: 480, color: "#2563eb" },
                    { stage: "Resolved", value: 450, color: "#1e40af" },
                  ]}
                  height={200}
                />
              </Card>
              
              <Card className="p-4">
                <p className="text-sm mb-3">Content Funnel</p>
                <FunnelChart 
                  data={[
                    { stage: "Views", value: 10000, color: "#22c55e" },
                    { stage: "Engaged", value: 3000, color: "#16a34a" },
                    { stage: "Shared", value: 500, color: "#15803d" },
                  ]}
                  height={200}
                />
              </Card>
            </div>
          ),
          code: `<FunnelChart 
  data={compactData}
  height={200}
  showLabels={true}
/>`,
        },
      ]}
    />
  );
}
