import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Calendar } from "../ui/calendar";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { useState } from "react";

export function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Calendar</h2>
          <Badge>Forms</Badge>
        </div>
        <p className="text-muted-foreground">
          A date field component that allows users to enter and edit date
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Default Calendar</CardTitle>
          <CardDescription>Standard calendar with date selection</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Selected Date</CardTitle>
          <CardDescription>Display the selected date</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            {date ? date.toLocaleDateString() : "No date selected"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
