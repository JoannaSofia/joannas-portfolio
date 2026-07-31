
'use client'
import { useState } from 'react';
import styles from './AboutSection.module.css';

type TapeItem = { icon: string; label: string; description: string };

const tapeData: TapeItem[] = [
  { icon: "🎮", label: "Gamified Mindset", description: "I design with dopamine in mind—small wins, big impact." },
  { icon: "🛠", label: "Workshop Junkie", description: "I thrive in collaborative sprints and sticky-note storms." },
  { icon: "🧠", label: "Creative Hacker", description: "I experiment with life like it’s a UX prototype." },
];

function AboutSection() {
  //const [expanded, setExpanded] = useState(false);
  return (
    <section id="aboutsection" className={styles.aboutContainer}>
  
    <div className={styles.aboutBox}>
    <h2>About me</h2>
      <p>Din riktiga text här…</p>

      <div className={styles.badgeList}>
        {tapeData.map(({ icon, label, description }) => (
          <div key={label} className={styles.badgeItem}>
            <span className={styles.aboutBadge}>{icon} {label}</span>
            <span className={styles.tooltip}>{description}</span>
          </div>
        ))}
      </div>

</div>

</section>

  );
};

export default AboutSection;
