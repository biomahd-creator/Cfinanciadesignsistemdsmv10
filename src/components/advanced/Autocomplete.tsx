import { useState, useEffect, useRef } from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check, ChevronsUpDown, Loader2, Search, Clock } from "lucide-react";
import { cn } from "../../lib/utils";

export interface AutocompleteOption {
  value: string;
  label: string;
  description?: string;
}

interface AutocompleteProps {
  options: AutocompleteOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  emptyText?: string;
  searchPlaceholder?: string;
  loading?: boolean;
  onSearch?: (query: string) => void;
  className?: string;
  disabled?: boolean;
  showRecentSearches?: boolean;
}

export function Autocomplete({
  options,
  value,
  onValueChange,
  placeholder = "Select option...",
  emptyText = "No results found.",
  searchPlaceholder = "Search...",
  loading = false,
  onSearch,
  className,
  disabled = false,
  showRecentSearches = false,
}: AutocompleteProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();

  // Load recent searches from localStorage
  useEffect(() => {
    if (showRecentSearches) {
      const stored = localStorage.getItem("autocomplete-recent");
      if (stored) {
        setRecentSearches(JSON.parse(stored));
      }
    }
  }, [showRecentSearches]);

  // Handle search with debounce
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (onSearch) {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
      
      searchTimeoutRef.current = setTimeout(() => {
        onSearch(query);
      }, 300);
    }
  };

  // Save to recent searches
  const saveToRecent = (selectedValue: string) => {
    if (!showRecentSearches) return;
    
    const option = options.find(opt => opt.value === selectedValue);
    if (!option) return;

    const updated = [
      option.label,
      ...recentSearches.filter(item => item !== option.label)
    ].slice(0, 5);
    
    setRecentSearches(updated);
    localStorage.setItem("autocomplete-recent", JSON.stringify(updated));
  };

  const handleSelect = (selectedValue: string) => {
    onValueChange?.(selectedValue === value ? "" : selectedValue);
    saveToRecent(selectedValue);
    setOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  // Filter options based on search
  const filteredOptions = searchQuery
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        option.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  const recentOptions = showRecentSearches && !searchQuery
    ? options.filter(opt => recentSearches.includes(opt.label))
    : [];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
          disabled={disabled}
        >
          {selectedOption ? (
            <span className="truncate">{selectedOption.label}</span>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0" align="start">
        <Command shouldFilter={false}>
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              placeholder={searchPlaceholder}
              value={searchQuery}
              onValueChange={handleSearch}
            />
            {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          </div>
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            
            {recentOptions.length > 0 && (
              <CommandGroup heading="Recent Searches">
                {recentOptions.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={handleSelect}
                  >
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <div>{option.label}</div>
                      {option.description && (
                        <div className="text-xs text-muted-foreground">
                          {option.description}
                        </div>
                      )}
                    </div>
                    <Check
                      className={cn(
                        "ml-2 h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            <CommandGroup heading={recentOptions.length > 0 ? "All Results" : undefined}>
              {filteredOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleSelect}
                >
                  <div className="flex-1">
                    <div>{option.label}</div>
                    {option.description && (
                      <div className="text-xs text-muted-foreground">
                        {option.description}
                      </div>
                    )}
                  </div>
                  <Check
                    className={cn(
                      "ml-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
