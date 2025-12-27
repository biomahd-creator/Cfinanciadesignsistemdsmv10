import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

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
        <Button variant="outline" className="w-full justify-start gap-2">
          <div
            className="h-6 w-6 rounded border"
            style={{ backgroundColor: color }}
          />
          <span className="flex-1 text-left">{color}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Colores Predefinidos</Label>
            <div className="grid grid-cols-6 gap-2">
              {presetColors.map((presetColor) => (
                <button
                  key={presetColor}
                  className="h-8 w-8 rounded border-2 hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: presetColor,
                    borderColor: color === presetColor ? "#DEFB49" : "transparent",
                  }}
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
