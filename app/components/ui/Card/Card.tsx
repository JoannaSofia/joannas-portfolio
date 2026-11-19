
import React from 'react';
import styles from './Card.module.css';

type CardProps = {
  title: string;
  category: string;
  shortDescription: string;
  image: string;
  onClick: () => void;
};

export default function Card({
  title,
  category,
  shortDescription,
  image,
  onClick,
}: CardProps) {

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={`${title} project preview`}
          className={styles.projectImage}
        />

        <div className={styles.stampPlaceholder}>
          <span>✳</span>
        </div>
      </div>

      <div className={styles.cardText}>
        <span className={styles.category}>{category}</span>

        <h3>{title}</h3>

        <p>{shortDescription}</p>

        <button
          type="button"
          className={styles.exploreButton}
          onClick={onClick}
          aria-label={`Explore ${title} project`}
        >
          Explore project <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
