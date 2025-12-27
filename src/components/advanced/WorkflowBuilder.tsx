import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Plus, Play, Save } from "lucide-react";
import { Badge } from "../ui/badge";

interface WorkflowNode {
  id: string;
  type: "start" | "action" | "condition" | "end";
  label: string;
  x: number;
  y: number;
}

export function WorkflowBuilder() {
  const [nodes] = useState<WorkflowNode[]>([
    { id: "1", type: "start", label: "Start", x: 50, y: 50 },
    { id: "2", type: "action", label: "Send Email", x: 50, y: 150 },
    { id: "3", type: "condition", label: "Approved?", x: 50, y: 250 },
    { id: "4", type: "end", label: "End", x: 50, y: 350 },
  ]);

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Node
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button size="sm">
              <Play className="h-4 w-4 mr-2" />
              Run
            </Button>
          </div>
        </div>
      </Card>

      {/* Canvas */}
      <Card className="p-8 min-h-[500px] bg-slate-50 dark:bg-slate-950 relative">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Connections */}
          {nodes.slice(0, -1).map((node, i) => {
            const nextNode = nodes[i + 1];
            return (
              <line
                key={node.id}
                x1={node.x + 100}
                y1={node.y + 40}
                x2={nextNode.x + 100}
                y2={nextNode.y + 10}
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.3"
                markerEnd="url(#arrowhead)"
              />
            );
          })}
          
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="currentColor" opacity="0.3" />
            </marker>
          </defs>
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            className="absolute"
            style={{
              left: node.x,
              top: node.y,
            }}
          >
            <Card className="w-48 p-4 cursor-move hover:shadow-elevation-3 transition-shadow">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge
                    variant={
                      node.type === "start"
                        ? "default"
                        : node.type === "end"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {node.type}
                  </Badge>
                </div>
                <p className="text-sm font-medium">{node.label}</p>
              </div>
            </Card>
          </div>
        ))}
      </Card>
    </div>
  );
}
