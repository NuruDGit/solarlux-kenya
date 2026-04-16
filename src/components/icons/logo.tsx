import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import horizontalLogo from "@/../brand-assets/Solarlux_Kenya_horizontal_logo.png";
import verticalLogo from "@/../brand-assets/solarlux_kenya_vertical_logo.png";

const logos: Record<string, StaticImageData> = {
  horizontal: horizontalLogo,
  vertical: verticalLogo,
};

interface LogoProps {
  variant?: "horizontal" | "vertical";
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({
  variant = "horizontal",
  className,
  width,
  height,
}: LogoProps) {
  const isHorizontal = variant === "horizontal";
  const w = width ?? (isHorizontal ? 160 : 48);
  const h = height ?? (isHorizontal ? 48 : 80);

  return (
    <Image
      src={logos[variant]}
      alt="Solarlux Kenya"
      width={w}
      height={h}
      className={cn("h-auto", className)}
      priority
    />
  );
}
