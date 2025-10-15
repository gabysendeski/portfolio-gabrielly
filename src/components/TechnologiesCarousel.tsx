'use client';

import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiVite
} from 'react-icons/si';

const TechnologiesCarousel = () => {
  const technologies = [
    { name: 'React', icon: <SiReact className="text-blue-500" />, color: 'hover:bg-blue-50' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" />, color: 'hover:bg-gray-50' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, color: 'hover:bg-blue-50' },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" />, color: 'hover:bg-yellow-50' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" />, color: 'hover:bg-teal-50' },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" />, color: 'hover:bg-green-50' },
    { name: 'Express', icon: <SiExpress className="text-gray-700" />, color: 'hover:bg-gray-50' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" />, color: 'hover:bg-blue-50' },
    { name: 'Git', icon: <SiGit className="text-orange-600" />, color: 'hover:bg-orange-50' },
    { name: 'GitHub', icon: <SiGithub className="text-gray-800" />, color: 'hover:bg-gray-50' },
    { name: 'Vercel', icon: <SiVercel className="text-black" />, color: 'hover:bg-gray-50' },
    { name: 'Figma', icon: <SiFigma className="text-purple-600" />, color: 'hover:bg-purple-50' },
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" />, color: 'hover:bg-orange-50' },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-500" />, color: 'hover:bg-blue-50' },
    { name: 'Vite', icon: <SiVite className="text-purple-600" />, color: 'hover:bg-purple-50' },
    { name: 'React Hook Form', icon: <SiReact className="text-blue-500" />, color: 'hover:bg-blue-50' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tecnologias que Domino
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ferramentas e tecnologias que utilizo para criar experiências digitais incríveis
          </p>
        </div>

        {/* Grid de Tecnologias */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group card p-6 text-center transition-all duration-300 hover:scale-105 animate-slide-up ${tech.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

        {/* Animação de Carrossel Infinito (Opcional) */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`scroll-${index}`}
                className="flex-shrink-0 flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl mb-2">
                  {tech.icon}
                </div>
                <span className="text-xs text-gray-600 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesCarousel;