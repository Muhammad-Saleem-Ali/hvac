export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HVACBusiness", "Electrician", "EmergencyService"],
        "@id": "https://hvaccompany.com/#business",
        "name": "HVAC Company",
        "legalName": "HVAC Company Heating • Cooling • Electrical",
        "url": "https://hvaccompany.com",
        "logo": "https://hvaccompany.com/icon.svg",
        "image": "https://hvaccompany.com/images/og-image.jpg",
        "description":
          "Professional 24/7 Heating, Ventilation, Air Conditioning, VRF Systems, Cold Room Freezers, and Industrial Electrical engineering across Residential, Commercial & Industrial sectors.",
        "telephone": "+923061407243",
        "priceRange": "$$",
        "currenciesAccepted": "PKR, USD",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer, EasyPaisa, JazzCash",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "addressCountry": "PK",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "31.5204",
          "longitude": "74.3587",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            "opens": "00:00",
            "closes": "23:59",
          },
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+923061407243",
            "contactType": "customer service",
            "contactOption": "TollFree",
            "areaServed": "PK",
            "availableLanguage": ["English", "Urdu"],
          },
          {
            "@type": "ContactPoint",
            "telephone": "+923224152778",
            "contactType": "technical support",
            "areaServed": "PK",
            "availableLanguage": ["English", "Urdu"],
          },
          {
            "@type": "ContactPoint",
            "telephone": "+923211155955",
            "contactType": "emergency",
            "areaServed": "PK",
            "availableLanguage": ["English", "Urdu"],
          },
        ],
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Residential Sector",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Commercial Sector & Plazas",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Industrial Plants & Cold Storage Facilities",
          },
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "HVAC & Electrical Core Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Air Conditioning Repair & Installation",
                "description":
                  "Inverter split unit mounting, refrigerant leak detection, chemical deep coil wash, capacitor testing, and cooling restoration.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "VRF & VRV Central AC Systems",
                "description":
                  "Multi-zone climate engineering, precision copper branch piping, BMS integration, and multi-split central installations.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Cold Rooms & Freezers",
                "description":
                  "Polyurethane thermal panel insulation, blast freezers, digital thermostatic controls, and meat/pharma cold storage.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Industrial AC Compressor Overhauls",
                "description":
                  "Rotary, Scroll, Screw, and Semi-Hermetic compressor diagnostics, mechanical valve rebuilds, and electrical rewind.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Industrial Electrical Solutions",
                "description":
                  "Conduit wiring, Distribution Board dressing, phase balancing, earthing resistance testing, and MCC/VFD panels.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "24/7 Emergency Support Dispatch",
                "description":
                  "Rapid 30-60 minute technician deployment for residential AC failures, commercial outages, and industrial chiller tripping.",
              },
            },
          ],
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "380",
          "bestRating": "5",
          "worstRating": "1",
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Tariq Mahmood",
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
            },
            "reviewBody":
              "HVAC Company installed our multi-zone VRF system across 4 commercial floors. Their technicians handled precision copper piping, pressure testing, and centralized control flawlessly.",
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Dr. Asim Farooq",
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
            },
            "reviewBody":
              "Called HVAC Company on their 0306-1407243 number when both our inverter split units stopped cooling. They arrived within 45 minutes, found the gas leak, repaired the joint, and had ice cold air running.",
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Engr. Kamran Siddiqui",
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
            },
            "reviewBody":
              "For our cold room and blast freezer facilities, thermal consistency is critical. HVAC Company manages our industrial chillers, compressors, and 3-phase electrical distribution panels. Highly professional team.",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://hvaccompany.com/#website",
        "name": "HVAC Company",
        "url": "https://hvaccompany.com",
        "description":
          "Your Comfort Our Priority — 24/7 Expert Heating, Cooling, VRF, Cold Room & Industrial Electrical Solutions",
        "publisher": {
          "@id": "https://hvaccompany.com/#business",
        },
        "inLanguage": "en",
      },
      {
        "@type": "FAQPage",
        "@id": "https://hvaccompany.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can HVAC Company dispatch technicians for an emergency breakdown?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Our emergency mobile response squads operate 24 hours a day, 7 days a week. For emergency call-outs within our primary service zones, our licensed technicians typically arrive on-site within 30 to 60 minutes with diagnostic equipment and common replacement components.",
            },
          },
          {
            "@type": "Question",
            "name": "What types and brands of AC compressors do you repair?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We service and overhaul all types of compressors: Rotary, Scroll, Screw, Semi-Hermetic, and Reciprocating units. We handle all major brands including Gree, Haier, Daikin, Mitsubishi, LG, Carrier, Panasonic, Kenwood, Pel, Orient, and industrial Copeland/Bitzer systems.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you design and install complete VRF / VRV commercial projects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. We offer complete turnkey engineering for VRF and VRV systems: computer-assisted heat load calculations, schematic copper piping layout, indoor cassette/ducted unit placement, outdoor multi-split condenser mounting, vacuum pressure testing, and smart BMS controller integration.",
            },
          },
          {
            "@type": "Question",
            "name": "What electrical work do you handle for residential and industrial properties?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Our certified electricians handle everything from complete conduit wiring, DB dressing, and circuit breaker installations, to 3-phase load calculation, phase balancing, earthing resistance testing, and industrial motor control panels (MCC / VFDs).",
            },
          },
          {
            "@type": "Question",
            "name": "How can I request a quote or contact your team?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "You can reach us immediately by phone at 0306-1407243, 0322-4152778, or 0321-1155955. You can also click the floating WhatsApp button for an instant response, or click 'Free Quote' to specify your project scope for a detailed written estimate.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
