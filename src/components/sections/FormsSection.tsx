import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import { Slider } from "../ui/slider";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { Alert, AlertDescription } from "../ui/alert";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "../ui/input-otp";
import { cn } from "../ui/utils";
import { CalendarIcon, Check, ChevronsUpDown, AlertCircle, Mail, Lock, User } from "lucide-react";
import { format } from "date-fns";
import { useForm } from "react-hook-form@7.55.0";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "nextjs", label: "Next.js" },
];

export function FormsSection() {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: any) {
    console.log(data);
    alert("Form submitted! Check console for data.");
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Forms</h2>
        <p className="text-sm text-muted-foreground">
          Componentes para captura de datos y formularios
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Input</h3>
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email-input">Email</Label>
              <Input id="email-input" placeholder="email@example.com" type="email" />
            </div>
            <div>
              <Label htmlFor="password-input">Password</Label>
              <Input id="password-input" placeholder="Enter password" type="password" />
            </div>
            <div>
              <Label htmlFor="disabled-input">Disabled</Label>
              <Input id="disabled-input" placeholder="Disabled input" disabled />
            </div>
          </div>
        </Card>

        {/* Textarea */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Textarea</h3>
          <div>
            <Label htmlFor="message">Your message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              className="min-h-[120px]"
            />
          </div>
        </Card>

        {/* Select */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Select</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="framework-select">Framework</Label>
              <Select>
                <SelectTrigger id="framework-select">
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="vue">Vue</SelectItem>
                  <SelectItem value="angular">Angular</SelectItem>
                  <SelectItem value="svelte">Svelte</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Checkbox */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Checkbox</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="marketing" defaultChecked />
              <Label htmlFor="marketing">Receive marketing emails</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="disabled-check" disabled />
              <Label htmlFor="disabled-check">Disabled option</Label>
            </div>
          </div>
        </Card>

        {/* RadioGroup */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Radio Group</h3>
          <div>
            <Label>Notification Method</Label>
            <RadioGroup defaultValue="email" className="mt-3">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="email" id="radio-email" />
                <Label htmlFor="radio-email">Email</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="sms" id="radio-sms" />
                <Label htmlFor="radio-sms">SMS</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="push" id="radio-push" />
                <Label htmlFor="radio-push">Push Notification</Label>
              </div>
            </RadioGroup>
          </div>
        </Card>

        {/* Switch */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Switch</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
              <Switch id="airplane-mode" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="wifi">Wi-Fi</Label>
              <Switch id="wifi" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="bluetooth">Bluetooth</Label>
              <Switch id="bluetooth" disabled />
            </div>
          </div>
        </Card>

        {/* Slider */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Slider</h3>
          <div className="space-y-6">
            <div>
              <Label className="text-xs mb-2 block">Volume: 50%</Label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div>
              <Label className="text-xs mb-2 block">Brightness: 75%</Label>
              <Slider defaultValue={[75]} max={100} step={1} />
            </div>
          </div>
        </Card>

        {/* DatePicker */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">DatePicker</h3>
          <div>
            <Label>Pick a date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal mt-2",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </Card>

        {/* Combobox */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Combobox</h3>
          <div>
            <Label>Select framework</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between mt-2"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)?.label
                    : "Select framework..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue);
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === framework.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </Card>
      </div>

      {/* Form with Validation */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Form with Validation</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    We'll never share your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              rules={{
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Your message must be at least 10 characters.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Card>

      {/* Input OTP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Input OTP</h3>
          <div className="space-y-6">
            <div>
              <Label>6-Digit Code</Label>
              <div className="mt-2">
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Enter the 6-digit verification code
              </p>
            </div>
            <div>
              <Label>4-Digit PIN</Label>
              <div className="mt-2">
                <InputOTP maxLength={4}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Enter your 4-digit PIN
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* COMPOSED PATTERNS */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Patrones Compuestos</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Login Form Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Login Form</h3>
            <p className="text-xs text-muted-foreground mb-4">Input + Label + Button + Card</p>
            <Card className="p-6 border-2">
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-semibold">Welcome Back</h4>
                  <p className="text-sm text-muted-foreground mt-1">Sign in to your account</p>
                </div>
                <div>
                  <Label htmlFor="login-email">Email</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="login-email" placeholder="email@example.com" className="pl-10" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="login-password">Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="login-password" type="password" placeholder="••••••••" className="pl-10" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">Remember me</Label>
                </div>
                <Button className="w-full">Sign In</Button>
                <Button variant="link" className="w-full text-xs">Forgot password?</Button>
              </div>
            </Card>
          </Card>

          {/* Register Form Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Register Form</h3>
            <p className="text-xs text-muted-foreground mb-4">Input + Select + Checkbox + Button + Card</p>
            <Card className="p-6 border-2">
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-semibold">Create Account</h4>
                  <p className="text-sm text-muted-foreground mt-1">Sign up to get started</p>
                </div>
                <div>
                  <Label htmlFor="register-name">Full Name</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="register-name" placeholder="John Doe" className="pl-10" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="register-email">Email</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="register-email" placeholder="email@example.com" className="pl-10" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="register-role">Role</Label>
                  <Select>
                    <SelectTrigger id="register-role">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="terms-register" />
                  <Label htmlFor="terms-register" className="text-sm">I agree to the Terms & Conditions</Label>
                </div>
                <Button className="w-full">Create Account</Button>
              </div>
            </Card>
          </Card>

          {/* Password Reset Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Password Reset</h3>
            <p className="text-xs text-muted-foreground mb-4">Input + Button + Alert</p>
            <Card className="p-6 border-2">
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h4 className="text-2xl font-semibold">Reset Password</h4>
                  <p className="text-sm text-muted-foreground mt-1">Enter your email to receive a reset link</p>
                </div>
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    We'll send you an email with instructions to reset your password.
                  </AlertDescription>
                </Alert>
                <div>
                  <Label htmlFor="reset-email">Email</Label>
                  <Input id="reset-email" placeholder="email@example.com" />
                </div>
                <Button className="w-full">Send Reset Link</Button>
                <Button variant="outline" className="w-full">Back to Login</Button>
              </div>
            </Card>
          </Card>

          {/* Settings Section Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Settings Section</h3>
            <p className="text-xs text-muted-foreground mb-4">Card + Switch + Label + Separator</p>
            <Card className="p-6 border-2">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Notifications</h4>
                  <p className="text-xs text-muted-foreground">Manage how you receive notifications</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notif" className="font-medium">Email Notifications</Label>
                    <p className="text-xs text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch id="email-notif" defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-notif" className="font-medium">Push Notifications</Label>
                    <p className="text-xs text-muted-foreground">Receive push notifications on your device</p>
                  </div>
                  <Switch id="push-notif" />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="sms-notif" className="font-medium">SMS Notifications</Label>
                    <p className="text-xs text-muted-foreground">Receive notifications via SMS</p>
                  </div>
                  <Switch id="sms-notif" disabled />
                </div>
              </div>
            </Card>
          </Card>

          {/* Inline Validation Field Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Inline Validation Field</h3>
            <p className="text-xs text-muted-foreground mb-4">Input + Label + Alert</p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="username-valid">Username</Label>
                <Input id="username-valid" placeholder="Enter username" defaultValue="user123" />
                <Alert className="mt-2">
                  <Check className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Username is available!
                  </AlertDescription>
                </Alert>
              </div>
              <div>
                <Label htmlFor="email-invalid">Email</Label>
                <Input id="email-invalid" placeholder="Enter email" defaultValue="invalid-email" />
                <Alert variant="destructive" className="mt-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Please enter a valid email address.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </Card>

          {/* Multi-step Form Pattern */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Multi-step Form</h3>
            <p className="text-xs text-muted-foreground mb-4">Tabs + Form</p>
            <Tabs defaultValue="step1" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="step1">Personal</TabsTrigger>
                <TabsTrigger value="step2">Account</TabsTrigger>
                <TabsTrigger value="step3">Confirm</TabsTrigger>
              </TabsList>
              <TabsContent value="step1" className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
                <Button className="w-full">Next</Button>
              </TabsContent>
              <TabsContent value="step2" className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="step2-email">Email</Label>
                  <Input id="step2-email" placeholder="email@example.com" />
                </div>
                <div>
                  <Label htmlFor="step2-password">Password</Label>
                  <Input id="step2-password" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full">Next</Button>
              </TabsContent>
              <TabsContent value="step3" className="space-y-4 mt-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Please review your information before submitting.
                  </AlertDescription>
                </Alert>
                <Button className="w-full">Submit</Button>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}