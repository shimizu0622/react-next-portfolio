// app/profile/page.tsx
import { getContent } from '../libs/microcms';
import styles from './page.module.css';
import Link from 'next/link';

export default async function ProfilePage() {
  const content = await getContent();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>自己紹介</h1>
      
      <div className={styles.profileSection}>
        <h2 className={styles.sectionTitle}>プロフィール</h2>
        <div className={styles.profileInfo}>
          <div className={styles.infoItem}>
            <span className={styles.label}>名前：</span>
            <span className={styles.value}>{content.profile.name}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>職種：</span>
            <span className={styles.value}>{content.profile.occupation}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>出身地：</span>
            <span className={styles.value}>{content.profile.birthPlace}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>生年月日：</span>
            <span className={styles.value}>{content.profile.birthDate}</span>
          </div>
        </div>
      </div>

      <div className={styles.pastSection}>
        <h2 className={styles.sectionTitle}>{content.past.title}</h2>
        <div 
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content.past.content }}
        />
      </div>

      <div className={styles.futureSection}>
        <h2 className={styles.sectionTitle}>{content.future.title}</h2>
        <div 
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content.future.content }}
        />
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/" className={styles.buttonOutline}>
          ホームへ戻る
        </Link>
      </div>
    </div>
  );
}