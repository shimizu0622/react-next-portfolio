import Link from 'next/link';
import styles from './page.module.css';
import React from 'react';
import Timeline from './_components/Timeline';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>ポートフォリオサイトへようこそ</h1>
        <p className={styles.description}>
          私のポートフォリオサイトにお越しいただき、ありがとうございます。<br />
          このサイトでは、私自身についてと将来の目標について紹介しています。
        </p>
        <Timeline />
      </section>
    </div>
    
  );
}