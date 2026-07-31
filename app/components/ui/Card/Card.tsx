'use client';
import React, { useState } from 'react';
import styles from './Card.module.css';
import IconButton from '../Button/IconButton';
import { RiArticleFill, RiGithubFill } from "react-icons/ri";
import { p } from 'framer-motion/client';

type CardProps = {
  title: string;
  description: string;
  githubUrl: string;
  blogUrl?: string;
  readmeUrl?: string;
};

export default function Card({
  title,
  description,
  githubUrl,
  blogUrl,
  readmeUrl
}: CardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.card}`}
      onClick={() => setExpanded(!expanded)}
    >

      <div className={styles.cardText}>
        <h3>{title}</h3>
        <p>{description.substring(0, 80)}...</p>

        {expanded && (
          <div>
            <p>{description}</p>
            <div className={styles.links}>
              {githubUrl && <a href={githubUrl}>GitHub</a>}
              {readmeUrl && <a href={readmeUrl}>Read more</a>}
            </div>
          </div>
        )}
      </div>
    </div>

  );
}
