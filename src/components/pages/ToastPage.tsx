import { ComponentShowcase } from "../ui/component-showcase";
import { Button } from "../ui/button";
import { toast } from "sonner@2.0.3";

export function ToastPage() {
  return (
    <ComponentShowcase
      title="Toast"
      description="A succinct message that is displayed temporarily."
      category="Feedback"
      
      // Main Preview
      preview={
        <Button
          variant="outline"
          onClick={() => {
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }}
        >
          Show Toast
        </Button>
      }
      
      // Main Code
      code={`import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }}
    >
      Show Toast
    </Button>
  )
}`}
      
      // Usage
      usage="We use Sonner for toasts. Import toast from sonner and call it to display a message."
      usageCode={`import { toast } from "sonner@2.0.3"`}
      
      // Props Documentation
      props={[
        {
          name: "description",
          type: "string",
          description: "Additional details for the toast",
        },
        {
          name: "action",
          type: "{ label: string, onClick: () => void }",
          description: "Action button configuration",
        },
        {
          name: "cancel",
          type: "{ label: string, onClick: () => void }",
          description: "Cancel button configuration",
        },
        {
          name: "duration",
          type: "number",
          default: "4000",
          description: "Time in milliseconds before the toast closes",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "Simple",
          description: "A basic toast with just a message",
          preview: (
            <Button
              variant="outline"
              onClick={() => toast("Event has been created")}
            >
              Show Simple Toast
            </Button>
          ),
          code: `toast("Event has been created")`
        },
        {
          title: "Success",
          description: "A success toast with an icon",
          preview: (
            <Button
              variant="outline"
              onClick={() => toast.success("Event has been created")}
            >
              Show Success Toast
            </Button>
          ),
          code: `toast.success("Event has been created")`
        },
        {
          title: "Error",
          description: "An error toast with an icon",
          preview: (
            <Button
              variant="outline"
              onClick={() => toast.error("Event has not been created")}
            >
              Show Error Toast
            </Button>
          ),
          code: `toast.error("Event has not been created")`
        },
        {
          title: "With Action",
          description: "A toast with an action button",
          preview: (
            <Button
              variant="outline"
              onClick={() =>
                toast("Event has been created", {
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              Show Toast with Action
            </Button>
          ),
          code: `toast("Event has been created", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
})`
        }
      ]}
    />
  );
}