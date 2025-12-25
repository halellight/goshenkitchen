"use client"

import { Utensils, Heart, Award } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    icon: Utensils,
    title: "Authentic Recipes",
    description:
      "Traditional recipes passed down through generations, prepared with the finest ingredients sourced locally and internationally.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Every dish is prepared with passion and care, ensuring your guests experience the true essence of Nigerian hospitality.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized for excellence in catering, we bring professionalism and warmth to every event we serve.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <ScrollReveal delay={0}>
                <img
                  src="/goshen6.jpg"
                  alt="Chef preparing food"
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <img
                  src="/close-up-of-nigerian-suya-meat-skewers-grilling.jpg"
                  alt="Suya grilling"
                  className="w-full h-32 md:h-40 object-cover rounded-lg"
                />
              </ScrollReveal>
            </div>
            <div className="space-y-4 pt-8">
              <ScrollReveal delay={0.1}>
                <img
                  src="/elegant-nigerian-wedding-food-display-buffet.jpg"
                  alt="Wedding buffet"
                  className="w-full h-32 md:h-40 object-cover rounded-lg"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <img
                  src="/goshen7.jpg"
                  alt="Egusi soup"
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                />
              </ScrollReveal>
            </div>
          </div>

          {/* Content */}
          <div>
            <ScrollReveal>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">Our Story</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                A Celebration of Nigerian Culinary Heritage
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Founded with a passion for sharing the vibrant flavors of Nigeria, Goshen Kitchen has been transforming
                events into memorable culinary experiences for over a decade. Our name reflects our commitment to
                providing a land of abundance and nourishment through every dish we serve.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={0.3 + index * 0.1}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
