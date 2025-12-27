import { ComponentShowcase } from "../ui/component-showcase";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Mail, Lock, Loader2, Github, Chrome } from "lucide-react";
import { useState } from "react";

// Basic Login Form Component
function LoginFormBasic() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>Sign in to your account to continue</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="name@company.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button className="w-full">Sign In</Button>
        <div className="text-sm text-center text-muted-foreground">
          Don't have an account?{" "}
          <Button variant="link" className="p-0 h-auto">
            Sign up
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

// Login Form with Icons
function LoginFormWithIcons() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Enter your credentials below</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-icon">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email-icon"
              type="email"
              placeholder="name@company.com"
              className="pl-10"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password-icon">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="password-icon"
              type="password"
              placeholder="Enter your password"
              className="pl-10"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  );
}

// Login Form with Remember Me
function LoginFormRememberMe() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>Sign in to access your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-remember">Email</Label>
          <Input id="email-remember" type="email" placeholder="name@company.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password-remember">Password</Label>
          <Input id="password-remember" type="password" placeholder="Enter your password" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label
              htmlFor="remember"
              className="text-sm font-normal cursor-pointer"
            >
              Remember me
            </Label>
          </div>
          <Button variant="link" className="p-0 h-auto text-sm">
            Forgot password?
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  );
}

// Login Form with Social Login
function LoginFormSocial() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Choose your preferred sign-in method</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" className="w-full">
            <Chrome className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email-social">Email</Label>
          <Input id="email-social" type="email" placeholder="name@company.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password-social">Password</Label>
          <Input id="password-social" type="password" placeholder="Enter your password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  );
}

// Login Form Loading State
function LoginFormLoading() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Signing In...</CardTitle>
        <CardDescription>Please wait while we verify your credentials</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-loading">Email</Label>
          <Input
            id="email-loading"
            type="email"
            placeholder="name@company.com"
            disabled
            readOnly
            value="user@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password-loading">Password</Label>
          <Input
            id="password-loading"
            type="password"
            placeholder="Enter your password"
            disabled
            readOnly
            value="••••••••"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing In...
        </Button>
      </CardFooter>
    </Card>
  );
}

// Login Form with Error State
function LoginFormError() {
  return (
    <Card className="w-full max-w-md border-destructive">
      <CardHeader>
        <CardTitle>Sign In Failed</CardTitle>
        <CardDescription className="text-destructive">
          Invalid email or password. Please try again.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-error">Email</Label>
          <Input
            id="email-error"
            type="email"
            placeholder="name@company.com"
            className="border-destructive"
            readOnly
            value="wrong@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password-error">Password</Label>
          <Input
            id="password-error"
            type="password"
            placeholder="Enter your password"
            className="border-destructive"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Try Again</Button>
      </CardFooter>
    </Card>
  );
}

export function LoginFormPage() {
  const previewCode = `<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Welcome Back</CardTitle>
    <CardDescription>Sign in to your account to continue</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="name@company.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter your password" />
    </div>
  </CardContent>
  <CardFooter className="flex flex-col space-y-4">
    <Button className="w-full">Sign In</Button>
    <div className="text-sm text-center text-muted-foreground">
      Don't have an account? <Button variant="link">Sign up</Button>
    </div>
  </CardFooter>
</Card>`;

  const usageCode = `import { LoginForm } from "./components/patterns/login-form";

function AuthPage() {
  const handleLogin = async (data) => {
    // Handle authentication
    await signIn(data.email, data.password);
  };

  return <LoginForm onSubmit={handleLogin} />;
}`;

  return (
    <ComponentShowcase
      title="Login Form"
      description="Authentication form pattern combining Card, Input, Label, and Button components for user sign-in"
      category="Factoring Patterns"
      preview={
        <div className="flex items-center justify-center p-8">
          <LoginFormBasic />
        </div>
      }
      code={previewCode}
      usage="Login Form is a composed pattern that combines Card, Input, Label, and Button components to create a complete authentication interface. This pattern provides a clean, accessible way for users to sign into your application with email and password credentials."
      usageCode={usageCode}
      props={[
        {
          name: "onSubmit",
          type: "(data: LoginData) => void | Promise<void>",
          default: "undefined",
          description: "Callback function when the form is submitted",
          required: true,
        },
        {
          name: "isLoading",
          type: "boolean",
          default: "false",
          description: "Shows loading state with disabled inputs and spinner",
          required: false,
        },
        {
          name: "error",
          type: "string",
          default: "undefined",
          description: "Error message to display when authentication fails",
          required: false,
        },
        {
          name: "showRememberMe",
          type: "boolean",
          default: "false",
          description: "Display remember me checkbox option",
          required: false,
        },
        {
          name: "showSocialLogin",
          type: "boolean",
          default: "false",
          description: "Display social login buttons (GitHub, Google)",
          required: false,
        },
      ]}
      examples={[
        {
          title: "With Icons",
          description: "Login form with icons inside input fields for better visual hierarchy",
          preview: (
            <div className="flex items-center justify-center p-8">
              <LoginFormWithIcons />
            </div>
          ),
          code: `<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Sign In</CardTitle>
    <CardDescription>Enter your credentials below</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input id="email" type="email" placeholder="name@company.com" className="pl-10" />
      </div>
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input id="password" type="password" placeholder="Enter your password" className="pl-10" />
      </div>
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Sign In</Button>
  </CardFooter>
</Card>`,
        },
        {
          title: "With Remember Me",
          description: "Login form with remember me checkbox and forgot password link",
          preview: (
            <div className="flex items-center justify-center p-8">
              <LoginFormRememberMe />
            </div>
          ),
          code: `<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Welcome Back</CardTitle>
    <CardDescription>Sign in to access your account</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="name@company.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter your password" />
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className="text-sm font-normal">
          Remember me
        </Label>
      </div>
      <Button variant="link" className="p-0 h-auto text-sm">
        Forgot password?
      </Button>
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Sign In</Button>
  </CardFooter>
</Card>`,
        },
        {
          title: "With Social Login",
          description: "Login form with OAuth providers (GitHub, Google) and separator",
          preview: (
            <div className="flex items-center justify-center p-8">
              <LoginFormSocial />
            </div>
          ),
          code: `<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Sign In</CardTitle>
    <CardDescription>Choose your preferred sign-in method</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <Button variant="outline" className="w-full">
        <Github className="mr-2 h-4 w-4" />
        GitHub
      </Button>
      <Button variant="outline" className="w-full">
        <Chrome className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
    
    <div className="relative">
      <Separator />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
        Or continue with
      </span>
    </div>

    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="name@company.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter your password" />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Sign In</Button>
  </CardFooter>
</Card>`,
        },
        {
          title: "Loading State",
          description: "Form during authentication with disabled inputs and loading spinner",
          preview: (
            <div className="flex items-center justify-center p-8">
              <LoginFormLoading />
            </div>
          ),
          code: `<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Signing In...</CardTitle>
    <CardDescription>Please wait while we verify your credentials</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" disabled value="user@example.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" disabled value="••••••••" />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full" disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Signing In...
    </Button>
  </CardFooter>
</Card>`,
        },
        {
          title: "Error State",
          description: "Form with error message after failed authentication attempt",
          preview: (
            <div className="flex items-center justify-center p-8">
              <LoginFormError />
            </div>
          ),
          code: `<Card className="w-full max-w-md border-destructive">
  <CardHeader>
    <CardTitle>Sign In Failed</CardTitle>
    <CardDescription className="text-destructive">
      Invalid email or password. Please try again.
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        className="border-destructive"
        value="wrong@example.com"
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" className="border-destructive" />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Try Again</Button>
  </CardFooter>
</Card>`,
        },
      ]}
    />
  );
}