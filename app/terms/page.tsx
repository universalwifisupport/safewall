import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Terms & Conditions - Safe Wall Systems",
  description: "Safe Wall Systems terms and conditions of service.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      <section className="relative py-32 lg:py-40 border-b border-foreground/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h1 className="text-5xl lg:text-6xl font-display tracking-tight mb-4">
            Terms & Conditions
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
              <h2 className="text-2xl font-display mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Safe Wall Systems website and services, you accept and agree to be bound by and abide by the terms and condition of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Safe Wall Systems's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground">*</span>
                  <span>Modifying or copying the materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">*</span>
                  <span>Using the materials for any commercial purpose or for any public display</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">*</span>
                  <span>Attempting to decompile or reverse engineer any software contained on the website</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">*</span>
                  <span>Removing any copyright or other proprietary notations from the materials</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">3. Monitoring Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Safe Wall Systems provides 24/7 professional monitoring services. While we maintain high standards and respond promptly to alerts, Safe Wall Systems is not liable for delays in response, false alarms, or failures in the monitoring system outside our control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">4. Warranty Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Safe Wall Systems's website are provided on an &apos;as is&apos; basis. Safe Wall Systems makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">5. Limitations of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Safe Wall Systems or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Safe Wall Systems's website, even if Safe Wall Systems or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">6. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on Safe Wall Systems's website could include technical, typographical, or photographic errors. Safe Wall Systems does not warrant that any of the materials on its website are accurate, complete, or current. Safe Wall Systems may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">7. Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Safe Wall Systems has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Safe Wall Systems of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">8. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Safe Wall Systems may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="text-muted-foreground">
                <p>Safe Wall Systems, Inc.</p>
                <p>Legal Department</p>
                <p>Email: info@safewallsystems.com</p>
                <p>Phone: (855) 943-8332</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
