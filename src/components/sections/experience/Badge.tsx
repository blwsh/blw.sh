import {cn} from "@/lib/utils";
import {motion, HTMLMotionProps} from "motion/react";

export type BadgeProps = {
  highlighted?: boolean
  displayDelay?: number
} & HTMLMotionProps<'span'>

export function Badge(
  {
    children,
    highlighted = false,
    displayDelay = 0,
    className = '',
    ...props
  }: BadgeProps) {
  return <motion.span {...props}
    initial={{opacity: 0, y: 10}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: 10}}
    transition={{duration: 0.1, delay: displayDelay}}
    className={cn(
      'inline-block px-2 select-none rounded-full',
      'bg-muted muted text-xs font-medium text-muted-foreground',
      'border', highlighted ? "border-primary outline-1" : "border-border/50",
      className
    )}
  >
    {children}
  </motion.span>
}