import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ open, onClick }) => {
  return (
    <ul className={`${styles.navLinks} ${open ? styles.open : ''}`}>
      <li>
        <NavLink
          to="/features"
          onClick={onClick}
          className={({ isActive }) =>
            isActive ? styles.activeLink : undefined
          }
        >
          Features
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/solution"
          onClick={onClick}
          className={({ isActive }) =>
            isActive ? styles.activeLink : undefined
          }
        >
          Solution
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/workings"
          onClick={onClick}
          className={({ isActive }) =>
            isActive ? styles.activeLink : undefined
          }
        >
          How it works
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/security"
          onClick={onClick}
          className={({ isActive }) =>
            isActive ? styles.activeLink : undefined
          }
        >
          Security
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/aboutus"
          onClick={onClick}
          className={({ isActive }) =>
            isActive ? styles.activeLink : undefined
          }
        >
          About us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          onClick={onClick}
          className={({ isActive }) =>
            isActive ? styles.activeLink : undefined
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
