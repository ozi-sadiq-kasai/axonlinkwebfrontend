import styles from './Footer.module.css';
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import FooterLogo from '../../assets/images/footerLogo.png';
import facebook from '../../assets/icons/facebook.png'
import x from '../../assets/icons/x.png'
import instagram from '../../assets/icons/instagram.png'
import linkdin from '../../assets/icons/linkdin.png'

const FooterBrand = () => {
  return (
    <div className={styles.footerBrand}>
      <img src={FooterLogo} alt='Logo' className={styles.footerLogo} />
      <p className={styles.footerDesc}>
        Unifying patient data and clinical workflows into a single, secure
        network.
      </p>

      <div className={styles.footerSocials}>
        <a href='#'>
         <img src={facebook} alt="facebook" />
        </a>
        <a href='#'>
           <img src={x} alt="x" />
        </a>
        <a href='#'>
           <img src={instagram} alt="instagram" />
        </a>
        <a href='#'>
           <img src={linkdin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;
