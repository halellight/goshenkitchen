"use client"

import { Card, CardContent } from "@/components/ui/card"
import { PartyPopper, Building2, Users, Cake } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    icon: PartyPopper,
    title: "Weddings",
    description:
      "Make your special day unforgettable with our exquisite Nigerian wedding catering packages, from traditional ceremonies to modern receptions.",
    image: "/goshen4.jpg",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Impress your clients and colleagues with our professional corporate catering, perfect for meetings, conferences, and company celebrations.",
    image: "/goshen1.jpg",
  },
  {
    icon: Users,
    title: "Private Parties",
    description:
      "From birthdays to anniversaries, we create personalized menus that bring warmth and flavor to your intimate gatherings.",
    image: "/goshen2.jpg",
  },
  {
    icon: Cake,
    title: "Traditional Ceremonies",
    description:
      "Honor your heritage with authentic dishes for naming ceremonies, engagement parties, and other traditional Nigerian celebrations.",
    image: "/goshen6.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">What We Offer</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Catering for Every Occasion
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether it's an intimate dinner or a grand celebration, we tailor our services to create the perfect
              culinary experience for your event.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <Card className="overflow-hidden bg-card border-none hover:shadow-lg transition-shadow group h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
