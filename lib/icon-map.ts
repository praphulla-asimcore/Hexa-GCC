import {
  Search, FileSearch, Puzzle, Eye, RefreshCcw, PlayCircle, RefreshCw,
  FileCheck2, UserCog, Users2, Plane, Building,
  ClipboardList, FileSignature, UserPlus, Calculator, ShieldCheck, CalendarCheck, Truck,
  type LucideIcon,
} from 'lucide-react';

// Server Components (page.tsx files) can't pass component references as props
// into Client Components — the RSC boundary can't serialize a function. Data
// crossing that boundary carries a string key instead, resolved to the real
// icon here, inside the client component that renders it.
export const iconMap: Record<string, LucideIcon> = {
  search: Search,
  'file-search': FileSearch,
  puzzle: Puzzle,
  eye: Eye,
  'refresh-ccw': RefreshCcw,
  'play-circle': PlayCircle,
  'refresh-cw': RefreshCw,
  'file-check': FileCheck2,
  'user-cog': UserCog,
  users: Users2,
  plane: Plane,
  building: Building,
  'clipboard-list': ClipboardList,
  'file-signature': FileSignature,
  'user-plus': UserPlus,
  calculator: Calculator,
  'shield-check': ShieldCheck,
  'calendar-check': CalendarCheck,
  truck: Truck,
};

export type IconKey = keyof typeof iconMap;
