import React from 'react';
import { Github, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I’m Rayan 👋
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Passionate full-stack web developer, coding since a very young age. 
              Specialized in Flask, JavaScript, and VPS deployment. 
              As a computer science student, I spend most of my time immersed in code. 
              I design modern, high-performance web applications tailored to real user needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/RayanFullStack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
              >
                <Github className="mr-2" size={20} />
                View my GitHub
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-transparent text-white font-medium rounded-lg border-2 border-gray-600 hover:bg-gray-800 hover:border-gray-500 transition-all duration-200 shadow-lg"
              >
                My Projects
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <a href="#projects" className="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-200">
            <ArrowDown className="animate-bounce" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
