'use client';
import React, { useState } from 'react';
import styles from './HeroSection.module.css'
import { Stamp } from '../PostCard/Postmark';

export type StampType = 'approved' | 'playful' | 'bold' | 'curious';

const STAMP_TYPES: StampType[] = ['approved', 'playful', 'bold', 'curious'];

function HeroSection() {
  const [type, setType] = useState<StampType>('approved');
  const [stamped, setStamped] = useState(false);

  const handleStamp = () => {
    setStamped(true);
    setTimeout(() => setStamped(false), 600);
  };

  return (
    <div className={styles.container}>
      <section className={styles.headingSection}>
        <h1>Frontend with a Behavioral Twist</h1>
        <h3>UX • Psychology • Play</h3>
      </section>

      <section className={styles.postcardSection}>
     
        <div className={styles.stampWrapper}>
             <h5>
          What stamp matches your vibe?
        </h5>
          {STAMP_TYPES.map((t) => (
            <button
              key={t}
              className={`${styles.stampBadge} ${styles[t]} ${type === t ? styles.active : ''}`}
              onClick={() => setType(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className={styles.postcardWrapper}>
        <div className={styles.postcard}>
          <Stamp type={type} onStamp={handleStamp} stamped={stamped} />
          <div className={styles.stampPlaceholder}></div>
          <h4 className={styles.addressLine}>Joanna Olofsson</h4>
          <h4 className={styles.addressLine}>Frontend developer &</h4>
          <h4 className={styles.addressLine}>UX designer</h4>
        </div>
        </div>
      </section>

    </div>
  )
}

export default HeroSection

