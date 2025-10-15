'use client';

import { useEffect, useCallback } from 'react';
import { X, Github, ExternalLink, Linkedin, Calendar, Tag } from 'lucide-react';
import { Project } from '@/types';
import { cn, formatDate } from '@/lib/utils';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [handleEscape]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h2>
                {project.featured && (
                  <span className="bg-primary-100 text-primary-700 text-xs font-medium px-3 py-1 rounded-full">
                    Destaque
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {formatDate(project.createdAt)}
                </div>
                <div className="flex items-center gap-1">
                  <Tag size={16} />
                  <span className="capitalize">{project.category}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Fechar modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          {/* Imagem */}
          <div className="mb-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Descrição */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary-600 rounded-full" />
              Sobre o Projeto
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {project.detailedDescription}
            </p>
          </div>

          {/* Tecnologias */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary-600 rounded-full" />
              Tecnologias Utilizadas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {project.technologies.map((tech, index) => (
                <div
                  key={tech}
                  className={cn(
                    "bg-gradient-to-r p-3 rounded-lg text-white text-sm font-medium text-center shadow-md animate-slide-up",
                    index % 4 === 0 && "from-blue-500 to-blue-600",
                    index % 4 === 1 && "from-green-500 to-green-600",
                    index % 4 === 2 && "from-purple-500 to-purple-600",
                    index % 4 === 3 && "from-orange-500 to-orange-600"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Funcionalidades/Características */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary-600 rounded-full" />
              Características Principais
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Interface responsiva e moderna',
                'Performance otimizada',
                'Código limpo e bem documentado',
                'Testes automatizados',
                'Deploy automatizado',
                'SEO otimizado'
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-3 flex-1"
              >
                <Github size={20} />
                Ver Código no GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-3 flex-1"
              >
                <ExternalLink size={20} />
                Ver Projeto Online
              </a>
            )}
            <a
              href="https://www.linkedin.com/in/gabrielly-sendeski/"
              
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-3 flex-1"
            >
              <Linkedin size={20} />
              Conectar no LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;