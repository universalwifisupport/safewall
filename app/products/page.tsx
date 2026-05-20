import Image from "next/image";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ProductsHeroSection } from "@/components/landing/products-hero-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Lock, Radio, AlertCircle, Smartphone, Server, Check } from "lucide-react";

const products = [
  {
    icon: Camera,
    name: "4K Smart Camera System",
    description: "Crystal-clear 4K Ultra HD security cameras with advanced night vision and AI-powered motion detection.",
    image: "/product-camera-hd.png",
    price: "$299",
    specs: ["4K UHD (2880x2160)", "Night Vision with IR", "AI Motion Detection", "Cloud & Local Storage", "2-Way Audio", "IP65 Weatherproof"],
  },
  {
    icon: Lock,
    name: "Smart Biometric Door Lock",
    description: "Keyless entry with fingerprint, PIN, and mobile control. No more lost keys or lockouts.",
    image: "/product-smart-lock.jpg",
    price: "$199",
    specs: ["Fingerprint + PIN", "Mobile App Control", "Temporary Access Codes", "Emergency Backup", "Auto-Lock Feature", "Battery Powered"],
  },
  {
    icon: AlertCircle,
    name: "Wireless Sensor Kit",
    description: "Complete set of door, window, and motion sensors with instant smart alerts.",
    image: "/product-sensors.jpg",
    price: "$149",
    specs: ["Door/Window Sensors", "Motion Detectors", "Glass Break Sensors", "Instant Alerts", "18-Month Battery", "Wireless Range: 300ft"],
  },
  {
    icon: Radio,
    name: "Smart Control Panel",
    description: "Central hub with touchscreen to manage all devices, voice control, and backup power.",
    image: "/product-control-panel.jpg",
    price: "$399",
    specs: ["7\" Touchscreen", "Voice Control Ready", "4G Cellular Backup", "Battery Backup (24hrs)", "Siren: 110dB", "Ethernet & WiFi"],
  },
  {
    icon: Smartphone,
    name: "Mobile App & Portal",
    description: "Control everything from your smartphone. Live video, alerts, automation, and secure cloud access.",
    image: "/app-interface.jpg",
    price: "Included",
    specs: ["iOS & Android", "Live Video Streaming", "Real-Time Notifications", "Video History", "Remote Arming", "Automation Rules"],
  },
  {
    icon: Server,
    name: "Cloud Storage & Monitoring",
    description: "Secure cloud backup with professional 24/7 monitoring and emergency dispatch.",
    image: "/24-7-monitoring.jpg",
    price: "$49/mo",
    specs: ["Unlimited Cloud Storage", "24/7 Professional Monitoring", "Emergency Dispatch", "UL-Certified Center", "Video History (90 days)", "Automatic Backup"],
  },
];

export const metadata = {
  title: "Products - Safe Wall Systems",
  description: "Explore our complete line of home security products.",
};

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      <ProductsHeroSection />

      {/* Products Grid */}
        <section id="products-grid" className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-12">
            {products.map((product, index) => {
              const Icon = product.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className="group relative border border-foreground/10 hover:border-foreground/30 rounded-2xl bg-background hover:bg-foreground/[0.01] overflow-hidden transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                    {/* Product Image */}
                    {product.image && (
                      <div className={`relative h-64 sm:h-80 lg:h-auto min-h-[300px] overflow-hidden bg-foreground/5 ${isEven ? "lg:order-first" : "lg:order-last"}`}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    
                    {/* Product Details */}
                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                      <div className="mb-4 lg:mb-6">
                        <div className="inline-block p-3 bg-foreground/10 group-hover:bg-foreground/20 rounded-lg transition-colors">
                          <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-foreground" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl lg:text-4xl font-display mb-3 lg:mb-4">{product.name}</h3>
                      <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">{product.description}</p>
                      
                      {/* Specifications */}
                      <div className="mb-6 lg:mb-8 pb-6 lg:pb-8 border-b border-foreground/10">
                        <h4 className="font-display text-sm uppercase tracking-widest mb-4 text-foreground/70">Specifications</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                          {product.specs.map((spec, i) => (
                            <li key={i} className="text-sm flex items-start gap-3">
                              <Check className="w-4 h-4 lg:w-5 lg:h-5 text-foreground flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <a href="tel:+18170036248">
                        <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-6 lg:px-8 h-12 lg:h-14 text-sm lg:text-base w-full sm:w-fit group">
                          Call (817) 003-6248
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 lg:py-32 border-t border-foreground/10 bg-foreground/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-display mb-4">Why Safe Wall Systems?</h2>
            <p className="text-base lg:text-lg text-muted-foreground">
              Our products are built with the latest technology and designed to work seamlessly together.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Easy Integration",
                description: "All products work together out of the box. One app, complete control."
              },
              {
                title: "Professional Support",
                description: "24/7 monitoring and support from certified security professionals."
              },
              {
                title: "Lifetime Updates",
                description: "Free software updates and security patches for the lifetime of your system."
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-lg lg:text-xl font-display mb-2">{item.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display mb-6">
            Build your perfect system
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Mix and match products to create the ideal security solution for your home.
          </p>
          <a href="tel:+18170036248">
            <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 h-14 text-base w-full sm:w-auto">
              Call (817) 003-6248
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
