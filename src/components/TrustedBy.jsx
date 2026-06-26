import { memo } from 'react';
import { SiNetflix, SiSpotify } from 'react-icons/si';

const textLogos = [
  { name: 'Google', className: 'font-black text-2xl tracking-tighter' },
  { name: 'Microsoft', className: 'font-semibold text-xl tracking-tight' },
  { name: 'Amazon', className: 'font-black text-2xl italic tracking-tight' },
  { name: 'Netflix', className: 'font-black text-2xl tracking-widest uppercase', hasIcon: 'netflix' },
  { name: 'Adobe', className: 'font-black text-xl tracking-tight' },
  { name: 'Spotify', className: 'font-bold text-xl tracking-tight', hasIcon: 'spotify' },
];

export const TrustedBy = memo(function TrustedBy() {
  return (
    <section className="py-12 border-y border-border/30 bg-background/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground/70 mb-8 tracking-widest uppercase">
          Trusted by innovative teams worldwide
        </p>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-shrink-0 animate-marquee gap-16 pr-16 items-center">
            {textLogos.map((logo, idx) => (
              <div key={`logo-1-${idx}`} className="flex items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground/80 transition-colors duration-300 select-none whitespace-nowrap" data-testid={`trusted-logo-${logo.name.toLowerCase()}`}>
                {logo.hasIcon === 'netflix' && <SiNetflix className="w-6 h-6" />}
                {logo.hasIcon === 'spotify' && <SiSpotify className="w-6 h-6" />}
                <span className={logo.className}>{logo.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-shrink-0 animate-marquee gap-16 pr-16 items-center" aria-hidden="true">
            {textLogos.map((logo, idx) => (
              <div key={`logo-2-${idx}`} className="flex items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground/80 transition-colors duration-300 select-none whitespace-nowrap">
                {logo.hasIcon === 'netflix' && <SiNetflix className="w-6 h-6" />}
                {logo.hasIcon === 'spotify' && <SiSpotify className="w-6 h-6" />}
                <span className={logo.className}>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
