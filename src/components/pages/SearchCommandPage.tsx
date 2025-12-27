import { ComponentShowcase } from "../ui/component-showcase";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../ui/command";
import {
  Search,
  FileText,
  Users,
  Settings,
  Calculator,
  TrendingUp,
  DollarSign,
  Calendar,
  Home,
  BarChart3,
} from "lucide-react";
import { useState } from "react";

// Basic Command Palette
function CommandBasic() {
  return (
    <Command className="rounded-lg border shadow-md max-w-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Search Clients</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Create Invoice</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculate Costs</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

// Command with Dialog (Modal)
function CommandDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button onClick={() => setOpen(true)}>
          <Search className="mr-2 h-4 w-4" />
          Open Command Palette
        </Button>
        <Badge variant="outline" className="font-mono">
          ⌘K
        </Badge>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick Actions">
            <CommandItem onSelect={() => setOpen(false)}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Create Invoice</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <DollarSign className="mr-2 h-4 w-4" />
              <span>Request Financing</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculate Liquidity</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => setOpen(false)}>
              <Home className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <BarChart3 className="mr-2 h-4 w-4" />
              <span>Operations</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Users className="mr-2 h-4 w-4" />
              <span>Clients</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}

// Command for Search Results
function CommandSearchResults() {
  return (
    <Command className="rounded-lg border shadow-md max-w-md">
      <CommandInput placeholder="Search invoices..." />
      <CommandList>
        <CommandEmpty>No invoices found.</CommandEmpty>
        <CommandGroup heading="Recent Invoices">
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <div className="flex flex-col">
              <span className="font-medium">INV-001</span>
              <span className="text-sm text-muted-foreground">Acme Corp - $15,000</span>
            </div>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <div className="flex flex-col">
              <span className="font-medium">INV-002</span>
              <span className="text-sm text-muted-foreground">TechStart - $8,500</span>
            </div>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <div className="flex flex-col">
              <span className="font-medium">INV-003</span>
              <span className="text-sm text-muted-foreground">Global Inc - $22,000</span>
            </div>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Clients">
          <CommandItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Acme Corporation</span>
          </CommandItem>
          <CommandItem>
            <Users className="mr-2 h-4 w-4" />
            <span>TechStart Inc</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

// Command with Categories
function CommandCategories() {
  return (
    <Command className="rounded-lg border shadow-md max-w-md">
      <CommandInput placeholder="Search everything..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Financial">
          <CommandItem>
            <DollarSign className="mr-2 h-4 w-4" />
            <span>Request Financing</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Liquidity Calculator</span>
          </CommandItem>
          <CommandItem>
            <TrendingUp className="mr-2 h-4 w-4" />
            <span>Financial Reports</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Documents">
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Create Invoice</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Upload Documents</span>
            <CommandShortcut>⌘U</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Management">
          <CommandItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Manage Clients</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>System Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

// Command with Badges
function CommandWithBadges() {
  return (
    <Command className="rounded-lg border shadow-md max-w-md">
      <CommandInput placeholder="Search operations..." />
      <CommandList>
        <CommandEmpty>No operations found.</CommandEmpty>
        <CommandGroup heading="Active Operations">
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>OP-001 - Acme Corp</span>
            <Badge variant="default" className="ml-auto">
              Approved
            </Badge>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>OP-002 - TechStart</span>
            <Badge variant="secondary" className="ml-auto">
              Pending
            </Badge>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>OP-003 - Global Inc</span>
            <Badge variant="destructive" className="ml-auto">
              Rejected
            </Badge>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

// Compact Command (Search Bar Style)
function CommandCompact() {
  return (
    <div className="max-w-md">
      <Command className="rounded-lg border">
        <CommandInput placeholder="Quick search..." />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup>
            <CommandItem>
              <Search className="mr-2 h-4 w-4" />
              <span>Search all invoices</span>
            </CommandItem>
            <CommandItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>Create new invoice</span>
            </CommandItem>
            <CommandItem>
              <Users className="mr-2 h-4 w-4" />
              <span>Find client</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export function SearchCommandPage() {
  const previewCode = `<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <Users className="mr-2 h-4 w-4" />
        <span>Search Clients</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Actions">
      <CommandItem>
        <FileText className="mr-2 h-4 w-4" />
        <span>Create Invoice</span>
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`;

  const usageCode = `import { SearchCommand } from "./components/patterns/search-command";

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <SearchCommand
      open={open}
      onOpenChange={setOpen}
      onSelect={(action) => handleAction(action)}
    />
  );
}`;

  return (
    <ComponentShowcase
      title="Search Command"
      description="Command palette for quick navigation, search, and actions with keyboard shortcuts support"
      category="Factoring Patterns"
      preview={
        <div className="flex items-center justify-center p-8">
          <CommandBasic />
        </div>
      }
      code={previewCode}
      usage="Search Command combines Command, CommandInput, and CommandList components to create a powerful command palette interface. This pattern enables users to quickly navigate, search content, and execute actions using keyboard shortcuts, significantly improving productivity and user experience in complex applications."
      usageCode={usageCode}
      props={[
        {
          name: "open",
          type: "boolean",
          default: "false",
          description: "Controls the open state of the command dialog",
          required: false,
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          default: "undefined",
          description: "Callback when dialog open state changes",
          required: false,
        },
        {
          name: "onSelect",
          type: "(value: string) => void",
          default: "undefined",
          description: "Callback when a command item is selected",
          required: false,
        },
        {
          name: "placeholder",
          type: "string",
          default: '"Type a command or search..."',
          description: "Placeholder text for the search input",
          required: false,
        },
        {
          name: "filter",
          type: "(value: string, search: string) => number",
          default: "default fuzzy filter",
          description: "Custom filter function for search results",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Modal Dialog",
          description: "Command palette in a modal dialog triggered by keyboard shortcut (⌘K)",
          preview: (
            <div className="flex items-center justify-center p-8">
              <CommandDialogExample />
            </div>
          ),
          code: `const [open, setOpen] = useState(false);

// Listen for ⌘K
useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setOpen(true);
    }
  };
  document.addEventListener("keydown", down);
  return () => document.removeEventListener("keydown", down);
}, []);

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Quick Actions">
      <CommandItem>
        <FileText className="mr-2 h-4 w-4" />
        <span>Create Invoice</span>
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`,
        },
        {
          title: "Search Results",
          description: "Command palette showing search results with structured data",
          preview: (
            <div className="flex items-center justify-center p-8">
              <CommandSearchResults />
            </div>
          ),
          code: `<Command>
  <CommandInput placeholder="Search invoices..." />
  <CommandList>
    <CommandEmpty>No invoices found.</CommandEmpty>
    <CommandGroup heading="Recent Invoices">
      <CommandItem>
        <FileText className="mr-2 h-4 w-4" />
        <div className="flex flex-col">
          <span className="font-medium">INV-001</span>
          <span className="text-sm text-muted-foreground">
            Acme Corp - $15,000
          </span>
        </div>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
        },
        {
          title: "Multiple Categories",
          description: "Command palette organized by functional categories",
          preview: (
            <div className="flex items-center justify-center p-8">
              <CommandCategories />
            </div>
          ),
          code: `<Command>
  <CommandInput placeholder="Search everything..." />
  <CommandList>
    <CommandGroup heading="Financial">
      <CommandItem>
        <DollarSign className="mr-2 h-4 w-4" />
        <span>Request Financing</span>
      </CommandItem>
    </CommandGroup>
    
    <CommandSeparator />
    
    <CommandGroup heading="Documents">
      <CommandItem>
        <FileText className="mr-2 h-4 w-4" />
        <span>Create Invoice</span>
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
        },
        {
          title: "With Status Badges",
          description: "Command palette showing items with status badges",
          preview: (
            <div className="flex items-center justify-center p-8">
              <CommandWithBadges />
            </div>
          ),
          code: `<Command>
  <CommandInput placeholder="Search operations..." />
  <CommandList>
    <CommandGroup heading="Active Operations">
      <CommandItem>
        <FileText className="mr-2 h-4 w-4" />
        <span>OP-001 - Acme Corp</span>
        <Badge variant="default" className="ml-auto">
          Approved
        </Badge>
      </CommandItem>
      <CommandItem>
        <FileText className="mr-2 h-4 w-4" />
        <span>OP-002 - TechStart</span>
        <Badge variant="secondary" className="ml-auto">
          Pending
        </Badge>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
        },
        {
          title: "Compact Search Bar",
          description: "Minimal command palette styled as a search bar",
          preview: (
            <div className="flex items-center justify-center p-8">
              <CommandCompact />
            </div>
          ),
          code: `<Command className="rounded-lg border">
  <CommandInput placeholder="Quick search..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup>
      <CommandItem>
        <Search className="mr-2 h-4 w-4" />
        <span>Search all invoices</span>
      </CommandItem>
      <CommandItem>
        <FileText className="mr-2 h-4 w-4" />
        <span>Create new invoice</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
        },
      ]}
    />
  );
}
