import {InfiniteSlider} from '@/components/ui/InfiniteSlider'
import {ProgressiveBlur} from '@/components/ui/ProgressiveBlur'
import {ComponentType, useEffect, useState} from "react";

const logoClass = "mx-auto h-6 md:h-8 w-fit";

const icons = [
  'aws', 'googleCloud', 'gitlab', 'github', 'docker', 'kubernetes', 'terraform',
  'sentry', 'golang', 'java', 'kotlin', 'php', 'laravel', 'javascript', 'graphql',
  'vitejs', 'bun', 'typescript', 'expressjs', 'react', 'reactrouter', 'svelte', 'vue',
  'radixUI', 'cypress', 'jsonSchema',
].map(async (file) => {
  const mod = await import((`../../ui/svgs/${file}.tsx`));
  return mod[Object.keys(mod)[0]];
})

export default function Scroller() {
  const [loadedIcons, setLoadedIcons] = useState<ComponentType<{
    className?: string,
    role?: string
  }>[]>([])

  useEffect(() => {
    Promise.all(icons).then((modules) => {
      setLoadedIcons(modules)
    })
  }, [])

  return (
    <section className="overflow-hidden">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div
            className="hidden md:block md:max-w-44 md:border-r md:pr-6 text-muted-foreground">
            <p className="text-end text-xs font-semibold">Technologies</p>
            <p className="text-end text-xs font-semibold">I work with</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider
              speedOnHover={70}
              speed={110}
              gap={100}>
              {loadedIcons.map((Icon, index) => (
                <div key={index} className="flex">
                  <Icon className={logoClass} role="img"/>
                </div>
              ))}
            </InfiniteSlider>

            <div
              className="bg-linear-to-r absolute inset-y-0 left-0 w-20"/>
            <div
              className="bg-linear-to-l absolute inset-y-0 right-0 w-20"/>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
