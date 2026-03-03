import { useState } from 'react';
import styles from './Navbar.module.css';
import NavLinks from './NavLinks';
import Menu from '../../assets/images/Menu.png'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import { FiArrowUpRight } from 'react-icons/fi';

const Navbar = ({ onOpenWaitlist }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to='/' onClick={() => setOpen(false)}>
          <img src={Logo} alt='Logo' />
        </Link>
      </div>

      <NavLinks open={open} onClick={() => setOpen(false)} />

      {/* CTA (merged – NavCTA removed) */}
      <div className={styles.cta}>
        <button className={styles.button}  onClick={onOpenWaitlist}>
          <span className={styles.buttonText}>Get started</span>
          <FiArrowUpRight />
        </button>
      </div>

      <div
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label='Toggle navigation'>
       <img src={Menu} alt="menu" />
      </div>
    </nav>
  );
};

export default Navbar;
