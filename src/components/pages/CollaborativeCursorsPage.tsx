import { ComponentShowcase } from "../ui/component-showcase";
import { CollaborativeCursors } from "../advanced/CollaborativeCursors";
import { Card } from "../ui/card";

export function CollaborativeCursorsPage() {
  return (
    <ComponentShowcase
      title="Collaborative Cursors"
      description="Real-time cursor tracking for multi-user collaboration environments. Shows other users' positions and actions on a shared canvas."
      category="Hero UI Pro"
      preview={
        <CollaborativeCursors />
      }
      code={`import { CollaborativeCursors } from "@/components/advanced/CollaborativeCursors";

<CollaborativeCursors />`}
      usage="Use this component in collaborative workspaces, whiteboards, or document editors to show presence and activity of other users."
      usageCode={`import { CollaborativeCursors } from "@/components/advanced/CollaborativeCursors";
import { Card } from "@/components/ui/card";

export function Whiteboard() {
  return (
    <Card className="h-[500px] relative">
      <CollaborativeCursors />
      {/* Canvas content */}
    </Card>
  );
}`}
      props={[]}
      examples={[]}
    />
  );
}
