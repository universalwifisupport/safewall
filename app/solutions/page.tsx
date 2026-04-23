import Image from "next/image";
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
  title: "Solutions - Safe Wall Systems",
  description: "Explore our comprehensive home security solutions for every need.",
};

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6">
              Security Solutions
              <br />
              <span className="text-muted-foreground">For every need</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              From single homes to commercial properties, we have the perfect security solution for you.
            </p>
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
