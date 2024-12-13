"use client"

import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "./ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Areas We Serve", href: "/areas" },
  { name: "Contact", href: "/contact" }
]

interface NavbarProps {
  activeSection?: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-brand text-orange-600">
              octopus
            </Link>
            {/* Certification Badges */}
            <div className="hidden md:flex items-center ml-4 space-x-2">
              <div className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-700 rounded">
                IICRC Certified
              </div>
              <div className="text-xs font-medium px-2 py-1 bg-green-50 text-green-700 rounded">
                HomeAdvisor Approved
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  activeSection === item.name.toLowerCase()
                    ? "text-orange-600 font-medium"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="flex items-center">
            <Link href="tel:8187702339">
              <Button 
                variant="destructive" 
                size="lg"
                className="font-semibold"
              >
                <Phone className="mr-2 h-4 w-4" />
                (818) 770-2339
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
