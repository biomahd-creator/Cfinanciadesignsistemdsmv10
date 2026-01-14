import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

export function TabsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Tabs</h2>
          <Badge>Navigation</Badge>
        </div>
        <p className="text-muted-foreground">
          A set of layered sections of content, known as tab panels
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Default Tabs</CardTitle>
          <CardDescription>Standard tabbed navigation</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-full">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="space-y-4 pt-4">
              <div className="space-y-2">
                <h4 className="font-medium">Account Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Manage your account settings and preferences here.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="password" className="space-y-4 pt-4">
              <div className="space-y-2">
                <h4 className="font-medium">Password Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Update your password and security settings.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4 pt-4">
              <div className="space-y-2">
                <h4 className="font-medium">Notification Preferences</h4>
                <p className="text-sm text-muted-foreground">
                  Configure how you receive notifications.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Full Width Tabs</CardTitle>
          <CardDescription>Tabs that span the entire width</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground">
                Overview content goes here with key metrics and information.
              </p>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground">
                Analytics data and visualizations would be displayed here.
              </p>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground">
                Generated reports and export options appear in this section.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
