"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: "01", name: "Aura Cam Pro", badge: "4K HDR SECURITY", desc: "Experience next-gen surveillance with our 4K HDR outdoor security camera. Get crystal-clear day and night footage, ultra-wide-angle coverage, and AI-powered instant motion alerts directly on your phone.", image: "/product-camera-hd.png", imageFit: "object-contain", dark: false, bg: "bg-[#f0f0ee]" },
  { id: "02", name: "SecureView Smart Doorbell", badge: "2-WAY HD VIDEO", desc: "See, hear, and speak to visitors in real time from anywhere with our HD video doorbell. Features customized smart motion zones and advanced AI package detection to secure your doorstep.", image: "/security-camera.jpg", imageFit: "object-cover", dark: true, bg: "bg-[#2a2017]" },
  { id: "03", name: "Vault Smart Lock", badge: "SMART AUTO-LOCK", desc: "Upgrade to keyless entry with our high-security smart door lock. Features automatic locking, real-time access logs, and a one-tap emergency lockdown mode managed entirely via your home automation app.", image: "/product-smart-lock.jpg", imageFit: "object-cover", dark: true, bg: "bg-[#1a1a1a]" },
  { id: "04", name: "Pulse Motion Sensor", badge: "PET-IMMUNE MOTION", desc: "Protect every corner with an advanced wireless motion sensor. Built with pet-immune technology to eliminate annoying false alarms while keeping real threats instantly in focus.", image: "/product-sensors.jpg", imageFit: "object-cover", dark: false, bg: "bg-[#e8e4de]" },
  { id: "05", name: "Command Center Touchscreen", badge: "TOUCH & VOICE CONTROL", desc: "The central hub of your smart home automation system. Control your entire property effortlessly using an intuitive touchscreen, voice commands, or your mobile app--putting total security at your fingertips.", image: "/product-control-panel.jpg", imageFit: "object-cover", dark: true, bg: "bg-[#1c2a3a]" },
];

type Product = typeof products[0];

export function ProductShowcaseSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentRef = useRef(current);
  const animatingRef = useRef(false);

  useEffect(() => { currentRef.current = current; }, [current]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const go = (next: number, dir: "left" | "right") => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setDirection(dir);
    setPrev(currentRef.current);
    setCurrent(next);
    setAnimating(true);
    setTimeout(() => { setPrev(null); setAnimating(false); animatingRef.current = false; }, 450);
  };

  const goNext = () => go((currentRef.current + 1) % products.length, "right");
  const goPrev = () => go((currentRef.current - 1 + products.length) % products.length, "left");

  // Auto-advance every 2s
  useEffect(() => {
    if (!isVisible) return;
    const tick = () => {
      goNext();
      timerRef.current = setTimeout(tick, 2000);
    };
    timerRef.current = setTimeout(tick, 2000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [isVisible]);

  const product = products[current];
  const prevProduct = prev !== null ? products[prev] : null;

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-[100px] overflow-hidden border-t border-foreground/10">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
              <span className="w-8 h-px bg-foreground/30" />
              Our Hardware
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
              The Safe Wall Systems<br /><span className="text-muted-foreground">Collection.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-sm leading-relaxed">
            Each device is engineered to protect your home and designed to complement it. No clunky plastic--just premium smart home security hardware that works in perfect concert.
          </p>
        </div>
      </div>

      {/* Slider */}
      <div className={`max-w-[1400px] mx-auto px-6 lg:px-12 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl" style={{ height: "auto", minHeight: "400px" }}>

          {/* Exiting card */}
          {prevProduct && (
            <div
              key={`prev-${prev}`}
              className={`absolute inset-0 ${prevProduct.bg}`}
              style={{ animation: `${direction === "right" ? "slideOutLeft" : "slideOutRight"} 450ms ease-in-out forwards` }}
            >
              <SlideContent product={prevProduct} />
            </div>
          )}

          {/* Entering card */}
          <div
            key={`curr-${current}`}
            className={`absolute inset-0 ${product.bg}`}
            style={{ animation: animating ? `${direction === "right" ? "slideInRight" : "slideInLeft"} 450ms ease-in-out forwards` : "none" }}
          >
            <SlideContent product={product} />
          </div>

          {/* Prev button */}
          <button
            onClick={() => { if (timerRef.current) clearTimeout(timerRef.current); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={() => { if (timerRef.current) clearTimeout(timerRef.current); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => { if (timerRef.current) clearTimeout(timerRef.current); go(i, i > current ? "right" : "left"); }}
              className={`transition-all duration-300 rounded-full ${i === current ? "w-6 h-2 bg-foreground" : "w-2 h-2 bg-foreground/25 hover:bg-foreground/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SlideContent({ product }: { product: Product }) {
  return (
    <div className="flex flex-col md:flex-row h-full w-full min-h-[400px] md:min-h-[480px]">
      {/* Image side */}
      <div className="relative flex-1 md:w-1/2 min-h-[200px] md:min-h-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`${product.imageFit}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      {/* Text side */}
      <div className={`flex flex-col justify-start pt-2 md:pt-4 lg:pt-6 px-6 md:px-12 lg:px-16 pb-8 md:pb-12 md:w-1/2 ${product.dark ? "text-white" : "text-foreground"}`}>
        <span className="inline-block text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-full bg-black/10 w-fit mb-4 md:mb-6">
          {product.badge}
        </span>
        <p className="text-xs font-mono text-current opacity-40 mb-2">{product.id} / 05</p>
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-display tracking-tight mb-3 md:mb-4">{product.name}</h3>
        <p className={`text-sm md:text-base leading-relaxed ${product.dark ? "text-white/60" : "text-foreground/60"} max-w-xs`}>{product.desc}</p>
      </div>
    </div>
  );
}
