"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/beautiful-nigerian-jollof-rice-and-traditional-afr.jpg"
          alt="Nigerian food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-medium"
        >
          Authentic Nigerian Cuisine
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-tight text-balance mb-6"
        >
          Bringing the Rich Flavors of Nigeria to Your Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          From intimate gatherings to grand celebrations, we craft unforgettable culinary experiences with traditional
          and international dishes made with love and authenticity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
            Plan Your Event
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          {/* <Button
            size="lg"
            variant="outline"
            className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10 text-base px-8 bg-transparent"
          >
            View Our Menu
          </Button> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-secondary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
