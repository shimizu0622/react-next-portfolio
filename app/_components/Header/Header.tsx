import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Portfolio
        </Link>
        <div className={styles.links}>
          <Link href="/profile" className={styles.link}>
            Profile
          </Link>
          <Link href="/future" className={styles.link}>
            Future goles
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;