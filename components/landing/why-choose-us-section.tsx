"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Shield, Zap, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Award,
    number: "01",
    title: "Industry Leader",
    description: "20+ years protecting American homes. Trusted by 50,000+ families nationwide with award-winning service.",
  },
  {
    icon: Shield,
    number: "02",
    title: "24/7 Monitoring",
    description: "UL-certified monitoring centers staffed around the clock. Average emergency response under 30 seconds.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Latest Technology",
    description: "4K cameras, AI-powered alerts, and seamless smart home integration -- always updated, never outdated.",
  },
  {
    icon: DollarSign,
    number: "04",
    title: "Fair Pricing",
    description: "Flexible plans from $29/month with no long-term contracts. Cancel anytime, keep your equipment.",
  },
];

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-[100px] border-t border-foreground/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Single hero image */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-foreground/10">
              <Image
                src="/home-monitoring.jpg"
                alt="Why Safe Wall Systems - trusted home monitoring"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right: Content & reasons */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
              <span className="w-8 h-px bg-foreground/30" />
              Why Safe Wall Systems
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-4">
              Built different,<br />
              <span className="text-muted-foreground">by design.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Thousands of families choose us -- and stay with us year after year.
            </p>

            {/* Reasons list */}
            <div className="space-y-6">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div
                    key={i}
                    className={`flex gap-4 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-foreground/10 border border-foreground/20">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <h3 className="font-display text-lg">{r.title}</h3>
                        <span className="text-xs font-mono text-muted-foreground">{r.number}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-foreground/10">
              {[
                { value: "50K+", label: "Families Protected" },
                { value: "< 30s", label: "Response Time" },
              ].map((stat, i) => (
                <div key={i} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${600 + i * 100}ms` }}>
                  <div className="text-3xl font-display tracking-tight mb-1">{stat.value}</div>
                  <div className="text-xs font-mono text-muted-foreground tracking-widest uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
