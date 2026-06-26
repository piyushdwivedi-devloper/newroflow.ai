import { memo } from 'react';
import { SiX, SiGithub } from 'react-icons/si';
import { Linkedin } from 'lucide-react';

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xl">N</div>
              <span className="font-bold text-xl tracking-tight">NeuroFlow <span className="text-primary">AI</span></span>
            </a>
            <p className="text-muted-foreground max-w-xs mb-6">The Next Generation AI Automation Platform. Build, scale, and analyze workflows seamlessly.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="X / Twitter" data-testid="link-social-twitter"><SiX className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="LinkedIn" data-testid="link-social-linkedin"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="GitHub" data-testid="link-social-github"><SiGithub className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; 2025 NeuroFlow AI. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
});
