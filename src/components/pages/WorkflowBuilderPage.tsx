import { ComponentShowcase } from "../ui/component-showcase";
import { WorkflowBuilder } from "../advanced/WorkflowBuilder";
import { Card } from "../ui/card";

export function WorkflowBuilderPage() {
  return (
    <ComponentShowcase
      title="Workflow Builder"
      description="Visual workflow builder with drag-and-drop nodes, connections, and logic branches. Create automation workflows, process flows, and decision trees."
      category="Hero UI Pro"
      preview={
        <Card className="p-6 w-full max-w-6xl">
          <div className="mb-4">
            <div className="text-lg mb-1">Automation Workflow</div>
            <div className="text-xs text-muted-foreground">Drag nodes to build your workflow</div>
          </div>
          <WorkflowBuilder 
            initialNodes={[
              { id: "1", type: "trigger", label: "Form Submitted", x: 100, y: 100 },
              { id: "2", type: "action", label: "Send Email", x: 300, y: 100 },
              { id: "3", type: "condition", label: "Check Status", x: 500, y: 100 },
            ]}
            initialConnections={[
              { from: "1", to: "2" },
              { from: "2", to: "3" },
            ]}
          />
        </Card>
      }
      code={`import { WorkflowBuilder } from "../advanced/WorkflowBuilder";

<WorkflowBuilder 
  initialNodes={nodes}
  initialConnections={connections}
  onSave={handleSave}
/>`}
      usage="Workflow Builder enables users to create visual automation workflows by connecting nodes. Perfect for no-code automation platforms, process design, and decision mapping."
      usageCode={`import { WorkflowBuilder } from "../advanced/WorkflowBuilder";
import { useState } from "react";

export function AutomationDesigner() {
  const [workflow, setWorkflow] = useState({ nodes: [], connections: [] });
  
  const handleSave = (data) => {
    api.saveWorkflow(data);
  };
  
  return (
    <WorkflowBuilder
      initialNodes={workflow.nodes}
      initialConnections={workflow.connections}
      onSave={handleSave}
    />
  );
}`}
      props={[
        { name: "initialNodes", type: "Node[]", default: "[]", description: "Initial workflow nodes" },
        { name: "initialConnections", type: "Connection[]", default: "[]", description: "Initial node connections" },
        { name: "onSave", type: "(workflow: Workflow) => void", default: "undefined", description: "Callback when workflow is saved" },
        { name: "nodeTypes", type: "NodeType[]", default: '["trigger", "action", "condition"]', description: "Available node types" },
        { name: "readOnly", type: "boolean", default: "false", description: "Make workflow non-editable" },
      ]}
      examples={[
        {
          title: "Email Automation",
          description: "Automated email workflow with conditions",
          preview: (
            <Card className="p-6 w-full max-w-4xl aspect-video bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
              <div className="text-muted-foreground text-sm">Workflow Canvas</div>
            </Card>
          ),
          code: `<WorkflowBuilder\n  initialNodes={emailNodes}\n  onSave={saveEmailWorkflow}\n/>`,
        },
      ]}
    />
  );
}
