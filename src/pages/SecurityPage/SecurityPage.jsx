import styles from './SecurityPage.module.css';

import Shield from '../../assets/images/SecurityLogo.png';
import badge from '../../assets/icons/badge.png';
import patient from '../../assets/icons/patient.png';
import cloud from '../../assets/icons/cloud.png';
import audit from '../../assets/icons/audit.png';
import role from '../../assets/icons/role.png';
import dBanner from '../../assets/banner/greenDesktopBanner.png'
import mBanner from '../../assets/banner/greenMobileBanner.png'

import Join from '../../components/Join/Join';


const features = [
  {
    title: 'NDPR / NDPA Compliant Framework',
    text:
      'Built adhering to NDPR and NDPA regulations, applying strict data handling, storage, and sharing standards that protect patient privacy and support regulatory accountability.',
    color: 'green',
    icon: badge,
  },
  {
    title: 'Role Based Access',
    text:
      'System access is granted strictly by role, ensuring clinicians, administrators, and staff only view information necessary for their responsibilities.',
    color: 'purple',
    icon: role,
  },
  {
    title: 'Patient-Controlled Access',
    text:
      'Patients decide who can access their medical records and revoke permissions anytime, ensuring informed consent and confidence in how their health data is shared.',
    color: 'blue',
    icon: patient,
  },
  {
    title: 'Audit Trails',
    text:
      'Every access to patient data is securely logged, recording who accessed it, and when, creating accountability and supporting compliance.',
    color: 'orange',
    icon: audit,
  },
  {
    title: 'Secure Cloud Infrastructure',
    text:
      'Operating on a secure, scalable cloud infrastructure with backups and protections that safeguard medical data against loss, breaches, and service disruption.',
    color: 'indigo',
    icon: cloud,
  },
];

const SecurityPage = () => {
  return (
    <>
      {/* hero */}
      <section className={styles.hero}>
        <img src={dBanner} alt="Security banner" className={styles.dBanner}/>
        <img src={mBanner} alt="Security banner" className={styles.mBanner}/>

        <div className={styles.heroContent}>
          <span className={styles.badge}>Security</span>
          <h1>
            Built with <span className={styles.securitySpan}>Security and</span>
            <br />
            <span className={styles.securitySpan}>Privacy</span> at the Core
          </h1>
        </div>
      </section>

      {/* center visual */}
      <section className={styles.visual}>
        <img src={Shield} alt="Security shield" />
      </section>

      {/* features */}
      <section className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.card}>
            <span
              className={`${styles.icon} ${styles[f.color]}`}
            >
              <img src={f.icon} alt="" />
            </span>

            <h4>{f.title}</h4>
            <p>{f.text}</p>
          </div>
        ))}
      </section>

      <Join />
    </>
  );
};

export default SecurityPage;
