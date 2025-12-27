"use client";

import * as React from "react";
import { Check, X, ChevronsUpDown } from "lucide-react";
import { cn } from "./utils";
import { Button } from "./button";
import { Badge } from "./badge";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface MultiSelectOption {
  label: string;
  value: string;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  ({ options, selected, onChange, placeholder = "Select options...", className, disabled }, ref) => {
    const [open, setOpen] = React.useState(false);

    const handleSelect = (value: string) => {
      const newSelected = selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value];
      onChange(newSelected);
    };

    const handleRemove = (value: string, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onChange(selected.filter((item) => item !== value));
    };

    const handleToggle = (value: string) => {
      const newSelected = selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value];
      onChange(newSelected);
    };

    const selectedOptions = options.filter((option) => selected.includes(option.value));

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn(
              "hover:bg-muted/50 w-full justify-between",
              selected.length > 0 ? "h-auto min-h-9" : "h-9",
              className
            )}
          >
            <div className="flex flex-wrap gap-1.5">
              {selected.length === 0 ? (
                <span className="text-muted-foreground">{placeholder}</span>
              ) : (
                selectedOptions.map((option) => (
                  <Badge
                    key={option.value}
                    variant="secondary"
                    className="gap-1 pr-1"
                  >
                    <span>{option.label}</span>
                    <span
                      role="button"
                      tabIndex={0}
                      className="ring-offset-background hover:bg-muted rounded-full outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onClick={(e) => handleRemove(option.value, e)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleRemove(option.value, e as any);
                        }
                      }}
                    >
                      <X className="size-3" />
                      <span className="sr-only">Remove {option.label}</span>
                    </span>
                  </Badge>
                ))
              )}
            </div>
            <ChevronsUpDown className="text-muted-foreground ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No options found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selected.includes(option.value);
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => handleSelect(option.value)}
                    >
                      <div
                        className={cn(
                          "border-primary mr-2 flex size-4 items-center justify-center rounded-sm border",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible"
                        )}
                      >
                        <Check className="size-4" />
                      </div>
                      <span>{option.label}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

MultiSelect.displayName = "MultiSelect";

export { MultiSelect };