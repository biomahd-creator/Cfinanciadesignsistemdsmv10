import { ComponentShowcase } from "../ui/component-showcase";
import { TimePicker } from "../advanced/TimePicker";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";

export function TimePickerPage() {
  const [time12h, setTime12h] = useState("02:30 PM");
  const [time24h, setTime24h] = useState("14:30");
  const [timeInterval, setTimeInterval] = useState("09:00 AM");

  return (
    <ComponentShowcase
      title="Time Picker"
      description="Select time with hour and minute precision, supports 12h/24h formats"
      category="Advanced Form Inputs"
      preview={
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <TimePicker 
            value={time12h}
            onChange={setTime12h}
          />
        </div>
      }
      code={`import { TimePicker } from "../advanced/TimePicker";

function Example() {
  const [time, setTime] = useState("02:30 PM");

  return (
    <TimePicker 
      value={time}
      onChange={setTime}
    />
  );
}`}
      usage="Time Picker allows users to select a specific time with hour and minute precision. Supports both 12-hour and 24-hour formats, configurable minute intervals, and quick actions like 'Now' and 'Clear'."
      usageCode={`import { TimePicker } from "../advanced/TimePicker";
import { useState } from "react";

function MyForm() {
  const [selectedTime, setSelectedTime] = useState("09:00 AM");

  return (
    <div>
      <label>Select Time:</label>
      <TimePicker 
        value={selectedTime}
        onChange={(time) => setSelectedTime(time)}
        format="12h"
      />
    </div>
  );
}`}
      props={[
        {
          name: "value",
          type: "string",
          default: '"12:00 PM"',
          description: "Current selected time value",
          required: false,
        },
        {
          name: "onChange",
          type: "(time: string) => void",
          default: "undefined",
          description: "Callback when time changes",
          required: false,
        },
        {
          name: "format",
          type: '"12h" | "24h"',
          default: '"12h"',
          description: "Time format (12-hour or 24-hour)",
          required: false,
        },
        {
          name: "minuteInterval",
          type: "1 | 5 | 15 | 30",
          default: "1",
          description: "Minute selection interval",
          required: false,
        },
        {
          name: "className",
          type: "string",
          default: "undefined",
          description: "Additional CSS classes",
          required: false,
        },
      ]}
      examples={[
        {
          title: "12-Hour Format (Default)",
          description: "Standard 12-hour format with AM/PM selector",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Selected: {time12h}</p>
                  <TimePicker 
                    value={time12h}
                    onChange={setTime12h}
                    format="12h"
                  />
                </div>
              </CardContent>
            </Card>
          ),
          code: `<TimePicker 
  value={time}
  onChange={setTime}
  format="12h"
/>`,
        },
        {
          title: "24-Hour Format",
          description: "Military time format without AM/PM",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Selected: {time24h}</p>
                  <TimePicker 
                    value={time24h}
                    onChange={setTime24h}
                    format="24h"
                  />
                </div>
              </CardContent>
            </Card>
          ),
          code: `<TimePicker 
  value={time}
  onChange={setTime}
  format="24h"
/>`,
        },
        {
          title: "15-Minute Intervals",
          description: "Restrict minutes to 15-minute intervals (00, 15, 30, 45)",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Selected: {timeInterval}</p>
                  <TimePicker 
                    value={timeInterval}
                    onChange={setTimeInterval}
                    minuteInterval={15}
                  />
                </div>
              </CardContent>
            </Card>
          ),
          code: `<TimePicker 
  value={time}
  onChange={setTime}
  minuteInterval={15}
/>`,
        },
        {
          title: "In a Form",
          description: "Time picker integrated in a form layout",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Meeting Time</label>
                    <TimePicker 
                      value="10:00 AM"
                      onChange={() => {}}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">End Time</label>
                    <TimePicker 
                      value="11:30 AM"
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ),
          code: `<div className="space-y-4">
  <div className="space-y-2">
    <label>Meeting Time</label>
    <TimePicker value="10:00 AM" onChange={setMeetingTime} />
  </div>
  <div className="space-y-2">
    <label>End Time</label>
    <TimePicker value="11:30 AM" onChange={setEndTime} />
  </div>
</div>`,
        },
      ]}
    />
  );
}
