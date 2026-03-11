import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Scroll-tracking for the sticky video section
  const stickyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });

  // Phase 1 (0 → 0.4): left image slides down MUCH more than right card
  const imageY = useTransform(scrollYProgress, [0, 0.4], [-180, 220]);
  const cardY = useTransform(scrollYProgress, [0, 0.4], [-180, 0]);

  // Phase 2 (0.4 → 1.0): left image scales up to fill viewport
  const imageScale = useTransform(scrollYProgress, [0.4, 1], [1, 9]);

  // Border radius collapses as image fills viewport
  const imageBorderRadius = useTransform(
    scrollYProgress,
    [0.4, 0.9],
    ["60px", "0px"]
  );

  // Right card fades + slides out when zoom starts
  const cardOpacity = useTransform(scrollYProgress, [0.38, 0.65], [1, 0]);
  const cardX = useTransform(scrollYProgress, [0.38, 0.65], [0, 80]);

  return (
    <>
      {/* ── Static About Section ── */}
      <section
        id="about-us"
        ref={containerRef}
        className="py-12 sm:py-18 md:py-24 lg:py-32 bg-white overflow-hidden"
      >
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center lg:items-center lg:gap-20">

            {/* Left Column: Big Stat + Badge */}
            <div className="w-full lg:w-[48%] relative flex flex-col items-center lg:items-start justify-center py-4 sm:py-8 lg:py-10">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-gray-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
              >
                <div className="text-[#003CFF]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L15 8H22L17 13L19 20L12 16L5 20L7 13L2 8H9L12 2Z" />
                  </svg>
                </div>
                <span className="text-[#003CFF] font-bold text-xs sm:text-[13px] tracking-tight">About Us</span>
              </motion.div>

              <div className="relative mt-16 sm:mt-20 lg:mt-0 select-none">
                <motion.h2
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[80px] sm:text-[140px] md:text-[200px] lg:text-[240px] font-black text-[#003CFF] leading-[0.8] tracking-[-0.08em]"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  40+
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="absolute -left-3 sm:-left-6 md:-left-16 top-[45%] bg-[#EAEEFF] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm border border-white"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 text-[#4353FF] opacity-80 overflow-hidden rounded-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-45">
                        <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
                      </svg>
                    </div>
                    <span className="text-[#1A212F] font-bold text-xs sm:text-[13px] md:text-[14px]">Worldwide</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute -right-4 sm:-right-8 md:-right-20 top-[15%] bg-[#E0F7FF] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm border border-white"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#1A212F] font-bold text-xs sm:text-[13px] md:text-[14px]">Awards Won</span>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 text-[#0EA5E9] opacity-80 overflow-hidden rounded-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
                        <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute top-[8%] right-[18%] w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-500 rounded-full" />
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-[1px] h-[300px] bg-[#E5E9F0] mx-12 opacity-80" />

            {/* Right Column */}
            <div className="about-us-title-flex-right">
              <div className="flex flex-col">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-[#1A212F] mb-4 sm:mb-6"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Our team of designers, developers, and thinkers driven by <span className="text-[#003CFF]">one purpose — to craft digital experiences.</span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-[#718096] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed mb-6 sm:mb-8 lg:mb-10"
                >
                  We combine strategy, creativity, and technology to help brands grow in the modern digital landscape. Every project we take on is fueled by curiosity, guided by precision.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex"
                >
                  <button className="group flex items-center w-full sm:w-auto justify-center sm:justify-start bg-[#F1F6FF] hover:bg-[#E8F0FF] px-6 sm:px-7 py-2.5 sm:py-2 rounded-full transition-all duration-300 border border-white shadow-sm overflow-hidden">
                    <span className="text-[#1A212F] font-bold text-sm sm:text-[15px] md:text-[16px] mr-3 sm:mr-4">More About Us</span>
                    <div className="w-10 h-10 sm:w-10 sm:h-10 bg-[#003CFF] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 shrink-0 shadow-lg shadow-blue-500/20">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SCROLL-DRIVEN VIDEO SECTION
          300vh gives scroll room; sticky keeps it pinned
      ══════════════════════════════════════════════════ */}
      <div
        ref={stickyRef}
        style={{ height: "300vh", position: "relative", background: "#fff" }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1400px",
              margin: "0 auto",
              padding: "0 clamp(16px, 5vw, 24px)",
              display: "flex",
              flexDirection: window.innerWidth < 768 ? "column" : "row",
              alignItems: "stretch",
              gap: "clamp(16px, 5vw, 32px)",
            }}
          >
            {/* ── LEFT: Slide-down then Zoom ── */}
            <motion.div
              style={{
                y: imageY,
                scale: imageScale,
                borderRadius: imageBorderRadius,
                transformOrigin: "center center",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                flexShrink: 0,
                width: window.innerWidth < 768 ? "100%" : "38%",
                aspectRatio: "16/8.5",
                background: "#E2E8F0",
                zIndex: 10,
              }}
            >
              <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
                <img
                  src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691ce85f982bdec6d59a627e_About-Video_poster.0000000.jpg"
                  alt="About Background"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* Pause button */}
              <div style={{
                position: "absolute",
                left: window.innerWidth < 768 ? 16 : 32,
                bottom: window.innerWidth < 768 ? 16 : 32,
                width: window.innerWidth < 768 ? 48 : 56,
                height: window.innerWidth < 768 ? 48 : 56,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.4)",
              }}>
                <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                  <div style={{ width: window.innerWidth < 768 ? 4 : 6, height: window.innerWidth < 768 ? 20 : 24, background: "#fff", borderRadius: 4 }} />
                  <div style={{ width: window.innerWidth < 768 ? 4 : 6, height: window.innerWidth < 768 ? 20 : 24, background: "#fff", borderRadius: 4 }} />
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: Stats Card — fades as image zooms ── */}
            <motion.div
              style={{
                opacity: cardOpacity,
                x: cardX,
                y: cardY,
                flex: 1,
                background: "#F2F7FF",
                borderRadius: 60,
                padding: window.innerWidth < 768 ? 16 : 24,
                display: "flex",
                flexDirection: window.innerWidth < 768 ? "column" : "row",
                alignItems: "center",
                gap: window.innerWidth < 768 ? 24 : 48,
                border: "1px solid rgba(255,255,255,0.5)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              {/* Blue Icon Box */}
              <div style={{
                width: window.innerWidth < 768 ? "100%" : 240,
                height: window.innerWidth < 768 ? "auto" : 220,
                flexShrink: 0,
                background: "linear-gradient(135deg, #003CFF, #0052FF)",
                borderRadius: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0,60,255,0.15)",
                aspectRatio: window.innerWidth < 768 ? "16/9" : undefined,
              }}>
                <img
                  src="/images/about-stat-image.jpg"
                  alt="Stat"
                  style={{
                    width: window.innerWidth < 768 ? "100%" : 220,
                    height: window.innerWidth < 768 ? "100%" : 240,
                    objectFit: "contain",
                    position: "relative",
                    zIndex: 1
                  }}
                />
              </div>

              {/* Stats */}
              <div style={{
                display: "flex",
                flex: 1,
                width: window.innerWidth < 768 ? "100%" : undefined,
                alignItems: "center",
                justifyContent: window.innerWidth < 768 ? "space-around" : "space-between",
                padding: window.innerWidth < 768 ? "0 0" : "0 8px"
              }}>
                <div style={{ display: "flex", flexDirection: "column", textAlign: window.innerWidth < 768 ? "center" : "left" }}>
                  <h4 style={{
                    fontSize: window.innerWidth < 768 ? 48 : 76,
                    fontWeight: 900,
                    color: "#1A212F",
                    lineHeight: 1,
                    marginBottom: 12,
                    fontFamily: "Outfit, sans-serif",
                    letterSpacing: "-0.04em"
                  }}>95%</h4>
                  <p style={{
                    fontSize: window.innerWidth < 768 ? 10 : 11,
                    fontWeight: 700,
                    color: "#718096",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    lineHeight: 1.5,
                    maxWidth: window.innerWidth < 768 ? 100 : 140
                  }}>Clients Satisfied and Repeating</p>
                </div>
                <div style={{
                  width: window.innerWidth < 768 ? 0.5 : 1,
                  height: window.innerWidth < 768 ? 60 : 80,
                  background: "#D1DBFF",
                  opacity: 0.5
                }} />
                <div style={{ display: "flex", flexDirection: "column", textAlign: window.innerWidth < 768 ? "center" : "left" }}>
                  <h4 style={{
                    fontSize: window.innerWidth < 768 ? 48 : 76,
                    fontWeight: 900,
                    color: "#1A212F",
                    lineHeight: 1,
                    marginBottom: 12,
                    fontFamily: "Outfit, sans-serif",
                    letterSpacing: "-0.04em"
                  }}>125+</h4>
                  <p style={{
                    fontSize: window.innerWidth < 768 ? 10 : 11,
                    fontWeight: 700,
                    color: "#718096",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    lineHeight: 1.5,
                    maxWidth: window.innerWidth < 768 ? 110 : 160
                  }}>Projects Completed in 24 Countries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
