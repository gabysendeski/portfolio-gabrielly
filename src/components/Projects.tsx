'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Categorias sem mobile
  const categories = [
    { id: 'all', name: 'Todos', count: projects.length },
    { id: 'web', name: 'Web', count: projects.filter(p => p.category === 'web').length },
    { id: 'other', name: 'Outros', count: projects.filter(p => p.category === 'other').length },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meus Projetos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando 
            diferentes tecnologias e abordagens de desenvolvimento.
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-sm"
              )}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group card overflow-hidden hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagem do Projeto */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Badge de Categoria */}
                <div className="absolute top-4 left-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    project.category === 'web' && "bg-blue-100 text-blue-700",
                    project.category === 'other' && "bg-purple-100 text-purple-700"
                  )}>
                    {project.category === 'web' ? 'Web' : 'Outros'}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                      ⭐ Destaque
                    </span>
                  </div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={14} />
                  {formatDate(project.createdAt)}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-sm">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Código
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Gostou do que viu? Vamos conversar sobre seu próximo projeto!
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;