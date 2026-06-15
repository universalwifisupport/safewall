"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ${
          isScrolled 
            ? "top-4 left-4 right-4" 
            : "top-0 left-0 right-0"
        }`}
      >
        <nav 
          className={`mx-auto transition-all duration-500 ${
            isScrolled || isMobileMenuOpen
              ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
              : "bg-transparent max-w-[1400px]"
          }`}
        >
          <div 
            className={`flex items-center justify-between transition-all duration-500 px-4 md:px-6 lg:px-8 ${
              isScrolled ? "h-14" : "h-16 md:h-20"
            }`}
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="flex flex-col leading-none">
                <span className={`font-display tracking-tight transition-all duration-500 ${isScrolled ? "text-sm md:text-base" : "text-base md:text-lg"}`}>Safe Wall Systems</span>
                <span className={`text-muted-foreground font-mono transition-all duration-500 ${isScrolled ? "text-[7px] md:text-[8px]" : "text-[8px] md:text-[9px]"}`}>HOME SECURITY</span>
              </div>
            </a>

            {/* Mobile Phone Number */}
            <a 
              href="tel:+18559438332" 
              className={`md:hidden text-foreground/70 hover:text-foreground transition-all duration-500 font-mono ${isScrolled ? "text-xs" : "text-sm"}`}
            >
              (855) 943-8332
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+18559438332" className={`text-foreground/70 hover:text-foreground transition-all duration-500 font-mono ${isScrolled ? "text-xs" : "text-sm"}`}>
                (855) 943-8332
              </a>
              <Button
                size="sm"
                className={`bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-500 ${isScrolled ? "px-4 h-8 text-xs" : "px-6"}`}
                asChild
              >
                <a href="/contact">Get Free Quote</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 relative z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </nav>
      </header>
      
      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-6 md:px-8 pt-24 md:pt-28 pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-6 md:gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl md:text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  isMobileMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Bottom Section - Phone and CTAs */}
          <div className={`flex flex-col gap-6 pt-6 border-t border-foreground/10 transition-all duration-500 ${
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            {/* Phone Number */}
            <a 
              href="tel:+18559438332" 
              className="text-2xl md:text-3xl font-mono text-center text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              (855) 943-8332
            </a>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="flex-1 rounded-full h-12 md:h-14 text-sm md:text-base"
                onClick={() => { setIsMobileMenuOpen(false); window.location.href = 'tel:+18559438332'; }}
              >
                Call Now
              </Button>
              <Button 
                className="flex-1 bg-foreground text-background rounded-full h-12 md:h-14 text-sm md:text-base"
                onClick={() => { setIsMobileMenuOpen(false); window.location.href = '/contact'; }}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
