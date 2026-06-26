import { memo, useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group" data-testid="link-home">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xl transform group-hover:rotate-12 transition-transform">
            N
          </div>
          <span className="font-bold text-xl tracking-tight">NeuroFlow <span className="text-primary">AI</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-nav-${link.name.toLowerCase()}`}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" aria-label="Toggle theme" data-testid="button-theme-toggle">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Button variant="outline" className="hidden lg:inline-flex border-border/50 bg-background/50 backdrop-blur-sm" data-testid="button-login">Log in</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25" data-testid="button-start-free">Start Free</Button>
        </div>

        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu" data-testid="button-mobile-menu">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`md:hidden absolute top-full inset-x-0 glass border-b border-border/50 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-foreground py-2 border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-medium">Theme</span>
            <button onClick={toggleTheme} className="p-2 rounded-full bg-muted" aria-label="Toggle theme">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          <Button className="w-full mt-4" data-testid="button-mobile-start">Start Free</Button>
        </div>
      </div>
    </header>
  );
});
