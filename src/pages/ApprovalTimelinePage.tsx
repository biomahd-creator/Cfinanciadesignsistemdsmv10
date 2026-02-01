import { ComponentShowcase } from "../components/ui/component-showcase";
import { ApprovalTimeline } from "../components/patterns/ApprovalTimeline";

const approvalTimelineCode = `import { ApprovalTimeline } from "@/components/patterns/ApprovalTimeline";

export function ApprovalTimelineDemo() {
  return <ApprovalTimeline />;
}`;

export function ApprovalTimelinePage() {
  return (
    <ComponentShowcase
      title="Approval Timeline"
      description="Card + Badge + Separator + Avatar + Icons"
      category="Business Pattern"
      preview={<ApprovalTimeline />}
      code={approvalTimelineCode}
      usage="Visualización del historial de aprobaciones y estado actual de un proceso."
    />
  );
}
