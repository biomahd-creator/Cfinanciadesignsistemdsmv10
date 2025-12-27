import { ComponentShowcase } from "../ui/component-showcase";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

export function ScrollAreaPage() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <ComponentShowcase
      title="Scroll Area"
      description="Augments native scroll functionality for custom, cross-browser styling."
      category="Layout"
      
      // Main Preview
      preview={
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <>
                <div key={tag} className="text-sm">
                  {tag}
                </div>
                <Separator className="my-2" />
              </>
            ))}
          </div>
        </ScrollArea>
      }
      
      // Main Code
      code={`import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => \`v1.2.0-beta.\${a.length - i}\`
)

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}`}
      
      // Usage
      usage="Use the ScrollArea component to create scrollable areas with custom styled scrollbars."
      usageCode={`import { ScrollArea } from "@/components/ui/scroll-area"`}
      
      // Props Documentation
      props={[
        {
          name: "orientation",
          type: '"vertical" | "horizontal"',
          default: '"vertical"',
          description: "The orientation of the scroll area",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "Horizontal Scrolling",
          description: "Scroll area with horizontal orientation",
          preview: (
            <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="shrink-0">
                    <div className="h-20 w-40 rounded-md border bg-muted flex items-center justify-center">
                      Item {i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ),
          code: `<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i} className="shrink-0">
        <div className="h-20 w-40 rounded-md border bg-muted flex items-center justify-center">
          Item {i + 1}
        </div>
      </div>
    ))}
  </div>
</ScrollArea>`
        }
      ]}
    />
  );
}