"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const installationSteps = [
  {
    number: "01",
    title: "Assessment & Design",
    description: "Our security experts visit your home, assess every entry point, and create a customized plan tailored to your property layout.",
    image: "/site-assessment.jpg",
  },
  {
    number: "02",
    title: "Professional Installation",
    description: "Certified technicians install all cameras, sensors, and smart locks. All wiring concealed, every device professionally configured.",
    image: "/installation-process.jpg",
  },
  {
    number: "03",
    title: "Testing & Training",
    description: "We test every component end-to-end and walk you through the app, automation rules, and emergency procedures.",
    image: "/installation-training.jpg",
  },
];

export function DevelopersSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="installation"
      ref={sectionRef}
      className="relative py-24 lg:py-[100px] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: sticky content */}
          <div className={`lg:sticky lg:top-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
              <span className="w-8 h-px bg-foreground/30" />
              Professional Installation
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6">
              Expert installation,
              <br />
              <span className="text-muted-foreground">every step of the way.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Our certified technicians handle everything -- no DIY frustration, no guesswork. Just a perfectly installed system from day one.
            </p>

            {/* Step selector */}
            <div className="space-y-2">
              {installationSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 border ${
                    activeStep === i
                      ? "bg-foreground text-background border-foreground"
                      : "border-foreground/10 hover:border-foreground/25 hover:bg-foreground/[0.03]"
                  }`}
                >
                  <span className={`text-xs font-mono shrink-0 ${
                    activeStep === i ? "text-background/50" : "text-muted-foreground"
                  }`}>{step.number}</span>
                  <span className="font-display text-base">{step.title}</span>
                  <ArrowRight className={`w-4 h-4 ml-auto transition-transform ${
                    activeStep === i ? "text-background translate-x-0" : "text-muted-foreground -translate-x-1 opacity-0 group-hover:opacity-100"
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: image + description */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-foreground/10 mb-8">
              {installationSteps.map((step, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeStep === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ))}
              {/* Active step badge */}
              <div className="absolute bottom-5 left-5 z-10 flex items-center gap-3 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-mono">{installationSteps[activeStep].number} -- {installationSteps[activeStep].title}</span>
              </div>
            </div>

            <div className={`transition-all duration-400`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {installationSteps[activeStep].description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
