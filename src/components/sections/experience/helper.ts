import {formatDuration, intervalToDuration} from "date-fns";
import {CategorisedTechnology, Technology} from "@/types";

export function formatDates(start: Date, end: Date) {
  return formatDuration(intervalToDuration({start, end}),
    {format: ["years", "months"]})
}

export type SelectedTechnology = {
  name: string;
  highlighted: boolean
}

export function flatMapSelectedTech(technologies: CategorisedTechnology, selectedTechnologies: Technology[]): SelectedTechnology[] {
  const techList: SelectedTechnology[] = [];

  Object.keys(technologies || {}).forEach((category) => {
    (technologies[category] || []).forEach((tech: Technology) => {
      techList.push({
        name: tech,
        highlighted: selectedTechnologies?.includes(tech) || false
      });
    });
  });

  return techList;
}

