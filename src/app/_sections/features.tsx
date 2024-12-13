"use client"

import React from "react"
import Balancer from "react-wrap-balancer"
import { FadeIn } from "@/components/cult/fade-in"
import { ServicesGrid } from "./features/bento-layout"

export function Features() {
  return (
    <div className="relative z-10 py-24 bg-white/80">
      <div className="flex flex-col items-center justify-center">
        <div className="mx-auto max-w-lg md:max-w-4xl text-center">
          <h2 className="font-bold tracking-tight text-gray-900 text-4xl md:text-5xl">
            Professional Restoration Services
          </h2>

          <FadeIn>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              <Balancer>
                From emergency water damage to comprehensive mold remediation, 
                our IICRC-certified experts are available 24/7 to restore your property 
                to its pre-damage condition.
              </Balancer>
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mt-16">
        <ServicesGrid />
      </div>
    </div>
  )
}
