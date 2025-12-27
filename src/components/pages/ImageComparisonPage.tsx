import { ComponentShowcase } from "../ui/component-showcase";
import { ImageComparison } from "../advanced/ImageComparison";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

export function ImageComparisonPage() {
  return (
    <ComponentShowcase
      title="Image Comparison"
      description="An interactive slider to compare two images side by side. Perfect for before/after showcases, A/B testing results, design comparisons, and visual change demonstrations."
      category="Media Components"
      preview={
        <div className="space-y-6 w-full">
          <Card className="p-6">
            <div className="mb-4">
              <h3 className="text-lg mb-2">Photo Enhancement</h3>
              <p className="text-sm text-muted-foreground">Drag the slider to see the difference</p>
            </div>
            <ImageComparison 
              beforeImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=50"
              afterImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=100"
              beforeLabel="Before"
              afterLabel="After"
            />
          </Card>
        </div>
      }
      code={`import { ImageComparison } from "@/components/advanced/ImageComparison";

<ImageComparison 
  beforeImage="/before.jpg"
  afterImage="/after.jpg"
  beforeLabel="Before"
  afterLabel="After"
/>`}
      usage="Image Comparison is ideal for showcasing improvements, changes, or differences between two versions of an image. Common use cases include photo editing, property renovations, design iterations, and A/B testing results."
      usageCode={`import { ImageComparison } from "@/components/advanced/ImageComparison";
import { Card } from "@/components/ui/card";

export function DesignShowcase() {
  return (
    <Card className="p-6">
      <h3>Website Redesign</h3>
      <p className="text-sm text-muted-foreground mb-4">
        See how we modernized the interface
      </p>
      <ImageComparison 
        beforeImage="/designs/old-design.jpg"
        afterImage="/designs/new-design.jpg"
        beforeLabel="Old Design"
        afterLabel="New Design"
      />
    </Card>
  );
}`}
      props={[
        {
          name: "beforeImage",
          type: "string",
          default: '""',
          description: "URL of the before/original image",
          required: true,
        },
        {
          name: "afterImage",
          type: "string",
          default: '""',
          description: "URL of the after/modified image",
          required: true,
        },
        {
          name: "beforeLabel",
          type: "string",
          default: '"Before"',
          description: "Label for the before image",
          required: false,
        },
        {
          name: "afterLabel",
          type: "string",
          default: '"After"',
          description: "Label for the after image",
          required: false,
        },
        {
          name: "initialPosition",
          type: "number",
          default: "50",
          description: "Initial slider position (0-100)",
          required: false,
        },
        {
          name: "height",
          type: "string",
          default: '"400px"',
          description: "Component height (CSS value)",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Photo Editing Results",
          description: "Showcase professional photo retouching",
          preview: (
            <Card className="p-6 w-full">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg">Professional Photo Retouching</h3>
                  <p className="text-sm text-muted-foreground">Color correction and enhancement</p>
                </div>
                <Badge>Premium Edit</Badge>
              </div>
              <ImageComparison 
                beforeImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=50"
                afterImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=100"
                beforeLabel="Original"
                afterLabel="Enhanced"
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="p-3 bg-muted rounded-lg text-center">
                  <p className="text-muted-foreground mb-1">Brightness</p>
                  <p>+15%</p>
                </div>
                <div className="p-3 bg-muted rounded-lg text-center">
                  <p className="text-muted-foreground mb-1">Contrast</p>
                  <p>+20%</p>
                </div>
                <div className="p-3 bg-muted rounded-lg text-center">
                  <p className="text-muted-foreground mb-1">Saturation</p>
                  <p>+10%</p>
                </div>
              </div>
            </Card>
          ),
          code: `<ImageComparison 
  beforeImage="/photos/original.jpg"
  afterImage="/photos/enhanced.jpg"
  beforeLabel="Original"
  afterLabel="Enhanced"
/>`,
        },
        {
          title: "Home Renovation",
          description: "Property transformation before and after",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg">Kitchen Renovation</h3>
                  <Badge variant="outline">Completed 2024</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Modern makeover with new appliances and fixtures</p>
              </div>
              <ImageComparison 
                beforeImage="https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800"
                afterImage="https://images.unsplash.com/photo-1556911073-52527ac43761?w=800"
                beforeLabel="2023"
                afterLabel="2024"
                height="300px"
              />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Investment</p>
                  <p className="text-xl">$45,000</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="text-xl">6 weeks</p>
                </div>
              </div>
            </Card>
          ),
          code: `<ImageComparison 
  beforeImage="/renovations/before.jpg"
  afterImage="/renovations/after.jpg"
  beforeLabel="2023"
  afterLabel="2024"
  height="300px"
/>`,
        },
        {
          title: "UI/UX Redesign",
          description: "Website interface improvement comparison",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <Badge className="mb-2">Case Study</Badge>
                <h3 className="text-lg mb-1">E-commerce Platform Redesign</h3>
                <p className="text-sm text-muted-foreground">Improved conversion rate by 45%</p>
              </div>
              <ImageComparison 
                beforeImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                afterImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                beforeLabel="Old Design"
                afterLabel="New Design"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline">Modern UI</Badge>
                <Badge variant="outline">Mobile First</Badge>
                <Badge variant="outline">Accessibility</Badge>
                <Badge variant="outline">Performance</Badge>
              </div>
            </Card>
          ),
          code: `<ImageComparison 
  beforeImage="/designs/old-ui.jpg"
  afterImage="/designs/new-ui.jpg"
  beforeLabel="Old Design"
  afterLabel="New Design"
/>`,
        },
        {
          title: "Product Comparison",
          description: "Compare different product versions",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <h3 className="text-lg mb-2">Model Comparison</h3>
                <p className="text-sm text-muted-foreground">Standard vs Pro Edition</p>
              </div>
              <ImageComparison 
                beforeImage="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
                afterImage="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800"
                beforeLabel="Standard"
                afterLabel="Pro"
                initialPosition={50}
              />
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Standard Edition</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Basic features</li>
                    <li>• 1-year warranty</li>
                    <li>• $199</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm mb-2">Pro Edition</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Advanced features</li>
                    <li>• 3-year warranty</li>
                    <li>• $299</li>
                  </ul>
                </div>
              </div>
            </Card>
          ),
          code: `<ImageComparison 
  beforeImage="/products/standard.jpg"
  afterImage="/products/pro.jpg"
  beforeLabel="Standard"
  afterLabel="Pro"
  initialPosition={50}
/>`,
        },
        {
          title: "Weather Conditions",
          description: "Day vs night or seasonal comparison",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <h3 className="text-lg mb-2">Central Park Through Seasons</h3>
                <p className="text-sm text-muted-foreground">Summer to winter transformation</p>
              </div>
              <ImageComparison 
                beforeImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                afterImage="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800"
                beforeLabel="Summer"
                afterLabel="Winter"
                height="350px"
              />
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg">
                  <p className="mb-1">☀️ Summer</p>
                  <p className="text-muted-foreground">Warm, lush greenery</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                  <p className="mb-1">❄️ Winter</p>
                  <p className="text-muted-foreground">Cold, snowy landscape</p>
                </div>
              </div>
            </Card>
          ),
          code: `<ImageComparison 
  beforeImage="/locations/summer.jpg"
  afterImage="/locations/winter.jpg"
  beforeLabel="Summer"
  afterLabel="Winter"
  height="350px"
/>`,
        },
      ]}
    />
  );
}
