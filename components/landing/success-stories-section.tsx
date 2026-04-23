"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const caseStudies = [
  {
    title: "The Johnson Family - Dallas, TX",
    description: "Family of 4 wanted to monitor their home while traveling for work",
    challenge: "Concerned about package thefts and monitoring home while away",
    solution: "4-camera system with smart doorbell and 24/7 professional monitoring",
    result: "Caught attempted package theft within first week; family feels secure traveling",
    image: "/success-story.jpg",
    testimonial: "Safe Wall Systems gave us the peace of mind we needed. The system is so easy to use!",
  },
  {
    title: "The Chen Residence - Austin, TX",
    description: "Elderly homeowners concerned about home security and medical emergencies",
    challenge: "Needed reliable monitoring with emergency response capability",
    solution: "Smart door lock with visitor recognition and integration with medical alert system",
    result: "Quick response to emergency situation saved critical time",
    image: "/success-story.jpg",
    testimonial: "Our family finally stops worrying. Safe Wall Systems is trustworthy and dependable.",
  },
  {
    title: "The Martinez Property - Houston, TX",
    description: "Real estate investor managing multiple rental properties",
    challenge: "Needed affordable monitoring for 5 properties with tenant management",
    solution: "Customized multi-property dashboard with separate tenant access levels",
    result: "Reduced false alarms by 40%, improved tenant safety records",
    image: "/success-story.jpg",
    testimonial: "Best decision for property management. Saves time and protects my investments.",
  },
];

export function SuccessStoriesSection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Success Stories
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Real homes. Real protection.
          </h2>
          <p className="text-xl text-muted-foreground">
            See how Safe Wall Systems has helped families across America feel safer.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group flex flex-col overflow-hidden border border-foreground/10 hover:border-foreground/30 rounded-xl bg-background hover:bg-foreground/2 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Case Study Image */}
              <div className="relative w-full h-48 overflow-hidden bg-foreground/5">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="33vw"
                />
              </div>

              {/* Case Study Content */}
              <div className="flex flex-col p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                  ))}
                </div>

                <h3 className="text-lg font-display mb-2">{study.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{study.description}</p>

                <div className="space-y-3 mb-4 pb-4 border-b border-foreground/10 text-sm">
                  <div>
                    <span className="font-medium text-foreground/70">Challenge:</span>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground/70">Solution:</span>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground/70">Result:</span>
                    <p className="text-muted-foreground">{study.result}</p>
                  </div>
                </div>

                <p className="text-sm italic text-foreground/70">"{study.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
