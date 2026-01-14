import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { 
  CreditCard, 
  Wallet, 
  Building2, 
  Lock, 
  CheckCircle2, 
  AlertCircle,
  QrCode
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Formatting helpers
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  const handlePay = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto py-12">
        <Card className="border-green-500/20 bg-green-500/5 text-center p-6">
          <CardContent className="pt-6 space-y-4">
            <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">¡Pago Exitoso!</h2>
            <p className="text-muted-foreground">
              Su transacción ha sido procesada correctamente. Hemos enviado un recibo a su correo electrónico.
            </p>
            <div className="bg-background rounded-lg p-4 border text-sm text-left space-y-2 mt-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">ID Transacción</span>
                <span className="font-mono">TX-982374623</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monto</span>
                <span className="font-bold">€1,249.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tarjeta</span>
                <span>•••• 4242</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-center gap-2">
            <Button variant="outline" onClick={() => setIsSuccess(false)}>Volver</Button>
            <Button>Descargar Recibo</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Checkout Seguro</h1>
        <p className="text-muted-foreground">Complete su información de pago para finalizar el pedido.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Payment Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Payment Method Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Método de Pago</CardTitle>
              <CardDescription>Seleccione cómo desea pagar.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <RadioGroupItem value="card" id="card" className="peer sr-only" />
                  <Label
                    htmlFor="card"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer h-full transition-all"
                  >
                    <CreditCard className="mb-3 h-6 w-6" />
                    Tarjeta
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                  <Label
                    htmlFor="paypal"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer h-full transition-all"
                  >
                    <Wallet className="mb-3 h-6 w-6" />
                    PayPal
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="bank" id="bank" className="peer sr-only" />
                  <Label
                    htmlFor="bank"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer h-full transition-all"
                  >
                    <Building2 className="mb-3 h-6 w-6" />
                    Transferencia
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Credit Card Details */}
          {paymentMethod === "card" && (
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Detalles de la Tarjeta</CardTitle>
                <CardDescription>
                  Todas las transacciones son seguras y están encriptadas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Visual Card Representation */}
                <div className="relative h-48 w-full md:w-80 mx-auto rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 shadow-xl overflow-hidden mb-8 transform transition-all hover:scale-105">
                  <div className="absolute top-0 right-0 p-6 opacity-20">
                    <CreditCard className="h-24 w-24" />
                  </div>
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start">
                      <div className="h-8 w-12 bg-yellow-500/80 rounded-md"></div>
                      <span className="font-mono text-lg">VISA</span>
                    </div>
                    <div className="space-y-4">
                      <div className="font-mono text-xl text-shadow">
                        {cardNumber || "•••• •••• •••• ••••"}
                      </div>
                      <div className="flex justify-between text-xs uppercase opacity-80">
                        <div className="flex flex-col">
                          <span className="text-xs">Card Holder</span>
                          <span className="font-semibold text-sm">{name || "NOMBRE APELLIDO"}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs">Expires</span>
                          <span className="font-semibold text-sm">{expiry || "MM/YY"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nombre en la tarjeta</Label>
                    <Input 
                      id="name" 
                      placeholder="Juan Pérez" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="number">Número de tarjeta</Label>
                    <div className="relative">
                      <Input 
                        id="number" 
                        placeholder="0000 0000 0000 0000" 
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                        maxLength={19}
                        className="pl-10"
                      />
                      <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="expiry">Fecha de expiración</Label>
                      <Input 
                        id="expiry" 
                        placeholder="MM/YY" 
                        value={expiry}
                        onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                        maxLength={5}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input 
                        id="cvc" 
                        placeholder="123" 
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value.replace(/[^0-9]/g, "").slice(0, 3))}
                        maxLength={3}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="save-card" />
                  <Label htmlFor="save-card" className="font-normal text-muted-foreground">
                    Guardar tarjeta para futuras compras
                  </Label>
                </div>
              </CardContent>
            </Card>
          )}

          {/* PayPal Content */}
          {paymentMethod === "paypal" && (
            <Card>
              <CardContent className="pt-6 flex flex-col items-center justify-center space-y-4 min-h-[300px]">
                <div className="h-16 w-16 bg-[#003087] rounded-full flex items-center justify-center text-white">
                  <Wallet className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">PayPal</h3>
                <p className="text-center text-muted-foreground max-w-sm">
                  Serás redirigido a PayPal para completar tu pago de forma segura. No compartiremos tus datos financieros.
                </p>
                <Button className="w-full max-w-xs bg-[#003087] hover:bg-[#003087]/90 text-white">
                  Pagar con PayPal
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Bank Transfer Content */}
          {paymentMethod === "bank" && (
            <Card>
               <CardContent className="pt-6 space-y-6">
                 <Alert>
                   <AlertCircle className="h-4 w-4" />
                   <AlertTitle>Información Importante</AlertTitle>
                   <AlertDescription>
                     Tu pedido será procesado una vez que recibamos la confirmación de la transferencia.
                   </AlertDescription>
                 </Alert>
                 
                 <div className="grid gap-6">
                    <div className="space-y-2">
                      <Label>Beneficiario</Label>
                      <div className="p-3 bg-muted rounded-md font-mono text-sm">Financio Solutions S.L.</div>
                    </div>
                    <div className="space-y-2">
                      <Label>IBAN</Label>
                      <div className="p-3 bg-muted rounded-md font-mono text-sm flex justify-between items-center">
                        <span>ES91 2100 0418 45 1234567890</span>
                        <Button variant="ghost" size="sm" className="h-6 text-xs">Copiar</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Concepto</Label>
                      <div className="p-3 bg-muted rounded-md font-mono text-sm">ORDER-74829</div>
                    </div>
                 </div>

                 <div className="flex justify-center">
                    <div className="text-center space-y-2">
                      <QrCode className="h-32 w-32 mx-auto border p-2 bg-white text-black rounded-lg" />
                      <p className="text-xs text-muted-foreground">Escanear para pagar desde app bancaria</p>
                    </div>
                 </div>
               </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="space-y-6">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  { name: "Suscripción Enterprise", price: 999.00, qty: 1 },
                  { name: "Setup Inicial", price: 250.00, qty: 1 },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <div className="space-y-1">
                      <span className="font-medium block">{item.name}</span>
                      <span className="text-muted-foreground text-xs">Cantidad: {item.qty}</span>
                    </div>
                    <span className="font-medium">€{item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal</span>
                  <span>€1,249.00</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Impuestos (21%)</span>
                  <span>€262.29</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>€1,511.29</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button 
                className="w-full" 
                size="lg" 
                onClick={handlePay}
                disabled={isProcessing || paymentMethod !== 'card'}
              >
                {isProcessing ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Pagar €1,511.29
                  </>
                )}
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-3 w-3" />
                <span>Pagos encriptados con SSL de 256 bits</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}