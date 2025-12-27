import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Circle, Square, Pause, Camera, Mic } from "lucide-react";
import { Badge } from "../ui/badge";

export function ScreenRecording() {
  return (
    <Card className="p-6 text-center space-y-4">
      <div className="flex justify-center">
        <div className="relative w-48 h-32 bg-muted rounded-lg flex items-center justify-center">
          <Badge variant="destructive" className="absolute top-2 right-2">
            <Circle className="h-3 w-3 fill-current mr-1" />
            REC 00:45
          </Badge>
          <Camera className="h-12 w-12 text-muted-foreground" />
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <Button variant="outline" size="icon">
          <Pause className="h-4 w-4" />
        </Button>
        <Button variant="destructive" size="icon">
          <Square className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Mic className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
