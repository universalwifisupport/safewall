import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Lock, Shield, Smartphone, CheckCircle2 } from "lucide-react";

export function ProductsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/[0.02] to-background py-24 lg:py-32">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Premium Security Equipment</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display tracking-tight mb-6">
            Smart Security
            <span className="block text-primary">Solutions</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8">
            Professional-grade technology designed for modern homes. Every device works together seamlessly for complete protection.
          </p>

          <Button asChild size="lg" className="gap-2">
            <Link href="#products-grid">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Product Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Product Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-background to-primary/5 p-6 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Camera className="w-6 h-6 text-primary" />
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-display mb-2">4K Cameras</h3>
              <p className="text-sm text-muted-foreground">Crystal-clear monitoring</p>
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden mb-4">
              <Image
                src="/product-camera-hd.png"
                alt="4K Camera"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 280px"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-muted-foreground">From $299</p>
          </div>

          {/* Product Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-background to-primary/5 p-6 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-display mb-2">Smart Locks</h3>
              <p className="text-sm text-muted-foreground">Keyless entry systems</p>
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden mb-4">
              <Image
                src="/product-smart-lock.jpg"
                alt="Smart Lock"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 280px"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-muted-foreground">From $199</p>
          </div>

          {/* Product Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-background to-primary/5 p-6 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-display mb-2">Sensors</h3>
              <p className="text-sm text-muted-foreground">Complete coverage</p>
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden mb-4">
              <Image
                src="/product-sensors.jpg"
                alt="Sensors"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 280px"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-muted-foreground">From $149</p>
          </div>

          {/* Product Card 4 */}
          <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-background to-primary/5 p-6 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-display mb-2">Mobile App</h3>
              <p className="text-sm text-muted-foreground">Complete control</p>
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden mb-4">
              <Image
                src="/app-interface.jpg"
                alt="Mobile App"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 280px"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-muted-foreground">Free included</p>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg mb-2">AI-Powered Detection</h3>
                <p className="text-sm text-muted-foreground">Advanced algorithms distinguish between people, pets, and vehicles</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg mb-2">Seamless Integration</h3>
                <p className="text-sm text-muted-foreground">All devices work together in perfect harmony</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg mb-2">Professional Monitoring</h3>
                <p className="text-sm text-muted-foreground">24/7 expert surveillance with instant emergency response</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
