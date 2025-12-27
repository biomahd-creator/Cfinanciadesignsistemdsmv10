import { ComponentShowcase } from "../ui/component-showcase";
import { SignaturePad } from "../advanced/SignaturePad";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function SignaturePadPage() {
  const [savedSignature, setSavedSignature] = useState<string>("");

  const handleSave = (dataUrl: string) => {
    setSavedSignature(dataUrl);
  };

  return (
    <ComponentShowcase
      title="Signature Pad"
      description="Canvas-based signature capture with drawing controls and export"
      category="Advanced Form Inputs"
      preview={
        <div className="w-full">
          <SignaturePad onSave={handleSave} />
        </div>
      }
      code={`import { SignaturePad } from "../advanced/SignaturePad";

function Example() {
  const handleSave = (dataUrl: string) => {
    console.log("Signature saved:", dataUrl);
  };

  return <SignaturePad onSave={handleSave} />;
}`}
      usage="Signature Pad provides a canvas-based drawing surface for capturing signatures. Supports touch and mouse input, pen width control, color selection, undo functionality, and PNG export. Perfect for contracts, approvals, and legal documents."
      usageCode={`import { SignaturePad } from "../advanced/SignaturePad";
import { useState } from "react";

function ContractSignature() {
  const [signature, setSignature] = useState<string>("");

  const handleSignatureSave = (dataUrl: string) => {
    setSignature(dataUrl);
    // Upload to server
    uploadSignature(dataUrl);
  };

  return (
    <div>
      <h3>Please sign below:</h3>
      <SignaturePad
        width={600}
        height={200}
        onSave={handleSignatureSave}
      />
      {signature && (
        <div>
          <p>Your signature:</p>
          <img src={signature} alt="Signature" />
        </div>
      )}
    </div>
  );
}`}
      props={[
        {
          name: "width",
          type: "number",
          default: "500",
          description: "Canvas width in pixels",
          required: false,
        },
        {
          name: "height",
          type: "number",
          default: "200",
          description: "Canvas height in pixels",
          required: false,
        },
        {
          name: "penColor",
          type: "string",
          default: '"#000000"',
          description: "Default pen color (hex)",
          required: false,
        },
        {
          name: "backgroundColor",
          type: "string",
          default: '"#ffffff"',
          description: "Canvas background color (hex)",
          required: false,
        },
        {
          name: "onSave",
          type: "(dataUrl: string) => void",
          default: "undefined",
          description: "Callback with signature image as base64 data URL",
          required: false,
        },
        {
          name: "className",
          type: "string",
          default: "undefined",
          description: "Additional CSS classes",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Standard Signature",
          description: "Default signature pad for contracts",
          preview: (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sign Contract</CardTitle>
              </CardHeader>
              <CardContent>
                <SignaturePad width={500} height={150} onSave={handleSave} />
              </CardContent>
            </Card>
          ),
          code: `<SignaturePad 
  width={500} 
  height={150} 
  onSave={handleSave} 
/>`,
        },
        {
          title: "Compact Signature",
          description: "Smaller signature pad for forms",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Sign here:</p>
                  <SignaturePad width={400} height={120} onSave={handleSave} />
                </div>
              </CardContent>
            </Card>
          ),
          code: `<SignaturePad 
  width={400} 
  height={120} 
/>`,
        },
        {
          title: "With Saved Preview",
          description: "Show signature after saving",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <SignaturePad width={450} height={130} onSave={handleSave} />
                  
                  {savedSignature && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Saved Signature</Badge>
                      </div>
                      <img
                        src={savedSignature}
                        alt="Saved signature"
                        className="border rounded-lg max-w-full"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ),
          code: `const [savedSignature, setSavedSignature] = useState("");

<SignaturePad onSave={setSavedSignature} />

{savedSignature && (
  <img src={savedSignature} alt="Saved signature" />
)}`,
        },
        {
          title: "Legal Document",
          description: "Full-width signature for important documents",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">
                      I hereby agree to the terms and conditions stated above.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      By signing below, you confirm your acceptance.
                    </p>
                  </div>
                  <SignaturePad width={600} height={180} onSave={handleSave} />
                  <p className="text-xs text-muted-foreground">
                    Date: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ),
          code: `<div>
  <p>I hereby agree to the terms and conditions.</p>
  <SignaturePad width={600} height={180} onSave={handleSave} />
  <p>Date: {new Date().toLocaleDateString()}</p>
</div>`,
        },
      ]}
    />
  );
}
