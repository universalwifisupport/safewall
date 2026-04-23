import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Privacy Policy - Safe Wall Systems",
  description: "Safe Wall Systems privacy policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      <section className="relative py-32 lg:py-40 border-b border-foreground/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h1 className="text-5xl lg:text-6xl font-display tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: December 1, 2023
          </p>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-display mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Safe Wall Systems ("Company," "we," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We may collect information about you in a variety of ways. The information we may collect on the site includes:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span><strong>Personal Data:</strong> Name, email address, phone number, address</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span><strong>Device Information:</strong> Device type, operating system, browser</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span><strong>Security System Data:</strong> Camera feeds, sensor data, access logs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span><strong>Usage Data:</strong> Interaction with our app and website</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">3. Use of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>Provide monitoring and security services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>Process your transactions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>Email you regarding services or updates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">•</span>
                  <span>Respond to your inquiries</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement comprehensive security measures to protect your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                All sensitive information is encrypted using military-grade AES-256 encryption.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also opt out of receiving promotional communications from us at any time. To exercise these rights, please contact us at privacy@safewallsystems.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Safe Wall Systems, Inc.</p>
                <p>Privacy Department</p>
                <p>Email: privacy@safewallsystems.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
