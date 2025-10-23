import {testimonials} from '@/data'
import {Testimonial} from '@/types'

import {cn} from "@/lib/utils";

import {Card, CardContent, CardHeader} from '@/components/ui/card/Card'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/Avatar'

export function TestimonialsSection() {
  return (
    <section>
      <div className={cn(
        'mx-auto max-w-6xl space-y-8 px-6 md:space-y-16 print:space-y-8'
      )}>
        <h2 className={cn(
          'text-center font-medium text-3xl lg:text-5xl print:text-3xl'
        )}>
          Engineering talent,<br/>trusted by top teams
        </h2>

        <div className={cn(
          'grid gap-4 print:gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2'
        )}>
          <TestimonialCard size='lg' testimonial={testimonials[0]}/>
          <TestimonialCard size='md' testimonial={testimonials[1]}/>
          <TestimonialCard size='sm' testimonial={testimonials[2]}/>
          <TestimonialCard size='sm' testimonial={testimonials[3]}/>
        </div>
      </div>
    </section>
  )
}

type TestimonialCardProps = {
  testimonial: Testimonial,
  size: 'sm' | 'md' | 'lg'
}

function TestimonialCard({testimonial, size}: TestimonialCardProps) {
  const variants = {
    'sm': {
      'root': 'sm:col-span-1'
    },
    'md': {
      'root': 'md:col-span-2'
    },
    'lg': {
      'root': 'grid grid-rows-[auto_1fr] sm:col-span-2 sm:p-6 lg:row-span-2'
    }
  }

  return (
    <Card className={variants[size].root}>
      {testimonial.companyLogoUrl && (
        <CardHeader>
          <img
            src={testimonial.companyLogoUrl}
            alt={`${testimonial.author} company logo`}
            className="mt-10"
          />
        </CardHeader>
      )}

      <CardContent className="h-full">
        <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
          <p className="flex flex-col gap-4">{testimonial.testimonial}</p>

          <div className="grid grid-cols-[auto_1fr] items-center gap-3">
            <Avatar className="size-12">
              <AvatarImage
                src={testimonial.avatar}
                alt={testimonial.author}
                height="50"
                width="50"
                loading="lazy"
              />
              <AvatarFallback>{testimonial.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{testimonial.author}</p>
              <span
                className="text-muted-foreground block text-sm">{testimonial.position}</span>
            </div>
          </div>
        </blockquote>
      </CardContent>
    </Card>
  )
}