import {Subtitle} from "@/components/ui/typography/Title";
import {Github} from "@/components/ui/svgs/github";
import {Linkedin} from "@/components/ui/svgs/linkedin";

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
      <div className="print:hidden border-l-2 pl-2 md:pl-0 md:border-l-0 md:text-right">
        <ul className="inline-flex gap-4 text-foreground/90 text-sm">
          <li><a href="https://github.com/blwsh" target="_blank" rel="noopener noreferrer"><Github width={25}/></a></li>
          <li><a href="https://www.linkedin.com/in/ben-w-a39851bb//blwsh" target="_blank" rel="noopener noreferrer"><Linkedin width={25}/></a></li>
          {/*<li title="coming soon™">My Blog</li>*/}
        </ul>
      </div>
      <p className="print:hidden text-sm text-foreground/60">
        &copy; {new Date().getFullYear()} blw.sh. All rights reserved.
      </p>
    </div>
  </div>
}