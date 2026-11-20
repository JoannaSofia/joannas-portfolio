'use client';

import { useEffect, useRef } from 'react';
import type { Project } from '../ProjectData';
import styles from './ProjectModal.module.css';

export type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      aria-labelledby="project-modal-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.modalContent}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <p>{project.category}</p>
        <h2 id="project-modal-title">{project.title}</h2>

        <img src={project.image} alt={`${project.title} project preview`} />

        <p>{project.shortDescription}</p>
      </div>
    </dialog>
  );
}