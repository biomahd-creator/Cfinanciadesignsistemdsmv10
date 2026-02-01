import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { ColorPicker } from "../components/advanced/ColorPicker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export function ColorPickerPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Color Picker</h2>
          <Badge>Advanced</Badge>
        </div>
        <p className="text-muted-foreground">
          Advanced color selection component with presets and hex input.
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Color Picker</CardTitle>
          <CardDescription>
            Color selector with system presets and custom input
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ColorPicker />
          
          <Separator />
          
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Predefined system colors</li>
              <li>✓ Native HTML5 color picker</li>
              <li>✓ Manual HEX code input</li>
              <li>✓ Real-time preview</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
