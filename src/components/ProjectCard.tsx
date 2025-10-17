'use client';

import { Calendar, Eye } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const displayedTech = project.technologies.slice(0, 3);
  const remainingTechCount = project.technologies.length - 3;

  return (
    <div className="card group hover:scale-105 transition-all duration-300 h-full flex flex-col relative">
      {/* Imagem do projeto */}
      <div className="relative overflow-hidden rounded-t-xl h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Data */}
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(project.createdAt).toLocaleDateString('pt-BR')}
        </div>

        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {project.title}
        </h3>

        {/* Descrição */}
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
          {project.description}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-6">
          {displayedTech.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {remainingTechCount > 0 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              +{remainingTechCount}
            </span>
          )}
        </div>

        {/* ✅ BOTÃO PARA VER DETALHES */}
        <button
          onClick={() => onClick(project)}
          className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
          <Eye size={18} />
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;