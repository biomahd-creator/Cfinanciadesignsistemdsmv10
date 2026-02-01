import React from "react";
import { cn } from "../../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";

export interface OrgNode {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  children?: OrgNode[];
}

interface OrgChartProps {
  data: OrgNode;
  className?: string;
}

const OrgNodeCard = ({ node }: { node: OrgNode }) => (
  <Card className="w-[200px] border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="p-4 flex flex-col items-center text-center gap-2">
      <Avatar className="h-12 w-12">
        <AvatarImage src={node.avatar} />
        <AvatarFallback>{node.name.substring(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-semibold text-sm truncate w-full">{node.name}</h4>
        <p className="text-xs text-muted-foreground truncate w-full">{node.role}</p>
      </div>
    </CardContent>
  </Card>
);

const TreeNode = ({ node }: { node: OrgNode }) => {
  return (
    <div className="flex flex-col items-center">
      <OrgNodeCard node={node} />
      
      {node.children && node.children.length > 0 && (
        <>
          <div className="h-8 w-px bg-border my-0" />
          <div className="relative flex justify-center pt-4">
             {/* Connecting line for siblings */}
             {node.children.length > 1 && (
               <div className="absolute top-0 w-full h-px bg-border left-0 right-0" 
                    style={{ 
                      width: `calc(100% - ${220}px)`, // Approximate logic
                      left: '50%', 
                      transform: 'translateX(-50%)' 
                    }} 
               />
             )}
             
             <div className="flex gap-8">
               {node.children.map((child, index) => (
                 <div key={child.id} className="relative flex flex-col items-center">
                    {/* Top connector */}
                    <div className="absolute -top-4 h-4 w-px bg-border" />
                    {/* Horizontal connector logic is tricky in CSS flex, often done with pseudo elements. 
                        Simplified: Just vertical lines for now or use specific library if robust lines needed.
                        For this generic component, we will stick to a simple hierarchy layout.
                    */}
                    <TreeNode node={child} />
                 </div>
               ))}
             </div>
          </div>
        </>
      )}
    </div>
  );
};

export function OrgChart({ data, className }: OrgChartProps) {
  return (
    <div className={cn("overflow-auto p-8 flex justify-center min-w-[800px]", className)}>
      <TreeNode node={data} />
    </div>
  );
}
