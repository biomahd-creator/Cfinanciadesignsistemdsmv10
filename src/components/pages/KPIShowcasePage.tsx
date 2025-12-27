import { KPIShowcase } from "../patterns/KPIShowcase";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { BarChart3, Info } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function KPIShowcasePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-4xl font-semibold">KPI Dashboard</h2>
          <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">
            <BarChart3 className="h-3 w-3 mr-1" />
            Business Pattern
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Advanced KPI dashboard with interactive charts, sparklines, and status indicators.
        </p>
      </div>

      <Separator />

      {/* Pattern Information */}
      <Alert className="border-primary/50 bg-primary/5">
        <Info className="h-4 w-4 text-primary" />
        <AlertDescription className="text-sm">
          <strong className="text-primary">KPI Dashboard Pattern</strong> - Interactive dashboard with real-time metrics, 
          trend indicators, and comprehensive data visualizations using Charts, Cards, and Progress components.
        </AlertDescription>
      </Alert>

      {/* KPI Showcase Component */}
      <KPIShowcase />
    </div>
  );
}