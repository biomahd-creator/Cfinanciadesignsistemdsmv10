import { Card } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Progress } from "../ui/progress";
import { Skeleton } from "../ui/skeleton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal, TrendingUp, Users, DollarSign, ShoppingCart } from "lucide-react";

export function DataDisplaySection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Data Display</h2>
        <p className="text-sm text-muted-foreground">
          Componentes para mostrar y visualizar datos
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Table */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Table</h3>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>
                    <Badge>Active</Badge>
                  </TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell className="text-right">Admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Inactive</Badge>
                  </TableCell>
                  <TableCell>jane@example.com</TableCell>
                  <TableCell className="text-right">User</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mike Johnson</TableCell>
                  <TableCell>
                    <Badge>Active</Badge>
                  </TableCell>
                  <TableCell>mike@example.com</TableCell>
                  <TableCell className="text-right">Editor</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sarah Williams</TableCell>
                  <TableCell>
                    <Badge variant="outline">Pending</Badge>
                  </TableCell>
                  <TableCell>sarah@example.com</TableCell>
                  <TableCell className="text-right">Viewer</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Badge */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Badge</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </Card>

          {/* Badge with Icons */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Badge with Icons</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <TrendingUp className="mr-1 h-3 w-3" />
                Trending
              </Badge>
              <Badge variant="secondary">
                <Users className="mr-1 h-3 w-3" />
                Team
              </Badge>
              <Badge variant="outline">
                <ShoppingCart className="mr-1 h-3 w-3" />
                Cart
              </Badge>
              <Badge variant="destructive">
                <DollarSign className="mr-1 h-3 w-3" />
                Expired
              </Badge>
            </div>
          </Card>

          {/* Avatar */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Avatar</h3>
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>XY</AvatarFallback>
              </Avatar>
            </div>
          </Card>

          {/* Progress */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="text-xs mb-2">25% Complete</div>
                <Progress value={25} />
              </div>
              <div>
                <div className="text-xs mb-2">60% Complete</div>
                <Progress value={60} />
              </div>
              <div>
                <div className="text-xs mb-2">100% Complete</div>
                <Progress value={100} />
              </div>
            </div>
          </Card>

          {/* Skeleton */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Skeleton</h3>
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-20 w-full" />
            </div>
          </Card>
        </div>

        {/* Carousel */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Carousel</h3>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card className="p-8 border-2">
                  <div className="flex items-center justify-center h-40">
                    <div className="text-center">
                      <p className="text-4xl font-semibold mb-2">1</p>
                      <p className="text-sm text-muted-foreground">First Slide</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="p-8 border-2">
                  <div className="flex items-center justify-center h-40">
                    <div className="text-center">
                      <p className="text-4xl font-semibold mb-2">2</p>
                      <p className="text-sm text-muted-foreground">Second Slide</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="p-8 border-2">
                  <div className="flex items-center justify-center h-40">
                    <div className="text-center">
                      <p className="text-4xl font-semibold mb-2">3</p>
                      <p className="text-sm text-muted-foreground">Third Slide</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="p-8 border-2">
                  <div className="flex items-center justify-center h-40">
                    <div className="text-center">
                      <p className="text-4xl font-semibold mb-2">4</p>
                      <p className="text-sm text-muted-foreground">Fourth Slide</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="p-8 border-2">
                  <div className="flex items-center justify-center h-40">
                    <div className="text-center">
                      <p className="text-4xl font-semibold mb-2">5</p>
                      <p className="text-sm text-muted-foreground">Fifth Slide</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Card>

        {/* Carousel Multiple Items */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Carousel - Multiple Items</h3>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 border-2">
                    <div className="flex items-center justify-center h-24">
                      <p className="text-2xl font-semibold">Item {index + 1}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Card>
      </div>

      {/* COMPOSED PATTERNS */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Patrones Compuestos</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Card Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Stats Card</h3>
            <p className="text-xs text-muted-foreground mb-4">Card + Badge + Text</p>
            <div className="space-y-4">
              <Card className="p-6 border-2">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Total Revenue</p>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-semibold">$45,231</p>
                  <div className="flex items-center gap-2">
                    <Badge>+20.1%</Badge>
                    <p className="text-xs text-muted-foreground">from last month</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Active Users</p>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-semibold">2,350</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">+180</Badge>
                    <p className="text-xs text-muted-foreground">from last week</p>
                  </div>
                </div>
              </Card>
            </div>
          </Card>

          {/* KPI Grid Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">KPI Grid</h3>
            <p className="text-xs text-muted-foreground mb-4">Grid + Stats Cards</p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 border-2">
                <TrendingUp className="h-4 w-4 text-primary mb-2" />
                <p className="text-2xl font-semibold">12.5K</p>
                <p className="text-xs text-muted-foreground">Sales</p>
              </Card>
              <Card className="p-4 border-2">
                <Users className="h-4 w-4 text-primary mb-2" />
                <p className="text-2xl font-semibold">8.3K</p>
                <p className="text-xs text-muted-foreground">Users</p>
              </Card>
              <Card className="p-4 border-2">
                <ShoppingCart className="h-4 w-4 text-primary mb-2" />
                <p className="text-2xl font-semibold">942</p>
                <p className="text-xs text-muted-foreground">Orders</p>
              </Card>
              <Card className="p-4 border-2">
                <DollarSign className="h-4 w-4 text-primary mb-2" />
                <p className="text-2xl font-semibold">$89K</p>
                <p className="text-xs text-muted-foreground">Revenue</p>
              </Card>
            </div>
          </Card>

          {/* Table with Actions Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Table with Actions</h3>
            <p className="text-xs text-muted-foreground mb-4">Table + DropdownMenu</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>MacBook Pro</TableCell>
                  <TableCell>
                    <Badge>In Stock</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>iPhone 15</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Out of Stock</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
}