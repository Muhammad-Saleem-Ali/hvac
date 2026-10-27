"use client";

import Image from "next/image";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  Snowflake,
  Flame,
  Wind,
  Award,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function Hero({ onOpenQuoteModal }) {
  const [copiedPhone, setCopiedPhone] = useState(null);

  const phoneList = [
    { number: "0306-1407243", raw: "+923061407243", label: "Primary Hotline" },
    { number: "0322-4152778", raw: "+923224152778", label: "Technical Support" },
    { number: "0321-1155955", raw: "+923211155955", label: "Emergency Service" },
  ];

  const handleCopy = (num) => {
    navigator.clipboard.writeText(num);
    setCopiedPhone(num);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section className="hero-section" id="home">
      {/* Background Graphic Accents */}
      <div className="hero-bg-shapes">
        <div className="shape-blur blue-glow"></div>
        <div className="shape-blur orange-glow"></div>
        <div className="blueprint-grid-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Eyebrow Pill */}
          <div className="hero-badge">
            <span className="badge-flame">🔥</span>
            <span>HEATING • VENTILATION • AIR CONDITIONING • ELECTRICAL</span>
          </div>

          <h1 className="hero-title">
            HVAC <br />
            <span className="text-gradient">COMPANY</span>
            <span className="sr-only">
              {" "}
              — 24/7 Heating, Cooling &amp; Industrial Electrical Solutions
            </span>
          </h1>

          <div className="hero-motto">
            <span className="motto-tag">Your Comfort Our Priority</span>
            <span className="motto-lead">
              Reliable Solutions for a Cooler, Safer & Better Tomorrow
            </span>
          </div>

          <p className="hero-desc">
            Complete heating, cooling, VRF systems, commercial refrigeration, and
            certified industrial electrical solutions. Delivering on-time, guaranteed
            workmanship across Residential, Commercial & Industrial sectors.
          </p>

          {/* Quick Domain Badges */}
          <div className="domain-pills">
            <div className="pill-item">
              <Snowflake size={16} className="pill-icon snow" />
              <span>Cooling</span>
            </div>
            <div className="pill-item">
              <Flame size={16} className="pill-icon fire" />
              <span>Heating</span>
            </div>
            <div className="pill-item">
              <Wind size={16} className="pill-icon wind" />
              <span>Ventilation</span>
            </div>
            <div className="pill-item">
              <Zap size={16} className="pill-icon bolt" />
              <span>Electrical</span>
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="hero-actions">
            <a
              href="tel:+923061407243"
              className="btn btn-primary btn-lg hero-btn"
            >
              <Phone size={19} className="phone-bounce" />
              <span>Call: 0306-1407243</span>
            </a>

            <a
              href="https://wa.me/923061407243?text=Hello%20HVAC%20Company%2C%20I%20need%20a%20free%20quote%20for%20HVAC%2FElectrical%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg hero-btn"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="btn btn-orange btn-lg hero-btn"
              type="button"
            >
              <Sparkles size={18} />
              <span>Free Quote</span>
            </button>
          </div>

          {/* Trust Guarantees Checklist */}
          <div className="hero-guarantees">
            <div className="guarantee-item">
              <CheckCircle2 size={18} className="g-icon" />
              <span>Licensed & Certified Technicians</span>
            </div>
            <div className="guarantee-item">
              <CheckCircle2 size={18} className="g-icon" />
              <span>24/7 Emergency Support</span>
            </div>
            <div className="guarantee-item">
              <CheckCircle2 size={18} className="g-icon" />
              <span>100% Satisfaction Guaranteed</span>
            </div>
            <div className="guarantee-item">
              <CheckCircle2 size={18} className="g-icon" />
              <span>Fast & Reliable Solutions</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Column (Matches Screenshot 1 & 2) */}
        <div className="hero-visual-col">
          <div className="visual-card">
            {/* Main Visual Image */}
            <div className="image-wrapper">
              <Image
                src="/images/hero-technicians.jpg"
                alt="HVAC Company certified technician team"
                width={600}
                height={400}
                priority
                className="hero-img"
              />
              <div className="image-gradient-overlay"></div>
              
              <div className="floating-stat-badge top-left">
                <Award size={18} className="badge-ico" />
                <div>
                  <strong>Trusted Since Day One</strong>
                  <span>Serving with Excellence</span>
                </div>
              </div>

              <div className="floating-stat-badge bottom-right">
                <Clock size={18} className="badge-ico clock" />
                <div>
                  <strong>24/7 On-Call Support</strong>
                  <span>Fast Emergency Dispatch</span>
                </div>
              </div>
            </div>

            {/* The Famous Blue "Call Now for Free Quote!" Card from Screenshot 1 */}
            <div className="call-now-blue-card">
              <div className="card-top">
                <div className="card-header-row">
                  <div className="card-title-group">
                    <span className="card-subtitle">Instant Direct Contact</span>
                    <h2 className="card-title">Call Now for Free Quote!</h2>
                  </div>
                  <div className="guarantee-badge-pill">
                    <ShieldCheck size={16} />
                    <span>100% Satisfaction Guaranteed</span>
                  </div>
                </div>
              </div>

              <div className="phone-numbers-grid">
                {phoneList.map((item, idx) => (
                  <div key={idx} className="phone-number-row">
                    <div className="phone-info">
                      <div className="phone-icon-wrap">
                        <Phone size={18} />
                      </div>
                      <div className="phone-texts">
                        <span className="phone-meta">{item.label}</span>
                        <a href={`tel:${item.raw}`} className="phone-digits">
                          {item.number}
                        </a>
                      </div>
                    </div>

                    <div className="phone-actions">
                      <button
                        onClick={() => handleCopy(item.number)}
                        className="action-icon-btn copy-btn"
                        title="Copy Phone Number"
                        aria-label={`Copy ${item.number}`}
                      >
                        {copiedPhone === item.number ? (
                          <Check size={15} className="copied-check" />
                        ) : (
                          <Copy size={15} />
                        )}
                      </button>

                      <a
                        href={`tel:${item.raw}`}
                        className="action-icon-btn call-action-btn"
                        title="Direct Call"
                      >
                        <Phone size={15} />
                      </a>

                      <a
                        href={`https://wa.me/${item.raw.replace(
                          "+",
                          ""
                        )}?text=Hello%20HVAC%20Company%2C%20I%20am%20calling%20regarding%20a%20service%20inquiry.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-icon-btn wa-action-btn"
                        title="WhatsApp Chat"
                      >
                        <MessageCircle size={15} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-footer-notice">
                <span>Available 24/7 • Fast Response Guaranteed Across All Sectors</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%);
          padding: 3.5rem 0 4rem;
          overflow: hidden;
        }

        .hero-bg-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .shape-blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
        }

        .blue-glow {
          top: -10%;
          left: -5%;
          width: 500px;
          height: 500px;
          background: #0b57d0;
        }

        .orange-glow {
          bottom: 10%;
          right: 5%;
          width: 450px;
          height: 450px;
          background: #ff5722;
        }

        .blueprint-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              to right,
              rgba(11, 87, 208, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(11, 87, 208, 0.04) 1px,
              transparent 1px
            );
          background-size: 32px 32px;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-container {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 2.5rem;
          }
        }

        /* Hero Left Content */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(8, 33, 77, 0.06);
          border: 1px solid rgba(8, 33, 77, 0.14);
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 800;
          color: #08214d;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
        }

        .hero-title {
          font-size: 2.75rem;
          font-weight: 900;
          color: #08214d;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        @media (min-width: 640px) {
          .hero-title {
            font-size: 3.25rem;
          }
        }

        @media (min-width: 1200px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }

        .text-gradient {
          background: linear-gradient(135deg, #0b57d0 0%, #0284c7 60%, #ff5722 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-motto {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 1.25rem;
        }

        .motto-tag {
          font-family: var(--font-hand);
          font-size: 1.75rem;
          color: #ff5722;
          font-weight: 700;
          line-height: 1;
        }

        .motto-lead {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1e293b;
          letter-spacing: -0.01em;
        }

        .hero-desc {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 1.75rem;
          max-width: 620px;
        }

        /* Domain Pills */
        .domain-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .pill-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          color: #0f172a;
          box-shadow: var(--shadow-sm);
        }

        :global(.pill-icon.snow) {
          color: #0284c7;
        }
        :global(.pill-icon.fire) {
          color: #ff5722;
        }
        :global(.pill-icon.wind) {
          color: #0d9488;
        }
        :global(.pill-icon.bolt) {
          color: #eab308;
        }

        /* Hero Actions */
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 2.25rem;
        }

        .hero-btn {
          font-size: 1rem;
        }

        .phone-bounce {
          animation: floatSlow 2s ease-in-out infinite;
        }

        /* Guarantees */
        .hero-guarantees {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.65rem 1.25rem;
        }

        @media (min-width: 500px) {
          .hero-guarantees {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #334155;
        }

        :global(.g-icon) {
          color: #0284c7;
          flex-shrink: 0;
        }

        /* Hero Visual Col */
        .hero-visual-col {
          display: flex;
          justify-content: center;
        }

        .visual-card {
          width: 100%;
          max-width: 520px;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .image-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 4px solid #ffffff;
          background: #08214d;
        }

        .hero-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .image-wrapper:hover .hero-img {
          transform: scale(1.03);
        }

        .image-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(8, 33, 77, 0.1) 0%,
            rgba(8, 33, 77, 0.65) 100%
          );
          pointer-events: none;
        }

        .floating-stat-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 0.5rem 0.85rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(255, 255, 255, 0.8);
          z-index: 2;
        }

        .floating-stat-badge.top-left {
          top: 1rem;
          left: 1rem;
        }

        .floating-stat-badge.bottom-right {
          bottom: 1rem;
          right: 1rem;
        }

        .floating-stat-badge strong {
          display: block;
          font-size: 0.8rem;
          color: #08214d;
          line-height: 1.2;
        }

        .floating-stat-badge span {
          display: block;
          font-size: 0.7rem;
          color: #64748b;
          font-weight: 500;
        }

        :global(.badge-ico) {
          color: #ff5722;
        }

        :global(.badge-ico.clock) {
          color: #0b57d0;
        }

        /* The Famous Blue Call Now Card */
        .call-now-blue-card {
          background: linear-gradient(135deg, #08214d 0%, #0b57d0 100%);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          color: #ffffff;
          box-shadow: var(--shadow-xl);
          border: 2px solid #38bdf8;
          position: relative;
          overflow: hidden;
        }

        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .card-subtitle {
          font-size: 0.75rem;
          font-weight: 700;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 0.2rem;
        }

        .card-title {
          font-size: 1.5rem;
          color: #ffffff;
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .guarantee-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(37, 211, 102, 0.2);
          border: 1px solid rgba(37, 211, 102, 0.4);
          color: #4ade80;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .phone-numbers-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .phone-number-row {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: var(--transition);
        }

        .phone-number-row:hover {
          background: rgba(255, 255, 255, 0.18);
          border-color: #38bdf8;
          transform: translateX(4px);
        }

        .phone-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .phone-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ffffff;
          color: #0b57d0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .phone-texts {
          display: flex;
          flex-direction: column;
        }

        .phone-meta {
          font-size: 0.7rem;
          color: #93c5fd;
          font-weight: 600;
          text-transform: uppercase;
        }

        .phone-digits {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.03em;
        }

        .phone-digits:hover {
          color: #38bdf8;
        }

        .phone-actions {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .action-icon-btn {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .copy-btn {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        .copy-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        :global(.copied-check) {
          color: #4ade80;
        }

        .call-action-btn {
          background: #ffffff;
          color: #0b57d0;
        }

        .call-action-btn:hover {
          background: #38bdf8;
          color: #051430;
        }

        .wa-action-btn {
          background: #25d366;
          color: #ffffff;
        }

        .wa-action-btn:hover {
          background: #1ebd5a;
        }

        .card-footer-notice {
          font-size: 0.75rem;
          color: #93c5fd;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 0.75rem;
        }
      `}</style>
    </section>
  );
}
