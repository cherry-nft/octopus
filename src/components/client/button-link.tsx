"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

interface ButtonLinkProps {
  href: string
  variant?: "default" | "destructive" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  children: React.ReactNode
  icon?: "phone" | "arrow"
}

export function ButtonLink({ 
  href, 
  variant = "default", 
  size = "default",
  className = "",
  children,
  icon
}: ButtonLinkProps) {
  const IconComponent = icon === "phone" ? Phone : icon === "arrow" ? ArrowRight : null

  return (
    <Link href={href}>
      <Button 
        variant={variant} 
        size={size}
        className={className}
      >
        {IconComponent && <IconComponent className={`${icon === "arrow" ? "ml-2" : "mr-2"} h-5 w-5`} />}
        {children}
      </Button>
    </Link>
  )
}
