import styles from './Footer.module.css';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <FooterBrand />
        <FooterLinks />
      </div>

      <div className={styles.footerDivider} />

      <FooterBottom />
    </footer>
  );
};

export default Footer;
