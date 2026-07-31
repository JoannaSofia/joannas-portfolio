'use client'
import React from 'react'
import styles from './ProjectSection.module.css';
import Card from '../ui/Card/Card';
import { projectData } from './ProjectData';

export function ProjectsSection() {
  return (
    <div id='projectssection' className={styles.container}>
      <h2 className={styles.heading}>Project</h2>
      <div className={styles.cardsWrapper}>

        {projectData.map((project, index) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}  
            //blogUrl={project.blogUrl}
            readmeUrl={project.readmeUrl}          

          />
        ))}
      </div>
      </div>
  )
}

export default ProjectsSection;

