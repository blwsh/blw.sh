import {cn} from "@/lib/utils";

import {Button} from "@/components/ui/Button";
import {Swipe0} from "@/components/ui/svgs/swipe0";
import {TiltedCard} from "@/components/ui/card/Tilted";
import BlurText from "@/components/BlurText";
import {Subtitle, Title} from "@/components/ui/typography/Title";

export function Content() {
  return (
    <div
      className="text-white grid grid-cols-1 md:grid-cols-16 min-h-[50vh] gap-8 pt-10 md:pt-0">
      <div className="col-span-16 md:col-span-7">
        <div className="flex flex-col gap-10 justify-center h-full px-10 py-20">
          <div>
            <Title className="text-4xl">
              <BlurText
                text="Ben Lewis Watson"
                direction="bottom"
                stepDuration={0.3}
                delay={100}
              />
            </Title>
            <Subtitle className="text-white/80 print:text-primary">
              Senior Software Engineer
            </Subtitle>
          </div>

          <div
            className="flex flex-col gap-2 text-lg text-white font-semibold max-w-md">
            <p>
              Hi! I'm Ben, a Senior Software Engineer with over 9 years of
              experience building scalable cloud native software. I specialize
              in Go, Node, and React.
            </p>
          </div>

          <div className="print:hidden flex gap-2">
            <Button asChild type="submit" size="lg" variant="white">
              <a href="mailto:ben@blw.sh">Contact me</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="md:flex hidden flex-col gap-6 justify-end items-center md:pr-10
        col-span-16 md:col-span-9 -mb-20">
        <TiltedCard
          imageSrc="swipe0.mp4"
          containerWidth="100%" containerHeight="90%"
          imageWidth="100%"
          imageHeight="110%"
          rotateAmplitude={0}
          initialRotateX={0}
          initialRotateY={-15}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <div className={cn(
              'absolute inline-block top-10 left-10 p-2 px-3',
              'drop-shadow-2xl drop-shadow-black/80 rounded-lg',
              'bg-black/80 border border-white/20 text-sm font-semibold text-white/60',
              'backdrop-blur-2xl outline outline-white/20',
              'animate-in fade-in-50'
            )}>
              Check out <Swipe0 color="white" size="sm"/>
            </div>
          }
        />
      </div>
    </div>
  )
}