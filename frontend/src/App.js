import { useEffect, useRef, useState } from "react";
import "@/App.css";

/* ─── Icon Components ─── */
const AlertTriangle = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>
  </svg>
);
const ShieldOff = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="m2 2 20 20"/><path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-2.34 5.86-4.32"/><path d="M9.3 3.28A1.17 1.17 0 0 1 12.76 3C14.51 4.81 17 6 19 6a1 1 0 0 1 1 1v7c0 .55-.04 1.08-.12 1.6"/>
  </svg>
);
const UserX = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" x2="22" y1="8" y2="13"/><line x1="22" x2="17" y1="8" y2="13"/>
  </svg>
);

/* ─── Scroll Reveal Hook ─── */
function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
}

/* ─── Data ─── */
const problems = [
  {
    icon: AlertTriangle,
    title: "The Lead Quality Gap",
    subtitle: "You are paying for noise, not intent.",
    sections: [
      { label: "The Hard Reality", text: "Real estate portals excel at generating clicks, but a click is not a commitment. Most of the traffic you pay for consists of \u201Cwindow shoppers\u201D and accidental browsers." },
      { label: "The Pain", text: "Your team wastes 80% of their time chasing \u201Cghost leads\u201D who never pick up the phone. You are starving for quality in a sea of low-intent volume." },
      { label: "The Result", text: "High marketing spend, exhausted agents, and a CRM full of dead data." },
    ],
    quote: "\u201CZillow/OtoDom leads are often people who just want to see a house in an hour, not buy it.\u201D \u2014 Common Agent Complaint on Reddit.",
  },
  {
    icon: ShieldOff,
    title: "The Trust Friction",
    subtitle: "Static listings can\u2019t bridge the distance.",
    sections: [
      { label: "The Hard Reality", text: "International investors are ready to buy, but they are terrified of \u201CPhotoshop-real-estate.\u201D Static galleries and 2D tours (or even 3D/VR) don\u2019t provide the transparency needed for a cross-border commitment." },
      { label: "The Pain", text: "Distance creates hesitation. When a buyer can\u2019t \u201Cfeel\u201D the property or talk to you in real-time, the momentum dies. Silence is the ultimate deal-killer." },
      { label: "The Result", text: "You lose high-value commissions to local competitors because you couldn\u2019t build trust across 2,000 miles." },
    ],
  },
  {
    icon: UserX,
    title: "The Relationship Leak",
    subtitle: "You are building the portal\u2019s brand, not yours.",
    sections: [
      { label: "The Hard Reality", text: "Portals provide exposure, but they keep the relationship. You are often just a \u201CContact Agent\u201D button on a platform you don\u2019t own." },
      { label: "The Pain", text: "Every time you pay for a lead, you are \u201Crenting\u201D your own audience. If you stop paying, your visibility and your connection to the investor pool vanish instantly." },
      { label: "The Result", text: "You lack a proprietary database of high-intent investors. You are stuck in a cycle of rising portal fees with zero leverage." },
    ],
  },
];

/* ─── ProblemCard ─── */
function ProblemCard({ problem, index }) {
  const [ref, isVisible] = useScrollReveal();
  const Icon = problem.icon;
  return (
    <div ref={ref} data-testid={`problem-card-${index}`}
      className={`problem-card benefit-card-reveal ${isVisible ? "benefit-card-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}>
      <div className="problem-icon-wrap">
        <Icon className="problem-icon" style={{ color: "#FFF" }} />
      </div>
      <h3 className="problem-card-title">{problem.title}</h3>
      <p className="problem-card-subtitle">{problem.subtitle}</p>
      <div className="problem-sections">
        {problem.sections.map((s, i) => (
          <p key={i} className="problem-section-text">
            <span className="problem-section-label">{s.label}:</span>{" "}
            <span className="problem-section-body">{s.text}</span>
          </p>
        ))}
      </div>
      {problem.quote && (
        <div className="problem-quote-wrap">
          <p className="problem-quote">{problem.quote}</p>
        </div>
      )}
    </div>
  );
}

/* ─── App ─── */
function App() {
  return (
    <div className="estalara-root">
      <section className="problem-section" data-testid="problem-section">
        <div className="problem-container">
          <div className="problem-header">
            <p className="problem-label" data-testid="problem-label">The Problem</p>
            <h2 className="problem-heading" data-testid="problem-heading">
              Views don&rsquo;t sell properties. Buyers do.
            </h2>
            <p className="problem-subheading" data-testid="problem-subheading">
              Portals are great for discovery. They are terrible for closing.
            </p>
          </div>
          <div className="problem-grid" data-testid="problem-grid">
            {problems.map((p, i) => <ProblemCard key={i} problem={p} index={i} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
