import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Camera, Bell, Zap, Home, Check } from "lucide-react";

const solutions = [
  {
    icon: Home,
    title: "Residential Home Security",
    description: "Complete protection for single-family homes with 4K cameras, smart locks, sensors, and 24/7 professional monitoring.",
    image: "/home-monitoring.jpg",
    features: ["4K Smart Cameras", "Biometric Smart Locks", "Door/Window Sensors", "Professional 24/7 Monitoring", "Mobile App Control", "Cloud Storage"],
  },
  {
    icon: Lock,
    title: "Renter-Friendly Solutions",
    description: "No permanent installation required. Wireless, portable systems perfect for apartments and rentals.",
    image: "/product-smart-lock.jpg",
    features: ["Wireless Cameras", "Portable Smart Lock", "Instant Mobile Alerts", "Cloud Storage (90 days)", "Easy Setup (15 min)", "Take with you when you move"],
  },
  {
    icon: Camera,
    title: "Multi-Property Solutions",
    description: "Manage multiple properties from one dashboard. Ideal for landlords and property managers.",
    image: "/24-7-monitoring.jpg",
    features: ["Multi-Site Dashboard", "Centralized Monitoring", "Tenant Notifications", "Property Reports", "Maintenance Alerts", "Compliance Tracking"],
  },
  {
    icon: Bell,
    title: "Professional Monitoring",
    description: "UL-certified monitoring centers with trained professionals. Emergency dispatch in under 30 seconds.",
    image: "/24-7-monitoring.jpg",
    features: ["UL-Certified Centers", "Instant Response", "Video Verification", "Emergency Dispatch", "Police Coordination", "Incident Reports"],
  },
  {
    icon: Zap,
    title: "Smart Home Integration",
    description: "Seamlessly control security alongside lighting, locks, thermostats, and more through one app.",
    image: "/smart-home-ecosystem.jpg",
    features: ["Google Home Compatible", "Alexa Integration", "Apple HomeKit Ready", "Automated Routines", "Geofencing", "Voice Control"],
  },
  {
    icon: Shield,
    title: "Professional Installation",
    description: "Expert technicians handle everything from consultation to training. Included with Premium and Ultimate plans.",
    image: "/installation-process.jpg",
    features: ["Free System Design", "Expert Installation", "Hands-on Training", "30-Day Guarantee", "Ongoing Support", "System Optimization"],
  },
];

export const metadata = {
  title: "Smart Home Security Systems & Custom Protection Solutions",
  description: "Protect your property with smart home security systems. Get expert installation, 4K wireless security cameras, and 24/7 professional monitoring services.",
};

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section - Featured Solution Showcase */}
      <section className="relative border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <h1 className="text-5xl lg:text-6xl font-display tracking-tight mb-6">
                Tailored Security Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                From single-family homes to commercial multi-property portfolios, we engineer custom smart home security systems that seamlessly adapt to your lifestyle. Scale your safety with tech that evolves with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/products">
                    View Products
                  </Link>
                </Button>
              </div>
            </div>

            {/* Featured Solution Preview */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-foreground/10 bg-foreground/5">
                <Image
                  src="/smart-home-ecosystem.jpg"
                  alt="Smart Home Security System"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-sm font-medium mb-3">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-display mb-2">Complete Smart Home Protection</h3>
                  <p className="text-white/90 text-sm">4K cameras, smart locks, sensors, and 24/7 monitoring</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Solutions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Home, label: "Residential" },
              { icon: Lock, label: "Apartments" },
              { icon: Camera, label: "Multi-Property" },
              { icon: Bell, label: "24/7 Monitoring" },
              { icon: Zap, label: "Smart Home" },
              { icon: Shield, label: "Professional Install" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-foreground/10 bg-background hover:bg-foreground/[0.02] hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-center">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className="group relative border border-foreground/10 hover:border-foreground/30 rounded-2xl bg-background hover:bg-foreground/[0.01] overflow-hidden transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                    {/* Image - Left or Right based on index */}
                    {solution.image && (
                      <div className={`relative h-96 lg:h-auto overflow-hidden bg-foreground/5 ${isEven ? "lg:order-first" : "lg:order-last"}`}>
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex flex-col justify-center p-12">
                      <div className="mb-6 inline-block">
                        <div className="p-3 bg-foreground/10 group-hover:bg-foreground/20 rounded-lg transition-colors w-fit">
                          <Icon className="w-8 h-8 text-foreground" />
                        </div>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-display mb-4">{solution.title}</h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{solution.description}</p>
                      
                      <div className="mb-8 pb-8 border-b border-foreground/10">
                        <h4 className="font-display text-sm uppercase tracking-widest mb-4 text-foreground/70">Key Features</h4>
                        <ul className="grid grid-cols-2 gap-3">
                          {solution.features.map((feature, i) => (
                            <li key={i} className="text-sm flex items-start gap-3">
                              <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 h-14 text-base w-fit group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10 bg-foreground/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-display mb-6">
            Ready to protect your home?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free consultation from our security experts. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 h-14 text-base">
              Get Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-foreground/20">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
