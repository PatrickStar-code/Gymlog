import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils"; // ou substitua com clsx, classnames etc.

type Variant = "default" | "outline" | "ghost" | "link";
type Size = "default" | "sm" | "lg" | "icon";

// Props personalizadas
interface CustomButtonProps {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

// Combinação das props do Framer Motion com as personalizadas
type ButtonProps = HTMLMotionProps<"button"> & CustomButtonProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      asChild = false,
      children,
      className,
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    const classNames = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    return (
      <motion.button
        whileTap={{ scale: 0.93 }}
        className={classNames}
        ref={ref}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
