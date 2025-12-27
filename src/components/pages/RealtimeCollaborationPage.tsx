import { ComponentShowcase } from "../ui/component-showcase";
import { RealtimeCollaboration } from "../advanced/RealtimeCollaboration";

export function RealtimeCollaborationPage() {
  return (
    <ComponentShowcase
      title="Realtime Collaboration"
      description="UI components for showing active users, their status, and collaborative actions in real-time."
      category="Hero UI Pro"
      preview={
        <RealtimeCollaboration />
      }
      code={`import { RealtimeCollaboration } from "@/components/advanced/RealtimeCollaboration";

<RealtimeCollaboration />`}
      usage="Essential for any multi-user application where knowing who is online and what they are doing is important."
      usageCode={`import { RealtimeCollaboration } from "@/components/advanced/RealtimeCollaboration";

export function CollabSidebar() {
  return (
    <div className="w-64 border-l">
      <RealtimeCollaboration />
    </div>
  );
}`}
      props={[]}
      examples={[]}
    />
  );
}
