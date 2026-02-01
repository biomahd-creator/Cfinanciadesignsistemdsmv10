import React from "react";
import { cn } from "../../lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export interface GanttTask {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  progress: number; // 0-100
  color?: string;
  dependencies?: string[];
}

interface GanttChartProps {
  tasks: GanttTask[];
  startDate?: Date;
  endDate?: Date;
  className?: string;
}

export function GanttChart({ tasks, startDate, endDate, className }: GanttChartProps) {
  // Determine range
  const minDate = startDate || new Date(Math.min(...tasks.map(t => t.startDate.getTime())));
  const maxDate = endDate || new Date(Math.max(...tasks.map(t => t.endDate.getTime())));
  
  // Add buffer
  const start = new Date(minDate);
  start.setDate(start.getDate() - 2);
  const end = new Date(maxDate);
  end.setDate(end.getDate() + 5);
  
  const totalDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  
  const getPosition = (date: Date) => {
    const diff = Math.ceil((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return (diff / totalDays) * 100;
  };
  
  const getWidth = (taskStart: Date, taskEnd: Date) => {
    const startPos = getPosition(taskStart);
    const endPos = getPosition(taskEnd);
    return endPos - startPos;
  };

  // Generate days for header
  const days = [];
  for (let i = 0; i < totalDays; i += Math.ceil(totalDays / 10)) {
     const d = new Date(start);
     d.setDate(d.getDate() + i);
     days.push(d);
  }

  return (
    <div className={cn("w-full min-w-0 border rounded-lg bg-background", className)}>
      <div className="flex border-b bg-muted/30">
        <div className="w-[200px] shrink-0 p-3 border-r font-medium text-sm">Tarea</div>
        <div className="flex-1 relative h-10 overflow-hidden">
          {days.map((day, i) => (
             <div 
               key={i} 
               className="absolute top-0 bottom-0 text-xs text-muted-foreground border-l pl-1"
               style={{ left: `${(i / days.length) * 100}%` }}
             >
               {day.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
             </div>
          ))}
        </div>
      </div>
      
      <ScrollArea className="h-[400px]">
        {tasks.map((task) => {
          const left = getPosition(task.startDate);
          const width = getWidth(task.startDate, task.endDate);
          const color = task.color || "bg-primary";
          
          return (
            <div key={task.id} className="flex border-b last:border-0 hover:bg-muted/10 group">
              <div className="w-[200px] shrink-0 p-3 border-r text-sm truncate flex items-center">
                {task.name}
              </div>
              <div className="flex-1 relative h-10">
                {/* Grid lines */}
                {days.map((_, i) => (
                   <div 
                     key={i} 
                     className="absolute top-0 bottom-0 w-px bg-muted/20"
                     style={{ left: `${(i / days.length) * 100}%` }}
                   />
                ))}
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={cn(
                          "absolute top-2 h-6 rounded text-primary-foreground text-[10px] flex items-center px-2 cursor-pointer transition-all hover:brightness-110",
                          color.startsWith("bg-") ? color : "bg-primary"
                        )}
                        style={{
                          left: `${left}%`,
                          width: `${width}%`,
                          backgroundColor: !color.startsWith("bg-") ? color : undefined
                        }}
                      >
                        <div 
                           className="absolute top-0 bottom-0 left-0 bg-black/10" 
                           style={{ width: `${task.progress}%` }} 
                        />
                        <span className="relative z-10 truncate">{task.progress}%</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-xs">
                        <p className="font-semibold">{task.name}</p>
                        <p>{task.startDate.toLocaleDateString()} - {task.endDate.toLocaleDateString()}</p>
                        <p>Progreso: {task.progress}%</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          );
        })}
      </ScrollArea>
    </div>
  );
}
