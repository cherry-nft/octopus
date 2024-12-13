import "./globals.css"
import localFont from "next/font/local"
import { Toaster } from "sonner"
import { Metadata } from "next"

import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const satoshi = localFont({
  variable: "--font-satoshi",
  src: "../fonts/Satoshi-Variable.ttf",
})

const brand = localFont({
  variable: "--font-brand",
  src: "../fonts/Array-Bold.woff2",
})

export const metadata: Metadata = {
  title: "Octopus Restoration | Water Damage & Mold Remediation Services",
  description: "Professional water damage restoration and mold remediation services available 24/7. IICRC certified experts serving Southern California.",
  icons: {
    icon: "/favicon.svg",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          satoshi.variable,
          brand.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>

        <TailwindIndicator />
        {/* Water-themed gradient background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#0EA5E9_100%)]"></div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
