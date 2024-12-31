"use client";
// src/app/components/ProjectCard.tsx
import React, { useState } from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    url: string;
    context?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    tags,
    // image, 
    url,
    context,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="project-card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition flex flex-col justify-between">
            {/* <img src={image} alt={title} /> */}
            <h2 className='text-xl font-semibold mb-2'>{title}</h2>
            <p className='text-gray-600 mb-4'>{description}</p>

            {/* Collapsible Context Paragraph */}
            {context && (
                <div>
                    {isExpanded && (
                        <p className="text-gray-600 mt-2">{context}</p>
                    )}
                    <button
                        onClick={toggleExpanded}
                        className="bg-blue-500 text-white p-2 rounded-xl text-blue-600 hover:underline"
                    >
                        {isExpanded ? 'Hide' : 'Show'} Context
                    </button>

                </div>
            )}
            <div className="mt-auto">
                {/* Tags */}
                <ul className="mb-4">
                    {tags.map(tag => (
                        <li className='font-bold text-right' key={tag}>{tag}</li>
                    ))}
                </ul>
                {/* GitHub link */}
                <a href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    View on Github
                </a>
            </div>

        </div>
    );
};

export default ProjectCard;