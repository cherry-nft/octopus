import Image from "next/image"
import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
import { ButtonLink } from "@/components/client/button-link"

export function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
        <Image
          src="/wave-bg.svg"
          alt="Wave background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="flex flex-col gap-6">
              {/* Emergency Badge */}
              <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-600 w-fit">
                <span className="animate-pulse mr-1.5 h-2 w-2 rounded-full bg-orange-600" />
                24/7 Emergency Response
              </div>

              {/* Main Heading */}
              <GradientHeading size="xxl" asChild>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Restoring Your Property to Perfection
                </h1>
              </GradientHeading>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-600">
                24/7 Professional Water & Mold Restoration Services
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
                  className="text-lg group"
                  icon="arrow"
                >
                  Free Estimate
                </ButtonLink>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  IICRC Certified
                </div>
                <div className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 bg-green-50 text-green-700 rounded-lg">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  HomeAdvisor Approved
                </div>
                <div className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  25+ Years Experience
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-8 text-sm text-gray-600">
                Serving: Lancaster, Palmdale, Antelope Valley, Woodland Hills, and surrounding areas
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
