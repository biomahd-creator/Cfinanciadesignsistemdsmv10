import { useState } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Clock } from "lucide-react";
import { cn } from "../../lib/utils";

interface TimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
  format?: "12h" | "24h";
  minuteInterval?: 1 | 5 | 15 | 30;
  className?: string;
}

export function TimePicker({ 
  value = "12:00 PM", 
  onChange,
  format = "12h",
  minuteInterval = 1,
  className 
}: TimePickerProps) {
  const [open, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(value);

  // Generate hour options
  const hours = format === "12h" 
    ? Array.from({ length: 12 }, (_, i) => (i + 1).toString())
    : Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));

  // Generate minute options based on interval
  const minutes = Array.from({ length: 60 / minuteInterval }, (_, i) => 
    (i * minuteInterval).toString().padStart(2, "0")
  );

  const periods = ["AM", "PM"];

  // Parse current time
  const parseTime = (time: string) => {
    if (format === "12h") {
      const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (match) {
        return {
          hour: match[1],
          minute: match[2],
          period: match[3].toUpperCase()
        };
      }
    } else {
      const [hour, minute] = time.split(":");
      return { hour, minute, period: "" };
    }
    return { hour: "12", minute: "00", period: "PM" };
  };

  const { hour, minute, period } = parseTime(selectedTime);
  const [currentHour, setCurrentHour] = useState(hour);
  const [currentMinute, setCurrentMinute] = useState(minute);
  const [currentPeriod, setCurrentPeriod] = useState(period);

  const handleApply = () => {
    const newTime = format === "12h"
      ? `${currentHour}:${currentMinute} ${currentPeriod}`
      : `${currentHour}:${currentMinute}`;
    
    setSelectedTime(newTime);
    onChange?.(newTime);
    setOpen(false);
  };

  const handleNow = () => {
    const now = new Date();
    let hour = now.getHours();
    const minute = now.getMinutes();
    
    if (format === "12h") {
      const period = hour >= 12 ? "PM" : "AM";
      hour = hour % 12 || 12;
      setCurrentHour(hour.toString());
      setCurrentPeriod(period);
    } else {
      setCurrentHour(hour.toString().padStart(2, "0"));
    }
    
    // Round to nearest interval
    const roundedMinute = Math.floor(minute / minuteInterval) * minuteInterval;
    setCurrentMinute(roundedMinute.toString().padStart(2, "0"));
  };

  const handleClear = () => {
    setCurrentHour(format === "12h" ? "12" : "00");
    setCurrentMinute("00");
    setCurrentPeriod("PM");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !selectedTime && "text-muted-foreground",
            className
          )}
        >
          <Clock className="mr-2 h-4 w-4" />
          {selectedTime || "Pick a time"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4" align="start">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Select value={currentHour} onValueChange={setCurrentHour}>
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {hours.map((h) => (
                  <SelectItem key={h} value={h}>
                    {h}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <span className="text-2xl font-semibold">:</span>

            <Select value={currentMinute} onValueChange={setCurrentMinute}>
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {minutes.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {format === "12h" && (
              <Select value={currentPeriod} onValueChange={setCurrentPeriod}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {periods.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={handleNow}
            >
              Now
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={handleClear}
            >
              Clear
            </Button>
          </div>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              size="sm" 
              className="flex-1"
              onClick={handleApply}
            >
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
