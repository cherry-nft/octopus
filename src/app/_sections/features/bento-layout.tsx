"use client"

import React from "react"
import { motion } from "framer-motion"
import { Droplets, Waves, CloudRain, Sprout, ShieldAlert } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all hover:shadow-xl",
        className
      )}
    >
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 transition-colors group-hover:bg-blue-500 group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-2 text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/10 transition-all group-hover:bg-blue-500/20" />
    </motion.div>
  )
}

const services = [
  {
    title: "Water Damage Restoration",
    description: "Swift response to water damage, implementing effective solutions to prevent further damage and restore your property.",
    icon: <Droplets className="h-6 w-6" />,
    className: "md:col-span-2"
  },
  {
    title: "Water Damage Remediation",
    description: "Professional cleanup and repair services to address water damage and prevent long-term issues.",
    icon: <Waves className="h-6 w-6" />,
    className: "md:col-span-1"
  },
  {
    title: "Flood Damage Restoration",
    description: "Comprehensive flood damage recovery, from water extraction to complete property restoration.",
    icon: <CloudRain className="h-6 w-6" />,
    className: "md:col-span-1"
  },
  {
    title: "Mold Remediation",
    description: "Expert mold detection and removal services to ensure a healthy indoor environment.",
    icon: <Sprout className="h-6 w-6" />,
    className: "md:col-span-1"
  },
  {
    title: "Mold Removal Services",
    description: "Complete mold elimination using advanced techniques and preventive measures.",
    icon: <ShieldAlert className="h-6 w-6" />,
    className: "md:col-span-1"
  }
]

export function ServicesGrid() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            className={service.className}
          />
        ))}
      </div>
    </div>
  )
}
