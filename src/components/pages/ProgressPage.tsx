import { ComponentShowcase } from "../ui/component-showcase";
import { Progress } from "../ui/progress";
import { useEffect, useState } from "react";

export function ProgressPage() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ComponentShowcase
      title="Progress"
      description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      category="Feedback"
      
      // Main Preview
      preview={
        <Progress value={progress} className="w-[60%]" />
      }
      
      // Main Code
      code={`import * as React from "react"
import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}`}
      
      // Usage
      usage="Use the Progress component to show the completion status of a task or process."
      usageCode={`import { Progress } from "@/components/ui/progress"`}
      
      // Props Documentation
      props={[
        {
          name: "value",
          type: "number",
          default: "0",
          description: "The progress value (0-100)",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "Determinate",
          description: "Progress bar with a specific value",
          preview: (
            <div className="w-[60%] space-y-4">
              <Progress value={25} />
              <Progress value={50} />
              <Progress value={75} />
              <Progress value={100} />
            </div>
          ),
          code: `<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`
        },
        {
          title: "Indeterminate (Loading)",
          description: "Simulating loading state",
          preview: (
            <Progress value={33} className="w-[60%] animate-pulse" />
          ),
          code: `<Progress value={33} className="w-[60%] animate-pulse" />`
        }
      ]}
    />
  );
}