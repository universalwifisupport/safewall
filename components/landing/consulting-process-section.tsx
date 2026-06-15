"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const consultingSteps = [
  {
    number: "01",
    title: "Free In-Home Consultation",
    description: "Schedule a free 30-minute assessment with our certified home security experts. We will thoroughly evaluate your property, identify potential security vulnerabilities, and discuss your custom protection needs.",
    image: "/consultation-meeting.jpg",
  },
  {
    number: "02",
    title: "Customized Security Design",
    description: "Based on your property's unique layout, we build a tailored blueprint. This includes optimal security camera placement, smart sensor mapping, and seamless smart home automation layout design.",
    image: "/custom-solution.jpg",
  },
  {
    number: "03",
    title: "Professional System Installation",
    description: "Our certified engineers handle the complete home security system installation. We ensure all hardware is perfectly mounted, wiring is fully concealed, and every device is rigorously tested.",
    image: "/installation-steps.jpg",
  },
  {
    number: "04",
    title: "24/7 Monitoring Activation",
    description: "Your system goes live with our elite 24/7 professional monitoring service activated instantly. Our team ensures flawless configuration and provides comprehensive hands-on training for your entire family.",
    image: "/24-7-monitoring.jpg",
  },
];

export function ConsultingProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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
    <section ref={sectionRef} className="relative py-24 lg:py-[100px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Our Process
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              From Consultation
              <br />
              <span className="text-muted-foreground">to Peace of Mind.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-sm leading-relaxed">
            Our streamlined home security setup process ensures your property is protected quickly, safely, and professionally.
          </p>
        </div>

        {/* Step tabs */}
        <div className="flex gap-0 border border-foreground/10 rounded-xl overflow-hidden mb-8">
          {consultingSteps.map((step, index) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(index)}
              className={`flex-1 px-4 py-4 text-left transition-all duration-300 border-r border-foreground/10 last:border-r-0 ${
                activeStep === index
                  ? "bg-foreground text-background"
                  : "hover:bg-foreground/5 text-muted-foreground"
              }`}
            >
              <span className={`block font-mono text-xs mb-1 ${
                activeStep === index ? "text-background/60" : "text-muted-foreground/60"
              }`}>{step.number}</span>
              <span className="font-display text-sm lg:text-base leading-tight">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active step content */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Image */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden border border-foreground/10">
            {consultingSteps.map((step, index) => (
              <div
                key={step.number}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeStep === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            ))}
            {/* Step counter overlay */}
            <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full font-mono text-sm">
              Step {activeStep + 1} of {consultingSteps.length}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <span className="font-mono text-6xl lg:text-8xl font-display text-foreground/10 leading-none mb-4">
              {consultingSteps[activeStep].number}
            </span>
            <h3 className="text-3xl lg:text-4xl font-display mb-6">
              {consultingSteps[activeStep].title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {consultingSteps[activeStep].description}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 disabled:opacity-30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button
                onClick={() => setActiveStep((prev) => Math.min(consultingSteps.length - 1, prev + 1))}
                disabled={activeStep === consultingSteps.length - 1}
                className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 disabled:opacity-30 transition-all"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              {activeStep === consultingSteps.length - 1 && (
                <a href="tel:+18559438332">
                  <Button
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background px-8 h-12 text-base rounded-full group ml-2"
                  >
                    Secure Your Home Today
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

