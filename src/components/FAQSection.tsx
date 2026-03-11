import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  { q: "What services does Arooth offer?", label: "question 01" },
  { q: "How long does a typical project take?", label: "Question 02" },
  { q: "Do you work with clients worldwide?", label: "question 03" },
  { q: "How can we get started with Arooth?", label: "question 04" },
  { q: "How much do your services cost?", label: "question 05" },
];

const answer = "Arooth provides end-to-end digital solutions, including web design, development, branding, digital marketing, UI/UX strategy, and SEO optimization — all tailored to help your business grow online.";

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3 sm:mb-4"
        >
          <img src="/images/subtitle-icon.svg" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="subtitle-badge text-xs sm:text-sm">FAQ</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12"
        >
          Frequently Asked Questions.
        </motion.h2>

        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i, duration: 0.6 }}
              className="border border-border rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-3 sm:p-4 md:p-6 text-left hover:bg-secondary/50 transition-colors"
              >
                <div className="flex-1 pr-2 sm:pr-4">
                  <span className="text-xs text-muted-foreground uppercase tracking-wide block">{faq.label}</span>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground mt-1">{faq.q}</h3>
                </div>
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-border flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${open === i ? "rotate-45" : ""}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
                      <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2">Question Answer:</h4>
                      <p className="body-text text-xs sm:text-sm mb-3 sm:mb-4">{answer}</p>
                      <a href="#" className="cta-button-outline text-xs sm:text-sm inline-flex items-center gap-1">
                        More About Us
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
