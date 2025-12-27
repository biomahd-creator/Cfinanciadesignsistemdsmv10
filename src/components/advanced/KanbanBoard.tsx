import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { MoreHorizontal, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const columns = [
  {
    id: "pending",
    title: "Pendiente",
    color: "bg-yellow-500",
    cards: [
      {
        id: 1,
        title: "INV-045",
        description: "Empresa ABC S.A.",
        amount: "$2,500,000",
        assignee: "JP",
        priority: "high",
      },
      {
        id: 2,
        title: "INV-046",
        description: "Comercial XYZ Ltda.",
        amount: "$1,800,000",
        assignee: "MG",
        priority: "medium",
      },
    ],
  },
  {
    id: "review",
    title: "En Revisión",
    color: "bg-blue-500",
    cards: [
      {
        id: 3,
        title: "INV-043",
        description: "Industrias DEF S.A.",
        amount: "$3,200,000",
        assignee: "CR",
        priority: "high",
      },
    ],
  },
  {
    id: "approved",
    title: "Aprobada",
    color: "bg-green-500",
    cards: [
      {
        id: 4,
        title: "INV-041",
        description: "Servicios GHI Ltda.",
        amount: "$950,000",
        assignee: "AM",
        priority: "low",
      },
      {
        id: 5,
        title: "INV-042",
        description: "Distribuidora JKL S.A.",
        amount: "$4,100,000",
        assignee: "JP",
        priority: "medium",
      },
    ],
  },
  {
    id: "paid",
    title: "Pagada",
    color: "bg-primary",
    cards: [
      {
        id: 6,
        title: "INV-040",
        description: "Tech Solutions Ltd.",
        amount: "$2,750,000",
        assignee: "MG",
        priority: "low",
      },
    ],
  },
];

const priorityColors = {
  high: "destructive",
  medium: "default",
  low: "secondary",
} as const;

export function KanbanBoard() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {columns.map((column) => (
        <div key={column.id} className="flex-shrink-0 w-80">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${column.color}`} />
                  <CardTitle className="text-lg">{column.title}</CardTitle>
                  <Badge variant="secondary" className="h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs">
                    {column.cards.length}
                  </Badge>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {column.cards.map((card) => (
                <Card key={card.id} className="cursor-move hover:shadow-md transition-shadow">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-semibold">{card.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {card.description}
                        </p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                          <DropdownMenuItem>Editar</DropdownMenuItem>
                          <DropdownMenuItem>Mover a...</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{card.amount}</p>
                      <Badge variant={priorityColors[card.priority]} className="text-xs">
                        {card.priority === "high"
                          ? "Alta"
                          : card.priority === "medium"
                          ? "Media"
                          : "Baja"}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">
                          {card.assignee}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">
                        Asignado a {card.assignee}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
