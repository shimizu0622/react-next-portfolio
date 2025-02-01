"use client";

import Link from 'next/link';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // クリーンアップ用のuseEffect
  useEffect(() => {
    return () => {
      // コンポーネントのアンマウント時にメニューを閉じる
      setIsMenuOpen(false);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // メニューが開いているときはスクロールを無効化
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // クリーンアップ関数
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Portfolio
        </Link>

        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          <span className={`${styles.menuBar} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>

        <div className={`${styles.links} ${isMenuOpen ? styles.show : ''}`}>
          <Link href="/profile" className={styles.link} onClick={() => setIsMenuOpen(false)}>
            Profile
          </Link>
          <Link href="/future" className={styles.link} onClick={() => setIsMenuOpen(false)}>
            Future goals
          </Link>
          <Link href="/blog" className={styles.link} onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;