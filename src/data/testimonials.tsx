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

      <p className="md:text-xl print:text-sm md:font-medium">
        His expertise in cloud native architecture and design patterns
        made him a valuable asset to our team.</p>
    </>,
    avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQGdNLGQKga1zA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1550604685456?e=1763596800&v=beta&t=LueEblOdgSeVHpzzh1zlAF1WxBd7tg2SIMOjZwbphHw'
  },
  {
    initials: 'LJ',
    author: 'Louis Jones',
    position: 'Lead DevEx Engineer @ Evri',
    testimonial: <p>
      Ben is always on top of the latest trends and technologies. I highly recommend him to any team looking for their next Go developer.
    </p>,
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQGUhGHF01LXKA/profile-displayphoto-scale_200_200/B56Zf1yx1uGUAY-/0/1752175419385?e=1763596800&v=beta&t=-I7okZXBAL9CDoH_uYh7cC1Heq2m2slTEFpwxVQ7Fmo',
  },
  {
    initials: 'JH',
    author: 'James Haigh',
    position: 'CTO @ Dataworks',
    testimonial: <p>
      Ben was the main driver in our move to ECS and adoption of better CI/CD practices.
    </p>,
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQGlN7hjT6qsYA/profile-displayphoto-crop_800_800/B4EZhb7XlmHgAQ-/0/1753888948498?e=1763596800&v=beta&t=gBpo1gi3LtWD42Ws-gB4ANJhGkAqnac7GrMRTqYuJRs'
  },
  {
    initials: 'AJ',
    author: 'AJ Cole',
    position: 'Software Developer @ Lufthansa Technik',
    testimonial: <p>
      Great manager who values listening to his teammates and helping them grow.
    </p>,
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQHZ6ieWufZAJg/profile-displayphoto-shrink_200_200/B4EZSuud2tHMAY-/0/1738098204585?e=1763596800&v=beta&t=cU3_kfMMWyV9q7j3BG8C4JnOCSthbEor4cbaxPxrf34',
  }
]