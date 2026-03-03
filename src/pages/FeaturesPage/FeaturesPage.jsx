import PageBanner from '../../assets/banner/Banner.png';
import mBanner from '../../assets/banner/mobilePurpleBanner.png';

import { CiCircleCheck } from 'react-icons/ci';
import {
  Share2,
  Calendar,
  Disc,
  PieChart,
  FileText,
  FileHeart,
} from 'lucide-react';

import Join from '../../components/Join/Join';
import styles from './FeaturesPage.module.css';

const cards = [
  {
    icon: FileText,
    title: 'Patient Medical Record Management',
    description:
      'Provide a centralized environment where patient medical records are created, updated, and maintained.',
    tag: 'Key Coverage Includes',
    color: 'purple',
    items: [
      'Patient identity and demographics',
      'Clinical summaries and visit records',
      'Diagnoses, treatments, and outcomes',
    ],
  },
  {
    icon: Share2,
    title: 'Referrals Between Facilities',
    description:
      "Digital referral from patient's record, ensuring receiving facility has patient necessary medical information.",
    tag: 'Capabilities Includes',
    color: 'green',
    items: [
      'Digital referral creation',
      'Secure sharing of patient context',
      'Referral status tracking',
    ],
  },
  {
    icon: Calendar,
    title: 'Appointments and Scheduling',
    description:
      'Handle appointments digitally. Facilities manage availability and patients receive clear information about upcoming visits.',
    tag: 'Key Coverage Includes',
    color: 'orange',
    items: [
      'Patient identity and demographics',
      'Clinical summaries and visit records',
      'Diagnoses, treatments, and outcomes',
    ],
  },
  {
    icon: Disc,
    title: 'Role-Based Access Control',
    description:
      'Records are accessible to authorized users. Access levels are determined by user roles such as patient,cllinician or facility',
    tag: 'Access Control Ensures',
    color: 'blue',
    items: [
      'Data visibility based on user role',
      'Patient privacy and security',
      'Compliance with healthcare data standards',
    ],
  },
  {
    icon: PieChart,
    title: 'Report and Analysis',
    description:
      'Track performance, identify trends, and provide visibility into patient care.',
    tag: 'Key Coverage Includes',
    color: 'green',
    items: [
      'Patient activity and visit summaries',
      'Referral and appointment trends',
      'Facility and Clinician performance insights',
    ],
  },
  {
    icon: FileHeart,
    title: 'Medical History Continuity',
    description:
      "Shows patient's health history across different hospitals or clinics.",
    tag: 'Continuity Enables',
    color: 'purple',
    items: [
      'Cross-facility medical visibility',
      'Longitudinal patient health tracking',
      'Better-informed clinical decisions',
    ],
  },
];

const FeaturesPage = () => {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <img
          src={PageBanner}
          alt='Healthcare platform features banner'
          className={styles.dBanner}
        />

        <img
          src={mBanner}
          alt='Healthcare platform features mobile banner'
          className={styles.mBanner}
        />

        <div className={styles.heroContent}>
          <span className={styles.badge}>Features</span>

          <h1>
            A <span className={styles.solutionSpan}>Unified Digital</span>
            <br />
            Infrastructure for Healthcare Data and Referrals
          </h1>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className={styles.wrapper}>
        <div className={styles.grid}>
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div key={index} className={styles.card}>
                {/* ICON */}
                <div className={`${styles.iconCircle} ${styles[card.color]}`}>
                  <Icon className={styles.iconSvg} />
                </div>

                {/* TITLE */}
                <h3 className={styles.title}>{card.title}</h3>

                {/* DESCRIPTION */}
                <p className={styles.desc}>{card.description}</p>

                {/* FOOTER */}
                <div className={`${styles.footer} ${styles[card.color]}`}>
                  {/* TAG */}
                  <p className={`${styles.tag} ${styles[card.color]}`}>
                    {card.tag}
                  </p>

                  {/* LIST */}
                  <ul>
                    {card.items.map((item, i) => (
                      <li key={i} className={styles.listItem}>
                        <span
                          className={`${styles.checkCircle} ${styles[card.color]}`}>
                          <CiCircleCheck className={styles.checkIcon} />
                        </span>

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* JOIN SECTION */}
      <Join bg='#f4f9f3' titleColor='#506c4b' buttonColor='#506c4b' />
    </>
  );
};

export default FeaturesPage;
