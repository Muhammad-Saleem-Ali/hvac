"use client";

import { useState } from "react";
import {
  MessageCircle,
  X,
  Phone,
  Send,
  Sparkles,
  CheckCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function WhatsAppWidget({ onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const quickPrompts = [
    { label: "❄️ AC Service / Gas Charging", text: "Hello HVAC Company, I need AC servicing and gas check." },
    { label: "⚡ Electrical Short / Panel Issue", text: "Hello HVAC Company, I have an urgent electrical breaker / panel issue." },
    { label: "🏢 Commercial VRF / Chiller", text: "Hello HVAC Company, I want to discuss a commercial VRF / Chiller project." },
    { label: "🧊 Cold Room / Deep Freezer", text: "Hello HVAC Company, I need cold storage / freezer refrigeration service." },
    { label: "🚨 Urgent Emergency Repair", text: "EMERGENCY: I need an emergency technician on-site right away." },
  ];

  const handleSend = (text) => {
    const finalMsg = text || customMsg || "Hello HVAC Company, I need service assistance.";
    const waUrl = `https://wa.me/923061407243?text=${encodeURIComponent(finalMsg)}`;
    window.open(waUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="floating-widget-wrapper">
      {/* Floating Chat Box */}
      {isOpen && (
        <div className="widget-popup">
          {/* Header */}
          <div className="popup-header">
            <div className="agent-info">
              <div className="avatar-wrap">
                <span className="online-indicator"></span>
                <span className="avatar-initials">HVAC</span>
              </div>
              <div className="agent-details">
                <h4 className="agent-name">HVAC Company</h4>
                <span className="agent-status">Online • Typically replies in 2 mins</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="popup-close-btn"
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="popup-body">
            <div className="chat-bubble">
              <p>
                Hello! 👋 Welcome to <strong>HVAC Company</strong>.
                How can our certified team assist your home or facility today?
              </p>
              <span className="bubble-time">Just now</span>
            </div>

            <div className="quick-prompts-label">Quickly select your issue:</div>

            <div className="prompts-list">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(p.text)}
                  className="prompt-chip"
                >
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input */}
          <div className="popup-footer">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(customMsg);
              }}
              className="chat-input-form"
            >
              <input
                type="text"
                placeholder="Type your message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="chat-text-input"
              />
              <button
                type="submit"
                className="chat-send-btn"
                aria-label="Send to WhatsApp"
              >
                <Send size={16} />
              </button>
            </form>

            <div className="popup-sub-bar">
              <a href="tel:+923061407243" className="sub-call-link">
                <Phone size={13} />
                <span>Call Hotline: 0306-1407243</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Buttons Bar */}
      <div className="floating-triggers">
        {/* Mobile Fast Call Button */}
        <a
          href="tel:+923061407243"
          className="floating-call-btn"
          title="Direct Call 0306-1407243"
          aria-label="Call HVAC Company"
        >
          <Phone size={22} />
        </a>

        {/* WhatsApp Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="floating-wa-btn"
          aria-label="Open WhatsApp Chat"
          title="Chat on WhatsApp"
        >
          <div className="wa-icon-cluster">
            {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
          </div>
          <span className="unread-dot"></span>
        </button>
      </div>

      <style jsx>{`
        .floating-widget-wrapper {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 2500;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
        }

        .floating-triggers {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        /* Call Button */
        .floating-call-btn {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0b57d0 0%, #0284c7 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 18px rgba(11, 87, 208, 0.45);
          transition: var(--transition);
        }

        .floating-call-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 24px rgba(11, 87, 208, 0.6);
        }

        /* WhatsApp Button */
        .floating-wa-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25d366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 22px rgba(37, 211, 102, 0.55);
          transition: var(--transition);
          position: relative;
          animation: pulseGlow 2.5s infinite;
        }

        .floating-wa-btn:hover {
          transform: scale(1.08);
          background: #1ebd5a;
        }

        .unread-dot {
          position: absolute;
          top: 3px;
          right: 3px;
          width: 14px;
          height: 14px;
          background: #ff5722;
          border: 2px solid #ffffff;
          border-radius: 50%;
        }

        /* Popup Box */
        .widget-popup {
          width: 340px;
          max-width: 90vw;
          background: #ffffff;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
          border: 1px solid #cbd5e1;
          overflow: hidden;
          animation: floatSlow 0.25s ease-out;
        }

        .popup-header {
          background: #128c7e;
          color: #ffffff;
          padding: 1rem 1.15rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .agent-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .avatar-wrap {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffffff;
          color: #08214d;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          font-size: 0.8rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .online-indicator {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 11px;
          height: 11px;
          background: #25d366;
          border: 2px solid #ffffff;
          border-radius: 50%;
        }

        .agent-name {
          font-size: 0.95rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .agent-status {
          font-size: 0.7rem;
          color: #d1fae5;
          display: block;
        }

        .popup-close-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .popup-close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .popup-body {
          padding: 1.15rem;
          background: #efeae2;
          max-height: 300px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .chat-bubble {
          background: #ffffff;
          padding: 0.85rem 1rem;
          border-radius: 0 12px 12px 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          font-size: 0.85rem;
          color: #1e293b;
          line-height: 1.45;
          position: relative;
        }

        .bubble-time {
          display: block;
          font-size: 0.65rem;
          color: #94a3b8;
          text-align: right;
          margin-top: 0.35rem;
        }

        .quick-prompts-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .prompts-list {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .prompt-chip {
          text-align: left;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          color: #0f172a;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .prompt-chip:hover {
          background: #25d366;
          color: #ffffff;
          border-color: #25d366;
          transform: translateX(4px);
        }

        .popup-footer {
          padding: 0.85rem 1rem;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
        }

        .chat-input-form {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .chat-text-input {
          flex: 1;
          padding: 0.6rem 0.85rem;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-family: inherit;
        }

        .chat-text-input:focus {
          outline: none;
          border-color: #25d366;
        }

        .chat-send-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #25d366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-send-btn:hover {
          background: #1ebd5a;
        }

        .popup-sub-bar {
          margin-top: 0.55rem;
          text-align: center;
        }

        .sub-call-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #0b57d0;
        }

        .sub-call-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
