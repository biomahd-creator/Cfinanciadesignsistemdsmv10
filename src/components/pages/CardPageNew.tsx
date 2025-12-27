import { ComponentShowcase } from "../ui/component-showcase";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Bell, Heart, Share2, Star, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function CardPageNew() {
  return (
    <ComponentShowcase
      title="Card"
      description="Displays a card with header, content, and footer."
      category="Data Display"
      
      // Main Preview
      preview={
        <div className="grid gap-6 md:grid-cols-2 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Card content goes here. You can put anything you want inside a card.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card with Footer</CardTitle>
              <CardDescription>Complete card example</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This card includes a footer with action buttons.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Continue</Button>
            </CardFooter>
          </Card>
        </div>
      }
      
      // Main Code
      code={`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Continue</Button>
      </CardFooter>
    </Card>
  );
}`}
      
      // Usage
      usage="Import Card components from @/components/ui/card and compose them as needed. You can use CardHeader, CardContent, CardFooter, CardTitle, and CardDescription to structure your content."
      usageCode={`import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Title</CardTitle>
      </CardHeader>
      <CardContent>
        My content
      </CardContent>
    </Card>
  );
}`}
      
      // Props Documentation
      props={[
        {
          name: "className",
          type: "string",
          description: "Additional CSS classes for the card container",
        },
        {
          name: "children",
          type: "ReactNode",
          description: "Content of the card (CardHeader, CardContent, CardFooter, etc.)",
          required: true,
        },
      ]}
      
      // Examples
      examples={[
        {
          title: "Basic Card",
          description: "Simple card with only header and content",
          preview: (
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get started by creating a new project and deploying it to production in minutes.
                </p>
              </CardContent>
            </Card>
          ),
          code: `<Card>
  <CardHeader>
    <CardTitle>Getting Started</CardTitle>
    <CardDescription>
      Deploy your new project in one-click.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>Get started by creating a new project...</p>
  </CardContent>
</Card>`
        },
        {
          title: "Card with Actions",
          description: "Card with action buttons in the footer",
          preview: (
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Confirm Action</CardTitle>
                <CardDescription>
                  Are you sure you want to proceed?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Delete</Button>
              </CardFooter>
            </Card>
          ),
          code: `<Card>
  <CardHeader>
    <CardTitle>Confirm Action</CardTitle>
    <CardDescription>Are you sure?</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This action cannot be undone...</p>
  </CardContent>
  <CardFooter className="flex justify-end gap-2">
    <Button variant="outline">Cancel</Button>
    <Button variant="destructive">Delete</Button>
  </CardFooter>
</Card>`
        },
        {
          title: "Card Grid Layout",
          description: "Multiple cards in a responsive grid",
          preview: (
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Active Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2,350</div>
                  <p className="text-xs text-muted-foreground">
                    +12.5% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
          ),
          code: `<div className="grid gap-4 md:grid-cols-3">
  <Card>
    <CardHeader className="pb-3">
      <CardTitle className="text-sm">Total Revenue</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">$45,231.89</div>
      <p className="text-xs text-muted-foreground">
        +20.1% from last month
      </p>
    </CardContent>
  </Card>
  {/* More cards... */}
</div>`
        },
        {
          title: "Card with Badge",
          description: "Card with badge in the header",
          preview: (
            <Card className="max-w-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>New Feature</CardTitle>
                  <Badge variant="secondary">Beta</Badge>
                </div>
                <CardDescription>
                  Try out our latest experimental feature
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This feature is currently in beta. We'd love to hear your feedback!
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Try it now</Button>
              </CardFooter>
            </Card>
          ),
          code: `<Card>
  <CardHeader>
    <div className="flex items-center justify-between">
      <CardTitle>New Feature</CardTitle>
      <Badge variant="secondary">Beta</Badge>
    </div>
    <CardDescription>Try out our latest feature</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This feature is currently in beta...</p>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Try it now</Button>
  </CardFooter>
</Card>`
        },
        {
          title: "Card with Icon",
          description: "Card with decorative icon",
          preview: (
            <div className="grid gap-4 md:grid-cols-2 max-w-2xl">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Growth</CardTitle>
                      <CardDescription>Last 30 days</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+24.5%</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Bell className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>Unread messages</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                </CardContent>
              </Card>
            </div>
          ),
          code: `<Card>
  <CardHeader>
    <div className="flex items-center gap-3">
      <div className="p-2 bg-primary/10 rounded-lg">
        <TrendingUp className="h-5 w-5 text-primary" />
      </div>
      <div>
        <CardTitle>Growth</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">+24.5%</div>
  </CardContent>
</Card>`
        },
        {
          title: "Interactive Card",
          description: "Clickable card with hover state",
          preview: (
            <Card className="max-w-md cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">John Doe</CardTitle>
                    <CardDescription>@johndoe</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Just deployed my new app to production! 🚀
                </p>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="ghost" size="sm">
                  <Heart className="mr-2 h-4 w-4" />
                  Like
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </CardFooter>
            </Card>
          ),
          code: `<Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]">
  <CardHeader>
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="..." />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <CardTitle className="text-base">John Doe</CardTitle>
        <CardDescription>@johndoe</CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <p>Just deployed my new app! 🚀</p>
  </CardContent>
  <CardFooter className="flex gap-4">
    <Button variant="ghost" size="sm">
      <Heart className="mr-2 h-4 w-4" />
      Like
    </Button>
  </CardFooter>
</Card>`
        },
        {
          title: "Nested Cards",
          description: "Nested cards for complex layouts",
          preview: (
            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle>Dashboard Overview</CardTitle>
                <CardDescription>Your key metrics at a glance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl font-bold">$12,450</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl font-bold">245</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          ),
          code: `<Card>
  <CardHeader>
    <CardTitle>Dashboard Overview</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="bg-muted/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-bold">$12,450</div>
        </CardContent>
      </Card>
    </div>
  </CardContent>
</Card>`
        },
        {
          title: "Card with Custom Styling",
          description: "Card with custom borders and colors",
          preview: (
            <div className="grid gap-4 md:grid-cols-2 max-w-2xl">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-primary">Success</CardTitle>
                  <CardDescription>Operation completed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your changes have been saved successfully.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-destructive">
                <CardHeader>
                  <CardTitle className="text-destructive">Error</CardTitle>
                  <CardDescription>Operation failed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    An error occurred. Please try again.
                  </p>
                </CardContent>
              </Card>
            </div>
          ),
          code: `<Card className="border-l-4 border-l-primary">
  <CardHeader>
    <CardTitle className="text-primary">Success</CardTitle>
    <CardDescription>Operation completed</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your changes have been saved successfully.</p>
  </CardContent>
</Card>`
        }
      ]}
    />
  );
}
