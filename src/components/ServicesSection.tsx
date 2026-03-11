import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";

/* ─── Data ──────────────────────────────────────────────────────────────── */
const services = [
  {
    num: "01",
    title: "Brand Identity",
    tags: ["Logo Design", "Guidelines", "Color Strategy", "Art Direction", "Brand Strategy"],
    image: "/images/service-1.jpg",
    icon: "/images/service-icon-1.svg",
  },
  {
    num: "02",
    title: "UI/UX Strategy",
    tags: ["Wireframing", "Prototyping", "User Research", "Interaction Design", "Usability"],
    image: "/images/service-2.jpg",
    icon: "/images/service-icon-2.svg",
  },
  {
    num: "03",
    title: "Digital Marketing",
    tags: ["SEO", "Social Media", "Content Strategy", "Email Marketing", "Analytics"],
    image: "/images/service-3.jpg",
    icon: "/images/service-icon-3.svg",
  },
  {
    num: "04",
    title: "Product Design",
    tags: ["UX Audit", "Design System", "Mobile App", "Web App", "Prototyping"],
    image: "/images/service-4.jpg",
    icon: "/images/service-icon-4.svg",
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */
const ServicesSection = () => {
  const [active, setActive] = useState(2); // default to index 2 = "Digital Marketing" like reference
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const current = services[active];

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        background: "#fff",
        padding: "100px 0 120px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* ── Section Header Entrance Animation ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "#F0F4FF", borderRadius: 999,
              padding: "7px 16px 7px 12px",
              border: "1px solid rgba(0,60,255,0.12)",
            }}>
              <span style={{ fontSize: 13 }}>👑</span>
              <span style={{
                fontSize: 12, fontWeight: 700, color: "#003CFF",
                fontFamily: "Outfit, sans-serif", letterSpacing: "0.06em",
                textTransform: "uppercase"
              }}>
                Our Services
              </span>
            </div>
          </div>

          {/* Headline */}
          <h2 style={{
            textAlign: "center",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 800,
            color: "#1A212F",
            fontFamily: "Outfit, sans-serif",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: 60,
          }}>
            Creativity Meets <span style={{ color: "#003CFF" }}>Functionality.</span>
          </h2>
        </motion.div>

        {/* ── Main Card Entrance Animation ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            background: "#F2F5FF",
            borderRadius: 40,
            overflow: "hidden",
            border: "1px solid rgba(0,60,255,0.08)",
            boxShadow: "0 20px 80px rgba(0,0,0,0.03)",
          }}
        >

          {/* ── LEFT panel ── */}
          <div style={{
            width: 320,
            flexShrink: 0,
            background: "#EEF2FF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "40px",
            borderRight: "1px solid rgba(0,60,255,0.08)",
            position: "relative",
          }}>
            {/* Number Crossfade */}
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: 14, fontWeight: 700, color: "#748AD0",
                  fontFamily: "Outfit, sans-serif", letterSpacing: "0.1em",
                }}
              >
                {current.num}
              </motion.span>
            </AnimatePresence>

            {/* Icon Crossfade + Scale/Drift */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: "100%", display: "flex", justifyContent: "center" }}
                >
                  <img
                    src={current.icon}
                    alt={current.title}
                    style={{ width: 160, height: 160, objectFit: "contain" }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* View Details button */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{
                fontSize: 16, fontWeight: 700, color: "#1A212F",
                fontFamily: "Outfit, sans-serif",
              }}>
                View Details
              </span>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "#003CFF",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(0,60,255,0.2)",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* ── RIGHT panel: service rows ── */}
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}>
            {services.map((svc, i) => {
              const isActive = i === active;
              return (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "30px 40px",
                    cursor: "pointer",
                    borderBottom: i < services.length - 1
                      ? "1px solid rgba(0,60,255,0.06)"
                      : "none",
                    background: isActive ? "rgba(255,255,255,0.6)" : "transparent",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    minHeight: isActive ? 160 : 100,
                  }}
                >
                  {/* Left: Bullet + Content */}
                  <div style={{ flex: 1, display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ width: 12, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0, x: -10 }}
                            animate={{ scale: 1, opacity: 1, x: 0 }}
                            exit={{ scale: 0, opacity: 0, x: -10 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              width: 8, height: 8, borderRadius: "50%",
                              background: "#003CFF",
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <h3 style={{
                        fontSize: "clamp(24px, 2.5vw, 32px)",
                        fontWeight: 700,
                        color: isActive ? "#003CFF" : "#1A212F",
                        fontFamily: "Outfit, sans-serif",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.2,
                        transition: "color 0.4s ease",
                      }}>
                        {svc.title}
                      </h3>

                      {/* Accordion Tags */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            style={{ overflow: "hidden" }}
                          >
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
                              {svc.tags.map((tag, ti) => (
                                <span key={ti} style={{
                                  fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
                                  textTransform: "uppercase", color: "#64748B",
                                  background: "#E2E8F0",
                                  padding: "6px 14px", borderRadius: 8,
                                  fontFamily: "Outfit, sans-serif",
                                  border: "1px solid rgba(0,0,0,0.03)",
                                }}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Thumbnail (Always visible but highlighted) */}
                  <div style={{ position: "relative", width: 140, height: 80, marginLeft: 20 }}>
                    <img
                      src={svc.image}
                      alt={svc.title}
                      style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        borderRadius: 12,
                        opacity: isActive ? 1 : 0.4,
                        transform: isActive ? "scale(1.05)" : "scale(1)",
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        boxShadow: isActive ? "0 10px 30px rgba(0,0,0,0.1)" : "none",
                      }}
                    />
                    {!isActive && (
                      <div style={{
                        position: "absolute", inset: 0, borderRadius: 12,
                        background: "rgba(255,255,255,0.2)",
                      }} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
