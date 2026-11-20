
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
            Always curious about people
          </span>

          <h1>Frontend with a behavioral twist.</h1>
        </div>

        <div className={styles.stampControls}>
          <h2>What stamp matches your vibe?</h2>

          <div className={styles.tagWrapper}>
            {STAMP_TYPES.map((t) => (
              <button
                key={t}
                type="button"
                className={`${styles.tag} ${styles[t]} ${type === t ? styles.active : ''
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
              <div className={styles.addressLines}>
                <span />
                <span />
                <span />
              </div>
              <span className={styles.postcardEyebrow}>
                From:
              </span>
              <h3>Joanna Olofsson</h3>
              <p>Frontend developer & UX designer</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
