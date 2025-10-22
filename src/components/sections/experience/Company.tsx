import {Title} from "@/components/ui/typography/Title";
import {Experience} from "@/types";
import {formatDates} from "./helper";

export function Company({exp}: { exp: Experience }) {
  return (
    <div
      className="experience-table_company pl-3 md:pl-5 col-start-2 col-span-6">
      <Title className="!text-2xl">{exp.company}</Title>
      <div>
        <span className="text-sm text-muted-foreground/90">
          {formatDates(
            exp.positions[exp.positions.length - 1].startDate, // assumes the first position is the most recent and endDate null means "present"
            exp.positions[0].endDate || new Date() // assumes the last position is the oldest
          )}
          </span>
      </div>
    </div>
  )
}
