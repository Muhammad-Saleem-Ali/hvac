export default function Logo({ size = "default", variant = "light" }) {
  const isLarge = size === "lg";
  const isDark = variant === "dark";

  return (
    <div className={`brand-logo-component ${size} ${variant}`}>
      {/* Precision Vector Emblem matching Flyer Aesthetic */}
      <div className="logo-emblem">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="emblem-svg"
        >
          <defs>
            <linearGradient id="emblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#08214d" />
              <stop offset="100%" stopColor="#0b57d0" />
            </linearGradient>
            <linearGradient id="flameGrad" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#ff5722" />
              <stop offset="100%" stopColor="#ff9800" />
            </linearGradient>
            <linearGradient id="iceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          {/* Outer Badge Shield with Cyan Border */}
          <rect
            x="3"
            y="3"
            width="58"
            height="58"
            rx="16"
            fill="url(#emblemGrad)"
            stroke="#38bdf8"
            strokeWidth="2.5"
          />

          {/* Cooling Snowflake Left Half */}
          <path
            d="M 23 14 L 23 50 M 14 32 L 23 32 M 17 21 L 23 27 M 17 43 L 23 37"
            stroke="url(#iceGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Heating Flame Right Half */}
          <path
            d="M 33 48 C 30 42 32 36 36 32 C 37 36 40 37 42 34 C 45 40 45 46 41 49 C 39 51 35 51 33 48 Z"
            fill="url(#flameGrad)"
          />

          {/* Electric Power Bolt Across */}
          <path
            d="M 34 14 L 26 30 L 33 30 L 29 48 L 44 26 L 35 26 Z"
            fill="url(#boltGrad)"
            stroke="#08214d"
            strokeWidth="1"
          />

          {/* Service Wrench Accent */}
          <path
            d="M 48 18 C 46 16 43 16 41 18 L 45 22 L 43 24 L 39 20 C 37 22 37 25 39 27 L 47 35 C 48 36 50 36 51 35 L 53 33 C 54 32 54 30 53 29 Z"
            fill="#ffffff"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="logo-text-block">
        <div className="logo-name-row">
          <span className="name-hvac">HVAC</span>
          <span className="name-company">COMPANY</span>
        </div>
        
        {/* Dynamic Flame / Energy Swoosh Line */}
        <div className="swoosh-bar">
          <div className="swoosh-line"></div>
          <span className="swoosh-dot"></span>
        </div>

        <span className="logo-tagline">
          HEATING • COOLING • ELECTRICAL
        </span>
      </div>

      <style jsx>{`
        .brand-logo-component {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
          user-select: none;
        }

        .logo-emblem {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 4px 10px rgba(11, 87, 208, 0.3));
          transition: transform 0.3s ease;
        }

        .brand-logo-component:hover .logo-emblem {
          transform: scale(1.05) rotate(-2deg);
        }

        .emblem-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .logo-text-block {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-name-row {
          display: flex;
          align-items: baseline;
          gap: 0.35rem;
        }

        .name-hvac {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          color: #08214d;
        }

        .name-company {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          color: #0b57d0;
        }

        .dark .name-hvac {
          color: #ffffff;
        }

        .dark .name-company {
          color: #38bdf8;
        }

        /* Swoosh underline */
        .swoosh-bar {
          display: flex;
          align-items: center;
          gap: 3px;
          margin: 3px 0 3px;
        }

        .swoosh-line {
          height: 2.5px;
          flex: 1;
          max-width: 110px;
          background: linear-gradient(90deg, #ff5722 0%, #f59e0b 60%, #38bdf8 100%);
          border-radius: var(--radius-full);
        }

        .swoosh-dot {
          width: 4px;
          height: 4px;
          background: #ff5722;
          border-radius: 50%;
        }

        .logo-tagline {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ff5722;
          text-transform: uppercase;
        }

        .dark .logo-tagline {
          color: #fb923c;
        }

        /* Large size variant */
        .brand-logo-component.lg .logo-emblem {
          width: 64px;
          height: 64px;
        }

        .brand-logo-component.lg .name-hvac,
        .brand-logo-component.lg .name-company {
          font-size: 1.85rem;
        }

        .brand-logo-component.lg .logo-tagline {
          font-size: 0.75rem;
        }

        /* Mobile responsiveness */
        @media (max-width: 480px) {
          .brand-logo-component {
            gap: 0.6rem;
          }
          .logo-emblem {
            width: 42px;
            height: 42px;
            border-radius: 12px;
          }
          .name-hvac,
          .name-company {
            font-size: 1.25rem;
          }
          .logo-tagline {
            font-size: 0.58rem;
            letter-spacing: 0.05em;
          }
        }

        @media (max-width: 360px) {
          .brand-logo-component {
            gap: 0.45rem;
          }
          .logo-emblem {
            width: 36px;
            height: 36px;
            border-radius: 10px;
          }
          .name-hvac,
          .name-company {
            font-size: 1.1rem;
          }
          .logo-tagline {
            font-size: 0.5rem;
            letter-spacing: 0.03em;
          }
        }
      `}</style>
    </div>
  );
}
