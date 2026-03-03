import { useState } from 'react';
import styles from './Faq.module.css';
import FaqTabs from './FaqTabs';
import FaqItems from './FaqItems';

const faqData = {
  General: [
    {
      question: 'What are the initial steps to begin using Axonlink?',
      answer:
        'To begin using Axonlink, create an account on the web platform or mobile app, verify your profile, and complete your personal or organisational setup.'
    },
    {
      question: 'How do I get started with Axonlink?',
      answer:
        'To get started as a patient, simply visit the Google Play Store or Apple App Store, download the Axonlink app and create an account.'
    },
    {
      question: 'What should I know before diving into Axonlink?',
      answer:
        'Before using Axonlink, review your consent and privacy settings and understand how your healthcare information is shared securely.'
    },
    {
      question: 'How can I effectively launch my journey with Axonlink?',
      answer:
        'Complete your profile, connect with healthcare providers and begin using digital referrals, appointments and record management tools.'
    }
  ],

  'For Patients': [
    {
      question: 'How can patients book appointments on Axonlink?',
      answer:
        'Patients can find healthcare providers, view availability and book appointments directly within the Axonlink platform.'
    },
    {
      question: 'Can I access my medical records on Axonlink?',
      answer:
        'Yes, patients can securely view and manage their medical records from one unified dashboard.'
    }
  ],

  'For Clinicians': [
    {
      question: 'How does Axonlink support clinicians?',
      answer:
        'Axonlink provides clinicians with secure access to patient data, digital referrals and collaboration tools.'
    },
    {
      question: 'Can clinicians share records with other facilities?',
      answer:
        'Yes, clinicians can securely exchange approved patient information with partner facilities.'
    }
  ],

  'For Facilities and Hospitals': [
    {
      question: 'How can facilities use Axonlink?',
      answer:
        'Facilities can manage referrals, appointments and patient data using secure and consent-based tools.'
    },
    {
      question: 'Is Axonlink compliant with data protection standards?',
      answer:
        'Axonlink is designed to follow recognised healthcare privacy and data protection standards.'
    }
  ]
};

const Faq = () => {
  const tabs = Object.keys(faqData);
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqLeft}>
        <h2>
          Frequently Asked
          <br />
          Questions
        </h2>

        <FaqTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={(i) => {
            setActiveTab(i);
            setOpenIndex(0);
          }}
        />
      </div>

      <div className={styles.faqRight}>
        {faqData[tabs[activeTab]].map((item, index) => (
          <FaqItems
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
