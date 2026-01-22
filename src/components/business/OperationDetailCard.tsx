import React from "react";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";

interface OperationDetailCardProps {
  totalFacturas: number;
  currency?: string;
  montoCredito: number;
  costoFinanciero: number;
  totalAnticipo: number;
  reservaPercentage: number;
  anticipoPercentage: number;
  tasaMensual: number;
  plazoDias: number;
  tasaPlazo: number;
}

export function OperationDetailCard({
  totalFacturas = 10000000,
  currency = "MXN",
  montoCredito = 9000000,
  costoFinanciero = 500000,
  totalAnticipo = 8500000,
  reservaPercentage = 10,
  anticipoPercentage = 90,
  tasaMensual = 2.5,
  plazoDias = 120,
  tasaPlazo = 60,
}: Partial<OperationDetailCardProps>) {
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const chartData = [
    { name: "Anticipo", value: anticipoPercentage, color: "#22C55E" },
    { name: "Reserva", value: reservaPercentage, color: "#EAB308" },
  ];

  return (
    // Card matches the ~476px x 101px dimensions from Figma
    <Card className="w-full max-w-[476px] h-auto min-h-[101px] bg-white shadow-sm border-none relative overflow-hidden flex flex-row items-stretch p-0 select-none">
      
      {/* Chart Section - Left fixed width */}
      <div className="relative w-[100px] flex-shrink-0 flex items-center justify-center pl-2">
        <div className="relative w-[73px] h-[73px]">
           {/* Chart */}
            <PieChart width={73} height={73}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={26}
                outerRadius={32}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
                cornerRadius={3}
                paddingAngle={4}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
               <Pie 
                  data={[{value: 1}]} 
                  cx="50%" cy="50%" 
                  innerRadius={26} outerRadius={32} 
                  startAngle={80} endAngle={60} 
                  fill="#C52263" 
                  stroke="none" 
                  dataKey="value"
                />
            </PieChart>
            
            {/* Days Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="font-['Satoshi'] font-bold text-[12px] leading-[1] text-black tracking-tighter block w-full text-center">
                {plazoDias} Días
              </span>
            </div>
        </div>
      </div>

      {/* Content Section - Flex Col for Header + Grid */}
      <div className="flex-1 flex flex-col py-3 pr-4 pl-1 justify-center">
        
        {/* Header */}
        <div className="mb-2">
           <span className="text-[12px] font-bold text-[#737373] tracking-tight font-['Satoshi'] block">
             Detalle de la Operación
           </span>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-x-2 gap-y-2">
          
          {/* Row 1 */}
          <div className="flex flex-col justify-start">
             <span className="text-[10px] text-[#737373] leading-none mb-0.5 font-['Satoshi']">Total Facturas</span>
             <div className="flex items-baseline gap-1">
                <span className="text-[10px] font-bold text-[#737373] font-['Satoshi'] leading-none">{formatCurrency(totalFacturas)}</span>
                <span className="text-[6.5px] text-[#737373] font-bold leading-none">{currency}</span>
             </div>
          </div>

          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-[#EAB308] shrink-0" />
             <div className="flex flex-col justify-center">
                <span className="text-[10px] text-[#737373] leading-none mb-0.5 font-['Satoshi']">Reserva</span>
                <span className="text-[10px] font-bold text-[#737373] leading-none font-['Satoshi']">{reservaPercentage}%</span>
             </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col justify-start">
             <span className="text-[10px] text-[#737373] leading-none mb-0.5 font-['Satoshi']">Monto de Credito</span>
             <span className="text-[10px] font-bold text-[#737373] leading-none font-['Satoshi']">{formatCurrency(montoCredito)}</span>
          </div>

          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0" />
             <div className="flex flex-col justify-center">
                <span className="text-[10px] text-[#737373] leading-none mb-0.5 font-['Satoshi']">Anticipo</span>
                <span className="text-[10px] font-bold text-[#737373] leading-none font-['Satoshi']">{anticipoPercentage}%</span>
             </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col justify-start">
             <span className="text-[10px] text-[#737373] leading-none mb-0.5 font-['Satoshi']">Costo Financiero</span>
             <span className="text-[10px] font-bold text-[#737373] leading-none font-['Satoshi']">{formatCurrency(costoFinanciero)}</span>
          </div>

          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-[#C52263] shrink-0" />
             <div className="flex flex-col justify-center">
                <span className="text-[10px] text-[#737373] leading-none mb-0.5 font-['Satoshi']">Tasa/Mes</span>
                <div className="flex gap-2 items-baseline">
                  <span className="text-[10px] font-bold text-[#737373] leading-none font-['Satoshi']">{tasaMensual}%</span>
                  <span className="text-[10px] text-[#737373] leading-none font-['Satoshi'] opacity-80">{tasaPlazo} Dias</span>
                </div>
             </div>
          </div>
        
        </div>

        {/* Separator & Total Anticipo */}
        <div className="relative mt-2 pt-2">
           <div className="absolute top-0 left-0 w-[60%] h-px bg-[#E5E5E5]" />
           <div className="flex flex-col justify-center">
             <span className="text-[10px] text-[#737373] leading-none mb-0.5 font-['Satoshi']">Total Anticipo</span>
             <span className="text-[10px] font-bold text-[#737373] leading-none font-['Satoshi']">{formatCurrency(totalAnticipo)}</span>
           </div>
        </div>

      </div>

    </Card>
  );
}
