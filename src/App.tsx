import {ThemeToggle} from "./components/ThemeToggle";
import {
  ContactSection,
  ExperienceSection,
  HeroSection,
  LogosSection,
  TestimonialsSection
} from "./components/sections";
import {ScrollProgress} from "@/components/ui/ScrollProgress";
import {cn} from "@/lib/utils";

function App() {
  return <>
    <div className="print:hidden">
      <ScrollProgress/>
      <ThemeToggle className="absolute top-1 right-1 w-32 cursor-pointer z-10"/>
    </div>
    <HeroSection/>
    <LogosSection className="print:hidden"/>
    <main className={cn(
      'flex flex-col gap-y-10 md:gap-y-16 lg:gap-y-32 max-w-7xl mx-auto my-10 md:my-24'
    )}>
      <ExperienceSection/>
      <TestimonialsSection/>
    </main>
    <ContactSection/>
  </>
}

export default App
