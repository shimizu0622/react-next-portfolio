// app/future/page.tsx
'use client';

import styles from './page.module.css';
import Link from 'next/link';

const goals = [
  {
    title: 'ドローン免許資格の取得',
    description: 'ドローン操縦の専門的なスキルを習得し、空撮や測量などの分野で活用していきたいと考えています。特に災害時の支援活動や建設現場での活用を視野に入れています。',
    timeline: '',
    icon: '🚁'
  },
  {
    title: '簿記資格の取得',
    description: '経営の基礎知識として、簿記の知識は不可欠だと考えています。まずは日商簿記3級を取得したいと思っています。段階的ではありますが、最終的に簿記2級の取得を目指します。',
    timeline: '',
    icon: '📚'
  },
  {
    title: 'ボランティア活動',
    description: '私はドローンを使用して人の役に立つ取り組みを行いと思っています。具体的に、災害現場での人命救助や状況把握などのボランティア活動を行いたいと思っています。',
    timeline: '',
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