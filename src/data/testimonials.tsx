import {Testimonial} from '@/types'

export const testimonials: Testimonial[] = [
  {
    initials: 'JT',
    author: 'Jasnan Thachaparamban',
    position: 'Senior Software Engineer @ Taxdoo',
    testimonial: <>
      <p className="md:text-xl print:text-sm md:font-medium">Ben was a
        core component of our successful billing system migration. His
        ability to spot potential issues and provide solutions quickly was
        vital to the project's success.
      </p>

      <p className="md:text-xl print:text-sm md:font-medium mb-6">
        His expertise in cloud native architecture and design patterns
        made him a valuable asset to our team.</p>
    </>,
    avatar: '/images/jt.jpg',
    companyLogoUrl: '/images/taxdoo.svg'
  },
  {
    initials: 'LJ',
    author: 'Louis Jones',
    position: 'Lead DevEx Engineer @ Evri',
    testimonial: <p className="print:text-sm md:text-xl md:font-medium md:mb-6">
      Ben is always on top of the latest trends and technologies. I highly recommend him to any team looking for their next Go developer.
    </p>,
    avatar: '/images/lj.jpg',
  },
  {
    initials: 'JH',
    author: 'James Haigh',
    position: 'CTO @ Dataworks',
    testimonial: <p>
      Ben was the main driver in our move to ECS and adoption of better CI/CD practices.
    </p>,
    avatar: '/images/jh.jpg'
  },
  {
    initials: 'AJ',
    author: 'AJ Cole',
    position: 'Software Developer @ Lufthansa Technik',
    testimonial: <p>
      Great manager who values listening to his teammates and helping them grow.
    </p>,
    avatar: '/images/aj.jpg',
  }
]