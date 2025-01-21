// app/page.tsx
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>ポートフォリオサイトへようこそ</h1>
        <p className={styles.description}>
          私のポートフォリオサイトにお越しいただき、ありがとうございます。
          このサイトでは、私自身についてと将来の目標について紹介しています。
        </p>
        <div className={styles.buttons}>
          <Link href="/profile" className={styles.button}>
            自己紹介を見る
          </Link>
          <Link href="/future" className={styles.buttonOutline}>
            目標を見る
          </Link>
        </div>
      </section>
    </div>
  );
}