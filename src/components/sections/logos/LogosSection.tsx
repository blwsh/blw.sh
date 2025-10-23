import Scroller from "./Scroller";
import {cn} from "@/lib/utils";

export function LogosSection({ className }: { className?: string}) {
  return (
    <div className={cn('bg-accent/50 text-foreground/60 md:py-5', className)}>
      <Scroller/>
    </div>
  )
}