import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Badge } from "../../ui/badge";

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
}

export function FormField({
  label,
  id,
  type = "text",
  placeholder,
  required = false,
  error,
  helperText,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={id}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
        {required && (
          <Badge variant="outline" className="text-xs">
            Requerido
          </Badge>
        )}
      </div>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={error ? "border-destructive" : ""}
      />
      {error && (
        <p className="text-xs text-destructive">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}
