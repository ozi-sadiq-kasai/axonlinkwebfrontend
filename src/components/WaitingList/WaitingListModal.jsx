import { useState } from 'react';
import styles from './WaitingListModal.module.css';
import { apiFetch } from '../../utils/api';

const WaitingListModal = ({ onClose }) => {
  const [status, setStatus] = useState('form');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await apiFetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, role }),
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    setStatus('success');
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
     setStatus('error');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {status === 'form' && (
          <>
            <button className={styles.closeBtn} onClick={onClose}>
              ×
            </button>

            <span className={styles.badge}>Be the First to Get Access</span>

            <h2>We’re Launching Soon...</h2>

            <p>
              Join other users on Axonlink waitlist to get early access, product
              updates, and onboarding support tailored to your role.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <label>Email Address</label>
              <input
                type='email'
                placeholder='example@email.com'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Join as</label>
              <select
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}>
                <option value=''>Select How to Join</option> 
                <option value='patient'>Patient</option>
                <option value='clinician'>Clinician</option>
                <option value='facility'>Healthcare Facility</option>
              </select>

              <button
                type='submit'
                className={styles.submitBtn}
                disabled={loading}>
                {loading ? 'Joining...' : 'Join Now'}
              </button>
            </form>
          </>
        )}

        {status === 'success' && (
          <div className={styles.centerState}>
            <h3>You’re on the Waitlist 🎉</h3>
            <p>
              Thanks for joining. We’ll notify you as soon as access becomes
              available for your role.
            </p>
            <button onClick={onClose} className={styles.submitBtn}>
              Done
            </button>
          </div>
        )}

        {status === 'error' && (
          <div className={styles.centerState}>
            <h3>Something Went Wrong</h3>
            <p>We couldn’t add you to the waitlist. Please try again.</p>
            <button
              onClick={() => setStatus('form')}
              className={styles.submitBtn}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitingListModal;
