import PageBanner from '../../assets/banner/Banner.png';
import patient from '../../assets/images/patient.png';
import clinician from '../../assets/images/clinician.png';
import healthcare from '../../assets/images/healthcare.png';
import Join from '../../components/Join/Join';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import mBanner from '../../assets/banner/mobilePurpleBanner.png'
import { CiCircleCheck } from 'react-icons/ci';
import styles from './SolutionPage.module.css';

const data = [
  {
    id: 'patients',
    tag: 'Mobile App',
    title: 'For Patients',
    text: 'We give patients greater control and visibility over their entire healthcare journey by bringing their medical information into one connected system. Patients can access their records, track appointments and referrals, and manage who has access to their data. Feeling confident knowing their information is accurate, up to date, and available when needed across care providers.',
    points: [
      'Ownership of health information',
      'Less repetition and paperwork',
      'More coordinated care',
    ],
    cta: 'Get Started as Patients',
    image: patient,
    reverse: false,
  },
  {
    id: 'clinicians',
    tag: 'Mobile & Desktop',
    title: 'For Clinicians',
    text: 'Providing complete patient information and more efficient clinical workflows. With easy access to medical histories, referral information and appointment details.',
    points: [
      'Faster access to patient history',
      'Simplified referrals and scheduling',
      'Better-informed clinical decisions',
    ],
    cta: 'Get Started as Clinician',
    image: clinician,
    reverse: true,
  },
  {
    id: 'facilities',
    tag: 'Desktop',
    title: 'For Healthcare Facilities',
    text: 'We improve operational efficiency and oversight for healthcare facilities by centralizing patient data, referrals and scheduling activities.',
    points: [
      'Improved coordination across departments',
      'Better resource utilization',
      'Stronger data governance',
    ],
    cta: 'Get Started as Facility',
    image: healthcare,
    reverse: false,
  },
];

const SolutionPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <img src={PageBanner} alt='Solution banner' className={styles.dBanner} />
        <img src={mBanner} alt='Solution banner' className={styles.mBanner}/>

        <div className={styles.heroContent}>
          <span className={styles.badge}>Solution</span>
          <h1>
            Solving Fragmented{' '}
            <span className={styles.solutionSpan}>
              Healthcare
              Data
            </span>{' '}
            and Care Coordination
          </h1>
        </div>
      </section>
      <div className={styles.wrapper}>
        {data.map((item) => (
          <div
            key={item.id}
            className={`${styles.block} ${item.reverse ? styles.reverse : ''}`}>
            {/* text side */}
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <span className={styles.tag}>
                {item.id === 'patients' && <HiOutlineDevicePhoneMobile />}

                {item.id === 'facilities' && <HiOutlineComputerDesktop />}

                {item.id === 'clinicians' && (
                  <>
                    <HiOutlineComputerDesktop />
                    <HiOutlineDevicePhoneMobile />
                  </>
                )}

                {item.tag}
              </span>

              <p>{item.text}</p>

              <ul>
                {item.points.map((p) => (
                  <li key={p}>
                    <CiCircleCheck />
                    {p}
                  </li>
                ))}
              </ul>

              <button className={styles.cta}>{item.cta}</button>
            </div>

            {/* image side */}
            <div className={styles.imageWrap}>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
      <section className={styles.joinSection}>
        <Join/>
      </section>
    </>
  );
};

export default SolutionPage;
