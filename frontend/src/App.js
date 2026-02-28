import { useEffect, useRef, useState } from "react";
import "@/App.css";

/* ─── Icon Components (matching lucide-react style) ─── */
const Globe = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
    <path d="M2 12h20"/>
  </svg>
);

const Award = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>
    <circle cx="12" cy="8" r="6"/>
  </svg>
);

const Users = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const Target = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const Zap = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
  </svg>
);

/* ─── Benefits Data ─── */
const benefits = [
  {
    icon: Globe,
    title: "The buyers are there. Now they can find you.",
    description:
      "International investors are actively searching for properties in your market \u2014 and not finding you. Not because your listings aren\u2019t good. Because the portals you\u2019re paying for weren\u2019t built for cross-border transactions. Estalara is.",
    highlighted: false,
  },
  {
    icon: Award,
    title: "Your brand owns the channel. Not the portal.",
    description:
      "Buyers see your agency. Your logo. Your name. Estalara runs silently in the background. You stop renting visibility from platforms that keep the relationship. You start owning it.",
    highlighted: true,
  },
  {
    icon: Users,
    title: "One agent. One LIVE. Dozens of qualified investors.",
    description:
      "A single live showcase reaches serious buyers across four countries, answers their questions in real time, in their language \u2014 and tells you exactly who\u2019s ready to move. No international team required.",
    highlighted: false,
  },
  {
    icon: Target,
    title: "Walk into every call already knowing who\u2019s serious.",
    description:
      "A call, a tour, a follow-up - and nothing. Every agent knows that cost. Real-time intent scoring tracks watch time, questions, and engagement intensity so you spend time only on buyers who are ready to transact.",
    highlighted: false,
  },
  {
    icon: Zap,
    title: "Close in 19 days. Not 34.",
    description:
      "The average sales cycle drops by 40% when buyers can see, trust, and engage with a property before they ever book a flight. That\u2019s not just a stat - that\u2019s one extra commission per quarter, for every agent on your team.",
    highlighted: false,
  },
];

/* ─── BenefitCard Component ─── */
function BenefitCard({ benefit, index }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isHighlighted = benefit.highlighted;
  const Icon = benefit.icon;

  return (
    <div
      ref={cardRef}
      data-testid={`benefit-card-${index}`}
      className={`benefit-card-reveal ${isVisible ? "benefit-card-visible" : ""} ${
        isHighlighted ? "benefit-card-highlighted" : "benefit-card-normal"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
        borderRadius: "16px",
        padding: "clamp(24px, 3vw, 32px)",
      }}
    >
      <div
        className="benefit-icon-wrap"
        style={{
          background: isHighlighted ? "rgba(200, 169, 110, 0.2)" : "#F8F6F3",
        }}
      >
        <Icon
          className="benefit-icon"
          style={{ color: isHighlighted ? "#C8A96E" : "#1A1A1A" }}
        />
      </div>
      <h3
        className="benefit-title"
        style={{ color: isHighlighted ? "#FFFFFF" : "#1A1A1A" }}
      >
        {benefit.title}
      </h3>
      <p
        className="benefit-description"
        style={{ color: isHighlighted ? "#A8A8A8" : "#5C5C5C" }}
      >
        {benefit.description}
      </p>
    </div>
  );
}

/* ─── Main App ─── */
function App() {
  return (
    <div className="estalara-root">
      <section className="benefits-section" data-testid="benefits-section">
        <div className="benefits-container">
          {/* Section Header */}
          <div className="benefits-header">
            <h2 className="benefits-heading" data-testid="benefits-heading">
              You don't need more tools. You need better outcomes.
            </h2>
            <p className="benefits-subheading" data-testid="benefits-subheading">
              Estalara is not a feature set. It's a growth engine for agencies
              ready to compete globally.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="benefits-grid">
            {/* First row - 2 items */}
            <div className="benefits-row-2" data-testid="benefits-row-1">
              {benefits.slice(0, 2).map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} index={index} />
              ))}
            </div>

            {/* Second row - 3 items */}
            <div className="benefits-row-3" data-testid="benefits-row-2">
              {benefits.slice(2, 5).map((benefit, index) => (
                <BenefitCard key={index + 2} benefit={benefit} index={index + 2} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
