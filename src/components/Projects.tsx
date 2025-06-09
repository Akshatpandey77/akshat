import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      longDescription:
        "Built with React, Node.js, and MongoDB, this platform features user authentication, shopping cart functionality, Stripe payment integration, and a comprehensive admin panel for product and order management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      github: "#",
      demo: "#",
      featured: true,
    },
    // {
    //   id: 2,
    //   title: "Task Management App",
    //   description:
    //     "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    //   longDescription:
    //     "Features include real-time collaboration using WebSockets, drag-and-drop task organization, team management, file attachments, and detailed analytics dashboard.",
    //   image:
    //     "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    //   tags: ["React", "Socket.io", "Express", "PostgreSQL"],
    //   category: "frontend",
    //   github: "#",
    //   demo: "#",
    //   featured: true,
    // },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description:
        "A data visualization dashboard showing weather analytics with interactive charts and real-time weather data.",
      longDescription:
        "Integrates multiple weather APIs to provide comprehensive weather analytics, forecasting, and historical data visualization using Chart.js and D3.js.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tags: ["React", "Chart.js", "API Integration", "TypeScript"],
      category: "frontend",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "QR-Based Ticketing and Event Check-In System",
      description:
        "A secure event ticketing platform featuring QR code generation, real-time attendee check-in, and a live management dashboard.",
      longDescription:
        "Implements a robust QR-based ticketing system for seamless event registration and secure, one-time entry validation. Features a real-time scanner dashboard capable of efficiently managing check-ins for over 3,000 attendees. Unique QR codes are generated, stored, and validated using MongoDB to ensure enhanced event security and prevent unauthorized access.",
      image: "https://www.formbot.com/images/qr-scanner.jpg",
      tags: ["React", "Node.js", "MongoDB", "QR Code", "Real-Time Dashboard"],
      category: "fullstack",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 5,
      title: "AI-Powered Chatbot",
      description:
        "An intelligent chatbot with natural language processing capabilities and integration with multiple platforms.",
      longDescription:
        "Uses machine learning for intent recognition, supports multiple messaging platforms, includes sentiment analysis, and provides detailed conversation analytics.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      tags: ["Python", "TensorFlow", "NLP", "Flask"],
      category: "ai",
      github: "#",
      demo: "#",
      featured: true,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "backend",
      label: "Backend",
      count: projects.filter((p) => p.category === "backend").length,
    },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "ai",
      label: "AI/ML",
      count: projects.filter((p) => p.category === "ai").length,
    },
    {
      id: "devops",
      label: "DevOps",
      count: projects.filter((p) => p.category === "devops").length,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section-padding bg-mesh">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            ⭐ Highlighted Work
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="glass-card hover-lift overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-foreground/60 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      GitHub
                    </Button>
                    <Button size="sm" className="flex-1">
                      Live Demo
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{project.title}</DialogTitle>
                          <DialogDescription>
                            {project.longDescription}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                          />
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            <Button variant="outline" className="flex-1">
                              View on GitHub
                            </Button>
                            <Button className="flex-1">Live Demo</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`glass-card px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift ${
                filter === category.id
                  ? "bg-primary text-white shadow-lg"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="glass-card hover-lift overflow-hidden group animate-fade-in"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                <p className="text-foreground/60 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    GitHub
                  </Button>
                  <Button size="sm" className="flex-1">
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
