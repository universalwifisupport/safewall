"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Smart Cameras & Monitoring",
    description: "Crystal-clear 4K video with intelligent motion detection. Night vision and AI-powered alerts.",
    image: "/outdoor-coverage.jpg",
    span: "lg:col-span-2",
    height: "h-[420px]",
  },
  {
    number: "02",
    title: "24/7 Professional Monitoring",
    description: "Emergency response dispatch in under 30 seconds. UL-certified centers, always watching.",
    image: "/monitoring-center.jpg",
    span: "lg:col-span-1",
    height: "h-[380px]",
  },
  {
    number: "03",
    title: "Smart Home Integration",
    description: "Works with Google Home, Alexa, Apple HomeKit, and all major platforms seamlessly.",
    image: "/smart-home-ecosystem.jpg",
    span: "lg:col-span-1",
    height: "h-[380px]",
  },
  {
    number: "04",
    title: "Military-Grade Encryption",
    description: "Bank-level security, SOC 2 compliance, and automatic cloud backups protect your data.",
    image: "/certifications.jpg",
    span: "lg:col-span-2",
    height: "h-[380px]",
  },
];

export function FeaturesSection() {
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
    <section id="features" ref={sectionRef} className="relative py-24 lg:py-[100px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
              <span className="w-8 h-px bg-foreground/30" />
              Core Features
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Complete home protection.
              <br />
              <span className="text-muted-foreground">Trusted by thousands.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-sm leading-relaxed">
            Everything you need to keep your home and family safe -- all in one system.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`group relative overflow-hidden rounded-2xl ${feature.span} ${feature.height} transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="font-mono text-xs text-white/50 mb-3">{feature.number}</span>
                <h3 className="text-2xl lg:text-3xl font-display text-white mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base text-white/70 leading-relaxed max-w-md translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-6 right-6 w-8 h-8 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
