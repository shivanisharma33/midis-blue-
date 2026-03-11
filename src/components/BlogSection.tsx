import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blogs = [
  {
    title: "Designing for Emotion: The Secret to Memorable Brands.",
    category: "Advice",
    date: "Nov 14, 2025",
    image: "/images/blog-1.jpg",
  },
  {
    title: "The Power of Minimalism in Modern Web Design.",
    category: "Advice",
    date: "Nov 14, 2025",
    image: "/images/blog-2.jpg",
  },
  {
    title: "Building Digital Trust Through Strong Brand Identity.",
    category: "Advice",
    date: "Nov 14, 2025",
    image: "/images/blog-3.jpg",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-3 sm:mb-4"
            >
              <img src="/images/subtitle-icon.svg" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="subtitle-badge text-xs sm:text-sm">News & Articles</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Fresh Perspectives On Strategy.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="body-text text-sm sm:text-base mt-2 sm:mt-3 max-w-lg"
            >
              We combine strategy, creativity, and technology to help brands grow in the modern digital landscape.
            </motion.p>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="cta-button text-xs sm:text-sm w-full md:w-auto justify-center md:justify-start"
          >
            View All Articles
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </motion.a>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {blogs.map((blog, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="card-arooth group cursor-pointer"
            >
              <div className="overflow-hidden rounded-t-xl sm:rounded-t-2xl h-32 sm:h-40 md:h-52">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-xs font-medium text-primary bg-secondary px-2 sm:px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug mb-3 sm:mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all">
                  Read More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
