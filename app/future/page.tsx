// app/future/page.tsx
'use client';

import styles from './page.module.css';
import Link from 'next/link';

const goals = [
  {
    title: 'ドローン免許資格の取得',
    description: 'ドローン操縦の専門的なスキルを習得し、空撮や測量などの分野で活用していきたいと考えています。特に災害時の支援活動や建設現場での活用を視野に入れています。',
    timeline: '2024年内の取得を目標',
    icon: '🚁'
  },
  {
    title: '簿記資格の取得',
    description: '経営の基礎知識として、簿記の知識は不可欠だと考えています。まずは日商簿記3級から始め、段階的に上級資格の取得を目指します。',
    timeline: '3級：2024年6月までに取得、2級：2024年12月までに取得',
    icon: '📚'
  },
  {
    title: 'ボランティア活動',
    description: '地域社会への貢献として、定期的なボランティア活動への参加を計画しています。特に環境保護や子どもの教育支援に興味があります。',
    timeline: '月1回以上の活動参加を目標',
    icon: '🌱'
  }
];

export default function Future() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>今後の目標</h1>
      <div className={styles.goalsContainer}>
        {goals.map((goal, index) => (
          <div key={index} className={styles.goalCard}>
            <span className={styles.icon}>{goal.icon}</span>
            <h2 className={styles.goalTitle}>{goal.title}</h2>
            <p className={styles.goalDescription}>{goal.description}</p>
            <p className={styles.goalTimeline}>{goal.timeline}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/" className={styles.buttonOutline}>
          ホームへ戻る
        </Link>
      </div>
    </div>
  );
}