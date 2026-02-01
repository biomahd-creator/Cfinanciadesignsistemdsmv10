import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeConfig {
  // Brand Colors
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  
  // Chart Colors
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
  
  // UI Colors
  destructive: string;
  accent: string;
  muted: string;
  
  // Link Colors
  link: string;
  linkHover: string;
  linkVisited: string;
  
  // Additional UI Elements
  success: string;
  warning: string;
  info: string;
  
  // Focus/Selection
  focusRing: string;
  selection: string;
  
  // Input Colors
  inputBackgroundLight: string;
  inputBackgroundDark: string;
  inputBorderLight: string;
  inputBorderDark: string;
  inputBorderWidth: string;
  
  // Layout
  radius: string;
  
  // Typography
  fontSize: string;
  fontWeightLight: string;
  fontWeightNormal: string;
  fontWeightMedium: string;
  fontWeightSemibold: string;
  fontWeightBold: string;

  // Branding
  logoUrl?: string;
}

interface ThemeContextType {
  config: ThemeConfig;
  theme: "light" | "dark";
  updateConfig: (updates: Partial<ThemeConfig>) => void;
  resetToDefaults: () => void;
  exportConfig: () => string;
  importConfig: (jsonString: string) => void;
  applyPreset: (preset: string) => void;
  toggleTheme: () => void;
}

const defaultConfig: ThemeConfig = {
  primary: "#00c951",
  primaryForeground: "#ffffff",
  secondary: "#1C2D3A",
  secondaryForeground: "#ffffff",
  chart1: "#FF6B6B",
  chart2: "#4ECDC4",
  chart3: "#45B7D1",
  chart4: "#FFA07A",
  chart5: "#98D8C8",
  destructive: "#ef4444",
  accent: "#f4f4f5",
  muted: "#f4f4f5",
  link: "#0E7490",
  linkHover: "#00c951",
  linkVisited: "#164E63",
  success: "#22C55E",
  warning: "#F59E0B",
  info: "#06B6D4",
  focusRing: "#00c951",
  selection: "#00c951",
  inputBackgroundLight: "#ffffff",
  inputBackgroundDark: "#334155",
  inputBorderLight: "#e4e4e7",
  inputBorderDark: "#334155",
  inputBorderWidth: "1px",
  radius: "0.625rem",
  fontSize: "16px",
  fontWeightLight: "300",
  fontWeightNormal: "400",
  fontWeightMedium: "500",
  fontWeightSemibold: "600",
  fontWeightBold: "700",
  logoUrl: "",
};

const presets = {
  default: defaultConfig,
  ocean: {
    ...defaultConfig,
    primary: "#06B6D4",
    secondary: "#0E7490",
    chart1: "#06B6D4",
    chart2: "#0891B2",
    chart3: "#0E7490",
    chart4: "#155E75",
    chart5: "#164E63",
  },
  sunset: {
    ...defaultConfig,
    primary: "#F59E0B",
    secondary: "#DC2626",
    chart1: "#F59E0B",
    chart2: "#EF4444",
    chart3: "#DC2626",
    chart4: "#FB923C",
    chart5: "#FBBF24",
  },
  forest: {
    ...defaultConfig,
    primary: "#84CC16",
    secondary: "#15803D",
    chart1: "#84CC16",
    chart2: "#22C55E",
    chart3: "#16A34A",
    chart4: "#15803D",
    chart5: "#65A30D",
  },
  purple: {
    ...defaultConfig,
    primary: "#A855F7",
    secondary: "#7C3AED",
    chart1: "#A855F7",
    chart2: "#9333EA",
    chart3: "#7C3AED",
    chart4: "#6D28D9",
    chart5: "#C084FC",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<ThemeConfig>(() => {
    const saved = localStorage.getItem("theme-config");
    // If saved config exists, merge it with defaultConfig to ensure new defaults (like primary color) take effect if not explicitly overridden by user previous choices,
    // OR just use defaultConfig if we want to force the update.
    // Given the user wants the new default to be active immediately even if they visited before, we should be careful.
    // However, usually "saved" implies user preference.
    // If we want to FORCE the new default on everyone, we can ignore saved.
    // But better: check if the saved primary is the OLD default (#DEFB49) and if so, migrate it to new default.
    
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migration logic: If user has the old yellow or old green as primary, update to new green
      if (parsed.primary === "#DEFB49" || parsed.primary === "#84CC16") {
        return {
          ...parsed,
          primary: "#00c951",
          primaryForeground: "#ffffff",
          focusRing: "#00c951",
          selection: "#00c951",
          linkHover: "#00c951"
        };
      }
      
      // Ensure contrast is correct if user already has the correct green but wrong foreground
      if (parsed.primary === "#00c951" && parsed.primaryForeground !== "#ffffff") {
        return {
          ...parsed,
          primaryForeground: "#ffffff"
        };
      }
      return parsed;
    }
    return defaultConfig;
  });

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? (savedTheme as "light" | "dark") : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme-config", JSON.stringify(config));
    applyThemeToDOM(config);
  }, [config]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    applyThemeToDOM(config);
    
    // Apply dark class to document root
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, config]);

  const applyThemeToDOM = (theme: ThemeConfig) => {
    const root = document.documentElement;
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--primary-foreground", theme.primaryForeground);
    root.style.setProperty("--secondary", theme.secondary);
    root.style.setProperty("--secondary-foreground", theme.secondaryForeground);
    root.style.setProperty("--destructive", theme.destructive);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--muted", theme.muted);
    root.style.setProperty("--radius", theme.radius);
    root.style.setProperty("--font-size", theme.fontSize);
    root.style.setProperty("--font-weight-light", theme.fontWeightLight);
    root.style.setProperty("--font-weight-normal", theme.fontWeightNormal);
    root.style.setProperty("--font-weight-medium", theme.fontWeightMedium);
    root.style.setProperty("--font-weight-semibold", theme.fontWeightSemibold);
    root.style.setProperty("--font-weight-bold", theme.fontWeightBold);
    
    // Chart colors
    root.style.setProperty("--chart-1", theme.chart1);
    root.style.setProperty("--chart-2", theme.chart2);
    root.style.setProperty("--chart-3", theme.chart3);
    root.style.setProperty("--chart-4", theme.chart4);
    root.style.setProperty("--chart-5", theme.chart5);
    
    // Link colors
    root.style.setProperty("--link", theme.link);
    root.style.setProperty("--link-hover", theme.linkHover);
    root.style.setProperty("--link-visited", theme.linkVisited);
    
    // Additional UI elements
    root.style.setProperty("--success", theme.success);
    root.style.setProperty("--warning", theme.warning);
    root.style.setProperty("--info", theme.info);
    
    // Focus/Selection
    root.style.setProperty("--focus-ring", theme.focusRing);
    root.style.setProperty("--selection", theme.selection);
    
    // Input background colors
    root.style.setProperty("--input-background-light", theme.inputBackgroundLight);
    root.style.setProperty("--input-background-dark", theme.inputBackgroundDark);
    
    // Input border colors and width
    root.style.setProperty("--input-border-light", theme.inputBorderLight);
    root.style.setProperty("--input-border-dark", theme.inputBorderDark);
    root.style.setProperty("--input-border-width", theme.inputBorderWidth);
  };

  const updateConfig = (updates: Partial<ThemeConfig>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
  };

  const resetToDefaults = () => {
    setConfig(defaultConfig);
  };

  const exportConfig = () => {
    return JSON.stringify(config, null, 2);
  };

  const importConfig = (jsonString: string) => {
    try {
      const imported = JSON.parse(jsonString);
      setConfig(imported);
    } catch (error) {
      console.error("Invalid JSON configuration", error);
    }
  };

  const applyPreset = (preset: string) => {
    const presetConfig = presets[preset as keyof typeof presets];
    if (presetConfig) {
      setConfig(presetConfig);
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        config,
        theme,
        updateConfig,
        resetToDefaults,
        exportConfig,
        importConfig,
        applyPreset,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}