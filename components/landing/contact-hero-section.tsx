import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export function ContactHeroSection() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/monitoring-center.jpg"
          alt="Professional Support Team"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 text-white">
            Get in Touch
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 max-w-xl">
            Let's secure your home. Our expert team is ready to answer your questions and provide a free security consultation.
          </p>
          
          {/* Quick Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asChild size="lg" className="gap-2">
              <Link href="tel:+16504125014">
                <Phone className="w-4 h-4" />
                Call Us: (650) 412-5014
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">
              <Link href="mailto:support@safewallsystems.com">
                <Mail className="w-4 h-4" />
                Email Us
              </Link>
            </Button>
          </div>

          <p className="text-white/70 text-sm">
            Available 24/7 for emergencies • 8AM-6PM EST for general inquiries
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
    </section>
  );
}
