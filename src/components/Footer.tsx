
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-background/50 backdrop-blur-sm border-t border-white/10">
      <div className="container-custom">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gradient">Akshat Pandey</h3>
            <p className="text-foreground/60 mt-2">Full-Stack Developer & MCA Graduate</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {[
              { name: 'GitHub', url: '#', icon: '💻' },
              { name: 'LinkedIn', url: '#', icon: '💼' },
              { name: 'Twitter', url: '#', icon: '🐦' },
              { name: 'Email', url: 'mailto:akshat.pandey@example.com', icon: '📧' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover-lift text-lg transition-all duration-300 hover:bg-primary hover:text-white"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-foreground/60 hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Akshat Pandey. Built with React & Tailwind CSS.
            </p>
            <p className="text-foreground/40 text-xs mt-2">
              Designed to impress, built to perform.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg animate-fade-in z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
