"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const solutionTypes = [
  {
    title: "Custom Residential",
    description: "Tailored systems for single-family homes, condos, and townhomes",
    features: ["Camera placement analysis", "Smart device integration", "Automation setup", "Professional monitoring"],
  },
  {
    title: "Rental-Friendly",
    description: "Renter-approved solutions with no permanent installation required",
    features: ["Wireless setup", "Portable equipment", "Tenant-friendly", "Easy relocation"],
  },
  {
    title: "Multi-Property",
    description: "Central management for landlords managing multiple properties",
    features: ["Multi-site dashboard", "Tenant notifications", "Property reports", "Compliance tracking"],
  },
  {
    title: "Extended Coverage",
    description: "Advanced systems with coverage for large homes and properties",
    features: ["Extended range", "Multiple hubs", "Outdoor coverage", "Advanced analytics"],
  },
];

export function CustomizedSolutionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16 lg:mb-24">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Custom Solutions
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
              Security
              <br />
              designed for you.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Every home is different. That's why we create customized security solutions tailored to your specific needs, property layout, and lifestyle.
            </p>
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
            >
              Get a Custom Quote
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Image */}
          <div
            className={`relative h-96 rounded-xl overflow-hidden border border-foreground/10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Image
              src="/custom-solution.jpg"
              alt="Custom security solution design"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

        {/* Solution Types */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutionTypes.map((solution, index) => (
            <div
              key={index}
              className={`p-8 border border-foreground/10 hover:border-foreground/30 rounded-xl bg-foreground/[0.02] hover:bg-foreground/[0.05] transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <h3 className="text-2xl font-display mb-2 group-hover:translate-x-1 transition-transform">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-foreground flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
