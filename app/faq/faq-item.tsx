'use client';

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-foreground/10 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 text-left group"
      >
        <h3 className="text-lg font-display flex-1 group-hover:text-foreground/80 transition-colors">
          {question}
        </h3>
        <ChevronDown
          className={`w-6 h-6 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <p className="text-muted-foreground leading-relaxed mt-4 animate-in fade-in slide-in-from-top-4">
          {answer}
        </p>
      )}
    </div>
  );
}
