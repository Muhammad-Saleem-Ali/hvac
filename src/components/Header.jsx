"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import {
  Phone,
  Clock,
  ShieldCheck,
  Menu,
  X,
  MessageCircle,
  Zap,
  Snowflake,
  Flame,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function Header({ onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setPhoneDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const phoneNumbers = [
    {
      label: "0306-1407243",
      raw: "+923061407243",
      role: "Quotes & General Service",
      tag: "Main Line",
      isPrimary: true,
    },
    {
      label: "0322-4152778",
      raw: "+923224152778",
      role: "Cooling & Heating Support",
      tag: "HVAC Tech",
    },
    {
      label: "0321-1155955",
      raw: "+923211155955",
      role: "Electrical & Emergency Dispatch",
      tag: "24/7 Dispatch",
    },
  ];

  return (
    <header className="site-header">
      {/* Top Announcement & Emergency Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          {/* Desktop Left Info (visible >= 900px) */}
          <div className="top-bar-left">
            <span className="emergency-badge">
              <span className="pulse-dot"></span>
              24/7 Emergency Support Available
            </span>
            <span className="divider-dot">•</span>
            <span className="coverage-text">
              Residential • Commercial • Industrial
            </span>
          </div>

          {/* Desktop Right (visible >= 900px) */}
          <div className="top-bar-right desktop-only-phones">
            <div className="top-phones">
              <Phone size={13} className="icon-pulse" />
              <span className="call-label">Call Now:</span>
              <a
                href="tel:+923061407243"
                className="phone-link primary-phone"
                title="Call 0306-1407243"
              >
                0306-1407243
              </a>
              <span className="phone-sep">|</span>
              <a
                href="tel:+923224152778"
                className="phone-link"
                title="Call 0322-4152778"
              >
                0322-4152778
              </a>
              <span className="phone-sep">|</span>
              <a
                href="tel:+923211155955"
                className="phone-link"
                title="Call 0321-1155955"
              >
                0321-1155955
              </a>
            </div>

            <a
              href="https://wa.me/923061407243?text=Hello%20HVAC%20Company%2C%20I%20need%20assistance%20with%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="top-wa-btn"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile & Tablet Compact Bar (visible < 900px) */}
          <div className="top-bar-mobile-row">
            <div className="mobile-call-cluster">
              <a
                href="tel:+923061407243"
                className="mobile-primary-call"
                title="Tap to Call 0306-1407243"
              >
                <span className="call-icon-wrap">
                  <Phone size={12} />
                </span>
                <span className="call-text-wrap">
                  <span className="call-now-sub">
                    <span className="pulse-dot-mini"></span>
                    Call:
                  </span>
                  <span className="call-now-digits">0306-1407243</span>
                </span>
              </a>

              {/* +2 Lines Popover Toggle */}
              <button
                type="button"
                className={`mobile-lines-pill ${phoneDropdownOpen ? "active" : ""}`}
                onClick={() => {
                  setPhoneDropdownOpen(!phoneDropdownOpen);
                  if (mobileMenuOpen) setMobileMenuOpen(false);
                }}
                aria-expanded={phoneDropdownOpen}
                aria-label="View all emergency phone numbers"
              >
                <span className="lines-text">+2 Lines</span>
                <ChevronDown
                  size={12}
                  className={`lines-chevron ${phoneDropdownOpen ? "rotated" : ""}`}
                />
              </button>
            </div>

            <a
              href="https://wa.me/923061407243?text=Hello%20HVAC%20Company%2C%20I%20need%20assistance%20with%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="top-wa-btn mobile-wa-btn"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={14} />
              <span className="wa-text-full">WhatsApp</span>
              <span className="wa-text-short">Chat</span>
            </a>
          </div>
        </div>

        {/* Floating Quick Dropdown for All 3 Phone Lines on Mobile/Tablet */}
        {phoneDropdownOpen && (
          <div className="phone-popover-container">
            <div
              className="phone-popover-backdrop"
              onClick={() => setPhoneDropdownOpen(false)}
            />
            <div className="phone-popover-card">
              <div className="popover-header">
                <div className="popover-title-row">
                  <span className="pulse-dot"></span>
                  <span className="popover-heading">Direct 24/7 Contact Lines</span>
                </div>
                <button
                  type="button"
                  className="popover-close-btn"
                  onClick={() => setPhoneDropdownOpen(false)}
                  aria-label="Close lines menu"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="popover-lines-list">
                {phoneNumbers.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className={`popover-line-item ${phone.isPrimary ? "primary-line" : ""}`}
                    onClick={() => setPhoneDropdownOpen(false)}
                  >
                    <div className="line-icon-box">
                      <Phone size={14} />
                    </div>
                    <div className="line-details">
                      <div className="line-tag-row">
                        <span className="line-tag">{phone.tag}</span>
                        {phone.isPrimary && (
                          <span className="line-fast-badge">Fastest</span>
                        )}
                      </div>
                      <span className="line-number">{phone.label}</span>
                      <span className="line-role">{phone.role}</span>
                    </div>
                    <span className="line-call-cta">
                      <Phone size={11} />
                      <span>Call</span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="popover-footer">
                <MessageCircle size={13} className="footer-wa-icon" />
                <span>Need fast texting? Reach our team on WhatsApp 24/7</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-nav">
        <div className="container nav-content">
          {/* Logo */}
          <a href="#" className="brand-logo-link" aria-label="HVAC COMPANY">
            <Logo />
          </a>

          {/* Desktop Nav Links */}
          <div className="desktop-links">
            <a href="#home" className="nav-item">
              Home
            </a>
            <a href="#services" className="nav-item">
              Our Services
            </a>
            <a href="#why-choose-us" className="nav-item">
              Why Choose Us
            </a>
            <a href="#projects" className="nav-item">
              Our Work
            </a>
            <a href="#contact" className="nav-item">
              Contact
            </a>
            <a href="#faq" className="nav-item">
              FAQ
            </a>
          </div>

          {/* Nav Actions */}
          <div className="nav-actions">
            <a
              href="https://wa.me/923061407243?text=Hello%20HVAC%20Company%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp nav-wa-btn"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="btn btn-orange nav-quote-btn"
              type="button"
            >
              <Sparkles size={16} />
              <span>Free Quote</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className={`mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (phoneDropdownOpen) setPhoneDropdownOpen(false);
              }}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown & Backdrop */}
        {mobileMenuOpen && (
          <>
            <div
              className="mobile-menu-backdrop"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="mobile-menu-drawer">
              <div className="mobile-menu-inner">
                <div className="mobile-nav-links">
                  <a
                    href="#home"
                    className="mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#services"
                    className="mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Services
                  </a>
                  <a
                    href="#why-choose-us"
                    className="mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Why Choose Us
                  </a>
                  <a
                    href="#projects"
                    className="mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Work
                  </a>
                  <a
                    href="#contact"
                    className="mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                  <a
                    href="#faq"
                    className="mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </a>
                </div>

                <div className="mobile-action-box">
                  <div className="mobile-phone-title">
                    <Phone size={13} className="text-orange" />
                    <span>Direct Call Lines:</span>
                  </div>
                  <div className="mobile-phone-list">
                    {phoneNumbers.map((p, idx) => (
                      <a
                        key={idx}
                        href={`tel:${p.raw}`}
                        className="mobile-call-link"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="mobile-call-icon">
                          <Phone size={14} />
                        </div>
                        <div className="mobile-call-meta">
                          <span className="mobile-call-number">{p.label}</span>
                          <span className="mobile-call-role">{p.role}</span>
                        </div>
                        <span className="mobile-call-action">Call</span>
                      </a>
                    ))}
                  </div>

                  <div className="mobile-btn-stack">
                    <a
                      href="https://wa.me/923061407243?text=Hello%20HVAC%20Company%2C%20I%20need%20service."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ width: "100%" }}
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp Direct Chat</span>
                    </a>

                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenQuoteModal();
                      }}
                      className="btn btn-orange"
                      style={{ width: "100%" }}
                    >
                      <Sparkles size={18} />
                      <span>Request Free Quote</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          box-shadow: var(--shadow-sm);
        }

        /* Top Bar Container */
        .top-bar {
          position: relative;
          background: #051430;
          color: #e2e8f0;
          font-size: 0.8rem;
          padding: 0.45rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          user-select: none;
        }

        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.75rem;
        }

        /* Desktop Left Emergency Info */
        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          white-space: nowrap;
        }

        .emergency-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(37, 211, 102, 0.15);
          color: #4ade80;
          padding: 0.15rem 0.55rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.75rem;
          border: 1px solid rgba(34, 197, 94, 0.25);
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
          animation: pulseGlow 2s infinite;
          flex-shrink: 0;
        }

        .pulse-dot-mini {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          margin-right: 4px;
          animation: pulseGlow 2s infinite;
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(0.85);
          }
        }

        .divider-dot {
          color: #475569;
        }

        .coverage-text {
          color: #94a3b8;
          font-size: 0.75rem;
        }

        /* Desktop Right Phones & WA */
        .desktop-only-phones {
          display: flex;
          align-items: center;
          gap: 1rem;
          white-space: nowrap;
        }

        .top-phones {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-weight: 600;
          color: #f8fafc;
          white-space: nowrap;
        }

        .icon-pulse {
          color: #fb923c;
          animation: iconRing 3s ease-in-out infinite;
        }

        @keyframes iconRing {
          0%, 80%, 100% {
            transform: rotate(0deg);
          }
          85% {
            transform: rotate(15deg);
          }
          90% {
            transform: rotate(-15deg);
          }
          95% {
            transform: rotate(10deg);
          }
        }

        .call-label {
          color: #fb923c;
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .phone-link {
          color: #f1f5f9 !important;
          font-family: var(--font-heading);
          letter-spacing: 0.02em;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .phone-link:hover {
          color: #38bdf8 !important;
          text-decoration: underline;
        }

        .primary-phone {
          color: #ffffff !important;
          font-weight: 700;
        }

        .phone-sep {
          color: #475569;
          font-size: 0.7rem;
        }

        /* WhatsApp Button */
        .top-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #25d366;
          color: #ffffff !important;
          padding: 0.28rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(37, 211, 102, 0.35);
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .top-wa-btn:hover {
          background: #1ebd5a;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.45);
        }

        /* Mobile & Tablet Top Bar Row (< 900px) */
        .top-bar-mobile-row {
          display: none;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 0.5rem;
        }

        .mobile-call-cluster {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          min-width: 0;
        }

        .mobile-primary-call {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-full);
          padding: 0.22rem 0.65rem 0.22rem 0.45rem;
          color: #ffffff;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .mobile-primary-call:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #38bdf8;
        }

        .call-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff5722 0%, #f59e0b 100%);
          color: #ffffff;
          flex-shrink: 0;
        }

        .call-text-wrap {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          line-height: 1.1;
          white-space: nowrap;
        }

        .call-now-sub {
          font-size: 0.7rem;
          font-weight: 700;
          color: #fb923c;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          display: inline-flex;
          align-items: center;
        }

        .call-now-digits {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.82rem;
          color: #ffffff;
          letter-spacing: 0.01em;
        }

        /* +2 Lines Pill */
        .mobile-lines-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #7dd3fc;
          padding: 0.22rem 0.55rem;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .mobile-lines-pill:hover,
        .mobile-lines-pill.active {
          background: rgba(56, 189, 248, 0.25);
          color: #ffffff;
          border-color: #38bdf8;
        }

        .lines-chevron {
          transition: transform 0.2s ease;
        }

        .lines-chevron.rotated {
          transform: rotate(180deg);
        }

        .mobile-wa-btn {
          padding: 0.22rem 0.65rem;
          font-size: 0.75rem;
        }

        .wa-text-full {
          display: inline;
        }

        .wa-text-short {
          display: none;
        }

        /* Responsive Breakpoints for Top Bar */
        @media (max-width: 899px) {
          .top-bar-left {
            display: none;
          }
          .desktop-only-phones {
            display: none;
          }
          .top-bar-mobile-row {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .top-bar {
            padding: 0.35rem 0;
          }
          .call-now-digits {
            font-size: 0.78rem;
          }
          .mobile-primary-call {
            padding: 0.2rem 0.5rem 0.2rem 0.35rem;
            gap: 0.35rem;
          }
          .call-icon-wrap {
            width: 20px;
            height: 20px;
          }
          .mobile-lines-pill {
            padding: 0.2rem 0.45rem;
            font-size: 0.68rem;
          }
        }

        @media (max-width: 400px) {
          .call-now-sub {
            display: none;
          }
          .wa-text-full {
            display: none;
          }
          .wa-text-short {
            display: inline;
          }
          .mobile-lines-pill .lines-text {
            font-size: 0.65rem;
          }
        }

        /* Phone Numbers Popover Card */
        .phone-popover-container {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 1050;
          padding: 0.5rem 1rem;
          display: flex;
          justify-content: center;
        }

        .phone-popover-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(8, 33, 77, 0.4);
          backdrop-filter: blur(3px);
          z-index: 1;
        }

        .phone-popover-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 420px;
          background: #08214d;
          border: 1px solid rgba(56, 189, 248, 0.35);
          border-radius: var(--radius-md);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);
          padding: 1rem;
          animation: popoverSlide 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes popoverSlide {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .popover-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 0.75rem;
        }

        .popover-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .popover-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.88rem;
          color: #ffffff;
        }

        .popover-close-btn {
          color: #94a3b8;
          padding: 0.2rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .popover-close-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        .popover-lines-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .popover-line-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-sm);
          padding: 0.6rem 0.75rem;
          color: #ffffff;
          transition: all 0.2s ease;
        }

        .popover-line-item:hover,
        .popover-line-item.primary-line {
          background: rgba(11, 87, 208, 0.25);
          border-color: rgba(56, 189, 248, 0.4);
        }

        .line-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .primary-line .line-icon-box {
          background: #ff5722;
          color: #ffffff;
        }

        .line-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .line-tag-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .line-tag {
          font-size: 0.68rem;
          font-weight: 700;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .primary-line .line-tag {
          color: #fb923c;
        }

        .line-fast-badge {
          font-size: 0.62rem;
          background: rgba(34, 197, 94, 0.2);
          color: #4ade80;
          padding: 1px 5px;
          border-radius: 4px;
          font-weight: 700;
        }

        .line-number {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.01em;
        }

        .line-role {
          font-size: 0.72rem;
          color: #94a3b8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .line-call-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: #ff5722;
          color: #ffffff;
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 700;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(255, 87, 34, 0.3);
          transition: background 0.2s ease;
        }

        .popover-line-item:hover .line-call-cta {
          background: #e64a19;
        }

        .popover-footer {
          margin-top: 0.75rem;
          padding-top: 0.6rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.72rem;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .footer-wa-icon {
          color: #25d366;
          flex-shrink: 0;
        }

        /* Main Navigation Bar */
        .main-nav {
          background: #ffffff;
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.7rem;
          padding-bottom: 0.7rem;
        }

        .brand-logo-link {
          display: inline-flex;
          align-items: center;
        }

        /* Desktop Nav Items */
        .desktop-links {
          display: none;
          align-items: center;
          gap: 1.75rem;
        }

        @media (min-width: 992px) {
          .desktop-links {
            display: flex;
          }
        }

        .nav-item {
          font-size: 0.95rem;
          font-weight: 600;
          color: #334155;
          position: relative;
          padding: 0.3rem 0;
        }

        .nav-item:hover {
          color: #0b57d0;
        }

        .nav-item::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #0b57d0;
          transition: width 0.2s ease;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        /* Nav Actions */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-wa-btn {
          display: none;
          padding: 0.55rem 1rem;
          font-size: 0.85rem;
        }

        .nav-quote-btn {
          display: none;
          padding: 0.55rem 1.15rem;
          font-size: 0.85rem;
        }

        @media (min-width: 640px) {
          .nav-wa-btn {
            display: inline-flex;
          }
        }

        @media (min-width: 768px) {
          .nav-quote-btn {
            display: inline-flex;
          }
        }

        .mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          color: #08214d;
          background: #f1f5f9;
          transition: all 0.2s ease;
        }

        .mobile-toggle:hover {
          background: #e2e8f0;
          color: #0b57d0;
        }

        .mobile-toggle.open {
          background: #08214d;
          color: #ffffff;
        }

        @media (min-width: 992px) {
          .mobile-toggle {
            display: none;
          }
        }

        /* Mobile Menu Drawer & Backdrop */
        .mobile-menu-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(8, 33, 77, 0.45);
          backdrop-filter: blur(4px);
          z-index: 998;
        }

        .mobile-menu-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          max-height: calc(100vh - 75px);
          overflow-y: auto;
          background: #ffffff;
          border-bottom: 3px solid #0b57d0;
          box-shadow: var(--shadow-xl);
          padding: 1.25rem 1.25rem 2rem;
          z-index: 999;
          animation: drawerSlide 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes drawerSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-inner {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
        }

        .mobile-link {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
          padding: 0.75rem 0.25rem;
          border-bottom: 1px solid #f1f5f9;
          transition: all 0.2s ease;
        }

        .mobile-link:hover {
          color: #0b57d0;
          padding-left: 0.5rem;
          background: rgba(11, 87, 208, 0.03);
        }

        .mobile-action-box {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-md);
          padding: 1rem;
        }

        .mobile-phone-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .mobile-phone-list {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .mobile-call-link {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          color: #08214d;
          background: #ffffff;
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-sm);
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .mobile-call-link:hover {
          border-color: #0b57d0;
          background: #f0f7ff;
        }

        .mobile-call-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(11, 87, 208, 0.1);
          color: #0b57d0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mobile-call-meta {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .mobile-call-number {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.92rem;
          color: #08214d;
        }

        .mobile-call-role {
          font-size: 0.72rem;
          color: #64748b;
        }

        .mobile-call-action {
          font-size: 0.72rem;
          font-weight: 700;
          background: #ff5722;
          color: #ffffff;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
          flex-shrink: 0;
        }

        .mobile-btn-stack {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: 0.4rem;
        }
      `}</style>
    </header>
  );
}
