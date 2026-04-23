import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FAQItem } from "./faq-item";

const faqs = [
  {
    question: "How does 24/7 monitoring work?",
    answer: "Our certified monitoring centers have trained professionals available around the clock, 365 days a year. When your alarm is triggered, our team is immediately notified and can dispatch emergency services directly to your address. We can also verify the emergency through camera feeds before dispatching responders.",
  },
  {
    question: "Can I monitor my home from anywhere?",
    answer: "Absolutely! Our mobile app lets you monitor your home from anywhere in the world. You can view live camera feeds, arm/disarm your system, lock/unlock doors, receive instant alerts, and review security history all from your smartphone or tablet.",
  },
  {
    question: "What's included in each package?",
    answer: "Essential includes 2 cameras, 1 smart lock, and basic alerts. Family adds professional monitoring, unlimited storage, and smart home integration. Ultimate includes all features plus priority support and professional installation. Visit our Packages page for a detailed comparison.",
  },
  {
    question: "Do I need a long-term contract?",
    answer: "No! Safe Wall Systems offers month-to-month billing with no long-term contracts. You can cancel or upgrade your service anytime. We're confident you'll love our service, and we prefer to earn your business month after month.",
  },
  {
    question: "Is my data secure and private?",
    answer: "Yes. We use military-grade AES-256 encryption for all data in transit and at rest. We're SOC 2 Type II certified and maintain NSA-approved equipment. Your video feeds are never shared with third parties, and you have complete control over your data.",
  },
  {
    question: "What if my internet goes down?",
    answer: "Our systems have built-in redundancy. If your internet goes down, your sensors will still function locally, and our monitoring center will be notified. Once your internet is restored, the system syncs all events. Most modern systems also include a cellular backup connection.",
  },
  {
    question: "Can I integrate with my smart home?",
    answer: "Yes! Safe Wall Systems works with Google Home, Amazon Alexa, Apple HomeKit, and many other smart home platforms. You can voice-control your locks, cameras, and other devices. Integration is included in our Family and Ultimate plans.",
  },
  {
    question: "How long does installation take?",
    answer: "Most basic installations take 2-4 hours. Our certified technicians will set up all equipment, test the system, train you on how to use it, and answer any questions. Installation is included free with our Family and Ultimate plans.",
  },
  {
    question: "What if I move or want to relocate equipment?",
    answer: "Our wireless system is designed to be relocatable. You can move equipment to different rooms or even to a new home. If you need help setting it up in a new location, our support team is happy to assist.",
  },
  {
    question: "Do you offer any discounts?",
    answer: "Yes! We offer annual billing discounts (save 17%), multi-year discounts, and special pricing for seniors and first responders. We also frequently run promotions. Contact our sales team for current offers.",
  },
];

export const metadata = {
  title: "FAQ - Safe Wall Systems",
  description: "Frequently asked questions about Safe Wall Systems services.",
};

export default function FAQPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6">
              Frequently Asked
              <br />
              <span className="text-muted-foreground">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Can't find the answer you're looking for? Reach out to our support team anytime.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10 bg-foreground/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-display mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our security experts are ready to help. Contact us anytime for personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 h-14 text-base">
              Contact Support
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-foreground/20">
              Chat with us
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
