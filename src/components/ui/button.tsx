import Image from "next/image";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button relative isolate inline-flex items-center justify-center overflow-hidden whitespace-nowrap font-medium [transform:translateZ(0)] transition-[background-color,border-color,color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-primary text-primary-foreground shadow-[6px_6px_0px_var(--brand-blue-900)] hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--brand-blue-900)] active:translate-y-[3px] active:shadow-[1px_1px_0px_var(--brand-blue-900)] active:scale-[0.99]",
        secondary:
          "border border-border-strong bg-transparent text-ink hover:bg-muted active:scale-[0.98] rounded-full",
        accent:
          "rounded-full bg-accent text-accent-foreground shadow-[6px_6px_0px_var(--ink-900)] hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--ink-900)] active:translate-y-[3px] active:shadow-[1px_1px_0px_var(--ink-900)] active:scale-[0.99]",
        "outline-light":
          "border border-white/20 bg-transparent text-white hover:bg-white/10 active:scale-[0.98] rounded-full focus-visible:ring-white",
        dark:
          "rounded-full bg-ink-900 text-white shadow-[6px_6px_0px_var(--brand-blue-500)] hover:bg-ink-800 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--brand-blue-500)] active:translate-y-[3px] active:shadow-[1px_1px_0px_var(--brand-blue-500)] active:scale-[0.99]",
        ghost:
          "text-ink hover:bg-muted rounded-lg",
        link:
          "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 py-2 text-sm",
        md: "h-12 px-6 py-3 text-base",
        lg: "h-14 px-8 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  layered?: boolean;
  sunrise?: boolean;
}

type AnimatedLayerButtonProps = ButtonProps;

const layeredButtonVariants = new Set(["primary", "accent", "dark"]);
const sunriseButtonVariants = new Set(["secondary", "outline-light"]);

function getLabelClasses(variant: ButtonProps["variant"]) {
  if (variant === "accent") {
    return "text-accent-foreground [text-shadow:0_1px_1px_rgba(255,255,255,0.2)]";
  }

  if (variant === "dark") {
    return "text-white [text-shadow:0_1px_2px_rgba(10,10,10,0.4)]";
  }

  return "text-primary-foreground [text-shadow:0_1px_2px_rgba(10,10,10,0.35)]";
}

function getLayeredSurfaceClasses(variant: ButtonProps["variant"]) {
  if (variant === "accent") {
    return "bg-linear-to-r from-brand-yellow-600 via-accent to-brand-yellow-200 hover:from-brand-yellow-500 hover:via-accent-hover hover:to-brand-yellow-200";
  }

  if (variant === "dark") {
    return "bg-linear-to-r from-ink-950 via-ink-900 to-brand-blue-700 hover:from-ink-900 hover:via-ink-900 hover:to-brand-blue-500";
  }

  return "bg-linear-to-r from-brand-blue-900 via-primary to-brand-blue-300 hover:from-brand-blue-700 hover:via-primary-hover hover:to-brand-blue-300";
}

function getLayerImageClasses(variant: ButtonProps["variant"]) {
  if (variant === "accent") {
    return "opacity-20 saturate-105 contrast-110 drop-shadow-[0_0_10px_rgba(15,47,88,0.16)]";
  }

  if (variant === "dark") {
    return "opacity-4 saturate-100 contrast-110 drop-shadow-[0_0_12px_rgba(91,164,230,0.14)]";
  }

  return "opacity-15 saturate-105 contrast-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.14)]";
}

function getSunriseClasses(variant: ButtonProps["variant"]) {
  if (variant === "outline-light") {
    return {
      orb: "bg-linear-to-t from-accent via-brand-yellow-200 to-white/95",
      halo: "bg-linear-to-t from-accent/45 via-brand-yellow-200/30 to-transparent",
      text: "text-white group-hover/button:text-ink-950 [text-shadow:0_1px_2px_rgba(10,10,10,0.28)] group-hover/button:[text-shadow:none]",
    };
  }

  return {
    orb: "bg-linear-to-t from-brand-yellow-500 via-brand-yellow-200 to-white",
    halo: "bg-linear-to-t from-brand-yellow-500/35 via-brand-yellow-200/22 to-transparent",
    text: "text-ink group-hover/button:text-ink-950 [text-shadow:0_1px_1px_rgba(255,255,255,0.22)] group-hover/button:[text-shadow:none]",
  };
}

function SunriseLayer({ variant }: { variant: ButtonProps["variant"] }) {
  const sunrise = getSunriseClasses(variant);

  return (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-0 h-4/5 rounded-full blur-xl opacity-0 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-8 scale-x-110 group-hover/button:translate-y-1 group-hover/button:scale-x-100 group-hover/button:opacity-100 group-active/button:translate-y-2",
          sunrise.halo,
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-2 bottom-0 z-0 h-14 translate-y-9 rounded-t-full opacity-0 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/button:translate-y-3 group-hover/button:opacity-100 group-active/button:translate-y-4",
          sunrise.orb,
        )}
      />
    </>
  );
}

function ButtonLayer({ variant }: { variant: ButtonProps["variant"] }) {
  const imageClasses = getLayerImageClasses(variant);

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-2 top-1/2 z-0 h-16 w-16 -translate-y-1/2 transition-[transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/button:translate-x-[155%] group-hover/button:scale-[2.8] group-active/button:translate-x-[140%] group-active/button:scale-[2.5] motion-reduce:transition-none"
    >
      <Image
        src="/brand/solarlux-icon.png"
        alt=""
        fill
        sizes="64px"
        className={cn(
          "animate-[spin_14s_linear_infinite] object-contain motion-reduce:animate-none transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/button:opacity-70 group-active/button:opacity-65",
          imageClasses
        )}
      />
    </span>
  );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, layered, sunrise, children, ...props }, ref) => {
    const resolvedVariant = variant ?? "primary";
    const resolvedSize = size ?? "md";
    const showLayer = layered ?? (layeredButtonVariants.has(resolvedVariant) && resolvedSize !== "icon");
    const showSunrise = sunrise ?? sunriseButtonVariants.has(resolvedVariant);
    const layeredSurfaceClasses = showLayer ? getLayeredSurfaceClasses(resolvedVariant) : "";
    const labelClasses = showLayer ? getLabelClasses(resolvedVariant) : "";
    const sunriseTextClasses = showSunrise ? getSunriseClasses(resolvedVariant).text : "";
    const content = (
      <>
        {showLayer ? <ButtonLayer variant={resolvedVariant} /> : null}
        {showSunrise ? <SunriseLayer variant={resolvedVariant} /> : null}
        <span className={cn("relative z-10 inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", labelClasses, sunriseTextClasses)}>
          {children}
        </span>
      </>
    );

    if (asChild) {
      const child = React.Children.only(children);

      if (!React.isValidElement(child)) {
        return null;
      }

      return React.cloneElement(child, {
        ...props,
        className: cn(
          buttonVariants({ variant, size, className }),
          layeredSurfaceClasses,
          (child.props as { className?: string }).className,
        ),
        ref,
        children: (
          <>
            {showLayer ? <ButtonLayer variant={resolvedVariant} /> : null}
            {showSunrise ? <SunriseLayer variant={resolvedVariant} /> : null}
            <span className={cn("relative z-10 inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", labelClasses, sunriseTextClasses)}>
              {(child.props as { children?: React.ReactNode }).children}
            </span>
          </>
        ),
      } as React.HTMLAttributes<HTMLElement>);
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }), layeredSurfaceClasses)}
        ref={ref}
        {...props}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";

const AnimatedLayerButton = React.forwardRef<
  HTMLButtonElement,
  AnimatedLayerButtonProps
>(({ layered = true, sunrise, variant = "primary", ...props }, ref) => {
  return <Button ref={ref} layered={layered} sunrise={sunrise} variant={variant} {...props} />;
});
AnimatedLayerButton.displayName = "AnimatedLayerButton";

export { AnimatedLayerButton, Button, buttonVariants };
export type { AnimatedLayerButtonProps, ButtonProps };
