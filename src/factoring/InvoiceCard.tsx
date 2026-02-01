import React from "react";
import { cn } from "../lib/utils";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { FileText, Calendar, DollarSign, MoreVertical, ArrowRight, Clock } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export interface InvoiceData {
  id: string;
  number: string;
  clientName: string;
  amount: number;
  dueDate: string;
  issueDate: string;
  status: "pending" | "approved" | "rejected" | "paid" | "overdue";
  probability?: number;
}

interface InvoiceCardProps {
  invoice: InvoiceData;
  className?: string;
  onAction?: (action: string) => void;
}

const statusConfig = {
  pending: { label: "Pendiente", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  approved: { label: "Aprobada", color: "bg-green-100 text-green-800 border-green-200" },
  rejected: { label: "Rechazada", color: "bg-red-100 text-red-800 border-red-200" },
  paid: { label: "Pagada", color: "bg-blue-100 text-blue-800 border-blue-200" },
  overdue: { label: "Vencida", color: "bg-orange-100 text-orange-800 border-orange-200" },
};

export function InvoiceCard({ invoice, className, onAction }: InvoiceCardProps) {
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(val);

  return (
    <Card className={cn("hover:shadow-md transition-shadow", className)}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <FileText className="h-4 w-4" />
            </div>
            <span className="font-bold text-lg">{invoice.number}</span>
          </div>
          <p className="text-sm text-muted-foreground truncate max-w-[200px]">
            {invoice.clientName}
          </p>
        </div>
        <div className="flex items-start gap-2">
          <Badge 
            variant="outline" 
            className={cn("font-medium border", statusConfig[invoice.status].color)}
          >
            {statusConfig[invoice.status].label}
          </Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onAction?.('view')}>Ver Detalle</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onAction?.('download')}>Descargar PDF</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive" onClick={() => onAction?.('delete')}>
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="mt-2 mb-4">
          <span className="text-2xl font-bold tracking-tight">
            {formatCurrency(invoice.amount)}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              <Calendar className="h-3 w-3" /> Emisión
            </span>
            <span className="font-medium">{invoice.issueDate}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              <Clock className="h-3 w-3" /> Vencimiento
            </span>
            <span className={cn(
              "font-medium",
              invoice.status === 'overdue' && "text-red-600"
            )}>
              {invoice.dueDate}
            </span>
          </div>
        </div>

        {invoice.probability !== undefined && (
          <div className="mt-4 space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Probabilidad de Pago</span>
              <span className="font-medium">{invoice.probability}%</span>
            </div>
            <Progress value={invoice.probability} className="h-1.5" />
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-2">
        <Button 
          className="w-full justify-between group" 
          variant="outline"
          onClick={() => onAction?.('view')}
        >
          Gestionar
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
