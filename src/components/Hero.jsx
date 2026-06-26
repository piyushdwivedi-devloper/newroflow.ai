import { memo } from 'react';
import { ChevronRight, Play, ArrowRight, Activity, Cpu, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { useCountUp } from '../hooks/useCountUp';

export const Hero = memo(function Hero() {
  const [refEff, countEff] = useCountUp(347, 2000);
  const [refRoi, countRoi] = useCountUp(240, 2000);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[100dvh] flex items-center justify-center">
      <div className="absolute inset-0 bg-background pointer-events-none -z-20" />
      <div className="absolute inset-0 opacity-30 -z-10 animate-aurora mix-blend-screen" style={{ background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary)/0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--secondary)/0.2) 0%, transparent 50%)', backgroundSize: '200% 200%' }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 animate-grid-fade" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          <div className="flex-1 text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              NeuroFlow v2.0 is live
              <ChevronRight className="w-4 h-4" />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Automate Everything. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Accelerate Growth.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              The command center for your business. Connect your tools, automate complex workflows, and uncover insights with our next-generation AI automation platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.6)] text-lg rounded-xl" data-testid="hero-cta-primary">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 glass border-border/50 hover:bg-muted text-lg rounded-xl" data-testid="hero-cta-secondary">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" />No credit card required</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" />14-day free trial</div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl lg:max-w-none relative animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 fill-mode-both">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary to-secondary opacity-30 blur-2xl animate-pulse-glow" />
            <div className="relative glass-card rounded-2xl border border-border/50 shadow-2xl overflow-hidden bg-card/40">
              <div className="h-10 border-b border-border/50 flex items-center px-4 gap-2 bg-muted/20">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="mx-auto text-xs text-muted-foreground font-mono">neuroflow-dashboard</div>
              </div>
              <div className="p-6 grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-muted/30 border border-border/50 flex items-start justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Efficiency Gain</div>
                      <div className="text-2xl font-bold flex items-baseline">
                        <span className="text-primary">+</span>
                        <span ref={refEff}>{countEff}</span>
                        <span className="text-primary">%</span>
                      </div>
                    </div>
                    <Activity className="w-5 h-5 text-primary opacity-50" />
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30 border border-border/50 flex items-start justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Projected ROI</div>
                      <div className="text-2xl font-bold flex items-baseline">
                        <span ref={refRoi}>{(countRoi / 100).toFixed(1)}</span>
                        <span className="text-secondary">x</span>
                      </div>
                    </div>
                    <Cpu className="w-5 h-5 text-secondary opacity-50" />
                  </div>
                </div>
                <div className="h-48 rounded-xl bg-muted/20 border border-border/50 p-4 relative overflow-hidden flex flex-col justify-end">
                  <svg viewBox="0 0 100 40" className="w-full h-full absolute bottom-0 left-0 pt-4" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,40 L0,20 C10,15 20,30 30,25 C40,20 50,10 60,15 C70,20 80,5 90,10 L100,5 L100,40 Z" fill="url(#gradient1)" className="animate-pulse" />
                    <path d="M0,20 C10,15 20,30 30,25 C40,20 50,10 60,15 C70,20 80,5 90,10 L100,5" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                  </svg>
                  <div className="absolute top-4 left-4 right-4 flex justify-between gap-2">
                    <div className="h-8 flex-1 rounded bg-primary/20 border border-primary/30 animate-float" style={{ animationDelay: '0s' }} />
                    <div className="w-8 flex items-center justify-center text-muted-foreground"><ArrowRight className="w-4 h-4" /></div>
                    <div className="h-8 flex-1 rounded bg-secondary/20 border border-secondary/30 animate-float" style={{ animationDelay: '0.2s' }} />
                    <div className="w-8 flex items-center justify-center text-muted-foreground"><ArrowRight className="w-4 h-4" /></div>
                    <div className="h-8 flex-1 rounded bg-accent/20 border border-accent/30 animate-float" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass px-4 py-3 rounded-xl border border-border/50 shadow-xl flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <div className="text-sm font-medium">All systems operational</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-foreground to-transparent" />
      </div>
    </section>
  );
});
