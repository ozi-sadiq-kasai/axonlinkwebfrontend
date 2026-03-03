import React from "react";
import styles from "./Join.module.css";
import { useOutletContext } from "react-router-dom";
import {Link} from 'react-router-dom';

const Join = ({
  bg = "#f4f4fb",
  titleColor = "#4b428e",
  buttonColor = "rgb(91, 84, 198)",
  buttonTextColor = "#fff"
}) => {
     const { onOpenWaitlist } = useOutletContext();
  return (
    <section
      className={styles.cta}
      style={{ background: bg }}
    >
      <h3 style={{ color: titleColor }}>
        Join the Future of Connected Healthcare
      </h3>

      <p>
        Axonlink is building a secure healthcare network that empowers
        patients, supports clinicians, and strengthens healthcare systems.
      </p>

      <div className={styles.actions}>
        <button onClick={onOpenWaitlist}
          className={styles.primary}
          style={{
            background: buttonColor,
            color: buttonTextColor
          }}
        >
          Get Started
        </button>

        <Link to="/contact" className={styles.secondary} >
          Contact us
        </Link>
      </div>
    </section>
  );
};

export default Join;
