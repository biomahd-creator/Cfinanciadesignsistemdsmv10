import { ComponentShowcase } from "../ui/component-showcase";
import { Skeleton } from "../ui/skeleton";

export function SkeletonPage() {
  return (
    <ComponentShowcase
      title="Skeleton"
      description="Use to show a placeholder while content is loading."
      category="Feedback"
      
      // Main Preview
      preview={
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      }
      
      // Main Code
      code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}`}
      
      // Usage
      usage="Use skeletons to reduce perceived loading time by showing a mockup of the content before it loads."
      usageCode={`import { Skeleton } from "@/components/ui/skeleton"`}
      
      // Props Documentation
      props={[
        {
          name: "className",
          type: "string",
          description: "CSS classes for styling (width, height, radius)",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "Card",
          description: "Skeleton for a card component",
          preview: (
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ),
          code: `<div className="flex flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`
        }
      ]}
    />
  );
}