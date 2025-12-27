import { Card } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";

export function CollaborativeCursors() {
  const users = [
    { id: "1", name: "John", color: "#3b82f6", x: 20, y: 30 },
    { id: "2", name: "Jane", color: "#ef4444", x: 50, y: 50 },
    { id: "3", name: "Bob", color: "#22c55e", x: 70, y: 40 },
  ];

  return (
    <Card className="p-8 min-h-[400px] relative bg-slate-50 dark:bg-slate-950">
      <p className="text-muted-foreground text-center">Collaborative Canvas</p>
      {users.map((user) => (
        <div
          key={user.id}
          className="absolute transition-all duration-300"
          style={{ left: `${user.x}%`, top: `${user.y}%` }}
        >
          <div className="relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill={user.color}>
              <path d="M5 3l14 9-6 1-2 6z" />
            </svg>
            <div
              className="absolute top-6 left-6 px-2 py-1 rounded text-xs text-white whitespace-nowrap"
              style={{ backgroundColor: user.color }}
            >
              {user.name}
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
}
