import {Subtitle} from "@/components/ui/typography/Title";

export function ContactSection() {
  return <div className="max-w-5xl m-auto px-6 pb-10 print:pb-0">
    <Subtitle className="mb-1">Let's get in touch!</Subtitle>
    <div className="grid md:grid-cols-2 gap-5">
      <div className="max-w-lg">
        <p className="text-md text-foreground/60">
          I'm always open to discussing new opportunities, collaborations, or
          just a friendly chat. Feel free to reach out to me via email at{" "}
          <a href="mailto:ben@blw.sh"
             className="text-primary underline">ben@blw.sh</a>
        </p>
      </div>
      <div className="print:hidden
        border-l-2 pl-2 md:pl-0 md:border-l-0
        md:text-right md:border-r-2 md:pr-2
      ">
        <p className="text-sm text-foreground/60 font-semibold mb-1">More here:</p>
        <ul className="text-foreground/60 text-sm">
          <li><a href="https://github.com/blwsh" target="_blank" rel="noopener noreferrer">My Github</a></li>
          <li><a href="https://github.com/blwsh" target="_blank" rel="noopener noreferrer">My LinkedIn</a></li>
          <li title="coming soon™">My Blog</li>
        </ul>
      </div>
      <p className="print:hidden text-sm text-foreground/60">
        &copy; {new Date().getFullYear()} blw.sh. All rights reserved.
      </p>
    </div>
  </div>
}