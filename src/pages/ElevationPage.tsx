import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

export function ElevationPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-2xl font-medium tracking-tight">Elevation & Shadows</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          System elevation styles designed for depth and hierarchy, adapted for light and dark modes.
        </p>
      </div>

      <Separator />

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Elevation Levels</h2>
          <p className="text-muted-foreground">
            Four levels of elevation for different UI contexts. Shadows are tinted with the brand color in light mode.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-muted/30 rounded-xl border border-dashed">
          {/* Level 1 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-32 w-32 bg-card rounded-xl flex items-center justify-center shadow-elevation-1 transition-all hover:scale-105 duration-300">
              <span className="font-medium">Level 1</span>
            </div>
            <div className="text-center space-y-1">
              <Badge variant="outline">shadow-elevation-1</Badge>
              <p className="text-xs text-muted-foreground">Cards, listed items</p>
            </div>
          </div>

          {/* Level 2 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-32 w-32 bg-card rounded-xl flex items-center justify-center shadow-elevation-2 transition-all hover:scale-105 duration-300">
              <span className="font-medium">Level 2</span>
            </div>
            <div className="text-center space-y-1">
              <Badge variant="outline">shadow-elevation-2</Badge>
              <p className="text-xs text-muted-foreground">Dropdowns, popovers</p>
            </div>
          </div>

          {/* Level 3 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-32 w-32 bg-card rounded-xl flex items-center justify-center shadow-elevation-3 transition-all hover:scale-105 duration-300">
              <span className="font-medium">Level 3</span>
            </div>
            <div className="text-center space-y-1">
              <Badge variant="outline">shadow-elevation-3</Badge>
              <p className="text-xs text-muted-foreground">Modals, drawers</p>
            </div>
          </div>

          {/* Level 4 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-32 w-32 bg-card rounded-xl flex items-center justify-center shadow-elevation-4 transition-all hover:scale-105 duration-300">
              <span className="font-medium">Level 4</span>
            </div>
            <div className="text-center space-y-1">
              <Badge variant="outline">shadow-elevation-4</Badge>
              <p className="text-xs text-muted-foreground">Alerts, sticky elements</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Interactive Examples</h2>
          <p className="text-muted-foreground">
            How elevation behaves on interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-elevation-1 hover:shadow-elevation-3 transition-shadow duration-300 cursor-pointer border-none">
            <CardHeader>
              <CardTitle>Hover Elevation</CardTitle>
              <CardDescription>Hover over this card</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This card starts at Level 1 and lifts to Level 3 on hover, providing a tactile feel.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elevation-2 border-none">
            <CardHeader>
              <CardTitle>Static Elevation</CardTitle>
              <CardDescription>Always elevated</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This card stays at Level 2, useful for highlighting featured content.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Color Tinting</h2>
          <p className="text-muted-foreground">
            In light mode, shadows use a subtle <span className="text-secondary font-bold">#1C2D3A</span> tint instead of pure black.
          </p>
        </div>
        
        <div className="flex gap-8 p-8 bg-white rounded-xl border items-center justify-center">
             <div className="h-24 w-24 bg-white rounded-lg shadow-elevation-3 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Tinted Shadow</span>
             </div>
        </div>
      </section>
    </div>
  );
}
