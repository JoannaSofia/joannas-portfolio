
'use client';

import styles from './Postmark.module.css';
import type { StampType } from '../Hero/HeroSection';

type StampProps = {
  type: StampType;
  onStamp: () => void;
  stamped: boolean;
};

const STAMP_MESSAGES: Record<StampType, string> = {
  approved: 'Approved for departure',
  playful: 'Handle with curiosity',
  bold: 'Priority: self',
  curious: 'Always exploring',
};

export const Stamp = ({ type, onStamp, stamped }: StampProps) => {
  return (
    <button
      type="button"
      className={`${styles.stamp} ${stamped ? styles.stamped : ''}`}
      onClick={onStamp}
      aria-label={`Stamp postcard with ${STAMP_MESSAGES[type]}`}
      title="Click to stamp your postcard"
    >
      <span className={`${styles.stampInner} ${styles[type]}`}>
        <span className={styles.stampTop}>✳ POSTAL SERVICE ✳</span>
        <span className={styles.stampMessage}>
          {STAMP_MESSAGES[type]}
        </span>
        <span className={styles.stampWaves} aria-hidden="true">
          ≋ ≋ ≋
        </span>
      </span>
    </button>
  );
};
