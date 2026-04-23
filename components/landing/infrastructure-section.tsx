"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const centers = [
  { city: "Dallas", state: "Texas", response: "< 28 seconds", operators: "50+", status: "Active" },
  { city: "Phoenix", state: "Arizona", response: "< 28 seconds", operators: "35+", status: "Active" },
  { city: "Atlanta", state: "Georgia", response: "< 28 seconds", operators: "42+", status: "Active" },
  { city: "Los Angeles", state: "California", response: "< 28 seconds", operators: "38+", status: "Active" },
  { city: "Chicago", state: "Illinois", response: "< 28 seconds", operators: "45+", status: "Active" },
  { city: "Miami", state: "Florida", response: "< 28 seconds", operators: "40+", status: "Active" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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
      setActiveLocation((prev) => (prev + 1) % centers.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-[100px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Professional Monitoring
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              24/7 protection
              <br />
              nationwide.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Our UL-certified monitoring centers keep watch around the clock. 
              Trained professionals respond to alerts in under 30 seconds with emergency dispatch.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">6</div>
                <div className="text-sm text-muted-foreground">Monitoring Centers</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Professional Response</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">&lt;30s</div>
                <div className="text-sm text-muted-foreground">Emergency Response</div>
              </div>
            </div>
          </div>

          {/* Right: Monitoring Image & Centers */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative h-96 rounded-xl overflow-hidden mb-8 border border-foreground/10">
              <Image
                src="/24-7-monitoring.jpg"
                alt="Professional 24/7 monitoring center"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {centers.map((center) => (
                <div key={center.city} className="p-4 border border-foreground/10 rounded-lg hover:border-foreground/30 hover:bg-foreground/2 transition-all duration-300">
                  <div className="font-medium text-sm mb-1">{center.city}, {center.state}</div>
                  <div className="flex items-center gap-1 text-xs text-green-500 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {center.status}
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>Response: {center.response}</div>
                    <div>{center.operators} Operators</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
