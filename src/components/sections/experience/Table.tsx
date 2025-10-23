import {cn} from "@/lib/utils";

import {Experience, Technology} from "@/types";

import {Expandable} from "@/components/ui/Expandable";

import {Company} from "./Company";
import {Dates} from "./Dates";
import {Positions} from "./Positions";

import "./table.css"

type TableProps = {
  expandAll?: boolean,
  experience: Experience[],
  highlightedTechnology?: Technology[],
  onToggleExpandAll?: (expanded: boolean) => void,
  className?: string,
}

export function Table(
  {
    expandAll,
    experience,
    highlightedTechnology,
    onToggleExpandAll,
    className,
  }: TableProps
) {
  return (
    <Expandable
      expanded={expandAll}
      onToggle={onToggleExpandAll}
      className={cn("relative experience-table", className)}
    >
      {experience.map((exp, ei) => (
        exp.positions.map((position, pi) => {
          const isLastOfCompany = pi === exp.positions.length - 1 && ei !== exp.positions.length - 1

          return (
            <div key={`${ei}-${pi}`} className={cn(
              'grid [grid-template-columns:77px_1fr] md:[grid-template-columns:89px_1fr] max-w-[800px] w-full',
              isLastOfCompany && "mb-10"
            )}>
              <CondDisplayCompany cond={pi === 0} exp={exp}/>

              <Dates
                start={position.startDate} end={position.endDate}
                className={cn(
                  'bg-gradient-to-l from-muted/50 to-muted/0 border-r',
                  isLastOfCompany && "mask-b-from-[5px]"
                )}
              />

              <Positions
                position={position}
                highlightedTechnology={highlightedTechnology}
              />
            </div>
          )
        })
      ))}
    </Expandable>
  )
}

export function CondDisplayCompany({cond = false, exp}: {
  cond: boolean,
  exp: Experience
}) {
  return cond && <>
    <div className={cn(
      'bg-gradient-to-l from-muted/50 to-muted/0 mask-t-from-[5px] border-r'
    )}/>
    <Company exp={exp}/>
    {exp.description}
  </>
}