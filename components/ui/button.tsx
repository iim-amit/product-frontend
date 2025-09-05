import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 " +
    "disabled:opacity-50 disabled:cursor-not-allowed active:scale-95",
  {
    variants: {
      variant: {
        default:
          // default: white bg, light green border
          "bg-white border border-emerald-300 text-emerald-700 " +
          // "hover:bg-emerald-50 hover:border-emerald-400 " +
          "focus:ring-emerald-300 " +
          "rounded-lg px-4 py-1",

        selected:
          // highlighted state: green background, shadow, border-bottom like card title
          "bg-emerald-500 text-white border border-emerald-600 " +
          "shadow-md " +
          "border-b-4 border-emerald-700 " +
          "hover:bg-emerald-600 focus:ring-emerald-400 rounded-lg px-4 py-1",

        outline:
          "border border-gray-400 text-gray-700 " +
          "hover:bg-gray-50 focus:border-emerald-400 focus:text-emerald-600",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 py-1 text-sm",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { buttonVariants }
