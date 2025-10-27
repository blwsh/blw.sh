import {TestimonialsSection, ContactSection} from "@/components/sections";

export function Footer({showTestimonials = false}) {
  return (
    <div className="flex flex-col gap-y-16 print:h-[100vh]">
      {showTestimonials && <TestimonialsSection/>}
      <ContactSection/>
    </div>
  )
}