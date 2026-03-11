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
    <section ref={ref} className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <img src="/images/subtitle-icon.svg" alt="" className="w-5 h-5" />
              <span className="subtitle-badge">News & Articles</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="section-heading"
            >
              Fresh Perspectives On Strategy.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="body-text mt-3 max-w-lg"
            >
              We combine strategy, creativity, and technology to help brands grow in the modern digital landscape.
            </motion.p>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="cta-button"
          >
            View All Articles
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </motion.a>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="card-arooth group cursor-pointer"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary bg-secondary px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug mb-4 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Read More
                  <img src="/images/more-arrow.svg" alt="" className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
