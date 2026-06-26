import { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { ScrollReveal } from './ScrollReveal';

export const CtaBanner = memo(function CtaBanner() {
  return (
    <section className="py-24 px-4 md:px-6 relative z-10">
      <ScrollReveal className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden glass-card border border-primary/20 p-12 md:p-20 text-center group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_auto] animate-aurora" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to automate your business?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of forward-thinking companies scaling their operations with NeuroFlow AI.
            </p>
            <Button size="lg" className="h-14 px-10 bg-foreground text-background hover:bg-foreground/90 text-lg rounded-xl shadow-2xl transition-transform hover:scale-105" data-testid="btn-cta-banner">
              Start Free Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
});
