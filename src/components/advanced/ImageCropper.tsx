import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ZoomIn, ZoomOut, RotateCw, Crop } from "lucide-react";

interface ImageCropperProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageSrc: string;
  onCropComplete: (croppedImage: string) => void;
}

type AspectRatio = "free" | "1:1" | "4:3" | "16:9" | "9:16";

const aspectRatios: Record<AspectRatio, number | null> = {
  free: null,
  "1:1": 1,
  "4:3": 4 / 3,
  "16:9": 16 / 9,
  "9:16": 9 / 16,
};

export function ImageCropper({ open, onOpenChange, imageSrc, onCropComplete }: ImageCropperProps) {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("free");

  const handleCrop = useCallback(() => {
    // In a real implementation, this would use a library like react-easy-crop
    // For demo purposes, we'll just return the original image
    // In production, you'd calculate the crop area and create a cropped canvas
    
    // Simulate crop by returning the image
    // Real implementation would use canvas to crop
    onCropComplete(imageSrc);
    onOpenChange(false);
  }, [imageSrc, onCropComplete, onOpenChange]);

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleReset = () => {
    setZoom(1);
    setRotation(0);
    setAspectRatio("free");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Crop Image</DialogTitle>
          <DialogDescription>
            Adjust the crop area, zoom, and rotation to get the perfect image
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Crop Area */}
          <div className="relative bg-muted rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <img
              src={imageSrc}
              alt="Crop preview"
              className="max-w-full max-h-full object-contain transition-transform duration-200"
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg)`,
              }}
            />
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Aspect Ratio */}
            <div className="space-y-2">
              <Label>Aspect Ratio</Label>
              <Select
                value={aspectRatio}
                onValueChange={(value) => setAspectRatio(value as AspectRatio)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="1:1">1:1 (Square)</SelectItem>
                  <SelectItem value="4:3">4:3</SelectItem>
                  <SelectItem value="16:9">16:9 (Wide)</SelectItem>
                  <SelectItem value="9:16">9:16 (Portrait)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Zoom */}
            <div className="space-y-2">
              <Label className="flex items-center justify-between">
                <span>Zoom</span>
                <span className="text-xs text-muted-foreground">{Math.round(zoom * 100)}%</span>
              </Label>
              <div className="flex items-center gap-2">
                <ZoomOut className="h-4 w-4 text-muted-foreground" />
                <Slider
                  value={[zoom]}
                  onValueChange={(values) => setZoom(values[0])}
                  min={0.5}
                  max={3}
                  step={0.1}
                  className="flex-1"
                />
                <ZoomIn className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Rotation */}
            <div className="space-y-2">
              <Label className="flex items-center justify-between">
                <span>Rotation</span>
                <span className="text-xs text-muted-foreground">{rotation}°</span>
              </Label>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleRotate}
              >
                <RotateCw className="mr-2 h-4 w-4" />
                Rotate 90°
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleCrop}>
            <Crop className="mr-2 h-4 w-4" />
            Apply Crop
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}