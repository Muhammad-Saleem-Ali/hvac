"use client";

import {
  ShieldCheck,
  Clock,
  Award,
  BadgeCheck,
  CheckCircle2,
  Users,
  Wrench,
  ThumbsUp,
  Sparkles,
  Phone,
  MessageCircle,
  Building,
  Home,
  Factory,
} from "lucide-react";

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const pillars = [
    {
      icon: <Users size={28} />,
      title: "Skilled Technicians",
      subtitle: "Licensed & Certified",
      desc: "Our engineering and technician squad is officially certified with extensive field expertise in HVAC chillers, VRF technology, and high-voltage electrical distribution.",
      color: "blue",
    },
    {
      icon: <Award size={28} />,
      title: "Quality Service",
      subtitle: "Workmanship Guaranteed",
      desc: "Every installation, compressor repair, and electrical board wiring adheres to international safety standards, back by a 100% satisfaction guarantee.",
      color: "orange",
    },
    {
      icon: <Clock size={28} />,
      title: "On-Time Support",
      subtitle: "24/7 Emergency Response",
      desc: "Air conditioning failures and power trips don't follow office hours. Our emergency dispatch units operate 24 hours a day, 7 days a week.",
      color: "blue",
    },
    {
      icon: <ThumbsUp size={28} />,
      title: "Competitive Rates",
      subtitle: "Transparent Pricing",
      desc: "Upfront estimates with zero hidden charges. You receive fair commercial pricing, genuine parts, and comprehensive diagnostic reports before work begins.",
      color: "orange",
    },
  ];

  const highlights = [
    "Over a decade of multi-brand HVAC servicing expertise",
    "Equipped with digital manifold gauges, leak detectors & thermal meters",
    "Specialized VRF / VRV layout design & heat load calculation",
    "Custom cold room & blast freezer installation with PUF insulation",
    "Three-phase industrial panel dressing, breaker balance & earthing tests",
    "Same-day emergency response with stocked mobile service vans",
  ];

  return (
    <section className="why-choose-section" id="why-choose-us">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <div className="section-tag orange">
            <Sparkles size={14} />
            <span>Why Choose Us</span>
          </div>

          <h2 className="section-title">
            Your Trusted HVAC & Electrical <span className="highlight-blue">Partner</span>
          </h2>

          <p className="section-subtitle">
            Engineered around reliability, rapid on-site response, and uncompromising
            workmanship across all sectors.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`pillar-card ${pillar.color}`}>
              <div className="pillar-icon-box">{pillar.icon}</div>
              <div className="pillar-header">
                <span className="pillar-sub">{pillar.subtitle}</span>
                <h3 className="pillar-title">{pillar.title}</h3>
              </div>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Sector Experience Banner */}
        <div className="sectors-banner">
          <div className="sectors-left">
            <span className="sectors-tag">Universal Service Coverage</span>
            <h3 className="sectors-title">
              Reliable Solutions Across Every Sector
            </h3>
            <p className="sectors-desc">
              Whether you need domestic inverter AC servicing, high-rise office VRF
              chillers, or industrial manufacturing electrical panel overhauls, HVAC
              Company delivers precision engineering.
            </p>

            <div className="sectors-badge-row">
              <div className="sector-badge">
                <Home size={18} />
                <span>Residential Homes</span>
              </div>
              <div className="sector-badge">
                <Building size={18} />
                <span>Commercial Plazas</span>
              </div>
              <div className="sector-badge">
                <Factory size={18} />
                <span>Industrial Plants</span>
              </div>
            </div>
          </div>

          <div className="sectors-right">
            <h4 className="checklist-heading">The HVAC Company Standard:</h4>
            <div className="checklist-items">
              {highlights.map((item, idx) => (
                <div key={idx} className="check-row">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="sectors-cta">
              <button onClick={onOpenQuoteModal} className="btn btn-orange">
                <Sparkles size={16} />
                <span>Get Free Project Quote</span>
              </button>
              <a href="tel:+923061407243" className="btn btn-outline-white">
                <Phone size={16} />
                <span>0306-1407243</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-choose-section {
          padding: 5rem 0;
          background: #ffffff;
        }

        .section-head-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .highlight-blue {
          color: #0b57d0;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 640px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .pillar-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-lg);
          padding: 2rem 1.5rem;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .pillar-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          background: #ffffff;
        }

        .pillar-card.blue:hover {
          border-color: #0b57d0;
        }

        .pillar-card.orange:hover {
          border-color: #ff5722;
        }

        .pillar-icon-box {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .pillar-card.blue .pillar-icon-box {
          background: rgba(11, 87, 208, 0.1);
          color: #0b57d0;
        }

        .pillar-card.orange .pillar-icon-box {
          background: rgba(255, 87, 34, 0.1);
          color: #ff5722;
        }

        .pillar-header {
          margin-bottom: 0.75rem;
        }

        .pillar-sub {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
          margin-bottom: 0.2rem;
        }

        .pillar-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #08214d;
        }

        .pillar-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* Sector Banner */
        .sectors-banner {
          background: linear-gradient(135deg, #08214d 0%, #051430 100%);
          border-radius: var(--radius-lg);
          padding: 2.5rem 2rem;
          color: #ffffff;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          border: 1px solid rgba(56, 189, 248, 0.3);
          box-shadow: var(--shadow-xl);
        }

        @media (min-width: 992px) {
          .sectors-banner {
            grid-template-columns: 1fr 1fr;
            padding: 3rem;
          }
        }

        .sectors-tag {
          font-size: 0.75rem;
          font-weight: 800;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .sectors-title {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .sectors-desc {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .sectors-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .sector-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.5rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
        }

        .checklist-heading {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fb923c;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .checklist-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .check-row {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.95rem;
          color: #e2e8f0;
          line-height: 1.4;
        }

        :global(.check-icon) {
          color: #4ade80;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .sectors-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
        }
      `}</style>
    </section>
  );
}
