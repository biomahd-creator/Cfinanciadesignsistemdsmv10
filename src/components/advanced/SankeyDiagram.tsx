import React from "react";
import { ResponsiveContainer, Sankey, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface SankeyNode {
  name: string;
}

interface SankeyLink {
  source: number;
  target: number;
  value: number;
}

interface SankeyData {
  nodes: SankeyNode[];
  links: SankeyLink[];
}

interface SankeyDiagramProps {
  data: SankeyData;
  title?: string;
  className?: string;
}

export function SankeyDiagram({ data, title = "Flujo de Fondos", className }: SankeyDiagramProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Custom Node
  const MyCustomNode = ({ x, y, width, height, index, payload, containerWidth }: any) => {
    const isOut = x + width + 6 > containerWidth;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill="#8884d8"
          fillOpacity="0.8"
          rx={2}
        />
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="bold"
          style={{ pointerEvents: "none" }}
        >
          {payload.name}
        </text>
      </g>
    );
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full min-w-0" style={{ minHeight: '400px' }}>
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <Sankey
                data={data}
                nodeWidth={12}
                nodePadding={50}
                margin={{
                  left: 20,
                  right: 20,
                  top: 20,
                  bottom: 20,
                }}
                link={{ stroke: '#82ca9d', strokeOpacity: 0.3 }}
              >
                <Tooltip />
              </Sankey>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              Cargando visualización...
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
