import {ScrollProgress} from "@/components/ui/ScrollProgress";
import {ThemeToggle} from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="print:hidden">
      <ScrollProgress/>
      <ThemeToggle className="absolute top-1 right-1 w-32 cursor-pointer z-10"/>
    </header>
  )
}