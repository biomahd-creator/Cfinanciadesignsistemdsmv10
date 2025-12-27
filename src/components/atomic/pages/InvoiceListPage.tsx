import { ListPageTemplate } from "../templates/ListPageTemplate";
import { FilterBar } from "../organisms/FilterBar";
import { InvoiceTable } from "../organisms/InvoiceTable";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../ui/pagination";

export function InvoiceListPage() {
  return (
    <ListPageTemplate
      title="Gestión de Facturas"
      description="Administra todas las facturas del sistema"
      primaryAction={{
        label: "Nueva Factura",
        onClick: () => console.log("Nueva factura"),
      }}
      filters={<FilterBar />}
    >
      <div className="space-y-6">
        <InvoiceTable />

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Mostrando 1-10 de 243 facturas
          </p>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </ListPageTemplate>
  );
}
