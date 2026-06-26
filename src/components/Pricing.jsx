import { memo, useState, useMemo } from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { pricingMatrix, currencyRates, discountMultiplier } from '../data/pricing';
import { ScrollReveal } from './ScrollReveal';

const currencies = ['USD', 'EUR', 'INR'];

export const Pricing = memo(function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [currency, setCurrency] = useState('USD');

  const plans = useMemo(() => {
    const rate = currencyRates[currency];
    const discount = isAnnual ? discountMultiplier.annual : discountMultiplier.monthly;
    const calcPrice = (base) => Math.round(base * rate * discount);
    return [
      { id: 'starter', name: 'Starter', basePrice: calcPrice(pricingMatrix.starter.base), features: ['5 workflows', 'Basic analytics', 'Community support', '1000 API calls/mo'] },
      { id: 'pro', name: 'Pro', basePrice: calcPrice(pricingMatrix.pro.base), recommended: true, features: ['Unlimited workflows', 'Predictive analytics', 'Priority support', '50,000 API calls/mo', 'Custom integrations'] },
      { id: 'enterprise', name: 'Enterprise', basePrice: calcPrice(pricingMatrix.enterprise.base), features: ['Dedicated cluster', 'Advanced security (SOC2)', '1hr SLA support', 'Unlimited API calls', 'Dedicated success manager'] },
    ];
  }, [isAnnual, currency]);

  const currencySymbol = useMemo(() => ({ USD: '$', EUR: '€', INR: '₹' }[currency] || '$'), [currency]);

  return (
    <section id="pricing" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Pricing</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Simple, transparent pricing</h3>
          <p className="text-muted-foreground text-lg mb-8">Start for free, then scale as you grow. No hidden fees or surprise charges.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2 bg-muted p-1 rounded-lg border border-border/50">
              {currencies.map((c) => (
                <button key={c} onClick={() => setCurrency(c)} className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${currency === c ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`} data-testid={`btn-currency-${c.toLowerCase()}`}>
                  {c}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
              <button role="switch" aria-checked={isAnnual} onClick={() => setIsAnnual(!isAnnual)} className="w-12 h-6 bg-muted border border-border/50 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" data-testid="toggle-billing">
                <div className={`w-4 h-4 bg-primary rounded-full absolute top-1 transition-transform ${isAnnual ? 'left-7' : 'left-1'}`} />
              </button>
              <span className={`text-sm font-medium flex items-center gap-1.5 ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annually
                <span className="text-[10px] uppercase font-bold bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">Save 20%</span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, idx) => (
            <ScrollReveal key={plan.id} delay={idx * 100} className={`relative glass-card rounded-2xl p-8 border ${plan.recommended ? 'border-primary ring-1 ring-primary/50 shadow-2xl shadow-primary/10' : 'border-border/50'}`}>
              {plan.recommended && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
                </div>
              )}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{currencySymbol}{plan.basePrice}</span>
                  <span className="text-muted-foreground font-medium">/mo</span>
                </div>
                {isAnnual && <div className="text-sm text-primary mt-1">Billed annually</div>}
              </div>
              <div className="space-y-4 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <Button className={`w-full h-12 rounded-xl ${plan.recommended ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-muted hover:bg-muted/80 text-foreground'}`} data-testid={`btn-select-plan-${plan.id}`}>
                {plan.recommended ? 'Get Started' : 'Choose Plan'}
              </Button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
});
