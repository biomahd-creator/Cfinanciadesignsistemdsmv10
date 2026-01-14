import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useState, useMemo } from "react";

// Importar TODOS los iconos más populares de lucide-react
import {
  // Arrows & Navigation
  ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ArrowUpRight, ArrowDownLeft, ArrowUpLeft, ArrowDownRight,
  ArrowBigLeft, ArrowBigRight, ArrowBigUp, ArrowBigDown,
  ChevronLeft, ChevronRight, ChevronUp, ChevronDown, ChevronsLeft, ChevronsRight, ChevronsUp, ChevronsDown,
  ChevronsUpDown, ChevronsLeftRight,
  MoveHorizontal, MoveVertical, Move, MoveDiagonal, MoveDiagonal2,
  Compass, Navigation, Navigation2, Map, MapPin, MapPinOff, MapPinned, Route, Milestone, Signpost, Waypoints,
  CornerDownLeft, CornerDownRight, CornerUpLeft, CornerUpRight,
  CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp,
  
  // Actions & Editing
  Plus, PlusCircle, PlusSquare, Minus, MinusCircle, MinusSquare,
  X, XCircle, XSquare, XOctagon,
  Check, CheckCircle as CheckCircleAction, CheckCircle2 as CheckCircle2Action, CheckSquare,
  Copy, CopyCheck, CopyPlus, CopyMinus, CopyX,
  Scissors, Edit, Edit2, Edit3, Pencil, PencilLine, Pen, PenTool,
  Save, SaveAll, Download, Upload, Share, Share2, Send, SendHorizonal,
  RefreshCw, RefreshCcw, RotateCw, RotateCcw, Rotate3d,
  Trash, Trash2, Delete,
  ZoomIn, ZoomOut, Maximize, Maximize2, Minimize, Minimize2, Expand, Shrink,
  Undo, Undo2, Redo, Redo2, Repeat, Repeat1, Shuffle,
  Search, SearchCheck, SearchX, SearchCode,
  Filter, FilterX, Settings, Settings2, Sliders, SlidersHorizontal,
  ScanLine, ScanEye, Scan,
  
  // UI & Layout
  Layout, LayoutDashboard, LayoutGrid, LayoutList, LayoutTemplate, LayoutPanelLeft, LayoutPanelTop,
  Sidebar, SidebarOpen, SidebarClose, Menu, MenuSquare,
  MoreHorizontal, MoreVertical,
  Grid, Grid2x2, Grid3x3, List, ListChecks, ListTodo, ListX, ListPlus, ListMinus,
  Columns, Rows, PanelLeft, PanelRight, PanelTop, PanelBottom,
  PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  AlignHorizontalDistributeCenter, AlignVerticalDistributeCenter,
  AlignStartVertical, AlignEndVertical, AlignStartHorizontal, AlignEndHorizontal,
  Table, Table2, Grip, GripVertical, GripHorizontal,
  Fullscreen, AppWindow, AppWindowMac,
  Square, SquareStack, Circle, Triangle, RectangleHorizontal, RectangleVertical,
  Frame, Boxes, Box, BoxSelect,
  
  // Communication & Social
  Mail, MailCheck, MailOpen, MailPlus, MailQuestion, MailX,
  Inbox, Send as SendIcon, Mails,
  MessageCircle, MessageCircleMore, MessageSquare, MessageSquareMore, MessageSquarePlus,
  MessagesSquare, Reply, ReplyAll, Forward,
  Phone, PhoneCall, PhoneIncoming, PhoneOutgoing, PhoneMissed, PhoneForwarded, PhoneOff,
  Video, VideoOff, Mic, MicOff,
  Volume, Volume1, Volume2, VolumeX,
  Bell, BellOff, BellRing, BellPlus, BellMinus, BellDot,
  AtSign, Hash, Smile, SmilePlus, Frown, Laugh, Meh, ThumbsUp, ThumbsDown,
  Heart, HeartHandshake, HeartCrack, HeartOff,
  
  // Media & Files
  File, FileText, FileType, FileType2, FilePlus, FileMinus, FileEdit,
  FileCheck, FileCheck2, FileX, FileX2, FileWarning, FileQuestion,
  FileArchive, FileAudio, FileVideo, FileImage,
  FileCode, FileCode2, FileJson, FileClock, FileHeart,
  Files, FilePlus2, FileMinus2, FileInput, FileOutput,
  Folder, FolderOpen, FolderPlus, FolderMinus, FolderCheck, FolderX,
  FolderArchive, FolderClock, FolderEdit, FolderHeart, FolderInput, FolderOutput,
  FolderRoot, FolderSearch, FolderTree, Folders,
  Image, ImagePlus, ImageMinus, Images, ImageOff,
  Camera, CameraOff,
  Video as VideoIcon, Film, Music, Music2, Music3, Music4, Headphones, HeadphonesOff, Radio,
  Play, PlayCircle, PlaySquare, Pause, PauseCircle,
  StopCircle, SkipBack, SkipForward, FastForward, Rewind,
  Disc, Disc2, Disc3,
  
  // Status & Alerts
  CheckCircle, CheckCircle2, XCircle, XOctagon as XOctagonStatus,
  AlertCircle, AlertTriangle, AlertOctagon,
  Info, HelpCircle,
  Ban, ShieldAlert, ShieldCheck, ShieldClose, ShieldX, ShieldQuestion, ShieldOff,
  Lock, LockOpen, Unlock, LockKeyhole,
  Eye, EyeOff, EyeClosed,
  Verified, BadgeCheck, BadgeAlert, BadgeX, BadgeInfo, BadgePlus, BadgeMinus,
  Star, StarHalf, StarOff,
  Flag, FlagOff, FlagTriangleLeft, FlagTriangleRight,
  Award, Trophy, Medal,
  Bookmark, BookmarkCheck, BookmarkMinus, BookmarkPlus, BookmarkX,
  Timer, TimerOff, TimerReset,
  Power, PowerOff, ToggleLeft, ToggleRight,
  
  // User & People
  User, User2, Users, Users2, UserPlus, UserMinus, UserCheck, UserX,
  Contact, Contact2, UserCircle, UserCircle2, UserSquare, UserSquare2,
  UserCog, UserRound, UserRoundPlus, UserRoundMinus, UserRoundCheck, UserRoundX, UserRoundCog,
  
  // Commerce & Shopping
  ShoppingCart, ShoppingBag, Store, CreditCard,
  DollarSign, Euro, PoundSterling, Coins, Banknote,
  Wallet, Wallet2, WalletCards,
  Tag, Tags, Ticket, TicketCheck, TicketMinus, TicketPlus, TicketX,
  Receipt, ReceiptText,
  BadgeDollarSign, BadgeEuro, BadgePoundSterling,
  Percent, PercentCircle, PercentSquare,
  
  // Time & Calendar
  Calendar, CalendarDays, CalendarCheck, CalendarCheck2, CalendarClock, CalendarHeart,
  CalendarPlus, CalendarMinus, CalendarX, CalendarX2, CalendarRange,
  Clock, Clock1, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12,
  Timer as TimerIcon, Hourglass, Watch, AlarmClock, AlarmClockCheck, AlarmClockOff,
  
  // Weather & Nature
  Sun, SunMedium, SunMoon, Sunrise, Sunset, SunDim, SunSnow,
  Moon, MoonStar, CloudMoon, CloudMoonRain, CloudSun, CloudSunRain,
  Cloud, CloudRain, CloudSnow, CloudDrizzle, CloudFog, CloudHail, CloudLightning,
  CloudRainWind, Cloudy, Wind, Snowflake, Tornado,
  Umbrella, UmbrellaOff, Zap, ZapOff,
  Leaf, TreeDeciduous, TreePine,
  Flower, Flower2, Sprout, Waves, Droplet, Droplets,
  
  // Technology & Development
  Code, Code2, Terminal, TerminalSquare,
  Bug, BugOff, BugPlay,
  Database, DatabaseBackup, DatabaseZap,
  Server, ServerCog, ServerCrash, ServerOff,
  CloudCog, CloudDownload, CloudUpload, CloudOff,
  Wifi, WifiOff, WifiHigh, WifiLow, WifiZero,
  Bluetooth, BluetoothConnected, BluetoothOff, BluetoothSearching,
  Usb, Nfc, Cast, CastOff,
  HardDrive, HardDriveDownload, HardDriveUpload,
  Cpu, MemoryStick, BatteryCharging, BatteryFull, BatteryLow, BatteryMedium, BatteryWarning,
  Plug, Plug2, PlugZap, PlugZap2, Cable, Unplug,
  Monitor, MonitorCheck, MonitorDown, MonitorOff, MonitorPlay, MonitorSmartphone, MonitorSpeaker,
  Keyboard, Mouse, MousePointer, MousePointer2, MousePointerClick,
  Printer,
  Smartphone, SmartphoneCharging, SmartphoneNfc,
  Tablet, TabletSmartphone,
  Laptop, Laptop2,
  Tv, Tv2,
  Gamepad2, Gamepad, Joystick,
  Signal, SignalHigh, SignalLow, SignalMedium, SignalZero, Rss,
  
  // Transport & Travel
  Car, CarFront, CarTaxiFront,
  Bike, Bus, BusFront,
  Train, TrainFront, TrainTrack,
  Plane, PlaneLanding, PlaneTakeoff,
  Ship, ShipWheel, Sailboat,
  Rocket, Satellite, SatelliteDish,
  Truck, TramFront, Ambulance,
  Anchor, Fuel,
  ParkingCircle, ParkingMeter, ParkingSquare,
  Map as MapIcon, MapPinned as MapPinnedIcon, Navigation as NavigationIcon, Waypoints as WaypointsIcon,
  
  // Home & Building
  Home, House, HousePlus, HousePlug,
  Building, Building2, Hotel, School, Church, Landmark,
  Factory, Warehouse, Store as StoreBuilding,
  DoorOpen, DoorClosed,
  Bed, BedDouble, BedSingle,
  Sofa, Armchair,
  Lamp, LampCeiling, LampDesk, LampFloor, LampWallDown, LampWallUp,
  Lightbulb, LightbulbOff,
  Key, KeyRound, KeySquare,
  
  // Food & Dining
  Coffee, UtensilsCrossed, Utensils,
  Pizza, Croissant, Sandwich, Salad, Soup,
  Apple, Cherry, Grape, Banana, CakeSlice, Cookie, Candy, CandyCane,
  Fish, FishOff,
  Egg, EggCracked, EggFried, EggOff,
  Milk, MilkOff,
  Wine, WineOff, Beer, BeerOff, GlassWater, Martini,
  Beef, Ham, Popcorn, IceCream, IceCreamBowl, IceCreamCone,
  
  // Health & Medical
  Heart as HeartIcon, Activity,
  Pill, PillBottle, Syringe,
  Thermometer, ThermometerSnowflake, ThermometerSun,
  Stethoscope, Bandage,
  Brain, BrainCircuit, BrainCog,
  Dna, DnaOff,
  Glasses, Microscope, PersonStanding,
  
  // Sports & Games
  Trophy as TrophyIcon, Medal as MedalIcon,
  Target, Crosshair, Focus,
  Dices, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6,
  Gamepad as GamepadSport,
  Dumbbell, Weight,
  Bike as BikeIcon, Trophy as TrophySport,
  Sparkles, Sparkle, Flame, Award as AwardSport,
  Gem, Crown, Shirt,
  
  // Charts & Data
  BarChart, BarChart2, BarChart3, BarChart4, BarChartBig, BarChartHorizontal, BarChartHorizontalBig,
  LineChart, PieChart,
  TrendingUp, TrendingDown,
  Activity as ActivityIcon, AreaChart, Percent, Binary,
  ChartArea, ChartBar, ChartLine, ChartPie, ChartSpline,
  
  // Settings & Tools
  Settings as SettingsIcon, Settings2 as Settings2Icon,
  Wrench, Hammer, Drill, Gauge,
  Tool, Pickaxe, Shovel,
  Ruler, Paintbrush, Paintbrush2, PaintBucket,
  Palette, Pipette, Eraser,
  Sliders as SlidersIcon, Filter as FilterIcon,
  Cog, Construction, GitBranch, GitCommit, GitMerge, GitPullRequest,
  
  // Shapes & Design
  Square as SquareIcon, SquareCheck, SquareDot, SquareDashed,
  Circle as CircleIcon, CircleDot, CircleDashed,
  Triangle as TriangleIcon, TriangleRight,
  Hexagon, Octagon,
  Diamond, DiamondPercent,
  Star as StarIcon, Heart as HeartShape,
  Pentagon, Shapes,
  
  // Text & Typography
  Type, ALargeSmall, AArrowDown, AArrowUp,
  Bold, Italic, Underline,
  AlignLeft as AlignLeftIcon, AlignCenter as AlignCenterIcon,
  AlignRight as AlignRightIcon, AlignJustify as AlignJustifyIcon,
  List as ListIcon, ListOrdered, ListChecks as ListChecksIcon,
  Indent, Outdent,
  Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6,
  Pilcrow, Quote,
  CaseSensitive, CaseLower, CaseUpper,
  Strikethrough, Subscript, Superscript,
  Baseline, WrapText, RemoveFormatting,
  SpellCheck, SpellCheck2, Languages,
  WholeWord,
  
  // Additional Popular Icons
  Globe, Globe2, GlobeLock,
  Link, Link2, LinkIcon, ExternalLink, Unlink, Unlink2,
  Briefcase, BriefcaseBusiness, BriefcaseMedical,
  Package, Package2, PackageCheck, PackageMinus, PackageOpen, PackagePlus, PackageSearch, PackageX,
  Box as BoxIcon, Archive, ArchiveRestore, ArchiveX,
  Bookmark as BookmarkIcon,
  BookOpen, BookOpenCheck, BookOpenText, Book, BookCopy, BookMarked, BookText, BookType,
  Library, Notebook, NotebookPen, NotebookTabs, NotebookText,
  FileCode as FileCodeIcon,
  Github, Gitlab, Linkedin, Twitter, Facebook, Instagram, Youtube, Chrome, Slack, Figma, Trello,
  Anchor as AnchorIcon, Aperture, Atom,
  Bell as BellIcon, Blocks, Bolt, Radius, Ratio,
  Repeat as RepeatIcon, Component, Layers, Layers2, Layers3,
  Wand, Wand2, Workflow, Zap as ZapIcon
} from "lucide-react";

/**
 * IconGalleryPage
 * 
 * Galería curada de 300+ iconos más populares de lucide-react organizados por categorías.
 * Incluye búsqueda en tiempo real, ejemplos de uso y mejores prácticas.
 * 
 * @component
 * @example
 * ```tsx
 * <IconGalleryPage />
 * ```
 */

// Tipos y utilidades
type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number; fill?: string }>;

interface IconEntry {
  name: string;
  Icon: IconComponent;
  importName: string;
}

/**
 * Catálogo completo de iconos organizados por categoría
 */
const ICON_CATALOG: Record<string, IconEntry[]> = {
  arrows: [
    { name: "arrow-left", Icon: ArrowLeft, importName: "ArrowLeft" },
    { name: "arrow-right", Icon: ArrowRight, importName: "ArrowRight" },
    { name: "arrow-up", Icon: ArrowUp, importName: "ArrowUp" },
    { name: "arrow-down", Icon: ArrowDown, importName: "ArrowDown" },
    { name: "arrow-up-right", Icon: ArrowUpRight, importName: "ArrowUpRight" },
    { name: "arrow-down-left", Icon: ArrowDownLeft, importName: "ArrowDownLeft" },
    { name: "arrow-up-left", Icon: ArrowUpLeft, importName: "ArrowUpLeft" },
    { name: "arrow-down-right", Icon: ArrowDownRight, importName: "ArrowDownRight" },
    { name: "chevron-left", Icon: ChevronLeft, importName: "ChevronLeft" },
    { name: "chevron-right", Icon: ChevronRight, importName: "ChevronRight" },
    { name: "chevron-up", Icon: ChevronUp, importName: "ChevronUp" },
    { name: "chevron-down", Icon: ChevronDown, importName: "ChevronDown" },
    { name: "chevrons-left", Icon: ChevronsLeft, importName: "ChevronsLeft" },
    { name: "chevrons-right", Icon: ChevronsRight, importName: "ChevronsRight" },
    { name: "chevrons-up", Icon: ChevronsUp, importName: "ChevronsUp" },
    { name: "chevrons-down", Icon: ChevronsDown, importName: "ChevronsDown" },
    { name: "move-horizontal", Icon: MoveHorizontal, importName: "MoveHorizontal" },
    { name: "move-vertical", Icon: MoveVertical, importName: "MoveVertical" },
    { name: "move", Icon: Move, importName: "Move" },
    { name: "compass", Icon: Compass, importName: "Compass" },
    { name: "navigation", Icon: Navigation, importName: "Navigation" },
    { name: "map", Icon: Map, importName: "Map" },
    { name: "map-pin", Icon: MapPin, importName: "MapPin" },
    { name: "route", Icon: Route, importName: "Route" },
    { name: "milestone", Icon: Milestone, importName: "Milestone" },
    { name: "corner-down-left", Icon: CornerDownLeft, importName: "CornerDownLeft" },
    { name: "corner-down-right", Icon: CornerDownRight, importName: "CornerDownRight" },
    { name: "corner-up-left", Icon: CornerUpLeft, importName: "CornerUpLeft" },
    { name: "corner-up-right", Icon: CornerUpRight, importName: "CornerUpRight" },
  ],
  actions: [
    { name: "plus", Icon: Plus, importName: "Plus" },
    { name: "minus", Icon: Minus, importName: "Minus" },
    { name: "x", Icon: X, importName: "X" },
    { name: "check", Icon: Check, importName: "Check" },
    { name: "copy", Icon: Copy, importName: "Copy" },
    { name: "scissors", Icon: Scissors, importName: "Scissors" },
    { name: "edit", Icon: Edit, importName: "Edit" },
    { name: "edit-2", Icon: Edit2, importName: "Edit2" },
    { name: "edit-3", Icon: Edit3, importName: "Edit3" },
    { name: "pencil", Icon: Pencil, importName: "Pencil" },
    { name: "pen", Icon: Pen, importName: "Pen" },
    { name: "save", Icon: Save, importName: "Save" },
    { name: "download", Icon: Download, importName: "Download" },
    { name: "upload", Icon: Upload, importName: "Upload" },
    { name: "share", Icon: Share, importName: "Share" },
    { name: "share-2", Icon: Share2, importName: "Share2" },
    { name: "send", Icon: Send, importName: "Send" },
    { name: "refresh-cw", Icon: RefreshCw, importName: "RefreshCw" },
    { name: "rotate-cw", Icon: RotateCw, importName: "RotateCw" },
    { name: "rotate-ccw", Icon: RotateCcw, importName: "RotateCcw" },
    { name: "trash", Icon: Trash, importName: "Trash" },
    { name: "trash-2", Icon: Trash2, importName: "Trash2" },
    { name: "delete", Icon: Delete, importName: "Delete" },
    { name: "zoom-in", Icon: ZoomIn, importName: "ZoomIn" },
    { name: "zoom-out", Icon: ZoomOut, importName: "ZoomOut" },
    { name: "maximize", Icon: Maximize, importName: "Maximize" },
    { name: "maximize-2", Icon: Maximize2, importName: "Maximize2" },
    { name: "minimize", Icon: Minimize, importName: "Minimize" },
    { name: "minimize-2", Icon: Minimize2, importName: "Minimize2" },
    { name: "undo", Icon: Undo, importName: "Undo" },
    { name: "redo", Icon: Redo, importName: "Redo" },
    { name: "repeat", Icon: Repeat, importName: "Repeat" },
    { name: "shuffle", Icon: Shuffle, importName: "Shuffle" },
    { name: "search", Icon: Search, importName: "Search" },
    { name: "filter", Icon: Filter, importName: "Filter" },
    { name: "settings", Icon: Settings, importName: "Settings" },
    { name: "sliders", Icon: Sliders, importName: "Sliders" },
    { name: "sliders-horizontal", Icon: SlidersHorizontal, importName: "SlidersHorizontal" },
  ],
  layout: [
    { name: "layout", Icon: Layout, importName: "Layout" },
    { name: "layout-dashboard", Icon: LayoutDashboard, importName: "LayoutDashboard" },
    { name: "layout-grid", Icon: LayoutGrid, importName: "LayoutGrid" },
    { name: "layout-list", Icon: LayoutList, importName: "LayoutList" },
    { name: "sidebar", Icon: Sidebar, importName: "Sidebar" },
    { name: "menu", Icon: Menu, importName: "Menu" },
    { name: "more-horizontal", Icon: MoreHorizontal, importName: "MoreHorizontal" },
    { name: "more-vertical", Icon: MoreVertical, importName: "MoreVertical" },
    { name: "grid", Icon: Grid, importName: "Grid" },
    { name: "list", Icon: List, importName: "List" },
    { name: "columns", Icon: Columns, importName: "Columns" },
    { name: "rows", Icon: Rows, importName: "Rows" },
    { name: "panel-left", Icon: PanelLeft, importName: "PanelLeft" },
    { name: "panel-right", Icon: PanelRight, importName: "PanelRight" },
    { name: "panel-top", Icon: PanelTop, importName: "PanelTop" },
    { name: "panel-bottom", Icon: PanelBottom, importName: "PanelBottom" },
    { name: "align-left", Icon: AlignLeft, importName: "AlignLeft" },
    { name: "align-center", Icon: AlignCenter, importName: "AlignCenter" },
    { name: "align-right", Icon: AlignRight, importName: "AlignRight" },
    { name: "align-justify", Icon: AlignJustify, importName: "AlignJustify" },
    { name: "table", Icon: Table, importName: "Table" },
    { name: "grip", Icon: Grip, importName: "Grip" },
    { name: "grip-vertical", Icon: GripVertical, importName: "GripVertical" },
    { name: "grip-horizontal", Icon: GripHorizontal, importName: "GripHorizontal" },
    { name: "fullscreen", Icon: Fullscreen, importName: "Fullscreen" },
    { name: "app-window", Icon: AppWindow, importName: "AppWindow" },
    { name: "square", Icon: Square, importName: "Square" },
    { name: "circle", Icon: Circle, importName: "Circle" },
    { name: "triangle", Icon: Triangle, importName: "Triangle" },
  ],
  communication: [
    { name: "mail", Icon: Mail, importName: "Mail" },
    { name: "inbox", Icon: Inbox, importName: "Inbox" },
    { name: "send", Icon: SendIcon, importName: "Send" },
    { name: "message-circle", Icon: MessageCircle, importName: "MessageCircle" },
    { name: "message-square", Icon: MessageSquare, importName: "MessageSquare" },
    { name: "phone", Icon: Phone, importName: "Phone" },
    { name: "phone-call", Icon: PhoneCall, importName: "PhoneCall" },
    { name: "phone-incoming", Icon: PhoneIncoming, importName: "PhoneIncoming" },
    { name: "phone-outgoing", Icon: PhoneOutgoing, importName: "PhoneOutgoing" },
    { name: "video", Icon: Video, importName: "Video" },
    { name: "video-off", Icon: VideoOff, importName: "VideoOff" },
    { name: "mic", Icon: Mic, importName: "Mic" },
    { name: "mic-off", Icon: MicOff, importName: "MicOff" },
    { name: "volume", Icon: Volume, importName: "Volume" },
    { name: "volume-2", Icon: Volume2, importName: "Volume2" },
    { name: "volume-x", Icon: VolumeX, importName: "VolumeX" },
    { name: "bell", Icon: Bell, importName: "Bell" },
    { name: "bell-off", Icon: BellOff, importName: "BellOff" },
    { name: "bell-ring", Icon: BellRing, importName: "BellRing" },
    { name: "at-sign", Icon: AtSign, importName: "AtSign" },
    { name: "hash", Icon: Hash, importName: "Hash" },
    { name: "smile", Icon: Smile, importName: "Smile" },
    { name: "frown", Icon: Frown, importName: "Frown" },
    { name: "meh", Icon: Meh, importName: "Meh" },
    { name: "thumbs-up", Icon: ThumbsUp, importName: "ThumbsUp" },
    { name: "thumbs-down", Icon: ThumbsDown, importName: "ThumbsDown" },
    { name: "heart", Icon: Heart, importName: "Heart" },
  ],
  media: [
    { name: "file", Icon: File, importName: "File" },
    { name: "file-text", Icon: FileText, importName: "FileText" },
    { name: "file-plus", Icon: FilePlus, importName: "FilePlus" },
    { name: "file-minus", Icon: FileMinus, importName: "FileMinus" },
    { name: "file-edit", Icon: FileEdit, importName: "FileEdit" },
    { name: "folder", Icon: Folder, importName: "Folder" },
    { name: "folder-open", Icon: FolderOpen, importName: "FolderOpen" },
    { name: "folder-plus", Icon: FolderPlus, importName: "FolderPlus" },
    { name: "image", Icon: Image, importName: "Image" },
    { name: "camera", Icon: Camera, importName: "Camera" },
    { name: "video", Icon: VideoIcon, importName: "Video" },
    { name: "film", Icon: Film, importName: "Film" },
    { name: "music", Icon: Music, importName: "Music" },
    { name: "headphones", Icon: Headphones, importName: "Headphones" },
    { name: "radio", Icon: Radio, importName: "Radio" },
    { name: "play", Icon: Play, importName: "Play" },
    { name: "pause", Icon: Pause, importName: "Pause" },
    { name: "stop-circle", Icon: StopCircle, importName: "StopCircle" },
    { name: "skip-back", Icon: SkipBack, importName: "SkipBack" },
    { name: "skip-forward", Icon: SkipForward, importName: "SkipForward" },
    { name: "fast-forward", Icon: FastForward, importName: "FastForward" },
    { name: "rewind", Icon: Rewind, importName: "Rewind" },
    { name: "disc", Icon: Disc, importName: "Disc" },
  ],
  status: [
    { name: "check-circle", Icon: CheckCircle, importName: "CheckCircle" },
    { name: "check-circle-2", Icon: CheckCircle2, importName: "CheckCircle2" },
    { name: "x-circle", Icon: XCircle, importName: "XCircle" },
    { name: "alert-circle", Icon: AlertCircle, importName: "AlertCircle" },
    { name: "alert-triangle", Icon: AlertTriangle, importName: "AlertTriangle" },
    { name: "info", Icon: Info, importName: "Info" },
    { name: "help-circle", Icon: HelpCircle, importName: "HelpCircle" },
    { name: "ban", Icon: Ban, importName: "Ban" },
    { name: "shield-alert", Icon: ShieldAlert, importName: "ShieldAlert" },
    { name: "shield-check", Icon: ShieldCheck, importName: "ShieldCheck" },
    { name: "lock", Icon: Lock, importName: "Lock" },
    { name: "unlock", Icon: Unlock, importName: "Unlock" },
    { name: "eye", Icon: Eye, importName: "Eye" },
    { name: "eye-off", Icon: EyeOff, importName: "EyeOff" },
    { name: "verified", Icon: Verified, importName: "Verified" },
    { name: "star", Icon: Star, importName: "Star" },
    { name: "flag", Icon: Flag, importName: "Flag" },
    { name: "award", Icon: Award, importName: "Award" },
    { name: "trophy", Icon: Trophy, importName: "Trophy" },
    { name: "medal", Icon: Medal, importName: "Medal" },
    { name: "bookmark", Icon: Bookmark, importName: "Bookmark" },
  ],
  user: [
    { name: "user", Icon: User, importName: "User" },
    { name: "users", Icon: Users, importName: "Users" },
    { name: "user-plus", Icon: UserPlus, importName: "UserPlus" },
    { name: "user-minus", Icon: UserMinus, importName: "UserMinus" },
    { name: "user-check", Icon: UserCheck, importName: "UserCheck" },
    { name: "user-x", Icon: UserX, importName: "UserX" },
    { name: "contact", Icon: Contact, importName: "Contact" },
    { name: "user-circle", Icon: UserCircle, importName: "UserCircle" },
    { name: "user-square", Icon: UserSquare, importName: "UserSquare" },
  ],
  commerce: [
    { name: "shopping-cart", Icon: ShoppingCart, importName: "ShoppingCart" },
    { name: "shopping-bag", Icon: ShoppingBag, importName: "ShoppingBag" },
    { name: "store", Icon: Store, importName: "Store" },
    { name: "credit-card", Icon: CreditCard, importName: "CreditCard" },
    { name: "dollar-sign", Icon: DollarSign, importName: "DollarSign" },
    { name: "euro", Icon: Euro, importName: "Euro" },
    { name: "pound-sterling", Icon: PoundSterling, importName: "PoundSterling" },
    { name: "tag", Icon: Tag, importName: "Tag" },
    { name: "tags", Icon: Tags, importName: "Tags" },
    { name: "ticket", Icon: Ticket, importName: "Ticket" },
    { name: "receipt", Icon: Receipt, importName: "Receipt" },
    { name: "wallet", Icon: Wallet, importName: "Wallet" },
    { name: "coins", Icon: Coins, importName: "Coins" },
    { name: "banknote", Icon: Banknote, importName: "Banknote" },
  ],
  time: [
    { name: "calendar", Icon: Calendar, importName: "Calendar" },
    { name: "calendar-days", Icon: CalendarDays, importName: "CalendarDays" },
    { name: "clock", Icon: Clock, importName: "Clock" },
    { name: "timer", Icon: Timer, importName: "Timer" },
    { name: "hourglass", Icon: Hourglass, importName: "Hourglass" },
    { name: "watch", Icon: Watch, importName: "Watch" },
    { name: "alarm-clock", Icon: AlarmClock, importName: "AlarmClock" },
    { name: "calendar-check", Icon: CalendarCheck, importName: "CalendarCheck" },
  ],
  weather: [
    { name: "sun", Icon: Sun, importName: "Sun" },
    { name: "moon", Icon: Moon, importName: "Moon" },
    { name: "cloud", Icon: Cloud, importName: "Cloud" },
    { name: "cloud-rain", Icon: CloudRain, importName: "CloudRain" },
    { name: "cloud-snow", Icon: CloudSnow, importName: "CloudSnow" },
    { name: "wind", Icon: Wind, importName: "Wind" },
    { name: "umbrella", Icon: Umbrella, importName: "Umbrella" },
    { name: "zap", Icon: Zap, importName: "Zap" },
    { name: "leaf", Icon: Leaf, importName: "Leaf" },
    { name: "flower", Icon: Flower, importName: "Flower" },
    { name: "flower-2", Icon: Flower2, importName: "Flower2" },
    { name: "sprout", Icon: Sprout, importName: "Sprout" },
    { name: "tree-deciduous", Icon: TreeDeciduous, importName: "TreeDeciduous" },
    { name: "tree-pine", Icon: TreePine, importName: "TreePine" },
  ],
  tech: [
    { name: "code", Icon: Code, importName: "Code" },
    { name: "code-2", Icon: Code2, importName: "Code2" },
    { name: "terminal", Icon: Terminal, importName: "Terminal" },
    { name: "bug", Icon: Bug, importName: "Bug" },
    { name: "database", Icon: Database, importName: "Database" },
    { name: "server", Icon: Server, importName: "Server" },
    { name: "cloud-cog", Icon: CloudCog, importName: "CloudCog" },
    { name: "wifi", Icon: Wifi, importName: "Wifi" },
    { name: "wifi-off", Icon: WifiOff, importName: "WifiOff" },
    { name: "bluetooth", Icon: Bluetooth, importName: "Bluetooth" },
    { name: "usb", Icon: Usb, importName: "Usb" },
    { name: "hard-drive", Icon: HardDrive, importName: "HardDrive" },
    { name: "cpu", Icon: Cpu, importName: "Cpu" },
    { name: "monitor", Icon: Monitor, importName: "Monitor" },
    { name: "keyboard", Icon: Keyboard, importName: "Keyboard" },
    { name: "mouse", Icon: Mouse, importName: "Mouse" },
    { name: "printer", Icon: Printer, importName: "Printer" },
    { name: "smartphone", Icon: Smartphone, importName: "Smartphone" },
    { name: "tablet", Icon: Tablet, importName: "Tablet" },
    { name: "laptop", Icon: Laptop, importName: "Laptop" },
    { name: "tv", Icon: Tv, importName: "Tv" },
    { name: "gamepad-2", Icon: Gamepad2, importName: "Gamepad2" },
  ],
  transport: [
    { name: "car", Icon: Car, importName: "Car" },
    { name: "bike", Icon: Bike, importName: "Bike" },
    { name: "bus", Icon: Bus, importName: "Bus" },
    { name: "train", Icon: Train, importName: "Train" },
    { name: "plane", Icon: Plane, importName: "Plane" },
    { name: "ship", Icon: Ship, importName: "Ship" },
    { name: "rocket", Icon: Rocket, importName: "Rocket" },
    { name: "truck", Icon: Truck, importName: "Truck" },
    { name: "ambulance", Icon: Ambulance, importName: "Ambulance" },
    { name: "anchor", Icon: Anchor, importName: "Anchor" },
    { name: "fuel", Icon: Fuel, importName: "Fuel" },
    { name: "parking-circle", Icon: ParkingCircle, importName: "ParkingCircle" },
  ],
  building: [
    { name: "home", Icon: Home, importName: "Home" },
    { name: "building", Icon: Building, importName: "Building" },
    { name: "building-2", Icon: Building2, importName: "Building2" },
    { name: "hotel", Icon: Hotel, importName: "Hotel" },
    { name: "school", Icon: School, importName: "School" },
    { name: "church", Icon: Church, importName: "Church" },
    { name: "factory", Icon: Factory, importName: "Factory" },
    { name: "warehouse", Icon: Warehouse, importName: "Warehouse" },
    { name: "door-open", Icon: DoorOpen, importName: "DoorOpen" },
    { name: "door-closed", Icon: DoorClosed, importName: "DoorClosed" },
    { name: "bed", Icon: Bed, importName: "Bed" },
    { name: "sofa", Icon: Sofa, importName: "Sofa" },
    { name: "lamp", Icon: Lamp, importName: "Lamp" },
    { name: "key", Icon: Key, importName: "Key" },
  ],
  food: [
    { name: "coffee", Icon: Coffee, importName: "Coffee" },
    { name: "utensils-crossed", Icon: UtensilsCrossed, importName: "UtensilsCrossed" },
    { name: "pizza", Icon: Pizza, importName: "Pizza" },
    { name: "apple", Icon: Apple, importName: "Apple" },
    { name: "cherry", Icon: Cherry, importName: "Cherry" },
    { name: "grape", Icon: Grape, importName: "Grape" },
    { name: "fish", Icon: Fish, importName: "Fish" },
    { name: "egg", Icon: Egg, importName: "Egg" },
    { name: "milk", Icon: Milk, importName: "Milk" },
    { name: "wine", Icon: Wine, importName: "Wine" },
    { name: "beer", Icon: Beer, importName: "Beer" },
    { name: "glass-water", Icon: GlassWater, importName: "GlassWater" },
    { name: "beef", Icon: Beef, importName: "Beef" },
    { name: "ice-cream", Icon: IceCream, importName: "IceCream" },
  ],
  health: [
    { name: "heart", Icon: HeartIcon, importName: "Heart" },
    { name: "activity", Icon: Activity, importName: "Activity" },
    { name: "pill", Icon: Pill, importName: "Pill" },
    { name: "syringe", Icon: Syringe, importName: "Syringe" },
    { name: "thermometer", Icon: Thermometer, importName: "Thermometer" },
    { name: "stethoscope", Icon: Stethoscope, importName: "Stethoscope" },
    { name: "bandage", Icon: Bandage, importName: "Bandage" },
    { name: "brain", Icon: Brain, importName: "Brain" },
    { name: "dna", Icon: Dna, importName: "Dna" },
    { name: "glasses", Icon: Glasses, importName: "Glasses" },
    { name: "person-standing", Icon: PersonStanding, importName: "PersonStanding" },
  ],
  sports: [
    { name: "trophy", Icon: TrophyIcon, importName: "Trophy" },
    { name: "medal", Icon: MedalIcon, importName: "Medal" },
    { name: "target", Icon: Target, importName: "Target" },
    { name: "dices", Icon: Dices, importName: "Dices" },
    { name: "gamepad", Icon: Gamepad, importName: "Gamepad" },
    { name: "dumbbell", Icon: Dumbbell, importName: "Dumbbell" },
    { name: "bike", Icon: BikeIcon, importName: "Bike" },
  ],
  charts: [
    { name: "bar-chart", Icon: BarChart, importName: "BarChart" },
    { name: "bar-chart-2", Icon: BarChart2, importName: "BarChart2" },
    { name: "bar-chart-3", Icon: BarChart3, importName: "BarChart3" },
    { name: "line-chart", Icon: LineChart, importName: "LineChart" },
    { name: "pie-chart", Icon: PieChart, importName: "PieChart" },
    { name: "trending-up", Icon: TrendingUp, importName: "TrendingUp" },
    { name: "trending-down", Icon: TrendingDown, importName: "TrendingDown" },
    { name: "activity", Icon: ActivityIcon, importName: "Activity" },
    { name: "area-chart", Icon: AreaChart, importName: "AreaChart" },
    { name: "percent", Icon: Percent, importName: "Percent" },
    { name: "binary", Icon: Binary, importName: "Binary" },
  ],
  misc: [
    { name: "globe", Icon: Globe, importName: "Globe" },
    { name: "link", Icon: Link, importName: "Link" },
    { name: "external-link", Icon: ExternalLink, importName: "ExternalLink" },
    { name: "briefcase", Icon: Briefcase, importName: "Briefcase" },
    { name: "package", Icon: Package, importName: "Package" },
    { name: "box", Icon: Box, importName: "Box" },
    { name: "archive", Icon: Archive, importName: "Archive" },
    { name: "bookmark", Icon: BookmarkIcon, importName: "Bookmark" },
    { name: "book-open", Icon: BookOpen, importName: "BookOpen" },
    { name: "book", Icon: Book, importName: "Book" },
    { name: "file-code", Icon: FileCode, importName: "FileCode" },
    { name: "github", Icon: Github, importName: "Github" },
    { name: "linkedin", Icon: Linkedin, importName: "Linkedin" },
    { name: "twitter", Icon: Twitter, importName: "Twitter" },
    { name: "facebook", Icon: Facebook, importName: "Facebook" },
    { name: "instagram", Icon: Instagram, importName: "Instagram" },
    { name: "youtube", Icon: Youtube, importName: "Youtube" },
    { name: "chrome", Icon: Chrome, importName: "Chrome" },
    { name: "slack", Icon: Slack, importName: "Slack" },
    { name: "figma", Icon: Figma, importName: "Figma" },
    { name: "trello", Icon: Trello, importName: "Trello" },
  ],
};

/**
 * Labels de categorías con descripciones
 */
const CATEGORY_LABELS: Record<string, { label: string; description: string }> = {
  arrows: { 
    label: "Arrows & Navigation", 
    description: "Direcciones, navegación, movimiento" 
  },
  actions: { 
    label: "Actions & Editing", 
    description: "Acciones, edición, operaciones" 
  },
  layout: { 
    label: "UI & Layout", 
    description: "Layouts, interfaces, estructura" 
  },
  communication: { 
    label: "Communication & Social", 
    description: "Comunicación, redes sociales, mensajes" 
  },
  media: { 
    label: "Media & Files", 
    description: "Archivos, multimedia, documentos" 
  },
  status: { 
    label: "Status & Alerts", 
    description: "Estados, alertas, notificaciones" 
  },
  user: { 
    label: "User & People", 
    description: "Usuarios, perfiles, personas" 
  },
  commerce: { 
    label: "Commerce & Shopping", 
    description: "Comercio, tiendas, pagos" 
  },
  time: { 
    label: "Time & Calendar", 
    description: "Tiempo, fechas, calendario" 
  },
  weather: { 
    label: "Weather & Nature", 
    description: "Clima, naturaleza, ambiente" 
  },
  tech: { 
    label: "Technology & Dev", 
    description: "Tecnología, desarrollo, código" 
  },
  transport: { 
    label: "Transport & Travel", 
    description: "Transporte, viajes, vehículos" 
  },
  building: { 
    label: "Home & Building", 
    description: "Hogar, edificios, lugares" 
  },
  food: { 
    label: "Food & Dining", 
    description: "Comida, bebidas, restaurantes" 
  },
  health: { 
    label: "Health & Medical", 
    description: "Salud, médico, bienestar" 
  },
  sports: { 
    label: "Sports & Games", 
    description: "Deportes, juegos, entretenimiento" 
  },
  charts: { 
    label: "Charts & Data", 
    description: "Gráficos, datos, analytics" 
  },
  misc: { 
    label: "Miscellaneous", 
    description: "Otros iconos varios" 
  }
};

// Tamaños predefinidos
const ICON_SIZES = [
  { name: "xs", className: "h-3 w-3", description: "12px - Muy pequeño" },
  { name: "sm", className: "h-4 w-4", description: "16px - Pequeño (default)" },
  { name: "md", className: "h-5 w-5", description: "20px - Mediano" },
  { name: "lg", className: "h-6 w-6", description: "24px - Grande" },
  { name: "xl", className: "h-8 w-8", description: "32px - Muy grande" },
];

// Stroke widths
const STROKE_WIDTHS = [
  { value: 1, description: "Muy delgado" },
  { value: 1.5, description: "Delgado" },
  { value: 2, description: "Normal (default)" },
  { value: 2.5, description: "Grueso" },
  { value: 3, description: "Muy grueso" },
];

/**
 * IconGrid - Componente para renderizar grid de iconos
 */
interface IconGridProps {
  icons: IconEntry[];
  copiedIcon: string | null;
  onCopyIcon: (iconName: string) => void;
}

function IconGrid({ icons, copiedIcon, onCopyIcon }: IconGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
      {icons.map((icon) => {
        const isCopied = copiedIcon === icon.importName;
        
        return (
          <button
            key={icon.name}
            onClick={() => {
              const code = `import { ${icon.importName} } from "lucide-react";`;
              navigator.clipboard.writeText(code);
              onCopyIcon(icon.importName);
            }}
            className="group relative flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-muted transition-colors"
            title={`Click para copiar: ${icon.importName}`}
          >
            <icon.Icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
            <span className="text-xs text-center text-muted-foreground group-hover:text-foreground line-clamp-2">
              {icon.name}
            </span>
            {isCopied && (
              <div className="absolute -top-2 -right-2">
                <Badge className="gap-1 px-1.5 py-0.5 text-xs">
                  <Check className="h-3 w-3" />
                </Badge>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function IconGalleryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Obtener todos los iconos del catálogo
  const allIcons = useMemo(() => {
    const icons: IconEntry[] = [];
    Object.values(ICON_CATALOG).forEach((categoryIcons) => {
      icons.push(...categoryIcons);
    });
    return icons;
  }, []);

  // Filtrar iconos por búsqueda y categoría
  const filteredIcons = useMemo(() => {
    let icons = allIcons;

    // Filtrar por búsqueda
    if (searchQuery) {
      icons = icons.filter((icon) =>
        icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        icon.importName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (selectedCategory !== "all") {
      icons = ICON_CATALOG[selectedCategory] || [];
      
      // Si hay búsqueda, filtrar también dentro de la categoría
      if (searchQuery) {
        icons = icons.filter((icon) =>
          icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          icon.importName.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    }

    return icons;
  }, [allIcons, searchQuery, selectedCategory]);

  // Organizar iconos filtrados por categorías
  const filteredByCategory = useMemo(() => {
    const categorized: Record<string, IconEntry[]> = {};

    if (selectedCategory === "all") {
      // Si está en "all", mostrar todas las categorías con iconos filtrados
      Object.entries(ICON_CATALOG).forEach(([category, categoryIcons]) => {
        const filtered = categoryIcons.filter((icon) =>
          !searchQuery ||
          icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          icon.importName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        if (filtered.length > 0) {
          categorized[category] = filtered;
        }
      });
    } else {
      // Si hay una categoría seleccionada, solo mostrar esa
      if (filteredIcons.length > 0) {
        categorized[selectedCategory] = filteredIcons;
      }
    }

    return categorized;
  }, [filteredIcons, searchQuery, selectedCategory]);

  const totalIcons = allIcons.length;
  const totalCategories = Object.keys(ICON_CATALOG).length;
  const filteredCount = filteredIcons.length;

  const handleCopyIcon = (iconName: string) => {
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div className="space-y-8 max-w-7xl pb-16">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <Palette className="h-8 w-8 text-primary" />
          <h1 className="mb-0">Icon Gallery</h1>
          <Badge variant="outline" className="gap-1">
            lucide-react
          </Badge>
          <Badge className="gap-1">
            {totalIcons} Icons
          </Badge>
          <Badge variant="secondary" className="gap-1">
            {totalCategories} Categories
          </Badge>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mb-6">
          Galería curada de <strong>{totalIcons} iconos</strong> más populares de{" "}
          <strong>lucide-react</strong> organizados en <strong>{totalCategories} categorías</strong>. 
          Click en cualquier icono para copiar el código de importación.
        </p>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar iconos por nombre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
          {searchQuery && (
            <Badge variant="secondary" className="absolute right-3 top-1/2 -translate-y-1/2">
              {filteredCount} encontrados
            </Badge>
          )}
        </div>

        {/* Category Filter */}
        <div className="mt-4 flex gap-2 flex-wrap">
          <Badge
            variant={selectedCategory === "all" ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory("all")}
          >
            Todos ({totalIcons})
          </Badge>
          {Object.entries(ICON_CATALOG).map(([category, icons]) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {CATEGORY_LABELS[category]?.label || category} ({icons.length})
            </Badge>
          ))}
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All Icons</TabsTrigger>
          <TabsTrigger value="sizes">Sizes</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        {/* ALL ICONS */}
        <TabsContent value="all" className="space-y-8">
          {Object.keys(filteredByCategory).length > 0 ? (
            <>
              {Object.entries(filteredByCategory)
                .sort((a, b) => {
                  // Ordenar por número de iconos (mayor a menor)
                  return b[1].length - a[1].length;
                })
                .map(([category, icons]) => (
                  <Card key={category}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>{CATEGORY_LABELS[category]?.label || category}</CardTitle>
                          <CardDescription>
                            {CATEGORY_LABELS[category]?.description || "Iconos varios"} • {icons.length} iconos
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">{icons.length}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <IconGrid 
                        icons={icons} 
                        copiedIcon={copiedIcon} 
                        onCopyIcon={handleCopyIcon} 
                      />
                    </CardContent>
                  </Card>
                ))}
            </>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  No se encontraron iconos con "{searchQuery}"
                </p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-primary hover:underline"
                >
                  Limpiar búsqueda
                </button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* SIZES */}
        <TabsContent value="sizes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Icon Sizes</CardTitle>
              <CardDescription>Tamaños predefinidos para iconos usando clases de Tailwind</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {ICON_SIZES.map(({ name, className, description }) => (
                  <div key={name} className="flex items-center gap-4">
                    <div className="w-16 text-sm font-medium capitalize">{name}</div>
                    <div className="flex items-center gap-6 p-4 rounded-lg border bg-muted/30 flex-1">
                      <Star className={className} />
                      <Heart className={className} />
                      <Bell className={className} />
                      <Settings className={className} />
                      <User className={className} />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {className}
                      </code>
                      <span className="text-xs text-muted-foreground">{description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stroke Width</CardTitle>
              <CardDescription>Grosor del trazo del icono (prop strokeWidth)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {STROKE_WIDTHS.map(({ value, description }) => (
                  <div key={value} className="flex items-center gap-4">
                    <div className="w-16 text-sm font-medium">{value}px</div>
                    <div className="flex items-center gap-6 p-4 rounded-lg border bg-muted/30 flex-1">
                      <Star className="h-6 w-6" strokeWidth={value} />
                      <Heart className="h-6 w-6" strokeWidth={value} />
                      <Bell className="h-6 w-6" strokeWidth={value} />
                      <Settings className="h-6 w-6" strokeWidth={value} />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        strokeWidth={`{${value}}`}
                      </code>
                      <span className="text-xs text-muted-foreground">{description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Combining Size & Stroke</CardTitle>
              <CardDescription>Ejemplos de combinaciones de tamaño y grosor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-6 rounded-lg border bg-muted/30 space-y-3 text-center">
                  <Star className="h-8 w-8 mx-auto" strokeWidth={1} />
                  <div className="space-y-1">
                    <code className="text-xs block">h-8 w-8</code>
                    <code className="text-xs block">strokeWidth={`{1}`}</code>
                  </div>
                </div>
                <div className="p-6 rounded-lg border bg-muted/30 space-y-3 text-center">
                  <Star className="h-8 w-8 mx-auto" strokeWidth={2} />
                  <div className="space-y-1">
                    <code className="text-xs block">h-8 w-8</code>
                    <code className="text-xs block">strokeWidth={`{2}`}</code>
                  </div>
                </div>
                <div className="p-6 rounded-lg border bg-muted/30 space-y-3 text-center">
                  <Star className="h-8 w-8 mx-auto" strokeWidth={3} />
                  <div className="space-y-1">
                    <code className="text-xs block">h-8 w-8</code>
                    <code className="text-xs block">strokeWidth={`{3}`}</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* COLORS */}
        <TabsContent value="colors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Color Variants</CardTitle>
              <CardDescription>Iconos con diferentes colores del sistema de diseño</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-6 rounded-lg border bg-muted/30 space-y-3">
                  <p className="text-sm font-medium">Primary</p>
                  <div className="flex gap-3">
                    <Star className="h-6 w-6 text-primary" />
                    <Heart className="h-6 w-6 text-primary" />
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <code className="text-xs">text-primary</code>
                </div>

                <div className="p-6 rounded-lg border bg-muted/30 space-y-3">
                  <p className="text-sm font-medium">Secondary</p>
                  <div className="flex gap-3">
                    <Star className="h-6 w-6 text-secondary" />
                    <Heart className="h-6 w-6 text-secondary" />
                    <Bell className="h-6 w-6 text-secondary" />
                  </div>
                  <code className="text-xs">text-secondary</code>
                </div>

                <div className="p-6 rounded-lg border bg-muted/30 space-y-3">
                  <p className="text-sm font-medium">Foreground</p>
                  <div className="flex gap-3">
                    <Star className="h-6 w-6 text-foreground" />
                    <Heart className="h-6 w-6 text-foreground" />
                    <Bell className="h-6 w-6 text-foreground" />
                  </div>
                  <code className="text-xs">text-foreground</code>
                </div>

                <div className="p-6 rounded-lg border bg-muted/30 space-y-3">
                  <p className="text-sm font-medium">Muted</p>
                  <div className="flex gap-3">
                    <Star className="h-6 w-6 text-muted-foreground" />
                    <Heart className="h-6 w-6 text-muted-foreground" />
                    <Bell className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <code className="text-xs">text-muted-foreground</code>
                </div>

                <div className="p-6 rounded-lg border bg-destructive/10 space-y-3">
                  <p className="text-sm font-medium">Destructive</p>
                  <div className="flex gap-3">
                    <Trash2 className="h-6 w-6 text-destructive" />
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                    <XCircle className="h-6 w-6 text-destructive" />
                  </div>
                  <code className="text-xs">text-destructive</code>
                </div>

                <div className="p-6 rounded-lg border bg-green-500/10 space-y-3">
                  <p className="text-sm font-medium">Success</p>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <Check className="h-6 w-6 text-green-500" />
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <code className="text-xs">text-green-500</code>
                </div>

                <div className="p-6 rounded-lg border bg-yellow-500/10 space-y-3">
                  <p className="text-sm font-medium">Warning</p>
                  <div className="flex gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-500" />
                    <AlertTriangle className="h-6 w-6 text-yellow-500" />
                    <Bell className="h-6 w-6 text-yellow-500" />
                  </div>
                  <code className="text-xs">text-yellow-500</code>
                </div>

                <div className="p-6 rounded-lg border bg-blue-500/10 space-y-3">
                  <p className="text-sm font-medium">Info</p>
                  <div className="flex gap-3">
                    <Bell className="h-6 w-6 text-blue-500" />
                    <Settings className="h-6 w-6 text-blue-500" />
                    <User className="h-6 w-6 text-blue-500" />
                  </div>
                  <code className="text-xs">text-blue-500</code>
                </div>

                <div className="p-6 rounded-lg border bg-purple-500/10 space-y-3">
                  <p className="text-sm font-medium">Accent</p>
                  <div className="flex gap-3">
                    <Star className="h-6 w-6 text-purple-500" />
                    <Heart className="h-6 w-6 text-purple-500" />
                    <TrendingUp className="h-6 w-6 text-purple-500" />
                  </div>
                  <code className="text-xs">text-purple-500</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fill Variants</CardTitle>
              <CardDescription>Iconos con relleno de color (prop fill)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-8 flex-wrap items-center">
                <div className="space-y-2 text-center">
                  <Heart className="h-10 w-10 text-red-500 mx-auto" />
                  <p className="text-xs">Stroke only</p>
                  <code className="text-xs block">text-red-500</code>
                </div>
                <div className="space-y-2 text-center">
                  <Heart className="h-10 w-10 text-red-500 fill-red-500 mx-auto" />
                  <p className="text-xs">With fill</p>
                  <code className="text-xs block">fill-red-500</code>
                </div>
                <div className="space-y-2 text-center">
                  <Star className="h-10 w-10 text-yellow-500 mx-auto" />
                  <p className="text-xs">Stroke only</p>
                  <code className="text-xs block">text-yellow-500</code>
                </div>
                <div className="space-y-2 text-center">
                  <Star className="h-10 w-10 text-yellow-500 fill-yellow-500 mx-auto" />
                  <p className="text-xs">With fill</p>
                  <code className="text-xs block">fill-yellow-500</code>
                </div>
                <div className="space-y-2 text-center">
                  <Bell className="h-10 w-10 text-primary mx-auto" />
                  <p className="text-xs">Stroke only</p>
                  <code className="text-xs block">text-primary</code>
                </div>
                <div className="space-y-2 text-center">
                  <Bell className="h-10 w-10 text-primary fill-primary mx-auto" />
                  <p className="text-xs">With fill</p>
                  <code className="text-xs block">fill-primary</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* USAGE */}
        <TabsContent value="usage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
              <CardDescription>Instalar lucide-react en tu proyecto</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm mb-2 font-medium">NPM:</p>
                <code className="block p-3 bg-muted rounded text-sm">
                  npm install lucide-react
                </code>
              </div>
              <div>
                <p className="text-sm mb-2 font-medium">Yarn:</p>
                <code className="block p-3 bg-muted rounded text-sm">
                  yarn add lucide-react
                </code>
              </div>
              <div>
                <p className="text-sm mb-2 font-medium">PNPM:</p>
                <code className="block p-3 bg-muted rounded text-sm">
                  pnpm add lucide-react
                </code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Import & Usage</CardTitle>
              <CardDescription>Cómo importar y usar los iconos en tu código</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm mb-2 font-medium">Importar iconos individuales:</p>
                <code className="block p-3 bg-muted rounded text-sm whitespace-pre font-mono">
{`import { Star, Heart, Bell } from "lucide-react";

function MyComponent() {
  return (
    <div>
      <Star className="h-4 w-4" />
      <Heart className="h-4 w-4 text-red-500" />
      <Bell className="h-4 w-4 fill-primary" />
    </div>
  );
}`}
                </code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Props</CardTitle>
              <CardDescription>Propiedades disponibles para todos los iconos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <code className="text-sm font-medium">className</code>
                    <p className="text-xs text-muted-foreground mt-1">Clases CSS (Tailwind) para estilos</p>
                  </div>
                  <code className="text-xs text-muted-foreground">string</code>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <code className="text-sm font-medium">size</code>
                    <p className="text-xs text-muted-foreground mt-1">Tamaño del icono (ancho y alto)</p>
                  </div>
                  <code className="text-xs text-muted-foreground">number | string</code>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <code className="text-sm font-medium">color</code>
                    <p className="text-xs text-muted-foreground mt-1">Color del stroke (borde)</p>
                  </div>
                  <code className="text-xs text-muted-foreground">string</code>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <code className="text-sm font-medium">strokeWidth</code>
                    <p className="text-xs text-muted-foreground mt-1">Grosor del trazo (1-3 recomendado)</p>
                  </div>
                  <code className="text-xs text-muted-foreground">number</code>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <code className="text-sm font-medium">fill</code>
                    <p className="text-xs text-muted-foreground mt-1">Color de relleno del icono</p>
                  </div>
                  <code className="text-xs text-muted-foreground">string</code>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <code className="text-sm font-medium">absoluteStrokeWidth</code>
                    <p className="text-xs text-muted-foreground mt-1">Mantener grosor independiente del tamaño</p>
                  </div>
                  <code className="text-xs text-muted-foreground">boolean</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Recomendaciones para usar iconos correctamente</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-disc list-inside">
                <li className="text-sm">
                  <strong>Usar tamaños consistentes:</strong> Preferir h-4 w-4 para iconos inline, h-6 w-6 para botones
                </li>
                <li className="text-sm">
                  <strong>Accesibilidad:</strong> Añadir aria-label o aria-hidden según el contexto
                </li>
                <li className="text-sm">
                  <strong>Colores semánticos:</strong> Usar text-destructive para eliminar, text-green-500 para éxito
                </li>
                <li className="text-sm">
                  <strong>Performance:</strong> Importar solo los iconos necesarios (tree-shaking automático)
                </li>
                <li className="text-sm">
                  <strong>Consistencia:</strong> Mantener el mismo strokeWidth en toda la aplicación (default: 2)
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        {/* EXAMPLES */}
        <TabsContent value="examples" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>In Buttons</CardTitle>
              <CardDescription>Iconos combinados con botones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 flex-wrap">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  <Plus className="h-4 w-4" />
                  Add Item
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors">
                  <Download className="h-4 w-4" />
                  Download
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-muted transition-colors">
                  Share
                  <Share2 className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 border border-destructive text-destructive rounded-md hover:bg-destructive/10 transition-colors">
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>In Alerts</CardTitle>
              <CardDescription>Iconos en mensajes de alerta y estado</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Success</p>
                  <p className="text-sm text-muted-foreground">Operation completed successfully</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Warning</p>
                  <p className="text-sm text-muted-foreground">Please review before continuing</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Error</p>
                  <p className="text-sm text-muted-foreground">Something went wrong</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <Bell className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Information</p>
                  <p className="text-sm text-muted-foreground">New updates available</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>In Navigation</CardTitle>
              <CardDescription>Iconos en menús y navegación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-muted transition-colors text-left">
                  <Home className="h-5 w-5" />
                  <span className="text-sm">Home</span>
                </button>
                <button className="flex items-center gap-3 w-full p-3 rounded-lg bg-muted transition-colors text-left">
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">Profile</span>
                </button>
                <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-muted transition-colors text-left">
                  <Settings className="h-5 w-5" />
                  <span className="text-sm">Settings</span>
                </button>
                <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-muted transition-colors text-left">
                  <Bell className="h-5 w-5" />
                  <span className="text-sm">Notifications</span>
                  <Badge className="ml-auto">3</Badge>
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>In Badges</CardTitle>
              <CardDescription>Iconos dentro de badges y tags</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 flex-wrap">
                <Badge className="gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Verified
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Star className="h-3 w-3" />
                  Premium
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <TrendingUp className="h-3 w-3" />
                  Growing
                </Badge>
                <Badge variant="destructive" className="gap-1">
                  <AlertTriangle className="h-3 w-3" />
                  Alert
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Icon-only Buttons</CardTitle>
              <CardDescription>Botones con solo iconos (requieren aria-label)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 flex-wrap">
                <button 
                  className="inline-flex items-center justify-center h-10 w-10 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  aria-label="Add new item"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button 
                  className="inline-flex items-center justify-center h-10 w-10 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors"
                  aria-label="Download"
                >
                  <Download className="h-4 w-4" />
                </button>
                <button 
                  className="inline-flex items-center justify-center h-10 w-10 border rounded-md hover:bg-muted transition-colors"
                  aria-label="Share"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <button 
                  className="inline-flex items-center justify-center h-10 w-10 border border-destructive text-destructive rounded-md hover:bg-destructive/10 transition-colors"
                  aria-label="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Animated Icons</CardTitle>
              <CardDescription>Iconos con animaciones CSS</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 flex-wrap items-center">
                <div className="space-y-2 text-center">
                  <Settings className="h-8 w-8 mx-auto animate-spin text-primary [animation-duration:3s]" />
                  <p className="text-xs">Rotating</p>
                </div>
                <div className="space-y-2 text-center">
                  <Heart className="h-8 w-8 mx-auto animate-pulse text-red-500 fill-red-500" />
                  <p className="text-xs">Pulsing</p>
                </div>
                <div className="space-y-2 text-center">
                  <Bell className="h-8 w-8 mx-auto animate-bounce text-yellow-500" />
                  <p className="text-xs">Bouncing</p>
                </div>
                <div className="space-y-2 text-center">
                  <Download className="h-8 w-8 mx-auto text-primary animate-bounce [animation-duration:2s]" />
                  <p className="text-xs">Download</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
