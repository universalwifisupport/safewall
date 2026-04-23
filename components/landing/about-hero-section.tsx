import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from "lucide-react";

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/* Main Content */}
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center mb-16">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Trusted Since 2018</span>
            </div>
            
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display tracking-tight mb-6">
                Protecting What
                <span className="block text-primary">Matters Most</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                We're not just a security company—we're your partners in creating safer homes and peace of mind for thousands of families across America.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="#mission">
                  Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#values">Meet the Team</Link>
              </Button>
            </div>
          </div>

          {/* Right: Image with Stats Overlay */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-foreground/10 shadow-2xl">
              <Image
                src="/customer-family.jpg"
                alt="Families we protect"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-foreground/10 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-display font-bold">50K+</p>
                  <p className="text-sm text-muted-foreground">Homes Protected</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-foreground/10 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-3xl font-display font-bold">99.9%</p>
                  <p className="text-sm text-muted-foreground">Uptime Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
