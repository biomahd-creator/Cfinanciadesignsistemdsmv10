import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage as BreadcrumbPageItem, 
  BreadcrumbSeparator 
} from "../ui/breadcrumb";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export function BreadcrumbPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Breadcrumb</h2>
          <Badge>Navigation</Badge>
        </div>
        <p className="text-muted-foreground">
          Displays the path to the current resource using a hierarchy of links
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Simple Breadcrumb</CardTitle>
          <CardDescription>Basic navigation breadcrumb</CardDescription>
        </CardHeader>
        <CardContent>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPageItem>Breadcrumb</BreadcrumbPageItem>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multi-level</CardTitle>
          <CardDescription>Breadcrumb with multiple levels</CardDescription>
        </CardHeader>
        <CardContent>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products/electronics">Electronics</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPageItem>Laptops</BreadcrumbPageItem>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </CardContent>
      </Card>
    </div>
  );
}