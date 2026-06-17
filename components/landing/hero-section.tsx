"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

const words = ["Protect", "Monitor", "Secure", "Defend"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-32 lg:pt-24 lg:pb-40">
        {/* Main headline */}
        <div className="mb-6">
          <h1 
            className={`text-[clamp(2.5rem,10vw,10rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">
              {" "}
              <span className="relative inline-block">
                <span 
                  key={wordIndex}
                  className="inline-flex"
                >
                  {words[wordIndex].split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{
                        animationDelay: `${i * 50}ms`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>

              </span>
              {" "}Your
            </span>
            <span className="block">Home 24/7</span>
          </h1>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-end mb-12 lg:mb-16">
          <div>
            <p 
              className={`text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Safeguard your home and family with our in-depth product reviews, expert comparison guides, and other resources.
            </p>
            
            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 mt-8 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a href="tel:+18552263393">
                <Button 
                  size="lg" 
                  className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                >
                  Call (855) 226-3393
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="tel:+18552263393">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                >
                  Get Free Quote
                </Button>
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div 
            className={`relative h-[280px] sm:h-[360px] md:h-[400px] lg:h-[420px] rounded-2xl overflow-hidden transition-all duration-700 delay-300 -mt-4 sm:mt-0 md:-mt-24 lg:-mt-48 md:-ml-6 lg:-ml-16 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Image
              src="/product-camera-hd.png"
              alt="HD security camera for smart home protection"
              fill
              className="object-contain scale-110 sm:scale-110 md:scale-100 md:object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
        
      </div>
      
      {/* Stats marquee - full width outside container */}
      <div 
        className={`absolute bottom-16 md:bottom-24 left-0 right-0 transition-all duration-700 delay-500 overflow-hidden ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-8 md:gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 md:gap-16">
              {[
                { value: "50,000+", label: "homes protected", company: "USA" },
                { value: "99.99%", label: "system uptime", company: "GUARANTEE" },
                { value: "24/7", label: "professional monitoring", company: "CERTIFIED" },
                { value: "< 30s", label: "emergency response", company: "AVERAGE" },
              ].map((stat) => (
                <div key={`${stat.company}-${i}`} className="flex items-baseline gap-2 md:gap-4">
                  <span className="text-2xl md:text-4xl lg:text-5xl font-display">{stat.value}</span>
                  <span className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                    <span className="block font-mono text-[10px] md:text-xs mt-1">{stat.company}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      
    </section>
  );
}
