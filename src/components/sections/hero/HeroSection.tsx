import {cn} from "@/lib/utils";

import Background from "./Background";
import {Content} from "./Content";

export function HeroSection({className}: {className?: string}) {
  return <div className={cn("relative overflow-hidden", className)}>
    <div className="print:hidden absolute inset-0 -z-10 h-[90vh]">
      <Background/>
    </div>
    <div className="max-w-7xl mx-auto gap-10">
      <Content/>
    </div>
  </div>
}