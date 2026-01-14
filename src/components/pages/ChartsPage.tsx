import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { ChartShowcase } from "../advanced/ChartShowcase";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function ChartsPage() {
  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Charts</h2>
          <Badge>Advanced</Badge>
        </div>
        <p className="text-muted-foreground">
          Beautiful charts built using Recharts and Tailwind CSS.
        </p>
      </div>

      <Separator />

      <ChartShowcase />

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-lg">Available Chart Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">✓ Line Chart</h4>
              <p className="text-sm text-muted-foreground">
                Perfect for temporal trends and metric evolution
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">✓ Bar Chart</h4>
              <p className="text-sm text-muted-foreground">
                Ideal for comparisons between categories
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">✓ Pie Chart</h4>
              <p className="text-sm text-muted-foreground">
                Shows distributions and percentages
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">✓ Area Chart</h4>
              <p className="text-sm text-muted-foreground">
                Visualizes volume and accumulated trends
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
