import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export function AvatarPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Avatar</h2>
          <Badge>Data Display</Badge>
        </div>
        <p className="text-muted-foreground">
          An image element with a fallback for representing a user or entity
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Default Avatar</CardTitle>
          <CardDescription>Avatar with image and fallback</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>XY</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Different Sizes</CardTitle>
          <CardDescription>Avatars in various sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">SM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar className="h-14 w-14">
              <AvatarFallback className="text-lg">LG</AvatarFallback>
            </Avatar>
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-xl">XL</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Avatar Group</CardTitle>
          <CardDescription>Multiple avatars in a group</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex -space-x-4">
            <Avatar className="border-2 border-background">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarFallback>SP</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarFallback>+5</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
