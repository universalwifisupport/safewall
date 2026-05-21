import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ContactHeroSection } from "@/components/landing/contact-hero-section";
import { ContactForm } from "@/components/landing/contact-form";

export const metadata = {
  title: "Contact Safe Wall Systems | Get a Free Security Quote",
  description: "Contact Safe Wall Systems today. Speak with our certified home security experts for custom system recommendations, support, or a free safety assessment.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      <ContactHeroSection />

      {/* Contact Form - Centered */}
      <section className="relative py-24 lg:py-32" id="contact-form">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
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
