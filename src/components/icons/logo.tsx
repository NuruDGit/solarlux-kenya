import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  /** Use "dark" for dark backgrounds (footer), "light" for light backgrounds (header, mobile menu) */
  background?: "light" | "dark";
}

export function Logo({
  className,
  width = 160,
  height = 48,
  background = "light",
}: LogoProps) {
  const src =
    background === "dark"
      ? "/solarlux-logo-dark.png"
      : "/solarlux-logo-light.png";

  return (
    <Image
      src={src}
      alt="Solarlux Kenya"
      width={width}
      height={height}
      className={cn("h-auto", className)}
      priority
    />
  );
}
