"use client";

import {
  Phone,
  MessageCircle,
  Snowflake,
  Flame,
  Zap,
  ShieldCheck,
  Sparkles,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function BottomCtaBanner({ onOpenQuoteModal }) {
  const hotlineNumbers = [
    { display: "03061407243", formatted: "0306-1407243", raw: "+923061407243" },
    { display: "03224152778", formatted: "0322-4152778", raw: "+923224152778" },
    { display: "03211155955", formatted: "0321-1155955", raw: "+923211155955" },
  ];

  return (
    <section className="bottom-cta-section" id="contact">
      {/* Decorative Golden / Orange Wave Curve */}
      <div className="wave-accent-top"></div>

      <div className="container banner-inner">
        {/* Left Column: Phone numbers and Direct Action */}
        <div className="cta-left-box">
          <div className="call-now-badge">
            <div className="phone-pulse-icon">
              <Phone size={24} />
            </div>
            <div className="badge-text-group">
              <span className="call-label">Call Now</span>
              <span className="quote-hint">Fast Free Quote • 24/7 Available</span>
            </div>
          </div>

          <div className="large-numbers-stack">
            {hotlineNumbers.map((item, idx) => (
              <div key={idx} className="number-item-row">
                <a href={`tel:${item.raw}`} className="number-link">
                  {item.display}
                </a>

                <div className="quick-actions">
                  <a
                    href={`tel:${item.raw}`}
                    className="quick-icon-btn call"
                    title={`Call ${item.formatted}`}
                  >
                    <Phone size={16} />
                  </a>
                  <a
                    href={`https://wa.me/${item.raw.replace(
                      "+",
                      ""
                    )}?text=Hello%20HVAC%20Company%2C%20I%20am%20inquiring%20about%20a%20service%20estimate.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-icon-btn wa"
                    title={`WhatsApp ${item.formatted}`}
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Column: The iconic handwritten tagline */}
        <div className="cta-center-box">
          <span className="script-tagline">We Keep You Comfortable</span>
          <span className="sub-motto">
            Reliable Solutions for a Cooler, Safer & Better Tomorrow
          </span>
          <div className="center-buttons">
            <a
              href="https://wa.me/923061407243?text=Hello%20HVAC%20Company%2C%20I%20need%20immediate%20service%20support."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>Instant WhatsApp Chat</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="btn btn-orange btn-lg"
              type="button"
            >
              <Sparkles size={18} />
              <span>Request Free Quote</span>
            </button>
          </div>
        </div>

        {/* Right Column: Company Identity & Services (matches Screenshot 2) */}
        <div className="cta-right-box">
          <div className="company-info-card">
            <h3 className="company-title">
              HVAC COMPANY
            </h3>

            <div className="service-pillars-row">
              <div className="pillar-item">
                <Snowflake size={20} className="pillar-icon snow" />
                <span>COOLING</span>
              </div>
              <div className="pillar-sep">•</div>
              <div className="pillar-item">
                <Flame size={20} className="pillar-icon heat" />
                <span>HEATING</span>
              </div>
              <div className="pillar-sep">•</div>
              <div className="pillar-item">
                <Zap size={20} className="pillar-icon zap" />
                <span>ELECTRICAL</span>
              </div>
            </div>

            <div className="service-extra-meta">
              <div className="meta-row">
                <ShieldCheck size={16} className="meta-icon" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
              <div className="meta-row">
                <Clock size={16} className="meta-icon" />
                <span>Residential • Commercial • Industrial</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bottom-cta-section {
          background: #08214d;
          position: relative;
          padding: 4.5rem 0 4rem;
          color: #ffffff;
          overflow: hidden;
        }

        .wave-accent-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: linear-gradient(
            90deg,
            #ff5722 0%,
            #f59e0b 35%,
            #38bdf8 70%,
            #0b57d0 100%
          );
        }

        .banner-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .banner-inner {
            grid-template-columns: 1.1fr 1.1fr 1fr;
            gap: 2.5rem;
          }
        }

        /* Left Box */
        .cta-left-box {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .call-now-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .phone-pulse-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #ff5722;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(255, 87, 34, 0.45);
          animation: pulseBlue 2.5s infinite;
        }

        .badge-text-group {
          display: flex;
          flex-direction: column;
        }

        .call-label {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
        }

        .quote-hint {
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 600;
        }

        .large-numbers-stack {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .number-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.65rem 1.1rem;
          border-radius: var(--radius-md);
          backdrop-filter: blur(8px);
          transition: var(--transition);
        }

        .number-item-row:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #38bdf8;
          transform: translateX(4px);
        }

        .number-link {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.03em;
          line-height: 1;
        }

        .number-link:hover {
          color: #38bdf8;
        }

        .quick-actions {
          display: flex;
          gap: 0.4rem;
        }

        .quick-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .quick-icon-btn.call {
          background: #ffffff;
          color: #08214d;
        }

        .quick-icon-btn.call:hover {
          background: #38bdf8;
        }

        .quick-icon-btn.wa {
          background: #25d366;
          color: #ffffff;
        }

        .quick-icon-btn.wa:hover {
          background: #1ebd5a;
        }

        /* Center Box */
        .cta-center-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.85rem;
        }

        .script-tagline {
          font-family: var(--font-hand);
          font-size: 2.85rem;
          color: #fb923c;
          font-weight: 700;
          line-height: 1.1;
          transform: rotate(-2deg);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .sub-motto {
          font-size: 0.95rem;
          color: #cbd5e1;
          max-width: 320px;
          line-height: 1.5;
        }

        .center-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          width: 100%;
          max-width: 300px;
          margin-top: 0.5rem;
        }

        /* Right Box */
        .cta-right-box {
          display: flex;
          justify-content: flex-end;
        }

        .company-info-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-lg);
          padding: 1.85rem 1.65rem;
          width: 100%;
          max-width: 380px;
        }

        .company-title {
          font-size: 1.35rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 0.02em;
          line-height: 1.2;
          margin-bottom: 1.25rem;
        }

        .service-pillars-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          margin-bottom: 1.25rem;
        }

        .pillar-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #e2e8f0;
        }

        :global(.pillar-icon.snow) {
          color: #38bdf8;
        }
        :global(.pillar-icon.heat) {
          color: #fb923c;
        }
        :global(.pillar-icon.zap) {
          color: #facc15;
        }

        .pillar-sep {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.8rem;
        }

        .service-extra-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .meta-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: #94a3b8;
        }

        :global(.meta-icon) {
          color: #4ade80;
        }
      `}</style>
    </section>
  );
}
