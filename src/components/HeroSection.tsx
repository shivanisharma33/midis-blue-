import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Zoom and Fade transformations based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 12]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["200px", "0px"]);
  const borderWidth = useTransform(scrollYProgress, [0, 0.3], ["1.6vw", "0vw"]);
  
  // Image brightness/zoom inside the capsule
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden pt-24 sm:pt-20 md:pt-32 lg:pt-48">
        
        {/* Background Grid & Gradient */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute top-0 left-0 right-0 h-[80%] bg-gradient-to-b from-[#4B84FF] via-[#F4F8FF] to-transparent opacity-60"
          />
          <motion.div style={{ opacity: textOpacity }} className="absolute inset-0 flex justify-between px-6 md:px-8 max-w-[1400px] mx-auto opacity-[0.2]">
            <div className="w-[1px] h-full bg-white" />
            <div className="w-[1px] h-full bg-white hidden md:block" />
            <div className="w-[1px] h-full bg-white hidden md:block" />
            <div className="w-[1px] h-full bg-white" />
          </motion.div>
        </div>

        <div className="section-container relative z-10 w-full mt-[165px] sm:mt-auto">
          {/* main "VISION" text area */}
          <div className="flex items-center justify-center w-full select-none mb-6 sm:mb-8 md:mb-12 lg:mb-20">
            <motion.div
              initial="visible"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0
                  }
                }
              }}
              className="flex items-center"
            >
              {/* Unit 1: VISI */}
              <motion.h1 
                style={{ opacity: textOpacity, scale: textScale, fontFamily: 'Outfit, sans-serif' }}
                variants={{
                  hidden: { opacity: 1, y: 0, scale: 1 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#003CFF] font-black text-[18vw] md:text-[20vw] lg:text-[18vw] leading-none tracking-[-0.06em]" 
              >
                VISI
              </motion.h1>

              {/* Unit 2: The Signature Capsule O (The zooming element) */}
              <motion.div 
                style={{ scale, borderRadius }}
                variants={{
                  hidden: { opacity: 1, y: 0, scale: 1 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative transform translate-y-[0.4vw] mx-1 md:mx-4 z-40"
              >
                <motion.div
                  style={{ borderRadius, borderWidth }}
                  className="w-[20vw] h-[8vw] md:w-[28vw] md:h-[11vw] lg:w-[32vw] lg:h-[12.5vw] border-[#003CFF] overflow-hidden bg-[#8DB3FF] relative flex items-center justify-center border-solid"
                >
                  <motion.img 
                    style={{ scale: imgScale }}
                    src="images/banner-image.jpg" 
                    alt="Vision"
                    width={340}
                    height={150}
                    className="w-full h-full object-cover"
                    fetchPriority="high"
                    loading="eager"
                  />
                  {/* Subtle glass effect that fades as we zoom */}
                  <motion.div 
                    style={{ opacity: borderOpacity }}
                    className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/5 opacity-40" 
                  />
                  <motion.div 
                    style={{ opacity: borderOpacity }}
                    className="absolute top-[20%] left-[15%] w-1/2 h-1/2 bg-white/20 blur-2xl rounded-full" 
                  />
                </motion.div>
              </motion.div>

              {/* Unit 3: N */}
              <motion.h1 
                style={{ opacity: textOpacity, scale: textScale, fontFamily: 'Outfit, sans-serif' }}
                variants={{
                  hidden: { opacity: 1, y: 0, scale: 1 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#003CFF] font-black text-[18vw] md:text-[20vw] lg:text-[18vw] leading-none tracking-[-0.06em]" 
              >
                N
              </motion.h1>
            </motion.div>
          </div>

          {/* Separator Line & Sub-content */}
          <motion.div 
            style={{ opacity: textOpacity, y: useTransform(scrollYProgress, [0, 0.2], [0, 40]) }}
            className="w-full border-t border-gray-200/60 pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 md:pb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-12"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0
                  }
                }
              }}
              className="max-w-[460px] flex flex-wrap"
            >
              {"At midis, we blend creativity with strategy to build digital experiences that move brands forward. From crafting standout websites.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-[#1A212F] text-sm sm:text-base md:text-[17px] lg:text-[19px] font-medium leading-[1.55] mr-[0.3em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.8 }}
              className="w-full sm:w-auto"
            >
              <button className="group flex items-center w-full sm:w-auto justify-center sm:justify-start bg-[#F1F6FF] hover:bg-[#E8F0FF] px-6 sm:px-7 py-2.5 sm:py-1.5 rounded-full transition-all duration-300 border border-white shadow-sm overflow-hidden active:scale-95">
                <span className="text-[#1A212F] font-bold text-sm sm:text-[15px] md:text-[16px] mr-3 sm:mr-4 whitespace-nowrap">Get Started Now</span>
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#003CFF] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 shrink-0 shadow-lg shadow-blue-500/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </button>
            </motion.div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;

