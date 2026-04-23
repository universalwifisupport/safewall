"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="p-8 lg:p-12 border border-foreground/10 bg-foreground/5 rounded-lg">
      <h2 className="text-3xl font-display mb-8">Free Security Consultation</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-mono text-muted-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-foreground/10 rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-mono text-muted-foreground mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-foreground/10 rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-mono text-muted-foreground mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-foreground/10 rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-mono text-muted-foreground mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-background border border-foreground/10 rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors resize-none"
            placeholder="Tell us about your home and security needs..."
          />
        </div>

        <Button type="submit" size="lg" className="w-full bg-foreground hover:bg-foreground/90 text-background rounded px-8 h-14 text-base">
          Get Free Quote
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>

      <p className="text-xs text-muted-foreground mt-4">
        We&apos;re committed to your privacy. Your information is secure and will never be shared.
      </p>
    </div>
  );
}
