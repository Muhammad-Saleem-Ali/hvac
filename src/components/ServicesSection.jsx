"use client";

import { useState } from "react";
import {
  Airplay,
  Fan,
  Cpu,
  Zap,
  Snowflake,
  Wrench,
  Check,
  ChevronRight,
  MessageCircle,
  Phone,
  ArrowUpRight,
  Shield,
  Layers,
} from "lucide-react";

export default function ServicesSection({ onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      id: "ac-install",
      category: "cooling",
      title: "AC Installation & Maintenance",
      tagline: "Split • Cassette • Ducted • Package Units",
      desc: "Complete turnkey installation and scheduled preventative maintenance for all air conditioning configurations with precision ducting and vacuuming.",
      icon: <Airplay size={26} />,
      badge: "Most Popular",
      features: [
        "Split, Cassette, Floor-Standing & Ducted Units",
        "Package Units for Commercial & Industrial buildings",
        "Leak testing, nitrogen pressure check & gas top-up",
        "Seasonal coil deep cleaning & filter sanitization",
        "Annual Maintenance Contracts (AMC) available",
      ],
      whatsappMsg:
        "Hello HVAC Company, I need an inquiry/quote for AC Installation & Maintenance.",
    },
    {
      id: "vrf-systems",
      category: "cooling",
      title: "VRF / VRV Systems",
      tagline: "Design • Installation • Service",
      desc: "High-efficiency Variable Refrigerant Flow & Volume systems engineered for corporate towers, luxury residences, commercial complexes, and institutions.",
      icon: <Fan size={26} />,
      badge: "Commercial Grade",
      features: [
        "Custom engineering, heat load calculations & piping design",
        "Multi-zone individual temperature climate control",
        "Centralized smart BMS controller integration",
        "Comprehensive commissioning, diagnostics & servicing",
        "Inverter multi-split efficiency optimization",
      ],
      whatsappMsg:
        "Hello HVAC Company, I want to discuss a VRF / VRV System project design and installation.",
    },
    {
      id: "compressor-repair",
      category: "cooling",
      title: "Compressor Repairing",
      tagline: "All Types & Brands",
      desc: "Authorized-level overhaul, motor rewinding, valve rebuilds, and electrical diagnostic repairs for all residential and industrial HVAC compressors.",
      icon: <Cpu size={26} />,
      badge: "All Major Brands",
      features: [
        "Rotary, Scroll, Screw & Reciprocating Compressors",
        "DC Inverter PCB board & driver module repairs",
        "Internal valve plate, winding & bearing replacements",
        "Oil replacement, acid flushing & chemical decontamination",
        "Gree, Haier, Daikin, Mitsubishi, LG, Carrier & more",
      ],
      whatsappMsg:
        "Hello HVAC Company, I need Compressor Repair assistance for my AC / cooling unit.",
    },
    {
      id: "refrigeration",
      category: "refrigeration",
      title: "Refrigeration Service",
      tagline: "Cold Rooms • Freezers • Chillers",
      desc: "Turnkey cold chain solutions, walk-in cold rooms, deep freezer facilities, and industrial liquid chillers engineered for precise sub-zero thermal retention.",
      icon: <Snowflake size={26} />,
      badge: "Industrial & Food Service",
      features: [
        "Modular PUF panel cold storage & freezer rooms",
        "Walk-in commercial coolers & display chillers",
        "Industrial water & brine chillers for factories",
        "Defrost heaters, digital thermostat & controller calibration",
        "Emergency cooling restoration & leak repairs",
      ],
      whatsappMsg:
        "Hello HVAC Company, I need Cold Room / Freezer / Chiller refrigeration service.",
    },
    {
      id: "electrical-work",
      category: "electrical",
      title: "Electrical Work",
      tagline: "Wiring • Panels • Installation • Repair",
      desc: "Certified electrical engineering covering low & medium voltage distribution, distribution boards (DB), panel fabrication, load balancing, and rewiring.",
      icon: <Zap size={26} />,
      badge: "Certified Electricians",
      features: [
        "Complete residential, commercial & factory conduit wiring",
        "Main Distribution Boards (MDB), Sub-DB & breaker setup",
        "3-phase load calculation, phase balancing & harmonics check",
        "Motor control centers (MCC), contactors & VFDs",
        "Earthing / grounding systems & surge protection",
      ],
      whatsappMsg:
        "Hello HVAC Company, I need certified Electrical Work / Panel wiring services.",
    },
    {
      id: "troubleshooting",
      category: "repair",
      title: "Troubleshooting & General Services",
      tagline: "Fast • Professional • Affordable",
      desc: "Rapid-response emergency diagnostic and repairing service for all residential, commercial, and industrial equipment breakdowns. Available 24/7.",
      icon: <Wrench size={26} />,
      badge: "24/7 Emergency",
      features: [
        "Instant diagnosis with digital multimeters & manifold gauges",
        "Emergency power trip, breaker failure & short circuit repair",
        "Capacitor, fan motor, sensor & thermostat replacements",
        "Cooling coil copper welding & refrigerant leak repairs",
        "Affordable pricing with 100% genuine guaranteed parts",
      ],
      whatsappMsg:
        "Hello HVAC Company, I have an urgent breakdown / troubleshooting requirement.",
    },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((s) => s.category === activeTab);

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-header-center">
          <div className="section-tag">
            <Layers size={14} />
            <span>Comprehensive Solutions</span>
          </div>

          <h2 className="section-title">
            Our Professional <span className="highlight">Services</span>
          </h2>

          <p className="section-subtitle">
            Directly addressing every heating, cooling, refrigeration, and electrical
            need with licensed technicians, modern diagnostic instruments, and
            guaranteed workmanship.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="filter-tabs">
            <button
              onClick={() => setActiveTab("all")}
              className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
            >
              All Services ({services.length})
            </button>
            <button
              onClick={() => setActiveTab("cooling")}
              className={`tab-btn ${activeTab === "cooling" ? "active" : ""}`}
            >
              HVAC & Air Conditioning
            </button>
            <button
              onClick={() => setActiveTab("electrical")}
              className={`tab-btn ${activeTab === "electrical" ? "active" : ""}`}
            >
              Electrical & Panels
            </button>
            <button
              onClick={() => setActiveTab("refrigeration")}
              className={`tab-btn ${activeTab === "refrigeration" ? "active" : ""}`}
            >
              Cold Rooms & Freezers
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-top-row">
                <div className="icon-container">{service.icon}</div>
                <span className="service-badge">{service.badge}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <div className="service-tagline">{service.tagline}</div>
              <p className="service-desc">{service.desc}</p>

              <div className="features-checklist">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="feat-item">
                    <Check size={15} className="feat-check" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="card-actions-row">
                <a
                  href={`https://wa.me/923061407243?text=${encodeURIComponent(
                    service.whatsappMsg
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp service-act-btn"
                >
                  <MessageCircle size={16} />
                  <span>Book on WhatsApp</span>
                </a>

                <button
                  onClick={onOpenQuoteModal}
                  className="btn btn-outline service-quote-btn"
                  type="button"
                >
                  <span>Free Quote</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="service-emergency-strip">
          <div className="strip-left">
            <div className="strip-icon-circle">
              <Phone size={22} />
            </div>
            <div>
              <h4>Need an Immediate Emergency Technician?</h4>
              <p>Our rapid mobile team is on standby 24/7 across residential & industrial sites.</p>
            </div>
          </div>

          <div className="strip-actions">
            <a href="tel:+923061407243" className="btn btn-primary">
              <Phone size={16} />
              <span>Call 0306-1407243</span>
            </a>
            <a
              href="https://wa.me/923061407243?text=EMERGENCY%3A%20I%20need%20urgent%20HVAC%2FElectrical%20support%20right%20now."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Emergency</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 5rem 0;
          background: #f8fafc;
          position: relative;
        }

        .services-header-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .highlight {
          color: #0b57d0;
        }

        .filter-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin-top: 1rem;
        }

        .tab-btn {
          padding: 0.55rem 1.15rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          color: #475569;
          transition: var(--transition);
        }

        .tab-btn:hover {
          background: #f1f5f9;
          color: #0b57d0;
          border-color: #cbd5e1;
        }

        .tab-btn.active {
          background: #08214d;
          color: #ffffff;
          border-color: #08214d;
          box-shadow: 0 4px 12px rgba(8, 33, 77, 0.2);
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .service-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: var(--transition);
          position: relative;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: #38bdf8;
        }

        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .icon-container {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(11, 87, 208, 0.1) 0%, rgba(2, 132, 199, 0.15) 100%);
          color: #0b57d0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(11, 87, 208, 0.2);
        }

        .service-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          background: #e0f2fe;
          color: #0284c7;
        }

        .service-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #08214d;
          margin-bottom: 0.25rem;
          line-height: 1.25;
        }

        .service-tagline {
          font-size: 0.8rem;
          font-weight: 700;
          color: #ff5722;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.85rem;
        }

        .service-desc {
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .features-checklist {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
          border-top: 1px dashed #e2e8f0;
          padding-top: 1.15rem;
        }

        .feat-item {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.85rem;
          color: #334155;
          line-height: 1.4;
        }

        :global(.feat-check) {
          color: #0284c7;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .card-actions-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: auto;
        }

        .service-act-btn {
          flex: 1;
          font-size: 0.85rem;
          padding: 0.65rem 0.8rem;
        }

        .service-quote-btn {
          font-size: 0.82rem;
          padding: 0.65rem 0.85rem;
        }

        /* Emergency Strip */
        .service-emergency-strip {
          margin-top: 3.5rem;
          background: linear-gradient(135deg, #08214d 0%, #0c3866 100%);
          border-radius: var(--radius-lg);
          padding: 1.75rem 2rem;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #38bdf8;
          box-shadow: var(--shadow-lg);
        }

        @media (min-width: 860px) {
          .service-emergency-strip {
            flex-direction: row;
          }
        }

        .strip-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .strip-icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #ff5722;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(255, 87, 34, 0.4);
        }

        .strip-left h4 {
          font-size: 1.25rem;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .strip-left p {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .strip-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
      `}</style>
    </section>
  );
}
