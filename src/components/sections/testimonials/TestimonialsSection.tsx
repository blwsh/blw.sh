import {testimonials} from '@/data'
import {Testimonial} from '@/types'

import {Card, CardContent, CardHeader} from '@/components/ui/card/Card'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/Avatar'

import {Taxdoo} from "./Taxdoo";

export function TestimonialsSection() {
  return (
    <section>
      <div
        className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16 print:space-y-8">
        <h2
          className="text-center font-medium text-3xl lg:text-5xl print:text-3xl">
          Engineering talent,<br/>trusted by top teams
        </h2>

        <div
          className="grid gap-4 print:gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <LargeCard {...testimonials[0]}/>
          <MediumCard {...testimonials[1]}/>
          <SmallCard {...testimonials[2]}/>
          <SmallCard {...testimonials[3]}/>
        </div>
      </div>
    </section>
  )
}

function SmallCard({testimonial, avatar, author, initials, position}: Testimonial) {
  return (
    <Card className="card variant-mixed">
      <CardContent className="h-full">
        <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
          <p className="mb-3 md:mb-6 print:mb-0">{testimonial}</p>

          <div className="grid grid-cols-[auto_1fr] gap-3">
            <Avatar className="size-12">
              <AvatarImage
                src={avatar}
                alt={author}
                height="400"
                width="400"
                loading="lazy"
              />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{author}</p>
              <span className="text-muted-foreground block text-sm">{position}</span>
            </div>
          </div>
        </blockquote>
      </CardContent>
    </Card>
  )
}

function MediumCard({testimonial, avatar, author, initials, position}: Testimonial) {
  return (
    <Card className="md:col-span-2">
      <CardContent className="h-full">
        <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
          <p
            className="print:text-sm md:text-xl md:font-medium md:mb-6 print:mb-0">
            {testimonial}
          </p>

          <div className="grid grid-cols-[auto_1fr] items-center gap-3">
            <Avatar className="size-12">
              <AvatarImage
                src={avatar}
                alt={author}
                height="400"
                width="400"
                loading="lazy"
              />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <cite className="text-sm font-medium">{author}</cite>
              <span className="text-muted-foreground block text-sm">{position}</span>
            </div>
          </div>
        </blockquote>
      </CardContent>
    </Card>
  )
}

function LargeCard({testimonial, avatar, author, initials, position}: Testimonial) {
  return (
    <Card
      className="grid grid-rows-[auto_1fr] sm:col-span-2 sm:p-6 lg:row-span-2">
      <CardHeader className="print:hidden">
        <Taxdoo/>
      </CardHeader>
      <CardContent>
        <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
          <div className="space-y-4 md:mb-6 print:mb-0">
            {testimonial}
          </div>

          <div className="grid grid-cols-[auto_1fr] items-center gap-3">
            <Avatar className="size-12">
              <AvatarImage
                src={avatar}
                alt={author}
                height="400"
                width="400"
                loading="lazy"
              />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>

            <div>
              <cite className="text-sm font-medium">{author}</cite>
              <span className="text-muted-foreground block text-sm">{position}</span>
            </div>
          </div>
        </blockquote>
      </CardContent>
    </Card>
  )
}
