"use client"

import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
import { Droplets, Waves, CloudRain, Sprout, ShieldAlert } from "lucide-react"
import { ButtonLink } from "@/components/client/button-link"

const services = [
  {
    id: "water-damage",
    icon: Droplets,
    title: "Water Damage Restoration",
    description: "In the event of a leak or flood, we're here to help through our dependable water damage restoration services. We'll stop the flow of water and drain standing water before identifying all affected areas and then implementing the most effective solution.",
    features: [
      "Swift emergency response",
      "Complete water extraction",
      "Professional drying and dehumidification",
      "Structural damage assessment",
      "Property restoration services"
    ]
  },
  {
    id: "water-remediation",
    icon: Waves,
    title: "Water Damage Remediation",
    description: "Our team of professionals evaluates the current state of the damage, cleans it up, and repairs it to avoid further damage. We will remove any visible moisture to prevent mold growth. Additionally, we offer effective mold removal if mold starts to grow on your property.",
    features: [
      "Thorough damage assessment",
      "Moisture detection and removal",
      "Preventive treatments",
      "Structural drying",
      "Restoration planning"
    ]
  },
  {
    id: "flood-damage",
    icon: CloudRain,
    title: "Flood Damage Restoration",
    description: "Starting with water extraction, we'll remove the contaminated water first and then decontaminate the property, making it safe for repairs. As your committed contractors, we offer affordable repair services that best suit your needs.",
    features: [
      "Emergency flood response",
      "Contaminated water removal",
      "Property decontamination",
      "Structural drying",
      "Complete restoration services"
    ]
  },
  {
    id: "mold-remediation",
    icon: Sprout,
    title: "Mold Remediation",
    description: "Mold remediation helps balance the mold on your property using only the latest equipment and concentrated solutions. We're dedicated to providing the best services to benefit you.",
    features: [
      "Professional mold inspection",
      "Advanced detection techniques",
      "Safe containment procedures",
      "Complete mold removal",
      "Preventive treatments"
    ]
  },
  {
    id: "mold-removal",
    icon: ShieldAlert,
    title: "Mold Removal Services",
    description: "Moisture on your property that goes unchecked will nurture unwanted molds. That is why we're proud to offer complete and efficient mold removal services using only the best equipment and the most effective solutions.",
    features: [
      "Comprehensive mold inspection",
      "Safe removal procedures",
      "Air quality testing",
      "Preventive measures",
      "Post-removal verification"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Services Hero */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Our Services</h2>
              <GradientHeading asChild>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Professional Restoration Services
                </h1>
              </GradientHeading>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                From emergency water damage to comprehensive mold remediation, our IICRC-certified experts 
                are available 24/7 to restore your property to its pre-damage condition.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Services List */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-24 pb-24">
          {services.map((service, index) => (
            <FadeIn key={service.id}>
              <div className={`flex flex-col lg:flex-row gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Service Icon */}
                <div className="lg:w-1/3">
                  <div className="aspect-square rounded-3xl bg-blue-500/10 p-8 flex items-center justify-center">
                    <service.icon className="h-32 w-32 text-blue-600" />
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="lg:w-2/3">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg leading-8 text-gray-600 mb-8">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10">
                          <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none">
                            <path d="M7.75 12.75L10 15.25L16.25 8.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <ButtonLink 
                      href="/contact" 
                      variant="default" 
                      size="lg"
                    >
                      Request This Service
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Emergency Contact Banner */}
        <div className="rounded-3xl bg-blue-50 px-8 py-12 text-center mb-24">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Need Emergency Restoration Services?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're available 24/7 for water damage and mold emergencies. 
            Don't wait - contact us now for immediate assistance.
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
