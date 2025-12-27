import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Card } from "../ui/card";
import { ArrowUpDown, Eye, TrendingUp, TrendingDown } from "lucide-react";

export interface PivotDataRow {
  [key: string]: string | number;
}

export interface PivotConfig {
  rows: string[];
  columns: string[];
  values: string;
  aggregation: "sum" | "avg" | "count" | "min" | "max";
}

interface PivotTableProps {
  data: PivotDataRow[];
  initialConfig?: PivotConfig;
  availableFields?: string[];
  onConfigChange?: (config: PivotConfig) => void;
}

type AggregatedData = {
  [rowKey: string]: {
    [colKey: string]: {
      value: number;
      count: number;
      items: PivotDataRow[];
    };
  };
};

export function PivotTable({
  data,
  initialConfig,
  availableFields,
  onConfigChange,
}: PivotTableProps) {
  const defaultFields = availableFields || Object.keys(data[0] || {});

  const [config, setConfig] = useState<PivotConfig>(
    initialConfig || {
      rows: [defaultFields[0]],
      columns: [defaultFields[1]],
      values: defaultFields[2] || defaultFields[0],
      aggregation: "sum",
    }
  );

  const [drillDownData, setDrillDownData] = useState<PivotDataRow[] | null>(null);
  const [drillDownTitle, setDrillDownTitle] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const handleConfigChange = (newConfig: Partial<PivotConfig>) => {
    const updatedConfig = { ...config, ...newConfig };
    setConfig(updatedConfig);
    onConfigChange?.(updatedConfig);
  };

  // Aggregate data based on configuration
  const { aggregatedData, rowKeys, colKeys } = useMemo(() => {
    const aggregated: AggregatedData = {};
    const rows = new Set<string>();
    const cols = new Set<string>();

    data.forEach((item) => {
      const rowKey = config.rows.map((r) => item[r]).join(" | ");
      const colKey = config.columns.map((c) => item[c]).join(" | ");
      const value = Number(item[config.values]) || 0;

      rows.add(rowKey);
      cols.add(colKey);

      if (!aggregated[rowKey]) {
        aggregated[rowKey] = {};
      }

      if (!aggregated[rowKey][colKey]) {
        aggregated[rowKey][colKey] = {
          value: 0,
          count: 0,
          items: [],
        };
      }

      const cell = aggregated[rowKey][colKey];
      cell.items.push(item);
      cell.count += 1;

      switch (config.aggregation) {
        case "sum":
          cell.value += value;
          break;
        case "avg":
          cell.value = cell.items.reduce((sum, i) => sum + (Number(i[config.values]) || 0), 0) / cell.count;
          break;
        case "count":
          cell.value = cell.count;
          break;
        case "min":
          cell.value = Math.min(cell.value === 0 ? value : cell.value, value);
          break;
        case "max":
          cell.value = Math.max(cell.value, value);
          break;
      }
    });

    return {
      aggregatedData: aggregated,
      rowKeys: Array.from(rows),
      colKeys: Array.from(cols),
    };
  }, [data, config]);

  // Calculate totals
  const { rowTotals, colTotals, grandTotal } = useMemo(() => {
    const rTotals: { [key: string]: number } = {};
    const cTotals: { [key: string]: number } = {};
    let gTotal = 0;

    rowKeys.forEach((rowKey) => {
      rTotals[rowKey] = 0;
      colKeys.forEach((colKey) => {
        const cellValue = aggregatedData[rowKey]?.[colKey]?.value || 0;
        rTotals[rowKey] += cellValue;
      });
    });

    colKeys.forEach((colKey) => {
      cTotals[colKey] = 0;
      rowKeys.forEach((rowKey) => {
        const cellValue = aggregatedData[rowKey]?.[colKey]?.value || 0;
        cTotals[colKey] += cellValue;
        gTotal += cellValue;
      });
    });

    return {
      rowTotals: rTotals,
      colTotals: cTotals,
      grandTotal: gTotal,
    };
  }, [aggregatedData, rowKeys, colKeys]);

  // Sort rows
  const sortedRowKeys = useMemo(() => {
    if (!sortConfig) return rowKeys;

    return [...rowKeys].sort((a, b) => {
      let aValue: number;
      let bValue: number;

      if (sortConfig.key === "total") {
        aValue = rowTotals[a];
        bValue = rowTotals[b];
      } else {
        aValue = aggregatedData[a]?.[sortConfig.key]?.value || 0;
        bValue = aggregatedData[b]?.[sortConfig.key]?.value || 0;
      }

      if (sortConfig.direction === "asc") {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
  }, [rowKeys, sortConfig, aggregatedData, rowTotals]);

  const handleSort = (key: string) => {
    setSortConfig((current) => {
      if (current?.key === key) {
        return {
          key,
          direction: current.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "desc" };
    });
  };

  const handleDrillDown = (rowKey: string, colKey: string) => {
    const items = aggregatedData[rowKey]?.[colKey]?.items || [];
    setDrillDownData(items);
    setDrillDownTitle(`${rowKey} × ${colKey}`);
  };

  const formatValue = (value: number): string => {
    if (config.aggregation === "count") {
      return value.toFixed(0);
    }
    return new Intl.NumberFormat("es-ES", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getValueColor = (value: number, total: number): string => {
    const percentage = (value / total) * 100;
    if (percentage > 66) return "text-green-600 dark:text-green-400";
    if (percentage > 33) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <div className="w-full space-y-4">
      {/* Configuration Controls */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Filas</label>
            <Select
              value={config.rows[0]}
              onValueChange={(value) => handleConfigChange({ rows: [value] })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {defaultFields.map((field) => (
                  <SelectItem key={field} value={field}>
                    {field}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Columnas</label>
            <Select
              value={config.columns[0]}
              onValueChange={(value) => handleConfigChange({ columns: [value] })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {defaultFields.map((field) => (
                  <SelectItem key={field} value={field}>
                    {field}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Valores</label>
            <Select
              value={config.values}
              onValueChange={(value) => handleConfigChange({ values: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {defaultFields.map((field) => (
                  <SelectItem key={field} value={field}>
                    {field}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Agregación</label>
            <Select
              value={config.aggregation}
              onValueChange={(value) =>
                handleConfigChange({
                  aggregation: value as PivotConfig["aggregation"],
                })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sum">Suma</SelectItem>
                <SelectItem value="avg">Promedio</SelectItem>
                <SelectItem value="count">Conteo</SelectItem>
                <SelectItem value="min">Mínimo</SelectItem>
                <SelectItem value="max">Máximo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Pivot Table */}
      <div className="rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="sticky left-0 z-10 bg-background border-r font-semibold">
                    {config.rows[0]}
                  </TableHead>
                  {colKeys.map((colKey) => (
                    <TableHead
                      key={colKey}
                      className="text-right cursor-pointer hover:bg-muted/50"
                      onClick={() => handleSort(colKey)}
                    >
                      <div className="flex items-center justify-end gap-1">
                        <span className="truncate max-w-[120px]">{colKey}</span>
                        <ArrowUpDown className="h-3 w-3 shrink-0" />
                      </div>
                    </TableHead>
                  ))}
                  <TableHead
                    className="text-right font-semibold bg-muted cursor-pointer hover:bg-muted/80"
                    onClick={() => handleSort("total")}
                  >
                    <div className="flex items-center justify-end gap-1">
                      Total
                      <ArrowUpDown className="h-3 w-3 shrink-0" />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedRowKeys.length > 0 ? (
                  <>
                    {sortedRowKeys.map((rowKey) => (
                      <TableRow key={rowKey} className="hover:bg-muted/50">
                        <TableCell className="sticky left-0 z-10 bg-background border-r font-medium">
                          <span className="truncate block max-w-[200px]">
                            {rowKey}
                          </span>
                        </TableCell>
                        {colKeys.map((colKey) => {
                          const cell = aggregatedData[rowKey]?.[colKey];
                          const value = cell?.value || 0;
                          const hasData = cell && cell.count > 0;

                          return (
                            <TableCell
                              key={colKey}
                              className={`text-right ${hasData ? "cursor-pointer hover:bg-primary/10" : ""}`}
                              onClick={() => hasData && handleDrillDown(rowKey, colKey)}
                            >
                              {hasData ? (
                                <div className="flex items-center justify-end gap-2">
                                  <span className={getValueColor(value, rowTotals[rowKey])}>
                                    {formatValue(value)}
                                  </span>
                                  {cell.count > 1 && (
                                    <Badge variant="secondary" className="h-4 px-1 text-xs">
                                      {cell.count}
                                    </Badge>
                                  )}
                                  <Eye className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100" />
                                </div>
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )}
                            </TableCell>
                          );
                        })}
                        <TableCell className="text-right font-semibold bg-muted/50">
                          <div className="flex items-center justify-end gap-1">
                            {rowTotals[rowKey] > grandTotal / sortedRowKeys.length ? (
                              <TrendingUp className="h-3 w-3 text-green-600" />
                            ) : (
                              <TrendingDown className="h-3 w-3 text-red-600" />
                            )}
                            {formatValue(rowTotals[rowKey])}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}

                    {/* Totals Row */}
                    <TableRow className="bg-muted font-semibold">
                      <TableCell className="sticky left-0 z-10 bg-muted border-r">
                        Total
                      </TableCell>
                      {colKeys.map((colKey) => (
                        <TableCell key={colKey} className="text-right">
                          {formatValue(colTotals[colKey])}
                        </TableCell>
                      ))}
                      <TableCell className="text-right bg-primary/20">
                        {formatValue(grandTotal)}
                      </TableCell>
                    </TableRow>
                  </>
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={colKeys.length + 2}
                      className="h-24 text-center"
                    >
                      No hay datos disponibles
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Mobile scroll indicator */}
      <div className="mt-2 text-xs text-muted-foreground text-center md:hidden">
        📱 Desliza horizontalmente para ver más columnas
      </div>

      {/* Drill-down Dialog */}
      <Dialog open={!!drillDownData} onOpenChange={() => setDrillDownData(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalles: {drillDownTitle}</DialogTitle>
            <DialogDescription>
              {drillDownData?.length || 0} registros encontrados
            </DialogDescription>
          </DialogHeader>

          {drillDownData && drillDownData.length > 0 && (
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    {Object.keys(drillDownData[0]).map((key) => (
                      <TableHead key={key}>{key}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {drillDownData.map((item, idx) => (
                    <TableRow key={idx}>
                      {Object.entries(item).map(([key, value]) => (
                        <TableCell key={key}>
                          {typeof value === "number"
                            ? formatValue(value)
                            : String(value)}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
