import {Technology, Experience} from "@/types";

import {Button} from "@/components/ui/Button";

import {Badge} from "./Badge";

type HighlightMenuProps = {
  experience: Experience[],
  selected?: Technology[],
  onChange?: (tech: Technology[]) => void,
  onPrint?: () => void,
  className?: string
}

export function SelectTechMenu(
  {
    experience,
    onPrint,
    selected,
    onChange,
    className
  }: HighlightMenuProps
) {
  const positions = experience.flatMap(exp => exp.positions)
  const technologies = positions.flatMap(pos => pos.technologies)

  const options: Record<string, Technology[]> = {
    "Languages": Array.from(new Set(technologies.flatMap(tech => tech?.languages))).filter(Boolean),
    "Frameworks": Array.from(new Set(technologies.flatMap(tech => tech?.frameworks))).filter(Boolean),
    "CI": Array.from(new Set(technologies.flatMap(tech => tech?.ciServices))).filter(Boolean),
    "Cloud Providers": Array.from(new Set(technologies.flatMap(tech => tech?.cloudProviders))).filter(Boolean),
    "Cloud Services": Array.from(new Set(technologies.flatMap(tech => tech?.cloudServices))).filter(Boolean),
  }

  return (
    <div className={className}>
      <div className="lg:border-l-4 px-4 sticky top-6 mb-10">
        <Note/>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          {Object.entries(options).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-medium mb-2">{category}</h3>
              <div className="flex flex-wrap gap-x-1 gap-y-1.5">
                {items.map((tech, key) => (
                  <Badge
                    key={key}
                    highlighted={selected?.includes(tech)}
                    onClick={() => {
                      onChange?.(selected?.includes(tech)
                        ? selected.filter(t => t !== tech)
                        : [...selected, tech])
                    }}
                    className="cursor-pointer"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}

          <Footer onPrint={onPrint}/>
        </div>
      </div>
    </div>
  )
}

function Note() {
  return (
    <p className="text-xs text-muted-foreground mb-4">
      <span className="font-semibold">Hint:</span> You can highlight
      technologies I've worked with by clicking on the options below.
    </p>
  )
}

function Footer({onPrint = () => {}}) {
  return (
    <div>
      <p className="text-sm font-semibold mt-10 text-foreground/70 mb-2">
        If you have any questions or require more details, please don't
        hesitate to contact me.
      </p>
      <div className="flex flex-wrap gap-2">
        <form action="mailto:ben@blw.sh">
          <Button type="submit" variant="outline" size="sm">
            Contact me
          </Button>
        </form>
        <Button variant="secondary" size="sm" onClick={() => {
          onPrint()
        }}>
          Print me!
        </Button>
      </div>
    </div>
  )
}