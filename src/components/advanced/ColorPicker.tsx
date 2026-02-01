import { useState } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ColorBox } from "../business/ColorBox";
import { ColorPresetButton } from "../business/ColorPresetButton";

const presetColors = [
  "#DEFB49", // Primary
  "#1C2D3A", // Secondary
  "#ef4444",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#000000",
  "#ffffff",
  "#6b7280",
  "#f3f4f6",
];

interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
}

export function ColorPicker({ value = "#DEFB49", onChange }: ColorPickerProps) {
  const [color, setColor] = useState(value);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    onChange?.(newColor);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-fit justify-start gap-2">
          <ColorBox color={color} />
          <span className="text-left">{color}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Colores Predefinidos</Label>
            <div className="grid grid-cols-6 gap-2">
              {presetColors.map((presetColor) => (
                <ColorPresetButton
                  key={presetColor}
                  color={presetColor}
                  isSelected={color === presetColor}
                  onClick={() => handleColorChange(presetColor)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="color-input">Color Personalizado</Label>
            <div className="flex gap-2">
              <Input
                id="color-input"
                type="color"
                value={color}
                onChange={(e) => handleColorChange(e.target.value)}
                className="h-10 w-16 cursor-pointer"
              />
              <Input
                type="text"
                value={color}
                onChange={(e) => handleColorChange(e.target.value)}
                placeholder="#000000"
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Vista Previa</Label>
            <div
              className="h-20 rounded-lg border"
              style={{ backgroundColor: color }}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}