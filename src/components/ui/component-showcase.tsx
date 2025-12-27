import { ReactNode, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { Badge } from "./badge";
import { Separator } from "./separator";
import { CodeBlock } from "./code-block";
import { Button } from "./button";
import { Copy, Check } from "lucide-react";

interface ComponentShowcaseProps {
  title: string;
  description: string;
  category?: string;
  preview: ReactNode;
  code: string;
  usage?: string;
  usageCode?: string;
  props?: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
    required?: boolean;
  }>;
  examples?: Array<{
    title: string;
    description?: string;
    preview: ReactNode;
    code: string;
  }>;
}

export function ComponentShowcase({
  title,
  description,
  category,
  preview,
  code,
  usage,
  usageCode,
  props,
  examples,
}: ComponentShowcaseProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-4xl font-semibold">{title}</h2>
          {category && (
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <Separator />

      {/* Main Preview & Code */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1.5">
            <CardTitle>Preview</CardTitle>
            <CardDescription>Vista previa interactiva del componente</CardDescription>
          </div>
          <div className="flex items-center gap-2">
             <Button
                variant="outline"
                size="sm"
                className="h-8 text-xs"
                onClick={handleCopyCode}
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-3 w-3" />
                    Copied Code
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-3 w-3" />
                    Copy Code
                  </>
                )}
              </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="space-y-4">
              <div className="relative group">
                <div className="flex items-center justify-center min-h-[200px] rounded-lg border bg-muted/20 p-8">
                  {preview}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="code" className="space-y-4">
              <CodeBlock code={code} filename={`${title.toLowerCase().replace(/\s+/g, '-')}.tsx`} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Usage */}
      {(usage || usageCode) && (
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>Cómo usar este componente en tu aplicación</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {usage && <p className="text-sm text-muted-foreground">{usage}</p>}
            {usageCode && <CodeBlock code={usageCode} filename="example.tsx" />}
          </CardContent>
        </Card>
      )}

      {/* Props API */}
      {props && props.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Props</CardTitle>
            <CardDescription>Propiedades disponibles para este componente</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-sm">Prop</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Default</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {props.map((prop) => (
                    <tr key={prop.name} className="border-b">
                      <td className="py-3 px-4">
                        <code className="text-sm font-mono bg-muted px-1.5 py-0.5 rounded">
                          {prop.name}
                          {prop.required && <span className="text-red-500 ml-1">*</span>}
                        </code>
                      </td>
                      <td className="py-3 px-4">
                        <code className="text-sm font-mono text-muted-foreground">
                          {prop.type}
                        </code>
                      </td>
                      <td className="py-3 px-4">
                        {prop.default ? (
                          <code className="text-sm font-mono bg-muted px-1.5 py-0.5 rounded">
                            {prop.default}
                          </code>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        {prop.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Examples */}
      {examples && examples.length > 0 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Examples</h3>
            <p className="text-muted-foreground">Diferentes variaciones y casos de uso</p>
          </div>

          {examples.map((example, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{example.title}</CardTitle>
                {example.description && (
                  <CardDescription>{example.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>

                  <TabsContent value="preview" className="space-y-4">
                    <div className="flex items-center justify-center min-h-[150px] rounded-lg border bg-muted/20 p-6">
                      {example.preview}
                    </div>
                  </TabsContent>

                  <TabsContent value="code" className="space-y-4">
                    <CodeBlock 
                      code={example.code} 
                      filename={`${example.title.toLowerCase().replace(/\s+/g, '-')}.tsx`} 
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
