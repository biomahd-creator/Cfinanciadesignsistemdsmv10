import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Printer } from "lucide-react";

interface PDFViewerProps {
  url: string;
  title?: string;
}

export function PDFViewer({ url, title }: PDFViewerProps) {
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const totalPages = 10; // Mock value

  const handleDownload = () => {
    window.open(url, "_blank");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Card className="p-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setZoom((z) => Math.max(50, z - 10))}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm w-16 text-center">{zoom}%</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setZoom((z) => Math.min(200, z + 10))}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="bg-muted rounded-lg flex items-center justify-center" style={{ height: "600px" }}>
        <iframe
          src={`${url}#page=${page}`}
          className="w-full h-full rounded-lg"
          title={title || "PDF Document"}
          style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
        />
      </div>
    </Card>
  );
}
