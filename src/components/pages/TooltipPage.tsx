import { ComponentShowcase } from "../ui/component-showcase";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Plus } from "lucide-react";

export function TooltipPage() {
  return (
    <ComponentShowcase
      title="Tooltip"
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      category="Feedback"
      
      // Main Preview
      preview={
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      }
      
      // Main Code
      code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}
      
      // Usage
      usage="Wrap your trigger with Tooltip and TooltipTrigger. The TooltipContent will show on hover."
      usageCode={`import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"`}
      
      // Props Documentation
      props={[
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          default: '"top"',
          description: "The side where the tooltip will appear",
        },
        {
          name: "align",
          type: '"start" | "center" | "end"',
          default: '"center"',
          description: "Alignment of the tooltip",
        },
        {
          name: "delayDuration",
          type: "number",
          default: "700",
          description: "Delay in ms before the tooltip opens (on TooltipProvider)",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "Positions",
          description: "Tooltips can be positioned on different sides",
          preview: (
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Top</Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Tooltip on top</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Tooltip on bottom</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Left</Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>Tooltip on left</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Right</Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Tooltip on right</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ),
          code: `<TooltipContent side="top">Top</TooltipContent>
<TooltipContent side="bottom">Bottom</TooltipContent>
<TooltipContent side="left">Left</TooltipContent>
<TooltipContent side="right">Right</TooltipContent>`
        },
        {
          title: "Icon Trigger",
          description: "Using an icon as the trigger",
          preview: (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Add</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add new item</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ),
          code: `<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon">
      <Plus className="h-4 w-4" />
      <span className="sr-only">Add</span>
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Add new item</p>
  </TooltipContent>
</Tooltip>`
        }
      ]}
    />
  );
}