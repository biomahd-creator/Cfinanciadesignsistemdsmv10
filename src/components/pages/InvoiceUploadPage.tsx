import React, { useState } from "react";
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  X,
  Plus,
  ArrowRight,
  FileCode
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Badge } from "../ui/badge";
import { FileUploader } from "../advanced/FileUploader";

export function InvoiceUploadPage() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("files");
  const [cufes, setCufes] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCufeSubmit = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setUploadStatus("success");
      // Reset after 3 seconds
      setTimeout(() => {
        setUploadStatus("idle");
        setOpen(false);
        setCufes("");
      }, 2000);
    }, 1500);
  };

  const handleFileUpload = (files: File[]) => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setUploadStatus("success");
      setTimeout(() => {
        setUploadStatus("idle");
        setOpen(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="container mx-auto py-10 space-y-8 max-w-5xl">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-primary border-primary">New Feature</Badge>
          <span className="text-sm text-muted-foreground">Patterns / Invoices</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Invoice Upload</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Unified module for uploading invoices via XML/PDF files or manual entry of CUFE/CUDE codes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Bulk Upload</CardTitle>
            <CardDescription>
              Start the invoice upload process for factoring or confirming.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/30 p-4 rounded-lg border border-dashed flex flex-col items-center justify-center h-48 gap-4 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-medium">Upload new invoices</p>
                <p className="text-sm text-muted-foreground">Supports XML, PDF and CUFE codes</p>
              </div>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    New Upload
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col p-0 gap-0">
                  <DialogHeader className="p-6 pb-2">
                    <DialogTitle>Upload Invoices</DialogTitle>
                    <DialogDescription>
                      Select the upload method for your electronic documents.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="flex-1 overflow-y-auto p-6 pt-2">
                    <Tabs defaultValue="files" value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="files" className="gap-2">
                          <FileText className="h-4 w-4" />
                          Files
                        </TabsTrigger>
                        <TabsTrigger value="cufes" className="gap-2">
                          <FileCode className="h-4 w-4" />
                          CUFE Codes
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="files" className="mt-0 space-y-4">
                        <Alert className="bg-blue-50/50 border-blue-200 text-blue-800 dark:bg-blue-950/20 dark:border-blue-800 dark:text-blue-300">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Recommendation</AlertTitle>
                          <AlertDescription>
                            Upload XML files for faster and more accurate processing.
                          </AlertDescription>
                        </Alert>
                        
                        <div className="space-y-4">
                          <FileUploader 
                            maxFiles={10} 
                            maxSize={10 * 1024 * 1024} // 10MB
                            accept={["application/pdf", "text/xml", "application/xml"]}
                            onUpload={handleFileUpload}
                          />
                        </div>
                      </TabsContent>

                      <TabsContent value="cufes" className="mt-0 space-y-4">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cufes">Enter CUFE / CUDE codes</Label>
                            <Textarea
                              id="cufes"
                              placeholder="Paste codes here (one per line or comma separated)...&#10;cufe1...&#10;cufe2..."
                              className="min-h-[200px] font-mono text-xs leading-relaxed resize-none"
                              value={cufes}
                              onChange={(e) => setCufes(e.target.value)}
                            />
                            <p className="text-xs text-muted-foreground flex justify-between">
                              <span>Supports multiple codes</span>
                              <span>{cufes.split(/\n|,/).filter(s => s.trim().length > 0).length} codes detected</span>
                            </p>
                          </div>

                          <Alert>
                            <CheckCircle2 className="h-4 w-4" />
                            <AlertTitle>Automatic Validation</AlertTitle>
                            <AlertDescription>
                              The system will validate the existence and status of each invoice in the DIAN.
                            </AlertDescription>
                          </Alert>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>

                  <DialogFooter className="p-6 pt-2 border-t bg-muted/20">
                    <div className="flex w-full justify-between items-center">
                       {uploadStatus === "success" ? (
                         <div className="flex items-center gap-2 text-green-600 font-medium animate-in fade-in slide-in-from-bottom-2">
                           <CheckCircle2 className="h-5 w-5" />
                           <span>Upload successful</span>
                         </div>
                       ) : (
                         <span className="text-xs text-muted-foreground">
                           {activeTab === "files" ? "Formats: PDF, XML" : "Real-time DIAN validation"}
                         </span>
                       )}
                       
                       <div className="flex gap-2">
                         <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                         {activeTab === "cufes" && (
                           <Button 
                             onClick={handleCufeSubmit} 
                             disabled={!cufes.trim() || isProcessing}
                           >
                             {isProcessing ? "Processing..." : "Upload Codes"}
                           </Button>
                         )}
                         {/* Button for files is handled inside FileUploader, but we could override or hide it there to put it here if we wanted consistent footer actions. 
                             For now, let's leave the FileUploader's own button or just show a close button here. 
                             Actually FileUploader has its own submit. So we only need the CUFEs button here. 
                         */}
                       </div>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Uploads</CardTitle>
            <CardDescription>
              Recent history of processed invoices.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-lg border bg-muted/10 hover:bg-muted/30 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm truncate">Invoice Batch #{202400 + i}</p>
                      <span className="text-xs text-muted-foreground">{i * 2}h ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Imported via {i === 2 ? "Manual CUFE" : "XML File"} • 15 documents
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}