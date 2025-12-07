"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const menuItems = [
  {
    name: "Jollof Rice",
    description: "Our signature smoky party jollof, cooked to perfection",
    image: "/nigerian-jollof-rice-party-style-smoky-tomato-rice.jpg",
  },
  {
    name: "Pounded Yam & Egusi",
    description: "Smooth pounded yam served with rich egusi soup",
    image: "/nigerian-pounded-yam-egusi-soup-spinach-traditiona.jpg",
  },
  {
    name: "Suya",
    description: "Spicy grilled beef skewers with traditional spices",
    image: "/nigerian-suya-spicy-grilled-beef-skewers.jpg",
  },
  {
    name: "Pepper Soup",
    description: "Aromatic spicy soup with assorted meat or fish",
    image: "/nigerian-pepper-soup-spicy-goat-meat-fish.jpg",
  },
  {
    name: "Fried Rice",
    description: "Colorful Nigerian-style fried rice with vegetables",
    image: "/nigerian-fried-rice-colorful-vegetables-shrimp.jpg",
  },
  {
    name: "Moi Moi",
    description: "Steamed bean pudding with eggs and fish",
    image: "/nigerian-moi-moi-steamed-bean-pudding-eggs.jpg",
  },
]

export function Menu() {
  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">Our Menu</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Signature Nigerian Dishes
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A taste of our most beloved dishes, prepared with authentic recipes and the freshest ingredients.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View Full Menu
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
