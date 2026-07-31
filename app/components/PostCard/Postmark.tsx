'use client';
import styles from './Postmark.module.css';
import { StampType } from '../Hero/HeroSection';
import { PiCheckCircle } from "react-icons/pi";

type StampProps = {
  type: StampType;
  onStamp: () => void;
  stamped: boolean;
};

const STAMP_MESSAGES: Record<StampType, string> = {
  approved: "Approved for departure",
  playful: "Handle with curiosity",
  bold: "Priority: self",
  curious: "No longer returned to sender",
};


export const Stamp = ({ type, onStamp, stamped }: StampProps) => {
  return (
    <div
      className={`${styles.stamp} ${stamped ? styles.stamped : ''}`}
      onClick={onStamp}
      title="Click to stamp"
    >
      <div className={`${styles.stampInner} ${styles[type]}`}>
        {STAMP_MESSAGES[type]}
      </div>
    </div>
  );
};

