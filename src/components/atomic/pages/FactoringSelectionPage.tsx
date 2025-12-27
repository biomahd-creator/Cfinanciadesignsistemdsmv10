import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import { Separator } from "../../ui/separator";
import { Alert, AlertDescription } from "../../ui/alert";
import { Input } from "../../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Progress } from "../../ui/progress";
import { ScrollArea } from "../../ui/scroll-area";
import {
  Upload,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  XCircle,
  FileX,
  ChevronRight,
  Sparkles,
  Info,
  X,
  Trash2,
  Search,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

// Types
interface Invoice {
  id: string;
  invoiceNumber: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: "eligible" | "pending" | "not-eligible" | "discarded";
  debtorId: string;
}

interface Debtor {
  id: string;
  name: string;
  rut: string;
  availableLimit: number;
  rate: number; // Tasa de descuento %
  invoices: Invoice[];
}

// Mock data
const mockDebtors: Debtor[] = [
  {
    id: "D001",
    name: "Corporación Global S.A.",
    rut: "76.987.654-3",
    availableLimit: 5000000,
    rate: 2.5,
    invoices: [
      {
        id: "INV-001",
        invoiceNumber: "F-2024-1001",
        amount: 1200000,
        issueDate: "2024-01-15",
        dueDate: "2024-02-15",
        status: "eligible",
        debtorId: "D001",
      },
      {
        id: "INV-002",
        invoiceNumber: "F-2024-1002",
        amount: 850000,
        issueDate: "2024-01-18",
        dueDate: "2024-02-18",
        status: "eligible",
        debtorId: "D001",
      },
      {
        id: "INV-003",
        invoiceNumber: "F-2024-1003",
        amount: 2100000,
        issueDate: "2024-01-20",
        dueDate: "2024-02-20",
        status: "eligible",
        debtorId: "D001",
      },
      {
        id: "INV-004",
        invoiceNumber: "F-2024-1004",
        amount: 450000,
        issueDate: "2024-01-22",
        dueDate: "2024-02-22",
        status: "pending",
        debtorId: "D001",
      },
      {
        id: "INV-005",
        invoiceNumber: "F-2024-1005",
        amount: 1500000,
        issueDate: "2024-01-25",
        dueDate: "2024-02-25",
        status: "eligible",
        debtorId: "D001",
      },
    ],
  },
  {
    id: "D002",
    name: "Innovatech Solutions SpA",
    rut: "77.123.456-8",
    availableLimit: 3500000,
    rate: 3.0,
    invoices: [
      {
        id: "INV-006",
        invoiceNumber: "F-2024-2001",
        amount: 980000,
        issueDate: "2024-01-10",
        dueDate: "2024-02-10",
        status: "eligible",
        debtorId: "D002",
      },
      {
        id: "INV-007",
        invoiceNumber: "F-2024-2002",
        amount: 1250000,
        issueDate: "2024-01-12",
        dueDate: "2024-02-12",
        status: "eligible",
        debtorId: "D002",
      },
      {
        id: "INV-008",
        invoiceNumber: "F-2024-2003",
        amount: 750000,
        issueDate: "2024-01-14",
        dueDate: "2024-02-14",
        status: "not-eligible",
        debtorId: "D002",
      },
      {
        id: "INV-009",
        invoiceNumber: "F-2024-2004",
        amount: 1100000,
        issueDate: "2024-01-16",
        dueDate: "2024-02-16",
        status: "eligible",
        debtorId: "D002",
      },
    ],
  },
  {
    id: "D003",
    name: "Distribuidora Nacional Ltda.",
    rut: "78.234.567-9",
    availableLimit: 4200000,
    rate: 2.8,
    invoices: [
      {
        id: "INV-010",
        invoiceNumber: "F-2024-3001",
        amount: 1600000,
        issueDate: "2024-01-08",
        dueDate: "2024-02-08",
        status: "eligible",
        debtorId: "D003",
      },
      {
        id: "INV-011",
        invoiceNumber: "F-2024-3002",
        amount: 890000,
        issueDate: "2024-01-11",
        dueDate: "2024-02-11",
        status: "eligible",
        debtorId: "D003",
      },
      {
        id: "INV-012",
        invoiceNumber: "F-2024-3003",
        amount: 1350000,
        issueDate: "2024-01-13",
        dueDate: "2024-02-13",
        status: "eligible",
        debtorId: "D003",
      },
      {
        id: "INV-013",
        invoiceNumber: "F-2024-3004",
        amount: 520000,
        issueDate: "2024-01-17",
        dueDate: "2024-02-17",
        status: "discarded",
        debtorId: "D003",
      },
      {
        id: "INV-014",
        invoiceNumber: "F-2024-3005",
        amount: 700000,
        issueDate: "2024-01-19",
        dueDate: "2024-02-19",
        status: "eligible",
        debtorId: "D003",
      },
    ],
  },
  {
    id: "D004",
    name: "Comercializadora del Sur S.A.",
    rut: "79.456.789-1",
    availableLimit: 8500000,
    rate: 2.6,
    invoices: [
      {
        id: "INV-015",
        invoiceNumber: "F-2024-4001",
        amount: 1850000,
        issueDate: "2024-01-05",
        dueDate: "2024-02-05",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-016",
        invoiceNumber: "F-2024-4002",
        amount: 950000,
        issueDate: "2024-01-06",
        dueDate: "2024-02-06",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-017",
        invoiceNumber: "F-2024-4003",
        amount: 1240000,
        issueDate: "2024-01-07",
        dueDate: "2024-02-07",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-018",
        invoiceNumber: "F-2024-4004",
        amount: 780000,
        issueDate: "2024-01-08",
        dueDate: "2024-02-08",
        status: "pending",
        debtorId: "D004",
      },
      {
        id: "INV-019",
        invoiceNumber: "F-2024-4005",
        amount: 2100000,
        issueDate: "2024-01-09",
        dueDate: "2024-02-09",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-020",
        invoiceNumber: "F-2024-4006",
        amount: 560000,
        issueDate: "2024-01-10",
        dueDate: "2024-02-10",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-021",
        invoiceNumber: "F-2024-4007",
        amount: 1320000,
        issueDate: "2024-01-11",
        dueDate: "2024-02-11",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-022",
        invoiceNumber: "F-2024-4008",
        amount: 890000,
        issueDate: "2024-01-12",
        dueDate: "2024-02-12",
        status: "not-eligible",
        debtorId: "D004",
      },
      {
        id: "INV-023",
        invoiceNumber: "F-2024-4009",
        amount: 1650000,
        issueDate: "2024-01-13",
        dueDate: "2024-02-13",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-024",
        invoiceNumber: "F-2024-4010",
        amount: 420000,
        issueDate: "2024-01-14",
        dueDate: "2024-02-14",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-025",
        invoiceNumber: "F-2024-4011",
        amount: 975000,
        issueDate: "2024-01-15",
        dueDate: "2024-02-15",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-026",
        invoiceNumber: "F-2024-4012",
        amount: 1180000,
        issueDate: "2024-01-16",
        dueDate: "2024-02-16",
        status: "pending",
        debtorId: "D004",
      },
      {
        id: "INV-027",
        invoiceNumber: "F-2024-4013",
        amount: 640000,
        issueDate: "2024-01-17",
        dueDate: "2024-02-17",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-028",
        invoiceNumber: "F-2024-4014",
        amount: 1895000,
        issueDate: "2024-01-18",
        dueDate: "2024-02-18",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-029",
        invoiceNumber: "F-2024-4015",
        amount: 530000,
        issueDate: "2024-01-19",
        dueDate: "2024-02-19",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-030",
        invoiceNumber: "F-2024-4016",
        amount: 1410000,
        issueDate: "2024-01-20",
        dueDate: "2024-02-20",
        status: "discarded",
        debtorId: "D004",
      },
      {
        id: "INV-031",
        invoiceNumber: "F-2024-4017",
        amount: 825000,
        issueDate: "2024-01-21",
        dueDate: "2024-02-21",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-032",
        invoiceNumber: "F-2024-4018",
        amount: 1190000,
        issueDate: "2024-01-22",
        dueDate: "2024-02-22",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-033",
        invoiceNumber: "F-2024-4019",
        amount: 685000,
        issueDate: "2024-01-23",
        dueDate: "2024-02-23",
        status: "not-eligible",
        debtorId: "D004",
      },
      {
        id: "INV-034",
        invoiceNumber: "F-2024-4020",
        amount: 1560000,
        issueDate: "2024-01-24",
        dueDate: "2024-02-24",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-035",
        invoiceNumber: "F-2024-4021",
        amount: 720000,
        issueDate: "2024-01-25",
        dueDate: "2024-02-25",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-036",
        invoiceNumber: "F-2024-4022",
        amount: 1025000,
        issueDate: "2024-01-26",
        dueDate: "2024-02-26",
        status: "pending",
        debtorId: "D004",
      },
      {
        id: "INV-037",
        invoiceNumber: "F-2024-4023",
        amount: 895000,
        issueDate: "2024-01-27",
        dueDate: "2024-02-27",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-038",
        invoiceNumber: "F-2024-4024",
        amount: 1475000,
        issueDate: "2024-01-28",
        dueDate: "2024-02-28",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-039",
        invoiceNumber: "F-2024-4025",
        amount: 615000,
        issueDate: "2024-01-29",
        dueDate: "2024-03-01",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-040",
        invoiceNumber: "F-2024-4026",
        amount: 1280000,
        issueDate: "2024-01-30",
        dueDate: "2024-03-02",
        status: "discarded",
        debtorId: "D004",
      },
      {
        id: "INV-041",
        invoiceNumber: "F-2024-4027",
        amount: 765000,
        issueDate: "2024-01-31",
        dueDate: "2024-03-03",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-042",
        invoiceNumber: "F-2024-4028",
        amount: 1390000,
        issueDate: "2024-02-01",
        dueDate: "2024-03-04",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-043",
        invoiceNumber: "F-2024-4029",
        amount: 840000,
        issueDate: "2024-02-02",
        dueDate: "2024-03-05",
        status: "not-eligible",
        debtorId: "D004",
      },
      {
        id: "INV-044",
        invoiceNumber: "F-2024-4030",
        amount: 1520000,
        issueDate: "2024-02-03",
        dueDate: "2024-03-06",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-045",
        invoiceNumber: "F-2024-4031",
        amount: 695000,
        issueDate: "2024-02-04",
        dueDate: "2024-03-07",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-046",
        invoiceNumber: "F-2024-4032",
        amount: 1155000,
        issueDate: "2024-02-05",
        dueDate: "2024-03-08",
        status: "pending",
        debtorId: "D004",
      },
      {
        id: "INV-047",
        invoiceNumber: "F-2024-4033",
        amount: 985000,
        issueDate: "2024-02-06",
        dueDate: "2024-03-09",
        status: "eligible",
        debtorId: "D004",
      },
    ],
  },
];

export function FactoringSelectionPage() {
  const [debtors, setDebtors] = useState<Debtor[]>(mockDebtors);
  const [selectedInvoices, setSelectedInvoices] = useState<Set<string>>(new Set());
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [expandedDebtors, setExpandedDebtors] = useState<string[]>([]);
  
  // Filters and sorting per debtor
  const [debtorFilters, setDebtorFilters] = useState<Record<string, string>>({});
  const [debtorSorting, setDebtorSorting] = useState<Record<string, { field: string; direction: "asc" | "desc" }>>({});
  
  // Design/Figma capture mode
  const [designMode, setDesignMode] = useState(false);
  
  // Toggle design mode - expand all and select some invoices for demo
  const toggleDesignMode = () => {
    if (!designMode) {
      // Enter design mode: expand all debtors
      setExpandedDebtors(debtors.map((d) => d.id));
      
      // Select some invoices for visual demo (first eligible from each debtor)
      const demoSelection = new Set<string>();
      debtors.forEach((debtor) => {
        const firstEligible = debtor.invoices.find((inv) => inv.status === "eligible");
        if (firstEligible) {
          demoSelection.add(firstEligible.id);
        }
      });
      setSelectedInvoices(demoSelection);
    } else {
      // Exit design mode: collapse all and clear selection
      setExpandedDebtors([]);
      setSelectedInvoices(new Set());
    }
    setDesignMode(!designMode);
  };

  // Calculate KPIs
  const kpis = useMemo(() => {
    const allInvoices = debtors.flatMap((d) => d.invoices);
    
    // Count by status
    const eligible = allInvoices.filter((i) => i.status === "eligible");
    const pending = allInvoices.filter((i) => i.status === "pending");
    const notEligible = allInvoices.filter((i) => i.status === "not-eligible");
    const discarded = allInvoices.filter((i) => i.status === "discarded");
    
    // Amount totals
    const eligibleAmount = eligible.reduce((sum, inv) => sum + inv.amount, 0);
    const pendingAmount = pending.reduce((sum, inv) => sum + inv.amount, 0);
    const notEligibleAmount = notEligible.reduce((sum, inv) => sum + inv.amount, 0);
    const discardedAmount = discarded.reduce((sum, inv) => sum + inv.amount, 0);
    
    // Business metrics
    const totalAvailableLimit = debtors.reduce((sum, d) => sum + d.availableLimit, 0);
    const averageRate = debtors.reduce((sum, d) => sum + d.rate, 0) / debtors.length;
    
    return {
      total: allInvoices.length,
      eligible: { count: eligible.length, amount: eligibleAmount },
      pending: { count: pending.length, amount: pendingAmount },
      notEligible: { count: notEligible.length, amount: notEligibleAmount },
      discarded: { count: discarded.length, amount: discardedAmount },
      totalAvailableLimit,
      averageRate,
    };
  }, [debtors]);

  // Smart selection: Pre-select eligible invoices up to limit
  const initializeSmartSelection = (debtor: Debtor) => {
    const eligibleInvoices = debtor.invoices
      .filter((inv) => inv.status === "eligible")
      .sort((a, b) => b.amount - a.amount); // Priorizar facturas más grandes

    let accumulated = 0;
    const newSelection = new Set(selectedInvoices);

    for (const invoice of eligibleInvoices) {
      if (accumulated + invoice.amount <= debtor.availableLimit) {
        newSelection.add(invoice.id);
        accumulated += invoice.amount;
      }
    }

    setSelectedInvoices(newSelection);
  };

  // Deselect all invoices from a debtor
  const deselectAllForDebtor = (debtor: Debtor) => {
    const newSelection = new Set(selectedInvoices);
    debtor.invoices.forEach((inv) => newSelection.delete(inv.id));
    setSelectedInvoices(newSelection);
  };

  // Select all eligible invoices from a debtor (no limit check)
  const selectAllEligibleForDebtor = (debtor: Debtor) => {
    const newSelection = new Set(selectedInvoices);
    debtor.invoices
      .filter((inv) => inv.status === "eligible")
      .forEach((inv) => newSelection.add(inv.id));
    setSelectedInvoices(newSelection);
  };

  // Deselect all invoices globally
  const deselectAllGlobal = () => {
    setSelectedInvoices(new Set());
  };

  // Discard an invoice (change status to "discarded")
  const discardInvoice = (invoiceId: string) => {
    setDebtors((prevDebtors) =>
      prevDebtors.map((debtor) => ({
        ...debtor,
        invoices: debtor.invoices.map((inv) =>
          inv.id === invoiceId ? { ...inv, status: "discarded" as const } : inv
        ),
      }))
    );

    // Also remove from selection if selected
    const newSelection = new Set(selectedInvoices);
    newSelection.delete(invoiceId);
    setSelectedInvoices(newSelection);
  };

  // Filter and sort invoices for a debtor
  const getFilteredAndSortedInvoices = (debtor: Debtor) => {
    let invoices = [...debtor.invoices];

    // Apply filter
    const filter = debtorFilters[debtor.id] || "";
    if (filter) {
      const lowerFilter = filter.toLowerCase();
      invoices = invoices.filter(
        (inv) =>
          inv.invoiceNumber.toLowerCase().includes(lowerFilter) ||
          inv.id.toLowerCase().includes(lowerFilter) ||
          inv.amount.toString().includes(lowerFilter)
      );
    }

    // Apply sorting
    const sorting = debtorSorting[debtor.id];
    if (sorting) {
      invoices.sort((a, b) => {
        let aVal: any = a[sorting.field as keyof Invoice];
        let bVal: any = b[sorting.field as keyof Invoice];

        if (sorting.field === "amount") {
          aVal = Number(aVal);
          bVal = Number(bVal);
        }

        if (aVal < bVal) return sorting.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sorting.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return invoices;
  };

  // Toggle sorting
  const toggleSort = (debtorId: string, field: string) => {
    setDebtorSorting((prev) => {
      const current = prev[debtorId];
      if (current?.field === field) {
        return {
          ...prev,
          [debtorId]: {
            field,
            direction: current.direction === "asc" ? "desc" : "asc",
          },
        };
      }
      return {
        ...prev,
        [debtorId]: { field, direction: "desc" },
      };
    });
  };

  // Toggle invoice selection with limit validation
  const toggleInvoice = (invoice: Invoice, debtor: Debtor) => {
    const newSelection = new Set(selectedInvoices);

    if (newSelection.has(invoice.id)) {
      // Deselect
      newSelection.delete(invoice.id);
    } else {
      // Check if adding this invoice exceeds debtor's limit
      const debtorTotal = calculateDebtorTotal(debtor.id, newSelection);
      if (debtorTotal + invoice.amount <= debtor.availableLimit) {
        newSelection.add(invoice.id);
      } else {
        // Show visual feedback (handled in UI)
        return;
      }
    }

    setSelectedInvoices(newSelection);
  };

  // Calculate total selected for a debtor
  const calculateDebtorTotal = (debtorId: string, selection: Set<string> = selectedInvoices) => {
    const debtor = debtors.find((d) => d.id === debtorId);
    if (!debtor) return 0;

    return debtor.invoices
      .filter((inv) => selection.has(inv.id))
      .reduce((sum, inv) => sum + inv.amount, 0);
  };

  // Calculate global totals
  const globalTotals = useMemo(() => {
    const selectedInvoicesList = debtors
      .flatMap((d) => d.invoices)
      .filter((inv) => selectedInvoices.has(inv.id));

    const totalNominal = selectedInvoicesList.reduce((sum, inv) => sum + inv.amount, 0);

    // Calculate net advance (apply rates per debtor)
    let netAdvance = 0;
    for (const debtor of debtors) {
      const debtorInvoices = debtor.invoices.filter((inv) => selectedInvoices.has(inv.id));
      const debtorTotal = debtorInvoices.reduce((sum, inv) => sum + inv.amount, 0);
      const discount = debtorTotal * (debtor.rate / 100);
      netAdvance += debtorTotal - discount;
    }

    // Calculate max possible
    const maxPossible = debtors.reduce((sum, d) => {
      const eligibleTotal = d.invoices
        .filter((inv) => inv.status === "eligible")
        .reduce((s, inv) => s + inv.amount, 0);
      return sum + Math.min(eligibleTotal, d.availableLimit);
    }, 0);

    const remaining = maxPossible - totalNominal;

    return {
      totalNominal,
      netAdvance,
      maxPossible,
      remaining,
      count: selectedInvoicesList.length,
    };
  }, [selectedInvoices, debtors]);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Get status badge
  const getStatusBadge = (status: Invoice["status"]) => {
    const config = {
      eligible: { label: "Elegible", variant: "default" as const, icon: CheckCircle2 },
      pending: { label: "Pendiente", variant: "secondary" as const, icon: AlertCircle },
      "not-eligible": { label: "No Elegible", variant: "destructive" as const, icon: XCircle },
      discarded: { label: "Descartada", variant: "outline" as const, icon: FileX },
    };

    const { label, variant, icon: Icon } = config[status];

    return (
      <Badge variant={variant} className="gap-1">
        <Icon className="h-3 w-3" />
        {label}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen pb-32">
      {/* Header */}
      <div className="space-y-6 mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-semibold mb-2">Gestión de Facturas</h1>
            <p className="text-muted-foreground">
              Selecciona las facturas a financiar y maximiza tu liquidez disponible
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={toggleDesignMode} 
              variant={designMode ? "default" : "outline"}
              className="gap-2"
            >
              {designMode ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Modo Captura Activo
                </>
              ) : (
                <>
                  <Info className="h-4 w-4" />
                  Modo Captura Figma
                </>
              )}
            </Button>
            <Button onClick={() => setShowUploadDialog(true)} className="gap-2">
              <Upload className="h-4 w-4" />
              Cargar Facturas
            </Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="space-y-4">
          {/* Primary Business KPIs */}
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="border-2 border-primary bg-primary/5">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm text-primary">💰 Liquidez Total Disponible</CardTitle>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold text-primary">
                  {formatCurrency(kpis.totalAvailableLimit)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Cupo combinado de {debtors.length} pagadores
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm text-primary">✨ Facturas Elegibles</CardTitle>
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold">{formatCurrency(kpis.eligible.amount)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {kpis.eligible.count} facturas • Tasa prom. {kpis.averageRate.toFixed(1)}%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm text-muted-foreground">🔄 En Revisión</CardTitle>
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold">{formatCurrency(kpis.pending.amount)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {kpis.pending.count} facturas pendientes de validación
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm text-muted-foreground">📊 Inventario Total</CardTitle>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold">{kpis.total}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  facturas en sistema
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Secondary Status KPIs */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-destructive/30">
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      <XCircle className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">No Elegibles</div>
                      <div className="text-xl font-semibold">{kpis.notEligible.count} facturas</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-semibold">{formatCurrency(kpis.notEligible.amount)}</div>
                    <div className="text-xs text-muted-foreground">monto bloqueado</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-muted">
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-lg">
                      <FileX className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Descartadas</div>
                      <div className="text-xl font-semibold">{kpis.discarded.count} facturas</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-semibold text-muted-foreground">
                      {formatCurrency(kpis.discarded.amount)}
                    </div>
                    <div className="text-xs text-muted-foreground">excluido manualmente</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Debtors List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Pagadores ({debtors.length})</h2>

        <Accordion
          type="multiple"
          value={expandedDebtors}
          onValueChange={setExpandedDebtors}
          className="space-y-3"
        >
          {debtors.map((debtor) => {
            const eligibleInvoices = debtor.invoices.filter((i) => i.status === "eligible");
            const eligibleTotal = eligibleInvoices.reduce((sum, inv) => sum + inv.amount, 0);
            const selectedTotal = calculateDebtorTotal(debtor.id);
            const selectedCount = debtor.invoices.filter((inv) => selectedInvoices.has(inv.id)).length;
            const limitProgress = (selectedTotal / debtor.availableLimit) * 100;
            const isLimitReached = selectedTotal >= debtor.availableLimit;
            
            // Invoice counts by status
            const totalInvoices = debtor.invoices.length;
            const pendingCount = debtor.invoices.filter((i) => i.status === "pending").length;
            const notEligibleCount = debtor.invoices.filter((i) => i.status === "not-eligible").length;
            const discardedCount = debtor.invoices.filter((i) => i.status === "discarded").length;

            return (
              <AccordionItem
                key={debtor.id}
                value={debtor.id}
                className="border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center gap-4">
                      <div className="text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="font-semibold">{debtor.name}</div>
                          <Badge variant="secondary" className="text-xs">
                            {totalInvoices} {totalInvoices === 1 ? "factura" : "facturas"}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                          <span>RUT: {debtor.rut}</span>
                          {eligibleInvoices.length > 0 && (
                            <>
                              <span>•</span>
                              <span className="text-primary">{eligibleInvoices.length} elegibles</span>
                            </>
                          )}
                          {pendingCount > 0 && (
                            <>
                              <span>•</span>
                              <span>{pendingCount} pendientes</span>
                            </>
                          )}
                          {notEligibleCount > 0 && (
                            <>
                              <span>•</span>
                              <span className="text-destructive">{notEligibleCount} no elegibles</span>
                            </>
                          )}
                          {discardedCount > 0 && (
                            <>
                              <span>•</span>
                              <span className="text-muted-foreground">{discardedCount} descartadas</span>
                            </>
                          )}
                        </div>
                      </div>
                      {selectedCount > 0 && (
                        <Badge variant="default" className="gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          {selectedCount} seleccionadas
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Cupo Disponible</div>
                        <div className="font-semibold">{formatCurrency(debtor.availableLimit)}</div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Tasa</div>
                        <div className="font-semibold text-primary">{debtor.rate}%</div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Monto Elegible</div>
                        <div className="font-semibold">{formatCurrency(eligibleTotal)}</div>
                      </div>

                      <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6 pt-4">
                  {/* Limit Progress */}
                  <div className="mb-4 p-4 bg-muted/50 rounded-lg space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Seleccionado: {formatCurrency(selectedTotal)}
                      </span>
                      <span className={isLimitReached ? "text-destructive font-semibold" : ""}>
                        {limitProgress.toFixed(1)}% del cupo
                      </span>
                    </div>
                    <Progress value={Math.min(limitProgress, 100)} className="h-2" />
                    {isLimitReached && (
                      <Alert variant="destructive" className="mt-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription className="text-xs">
                          Límite de cupo alcanzado. Deselecciona facturas para agregar otras.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="mb-4 space-y-3">
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        onClick={() => initializeSmartSelection(debtor)}
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <Sparkles className="h-4 w-4" />
                        Selección Inteligente
                      </Button>
                      <Button
                        onClick={() => selectAllEligibleForDebtor(debtor)}
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        Seleccionar Todas Elegibles
                      </Button>
                      {selectedCount > 0 && (
                        <Button
                          onClick={() => deselectAllForDebtor(debtor)}
                          variant="outline"
                          size="sm"
                          className="gap-2"
                        >
                          <X className="h-4 w-4" />
                          Deseleccionar Todas
                        </Button>
                      )}
                    </div>

                    {/* Search and Sort */}
                    <div className="flex gap-2 items-center">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Buscar por número, ID o monto..."
                          value={debtorFilters[debtor.id] || ""}
                          onChange={(e) =>
                            setDebtorFilters((prev) => ({
                              ...prev,
                              [debtor.id]: e.target.value,
                            }))
                          }
                          className="pl-9"
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleSort(debtor.id, "amount")}
                        className="gap-2 whitespace-nowrap"
                      >
                        {debtorSorting[debtor.id]?.field === "amount" ? (
                          debtorSorting[debtor.id]?.direction === "asc" ? (
                            <ArrowUp className="h-4 w-4" />
                          ) : (
                            <ArrowDown className="h-4 w-4" />
                          )
                        ) : (
                          <ArrowUpDown className="h-4 w-4" />
                        )}
                        Monto
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleSort(debtor.id, "dueDate")}
                        className="gap-2 whitespace-nowrap"
                      >
                        {debtorSorting[debtor.id]?.field === "dueDate" ? (
                          debtorSorting[debtor.id]?.direction === "asc" ? (
                            <ArrowUp className="h-4 w-4" />
                          ) : (
                            <ArrowDown className="h-4 w-4" />
                          )
                        ) : (
                          <ArrowUpDown className="h-4 w-4" />
                        )}
                        Vencimiento
                      </Button>
                    </div>
                  </div>

                  {/* Invoices List */}
                  <ScrollArea className="h-[400px] border rounded-lg">
                    <div className="p-4 space-y-2">
                      {(() => {
                        const filteredInvoices = getFilteredAndSortedInvoices(debtor);
                        const eligibleCount = filteredInvoices.filter((i) => i.status === "eligible").length;
                        const selectedFilteredCount = filteredInvoices.filter((i) => selectedInvoices.has(i.id)).length;

                        if (debtor.invoices.length === 0) {
                          return (
                            <div className="text-center py-8 text-muted-foreground">
                              No hay facturas disponibles
                            </div>
                          );
                        }

                        if (filteredInvoices.length === 0) {
                          return (
                            <div className="text-center py-8 text-muted-foreground">
                              No se encontraron facturas con el criterio de búsqueda
                            </div>
                          );
                        }

                        return (
                          <>
                            {/* Counter */}
                            <div className="sticky top-0 bg-background z-10 pb-2 mb-2 border-b">
                              <div className="text-sm text-muted-foreground">
                                Mostrando <strong>{filteredInvoices.length}</strong> facturas
                                {filteredInvoices.length !== debtor.invoices.length && (
                                  <> de <strong>{debtor.invoices.length}</strong> totales</>
                                )}
                                {selectedFilteredCount > 0 && (
                                  <> • <strong className="text-primary">{selectedFilteredCount} seleccionadas</strong></>
                                )}
                              </div>
                            </div>

                            {filteredInvoices.map((invoice) => {
                          const isSelected = selectedInvoices.has(invoice.id);
                          const isDisabled = invoice.status !== "eligible";
                          const wouldExceedLimit =
                            !isSelected &&
                            selectedTotal + invoice.amount > debtor.availableLimit;

                          return (
                            <div
                              key={invoice.id}
                              className={`flex items-center gap-4 p-3 border rounded-lg ${
                                isSelected
                                  ? "bg-primary/5 border-primary"
                                  : isDisabled
                                  ? "bg-muted/50 opacity-60"
                                  : wouldExceedLimit
                                  ? "border-destructive/50"
                                  : ""
                              }`}
                            >
                              <Checkbox
                                id={invoice.id}
                                checked={isSelected}
                                disabled={isDisabled}
                                onCheckedChange={() => toggleInvoice(invoice, debtor)}
                              />

                              <div className="flex-1 grid grid-cols-4 gap-4">
                                <div>
                                  <div className="text-sm font-semibold">
                                    {invoice.invoiceNumber}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {invoice.id}
                                  </div>
                                </div>

                                <div>
                                  <div className="text-sm font-semibold">
                                    {formatCurrency(invoice.amount)}
                                  </div>
                                  <div className="text-xs text-muted-foreground">Monto</div>
                                </div>

                                <div>
                                  <div className="text-xs text-muted-foreground">
                                    Emisión: {new Date(invoice.issueDate).toLocaleDateString("es-CL")}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    Venc: {new Date(invoice.dueDate).toLocaleDateString("es-CL")}
                                  </div>
                                </div>

                                <div className="flex items-center justify-end gap-2">
                                  {getStatusBadge(invoice.status)}
                                  {invoice.status === "eligible" && (
                                    <Button
                                      onClick={() => discardInvoice(invoice.id)}
                                      variant="ghost"
                                      size="sm"
                                      className="h-8 w-8 p-0"
                                      title="Descartar factura"
                                    >
                                      <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                                    </Button>
                                  )}
                                </div>
                              </div>

                              {wouldExceedLimit && !isDisabled && (
                                <AlertCircle className="h-4 w-4 text-destructive" />
                              )}
                            </div>
                          );
                        })}
                          </>
                        );
                      })()}
                    </div>
                  </ScrollArea>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      {/* Sticky Footer Summary Bar - ANIMATED */}
      <AnimatePresence>
        {globalTotals.count > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 bg-background border-t-4 border-primary z-50 [box-shadow:0_-8px_32px_rgba(222,251,73,0.15),0_-4px_16px_rgba(0,0,0,0.1)]"
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 pointer-events-none"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative max-w-7xl mx-auto px-6 py-5">
              <div className="flex items-center justify-between gap-6">
                {/* Badge indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="absolute -top-3 left-6"
                >
                  <Badge className="bg-primary text-primary-foreground shadow-lg gap-1 px-3 py-1">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <CheckCircle2 className="h-3 w-3" />
                    </motion.div>
                    {globalTotals.count} {globalTotals.count === 1 ? "factura seleccionada" : "facturas seleccionadas"}
                  </Badge>
                </motion.div>

                {/* Totals */}
                <div className="flex items-center gap-8 pt-2">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="text-xs text-muted-foreground">Monto Total Nominal</div>
                    <motion.div
                      key={globalTotals.totalNominal}
                      initial={{ scale: 1.2, color: "rgb(222, 251, 73)" }}
                      animate={{ scale: 1, color: "inherit" }}
                      transition={{ duration: 0.3 }}
                      className="text-xl font-semibold"
                    >
                      {formatCurrency(globalTotals.totalNominal)}
                    </motion.div>
                  </motion.div>

                  <Separator orientation="vertical" className="h-12" />

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="relative"
                  >
                    <div className="text-xs text-primary flex items-center gap-1">
                      💰 Adelanto Neto Estimado
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Sparkles className="h-3 w-3 text-primary" />
                      </motion.div>
                    </div>
                    <motion.div
                      key={globalTotals.netAdvance}
                      initial={{ scale: 1.3, y: -5 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="text-2xl font-semibold text-primary"
                    >
                      {formatCurrency(globalTotals.netAdvance)}
                    </motion.div>
                    <div className="text-xs text-muted-foreground">
                      (Después de descuentos por tasa)
                    </div>
                  </motion.div>
                </div>

                {/* Actions */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <Button
                    onClick={deselectAllGlobal}
                    variant="outline"
                    size="lg"
                    className="gap-2"
                  >
                    <X className="h-5 w-5" />
                    Deseleccionar Todas
                  </Button>

                  {globalTotals.remaining > 0 && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <Alert className="py-2 px-4 bg-primary/10 border-primary">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <AlertDescription className="text-xs ml-2">
                          <strong className="text-primary">
                            ¡Estás a {formatCurrency(globalTotals.remaining)} de alcanzar tu
                            liquidez máxima!
                          </strong>
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => setShowConfirmDialog(true)}
                      size="lg"
                      className="gap-2 shadow-lg"
                    >
                      <CheckCircle2 className="h-5 w-5" />
                      Confirmar Operación
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Dialog */}
      <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cargar Facturas</DialogTitle>
            <DialogDescription>
              Sube archivos XML o PDF de facturas electrónicas para análisis automático
            </DialogDescription>
          </DialogHeader>

          <div className="border-2 border-dashed rounded-lg p-8 text-center space-y-4">
            <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
            <div>
              <p className="font-semibold">Arrastra archivos aquí</p>
              <p className="text-sm text-muted-foreground">o haz clic para seleccionar</p>
            </div>
            <Button variant="outline">Seleccionar Archivos</Button>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              Formatos aceptados: XML (SII), PDF, Excel. Máximo 50 archivos por carga.
            </AlertDescription>
          </Alert>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowUploadDialog(false)}>
              Cancelar
            </Button>
            <Button onClick={() => setShowUploadDialog(false)}>Procesar Facturas</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Confirmación de Operación de Factoring</DialogTitle>
            <DialogDescription>
              Revisa los términos y condiciones antes de confirmar
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Resumen de la Operación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Facturas seleccionadas:</span>
                  <span className="font-semibold">{globalTotals.count}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monto total nominal:</span>
                  <span className="font-semibold">
                    {formatCurrency(globalTotals.totalNominal)}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Descuentos por tasa:</span>
                  <span className="text-destructive">
                    -{formatCurrency(globalTotals.totalNominal - globalTotals.netAdvance)}
                  </span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Adelanto neto a recibir:</span>
                  <span className="font-semibold text-primary">
                    {formatCurrency(globalTotals.netAdvance)}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Breakdown by Debtor */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Desglose por Pagador</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-3">
                    {debtors
                      .filter((d) => calculateDebtorTotal(d.id) > 0)
                      .map((debtor) => {
                        const total = calculateDebtorTotal(debtor.id);
                        const count = debtor.invoices.filter((inv) =>
                          selectedInvoices.has(inv.id)
                        ).length;
                        const discount = total * (debtor.rate / 100);
                        const net = total - discount;

                        return (
                          <div key={debtor.id} className="p-3 border rounded-lg space-y-2">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-semibold">{debtor.name}</div>
                                <div className="text-xs text-muted-foreground">
                                  {count} facturas • Tasa {debtor.rate}%
                                </div>
                              </div>
                              <Badge>{formatCurrency(net)}</Badge>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Terms */}
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-xs space-y-2">
                <p className="font-semibold">Términos y Condiciones:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>El adelanto se depositará en tu cuenta en 24-48 horas hábiles</li>
                  <li>Las tasas aplicadas son las vigentes al momento de la operación</li>
                  <li>Te harás responsable de la validez de las facturas cedidas</li>
                  <li>Los pagadores serán notificados de la cesión de facturas</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              Cancelar
            </Button>
            <Button
              onClick={() => {
                setShowConfirmDialog(false);
                // Here: Submit to backend
                console.log("Operación confirmada", {
                  invoices: Array.from(selectedInvoices),
                  totals: globalTotals,
                });
              }}
            >
              Confirmar y Procesar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}