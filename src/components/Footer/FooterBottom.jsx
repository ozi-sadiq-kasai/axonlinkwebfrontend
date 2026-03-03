import styles from './Footer.module.css';

const FooterBottom = () => {
  return (
    <div className={styles.footerBottom}>
      <p>© {new Date().getFullYear()} Axonlink. All rights reserved.</p>
    </div>
  );
};

export default FooterBottom;
