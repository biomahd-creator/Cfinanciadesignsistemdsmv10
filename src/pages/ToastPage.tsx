import { ComponentShowcase } from "../components/ui/component-showcase";
import { Button } from "../components/ui/button";
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
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
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
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  )
}`}
      
      // Usage
      usage="Importa `toast` de `sonner` y úsalo para mostrar notificaciones."
      usageCode={`import { toast } from "sonner"

// ...
toast("Message", {
  description: "Description",
})`}
      
      // Props Documentation
      props={[]}
      
      // Examples
      examples={[
        {
          title: "Success",
          description: "Show a success message.",
          preview: (
            <Button
              variant="outline"
              onClick={() => toast.success("Event has been created")}
            >
              Show Success
            </Button>
          ),
          code: `toast.success("Event has been created")`
        },
        {
          title: "Error",
          description: "Show an error message.",
          preview: (
            <Button
              variant="outline"
              onClick={() => toast.error("Event has not been created")}
            >
              Show Error
            </Button>
          ),
          code: `toast.error("Event has not been created")`
        },
        {
          title: "Action",
          description: "Show a toast with an action button.",
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
              Show Action
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
