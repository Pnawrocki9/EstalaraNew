import { useEffect, useRef, useState, useCallback } from "react";
import "@/App.css";

/* ─── Icon Components ─── */
const Globe = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
  </svg>
);
const Award = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>
  </svg>
);
const Users = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const Target = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const Zap = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
  </svg>
);
const Bot = ({ className, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
  </svg>
);

/* ─── Data ─── */
const capabilities = [
  { title: "Ads that write themselves", description: "Your listings automatically become compelling, multilingual ad campaigns across every major platform.", outcome: "More qualified eyes on your properties, zero marketing effort." },
  { title: "One stream, every audience", description: "Present once, reach investors on YouTube, Instagram, Facebook, and TikTok simultaneously.", outcome: "10x your visibility with a single presentation." },
  { title: "Your listings. Answered perfectly. 24/7.", description: "Estalara\u2019s AI understands every detail of your properties and responds instantly to investor questions in any language.", outcome: "No missed leads. No delayed replies. No lost deals." },
  { title: "Know who\u2019s ready to buy", description: "Real-time sentiment analysis identifies engaged investors and scores their purchase intent.", outcome: "Focus only on leads that matter." },
];

/* ─── CapabilityCard ─── */
function CapabilityCard({ capability }) {
  return (
    <div className="cap-card" data-testid="cap-card">
      <div className="cap-card-mockup">
        <Bot className="cap-mockup-icon" style={{ color: "#5C5C5C", width: 48, height: 48 }} />
        <span style={{ color: "#8B8B8B", fontSize: "0.75rem", marginTop: 8 }}>Interactive Mockup</span>
      </div>
      <div className="cap-card-content">
        <h3 className="cap-card-title">{capability.title}</h3>
        <p className="cap-card-desc">{capability.description}</p>
        <p className="cap-card-outcome">
          <span className="cap-outcome-dot" />
          {capability.outcome}
        </p>
      </div>
    </div>
  );
}

/* ─── App ─── */
function App() {
  return (
    <div className="estalara-root" style={{ background: "#F0EDE8" }}>
      {/* AI Capabilities Section */}
      <section className="ai-section" data-testid="ai-section">
        <div className="ai-container">
          {/* Header */}
          <div className="ai-header">
            <h2 className="ai-heading" data-testid="ai-heading">
              We don&rsquo;t generate more leads. We generate ready-to-buy investors.
            </h2>
            <p className="ai-subheading">
              Less time chasing cold inquiries. More time closing serious buyers.
            </p>
          </div>

          {/* Subtitle 1 */}
          <div className="ai-subtitle-full">
            <h3 className="ai-subtitle-text ai-subtitle-lg">
              From Ads &amp; Socials to your LIVE.
            </h3>
          </div>

          {/* Row 1: 2 cards */}
          <div className="ai-grid-2">
            <CapabilityCard capability={capabilities[0]} />
            <CapabilityCard capability={capabilities[1]} />
          </div>

          {/* Row 2: Subtitles + Cards with explicit grid placement */}
          <div className="ai-grid-paired" data-testid="ai-grid-paired">
            {/* 1. Subtitle 2 — mobile: first, desktop: row1 col1 */}
            <div className="ai-subtitle-cell ai-subtitle-cell-1" data-testid="subtitle-2">
              <h3 className="ai-subtitle-text ai-subtitle-md">
                Estalara AI knows everything so you don&rsquo;t have to answer all the questions.
              </h3>
            </div>

            {/* 2. Card AI — mobile: second, desktop: row2 col1 */}
            <div className="ai-card-cell ai-card-cell-1" data-testid="card-ai">
              <CapabilityCard capability={capabilities[2]} />
            </div>

            {/* 3. Subtitle 3 — mobile: third, desktop: row1 col2 */}
            <div className="ai-subtitle-cell ai-subtitle-cell-2" data-testid="subtitle-3">
              <h3 className="ai-subtitle-text ai-subtitle-md">
                And we give you more than just a hunch.
              </h3>
            </div>

            {/* 4. Card Lead — mobile: fourth, desktop: row2 col2 */}
            <div className="ai-card-cell ai-card-cell-2" data-testid="card-lead">
              <CapabilityCard capability={capabilities[3]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
