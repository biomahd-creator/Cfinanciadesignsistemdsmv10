import { useState } from "react";
import { MasterDataGrid } from "../components/patterns/MasterDataGrid";
import { ReportsConsultation } from "../factoring/components/ReportsConsultation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Eye, Edit, Trash2 } from "lucide-react";

/**
 * Demostración del MasterDataGrid con botón "Consultar Reportes"
 * 
 * Este ejemplo muestra cómo integrar la funcionalidad de navegación
 * a la pantalla de reportes desde cualquier vista que use MasterDataGrid.
 */

interface SampleData {
  id: string;
  nombre: string;
  estado: string;
  fecha: string;
  monto: string;
}

export function MasterDataGridDemoPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showReports, setShowReports] = useState(false);

  // Datos de ejemplo
  const mockData: SampleData[] = [
    { id: "001", nombre: "Operación Alpha", estado: "Activo", fecha: "2025/01/15", monto: "$45,000" },
    { id: "002", nombre: "Operación Beta", estado: "Pendiente", fecha: "2025/01/18", monto: "$32,000" },
    { id: "003", nombre: "Operación Gamma", estado: "Completado", fecha: "2025/01/20", monto: "$28,000" },
    { id: "004", nombre: "Operación Delta", estado: "Activo", fecha: "2025/01/22", monto: "$51,000" },
    { id: "005", nombre: "Operación Epsilon", estado: "Rechazado", fecha: "2025/01/25", monto: "$19,000" },
  ];

  const totalItems = mockData.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "Activo":
        return <Badge className="bg-green-500">Activo</Badge>;
      case "Pendiente":
        return <Badge className="bg-yellow-500">Pendiente</Badge>;
      case "Completado":
        return <Badge variant="outline">Completado</Badge>;
      case "Rechazado":
        return <Badge variant="destructive">Rechazado</Badge>;
      default:
        return <Badge variant="secondary">{estado}</Badge>;
    }
  };

  // Si mostramos reportes, renderizar solo esa vista
  if (showReports) {
    return <ReportsConsultation onBack={() => setShowReports(false)} />;
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Demo: MasterDataGrid con Reportes</h1>
        <p className="text-muted-foreground">
          Ejemplo de integración del botón "Consultar Reportes" en MasterDataGrid
        </p>
      </div>

      <MasterDataGrid
        title="Gestión de Operaciones"
        description="Vista de ejemplo con navegación a reportes"
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Buscar operaciones..."
        showRefresh={true}
        onRefresh={() => alert("Actualizando datos...")}
        showExport={true}
        onExport={() => alert("Exportando datos...")}
        onConsultReports={() => setShowReports(true)}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        startIndex={startIndex}
        endIndex={endIndex}
        pageSizeOptions={[5, 10, 20, 50]}
        onPageSizeChange={setItemsPerPage}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Monto</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.slice(startIndex, endIndex).map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-mono">{item.id}</TableCell>
                <TableCell className="font-medium">{item.nombre}</TableCell>
                <TableCell>{getEstadoBadge(item.estado)}</TableCell>
                <TableCell>{item.fecha}</TableCell>
                <TableCell className="font-semibold">{item.monto}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </MasterDataGrid>
    </div>
  );
}
