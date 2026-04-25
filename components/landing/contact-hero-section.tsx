import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react";

export function ContactHeroSection() {
  return (
    <section className="relative py-24 lg:py-32 border-b border-foreground/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              We're here to help
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display tracking-tight mb-6">
              Let's Secure Your Home Together
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our security experts are standing by to answer your questions, provide personalized recommendations, and schedule your free home security assessment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="#contact-form">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="tel:+16504125014">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Contact Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Phone Card */}
            <Link 
              href="tel:+16504125014"
              className="group relative p-6 rounded-2xl border border-foreground/10 bg-background hover:bg-foreground/[0.02] hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Call Us</h3>
              <p className="text-sm text-muted-foreground mb-2">(650) 412-5014</p>
              <p className="text-xs text-muted-foreground">Mon-Fri, 8AM-6PM EST</p>
            </Link>

            {/* Email Card */}
            <Link 
              href="mailto:info@safewallsystems.com"
              className="group relative p-6 rounded-2xl border border-foreground/10 bg-background hover:bg-foreground/[0.02] hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground mb-2">Send Message</p>
              <p className="text-xs text-muted-foreground">24hr response time</p>
            </Link>

            {/* Location Card */}
            <div className="relative p-6 rounded-2xl border border-foreground/10 bg-background">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Office</h3>
              <p className="text-sm text-muted-foreground mb-2">367 Old Waters Hwy</p>
              <p className="text-xs text-muted-foreground">Oden, AR 71961</p>
            </div>

            {/* 24/7 Monitoring Card */}
            <div className="relative p-6 rounded-2xl border border-primary/30 bg-primary/5">
              <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Monitoring</h3>
              <p className="text-sm text-muted-foreground mb-2">24/7/365</p>
              <p className="text-xs text-muted-foreground">Always watching</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
