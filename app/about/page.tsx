import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { AboutHeroSection } from "@/components/landing/about-hero-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "About Safe Wall Systems | Trusted Home Security Company",
  description: "Learn about Safe Wall Systems. We are a trusted home security company offering smart automation, 4K wireless cameras, and 24/7 professional monitoring.",
};

const teamValues = [
  {
    icon: Shield,
    title: "Trust",
    description: "Your security is our top priority. We never cut corners on protection.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We're committed to making our neighborhoods safer, one home at a time.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in installation, monitoring, and support.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of emerging threats with cutting-edge security technology.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      <AboutHeroSection />

      {/* Mission Section */}
      <section id="mission" className="relative py-24 lg:py-32 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower homeowners with professional-grade security technology that&apos;s accessible, reliable, and easy to use. We believe that advanced home protection shouldn&apos;t require a PhD in technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2018, we&apos;ve been protecting families across America. Today, over 50,000 homes trust Safe Wall Systems to keep them safe.
              </p>
            </div>
            <div className="p-8 lg:p-12 border border-foreground/10 bg-foreground/5 rounded-lg">
              <div className="space-y-6">
                <div>
                  <p className="text-5xl lg:text-6xl font-display">50K+</p>
                  <p className="text-muted-foreground">Homes protected</p>
                </div>
                <div>
                  <p className="text-5xl lg:text-6xl font-display">99.99%</p>
                  <p className="text-muted-foreground">System uptime</p>
                </div>
                <div>
                  <p className="text-5xl lg:text-6xl font-display">24/7</p>
                  <p className="text-muted-foreground">Professional monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="relative py-24 lg:py-32 bg-foreground/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-display mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Everything we do is guided by our commitment to these four core values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="p-8 bg-background border border-foreground/10 rounded-lg">
                  <Icon className="w-10 h-10 mb-4 text-foreground" />
                  <h3 className="text-xl font-display mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative py-24 lg:py-32 bg-foreground/5 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-display mb-12 text-center">Industry Certifications</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "SOC 2 Type II Certified",
              "NSA Approved Equipment",
              "NFPA 72 Compliance",
              "ISO 27001 Certified",
            ].map((cert, i) => (
              <div key={i} className="p-8 bg-background border border-foreground/10 rounded-lg text-center">
                <Award className="w-8 h-8 mx-auto mb-4 text-foreground" />
                <p className="font-display text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-display mb-6">
            Join 50,000+ families
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the Safe Wall Systems difference. Start with a free consultation today.
          </p>
          <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 h-14 text-base">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
