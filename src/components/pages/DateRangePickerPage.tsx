import { DateRangePicker } from "../ui/date-range-picker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { CalendarRange } from "lucide-react";
import { DateRange } from "react-day-picker@8.10.1";
import { format } from "date-fns";

export function DateRangePickerPage() {
  const [range1, setRange1] = useState<DateRange | undefined>();
  const [range2, setRange2] = useState<DateRange | undefined>({
    from: new Date(2024, 11, 1),
    to: new Date(2024, 11, 15),
  });
  const [range3, setRange3] = useState<DateRange | undefined>();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <h1 className="text-foreground">Date Range Picker</h1>
          <Badge variant="secondary">Forms</Badge>
          <Badge variant="outline" className="gap-1">
            <CalendarRange className="size-3" />
            NEW
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Date range selector with visual calendar, Spanish localization,
          and customizable format. Ideal for report filters and temporal searches.
        </p>
      </div>

      {/* Preview Principal */}
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            Date Range Picker with all features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-foreground font-medium">Select a date range</label>
            <DateRangePicker
              dateRange={range1}
              onDateRangeChange={setRange1}
            />
            {range1?.from && (
              <p className="text-muted-foreground text-sm">
                {range1.to
                  ? `Range: ${format(range1.from, "dd/MM/yyyy")} - ${format(range1.to, "dd/MM/yyyy")}`
                  : `Start: ${format(range1.from, "dd/MM/yyyy")}`}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Variantes */}
      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>
            Different configurations of the component
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Con valor por defecto */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">With default value</label>
            <p className="text-muted-foreground text-sm">
              Date Range Picker with a preselected range.
            </p>
            <DateRangePicker
              dateRange={range2}
              onDateRangeChange={setRange2}
            />
          </div>

          {/* Placeholder personalizado */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Custom placeholder</label>
            <p className="text-muted-foreground text-sm">
              With custom placeholder text.
            </p>
            <DateRangePicker
              dateRange={range3}
              onDateRangeChange={setRange3}
              placeholder="Choose the report period"
            />
          </div>

          {/* Deshabilitado */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Disabled</label>
            <p className="text-muted-foreground text-sm">
              Disabled state of the component.
            </p>
            <DateRangePicker
              dateRange={{
                from: new Date(2024, 11, 1),
                to: new Date(2024, 11, 31),
              }}
              onDateRangeChange={() => {}}
              disabled
            />
          </div>
        </CardContent>
      </Card>

      {/* Ejemplos de uso */}
      <Card>
        <CardHeader>
          <CardTitle>Use Cases</CardTitle>
          <CardDescription>
            Practical implementation examples
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Filtro de reportes */}
            <div className="space-y-3">
              <h3 className="text-foreground font-medium">Report Filter</h3>
              <p className="text-muted-foreground text-sm">
                Period selector for generating financial reports.
              </p>
              <DateRangePicker
                placeholder="Report period"
                className="w-full"
              />
            </div>

            {/* Búsqueda de transacciones */}
            <div className="space-y-3">
              <h3 className="text-foreground font-medium">Transaction Search</h3>
              <p className="text-muted-foreground text-sm">
                Filter transactions by date range.
              </p>
              <DateRangePicker
                placeholder="Transaction dates"
                className="w-full"
              />
            </div>

            {/* Programación de eventos */}
            <div className="space-y-3">
              <h3 className="text-foreground font-medium">Event Scheduling</h3>
              <p className="text-muted-foreground text-sm">
                Select start and end dates for events.
              </p>
              <DateRangePicker
                placeholder="Event duration"
                className="w-full"
              />
            </div>

            {/* Reservas */}
            <div className="space-y-3">
              <h3 className="text-foreground font-medium">Reservation System</h3>
              <p className="text-muted-foreground text-sm">
                Choose check-in and check-out dates.
              </p>
              <DateRangePicker
                placeholder="Stay dates"
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Uso */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Usage</CardTitle>
          <CardDescription>Component implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-md p-4">
            <pre className="text-sm">
              <code>{`import { DateRangePicker } from "@/components/ui/date-range-picker";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export function MyFilter() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const handleFilter = () => {
    if (dateRange?.from && dateRange?.to) {
      console.log("Filter from:", dateRange.from);
      console.log("Filter to:", dateRange.to);
    }
  };

  return (
    <div>
      <label>Report period</label>
      <DateRangePicker
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        placeholder="Select dates"
      />
      <button onClick={handleFilter}>
        Generate report
      </button>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Props */}
      <Card>
        <CardHeader>
          <CardTitle>Properties</CardTitle>
          <CardDescription>Component API</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Prop</th>
                  <th className="text-left p-2">Type</th>
                  <th className="text-left p-2">Default</th>
                  <th className="text-left p-2">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground text-sm">
                <tr className="border-b">
                  <td className="p-2 font-mono">dateRange</td>
                  <td className="p-2">DateRange | undefined</td>
                  <td className="p-2">undefined</td>
                  <td className="p-2">Selected date range</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">onDateRangeChange</td>
                  <td className="p-2">(range) =&gt; void</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Callback when range changes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">placeholder</td>
                  <td className="p-2">string</td>
                  <td className="p-2">"Select a range..."</td>
                  <td className="p-2">Text when no selection</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">disabled</td>
                  <td className="p-2">boolean</td>
                  <td className="p-2">false</td>
                  <td className="p-2">Disables the component</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-mono">className</td>
                  <td className="p-2">string</td>
                  <td className="p-2">-</td>
                  <td className="p-2">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-muted/50 mt-4 rounded-md p-4">
            <p className="text-foreground mb-2 font-medium">DateRange Type:</p>
            <pre className="text-sm">
              <code>{`interface DateRange {
  from: Date | undefined;
  to?: Date | undefined;
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Características */}
      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>Included functionalities</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Visual calendar with 2 months simultaneously</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Spanish localization (date-fns)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Customizable date format</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Visual highlighting of selected range</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Complete keyboard navigation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Responsive popover with animations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Compatible with light and dark modes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Accessible with ARIA and semantic roles</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}