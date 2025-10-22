import {HTMLAttributes} from "react";

import {format} from "date-fns";

import {cn} from "@/lib/utils";

import {formatDates} from "./helper";

type DisplayDatesProps = {
  start: Date,
  end: Date | null
} & HTMLAttributes<HTMLDivElement>

export function Dates({start, end, className}: DisplayDatesProps) {
  return (
    <div title={formatDates(start, end || new Date())} className={cn(
      'relative pr-3 md:pr-5 py-3 col-span-1 col-start-1',
      'text-muted-foreground text-sm text-right',
      className
    )}>
      <div className="font-semibold">{format(start, "MMM yyyy")}</div>

      <div className="text-xs">
        - {end ? format(end, "MMM yyyy") : "Present"}

        <div className="
          absolute top-6 -right-1 w-1.5 h-1.5
          bg-accent-foreground rounded-full outline-6 outline-background
        "/>
      </div>
    </div>
  )
}