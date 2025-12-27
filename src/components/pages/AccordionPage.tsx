import { ComponentShowcase } from "../ui/component-showcase";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function AccordionPage() {
  return (
    <ComponentShowcase
      title="Accordion"
      description="A vertically stacked set of interactive headings that each reveal a section of content."
      category="Layout"
      
      // Main Preview
      preview={
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      }
      
      // Main Code
      code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`}
      
      // Usage
      usage="Use the Accordion component to organize content into collapsible sections."
      usageCode={`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"`}
      
      // Props Documentation
      props={[
        {
          name: "type",
          type: '"single" | "multiple"',
          default: '"single"',
          description: "Whether one or multiple items can be open at the same time",
        },
        {
          name: "collapsible",
          type: "boolean",
          default: "false",
          description: "Whether an open item can be closed (only for type='single')",
        },
        {
          name: "defaultValue",
          type: "string | string[]",
          description: "The default value of the item(s) to expand",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "Multiple Items",
          description: "Allow multiple items to be open at once",
          preview: (
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>First Item</AccordionTrigger>
                <AccordionContent>
                  This is the first item's content.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Second Item</AccordionTrigger>
                <AccordionContent>
                  This is the second item's content.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
          code: `<Accordion type="multiple" className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>First Item</AccordionTrigger>
    <AccordionContent>
      This is the first item's content.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Second Item</AccordionTrigger>
    <AccordionContent>
      This is the second item's content.
    </AccordionContent>
  </AccordionItem>
</Accordion>`
        }
      ]}
    />
  );
}