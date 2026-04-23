import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ContactHeroSection } from "@/components/landing/contact-hero-section";
import { ContactForm } from "@/components/landing/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "(650) 412-5014",
    description: "Call us Monday-Friday, 8AM-6PM EST",
  },
  {
    icon: Mail,
    title: "Email",
    content: "support@safewallsystems.com",
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office Location",
    content: "367 Old Waters Hwy",
    description: "Oden, AR 71961",
  },
  {
    icon: Clock,
    title: "Monitoring",
    content: "24/7/365",
    description: "Always watching your home",
  },
];

export const metadata = {
  title: "Contact Us - Safe Wall Systems",
  description: "Get in touch with our security experts for a free consultation.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      <ContactHeroSection />

      {/* Contact Info Cards */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="p-6 border border-foreground/10 rounded-lg">
                  <Icon className="w-8 h-8 mb-4 text-foreground" />
                  <h3 className="text-lg font-display mb-2">{info.title}</h3>
                  <p className="text-foreground font-mono text-sm mb-2">{info.content}</p>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10 bg-foreground/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Safe Wall Systems gave us complete peace of mind. The installation was seamless.",
                author: "Sarah Chen",
                title: "Homeowner, California"
              },
              {
                quote: "Best customer service we&apos;ve experienced. Highly responsive and professional.",
                author: "Michael Rodriguez",
                title: "Business Owner, Texas"
              },
              {
                quote: "The 24/7 monitoring is worth every penny. We feel completely protected.",
                author: "Emma Thompson",
                title: "Homeowner, New York"
              },
            ].map((testimonial, i) => (
              <div key={i} className="p-6 bg-background border border-foreground/10 rounded-lg">
                <p className="text-foreground mb-4">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-display text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
