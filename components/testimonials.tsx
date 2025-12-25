"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    event: "Wedding Reception",
    quote:
      "Goshen Kitchen made our wedding day absolutely perfect! The jollof rice had our guests raving, and the service was impeccable. They truly understood our vision.",
    rating: 5,
  },
  {
    name: "Chidi Nwosu",
    event: "Corporate Gala",
    quote:
      "We hired Goshen Kitchen for our company's annual gala, and they exceeded all expectations. Professional, punctual, and the food was outstanding.",
    rating: 5,
  },
  {
    name: "Funke Adeleke",
    event: "50th Birthday Party",
    quote:
      "From the small chops to the main courses, everything was absolutely delicious. My guests couldn't stop complimenting the food. Highly recommended!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-primary/90 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <p className="text-primary-foreground/70 text-sm uppercase tracking-[0.2em] mb-3">Testimonials</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">What Our Clients Say</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Don't just take our word for it — hear from the families and organizations we've had the pleasure of
              serving.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm h-full">
                <CardContent className="p-6 md:p-8">
                  <Quote className="w-10 h-10 text-primary-foreground/30 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary-foreground text-primary-foreground" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/90 leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                    <p className="text-primary-foreground/60 text-sm">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
