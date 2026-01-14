import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "../ui/command";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Calendar, Mail, Settings, User } from "lucide-react";

export function CommandPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Command</h2>
          <Badge>Navigation</Badge>
        </div>
        <p className="text-muted-foreground">
          Fast, composable, unstyled command menu for React
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Command Menu</CardTitle>
          <CardDescription>Searchable command palette</CardDescription>
        </CardHeader>
        <CardContent>
          <Command className="rounded-lg border">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CardContent>
      </Card>
    </div>
  );
}
