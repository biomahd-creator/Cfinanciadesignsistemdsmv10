import { ComponentShowcase } from "../ui/component-showcase";
import { MultiSelect, MultiSelectOption } from "../ui/multi-select";
import { useState } from "react";

const frameworks: MultiSelectOption[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Next.js", value: "nextjs" },
  { label: "Nuxt.js", value: "nuxtjs" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
];

export function MultiSelectPage() {
  const [selected, setSelected] = useState<string[]>(["react", "nextjs"]);

  return (
    <ComponentShowcase
      title="Multi Select"
      description="Multi-select component with search, badges for selected items, and keyboard support."
      category="Forms"
      
      // Main Preview
      preview={
        <div className="w-full max-w-lg space-y-2">
          <label className="text-sm font-medium">Frameworks</label>
          <MultiSelect
            options={frameworks}
            selected={selected}
            onChange={setSelected}
            placeholder="Select frameworks..."
          />
        </div>
      }
      
      // Main Code
      code={`import { MultiSelect, MultiSelectOption } from "@/components/ui/multi-select";
import { useState } from "react";

const frameworks: MultiSelectOption[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  // ...
];

export function MultiSelectDemo() {
  const [selected, setSelected] = useState<string[]>(["react", "nextjs"]);

  return (
    <MultiSelect
      options={frameworks}
      selected={selected}
      onChange={setSelected}
      placeholder="Select frameworks..."
    />
  );
}`}
      
      // Usage
      usage="Use the MultiSelect component for selecting multiple items from a list with search functionality."
      usageCode={`import { MultiSelect } from "@/components/ui/multi-select"`}
      
      // Props Documentation
      props={[
        {
          name: "options",
          type: "MultiSelectOption[]",
          description: "Array of options to display",
        },
        {
          name: "selected",
          type: "string[]",
          description: "Array of selected values",
        },
        {
          name: "onChange",
          type: "(selected: string[]) => void",
          description: "Callback when selection changes",
        },
        {
          name: "placeholder",
          type: "string",
          default: '"Select options..."',
          description: "Placeholder text",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "Disabled",
          description: "Disabled multi-select",
          preview: (
            <div className="w-full max-w-lg">
              <MultiSelect
                options={frameworks}
                selected={["react"]}
                onChange={() => {}}
                disabled
                placeholder="Disabled select"
              />
            </div>
          ),
          code: `<MultiSelect
  options={frameworks}
  selected={["react"]}
  disabled
  placeholder="Disabled select"
/>`
        }
      ]}
    />
  );
}