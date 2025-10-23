import {useState} from "react";

import {Subtitle} from "@/components/ui/typography/Title";

import {Position, Technology} from "@/types";
import {
  flatMapSelectedTech, SelectedTechnology
} from "./helper";
import {Badge} from "./Badge";

const minTechnologiesToShow = 4

type DisplayPositionsProps = {
  position: Position,
  highlightedTechnology?: Technology[],
}

export function Positions(
  {
    position,
    highlightedTechnology,
  }: DisplayPositionsProps
) {
  const technologies = flatMapSelectedTech(position.technologies, highlightedTechnology)

  return (
    <div
      className="experience-table_company_pos flex flex-col col-start-2 col-span-6">
      <div className="py-3 pl-3 md:pl-5">{/* here */}
        <Subtitle className="flex gap-1 items-center text-primary/80 text-lg">
          {position.title}
          {position.level && <span className="text-muted-foreground text-sm">
            {position.level}
          </span>}
        </Subtitle>
        <div className="text-sm text-muted-foreground/80">
          {position.location} &middot; {position.workArrangement}
        </div>
      </div>

      <div className="
        experience-table_company_pos_desc
        pl-3 md:pl-5 text-sm text-foreground/80
      ">
        {position.description}

        <Technologies
          technologies={technologies}
          showMax={Math.max(
            minTechnologiesToShow,
            technologies.filter(t => t.highlighted).length || 0
          )}
        />
      </div>
    </div>
  )
}

type DisplayTechnologiesProps = {
  technologies: SelectedTechnology[],
  showMax: number,
}

function Technologies(
  {
    technologies,
    showMax = 3,
  }: DisplayTechnologiesProps
) {
  const [expanded, setExpanded] = useState(false);

  // Sort by highlighted first
  const techList = technologies.sort((a, b) => {
    return a.highlighted ? -1 : b.highlighted ? 1 : 0;
  });

  // If expanded, show all technologies, otherwise show only up to showMax
  const visibleTechs = (expanded ? techList : techList.slice(0, showMax))

  // If not expanded, show the number of hidden technologies
  const hiddenCount = techList.length - visibleTechs.length;

  return techList.length > 0 && (
    <div
      className="flex flex-wrap gap-2 justify-between md:mr-6 bg-muted/40 px-3 py-3 mt-4 rounded-sm border border-muted">
      <div className="flex flex-wrap gap-x-1.5 gap-y-2 items-center">
        <span className="font-semibold">
          Worked with:
        </span>
        {visibleTechs.map((tech, key) => (
          <Badge
            key={key}
            highlighted={tech.highlighted}
            displayDelay={expanded ? key * 0.01 : 0}
          >
            {tech.name}
          </Badge>
        ))}
      </div>
      {hiddenCount > 0 && !expanded && (
        <button
          className="print:hidden text-xs text-primary underline ml-2 focus:outline-none cursor-pointer"
          onClick={() => setExpanded(true)}
          aria-label={`Show ${hiddenCount} more technologies`}
        >
          and {hiddenCount} more
        </button>
      )}
      {expanded && techList.length > showMax && (
        <button
          className="print:hidden text-xs text-primary p-1 focus:outline-none cursor-pointer"
          onClick={() => setExpanded(false)}
          aria-label="Show less technologies"
        >
          Show less
        </button>
      )}
    </div>
  );
}