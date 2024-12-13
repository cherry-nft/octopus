"use client"

import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
import { Clock, Award, Users, Phone } from "lucide-react"
import { ButtonLink } from "@/components/client/button-link"

const features = [
  {
    name: "25+ Years Experience",
    description: "Decades of expertise in water damage and mold remediation services.",
    icon: Clock,
  },
  {
    name: "IICRC Certified",
    description: "Certified professionals following industry-leading restoration standards.",
    icon: Award,
  },
  {
    name: "Family-Owned Business",
    description: "Treating every client like family with personalized care and attention.",
    icon: Users,
  },
  {
    name: "24/7 Availability",
    description: "Round-the-clock emergency response for immediate assistance.",
    icon: Phone,
  },
]

const values = [
  {
    title: "Immediate Response",
    description: "Available 24/7 for emergency situations, because water damage doesn't wait."
  },
  {
    title: "Quality Service",
    description: "Using the latest equipment and techniques for effective restoration."
  },
  {
    title: "Clear Communication",
    description: "Keeping you informed throughout the restoration process."
  },
  {
    title: "Customer First",
    description: "Treating every property with care and respect, as if it were our own."
  }
]

export default function AboutPage() {
  return (
    <div className="relative">
      {/* About Hero */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
              <h2 className="text-base font-semibold leading-7 text-blue-600">About Us</h2>
              <GradientHeading asChild>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Restoring Properties, Rebuilding Lives
                </h1>
              </GradientHeading>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Octopus Restoration, Inc. is a family-owned restoration company backed by over 25 years of experience. 
                We take care of every client, treating them like family and caring for their properties like our own.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div className="relative">
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Commitment to Excellence
                </h3>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We've built a reputation for honesty, clear communication, and top-quality work. 
                  We deeply believe in giving our absolute best in all of our projects, regardless of size or scope. 
                  We are experts in our trade and will always keep you informed and educated on your particular task or project.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Octopus Restoration, we believe in:
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.title} className="relative pl-10">
                <dt className="inline font-semibold text-gray-900">
                  <div className="absolute left-1 top-1 h-5 w-5 text-blue-600">•</div>
                  {value.title}
                </dt>
                <dd className="inline"> - {value.description}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        {/* Emergency Contact Banner */}
        <div className="mt-32 rounded-3xl bg-blue-50 px-8 py-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Work with the Best in Restoration?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience our professional service and dedication to excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
      </div>
    </div>
  )
}
