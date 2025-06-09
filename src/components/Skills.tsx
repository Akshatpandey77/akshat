
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "JavaScript", level: 88, icon: "💛" },
        { name: "HTML/CSS", level: 92, icon: "🌐" },
      ],
    },
    backend: {
      title: "Backend",
      icon: "⚙️",
      color: "from-blue-500 to-green-500",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 82, icon: "🚀" },
        { name: "Python", level: 78, icon: "🐍" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "NoSQL", level: 75, icon: "🐘" },
        { name: "RESTful APIs", level: 88, icon: "🔗" },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      icon: "🛠️",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "VS Code", level: 95, icon: "💙" },
        { name: "IntelliJ IDEA", level: 85, icon: "💡" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Linux", level: 80, icon: "🐧" },
        { name: "GitHub", level: 80, icon: "📝" },
      ],
    },
    soft: {
      title: "Soft Skills",
      icon: "🧠",
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "Problem Solving", level: 90, icon: "🧩" },
        { name: "Communication", level: 85, icon: "💬" },
        { name: "Team Work", level: 88, icon: "🤝" },
        { name: "Leadership", level: 75, icon: "👑" },
        { name: "Time Management", level: 82, icon: "⏰" },
        { name: "Adaptability", level: 90, icon: "🌊" },
      ],
    },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`glass-card px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift ${
                activeCategory === key
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div
              key={key}
              className={`${activeCategory === key ? 'block animate-fade-in' : 'hidden'}`}
            >
              <Card className="glass-card p-8">
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gradient">{category.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-foreground/60">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Skills Graph */}
        <div className="mt-16 text-center">
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-6">My Tech Stack Journey</h3>
            <div className="relative">
              <div className="flex justify-center items-center space-x-4 mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="text-sm text-foreground/60">Frontend Development</div>
              </div>
              <div className="flex justify-center items-center space-x-4 mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="text-sm text-foreground/60">Backend Development</div>
              </div>
              <div className="flex justify-center items-center space-x-4 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="text-sm text-foreground/60">DevOps & Tools</div>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="text-sm text-foreground/60">Soft Skills</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
