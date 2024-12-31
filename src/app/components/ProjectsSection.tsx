// src/app/components/ProjectsSection.tsx
import React from 'react';
import { projects } from "@/data/projects";
import ProjectCard from "@/app/components/ProjectCard";

const ProjectsSection: React.FC = () => {
    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold mb-6'>Featured Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {projects.map(project => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        image={project.image}
                        url={project.url}
                        context={project.context}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
