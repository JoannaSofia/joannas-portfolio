'use client';
import React, { useState } from 'react';
import styles from './Footer.module.css';
import { PiEnvelopeSimpleLight, PiLinkedinLogoLight, PiGithubLogo, PiClipboard, PiCheckLight} from "react-icons/pi";

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'joannasofia@proton.me';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className={styles.footer}>
      <h5>Joanna Olofsson</h5>
      <div className={styles.emailWrapper}>
        <PiEnvelopeSimpleLight size={20}/>
        <span className={styles.emailText}>{email}</span>
        <button className={styles.copyIcon} onClick={handleCopy} aria-label="Copy email">
          {copied ? <PiCheckLight size={24}/> : <PiClipboard size={16}/>}
        </button>
      </div>
      <div className={styles.linksRow}>
        <PiGithubLogo size={20}/>
        <PiLinkedinLogoLight size={20}/> 
      </div>
      </div>

  );
}

export default Footer;
