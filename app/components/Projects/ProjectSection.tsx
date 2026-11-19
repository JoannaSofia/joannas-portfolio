'use client'
import React, {useState} from 'react'
import styles from './ProjectSection.module.css';
import Card from '../ui/Card/Card';
import { projectData } from './ProjectData';

export function ProjectsSection() {

  const [selectedProject, setSelectedProject] = useState<
  (typeof projectData)[number] | null
>(null);
  return (
    <div id='projectssection' className={styles.container}>
      <h2 className={styles.heading}>Project</h2>
      <div className={styles.cardsWrapper}>

        {projectData.map((project) => (
  <Card
    key={project.id}
    title={project.title}
    category={project.category}
    shortDescription={project.shortDescription}
    image={project.image}
    onClick={() => setSelectedProject(project)}
  />
))}

{/*
{selectedProject && (
  <ProjectModal
    project={selectedProject}
    onClose={() => setSelectedProject(null)}
  />
)}*/}
      </div>
      </div>
  )
}

export default ProjectsSection;

