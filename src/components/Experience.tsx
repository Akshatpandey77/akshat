
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer Intern',
      company: 'TechCorp Solutions',
      period: 'Jun 2024 - Present',
      description: 'Developing scalable web applications using React and Node.js. Collaborated with senior developers to implement new features and optimize existing codebase.',
      logo: '🏢',
      achievements: [
        'Improved application performance by 40%',
        'Developed 3 major features for client dashboard',
        'Mentored 2 junior interns in React best practices'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Studio',
      period: 'Jan 2024 - May 2024',
      description: 'Created responsive web interfaces and collaborated with design team to implement pixel-perfect designs. Focused on user experience optimization.',
      logo: '🎨',
      achievements: [
        'Delivered 10+ responsive web pages',
        'Reduced page load time by 35%',
        'Implemented automated testing suite'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Jest']
    },
    {
      id: 3,
      title: 'Web Development Trainee',
      company: 'CodeAcademy Pro',
      period: 'Sep 2023 - Dec 2023',
      description: 'Intensive training program covering full-stack development fundamentals. Built multiple projects and learned industry best practices.',
      logo: '📚',
      achievements: [
        'Completed 15+ hands-on projects',
        'Achieved 95% average in all assessments',
        'Led a team project presentation'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Express']
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Galgotia College of Engineering and Technology',
      period: '2023 - 2025',
      description: 'Specialized in Software Engineering and Database Management. Active member of the Computer Science Society.',
      logo: '🎓'
    },
    {
      degree: 'Bachelor of Computer Applications (B.Sc)',
      institution: 'D.A.V coll',
      period: '2020 - 2023',
      description: 'Foundation in computer science fundamentals, programming languages, and software development methodologies.',
      logo: '🎓'
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
           Education & Certifications
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="grid lg:flex gap-12">
          {/* Experience Timeline */}
         {/* <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-3xl">💼</span>
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={exp.id} className="glass-card p-6 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{exp.logo}</div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-bold">{exp.title}</h4>
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      </div>
                      <p className="text-foreground/80 font-medium mb-3">{exp.company}</p>
                      <p className="text-foreground/60 mb-4">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-foreground/60 flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          */}

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-3xl">🎓</span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="glass-card p-6 hover-lift animate-fade-in" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{edu.logo}</div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <span className="text-sm text-primary font-medium">{edu.period}</span>
                      </div>
                      <p className="text-foreground/80 font-medium mb-2">{edu.institution}</p>
                      <p className="text-foreground/60">{edu.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                Certifications
              </h3>
              <div className="grid gap-4">
                {[
                  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024' },
                  { name: 'React Developer Certification', issuer: 'Meta', year: '2024' },
                  { name: 'JavaScript Algorithms', issuer: 'freeCodeCamp', year: '2023' },
                  { name: 'Google Analytics Certified', issuer: 'Google', year: '2023' }
                ].map((cert, index) => (
                  <Card key={index} className="glass-card p-4 hover-lift">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold">{cert.name}</h5>
                        <p className="text-sm text-foreground/60">{cert.issuer}</p>
                      </div>
                      <span className="text-sm text-primary font-medium">{cert.year}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
