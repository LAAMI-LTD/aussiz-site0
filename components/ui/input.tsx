import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "focus-ring flex h-11 w-full rounded-md border border-border bg-white px-4 text-sm text-foreground placeholder:text-muted",
          "focus:border-orange",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
