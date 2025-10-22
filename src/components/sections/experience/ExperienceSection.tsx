import {useState, HTMLAttributes} from "react";

import {cn} from "@/lib/utils";
import {experience} from "@/data";
import {Technology} from "@/types";

import {Table} from "./Table";
import {SelectTechMenu} from "./SelectTechMenu";

export function ExperienceSection(props: HTMLAttributes<HTMLDivElement>) {
  const [expandAll, setExpandAll] = useState(false)
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([])

  return (
    <section {...props}>
      <div className="mx-auto max-w-4xl px-6 mb-10">
        <Intro/>
      </div>

      <div className={cn(
        "mx-auto max-w-6xl px-6 md:px-11",
        "grid lg:[grid-template-columns:auto_minmax(300px,1fr)]",
        "md:gap-12 lg:gap-10"
      )}>
        <Table
          className="order-last lg:order-first"
          expandAll={expandAll}
          experience={experience}
          highlightedTechnology={selectedTechnologies}
          onToggleExpandAll={(expanded) => setExpandAll(expanded)}
        />

        <SelectTechMenu
          className="hidden md:block print:hidden"
          experience={experience}
          selected={selectedTechnologies}
          onChange={(tech) => {
            setSelectedTechnologies(tech)
            setExpandAll(true)
          }}
          onPrint={() => {
            setExpandAll(true)
            setTimeout(() => window.print())
          }}
        />
      </div>
    </section>
  )
}

function Intro() {
  return (
    <div className="z-10 max-w-2xl space-y-4 print:mt-60">
      <h2 className="text-2xl lg:text-4xl font-medium">
        Engineering Excellence
      </h2>
      <p className="text-md text-foreground/80 lg:text-mlg">
        I build robust software with a focus on maintainability, reliability,
        and testability. My experience spans designing mission-critical systems,
        improving developer workflows, and delivering features that scale. I
        believe in writing code that is easy to test, simple to observe in
        production, and effortless to extend.
      </p>
    </div>
  )
}
