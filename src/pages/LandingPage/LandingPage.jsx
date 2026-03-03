import FaqSection from '../../components/FAQ/Faq.jsx';
import Join from '../../components/Join/Join.jsx';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
/*HERO*/
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './LandingPage.module.css';
import Rings from '../../components/Spiral/Spiral.jsx';

/*PLATFORM*/
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';
import card4 from '../../assets/images/card4.png';

/*JOURNEY*/
import clinician from '../../assets/images/clinician.png';
import healthcare from '../../assets/images/healthcare.png';
import patient from '../../assets/images/patient.png';

/*HOW IT WORKS */
import HowItWorks from '../../assets/images/HowItWorks.png';

/* SECURITY */
import security from '../../assets/images/securityShield.png';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

/* DATA */
import DesktopDataBanner from '../../assets/banner/desktopDataBanner.png';
import mobileDataBanner from '../../assets/banner/mobileDataBanner.png';

const LandingPage = () => {
  const { onOpenWaitlist } = useOutletContext();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
const videoUrl ="https://res.cloudinary.com/dyn5ath7a/video/upload/f_auto,q_auto/v1771765879/axonlink_video_pqek24.mp4";;

  return (
    /*HERO*/
    <div>
      <section className={styles.headerSection}>
        <div className={styles.headerContent}>
          <h1 className={styles.mainHeading}>
            A Universal{' '}
            <span className={styles.headingSpan}>Health Passport</span> and
            Referral Network
          </h1>

          <p className={styles.subHeading}>
            We connect patients, clinicians, and healthcare facilities through
            one secure system making medical records, referrals, and
            appointments seamless and accessible.
          </p>

          <div className={styles.buttonContainer}>
            <button
              className={styles.getStartedButton}
              onClick={onOpenWaitlist}>
              <span className={styles.buttonText}>Get Started</span>
              <span className={styles.icon}>
                <FiArrowUpRight />
              </span>
            </button>

            <Link to='/contact' className={styles.contactUsButton}>
              Contact us
            </Link>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Rings />
        </div>
      </section>

      {/* PLATFORM */}
      <section className={styles.platformSection}>
        {/* Heading row */}
        <div className={styles.platformContent}>
          <h2 className={styles.platformHeading}>
            One Secure Platform for Connected Healthcare
          </h2>

          <p className={styles.platformSubheading}>
            Axonlink unifies healthcare data in one secure platform, enabling
            easy record access, faster referrals, and coordinated care.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.platformGrid}>
          <div className={styles.platformGridWide}>
            <h3>Seamless Referrals and Appointments</h3>
            <p>
              Referrals and appointments coordinated digitally for faster,
              smoother care.
            </p>
            <div className={styles.platformGridImage}>
              <img src={card1} alt='' className={styles.platformImg} />
            </div>
          </div>

          {/* Tall card */}
          <div className={styles.platformGridTall}>
            <h3>Centralized Patient Medical Records</h3>

            <p>
              All patient medical records securely connected in one unified
              system.
            </p>

            <div className={styles.platformGridImage}>
              <img src={card4} alt='' className={styles.platformImg} />
            </div>
          </div>

          {/* Bottom left */}
          <div className={`${styles.platformGridCard} ${styles.card3}`}>
            <h3>Built for Patients, Clinicians and Facilities</h3>

            <p>
              Designed for patients, clinicians, and healthcare facilities with
              tailored tools.
            </p>

            <div className={styles.platformGridImage}>
              <img src={card3} alt='' className={styles.platformImg} />
            </div>
          </div>

          {/* Bottom right */}
          <div className={`${styles.platformGridCard} ${styles.card4}`}>
            <h3>Secure, Consent-based Data Access</h3>

            <p>
              Patient data is accessed only with explicit permission and
              control.
            </p>

            <div className={styles.platformGridImage}>
              <img src={card2} alt='' className={styles.platformImg} />
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      {/* JOURNEY */}
      <section className={styles.journeySection}>
        <h3 className={styles.journeyHeading}>
          Designed for the Entire Healthcare Journey
        </h3>

        <div className={styles.journeyContainer}>
          {/* PATIENTS */}
          <div className={styles.journeyRow}>
            <div className={styles.journeyText}>
              <h4 className={styles.journeyContentHeading}>Patients</h4>
              <p className={styles.journeyContentText}>
                Access your medical records, manage consent, and move between
                healthcare providers without losing your history.
              </p>
              <Link
                to='/workings#patient'
                className={`${styles.getStartedButton} ${styles.journeyButton}`}>
                <span className={styles.buttonText}>For Patients</span>
                <FiArrowUpRight />
              </Link>
            </div>

            <div className={styles.journeyImageWrap}>
              <img
                src={patient}
                alt='Patients'
                className={styles.journeyImage}
              />
            </div>
          </div>

          {/* CLINICIANS */}
          <div className={`${styles.journeyRow} ${styles.reverse}`}>
            <div className={styles.journeyText}>
              <h4 className={styles.journeyContentHeading}>Clinicians</h4>
              <p className={styles.journeyContentText}>
                View complete patient histories, create medical records, and
                collaborate with other providers confidently.
              </p>
              <Link
                to='/workings#clinician'
                className={`${styles.getStartedButton} ${styles.journeyButton}`}>
                <span className={styles.buttonText}>For Clinicians</span>
                <FiArrowUpRight />
              </Link>
            </div>

            <div className={styles.journeyImageWrap}>
              <img
                src={clinician}
                alt='Clinicians'
                className={styles.journeyImage}
              />
            </div>
          </div>

          {/* HEALTHCARE FACILITIES */}
          <div className={styles.journeyRow}>
            <div className={styles.journeyText}>
              <h4 className={styles.journeyContentHeading}>
                Healthcare Facilities
              </h4>
              <p className={styles.journeyContentText}>
                Centralize patient data, manage staff access, and streamline
                referrals and appointments across departments.
              </p>
              <Link
                to='/workings#facility'  
                className={`${styles.getStartedButton} ${styles.journeyButton}`}>
                <span className={styles.buttonText}>
                  For Healthcare Facilities
                </span>
                <FiArrowUpRight />
              </Link>
            </div>

            <div className={styles.journeyImageWrap}>
              <img
                src={healthcare}
                alt='Healthcare Facilities'
                className={styles.journeyImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howSection}>
        <div className={styles.howContent}>
          <h4 className={styles.howContentHeading}>How it works</h4>
          <p className={styles.howContentText}>
            Securely store, access, and share medical records.
          </p>
          <Link to='/workings' className={styles.getStartedButton}>
            <span className={styles.buttonText}>See How it Works</span>
            <FiArrowUpRight />
          </Link>
          <button
            className={styles.getStartedButton}
            style={{ marginTop: '10px' }}
            onClick={() => setIsVideoOpen(true)}>
            <span className={styles.buttonText}>Watch Demo</span>
            <FiArrowUpRight />
          </button>
        </div>

        <div className={styles.howImage}>
          <img src={HowItWorks} alt='how it works' />
        </div>
      </section>

      {/* SECURITY */}
      <section className={styles.securitySection}>
        <div className={styles.securityImage}>
          <img src={security} alt='security placeholder' />
        </div>

        <div className={styles.securityContent}>
          <h4 className={styles.securityContentHeading}>
            Built with Security and Privacy at the Core
          </h4>

          <p className={styles.securityContentText}>
            Built with healthcare-grade security to ensure patient data remains
            protected at all times without slowing down care.
          </p>

          <ul>
            <li>
              <div className={styles.securityCheckMark}>
                <IoIosCheckmarkCircleOutline className={styles.checkIcon} />
              </div>
              <p>Encrypted medical records</p>
            </li>

            <li>
              <div className={styles.securityCheckMark}>
                <IoIosCheckmarkCircleOutline className={styles.checkIcon} />
              </div>
              <p>Role-based access control</p>
            </li>

            <li>
              <div className={styles.securityCheckMark}>
                <IoIosCheckmarkCircleOutline className={styles.checkIcon} />
              </div>
              <p>Patient-consent-driven data sharing</p>
            </li>
          </ul>

          <Link to='/security' className={styles.securityButton}>
            <span className={styles.buttonText}>Learn About Security</span>
            <FiArrowUpRight />
          </Link>
        </div>
      </section>

      {/* DATA */}
      <section className={styles.dataSection}>
        <img
          src={DesktopDataBanner}
          alt='data Banner'
          className={styles.dataDesktop}
        />
        <img
          src={mobileDataBanner}
          alt='data Banner'
          className={styles.dataMobile}
        />
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* JOIN*/}
      <Join />

      {/* VIDEO MODAL */}
      {isVideoOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsVideoOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setIsVideoOpen(false)}>
              ✕
            </button>

            <video
              src={videoUrl}
              controls
              autoPlay
              className={styles.modalVideo}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default LandingPage;
