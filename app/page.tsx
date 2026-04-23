import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { ConsultingProcessSection } from "@/components/landing/consulting-process-section";
import { ProductShowcaseSection } from "@/components/landing/product-showcase-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { WhyChooseUsSection } from "@/components/landing/why-choose-us-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcaseSection />
      <ConsultingProcessSection />
      <WhyChooseUsSection />
      <PricingSection />
      <MetricsSection />
      <IntegrationsSection />
      <InfrastructureSection />
      <DevelopersSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
