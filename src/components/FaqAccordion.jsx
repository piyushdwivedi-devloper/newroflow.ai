import { memo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faq';
import { ScrollReveal } from './ScrollReveal';

export const FaqAccordion = memo(function FaqAccordion() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className="py-24 bg-background border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
        </ScrollReveal>
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <ScrollReveal key={faq.id} delay={idx * 100}>
                <div className="glass-card rounded-xl border border-border/50 overflow-hidden transition-colors hover:border-primary/30">
                  <button onClick={() => setOpenId(isOpen ? null : faq.id)} className="w-full flex items-center justify-between p-6 text-left focus:outline-none" aria-expanded={isOpen} data-testid={`btn-faq-${faq.id}`}>
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
});
