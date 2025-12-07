import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import "./globals.css"

const _dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Goshen Kitchen | Nigerian Catering for Events",
  description:
    "Authentic Nigerian cuisine for weddings, parties, and corporate events. Experience the rich flavors of Nigeria at your next celebration.",
  generator: 'Praise Ibe'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_dmSans.variable} ${_inter.variable} font-sans antialiased`}>
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
