import { Hero } from "./_sections/hero"
import { Features } from "./_sections/features"
import { FadeIn } from "@/components/cult/fade-in"
import { ButtonLink } from "@/components/client/button-link"

const testimonials = [
  {
    content: "Quick response time and professional service. They helped us with severe water damage after a pipe burst. Highly recommend!",
    author: "Sarah M.",
    location: "Lancaster, CA"
  },
  {
    content: "The team was thorough and kept us informed throughout the entire mold remediation process. Our home is now safe and clean.",
    author: "David R.",
    location: "Palmdale, CA"
  },
  {
    content: "Outstanding emergency service! They arrived within 30 minutes of our call and prevented what could have been extensive water damage.",
    author: "Michael K.",
    location: "Woodland Hills, CA"
  }
]

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />

      {/* Testimonials Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by Homeowners Across Southern California
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                See what our clients have to say about our restoration services
              </p>
            </div>
          </FadeIn>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index}>
                <figure className="relative rounded-3xl bg-white p-8 shadow-lg">
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-gray-900">
                      "{testimonial.content}"
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-gray-100 pt-6">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="mt-1 text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-gray-50">
                      <svg className="h-12 w-12 fill-blue-600/10 stroke-blue-600/70" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.5 9C8.5 8.17157 9.17157 7.5 10 7.5H14C14.8284 7.5 15.5 8.17157 15.5 9C15.5 9.82843 14.8284 10.5 14 10.5H10C9.17157 10.5 8.5 9.82843 8.5 9Z" strokeWidth="2"/>
                        <path d="M8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13Z" strokeWidth="2"/>
                        <path d="M10 15.5C10 15.2239 10.2239 15 10.5 15H13.5C13.7761 15 14 15.2239 14 15.5C14 15.7761 13.7761 16 13.5 16H10.5C10.2239 16 10 15.7761 10 15.5Z" strokeWidth="2"/>
                      </svg>
                    </div>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Need Emergency Restoration Services?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We're available 24/7 for water damage and mold emergencies. 
                Don't wait - contact us now for immediate assistance.
              </p>
              <div className="mt-10 flex items-center justify-center gap-6">
                <ButtonLink 
                  href="tel:8187702339"
                  variant="destructive" 
                  size="lg"
                  className="text-lg"
                  icon="phone"
                >
                  (818) 770-2339
                </ButtonLink>
                <ButtonLink 
                  href="/contact"
                  variant="outline" 
                  size="lg"
                >
                  Get a Free Estimate
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
