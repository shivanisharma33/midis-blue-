import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Emma Johnson",
    image: "/images/testimonial-1.jpg",
    quote: "Working with Arooth was a seamless experience from start to finish. Their team truly understood our vision and brought it to life through a stunning digital identity. The results exceeded our expectations.",
  },
  {
    name: "Emma Johnson",
    image: "/images/testimonial-2.jpg",
    quote: "Arooth delivered exactly what we were looking for—clean design, clear structure, and a strong brand presence. Their attention to detail and creative approach made the entire process effortless.",
  },
  {
    name: "Emma Johnson",
    image: "/images/testimonial-3.jpg",
    quote: "The team at Arooth transformed our ideas into a polished and professional digital experience. Communication was smooth, timelines were met, and the final outcome was exceptional.",
  },
  {
    name: "Emma Johnson",
    image: "/images/testimonial-4.jpg",
    quote: "From concept to execution, Arooth handled everything with precision and creativity. The final design perfectly reflects our brand and has received great feedback from our clients.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section ref={ref} className="section-padding bg-secondary/50">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <img src="/images/subtitle-icon.svg" alt="" className="w-5 h-5" />
          <span className="subtitle-badge">Our Testimonials</span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold text-foreground leading-snug max-w-2xl mb-12"
        >
          Our success is measured by the satisfaction of our clients. We take pride in building long partnerships.
        </motion.h3>

        {/* Testimonial slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Image */}
              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <img src="/images/testimonial-logo.svg" alt="Logo" className="w-20 mb-4 opacity-50" />
                <p className="text-foreground font-medium mb-2">{testimonials[current].name}</p>
                <img src="/images/testimonial-quote.svg" alt="" className="w-8 h-8 mb-4 opacity-40" />
                <p className="body-text text-base md:text-lg italic leading-relaxed">
                  "{testimonials[current].quote}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Stats below testimonials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-border">
          <div>
            <span className="stat-odometer text-4xl">95%</span>
            <p className="body-text text-sm mt-1">Client Satisfaction Rate</p>
          </div>
          <div>
            <span className="stat-odometer text-4xl">120+</span>
            <p className="body-text text-sm mt-1">Global Brands Served Worldwide</p>
          </div>
          <div>
            <span className="stat-odometer text-4xl">50+</span>
            <p className="body-text text-sm mt-1">Projects Completed</p>
          </div>
          <div>
            <span className="stat-odometer text-4xl">5X</span>
            <p className="body-text text-sm mt-1">Average Growth Achieved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
