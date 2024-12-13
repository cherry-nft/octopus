"use client"

import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
import { MapPin, Phone } from "lucide-react"
import { ButtonLink } from "@/components/client/button-link"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const serviceAreas = [
  {
    city: "Lancaster",
    state: "CA",
    description: "Serving Lancaster with 24/7 emergency water damage and mold remediation services.",
    coordinates: { lat: 34.6868, lng: -118.1542 },
    response: "15-30 minutes",
    services: [
      "Water Damage Restoration",
      "Mold Remediation",
      "Emergency Services"
    ]
  },
  {
    city: "Palmdale",
    state: "CA",
    description: "Quick response times for all restoration needs in the Palmdale area.",
    coordinates: { lat: 34.5794, lng: -118.1165 },
    response: "15-30 minutes",
    services: [
      "Flood Damage Restoration",
      "Water Damage Repair",
      "Mold Removal"
    ]
  },
  {
    city: "Antelope Valley",
    state: "CA",
    description: "Comprehensive restoration services throughout the Antelope Valley region.",
    coordinates: { lat: 34.7514, lng: -118.2513 },
    response: "20-35 minutes",
    services: [
      "Emergency Water Removal",
      "Property Restoration",
      "Mold Inspection"
    ]
  },
  {
    city: "Woodland Hills",
    state: "CA",
    description: "Professional restoration services for the Woodland Hills community.",
    coordinates: { lat: 34.1683, lng: -118.6059 },
    response: "25-40 minutes",
    services: [
      "Water Damage Cleanup",
      "Mold Prevention",
      "Emergency Response"
    ]
  }
]

export default function AreasPage() {
  return (
    <div className="relative">
      {/* Areas Hero */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Service Areas</h2>
              <GradientHeading asChild>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Serving Southern California
                </h1>
              </GradientHeading>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Fast, reliable restoration services across Los Angeles County. Our strategic locations 
                allow us to provide quick response times when you need us most.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Service Areas Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceAreas.map((area) => (
            <HoverCard key={area.city}>
              <HoverCardTrigger asChild>
                <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {area.city}, {area.state}
                      </h3>
                      <p className="mt-2 text-gray-600">{area.description}</p>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold">Response Time</h4>
                    <p className="text-sm text-blue-600">{area.response}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Available Services</h4>
                    <ul className="mt-2 space-y-1">
                      {area.services.map((service) => (
                        <li key={service} className="text-sm text-gray-600">
                          • {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Contact</h4>
                    <p className="text-sm text-gray-600">
                      24/7 Emergency: (818) 770-2339
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-16">
          <div className="rounded-3xl bg-blue-50 px-8 py-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Emergency Restoration Services?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're available 24/7 for water damage and mold emergencies.
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
    </div>
  )
}
