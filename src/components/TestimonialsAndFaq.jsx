"use client";

import { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Star,
  Quote,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Home,
  Factory,
} from "lucide-react";

export default function TestimonialsAndFaq({ onOpenQuoteModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  const testimonials = [
    {
      name: "Tariq Mahmood",
      role: "Plaza Manager, Commercial Complex",
      sector: "Commercial",
      icon: <Building2 size={16} />,
      rating: 5,
      comment:
        "HVAC Company installed our multi-zone VRF system across 4 commercial floors. Their technicians handled precision copper piping, pressure testing, and centralized control flawlessly. Outstanding on-time support whenever we need seasonal maintenance.",
    },
    {
      name: "Dr. Asim Farooq",
      role: "Homeowner, DHA Residential",
      sector: "Residential",
      icon: <Home size={16} />,
      rating: 5,
      comment:
        "Called HVAC Company on their 0306-1407243 number when both our inverter split units stopped cooling in the middle of a hot summer weekend. They arrived within 45 minutes, found the gas leak, repaired the copper joint, and had ice cold air running in no time.",
    },
    {
      name: "Engr. Kamran Siddiqui",
      role: "Operations Head, Food Processing Facility",
      sector: "Industrial",
      icon: <Factory size={16} />,
      rating: 5,
      comment:
        "For our cold room and blast freezer facilities, thermal consistency is critical. HVAC Company manages our industrial chillers, compressors, and 3-phase electrical distribution panels. Highly professional, certified, and dependable team.",
    },
  ];

  const faqs = [
    {
      q: "How quickly can HVAC Company dispatch technicians for an emergency breakdown?",
      a: "Our emergency mobile response squads operate 24 hours a day, 7 days a week. For emergency call-outs within our primary service zones, our licensed technicians typically arrive on-site within 30 to 60 minutes with diagnostic equipment and common replacement components.",
    },
    {
      q: "What types and brands of AC compressors do you repair?",
      a: "We service and overhaul all types of compressors: Rotary, Scroll, Screw, Semi-Hermetic, and Reciprocating units. We handle all major brands including Gree, Haier, Daikin, Mitsubishi, LG, Carrier, Panasonic, Kenwood, Pel, Orient, and industrial Copeland/Bitzer systems.",
    },
    {
      q: "Do you design and install complete VRF / VRV commercial projects?",
      a: "Yes. We offer complete turnkey engineering for VRF and VRV systems: computer-assisted heat load calculations, schematic copper piping layout, indoor cassette/ducted unit placement, outdoor multi-split condenser mounting, vacuum pressure testing, and smart BMS controller integration.",
    },
    {
      q: "What electrical work do you handle for residential and industrial properties?",
      a: "Our certified electricians handle everything from complete conduit wiring, DB dressing, and circuit breaker installations, to 3-phase load calculation, phase balancing, earthing resistance testing, and industrial motor control panels (MCC / VFDs).",
    },
    {
      q: "How can I request a quote or contact your team?",
      a: "You can reach us immediately by phone at 0306-1407243, 0322-4152778, or 0321-1155955. You can also click the floating WhatsApp button for an instant response, or click 'Free Quote' to specify your project scope for a detailed written estimate.",
    },
  ];

  return (
    <section className="testimonials-faq-section" id="faq">
      <div className="container">
        {/* Testimonials Block */}
        <div className="testi-header">
          <div className="section-tag">
            <Star size={14} />
            <span>Client Feedback</span>
          </div>
          <h2 className="section-title">
            Trusted by Homes & <span className="highlight-blue">Businesses</span>
          </h2>
          <p className="section-subtitle">
            See what property managers, residential owners, and factory supervisors say
            about our service commitment.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testi-card">
              <div className="testi-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled" />
                ))}
              </div>

              <p className="testi-text">&ldquo;{t.comment}&rdquo;</p>

              <div className="testi-author-row">
                <div className="author-avatar">
                  <span>{t.name.charAt(0)}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{t.name}</h4>
                  <span className="author-role">{t.role}</span>
                  <div className="author-sector">
                    {t.icon}
                    <span>{t.sector} Sector</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Block */}
        <div className="faq-container">
          <div className="faq-header-center">
            <div className="section-tag orange">
              <HelpCircle size={14} />
              <span>Got Questions?</span>
            </div>
            <h2 className="section-title">
              Frequently Asked <span className="highlight-orange">Questions</span>
            </h2>
            <p className="section-subtitle">
              Clear answers to the most common questions about our HVAC, refrigeration, and
              electrical services.
            </p>
          </div>

          <div className="faq-accordion-stack">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="q-number">0{idx + 1}</span>
                    <span className="q-text">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`q-chevron ${isOpen ? "rotate" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="faq-answer-panel">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-faq-section {
          padding: 5rem 0;
          background: #ffffff;
        }

        .testi-header,
        .faq-header-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 3rem;
        }

        .highlight-blue {
          color: #0b57d0;
        }

        .highlight-orange {
          color: #ff5722;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .testi-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-lg);
          padding: 2rem 1.65rem;
          display: flex;
          flex-direction: column;
          transition: var(--transition);
        }

        .testi-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          background: #ffffff;
          border-color: #38bdf8;
        }

        .testi-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 1.15rem;
        }

        :global(.star-filled) {
          color: #f59e0b;
          fill: #f59e0b;
        }

        .testi-text {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 1.5rem;
          flex-grow: 1;
          font-style: italic;
        }

        .testi-author-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          border-top: 1px solid #e2e8f0;
          padding-top: 1.15rem;
        }

        .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #08214d 0%, #0b57d0 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.1rem;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: #08214d;
        }

        .author-role {
          font-size: 0.78rem;
          color: #64748b;
        }

        .author-sector {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          color: #ff5722;
          font-weight: 700;
          margin-top: 0.15rem;
        }

        /* FAQ */
        .faq-container {
          max-width: 820px;
          margin: 0 auto;
        }

        .faq-accordion-stack {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .faq-item {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition);
        }

        .faq-item.open {
          border-color: #0b57d0;
          box-shadow: var(--shadow-md);
          background: #ffffff;
        }

        .faq-question-btn {
          width: 100%;
          text-align: left;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.05rem;
          font-weight: 700;
          color: #08214d;
        }

        .q-number {
          font-size: 0.85rem;
          font-weight: 800;
          color: #0b57d0;
          background: rgba(11, 87, 208, 0.1);
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-sm);
        }

        .q-text {
          flex-grow: 1;
        }

        :global(.q-chevron) {
          color: #64748b;
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }

        :global(.q-chevron.rotate) {
          transform: rotate(180deg);
          color: #0b57d0;
        }

        .faq-answer-panel {
          padding: 0 1.5rem 1.35rem 3.5rem;
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.65;
        }
      `}</style>
    </section>
  );
}
