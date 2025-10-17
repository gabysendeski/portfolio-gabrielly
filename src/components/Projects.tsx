'use client';

import { useState } from 'react';
import { Project } from '@/types';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const allProjects = projects;

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
            Meus Projetos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi usando as tecnologias mais modernas
          </p>
        </div>

        {/* ✅ GRID COM TODOS OS PROJETOS */}
        <div className="grid-responsive">
          {allProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={openModal}
            />
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;