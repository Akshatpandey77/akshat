
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const tabs = [
    { id: 'bio', label: 'Bio', icon: '👨‍💻' },
    { id: 'facts', label: 'Fun Facts', icon: '⚡' },
    { id: 'values', label: 'Values', icon: '💡' }
  ];

  const funFacts = [
    { emoji: '☕', text: 'Coffee enthusiast with 300+ cups/year' },
    { emoji: '🎮', text: 'Gamer who codes game logic for fun' },
    { emoji: '📚', text: 'Read 25+ tech books this year' },
    { emoji: '🌱', text: 'Open source contributor' }
  ];

  const values = [
    { icon: '🚀', title: 'Innovation', desc: 'Always exploring new technologies and approaches' },
    { icon: '🤝', title: 'Collaboration', desc: 'Believe in the power of teamwork and knowledge sharing' },
    { icon: '📈', title: 'Growth', desc: 'Committed to continuous learning and improvement' },
    { icon: '💯', title: 'Quality', desc: 'Focused on writing clean, maintainable code' }
  ];

  return (
    <section id="about" className="section-padding bg-mesh">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="glass-card p-2 rounded-full">
              <div className="flex space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-foreground/60 hover:text-foreground hover:bg-white/5'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'bio' && (
              <div className="animate-fade-in">
                <Card className="glass-card p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Hello! I'm Akshat</h3>
                      <p className="text-foreground/80 leading-relaxed mb-4">
                        I'm a passionate Full-Stack Developer currently pursuing my Master of Computer Applications (MCA). 
                        With a strong foundation in both frontend and backend technologies, I love creating digital experiences 
                        that are not just functional, but also beautiful and user-friendly.
                      </p>
                      <p className="text-foreground/80 leading-relaxed mb-4">
                        My journey in tech started with curiosity about how websites work, and it has evolved into a 
                        deep passion for solving complex problems through code. I'm particularly interested in modern 
                        web technologies, cloud computing, and artificial intelligence.
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                        projects, or sharing knowledge with the developer community.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="glass-card p-4 hover-lift">
                        <h4 className="font-semibold text-primary">🎓 Education</h4>
                        <p className="text-sm text-foreground/60">Master of Computer Applications</p>
                      </div>
                      <div className="glass-card p-4 hover-lift">
                        <h4 className="font-semibold text-primary">📍 Location</h4>
                        <p className="text-sm text-foreground/60">India</p>
                      </div>
                      <div className="glass-card p-4 hover-lift">
                        <h4 className="font-semibold text-primary">💼 Focus</h4>
                        <p className="text-sm text-foreground/60">Full-Stack Development</p>
                      </div>
                      <div className="glass-card p-4 hover-lift">
                        <h4 className="font-semibold text-primary">🌟 Interests</h4>
                        <p className="text-sm text-foreground/60">AI, Cloud, Open Source</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'facts' && (
              <div className="animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6">
                  {funFacts.map((fact, index) => (
                    <Card key={index} className="glass-card p-6 hover-lift">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{fact.emoji}</div>
                        <p className="text-foreground/80">{fact.text}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <Card key={index} className="glass-card p-6 hover-lift">
                      <div className="text-center">
                        <div className="text-4xl mb-4">{value.icon}</div>
                        <h4 className="text-xl font-bold mb-2 text-primary">{value.title}</h4>
                        <p className="text-foreground/60">{value.desc}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
