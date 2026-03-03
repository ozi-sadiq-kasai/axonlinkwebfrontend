import styles from './Faq.module.css';

const FaqTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className={styles.faqTabs}>
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`${styles.faqTab} ${
            activeTab === index ? styles.activeTab : ''
          }`}
          onClick={() => onChange(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FaqTabs;
