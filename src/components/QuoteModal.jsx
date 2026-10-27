"use client";

import { useState } from "react";
import {
  X,
  MessageCircle,
  Phone,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
} from "lucide-react";

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "AC Installation & Maintenance",
    sector: "Residential",
    location: "",
    details: "",
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const services = [
    "AC Installation & Maintenance (Split / Cassette / Ducted)",
    "VRF / VRV Systems (Design / Install / AMC)",
    "Compressor Repairing (All Brands)",
    "Refrigeration Service (Cold Room / Freezer / Chiller)",
    "Electrical Work (Wiring / Panels / DB Dressing)",
    "Troubleshooting & 24/7 Breakdown Repair",
  ];

  const formatMessage = () => {
    return (
      `*HVAC COMPANY - SERVICE QUOTE REQUEST*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${formData.name || "Customer"}\n` +
      `📞 *Phone:* ${formData.phone || "Not specified"}\n` +
      `🛠️ *Service:* ${formData.service}\n` +
      `🏢 *Sector:* ${formData.sector}\n` +
      `📍 *Location:* ${formData.location || "Not specified"}\n` +
      `📝 *Details:* ${formData.details || "Need inspection and quote"}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `*Requested via HVAC Company Website*`
    );
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const msg = formatMessage();
    const waUrl = `https://wa.me/923061407243?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const handleCopy = () => {
    const msg = formatMessage();
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-head">
          <div className="head-text">
            <span className="modal-tag">Instant Quote Request</span>
            <h2 className="modal-title">Get a Free Estimate</h2>
            <p className="modal-sub">
              Direct connection with our senior HVAC & Electrical estimators.
            </p>
          </div>

          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {submitted ? (
          <div className="success-view">
            <div className="success-icon">
              <CheckCircle2 size={48} />
            </div>
            <h3>Thank You!</h3>
            <p>
              Your quote request was transferred to WhatsApp! Our technicians will
              respond to your inquiry within minutes.
            </p>
            <button onClick={onClose} className="btn btn-primary">
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSubmit} className="quote-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ali"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0300-1234567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="form-group full-width">
                <label>Select Required Service *</label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  {services.map((s, idx) => (
                    <option key={idx} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Property / Sector Type</label>
                <select
                  value={formData.sector}
                  onChange={(e) =>
                    setFormData({ ...formData, sector: e.target.value })
                  }
                >
                  <option value="Residential">Residential (Home / Flat)</option>
                  <option value="Commercial">Commercial (Office / Plaza / Shop)</option>
                  <option value="Industrial">Industrial (Factory / Warehouse / Plant)</option>
                </select>
              </div>

              <div className="form-group">
                <label>City / Location Area</label>
                <input
                  type="text"
                  placeholder="e.g. Gulberg, Lahore"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </div>

              <div className="form-group full-width">
                <label>Issue Description or Scope (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the AC issue, brand, unit tonnage, panel fault or installation scope..."
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                ></textarea>
              </div>
            </div>

            <div className="modal-trust-row">
              <ShieldCheck size={16} className="trust-ico" />
              <span>100% Free Consultation • No Obligation • 24/7 Available</span>
            </div>

            <div className="form-actions-stack">
              <button type="submit" className="btn btn-whatsapp submit-wa-btn">
                <MessageCircle size={20} />
                <span>Send Quote Request on WhatsApp</span>
              </button>

              <div className="aux-actions">
                <a href="tel:+923061407243" className="btn btn-outline call-direct">
                  <Phone size={16} />
                  <span>Call Directly: 0306-1407243</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn btn-outline copy-text-btn"
                >
                  {copied ? (
                    <>
                      <Check size={16} style={{ color: "#22c55e" }} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(5, 20, 48, 0.85);
          backdrop-filter: blur(8px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          overflow-y: auto;
        }

        .modal-container {
          background: #ffffff;
          border-radius: var(--radius-lg);
          max-width: 580px;
          width: 100%;
          box-shadow: var(--shadow-xl);
          border: 1px solid #cbd5e1;
          overflow: hidden;
          animation: floatSlow 0.25s ease-out;
        }

        .modal-head {
          background: linear-gradient(135deg, #08214d 0%, #0b57d0 100%);
          color: #ffffff;
          padding: 1.5rem 1.75rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
        }

        .modal-tag {
          font-size: 0.75rem;
          font-weight: 800;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 0.25rem;
        }

        .modal-title {
          font-size: 1.6rem;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .modal-sub {
          font-size: 0.85rem;
          color: #e2e8f0;
        }

        .close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .close-btn:hover {
          background: #ff5722;
        }

        .quote-form {
          padding: 1.75rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        @media (min-width: 540px) {
          .form-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .full-width {
            grid-column: span 2;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #1e293b;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.65rem 0.85rem;
          border: 1.5px solid #cbd5e1;
          border-radius: var(--radius-sm);
          font-family: inherit;
          font-size: 0.9rem;
          color: #0f172a;
          background: #f8fafc;
          transition: var(--transition);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #0b57d0;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(11, 87, 208, 0.15);
        }

        .modal-trust-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: #475569;
          margin-bottom: 1.25rem;
          background: #f1f5f9;
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
        }

        :global(.trust-ico) {
          color: #22c55e;
          flex-shrink: 0;
        }

        .form-actions-stack {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .submit-wa-btn {
          width: 100%;
          font-size: 1rem;
          padding: 0.85rem 1.25rem;
        }

        .aux-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }

        .call-direct,
        .copy-text-btn {
          font-size: 0.82rem;
          padding: 0.55rem 0.65rem;
        }

        .success-view {
          padding: 3rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon {
          color: #22c55e;
        }

        .success-view h3 {
          font-size: 1.5rem;
          color: #08214d;
        }

        .success-view p {
          color: #64748b;
          font-size: 0.95rem;
          max-width: 400px;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
