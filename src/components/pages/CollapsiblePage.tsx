import { ComponentShowcase } from "../ui/component-showcase";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import { ChevronsUpDown, Plus, X } from "lucide-react";
import { useState } from "react";

export function CollapsiblePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ComponentShowcase
      title="Collapsible"
      description="An interactive component which expands/collapses a panel."
      category="Layout"
      
      // Main Preview
      preview={
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      }
      
      // Main Code
      code={`import * as React from "react"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`}
      
      // Usage
      usage="Use the Collapsible component to hide complex or less important content."
      usageCode={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"`}
      
      // Props Documentation
      props={[
        {
          name: "open",
          type: "boolean",
          default: "false",
          description: "The controlled open state of the collapsible",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          description: "Event handler called when the open state changes",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Whether the collapsible is disabled",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "Simple",
          description: "Basic collapsible with a button trigger",
          preview: (
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="outline">Toggle Content</Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <div className="rounded-md border p-4">
                  Content goes here...
                </div>
              </CollapsibleContent>
            </Collapsible>
          ),
          code: `<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="outline">Toggle Content</Button>
  </CollapsibleTrigger>
  <CollapsibleContent className="mt-2">
    <div className="rounded-md border p-4">
      Content goes here...
    </div>
  </CollapsibleContent>
</Collapsible>`
        }
      ]}
    />
  );
}