import { cn } from "./ui/utils";
import { useTheme } from "./ThemeProvider";
import { ProjectAssets } from "./business/ProjectAssets";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark" | "auto";
  showText?: boolean;
}

export function Logo({ className, size = "md", variant = "auto", showText = true }: LogoProps) {
  const { config, theme } = useTheme();
  
  const sizeClasses = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-10 w-auto",
    xl: "h-12 w-auto",
  };

  if (config.logoUrl) {
    return (
      <img 
        src={config.logoUrl} 
        alt="Brand Logo" 
        className={cn("object-contain", sizeClasses[size], className)} 
      />
    );
  }

  // Determine effective variant
  // Light variant = Dark text (LogoNegro logic)
  // Dark variant = Light text (LogoBlanco logic)
  const isDarkTheme = variant === "auto" ? theme === "dark" : variant === "dark";

  // Colors
  const lime = "#DEFB49";
  const lightGreen = "#95F87F";
  const darkBlue = "#1C2D3A";
  const white = "white";

  // Light Mode Colors (LogoNegro logic)
  const lightModeColors = {
    iconCircle: lime,
    iconDot: lightGreen,
    text: darkBlue, 
    specialLetterA: darkBlue 
  };

  // Dark Mode Colors (LogoBlanco logic)
  const darkModeColors = {
    iconCircle: lime,
    iconDot: lightGreen,
    text: white,
    specialLetterA: lime, // The 'a' becomes lime in dark mode
    firstLetterF: darkBlue // The 'F' stays dark in dark mode? (Based on LogoBlanco.tsx Vector_3)
  };

  const colors = isDarkTheme ? darkModeColors : lightModeColors;

  return (
    <div className={cn("flex items-center", className)}>
      <svg 
        viewBox="0 0 477 91" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={cn("block", sizeClasses[size])}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Icon Circle */}
        <path d={ProjectAssets.logoParts.circle} fill={colors.iconCircle} />
        {/* Icon Dot */}
        <path d={ProjectAssets.logoParts.dot} fill={colors.iconDot} />
        
        {/* Text 'F' - Vector_3 */}
        <path d={ProjectAssets.logoParts.shapeF} fill={isDarkTheme ? colors.firstLetterF : colors.text} />
        
        {/* Text 'i' - Vector_4 */}
        <path d={ProjectAssets.logoParts.shape4} fill={colors.text} />
        
        {/* Text 'n' - Vector_5 */}
        <path d={ProjectAssets.logoParts.shape5} fill={colors.text} />
        
        {/* Text 'a' (Special) - Vector_6 */}
        <path d={ProjectAssets.logoParts.shape6} fill={isDarkTheme ? colors.specialLetterA : colors.text} />
        
        {/* Text 'n' - Vector_7 */}
        <path d={ProjectAssets.logoParts.shape7} fill={colors.text} />
        
        {/* Text 'c' - Vector_8 */}
        <path d={ProjectAssets.logoParts.shape8} fill={colors.text} />
        
        {/* Text 'i' - Vector_9 */}
        <path d={ProjectAssets.logoParts.shape9} fill={colors.text} />
        
        {/* Text 'a' - Vector_10 */}
        <path d={ProjectAssets.logoParts.shape10} fill={colors.text} />
        
        {/* Underline/Accent? - Vector_11 */}
        <path d={ProjectAssets.logoParts.shape11} fill={colors.text} />
        
        {/* Group Vector_12 */}
        <path d={ProjectAssets.logoParts.shape12} fill={colors.text} />
        
        {/* Group Vector_13 */}
        <path d={ProjectAssets.logoParts.shape13} fill={colors.text} />
      </svg>
    </div>
  );
}
