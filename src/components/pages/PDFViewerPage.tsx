import { ComponentShowcase } from "../ui/component-showcase";
import { PDFViewer } from "../advanced/PDFViewer";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { FileText, Download, ZoomIn, ZoomOut } from "lucide-react";

export function PDFViewerPage() {
  return (
    <ComponentShowcase
      title="PDF Viewer"
      description="A powerful PDF viewer with zoom controls, page navigation, search functionality, and download options. Perfect for documentation, contracts, reports, and any PDF content delivery."
      category="Media Components"
      preview={
        <div className="space-y-6 w-full">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg">Annual Report 2024</h3>
                  <p className="text-sm text-muted-foreground">company-report.pdf • 24 pages</p>
                </div>
              </div>
              <Badge>PDF</Badge>
            </div>
            <PDFViewer 
              url="https://arxiv.org/pdf/2301.00001"
              fileName="annual-report-2024.pdf"
            />
          </Card>
        </div>
      }
      code={`import { PDFViewer } from "@/components/advanced/PDFViewer";

<PDFViewer 
  url="https://example.com/document.pdf"
  fileName="document.pdf"
/>`}
      usage="The PDF Viewer component provides a seamless experience for viewing PDF documents directly in the browser without requiring downloads. It includes navigation, zoom, and search capabilities for enhanced usability."
      usageCode={`import { PDFViewer } from "@/components/advanced/PDFViewer";
import { Card } from "@/components/ui/card";

export function ContractViewer() {
  const handleDownload = () => {
    console.log("Downloading contract...");
  };
  
  return (
    <Card className="p-6">
      <h3>Service Agreement</h3>
      <PDFViewer 
        url="/contracts/service-agreement.pdf"
        fileName="service-agreement.pdf"
        showDownload={true}
        onDownload={handleDownload}
      />
    </Card>
  );
}`}
      props={[
        {
          name: "url",
          type: "string",
          default: '""',
          description: "URL of the PDF file to display",
          required: true,
        },
        {
          name: "fileName",
          type: "string",
          default: '"document.pdf"',
          description: "Name for downloaded file",
          required: false,
        },
        {
          name: "initialPage",
          type: "number",
          default: "1",
          description: "Starting page number",
          required: false,
        },
        {
          name: "showDownload",
          type: "boolean",
          default: "true",
          description: "Show download button",
          required: false,
        },
        {
          name: "showSearch",
          type: "boolean",
          default: "true",
          description: "Show search functionality",
          required: false,
        },
        {
          name: "height",
          type: "string",
          default: '"600px"',
          description: "Viewer height (CSS value)",
          required: false,
        },
        {
          name: "onDownload",
          type: "() => void",
          default: "undefined",
          description: "Callback when download is triggered",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Contract Document",
          description: "Legal document viewer with download option",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-lg">Employment Contract</h3>
                    <p className="text-sm text-muted-foreground">Version 2.1 • Last updated: Dec 15, 2024</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">Legal</Badge>
                    <Badge>Requires Signature</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="text-sm px-3 py-1.5 border rounded-md hover:bg-muted flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button className="text-sm px-3 py-1.5 border rounded-md hover:bg-muted">
                    Print
                  </button>
                  <button className="text-sm px-3 py-1.5 bg-primary text-primary-foreground rounded-md">
                    Sign Document
                  </button>
                </div>
              </div>
              <PDFViewer 
                url="https://arxiv.org/pdf/2301.00002"
                fileName="employment-contract.pdf"
                height="400px"
              />
            </Card>
          ),
          code: `<PDFViewer 
  url="/contracts/employment.pdf"
  fileName="employment-contract.pdf"
  showDownload={true}
  height="600px"
/>`,
        },
        {
          title: "Technical Documentation",
          description: "Product manual with search and navigation",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg">API Documentation v3.0</h3>
                    <p className="text-sm text-muted-foreground">Complete reference guide for developers</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">REST API</Badge>
                  <Badge variant="outline">Authentication</Badge>
                  <Badge variant="outline">Examples</Badge>
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Search documentation..." 
                    className="flex-1 px-3 py-1.5 border rounded-md text-sm"
                  />
                  <button className="px-3 py-1.5 border rounded-md hover:bg-muted">
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button className="px-3 py-1.5 border rounded-md hover:bg-muted">
                    <ZoomOut className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <PDFViewer 
                url="https://arxiv.org/pdf/2301.00003"
                fileName="api-documentation.pdf"
                showSearch={true}
                height="400px"
              />
            </Card>
          ),
          code: `<PDFViewer 
  url="/docs/api-documentation.pdf"
  fileName="api-documentation.pdf"
  showSearch={true}
  showDownload={true}
/>`,
        },
        {
          title: "Invoice Preview",
          description: "Financial document with actions",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-lg">Invoice #INV-2024-001</h3>
                    <p className="text-sm text-muted-foreground">Due: January 15, 2024</p>
                  </div>
                  <div>
                    <Badge variant="destructive">Unpaid</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Amount</p>
                    <p className="text-lg">$2,450.00</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Issued</p>
                    <p className="text-lg">Dec 15, 2024</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Due In</p>
                    <p className="text-lg">30 days</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-primary text-primary-foreground rounded-md">
                    Pay Now
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-muted flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
              <PDFViewer 
                url="https://arxiv.org/pdf/2301.00004"
                fileName="invoice-2024-001.pdf"
                height="400px"
              />
            </Card>
          ),
          code: `<PDFViewer 
  url="/invoices/INV-2024-001.pdf"
  fileName="invoice-2024-001.pdf"
  showDownload={true}
/>`,
        },
        {
          title: "Research Paper",
          description: "Academic paper with citation tools",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg">Machine Learning Advances 2024</h3>
                    <p className="text-sm text-muted-foreground">
                      Smith, J. et al. • Journal of AI Research • Vol. 45, 2024
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Neural Networks</Badge>
                  <Badge variant="outline">Peer Reviewed</Badge>
                </div>
                <div className="flex gap-2">
                  <button className="text-sm px-3 py-1.5 border rounded-md hover:bg-muted">
                    Cite
                  </button>
                  <button className="text-sm px-3 py-1.5 border rounded-md hover:bg-muted">
                    Export BibTeX
                  </button>
                  <button className="text-sm px-3 py-1.5 border rounded-md hover:bg-muted">
                    Save to Library
                  </button>
                  <button className="text-sm px-3 py-1.5 border rounded-md hover:bg-muted flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
              <PDFViewer 
                url="https://arxiv.org/pdf/2301.00005"
                fileName="ml-advances-2024.pdf"
                height="400px"
              />
            </Card>
          ),
          code: `<PDFViewer 
  url="/papers/ml-advances-2024.pdf"
  fileName="ml-advances-2024.pdf"
  showSearch={true}
  showDownload={true}
/>`,
        },
        {
          title: "User Manual",
          description: "Product guide with chapter navigation",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
              <Card className="p-4 md:col-span-1">
                <h4 className="text-sm mb-3">Contents</h4>
                <div className="space-y-1 text-sm">
                  <button className="w-full text-left p-2 hover:bg-muted rounded">1. Getting Started</button>
                  <button className="w-full text-left p-2 bg-primary/10 rounded">2. Installation</button>
                  <button className="w-full text-left p-2 hover:bg-muted rounded">3. Configuration</button>
                  <button className="w-full text-left p-2 hover:bg-muted rounded">4. Usage Guide</button>
                  <button className="w-full text-left p-2 hover:bg-muted rounded">5. Troubleshooting</button>
                  <button className="w-full text-left p-2 hover:bg-muted rounded">6. FAQ</button>
                </div>
              </Card>
              
              <Card className="p-4 md:col-span-3">
                <div className="mb-4">
                  <h3 className="text-lg mb-1">Product User Manual</h3>
                  <p className="text-sm text-muted-foreground">Version 1.5 • 64 pages</p>
                </div>
                <PDFViewer 
                  url="https://arxiv.org/pdf/2301.00006"
                  fileName="user-manual.pdf"
                  initialPage={2}
                  height="400px"
                />
              </Card>
            </div>
          ),
          code: `<PDFViewer 
  url="/manuals/user-manual.pdf"
  fileName="user-manual.pdf"
  initialPage={2}
  showDownload={true}
/>`,
        },
      ]}
    />
  );
}
