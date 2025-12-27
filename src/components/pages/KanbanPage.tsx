import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { KanbanBoard } from "../advanced/KanbanBoard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function KanbanPage() {
  return (
    <div className="space-y-8 h-[calc(100vh-100px)] flex flex-col">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-4xl font-semibold">Kanban Board</h2>
          <Badge>Advanced</Badge>
        </div>
        <p className="text-muted-foreground">
          Workflow visualization with status columns and drag-and-drop support.
        </p>
      </div>

      <Separator />

      <Card className="flex-1 flex flex-col overflow-hidden">
        <CardHeader>
          <CardTitle>Project Board</CardTitle>
          <CardDescription>
            Manage your tasks and projects visually
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden p-0 sm:p-6">
          <KanbanBoard />
        </CardContent>
      </Card>
    </div>
  );
}
