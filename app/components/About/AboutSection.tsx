
'use client';

import { useState } from 'react';
import styles from './AboutSection.module.css';

type TapeItem = {
  icon: string;
  label: string;
  description: string;
};

const tapeData: TapeItem[] = [
  {
    icon: '🎮',
    label: 'Playful thinking',
    description: 'I enjoy finding creative ways to make digital experiences engaging.',
  },
  {
    icon: '🛠',
    label: 'Collaborative',
    description: 'I value sharing ideas, exploring possibilities and learning together.',
  },
  {
    icon: '🧠',
    label: 'Curious mind',
    description: 'I like understanding how things work and looking for patterns and connections.',
  },
];

function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="aboutsection" className={styles.aboutContainer}>
      <div className={styles.aboutBox}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>A LITTLE ABOUT ME</span>
          <h2>Curious by nature. Creative by design.</h2>

          <p>
            I'm a UX designer and frontend developer who enjoys turning
            ideas into thoughtful, useful digital experiences. I like
            understanding people, exploring possibilities and bringing
            concepts to life through design and code.
          </p>

          {expanded && (
            <div className={styles.moreText}>
              <p>
                This is where you can tell a little more about your
                background, what brought you to UX and development,
                and what motivates you in your work.
              </p>
              <p>
                You could also mention how you combine user-centred
                thinking with a hands-on approach to building things.
              </p>
            </div>
          )}

          <button
            type="button"
            className={styles.readMore}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            {expanded ? 'Read less' : 'A little more about me'}
            <span aria-hidden="true">{expanded ? '−' : '+'}</span>
          </button>
        </div>

        <div className={styles.badgeList}>
          {tapeData.map(({ icon, label, description }) => (
            <article key={label} className={styles.badgeItem}>
              <span className={styles.aboutBadge}>
                <span aria-hidden="true">{icon}</span>
                {label}
              </span>
              <p className={styles.badgeDescription}>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
