import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'Expert Research of Home Security and Home Safety Products',
  description: 'Safe Wall Systems is the 1st trusted resource for home security and safety. Our experts share tips and ways to protect yourself and your family.',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Safe Wall Systems",
            "url": "https://safewallsystems.com/",
            "logo": "https://safewallsystems.com/icon.svg",
            "description": "Safe Wall Systems provides advanced security wall systems, fire protection solutions, and durable wall technologies for commercial, industrial, and residential applications.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/",
              "https://www.instagram.com/",
              "https://www.linkedin.com/"
            ]
          })}
        </script>
      </head>
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
