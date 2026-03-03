import styles from '../LandingPage.module.css';

import dataBanner from '../../../assets/images/dataBanner.png';
import mobileDataBanner from '../../../assets/images/mobileDataBanner.png';

const DataSection = () => {
  return (
    <section className={styles.dataSection}>
      <img
        src={dataBanner}
        alt="data Banner"
        className={styles.dataDesktop}
      />
      <img
        src={mobileDataBanner}
        alt="data Banner"
        className={styles.dataMobile}
      />
    </section>
  );
};

export default DataSection;
