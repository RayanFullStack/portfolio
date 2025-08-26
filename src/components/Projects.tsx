import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Techno Boutik",
      description: "A complete e-commerce website built with Flask, integrated with Stripe for payments, and deployed on a VPS with Nginx.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flask", "Stripe", "VPS", "Nginx"],
      color: "from-purple-500 to-indigo-500",
      github: "https://github.com/RayanFullStack/TechnoBoutik",
      demo: "https://techno-boutik.fr"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing my projects, skills, and contact information. Built with React, Vite, Tailwind CSS, and deployed on VPS with Nginx and HTTPS.",
      image: "https://www.adobe.com/fr/express/learn/blog/media_14f59b64ae2d37db7519eba1b0134fe9a1341d15b.png?width=750&format=png&optimize=medium",
      technologies: ["React", "Vite", "Tailwind", "VPS", "Nginx", "HTTPS"],
      color: "from-indigo-500 to-purple-500",
      github: "https://github.com/RayanFullStack/portfolio",
      demo: "https://www.rayan-f.dev"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">🚀 My Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent works:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-gray-600"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github className="mr-2" size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target={project.demo.startsWith('#') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
