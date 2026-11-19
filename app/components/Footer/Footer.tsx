
'use client';
import React, { useState } from 'react';
import styles from './Footer.module.css';
import {
  PiEnvelopeSimpleLight,
  PiLinkedinLogoLight,
  PiGithubLogo,
  PiClipboard,
  PiCheckLight
} from 'react-icons/pi';

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
    <footer className={styles.footer}>
      <div className={styles.footerIdentity}>
        <h2>Joanna Olofsson</h2>
      </div>

      <div className={styles.footerContent}>
        <nav className={styles.socialLinks} aria-label="Social links">
          <a
            href="https://github.com/JoannaSofia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <PiGithubLogo size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/joannaolofsson/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <PiLinkedinLogoLight size={24} />
          </a>
        </nav>

        <div className={styles.emailWrapper}>
          <PiEnvelopeSimpleLight size={24} />

          <a href={`mailto:${email}`} className={styles.emailText}>
            {email}
          </a>

          <button
            type="button"
            className={styles.copyIcon}
            onClick={handleCopy}
            aria-label="Copy email address"
          >
            {copied
              ? <PiCheckLight size={24} />
              : <PiClipboard size={20} />
            }
          </button>
          <span className={styles.srOnly} aria-live="polite">
            {copied ? 'Email address copied' : ''}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
