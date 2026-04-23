"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const team = [
  {
    name: "John Mitchell",
    role: "Chief Security Officer",
    bio: "25+ years in professional security. Former law enforcement, expert in home security design.",
  },
  {
    name: "Sarah Chen",
    role: "VP Customer Success",
    bio: "Dedicated to customer satisfaction. Ensures every installation meets our high standards.",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Installation Technician",
    bio: "Certified technician with 15+ years experience. Trains all new installation team members.",
  },
  {
    name: "Elena Rodriguez",
    role: "24/7 Monitoring Supervisor",
    bio: "Oversees professional monitoring operations. Ensures rapid emergency response always.",
  },
];

export function ExpertTeamSection() {
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
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Our Team
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Experts in home security
          </h2>
          <p className="text-xl text-muted-foreground">
            Our team of certified professionals brings decades of expertise to protect your family.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group flex flex-col overflow-hidden border border-foreground/10 hover:border-foreground/30 rounded-xl bg-foreground/2 hover:bg-foreground/5 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Team Member Image */}
              <div className="relative w-full h-64 overflow-hidden bg-foreground/5">
                <Image
                  src="/expert-team.jpg"
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="25vw"
                />
              </div>

              {/* Member Info */}
              <div className="flex flex-col p-6">
                <h3 className="text-xl font-display mb-1">{member.name}</h3>
                <p className="text-sm font-mono text-foreground/60 mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 border border-foreground/10 rounded-xl bg-foreground/[0.02]">
          <h3 className="text-2xl font-display mb-4">Meeting Our Standards</h3>
          <p className="text-muted-foreground leading-relaxed">
            Every member of the Safe Wall Systems team is certified, background-checked, and trained to the highest standards. 
            We take your home security seriously because we understand that protecting your family is our responsibility. 
            Our commitment to excellence is reflected in our 98% customer satisfaction rating.
          </p>
        </div>
      </div>
    </section>
  );
}
