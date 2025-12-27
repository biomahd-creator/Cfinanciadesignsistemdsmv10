import { ComponentShowcase } from "../ui/component-showcase";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";

export function ResizablePage() {
  return (
    <ComponentShowcase
      title="Resizable"
      description="Accessible resizable panel groups and layouts with keyboard support."
      category="Layout"
      
      // Main Preview
      preview={
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-md rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      }
      
      // Main Code
      code={`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`}
      
      // Usage
      usage="Use the Resizable component to create resizeable panels in your application."
      usageCode={`import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"`}
      
      // Props Documentation
      props={[
        {
          name: "direction",
          type: '"horizontal" | "vertical"',
          default: '"horizontal"',
          description: "The direction of the panels (on Group)",
        },
        {
          name: "defaultSize",
          type: "number",
          description: "The default size of the panel in percentage (on Panel)",
        },
        {
          name: "minSize",
          type: "number",
          description: "The minimum size of the panel in percentage (on Panel)",
        },
        {
          name: "maxSize",
          type: "number",
          description: "The maximum size of the panel in percentage (on Panel)",
        },
        {
          name: "withHandle",
          type: "boolean",
          default: "false",
          description: "Show a visual handle indicator (on Handle)",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "Vertical",
          description: "Vertical resizable panels",
          preview: (
            <ResizablePanelGroup
              direction="vertical"
              className="min-h-[200px] max-w-md rounded-lg border"
            >
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Header</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Content</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          ),
          code: `<ResizablePanelGroup
  direction="vertical"
  className="min-h-[200px] max-w-md rounded-lg border"
>
  <ResizablePanel defaultSize={25}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Header</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={75}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`
        }
      ]}
    />
  );
}