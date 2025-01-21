import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>2025 マイポートフォリオ</p>
      </div>
    </footer>
  );
};

export default Footer;