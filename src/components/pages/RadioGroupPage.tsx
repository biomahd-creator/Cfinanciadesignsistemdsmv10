import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

export function RadioGroupPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Radio Group</h2>
          <Badge>Form</Badge>
        </div>
        <p className="text-muted-foreground">
          A set of checkable buttons where only one can be checked at a time
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Standard radio group</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three">Option Three</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Descriptions</CardTitle>
          <CardDescription>Radio buttons with additional context</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup defaultValue="basic">
            <div className="flex items-start space-x-2 pb-3 border-b">
              <RadioGroupItem value="basic" id="basic" className="mt-1" />
              <div className="space-y-1">
                <Label htmlFor="basic">Basic Plan</Label>
                <p className="text-xs text-muted-foreground">$9/month - For individuals</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 pb-3 border-b">
              <RadioGroupItem value="pro" id="pro" className="mt-1" />
              <div className="space-y-1">
                <Label htmlFor="pro">Pro Plan</Label>
                <p className="text-xs text-muted-foreground">$29/month - For teams</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
              <div className="space-y-1">
                <Label htmlFor="enterprise">Enterprise Plan</Label>
                <p className="text-xs text-muted-foreground">Custom pricing - For large organizations</p>
              </div>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
          <CardDescription>Non-interactive radio group</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup defaultValue="disabled-one" disabled>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="disabled-one" id="disabled-one" />
              <Label htmlFor="disabled-one">Disabled selected</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="disabled-two" id="disabled-two" />
              <Label htmlFor="disabled-two">Disabled unselected</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
}
