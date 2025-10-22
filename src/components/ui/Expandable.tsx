import {ReactNode, useState, useEffect} from "react";

import {cn} from "@/lib/utils";

import {Button} from "./Button";

type ExpandableProps = {
  children: ReactNode
  className?: string
  maxHeight?: string
  expanded?: boolean
  expandLabel?: ReactNode
  collapseLabel?: ReactNode
  onToggle?: (expanded: boolean) => void
}

export function Expandable(
  {
    children,
    className = "",
    maxHeight = "max-h-[500px] md:max-h-[900px]",
    expanded = false,
    expandLabel = (
      <Button className="print:hidden" variant="link" size="sm">
        Show more
      </Button>
    ),
    collapseLabel = (
      <Button className="print:hidden text-muted-foreground" variant="link" size="sm">
        Show less
      </Button>
    ),
    onToggle
  }: ExpandableProps
) {
  const showMoreHeight = '90px'
  const showLessHeight = '0px'

  const [isExpanded, setIsExpanded] = useState(expanded)

  useEffect(() => {
    setIsExpanded(expanded)
  }, [expanded])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
    if (onToggle) {
      onToggle(!isExpanded)
    }
  }

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          `relative overflow-hidden max-h-full`,
            !isExpanded && `${maxHeight} mask-b-from-[50px]`
        )}
      >
        {children}
      </div>
      <div
        onClick={toggleExpand}
        style={{
          height: isExpanded ? showLessHeight : showMoreHeight,
          bottom: isExpanded ? `-${showLessHeight}` : 0,
        }}
        className={`
          absolute left-0 w-full cursor-pointer
          flex flex-col justify-center items-center
          transition-all duration-300 select-none
        `}
      >
        {isExpanded ? collapseLabel : expandLabel}
      </div>
    </div>
  )
}