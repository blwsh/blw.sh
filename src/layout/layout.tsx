import {ReactNode} from "react";

import {cn} from "@/lib/utils";

import {Header} from "./header";
import {Footer} from "./footer";

export function Layout({children, hero}: {
  children: ReactNode,
  hero?: ReactNode
}) {
  return <div>
    <Header/>
    {hero}
    <main className={cn(
      'flex flex-col gap-y-10 md:gap-y-16 lg:gap-y-32',
      'max-w-7xl mx-auto my-10 md:my-24',
      'break-after-page'
    )}>
      {children}
    </main>
    <Footer/>
  </div>
}