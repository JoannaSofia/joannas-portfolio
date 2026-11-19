
'use client';

import { useState } from 'react';
import styles from './HeroSection.module.css';
import { Stamp } from '../Postmark/Postmark';

export type StampType = 'approved' | 'playful' | 'bold' | 'curious';

const STAMP_TYPES: StampType[] = [
  'approved',
  'playful',
  'bold',
  'curious',
];

function HeroSection() {
  const [type, setType] = useState<StampType>('approved');
  const [stamped, setStamped] = useState(false);

  const handleStamp = () => {
    setStamped(true);
    window.setTimeout(() => setStamped(false), 600);
  };

  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroLayout}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            UX · FRONTEND · CREATIVE THINKING
          </span>

          <h1>Frontend with a behavioral twist.</h1>

          <p>
            I combine UX thinking, psychology and frontend development
            to create thoughtful and engaging digital experiences.
          </p>
        </div>

        <div className={styles.stampControls}>
          <h2>What stamp matches your vibe?</h2>

          <div className={styles.tagWrapper}>
            {STAMP_TYPES.map((t) => (
              <button
                key={t}
                type="button"
                className={`${styles.tag} ${styles[t]} ${
                  type === t ? styles.active : ''
                }`}
                onClick={() => setType(t)}
                aria-pressed={type === t}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.postcardWrapper}>
          <div className={styles.postcard}>
            <Stamp
              type={type}
              onStamp={handleStamp}
              stamped={stamped}
            />

            <div className={styles.postcardText}>
              <span className={styles.postcardEyebrow}>
                A CREATIVE MIND, SENT YOUR WAY
              </span>
              <h3>Joanna Olofsson</h3>
              <p>Frontend developer & UX designer</p>
              <div className={styles.addressLines}>
                <span />
                <span />
                <span />
              </div>
            </div>

            <span className={styles.postcardFooter}>
              MADE WITH CURIOSITY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
