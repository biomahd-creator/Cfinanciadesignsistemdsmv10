import { Card } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Circle } from "lucide-react";

export function RealtimeCollaboration() {
  const activeUsers = [
    { id: "1", name: "John Doe", status: "Editing section 1", color: "blue" },
    { id: "2", name: "Jane Smith", status: "Reviewing", color: "green" },
    { id: "3", name: "Bob Johnson", status: "Typing...", color: "yellow" },
  ];

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Active Collaborators</h3>
        <Badge variant="secondary">{activeUsers.length} online</Badge>
      </div>
      <div className="space-y-3">
        {activeUsers.map((user) => (
          <div key={user.id} className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <Circle className="absolute -bottom-1 -right-1 h-4 w-4 fill-green-500 text-green-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.status}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
