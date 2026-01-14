import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Slider } from "../ui/slider";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

export function SliderPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Slider</h2>
          <Badge>Form</Badge>
        </div>
        <p className="text-muted-foreground">
          An input where the user selects a value from within a given range
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Standard slider control</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider defaultValue={[50]} max={100} step={1} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Label</CardTitle>
          <CardDescription>Slider with descriptive label</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label>Volume: 70%</Label>
            <Slider defaultValue={[70]} max={100} step={1} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Different Steps</CardTitle>
          <CardDescription>Sliders with various step increments</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Step 1 (0-100)</Label>
            <Slider defaultValue={[25]} max={100} step={1} />
          </div>
          <div className="space-y-3">
            <Label>Step 10 (0-100)</Label>
            <Slider defaultValue={[50]} max={100} step={10} />
          </div>
          <div className="space-y-3">
            <Label>Step 25 (0-100)</Label>
            <Slider defaultValue={[75]} max={100} step={25} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
          <CardDescription>Non-interactive slider state</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider defaultValue={[60]} max={100} step={1} disabled />
        </CardContent>
      </Card>
    </div>
  );
}
