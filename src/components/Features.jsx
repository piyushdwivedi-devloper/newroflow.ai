import { memo, useState } from 'react';
import { Bot, Workflow, LineChart, ShieldCheck, Zap, BrainCircuit, Users } from 'lucide-react';
import { features } from '../data/features';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { ScrollReveal } from './ScrollReveal';

const iconMap = { Bot, Workflow, LineChart, ShieldCheck, Zap, BrainCircuit, Users };

export const Features = memo(function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const width = useWindowWidth();
  const isMobile = width < 1024;

  return (
    <section id="features" className="relative py-24 w-full bg-background overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Intelligence at scale.</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive suite of tools designed to automate your most complex workflows and analyze your deepest data.
          </p>
        </ScrollReveal>

        {isMobile ? (
          <div className="w-full max-w-3xl mx-auto space-y-4">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              const isActive = activeFeature === index;
              return (
                <div key={feature.id} className={`glass-card rounded-xl transition-all duration-300 overflow-hidden ${isActive ? 'ring-1 ring-primary/50' : 'hover:border-primary/30'}`}>
                  <button
                    onClick={() => setActiveFeature(isActive ? -1 : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    aria-expanded={isActive}
                    aria-controls={`feature-content-${feature.id}`}
                    data-testid={`button-feature-accordion-${feature.id}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-semibold text-lg">{feature.title}</span>
                    </div>
                  </button>
                  <div id={`feature-content-${feature.id}`} className={`transition-all duration-300 ease-in-out px-6 ${isActive ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <p className="text-muted-foreground pl-14">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              const isLarge = index === 0 || index === 3;
              return (
                <div
                  key={feature.id}
                  onMouseEnter={() => setActiveFeature(index)}
                  className={`glass-card group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 ${isLarge ? 'md:col-span-2' : 'col-span-1'} ${activeFeature === index ? 'ring-1 ring-primary/50 bg-card/80' : 'bg-card/40'}`}
                  data-testid={`card-feature-${feature.id}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                  <div className={`p-3 rounded-xl w-fit mb-6 transition-colors ${activeFeature === index ? 'bg-primary/20 text-primary ring-1 ring-primary/30' : 'bg-muted text-muted-foreground'}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
});
