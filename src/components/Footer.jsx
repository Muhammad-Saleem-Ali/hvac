"use client";

import Logo from "./Logo";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Snowflake,
  Flame,
  Zap,
  ArrowUp,
  Sparkles,
} from "lucide-react";

export default function Footer({ onOpenQuoteModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        {/* Col 1: Brand & Bio */}
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <Logo variant="dark" />
          </div>

          <p className="footer-about">
            Professional Heating, Ventilation, Air Conditioning, VRF Systems,
            Industrial Cold Rooms, and Certified Electrical Engineering across
            Residential, Commercial, and Industrial sectors.
          </p>

          <div className="footer-trust-chips">
            <span className="trust-chip">
              <ShieldCheck size={14} />
              <span>100% Satisfaction</span>
            </span>
            <span className="trust-chip">
              <Clock size={14} />
              <span>24/7 Emergency</span>
            </span>
          </div>
        </div>

        {/* Col 2: Services List */}
        <div className="footer-col">
          <h4 className="footer-col-title">Our Services</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#services">AC Installation & Maintenance</a>
            </li>
            <li>
              <a href="#services">VRF / VRV Multi-Split Systems</a>
            </li>
            <li>
              <a href="#services">Compressor Overhaul & Repairing</a>
            </li>
            <li>
              <a href="#services">Cold Rooms & Walk-in Freezers</a>
            </li>
            <li>
              <a href="#services">Electrical Wiring & DB Panels</a>
            </li>
            <li>
              <a href="#services">24/7 Emergency Troubleshooting</a>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Navigation */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">All Services</a>
            </li>
            <li>
              <a href="#why-choose-us">Why Choose Us</a>
            </li>
            <li>
              <a href="#projects">Project Showcase</a>
            </li>
            <li>
              <a href="#faq">Frequently Asked Questions</a>
            </li>
            <li>
              <button
                onClick={onOpenQuoteModal}
                className="quote-link-btn"
                type="button"
              >
                Request Free Quote
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Hotlines */}
        <div className="footer-col contact-col">
          <h4 className="footer-col-title">Contact Directory</h4>
          <div className="footer-contact-items">
            <div className="contact-item">
              <Phone size={18} className="c-icon" />
              <div>
                <span className="c-label">Call Now (Hotlines):</span>
                <div className="c-numbers">
                  <a href="tel:+923061407243" className="c-num-link">
                    0306-1407243
                  </a>
                  <span className="num-sep">•</span>
                  <a href="tel:+923224152778" className="c-num-link">
                    0322-4152778
                  </a>
                  <span className="num-sep">•</span>
                  <a href="tel:+923211155955" className="c-num-link">
                    0321-1155955
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <MessageCircle size={18} className="c-icon wa" />
              <div>
                <span className="c-label">WhatsApp Direct Support:</span>
                <a
                  href="https://wa.me/923061407243?text=Hello%20HVAC%20Company%2C%20I%20need%20service%20support."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-link-text"
                >
                  +92 306 1407243 (24/7 Active)
                </a>
              </div>
            </div>

            <div className="contact-item">
              <Clock size={18} className="c-icon" />
              <div>
                <span className="c-label">Service Availability:</span>
                <span className="c-value">24 Hours / 7 Days a Week</span>
              </div>
            </div>

            <div className="contact-item">
              <MapPin size={18} className="c-icon" />
              <div>
                <span className="c-label">Coverage:</span>
                <span className="c-value">
                  Residential • Commercial • Industrial
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-flex">
          <div className="copy-text">
            © {new Date().getFullYear()} <strong>HVAC COMPANY</strong>.
            All rights reserved. Professional HVAC & Electrical Services.
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: #051430;
          color: #e2e8f0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 4.5rem;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          padding-bottom: 3.5rem;
        }

        @media (min-width: 640px) {
          .footer-main {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-main {
            grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
            gap: 2rem;
          }
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }

        .footer-logo-badge {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0b57d0 0%, #0284c7 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1.5px solid #38bdf8;
        }

        .brand-icons-mini {
          display: flex;
          gap: 2px;
        }

        :global(.cold) {
          color: #e0f2fe;
        }
        :global(.heat) {
          color: #fdba74;
        }
        :global(.bolt) {
          color: #fef08a;
        }

        .brand-mini-text {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
          margin-top: 1px;
        }

        .footer-company-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .footer-motto {
          font-family: var(--font-hand);
          font-size: 1.15rem;
          color: #fb923c;
          display: block;
        }

        .footer-about {
          font-size: 0.88rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1.35rem;
        }

        .footer-trust-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .trust-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          color: #e2e8f0;
        }

        .footer-col-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.02em;
          margin-bottom: 1.25rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-col-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 28px;
          height: 2px;
          background: #ff5722;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links-list a {
          font-size: 0.88rem;
          color: #cbd5e1;
          transition: var(--transition);
        }

        .footer-links-list a:hover {
          color: #38bdf8;
          padding-left: 4px;
        }

        .quote-link-btn {
          font-size: 0.88rem;
          color: #fb923c;
          font-weight: 700;
          text-align: left;
        }

        .quote-link-btn:hover {
          color: #ff5722;
          text-decoration: underline;
        }

        /* Contact Items */
        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        :global(.c-icon) {
          color: #38bdf8;
          flex-shrink: 0;
          margin-top: 3px;
        }

        :global(.c-icon.wa) {
          color: #25d366;
        }

        .c-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #94a3b8;
          letter-spacing: 0.04em;
        }

        .c-numbers {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.15rem;
        }

        .c-num-link {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .c-num-link:hover {
          color: #38bdf8;
        }

        .num-sep {
          color: #64748b;
          font-size: 0.8rem;
        }

        .wa-link-text {
          font-size: 0.9rem;
          font-weight: 700;
          color: #25d366;
        }

        .wa-link-text:hover {
          text-decoration: underline;
        }

        .c-value {
          font-size: 0.88rem;
          color: #e2e8f0;
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1.5rem 0;
          font-size: 0.82rem;
          color: #94a3b8;
        }

        .bottom-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #cbd5e1;
          font-size: 0.82rem;
          font-weight: 600;
        }

        .back-to-top-btn:hover {
          color: #38bdf8;
        }
      `}</style>
    </footer>
  );
}
