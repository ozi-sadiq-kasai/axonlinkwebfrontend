import styles from './AboutUsPage.module.css';

import { CiCircleCheck } from 'react-icons/ci';
import heroImg from '../../assets/images/aboutUs.png';
import dBanner from '../../assets/banner/Banner.png';
import mBanner from '../../assets/banner/mobilePurpleBanner.png';
import Join from '../../components/Join/Join.jsx'
import joe from '../../assets/team/joe.png';
import ami from '../../assets/team/ami.png'
import ozi from '../../assets/team/ozi.png'
import sola from '../../assets/team/sola.png'
import femi from '../../assets/team/femi.png'

const team = [
  {
    name: 'Olusola Solanke',
    role: 'CEO & Co-Founder',
    image: sola,
  },
  {
    name: 'Anavami Sadiq',
    role: 'COO & Co-Founder',
    image: ami,
  },
  {
    name: 'Ozi Sadiq-Kasai',
    role: 'CTO & Frontend',
    image: ozi,
  },
  {
    name: 'Josep Yanum',
    role: 'Product Designer',
    image: joe,
  },
  {
    name: 'Olorunfemi Ojo',
    role: 'Cyber-Security',
    image: femi,
  },
];

const AboutUs = () => {
  return (
    <>
      <section className={styles.hero}>
        <img src={dBanner} alt='About Us Banner' className={styles.dBanner} />
        <img src={mBanner} alt='About Us Banner' className={styles.mBanner} />
        <div className={styles.heroContent}>
          <span className={styles.badge}>About Us</span>
          <h1>
            Connecting Care Through Secure {''}
            <span className={styles.aboutSpan}>Medical Records</span> and{' '}
            <span className={styles.aboutSpan}>Referrals</span>
          </h1>
        </div>
      </section>

      {/* Who we are */}
      <section className={styles.who}>
        <div className={styles.whoText}>
          <h3>Who We Are</h3>
          <p>
            Axonlink is a digital health platform built to unify patient medical
            records and enable secure, seamless referrals between healthcare
            providers.
          </p>
          <p>
            We help patients, clinicians, and facilities share critical health
            information safely, ensuring continuity of care across every stage
            of treatment.
          </p>
        </div>

        <div className={styles.whoImage}>
          <img src={heroImg} alt='Healthcare consultation' />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={styles.mission}>
          <h4>Our Mission</h4>
          <p>
            To enable secure medical record continuity and referral coordination
            across healthcare providers, empowering patients with ownership of
            their data while supporting clinicians with complete, reliable
            clinical context.
          </p>
        </div>

        <div className={styles.vision}>
          <h4>Our Vision</h4>
          <p>
            A healthcare ecosystem where referrals are seamless, medical records
            are universally accessible with consent, and patients experience
            continuous, connected care regardless of where treatment begins or
            continues.
          </p>
        </div>
      </section>

      {/* Core principles */}
      <section className={styles.principles}>
        <h3>Our Core Principles</h3>

        <div className={styles.principleGrid}>
          <div>
            <div className={styles.principleHeader}>
              <CiCircleCheck size={25} color='#4B428E' />
              <h5> Patient Ownership</h5>
            </div>
            <p>
              Patients control their medical records, ensuring transparency and
              informed consent at every care transition.
            </p>
          </div>

          <div>
            <div className={styles.principleHeader}>
              <CiCircleCheck size={25} color='#678B61' />
              <h5>Care Continuity</h5>
            </div>
            <p>
              Every consultation or referral carries the full clinical context
              needed for effective treatment.
            </p>
          </div>

          <div>
            <div className={styles.principleHeader}>
              <CiCircleCheck size={25} color='#5B778C' />
              <h5>Security & Trust</h5>
            </div>
            <p>
              Data protection, auditability, and compliance are embedded into
              every referral and record exchange.
            </p>
          </div>

          <div>
            <div className={styles.principleHeader}>
              <CiCircleCheck size={25} color='#B5843D' />
              <h5>Interoperability</h5>
            </div>
            <p>
              Healthcare systems should work together. Axonlink is built to
              connect, not isolate, medical data.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.team}>
        <h3>Meet The Team</h3>
        <p className={styles.teamIntro}>
          Driven by purpose, powered by people. Meet the minds shaping our
          vision and pushing boundaries every day.
        </p>
        <div className={styles.teamGrid}>
          {team.map((m) => (
            <div key={m.name} className={styles.card}>
              {m.image ? (
                <img src={m.image} alt={m.name} />
              ) : (
                <div className={styles.placeholder} />
              )}

              <div className={styles.cardBody}>
                <strong>{m.name}</strong>
                <span>{m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
       <Join/>
    </>
  );
};

export default AboutUs;
