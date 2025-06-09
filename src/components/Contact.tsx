
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'akshat.pandey@example.com',
      description: 'Drop me a line anytime',
      action: 'mailto:akshat.pandey@example.com'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@akshatpandey',
      description: 'Check out my repositories',
      action: 'https://github.com'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Akshat Pandey',
      description: 'Let\'s connect professionally',
      action: 'https://linkedin.com'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-mesh">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Get In Touch
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-white/10 focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-white/10 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-background/50 border-white/10 focus:border-primary"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-background/50 border-white/10 focus:border-primary resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full magnetic-btn bg-primary hover:bg-primary/90 text-white font-semibold py-3"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-foreground/60 mb-8 leading-relaxed">
                I'm always interested in new opportunities, interesting projects, and meeting new people. 
                Whether you're a company looking for a developer, a fellow developer wanting to collaborate, 
                or someone who just wants to say hi, don't hesitate to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="glass-card p-6 hover-lift cursor-pointer transition-all duration-300">
                  <a href={method.action} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{method.title}</h4>
                      <p className="text-primary font-medium">{method.value}</p>
                      <p className="text-sm text-foreground/60">{method.description}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Availability Status */}
            <Card className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="font-semibold">Available for Work</h4>
              </div>
              <p className="text-foreground/60 text-sm">
                I'm currently open to full-time opportunities, freelance projects, and interesting collaborations. 
                Expected graduation: May 2025.
              </p>
            </Card>

            {/* Quick Stats */}
            <Card className="glass-card p-6">
              <h4 className="font-semibold mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">24hr</div>
                  <div className="text-sm text-foreground/60">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-foreground/60">Project Success</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
