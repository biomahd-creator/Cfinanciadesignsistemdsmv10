import { ComponentShowcase } from "../ui/component-showcase";
import { Autocomplete, AutocompleteOption } from "../advanced/Autocomplete";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";

const countries: AutocompleteOption[] = [
  { value: "us", label: "United States", description: "North America" },
  { value: "uk", label: "United Kingdom", description: "Europe" },
  { value: "ca", label: "Canada", description: "North America" },
  { value: "au", label: "Australia", description: "Oceania" },
  { value: "de", label: "Germany", description: "Europe" },
  { value: "fr", label: "France", description: "Europe" },
  { value: "jp", label: "Japan", description: "Asia" },
  { value: "br", label: "Brazil", description: "South America" },
  { value: "in", label: "India", description: "Asia" },
  { value: "mx", label: "Mexico", description: "North America" },
];

const companies: AutocompleteOption[] = [
  { value: "apple", label: "Apple Inc.", description: "Technology - Cupertino, CA" },
  { value: "microsoft", label: "Microsoft", description: "Technology - Redmond, WA" },
  { value: "google", label: "Google", description: "Technology - Mountain View, CA" },
  { value: "amazon", label: "Amazon", description: "E-commerce - Seattle, WA" },
  { value: "meta", label: "Meta", description: "Social Media - Menlo Park, CA" },
  { value: "tesla", label: "Tesla", description: "Automotive - Austin, TX" },
  { value: "netflix", label: "Netflix", description: "Streaming - Los Gatos, CA" },
  { value: "nvidia", label: "NVIDIA", description: "Technology - Santa Clara, CA" },
];

export function AutocompletePage() {
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [asyncValue, setAsyncValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [recentValue, setRecentValue] = useState("");

  const handleAsyncSearch = (query: string) => {
    if (query.length > 0) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  };

  return (
    <ComponentShowcase
      title="Autocomplete"
      description="Smart search input with suggestions, fuzzy matching, and recent searches"
      category="Advanced Form Inputs"
      preview={
        <div className="w-full max-w-md">
          <Autocomplete
            options={countries}
            value={country}
            onValueChange={setCountry}
            placeholder="Select a country..."
            searchPlaceholder="Search countries..."
          />
        </div>
      }
      code={`import { Autocomplete } from "../advanced/Autocomplete";

const options = [
  { value: "us", label: "United States", description: "North America" },
  { value: "uk", label: "United Kingdom", description: "Europe" },
  // ... more options
];

function Example() {
  const [value, setValue] = useState("");

  return (
    <Autocomplete
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder="Select a country..."
    />
  );
}`}
      usage="Autocomplete provides smart search functionality with instant filtering, keyboard navigation, and optional features like recent searches and async data loading. Perfect for large datasets and API-driven search."
      usageCode={`import { Autocomplete, AutocompleteOption } from "../advanced/Autocomplete";
import { useState } from "react";

const countries: AutocompleteOption[] = [
  { value: "us", label: "United States", description: "North America" },
  { value: "uk", label: "United Kingdom", description: "Europe" },
];

function MyForm() {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <Autocomplete
      options={countries}
      value={selectedCountry}
      onValueChange={setSelectedCountry}
      placeholder="Select country..."
      searchPlaceholder="Search..."
    />
  );
}`}
      props={[
        {
          name: "options",
          type: "AutocompleteOption[]",
          default: "[]",
          description: "Array of options with value, label, and optional description",
          required: true,
        },
        {
          name: "value",
          type: "string",
          default: "undefined",
          description: "Currently selected value",
          required: false,
        },
        {
          name: "onValueChange",
          type: "(value: string) => void",
          default: "undefined",
          description: "Callback when selection changes",
          required: false,
        },
        {
          name: "placeholder",
          type: "string",
          default: '"Select option..."',
          description: "Placeholder text for the trigger button",
          required: false,
        },
        {
          name: "searchPlaceholder",
          type: "string",
          default: '"Search..."',
          description: "Placeholder text for the search input",
          required: false,
        },
        {
          name: "emptyText",
          type: "string",
          default: '"No results found."',
          description: "Message shown when no options match",
          required: false,
        },
        {
          name: "loading",
          type: "boolean",
          default: "false",
          description: "Show loading spinner in search input",
          required: false,
        },
        {
          name: "onSearch",
          type: "(query: string) => void",
          default: "undefined",
          description: "Callback for async search (debounced 300ms)",
          required: false,
        },
        {
          name: "showRecentSearches",
          type: "boolean",
          default: "false",
          description: "Enable recent searches feature (stored in localStorage)",
          required: false,
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Disable the autocomplete",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Basic Autocomplete",
          description: "Simple autocomplete with country selection",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Selected: {country ? countries.find(c => c.value === country)?.label : "None"}
                  </p>
                  <Autocomplete
                    options={countries}
                    value={country}
                    onValueChange={setCountry}
                    placeholder="Select a country..."
                    searchPlaceholder="Search countries..."
                  />
                </div>
              </CardContent>
            </Card>
          ),
          code: `<Autocomplete
  options={countries}
  value={country}
  onValueChange={setCountry}
  placeholder="Select a country..."
/>`,
        },
        {
          title: "With Descriptions",
          description: "Options with secondary descriptive text",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Selected: {company ? companies.find(c => c.value === company)?.label : "None"}
                  </p>
                  <Autocomplete
                    options={companies}
                    value={company}
                    onValueChange={setCompany}
                    placeholder="Select a company..."
                    searchPlaceholder="Search companies..."
                  />
                </div>
              </CardContent>
            </Card>
          ),
          code: `const companies = [
  { 
    value: "apple", 
    label: "Apple Inc.", 
    description: "Technology - Cupertino, CA" 
  },
  // ... more companies
];

<Autocomplete
  options={companies}
  value={company}
  onValueChange={setCompany}
/>`,
        },
        {
          title: "Async Search (Loading)",
          description: "With loading state for API calls",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Type to trigger async search
                  </p>
                  <Autocomplete
                    options={countries}
                    value={asyncValue}
                    onValueChange={setAsyncValue}
                    placeholder="Search..."
                    loading={loading}
                    onSearch={handleAsyncSearch}
                  />
                </div>
              </CardContent>
            </Card>
          ),
          code: `const [loading, setLoading] = useState(false);

const handleSearch = (query: string) => {
  setLoading(true);
  // API call here
  fetchResults(query).finally(() => setLoading(false));
};

<Autocomplete
  options={options}
  loading={loading}
  onSearch={handleSearch}
/>`,
        },
        {
          title: "With Recent Searches",
          description: "Saves last 5 searches to localStorage",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Your recent searches are saved
                  </p>
                  <Autocomplete
                    options={companies}
                    value={recentValue}
                    onValueChange={setRecentValue}
                    placeholder="Select company..."
                    showRecentSearches
                  />
                </div>
              </CardContent>
            </Card>
          ),
          code: `<Autocomplete
  options={companies}
  value={value}
  onValueChange={setValue}
  showRecentSearches
/>`,
        },
      ]}
    />
  );
}
