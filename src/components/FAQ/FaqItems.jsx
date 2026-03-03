import styles from './Faq.module.css';
import { FiChevronDown } from 'react-icons/fi';

const FaqItems = ({ item, isOpen, onToggle }) => {
  return (
    <div className={styles.faqItem}>
      <button
        className={`${styles.faqQuestion} ${
          isOpen ? styles.activeQuestion : ''
        }`}
        onClick={onToggle}
      >
        <span>{item.question}</span>

        <FiChevronDown
          className={`${styles.faqIcon} ${
            isOpen ? styles.rotate : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className={styles.faqAnswer}>
          {item.answer}
        </div>
      )}
    </div>
  );
};

export default FaqItems;
