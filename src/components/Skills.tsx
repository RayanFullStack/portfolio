import React from 'react';

const Skills = () => {
  const skills = [
    { name: "Python", icon: "🐍", color: "bg-yellow-900/30 text-yellow-400 border-yellow-500/30" },
    { name: "Flask", icon: "🌶️", color: "bg-red-900/30 text-red-400 border-red-500/30" },
    { name: "HTML", icon: "🌐", color: "bg-orange-900/30 text-orange-400 border-orange-500/30" },
    { name: "CSS", icon: "🎨", color: "bg-blue-900/30 text-blue-400 border-blue-500/30" },
    { name: "JavaScript", icon: "⚡", color: "bg-yellow-900/30 text-yellow-400 border-yellow-500/30" },
    { name: "React", icon: "⚛️", color: "bg-cyan-900/30 text-cyan-400 border-cyan-500/30" },
    { name: "Nginx", icon: "🔧", color: "bg-green-900/30 text-green-400 border-green-500/30" },
    { name: "VPS", icon: "☁️", color: "bg-purple-900/30 text-purple-400 border-purple-500/30" },
    { name: "Git", icon: "📚", color: "bg-gray-700/30 text-gray-400 border-gray-500/30" },
    { name: "Stripe", icon: "💳", color: "bg-indigo-900/30 text-indigo-400 border-indigo-500/30" },
    { name: "Discord.py", icon: "🤖", color: "bg-purple-900/30 text-purple-400 border-purple-500/30" },
    { name: "Tailwind", icon: "💨", color: "bg-teal-900/30 text-teal-400 border-teal-500/30" }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">💻 My Skills</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about web development, I master a wide range of technologies 
            to build complete applications, from the front-end to server deployment.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border hover:scale-105 ${skill.color.split(' ')[2]}`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-white text-sm">{skill.name}</h3>
              <div className={`mt-2 px-2 py-1 rounded-full text-xs font-medium ${skill.color}`}>
                Proficient
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Full-Stack</h3>
              <p className="text-gray-300">End-to-end development of web applications, from front-end to back-end.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-white mb-2">Deployment</h3>
              <p className="text-gray-300">Server configuration and deployment on VPS with Nginx and domain management.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">Automation</h3>
              <p className="text-gray-300">Building bots and automation scripts for various platforms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
