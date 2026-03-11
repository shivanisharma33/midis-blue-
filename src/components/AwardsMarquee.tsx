import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ─── Award data ─────────────────────────────────────────────────────────── */
const awards = [
  { title: "Site Of The Day",    sub: "PRODUCT DESIGN", logo: "/images/award-logo-1.svg" },
  { title: "Digital Excellence", sub: "PRODUCT DESIGN", logo: "/images/award-logo-2.svg" },
  { title: "Creative Agency",    sub: "PRODUCT DESIGN", logo: "/images/award-logo-3.svg" },
  { title: "Innovative Design",  sub: "PRODUCT DESIGN", logo: "/images/award-logo-4.svg" },
  { title: "Top Branding",       sub: "PRODUCT DESIGN", logo: "/images/award-logo-5.svg" },
  { title: "Web Innovation",     sub: "PRODUCT DESIGN", logo: "/images/award-logo-6.svg" },
];

/* ─── Column layout ─────────────────────────────────────────────────────────
   Each column has 2 cards (row-1 on top, row-2 below).
   Col index:   0 = left, 1 = center (staggered down), 2 = right
 ──────────────────────────────────────────────────────────────────────────── */
const COLS = [
  { row1: awards[0], row2: awards[3] }, // left
  { row1: awards[1], row2: awards[4] }, // center
  { row1: awards[2], row2: awards[5] }, // right
];

/* ─── Single card (pill → full card animation driven by parent) ──────────── */
interface CardProps {
  title: string;
  sub: string;
  logo: string;
  cardH: any;     // animated height
  radius: any;    // animated border-radius
  innerOp: any;   // animated inner content opacity
  translateY: any; // parallax Y (phase 2)
}

const AwardCard = ({ title, sub, logo, cardH, radius, innerOp, translateY }: CardProps) => (
  <motion.div
    style={{
      height: cardH,
      borderRadius: radius,
      y: translateY,
      overflow: "hidden",          // ← this is the key: clips content below visible area
      background: "#F2F5FF",
      border: "1px solid rgba(0,60,255,0.08)",
      position: "relative",        // needed for absolute inner layer
      width: "100%",
      boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
      willChange: "transform, height",
    }}
  >
    {/*
      Inner content is 320px tall, anchored to bottom:0.
      When card height = 48px (pill), only the bottom 48px of this block is
      "visible" — which is just empty padding. All text & logo are above it,
      clipped out entirely by overflow:hidden. As height grows to 320px,
      the full content enters the visible area from below.
    */}
    <motion.div
      style={{
        opacity: innerOp,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 320,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(16px, 4vw, 24px) clamp(16px, 4vw, 24px) clamp(16px, 4vw, 28px)",
      }}
    >
      {/* ── Meta ── */}
      <div>
        <p style={{
          fontSize: "clamp(8px, 1.5vw, 10px)", fontWeight: 700, letterSpacing: "0.15em",
          color: "#003CFF", textTransform: "uppercase",
          fontFamily: "Outfit, sans-serif", margin: "0 0 6px",
        }}>
          {sub}
        </p>
        <h3 style={{
          fontSize: "clamp(14px, 3vw, 20px)", fontWeight: 800, color: "#1A212F",
          fontFamily: "Outfit, sans-serif", lineHeight: 1.2,
          letterSpacing: "-0.02em", margin: 0,
        }}>
          {title}
        </h3>
      </div>

      {/* ── Logo ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        paddingTop: 12,
      }}>
        <img src={logo} alt={title} style={{ width: "clamp(50px, 15vw, 80px)", height: "clamp(50px, 15vw, 80px)", objectFit: "contain" }} />
      </div>
    </motion.div>
  </motion.div>
);

/* ─── Main section ───────────────────────────────────────────────────────── */
const AwardsMarquee = () => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });

  /* ── PHASE 1 (0 → 0.5): pill → full card ──────────────────────────────── */
  // Height: starts as a tiny pill, expands to full card
  const cardHeight    = useTransform(scrollYProgress, [0, 0.5], [48, 320]);
  // Border-radius: fully round pill → card with soft corners
  const cardRadius    = useTransform(scrollYProgress, [0, 0.5], [999, 12]);
  // Inner content only starts fading in once card is ~70% grown — NO text in pill state
  const innerOpacity  = useTransform(scrollYProgress, [0.38, 0.52], [0, 1]);

  /* ── PHASE 2 (0.5 → 1.0): parallax column drift ──────────────────────── */
  // Each column moves at a different speed so the second row comes into view
  const col0Y = useTransform(scrollYProgress, [0.5, 1], [0, -280]);
  const col1Y = useTransform(scrollYProgress, [0.5, 1], [0, -240]);
  const col2Y = useTransform(scrollYProgress, [0.5, 1], [0, -260]);

  // Row-2 cards ride a different offset so they smoothly appear from beneath
  const row2Col0Y = useTransform(scrollYProgress, [0.5, 1], [32, -280]);
  const row2Col1Y = useTransform(scrollYProgress, [0.5, 1], [32, -240]);
  const row2Col2Y = useTransform(scrollYProgress, [0.5, 1], [32, -260]);

  // Row-2 inner content fades in as it enters view
  const row2InnerOp = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);

  const colYMap     = [col0Y,     col1Y,     col2Y];
  const row2YMap    = [row2Col0Y, row2Col1Y, row2Col2Y];

  return (
    /*
      300vh gives the scroll runway.
      The sticky child pins to the viewport for the full 300 vh of travel.
    */
    <div ref={stickyRef} style={{ height: "300vh", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1280,
            padding: "0 clamp(16px, 5vw, 40px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "clamp(12px, 4vw, 20px)",
            alignItems: "start",
          }}
        >
          {COLS.map((col, ci) => (
            <div
              key={ci}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(12px, 4vw, 20px)",
                /* Center column staggered 60 px lower — creates the V / zigzag */
                marginTop: ci === 1 ? "clamp(30px, 8vw, 60px)" : 0,
              }}
            >
              {/* Row 1 card */}
              <AwardCard
                {...col.row1}
                cardH={cardHeight}
                radius={cardRadius}
                innerOp={innerOpacity}
                translateY={colYMap[ci]}
              />

              {/* Row 2 card */}
              <AwardCard
                {...col.row2}
                cardH={cardHeight}
                radius={cardRadius}
                innerOp={row2InnerOp}
                translateY={row2YMap[ci]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsMarquee;
