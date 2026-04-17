import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 rounded-full",
        secondary:
          "border border-border-strong bg-transparent text-ink hover:bg-muted active:bg-muted rounded-full",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 rounded-full",
        "outline-light":
          "border border-white/20 bg-transparent text-white hover:bg-white/10 active:bg-white/15 rounded-full focus-visible:ring-white",
        dark:
          "bg-ink-900 text-white hover:bg-ink-800 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 rounded-full",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
