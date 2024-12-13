"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "OctopusRestoration@yahoo.com",
    href: "mailto:OctopusRestoration@yahoo.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(818) 770-2339",
    href: "tel:8187702339"
  },
  {
    icon: MapPin,
    label: "Address",
    value: "42104 6th St E, Lancaster, CA",
    href: "https://maps.google.com/?q=42104+6th+St+E,+Lancaster,+CA"
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Open 24 Hours",
    href: null
  }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-brand text-white mb-4">octopus</h3>
            <p className="text-sm">
              A family-owned restoration company backed by over 25 years of experience. 
              Available 24/7 for all your water damage and mold remediation needs.
            </p>
            <div className="mt-4 flex space-x-2">
              <div className="text-xs font-medium px-2 py-1 bg-blue-900/30 text-blue-200 rounded">
                IICRC Certified
              </div>
              <div className="text-xs font-medium px-2 py-1 bg-green-900/30 text-green-200 rounded">
                HomeAdvisor Approved
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/water-damage" className="hover:text-orange-400 transition-colors">
                  Water Damage Restoration
                </Link>
              </li>
              <li>
                <Link href="/services/water-remediation" className="hover:text-orange-400 transition-colors">
                  Water Damage Remediation
                </Link>
              </li>
              <li>
                <Link href="/services/flood-damage" className="hover:text-orange-400 transition-colors">
                  Flood Damage Restoration
                </Link>
              </li>
              <li>
                <Link href="/services/mold-remediation" className="hover:text-orange-400 transition-colors">
                  Mold Remediation
                </Link>
              </li>
              <li>
                <Link href="/services/mold-removal" className="hover:text-orange-400 transition-colors">
                  Mold Removal Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li>Lancaster, CA</li>
              <li>Palmdale, CA</li>
              <li>Antelope Valley, CA</li>
              <li>Woodland Hills, CA</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start">
                  <item.icon className="h-5 w-5 mt-0.5 mr-2 text-orange-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-400">{item.label}</div>
                    {item.href ? (
                      <Link href={item.href} className="hover:text-orange-400 transition-colors">
                        {item.value}
                      </Link>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-sm">
            © {new Date().getFullYear()} Octopus Restoration, Inc. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
