import {Card, CardContent, CardHeader} from '@/components/ui/card/Card'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'

export function TestimonialsSection() {
  return (
    <section className="page-break print:h-[100vh]">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div
          className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-3xl font-medium lg:text-5xl print:text-3xl">Engineering talent,<br/>
            trusted by top teams</h2>
        </div>

        <div
          className="grid gap-4 print:gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card
            className="grid grid-rows-[auto_1fr] sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader className="print:hidden">
              <svg width="135" height="22" className="mt-10"
                   viewBox="0 0 135 22" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M64.8338 0.92455H57.758L54.0076 6.1251L50.2554 0.92455H43.1813L50.4697 11.0312L43.1813 21.1379H50.2554L54.0076 15.9357L57.758 21.1379H64.8338L57.5455 11.0312L64.8338 0.92455Z"
                  fill="currentColor"></path>
                <path
                  d="M85.0109 5.63154C84.1207 4.13008 82.8421 2.97498 81.1768 2.16624C79.5307 1.33845 77.5553 0.92455 75.2507 0.92455H67.6854V21.1379H75.2507C77.5553 21.1379 79.5307 20.7344 81.1768 19.9257C82.8421 19.0979 84.1207 17.9324 85.0109 16.431C85.9202 14.9104 86.3766 13.1094 86.3766 11.0312C86.3766 8.9531 85.9219 7.133 85.0109 5.63154ZM80.015 13.6584C79.7049 14.332 79.2886 14.862 78.766 15.2464C78.2434 15.6118 77.6529 15.8716 76.9944 16.0257C76.3551 16.1608 75.6966 16.2283 75.019 16.2283H73.4338V5.83243H75.019C75.6966 5.83243 76.3551 5.90863 76.9944 6.06275C77.6529 6.19783 78.2434 6.4576 78.766 6.84206C79.2886 7.20746 79.7049 7.73739 80.015 8.43011C80.3442 9.10377 80.5079 9.96966 80.5079 11.0295C80.5079 12.0894 80.3424 12.9639 80.015 13.6566V13.6584Z"
                  fill="currentColor"></path>
                <path
                  d="M94.4801 10.884C94.4801 11.9629 94.6927 12.9241 95.1194 13.7709C95.5462 14.5987 96.1455 15.2533 96.9206 15.7348C97.6958 16.1972 98.6051 16.4275 99.6503 16.4275C100.695 16.4275 101.626 16.1972 102.38 15.7348C103.155 15.2533 103.754 14.5987 104.181 13.7709C104.608 12.9241 104.82 11.9612 104.82 10.884C104.82 9.80687 104.617 8.82495 104.211 7.99716C103.805 7.16937 103.214 6.52514 102.439 6.06275C101.685 5.58132 100.755 5.3406 99.6503 5.3406C98.6051 5.3406 97.6941 5.58132 96.9206 6.06275C96.1455 6.52514 95.5462 7.16937 95.1194 7.99716C94.6927 8.82495 94.4801 9.78782 94.4801 10.884ZM88.5261 10.884C88.5261 9.28561 88.8066 7.84303 89.3692 6.55285C89.9511 5.24362 90.7436 4.12662 91.7505 3.20358C92.7573 2.25976 93.9297 1.5376 95.2658 1.03712C96.621 0.51758 98.0825 0.257812 99.652 0.257812C101.222 0.257812 102.73 0.51758 104.066 1.03712C105.421 1.5376 106.602 2.25976 107.609 3.20358C108.616 4.12835 109.391 5.24362 109.933 6.55285C110.494 7.84303 110.776 9.28561 110.776 10.884C110.776 12.4825 110.504 13.9164 109.963 15.2447C109.421 16.573 108.656 17.7281 107.668 18.71C106.681 19.6729 105.5 20.4227 104.125 20.963C102.77 21.4826 101.279 21.7423 99.652 21.7423C98.025 21.7423 96.5339 21.4826 95.1787 20.963C93.8234 20.4244 92.6424 19.6729 91.6355 18.71C90.6478 17.7281 89.8831 16.573 89.3414 15.2447C88.7996 13.9164 88.5279 12.4634 88.5279 10.884H88.5261Z"
                  fill="currentColor"></path>
                <path
                  d="M118.881 10.884C118.881 11.9629 119.094 12.9241 119.521 13.7709C119.948 14.5987 120.547 15.2533 121.322 15.7348C122.097 16.1972 123.006 16.4275 124.052 16.4275C125.097 16.4275 126.027 16.1972 126.781 15.7348C127.556 15.2533 128.156 14.5987 128.582 13.7709C129.009 12.9241 129.222 11.9612 129.222 10.884C129.222 9.80687 129.018 8.82495 128.612 7.99716C128.206 7.16937 127.616 6.52514 126.84 6.06275C126.086 5.58132 125.156 5.3406 124.052 5.3406C123.006 5.3406 122.095 5.58132 121.322 6.06275C120.547 6.52514 119.948 7.16937 119.521 7.99716C119.094 8.82495 118.881 9.78782 118.881 10.884ZM112.926 10.884C112.926 9.28561 113.206 7.84303 113.767 6.55285C114.349 5.24362 115.141 4.12662 116.148 3.20358C117.155 2.25976 118.328 1.5376 119.664 1.03712C121.019 0.51758 122.48 0.257812 124.05 0.257812C125.619 0.257812 127.128 0.51758 128.464 1.03712C129.819 1.5376 131 2.25976 131.833 3.20358C132.84 4.12835 133.615 5.24362 134.157 6.55285C134.718 7.84303 135 9.28561 135 10.884C135 12.4825 134.728 13.9164 134.186 15.2447C133.645 16.573 132.88 17.7281 131.892 18.71C131.079 19.6729 129.898 20.4227 128.523 20.963C127.168 21.4826 125.677 21.7423 124.05 21.7423C122.423 21.7423 120.932 21.4826 119.576 20.963C118.221 20.4244 117.04 19.6729 116.033 18.71C115.046 17.7281 114.281 16.573 113.739 15.2447C113.197 13.9164 112.926 12.4634 112.926 10.884Z"
                  fill="currentColor"></path>
                <path
                  d="M20.3321 0.92455H0V6.63944H7.29182V21.1379H13.0403V6.63944H20.3321V0.92455Z"
                  fill="currentColor"></path>
                <path
                  d="M35.3965 21.1449H41.145L33.3741 0.933209H27.5281L19.7573 21.1466H25.5057L26.7303 17.9601H34.1719L35.3965 21.1466V21.1449ZM28.5263 13.2843L30.4494 8.28117L32.3725 13.2843H28.5263Z"
                  fill="currentColor"></path>
              </svg>
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <div className="space-y-4 md:mb-6">
                  <p className="md:text-xl print:text-sm md:font-medium">Ben was a core component of
                    our successful billing system migration. His ability to spot
                    potential issues and provide solutions quickly was vital to
                    the project's success.
                  </p>

                  <p className="md:text-xl print:text-sm md:font-medium">His expertise in cloud
                    native
                    architecture and design patterns made him a valuable asset
                    to
                    our team.</p>
                </div>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://media.licdn.com/dms/image/v2/C4D03AQGdNLGQKga1zA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1550604685456?e=1763596800&v=beta&t=LueEblOdgSeVHpzzh1zlAF1WxBd7tg2SIMOjZwbphHw"
                      alt="Jasnan Thachaparamban"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>JT</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">Jasnan Thachaparamban</cite>
                    <span className="text-muted-foreground block text-sm">Senior Software Engineer @ Taxdoo</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardContent className="h-full">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="print:text-sm md:text-xl md:font-medium md:mb-6">
                  Ben is always on top of the latest trends and technologies.
                  I highly recommend him to any team looking for their next Go
                  developer.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://media.licdn.com/dms/image/v2/D5603AQGUhGHF01LXKA/profile-displayphoto-scale_200_200/B56Zf1yx1uGUAY-/0/1752175419385?e=1763596800&v=beta&t=-I7okZXBAL9CDoH_uYh7cC1Heq2m2slTEFpwxVQ7Fmo"
                      alt="Louis Jones"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>LJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Louis Jones</cite>
                    <span className="text-muted-foreground block text-sm">Lead DevEx Engineer @ Evri</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="h-full">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="mb-3 md:mb-6">
                  Ben was the main driver in our move to ECS and adoption of
                  better CI/CD practices.
                </p>

                <div
                  className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://media.licdn.com/dms/image/v2/D4E03AQGlN7hjT6qsYA/profile-displayphoto-crop_800_800/B4EZhb7XlmHgAQ-/0/1753888948498?e=1763596800&v=beta&t=gBpo1gi3LtWD42Ws-gB4ANJhGkAqnac7GrMRTqYuJRs"
                      alt="James Haigh"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>JH</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">James Haigh</cite>
                    <span className="text-muted-foreground block text-sm">CTO @ Dataworks</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="card variant-mixed">
            <CardContent className="h-full">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="mb-3 md:mb-6">Great manager who values listening to his teammates and
                  helping them grow.</p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://media.licdn.com/dms/image/v2/D4E03AQHZ6ieWufZAJg/profile-displayphoto-shrink_200_200/B4EZSuud2tHMAY-/0/1738098204585?e=1763596800&v=beta&t=cU3_kfMMWyV9q7j3BG8C4JnOCSthbEor4cbaxPxrf34"
                      alt="AJ Cole"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">AJ Cole</p>
                    <span className="text-muted-foreground block text-sm">Software Developer @ Lufthansa Technik</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
