/**
 * Factoring Components - Central Exports
 * 
 * Este archivo centraliza todos los exports de componentes específicos de Factoring
 * para facilitar los imports en otras partes de la aplicación.
 * 
 * Uso:
 * import { FactoringApp, InvoiceCard } from "@/factoring";
 */

// ============================================
// APP PRINCIPAL
// ============================================

export { FactoringApp } from "./FactoringApp";
export { FactoringTour } from "./FactoringTour";

// ============================================
// COMPONENTES ESPECÍFICOS DE FACTORING
// ============================================

export { CashFlowProjection } from "./CashFlowProjection";
export { CollectionTimeline } from "./CollectionTimeline";
export type { TimelineEvent } from "./CollectionTimeline";

export { DocumentVerificationStatus } from "./DocumentVerificationStatus";
export type { DocumentItem } from "./DocumentVerificationStatus";

export { FactoringRateDisplay } from "./FactoringRateDisplay";
export { InvoiceCard } from "./InvoiceCard";
export type { InvoiceData } from "./InvoiceCard";

export { LiquidityMeter } from "./LiquidityMeter";
export { PayorCard } from "./PayorCard";
export type { PayorData } from "./PayorCard";

export { RiskIndicator } from "./RiskIndicator";
export type { RiskLevel } from "./RiskIndicator";

// ============================================
// NOTA: Subcarpetas (c-financia, modals, playground, views)
// se importan directamente desde sus respectivas rutas
// ============================================
