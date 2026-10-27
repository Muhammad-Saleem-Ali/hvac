"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Camera,
  Maximize2,
  X,
  ChevronRight,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function ProjectGallery({ onOpenQuoteModal }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: "ac-install",
      title: "AC Installation & Servicing",
      category: "AC INSTALLATION",
      image: "/images/ac-service.jpg",
      scope: "Commercial & Rooftop Multi-Split Systems",
      desc: "High-precision refrigeration line vacuuming, leak check, and multi-unit condenser setup with digital manifold diagnostic calibration.",
    },
    {
      id: "cold-room",
      title: "Cold Room & Walk-In Freezer",
      category: "COLD ROOM & FREEZER",
      image: "/images/cold-room.jpg",
      scope: "Industrial Cold Storage & Food Processing",
      desc: "Turnkey sub-zero refrigeration installation featuring insulated PUF panels, heavy-duty stainless steel cold doors, and digital cooling controllers.",
    },
    {
      id: "electrical-work",
      title: "Electrical Panel & DB Dressing",
      category: "ELECTRICAL WORK",
      image: "/images/electrical-work.jpg",
      scope: "3-Phase Industrial Breakers & Cable Management",
      desc: "Professional distribution board wiring, contactor installations, earthing protection, and color-coded circuit load balancing.",
    },
    {
      id: "vrf-climate",
      title: "VRF Ceiling Cassette System",
      category: "VRF / VRV SYSTEMS",
      image: "/images/vrf-systems.jpg",
      scope: "Corporate Office & Commercial Plaza",
      desc: "Energy-efficient 4-way cassette indoor units with whisper-quiet airflow, integrated drainage pumps, and centralized inverter climate control.",
    },
  ];

  return (
    <section className="gallery-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="gallery-head">
          <div className="section-tag">
            <Camera size={14} />
            <span>Field Showcase</span>
          </div>

          <h2 className="section-title">
            Our Work in <span className="highlight">Action</span>
          </h2>

          <p className="section-subtitle">
            Browse our real-world HVAC installations, industrial refrigeration facilities,
            and certified electrical wiring projects.
          </p>
        </div>

        {/* Gallery 4-Card Grid (Matching Screenshot 2) */}
        <div className="gallery-grid">
          {projects.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedImage(item)}
            >
              <div className="card-media">
                <Image
                  src={item.image}
                  alt={`${item.title} - ${item.scope} by HVAC Company`}
                  width={400}
                  height={260}
                  className="gallery-img"
                />
                <div className="media-overlay">
                  <div className="zoom-btn">
                    <Maximize2 size={20} />
                  </div>
                  <span className="click-hint">Click to enlarge</span>
                </div>
                <div className="category-pill">{item.category}</div>
              </div>

              <div className="card-caption">
                <span className="caption-scope">{item.scope}</span>
                <h3 className="caption-title">{item.title}</h3>
                <p className="caption-desc">{item.desc}</p>
                <div className="caption-footer">
                  <span className="view-link">
                    <span>Inspect Details</span>
                    <ChevronRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="lightbox-backdrop"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="lightbox-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close Preview"
              >
                <X size={24} />
              </button>

              <div className="lightbox-img-wrap">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  width={700}
                  height={400}
                  className="lightbox-img"
                />
              </div>

              <div className="lightbox-body">
                <span className="lightbox-cat">{selectedImage.category}</span>
                <h3 className="lightbox-title">{selectedImage.title}</h3>
                <p className="lightbox-scope">{selectedImage.scope}</p>
                <p className="lightbox-text">{selectedImage.desc}</p>

                <div className="lightbox-action-row">
                  <a
                    href={`https://wa.me/923061407243?text=Hello%20HVAC%20Company%2C%20I%20am%20interested%20in%20a%20project%20like%20${encodeURIComponent(
                      selectedImage.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageCircle size={18} />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      onOpenQuoteModal();
                    }}
                    className="btn btn-orange"
                  >
                    <Sparkles size={16} />
                    <span>Request Similar Quote</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .gallery-section {
          padding: 5rem 0;
          background: #f1f5f9;
        }

        .gallery-head {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .highlight {
          color: #0b57d0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .gallery-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: var(--transition);
        }

        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl);
          border-color: #38bdf8;
        }

        .card-media {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #08214d;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-card:hover .gallery-img {
          transform: scale(1.08);
        }

        .media-overlay {
          position: absolute;
          inset: 0;
          background: rgba(8, 33, 77, 0.55);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          opacity: 0;
          transition: var(--transition);
        }

        .gallery-card:hover .media-overlay {
          opacity: 1;
        }

        .zoom-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          color: #08214d;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .click-hint {
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .category-pill {
          position: absolute;
          bottom: 0.85rem;
          left: 0.85rem;
          background: #08214d;
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px solid #38bdf8;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        .card-caption {
          padding: 1.35rem 1.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .caption-scope {
          font-size: 0.75rem;
          font-weight: 700;
          color: #ff5722;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.3rem;
        }

        .caption-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #08214d;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .caption-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .caption-footer {
          border-top: 1px solid #f1f5f9;
          padding-top: 0.75rem;
        }

        .view-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: #0b57d0;
          font-size: 0.85rem;
          font-weight: 700;
        }

        /* Lightbox */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(5, 20, 48, 0.88);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .lightbox-dialog {
          background: #ffffff;
          border-radius: var(--radius-lg);
          max-width: 680px;
          width: 100%;
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow-xl);
          animation: floatSlow 0.3s ease-out;
        }

        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.65);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .lightbox-close:hover {
          background: #ff5722;
        }

        .lightbox-img-wrap {
          height: 340px;
          background: #000;
        }

        .lightbox-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .lightbox-body {
          padding: 1.75rem;
        }

        .lightbox-cat {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          color: #0b57d0;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        .lightbox-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #08214d;
          margin-bottom: 0.25rem;
        }

        .lightbox-scope {
          font-size: 0.9rem;
          font-weight: 600;
          color: #ff5722;
          margin-bottom: 0.85rem;
        }

        .lightbox-text {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .lightbox-action-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
      `}</style>
    </section>
  );
}
