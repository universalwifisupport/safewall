"use client";

import { useEffect, useState, useRef } from "react";

const devices = [
  { name: "Google Home", category: "Voice Control" },
  { name: "Amazon Alexa", category: "Voice Control" },
  { name: "Apple HomeKit", category: "Smart Home" },
  { name: "SmartThings", category: "Smart Home" },
  { name: "Zigbee", category: "Connectivity" },
  { name: "Z-Wave", category: "Connectivity" },
  { name: "IFTTT", category: "Automation" },
  { name: "Home Assistant", category: "Smart Home" },
  { name: "Lutron", category: "Lighting" },
  { name: "Philips Hue", category: "Lighting" },
  { name: "Ecobee", category: "Thermostats" },
  { name: "Nest", category: "Thermostats" },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="integrations" ref={sectionRef} className="relative py-24 lg:py-[100px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Smart Device Compatibility
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Works with your
            <br />
            smart home ecosystem.
          </h2>
          <p className="text-xl text-muted-foreground">
            Compatible with 50+ major smart home platforms and devices. Control everything from one app.
          </p>
        </div>

      </div>
      
      {/* Full-width marquees outside container */}
      <div className="w-full mb-6">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {devices.map((device) => (
                <div
                  key={`${device.name}-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {device.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{device.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Reverse marquee */}
      <div className="w-full">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[...devices].reverse().map((device) => (
                <div
                  key={`${device.name}-reverse-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {device.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{device.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
