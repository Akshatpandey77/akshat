
import { useState, useEffect } from 'react';
import { Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const texts = [
    'Creative Full-Stack Developer',
    'MCA Graduate',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeoutId: NodeJS.Timeout;

    if (displayText.length < currentText.length) {
      timeoutId = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, currentIndex, texts]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block mt-16">
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full animate-glow" />
              <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                <img
                  src="/PHOTO.jpg" // Replace with your image path
                  alt="Akshat Pandey"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins">
            Hi, I'm{' '}
            <span className="text-gradient">Akshat Pandey</span>
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-foreground/80 font-medium">
              {displayText}
              <span className={`inline-block w-0.5 h-6 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            </p>
          </div>

          <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions with modern technologies. 
            Currently pursuing MCA and building scalable applications that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="magnetic-btn bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="magnetic-btn border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/40 hover:text-primary transition-colors duration-300"
            >
              <ArrowDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
