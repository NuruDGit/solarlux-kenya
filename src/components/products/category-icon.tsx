import {
  Battery,
  Droplets,
  Lightbulb,
  MessageCircle,
  Package,
  PenTool,
  Settings,
  Sun,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  Battery,
  Droplets,
  Lightbulb,
  MessageCircle,
  Package,
  PenTool,
  Settings,
  Sun,
  Wrench,
  Zap,
};

interface Props {
  className?: string;
  name: string;
}

export function CategoryIcon({ className, name }: Props) {
  const Icon = icons[name] ?? Package;

  return <Icon aria-hidden="true" className={cn("h-6 w-6", className)} />;
}
