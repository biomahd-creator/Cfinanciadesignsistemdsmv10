import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { AlertTriangle, Calendar, Clock, AlertCircle } from "lucide-react";

export function ProgressPage() {
  // Helper to calculate progress based on dates
  // In a real app, 'current' would be new Date()
  const calculateProgress = (start: string, end: string, current: string) => {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    const currentDate = new Date(current).getTime();
    
    if (currentDate <= startDate) return 0;
    if (currentDate >= endDate) return 100;
    
    return Math.round(((currentDate - startDate) / (endDate - startDate)) * 100);
  };

  // Mock Data
  const startDate = "2025-01-01";
  const endDate = "2025-12-31";
  
  // Scenario 1: Normal progress (Early)
  const currentNormal = "2025-04-15";
  const progressNormal = calculateProgress(startDate, endDate, currentNormal);

  // Scenario 2: Warning progress (Approaching deadline)
  const currentWarning = "2025-10-15";
  const progressWarning = calculateProgress(startDate, endDate, currentWarning);

  // Scenario 3: Critical progress (Deadline imminent)
  const currentCritical = "2025-12-25";
  const progressCritical = calculateProgress(startDate, endDate, currentCritical);

  // Helper for dynamic colors
  const getProgressColor = (value: number) => {
    if (value >= 90) return "[&_[data-slot=progress-indicator]]:!bg-red-600";
    if (value >= 75) return "[&_[data-slot=progress-indicator]]:!bg-orange-500";
    return "";
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Progress</h2>
          <Badge>Feedback</Badge>
        </div>
        <p className="text-muted-foreground">
          Displays an indicator showing the completion progress of a task
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Default Progress</CardTitle>
          <CardDescription>Standard progress bar</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={60} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Different Values</CardTitle>
          <CardDescription>Progress bars at various completion levels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>25%</span>
              <span className="text-muted-foreground">Loading...</span>
            </div>
            <Progress value={25} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>50%</span>
              <span className="text-muted-foreground">In Progress</span>
            </div>
            <Progress value={50} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>75%</span>
              <span className="text-muted-foreground">Almost Done</span>
            </div>
            <Progress value={75} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>100%</span>
              <span className="text-muted-foreground">Complete</span>
            </div>
            <Progress value={100} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Deadline Awareness</CardTitle>
          <CardDescription>
            Progress bars that change color and state as the deadline approaches
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Normal State */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="text-sm font-medium">Q1 Project Phase</div>
                <div className="flex items-center text-xs text-muted-foreground gap-2">
                  <Calendar className="h-3 w-3" />
                  <span>{startDate} - {endDate}</span>
                </div>
              </div>
              <span className="text-sm font-medium">{progressNormal}%</span>
            </div>
            <Progress value={progressNormal} />
          </div>

          {/* Warning State */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="text-sm font-medium">Q4 Marketing Campaign</div>
                <div className="flex items-center text-xs text-orange-600 dark:text-orange-400 gap-2 font-medium">
                  <Clock className="h-3 w-3" />
                  <span>Due soon ({currentWarning})</span>
                </div>
              </div>
              <span className="text-sm font-bold text-orange-600">{progressWarning}%</span>
            </div>
            <Progress value={progressWarning} className={getProgressColor(progressWarning)} />
          </div>

          {/* Critical State */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Year End Closing</span>
                  <Badge variant="destructive" className="h-5 px-1.5 text-xs gap-1 font-medium">
                    <AlertTriangle className="h-3 w-3" />
                    CRITICAL
                  </Badge>
                </div>
                <div className="flex items-center text-xs text-destructive gap-2 font-medium">
                  <AlertCircle className="h-3 w-3" />
                  <span>Deadline imminent ({currentCritical})</span>
                </div>
              </div>
              <span className="text-sm font-bold text-destructive">{progressCritical}%</span>
            </div>
            <Progress value={progressCritical} className={getProgressColor(progressCritical)} />
            <p className="text-xs text-destructive font-medium pt-1">
              Warning: Less than 10% of time remaining!
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}