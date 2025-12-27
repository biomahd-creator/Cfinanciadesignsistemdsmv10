import { ComponentShowcase } from "../ui/component-showcase";
import { BottomSheet } from "../advanced/BottomSheet";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { Share2, Filter, MapPin, Calendar } from "lucide-react";

export function BottomSheetPage() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <ComponentShowcase
      title="Bottom Sheet"
      description="A mobile-friendly overlay panel that slides up from the bottom of the screen. Perfect for forms, filters, menus, and additional content without leaving the current context."
      category="Mobile Components"
      preview={
        <div className="flex flex-wrap gap-4 w-full">
          <Button onClick={() => setIsOpen1(true)}>
            <Share2 className="w-4 h-4 mr-2" />
            Share Options
          </Button>
          <BottomSheet 
            isOpen={isOpen1} 
            onClose={() => setIsOpen1(false)}
            title="Share this page"
          >
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Share via Email
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Share on Social Media
              </Button>
            </div>
          </BottomSheet>

          <Button onClick={() => setIsOpen2(true)}>
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <BottomSheet 
            isOpen={isOpen2} 
            onClose={() => setIsOpen2(false)}
            title="Filter Results"
          >
            <div className="space-y-4">
              <div>
                <Label>Price Range</Label>
                <div className="flex gap-2 mt-2">
                  <Input placeholder="Min" type="number" />
                  <Input placeholder="Max" type="number" />
                </div>
              </div>
              <div>
                <Label>Category</Label>
                <select className="w-full mt-2 p-2 border rounded-md">
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Home & Garden</option>
                </select>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </div>
          </BottomSheet>

          <Button onClick={() => setIsOpen3(true)}>
            <MapPin className="w-4 h-4 mr-2" />
            Location
          </Button>
          <BottomSheet 
            isOpen={isOpen3} 
            onClose={() => setIsOpen3(false)}
            title="Select Location"
          >
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                Use Current Location
              </Button>
              <div>
                <Label>Search Location</Label>
                <Input placeholder="Enter city or address" className="mt-2" />
              </div>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground mb-2">Recent Locations</p>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">New York, NY</Button>
                  <Button variant="ghost" className="w-full justify-start">Los Angeles, CA</Button>
                  <Button variant="ghost" className="w-full justify-start">Chicago, IL</Button>
                </div>
              </div>
            </div>
          </BottomSheet>
        </div>
      }
      code={`import { BottomSheet } from "@/components/advanced/BottomSheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Example() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Bottom Sheet
      </Button>
      
      <BottomSheet 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Bottom Sheet Title"
      >
        <div className="space-y-4">
          <p>Bottom sheet content goes here</p>
          <Button>Action Button</Button>
        </div>
      </BottomSheet>
    </>
  );
}`}
      usage="Bottom Sheets are ideal for mobile interfaces where you need to present additional options, forms, or information without navigating away. They maintain context while providing a focused interaction area."
      usageCode={`import { BottomSheet } from "@/components/advanced/BottomSheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function FilterPanel() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Show Filters
      </Button>
      
      <BottomSheet 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Filter Options"
      >
        <div className="space-y-4">
          <div>
            <Label>Category</Label>
            <select className="w-full mt-2 p-2 border rounded-md">
              <option>All</option>
              <option>Active</option>
              <option>Archived</option>
            </select>
          </div>
          <Button className="w-full" onClick={() => setIsOpen(false)}>
            Apply
          </Button>
        </div>
      </BottomSheet>
    </>
  );
}`}
      props={[
        {
          name: "isOpen",
          type: "boolean",
          default: "false",
          description: "Controls the visibility of the bottom sheet",
          required: true,
        },
        {
          name: "onClose",
          type: "() => void",
          default: "undefined",
          description: "Callback when bottom sheet should close",
          required: true,
        },
        {
          name: "title",
          type: "string",
          default: '""',
          description: "Title displayed at the top of the sheet",
          required: false,
        },
        {
          name: "children",
          type: "ReactNode",
          default: "undefined",
          description: "Content to display in the bottom sheet",
          required: true,
        },
        {
          name: "snapPoints",
          type: "number[]",
          default: "[300, 600]",
          description: "Height snap points in pixels",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Quick Actions Menu",
          description: "Common actions presented in a bottom sheet",
          preview: (
            <div>
              <Button onClick={() => setIsOpen1(true)}>
                Quick Actions
              </Button>
              <BottomSheet 
                isOpen={isOpen1} 
                onClose={() => setIsOpen1(false)}
                title="Quick Actions"
              >
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <MapPin className="w-4 h-4 mr-2" />
                    Add Location
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-destructive">
                    Delete
                  </Button>
                </div>
              </BottomSheet>
            </div>
          ),
          code: `<BottomSheet isOpen={isOpen} onClose={onClose} title="Quick Actions">
  <div className="space-y-2">
    <Button variant="ghost" className="w-full justify-start">Share</Button>
    <Button variant="ghost" className="w-full justify-start">Schedule</Button>
    <Button variant="ghost" className="w-full justify-start">Add Location</Button>
  </div>
</BottomSheet>`,
        },
        {
          title: "Form Input Sheet",
          description: "Bottom sheet with form fields for data entry",
          preview: (
            <div>
              <Button onClick={() => setIsOpen2(true)}>
                Add New Item
              </Button>
              <BottomSheet 
                isOpen={isOpen2} 
                onClose={() => setIsOpen2(false)}
                title="Add New Item"
              >
                <div className="space-y-4">
                  <div>
                    <Label>Item Name</Label>
                    <Input placeholder="Enter name" className="mt-2" />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <textarea 
                      className="w-full mt-2 p-2 border rounded-md" 
                      rows={3}
                      placeholder="Enter description"
                    />
                  </div>
                  <div>
                    <Label>Price</Label>
                    <Input type="number" placeholder="0.00" className="mt-2" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={() => setIsOpen2(false)}>
                      Cancel
                    </Button>
                    <Button className="flex-1">
                      Save
                    </Button>
                  </div>
                </div>
              </BottomSheet>
            </div>
          ),
          code: `<BottomSheet isOpen={isOpen} onClose={onClose} title="Add New Item">
  <div className="space-y-4">
    <div>
      <Label>Item Name</Label>
      <Input placeholder="Enter name" />
    </div>
    <div>
      <Label>Description</Label>
      <textarea className="w-full p-2 border rounded-md" rows={3} />
    </div>
    <Button className="w-full">Save</Button>
  </div>
</BottomSheet>`,
        },
        {
          title: "Filter Panel",
          description: "Advanced filtering options in a bottom sheet",
          preview: (
            <div>
              <Button onClick={() => setIsOpen3(true)}>
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
              <BottomSheet 
                isOpen={isOpen3} 
                onClose={() => setIsOpen3(false)}
                title="Filter & Sort"
              >
                <div className="space-y-4">
                  <div>
                    <Label>Sort By</Label>
                    <select className="w-full mt-2 p-2 border rounded-md">
                      <option>Newest First</option>
                      <option>Oldest First</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>
                  </div>
                  <div>
                    <Label>Status</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Button variant="outline" size="sm">All</Button>
                      <Button variant="outline" size="sm">Active</Button>
                      <Button variant="outline" size="sm">Pending</Button>
                      <Button variant="outline" size="sm">Completed</Button>
                    </div>
                  </div>
                  <div>
                    <Label>Date Range</Label>
                    <div className="flex gap-2 mt-2">
                      <Input type="date" />
                      <Input type="date" />
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" className="flex-1">
                      Reset
                    </Button>
                    <Button className="flex-1">
                      Apply
                    </Button>
                  </div>
                </div>
              </BottomSheet>
            </div>
          ),
          code: `<BottomSheet isOpen={isOpen} onClose={onClose} title="Filter & Sort">
  <div className="space-y-4">
    <div>
      <Label>Sort By</Label>
      <select className="w-full mt-2 p-2 border rounded-md">
        <option>Newest First</option>
        <option>Price: Low to High</option>
      </select>
    </div>
    <Button className="w-full">Apply</Button>
  </div>
</BottomSheet>`,
        },
        {
          title: "Settings Sheet",
          description: "App settings in a scrollable bottom sheet",
          preview: (
            <div>
              <Button onClick={() => setIsOpen1(true)}>
                Settings
              </Button>
              <BottomSheet 
                isOpen={isOpen1} 
                onClose={() => setIsOpen1(false)}
                title="Settings"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p>Push Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates and alerts</p>
                    </div>
                    <input type="checkbox" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p>Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Weekly digest emails</p>
                    </div>
                    <input type="checkbox" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p>Dark Mode</p>
                      <p className="text-sm text-muted-foreground">Use dark theme</p>
                    </div>
                    <input type="checkbox" />
                  </div>
                  <div>
                    <Label>Language</Label>
                    <select className="w-full mt-2 p-2 border rounded-md">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                  <Button variant="destructive" className="w-full">
                    Sign Out
                  </Button>
                </div>
              </BottomSheet>
            </div>
          ),
          code: `<BottomSheet isOpen={isOpen} onClose={onClose} title="Settings">
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div>
        <p>Push Notifications</p>
        <p className="text-sm text-muted-foreground">Receive updates</p>
      </div>
      <input type="checkbox" defaultChecked />
    </div>
    {/* More settings */}
  </div>
</BottomSheet>`,
        },
      ]}
    />
  );
}
