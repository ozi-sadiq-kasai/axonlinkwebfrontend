import { useState } from "react";
import styles from "./ContactPage.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import dBanner from "../../assets/banner/Banner.png";
import mBanner from "../../assets/banner/mobilePurpleBanner.png";
import mobilePromo from "../../assets/banner/mobilePromo.png";
import PromoBanner from "../../assets/banner/PromoBanner.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { apiFetch } from "../../utils/api";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    purpose: "",
    role: "",
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await apiFetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");

      setFormData({
        purpose: "",
        role: "",
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className={styles.hero}>
        <img src={dBanner} alt="Solution banner" className={styles.dBanner} />
        <img src={mBanner} alt="Solution banner" className={styles.mBanner} />

        <div className={styles.heroContent}>
          <span className={styles.badge}>How it Works</span>
          <h1>
            <span className={styles.span}>Let's Start</span> the <br />
            Conversation
          </h1>
        </div>
      </section>

      <section className={styles.wrapper}>
        {/* left */}
        <div className={styles.info}>
          <h3>Get In Touch With Us</h3>
          <p>
            Reach out to ask questions, get support, or explore how the platform
            supports secure, connected care.
          </p>

          <div className={styles.contactCard}>
            <div>
              <span>Email:</span>
              <span>axonlink@axonlink.ai</span>
            </div>
            <div>
              <span>Phone:</span>
              <span>+234 8060906532</span>
            </div>

            <span className={styles.availability}>
              Available Monday to Friday 9AM – 6PM WAT
            </span>
          </div>

          <div className={styles.social}>
            <span>Send a DM Via Social Media</span>

            <div className={styles.icons}>
              <div>
                <FaFacebookF size={16} className={styles.socialIcon} />
              </div>
              <div>
                <FaInstagram size={16} className={styles.socialIcon} />
              </div>
              <div>
                <FaLinkedinIn size={16} className={styles.socialIcon} />
              </div>
              <div>
                <FaXTwitter size={16} className={styles.socialIcon} />
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <form className={styles.form} onSubmit={submit}>
          <h4>Send Us a Message</h4>

          <div className={styles.row}>
            <div>
              <label>Contact Purpose</label>
              <select
                required
                value={formData.purpose}
                onChange={(e) =>
                  setFormData({ ...formData, purpose: e.target.value })
                }
              >
                <option value="">Select purpose</option>
                <option value="product demo">Product Demo</option>
                <option value="hospital/facility onboarding">
                  Hospital/Facility Onboarding
                </option>
                <option value="sales/pricing information">
                  Sales/Pricing Information
                </option>
                <option value="technical support">Technical Support</option>
                <option value="account assistance">Account Assistance</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label>Role</label>
              <select
                required
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              >
                <option value="">Select role</option>
                <option value="patient">Patient</option>
                <option value="clinician">Clinician</option>
                <option value="facility">Healthcare Facility</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <label>Full Name</label>
              <input
                placeholder="Enter Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label>Email Address</label>
              <input
                placeholder="Enter Your Email"
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label>Message</label>
            <textarea
              placeholder="Enter Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.submit} disabled={loading}>
              {loading ? "Sending..." : "Send Message"} <FiArrowUpRight />
            </button>
          </div>
        </form>
      </section>

      {/* banner */}
      <section className={styles.banner}>
        <section className={styles.banner}>
          <img
            src={PromoBanner}
            alt="Promotional banner"
            className={styles.deskpromo}
          />
          <img
            src={mobilePromo}
            alt="Promotional banner"
            className={styles.mobilepromo}
          />
        </section>
      </section>

      {/* modals */}
      {status && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div
              className={`${styles.icon} ${
                status === "success" ? styles.ok : styles.err
              }`}
            >
              {status === "success" ? "✓" : "!"}
            </div>

            <h4>
              {status === "success"
                ? "Message Sent Successfully"
                : "Message Not Sent"}
            </h4>

            <p>
              {status === "success"
                ? "Thank you for reaching out. Your message has been received, and our team will review it and get back to you shortly."
                : "Something went wrong while sending your message. Please try again. If the issue persists, contact us via social media."}
            </p>

            <button onClick={() => setStatus(null)}>
              {status === "success" ? "Done" : "Try Again"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPage;
