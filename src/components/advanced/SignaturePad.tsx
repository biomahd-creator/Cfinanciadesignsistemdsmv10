import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Eraser, Download, RotateCcw, Undo2 } from "lucide-react";
import { cn } from "../../lib/utils";

interface SignaturePadProps {
  width?: number;
  height?: number;
  penColor?: string;
  backgroundColor?: string;
  onSave?: (dataUrl: string) => void;
  className?: string;
}

export function SignaturePad({
  width = 500,
  height = 200,
  penColor = "#000000",
  backgroundColor = "#ffffff",
  onSave,
  className,
}: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penWidth, setPenWidth] = useState(2);
  const [currentColor, setCurrentColor] = useState(penColor);
  const [history, setHistory] = useState<ImageData[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Fill background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
  }, [width, height, backgroundColor]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsDrawing(true);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Save current state for undo
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory((prev) => [...prev, imageData]);

    const rect = canvas.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.strokeStyle = currentColor;
    ctx.lineWidth = penWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    setHistory([]);
  };

  const undo = () => {
    if (history.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const lastState = history[history.length - 1];
    ctx.putImageData(lastState, 0, 0);
    setHistory((prev) => prev.slice(0, -1));
  };

  const downloadSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL("image/png");
    
    // Call onSave callback if provided
    onSave?.(dataUrl);

    // Download file
    const link = document.createElement("a");
    link.download = `signature-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <Card className={cn("w-fit", className)}>
      <CardContent className="p-6 space-y-4">
        {/* Canvas */}
        <div className="border-2 border-dashed rounded-lg overflow-hidden bg-white">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="cursor-crosshair"
            style={{ touchAction: "none" }}
          />
        </div>

        {/* Controls */}
        <div className="space-y-4">
          {/* Pen Width */}
          <div className="space-y-2">
            <Label className="flex items-center justify-between">
              <span>Pen Width</span>
              <span className="text-xs text-muted-foreground">{penWidth}px</span>
            </Label>
            <Slider
              value={[penWidth]}
              onValueChange={(values) => setPenWidth(values[0])}
              min={1}
              max={10}
              step={1}
            />
          </div>

          {/* Color Picker */}
          <div className="space-y-2">
            <Label>Pen Color</Label>
            <div className="flex gap-2">
              {["#000000", "#0066ff", "#ff0000", "#00cc00"].map((color) => (
                <button
                  key={color}
                  onClick={() => setCurrentColor(color)}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 transition-all",
                    currentColor === color ? "border-primary scale-110" : "border-border"
                  )}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={undo}
              disabled={history.length === 0}
            >
              <Undo2 className="mr-2 h-4 w-4" />
              Undo
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={clearCanvas}
            >
              <Eraser className="mr-2 h-4 w-4" />
              Clear
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={downloadSignature}
            >
              <Download className="mr-2 h-4 w-4" />
              Save
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
