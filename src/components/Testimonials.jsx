import { memo } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { ScrollReveal } from './ScrollReveal';

export const Testimonials = memo(function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-3">Wall of Love</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Don't just take our word for it.</h3>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={t.id} delay={idx * 150} className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-inner">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.company}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
});
