"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Free Security Consultation",
    description: "Our experts assess your home's unique needs. We evaluate entry points, vulnerabilities, and your lifestyle to design the perfect security system.",
    image: "/consultation-meeting.jpg",
  },
  {
    number: "02",
    title: "Professional Installation",
    description: "Our certified technicians install your complete system with precision. We handle all wiring, camera placement, sensor setup, and system configuration.",
    image: "/installation-process.jpg",
  },
  {
    number: "03",
    title: "Training & Activation",
    description: "We train you on every feature - mobile app, automations, emergency procedures. Your system is live and monitored 24/7 from day one.",
    image: "/installation-training.jpg",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Installation Process
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Simple process.
            <br />
            <span className="text-muted-foreground">Professional results.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group flex flex-col overflow-hidden border border-foreground/10 hover:border-foreground/30 rounded-xl bg-foreground/2 hover:bg-foreground/5 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step Image */}
              <div className="relative w-full h-64 overflow-hidden bg-foreground/5">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Step Content */}
              <div className="flex flex-col p-8">
                <div className="mb-4">
                  <span className="inline-block w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center font-display text-lg font-bold text-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-display mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
