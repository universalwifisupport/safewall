import Image from "next/image";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "home-security-trends-2024",
    title: "Home Security Trends Reshaping 2024",
    description: "Discover the latest innovations in home security technology and how they're making homes safer.",
    excerpt: "From AI-powered cameras to smart automation, the home security landscape is evolving rapidly. Learn what's new and how these technologies can protect your family.",
    author: "Sarah Chen",
    date: "Dec 15, 2023",
    category: "Technology",
    image: "/smart-home-ecosystem.jpg",
  },
  {
    slug: "10-reasons-smart-locks",
    title: "10 Reasons to Switch to Smart Door Locks",
    description: "Why smart locks are becoming essential for modern home security.",
    excerpt: "Smart locks offer convenience, security, and peace of mind. Discover why thousands of homeowners are making the switch from traditional locks.",
    author: "Marcus Johnson",
    date: "Dec 8, 2023",
    category: "Products",
    image: "/product-smart-lock.jpg",
  },
  {
    slug: "protecting-home-vacation",
    title: "Protecting Your Home While on Vacation",
    description: "Essential tips for securing your home when you're away.",
    excerpt: "Leaving town? Here's a comprehensive guide to ensuring your home is completely protected while you're enjoying your vacation.",
    author: "Lisa Park",
    date: "Nov 30, 2023",
    category: "Security Tips",
    image: "/peace-of-mind.jpg",
  },
  {
    slug: "camera-placement-guide",
    title: "The Complete Guide to Security Camera Placement",
    description: "Learn where to position cameras for maximum coverage.",
    excerpt: "Camera placement is crucial for effective surveillance. Our experts share the best practices for comprehensive home monitoring.",
    author: "James Wilson",
    date: "Nov 22, 2023",
    category: "How-To",
    image: "/outdoor-coverage.jpg",
  },
  {
    slug: "smart-home-integration",
    title: "Smart Home Integration Made Simple",
    description: "How to connect all your security devices seamlessly.",
    excerpt: "Tired of juggling multiple apps? Learn how to integrate all your smart home devices into one unified system.",
    author: "Emma Thompson",
    date: "Nov 15, 2023",
    category: "Technology",
    image: "/app-interface.jpg",
  },
  {
    slug: "apartment-security-solutions",
    title: "Renter-Friendly Security Solutions",
    description: "Effective security without permanent installation.",
    excerpt: "Renting? Don't worry. We have security solutions that work perfectly for apartments and rentals without requiring permanent installation.",
    author: "Sarah Chen",
    date: "Nov 8, 2023",
    category: "Products",
    image: "/product-sensors.jpg",
  },
];

export const metadata = {
  title: "Blog - Safe Wall Systems",
  description: "Expert insights on home security, technology, and safety tips.",
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background py-24 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-semibold text-primary">Latest Updates</span>
              </div>

              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display tracking-tight mb-6">
                  Security
                  <span className="block text-primary">Insights & Tips</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Expert advice on home security, smart technology, and safety best practices. Stay informed, stay protected.
                </p>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="#" 
                  className="px-4 py-2 rounded-full bg-background border border-foreground/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium"
                >
                  All Articles
                </Link>
                <Link 
                  href="#" 
                  className="px-4 py-2 rounded-full bg-background border border-foreground/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium"
                >
                  Technology
                </Link>
                <Link 
                  href="#" 
                  className="px-4 py-2 rounded-full bg-background border border-foreground/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium"
                >
                  Security Tips
                </Link>
                <Link 
                  href="#" 
                  className="px-4 py-2 rounded-full bg-background border border-foreground/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium"
                >
                  How-To Guides
                </Link>
              </div>
            </div>

            {/* Right: Featured Article Card */}
            <Link 
              href={`/blog/${blogPosts[0].slug}`}
              className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-background hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                  Featured
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-sm text-muted-foreground">{blogPosts[0].date}</span>
                </div>

                <h3 className="text-2xl font-display mb-3 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full overflow-hidden border border-foreground/10 hover:border-foreground/30 rounded-xl bg-background hover:bg-foreground/2 transition-all duration-300"
              >
                {/* Featured Image */}
                {post.image && (
                  <div className="relative w-full h-48 overflow-hidden bg-foreground/5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="flex flex-col p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-display mb-3 group-hover:translate-x-1 transition-transform">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 flex-grow text-sm">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                    <ArrowRight className="w-4 h-4 text-foreground/50 group-hover:text-foreground transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10 bg-foreground/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-display mb-6">
            Get expert security advice
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for monthly security tips and exclusive offers.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-background border border-foreground/10 rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-foreground hover:bg-foreground/90 text-background rounded font-mono text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
