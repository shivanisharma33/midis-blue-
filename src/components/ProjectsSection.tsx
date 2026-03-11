import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  { num: "01", title: "Pixel Forge", category: "UI/UX Design", image: "/images/project-1.jpg" },
  { num: "02", title: "Studio Nova", category: "UI/UX Design", image: "/images/project-2.jpg" },
  { num: "03", title: "Brand Orbit", category: "UI/UX Design", image: "/images/project-3.jpg" },
  { num: "04", title: "Vision Core", category: "UI/UX Design", image: "/images/project-4.jpg" },
  { num: "05", title: "Design Flow", category: "UI/UX Design", image: "/images/project-5.jpg" },
];

const ProjectCard = ({ project, className = "", delay = 0, inView }: { project: typeof projects[0]; className?: string; delay?: number; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay, duration: 0.6 }}
    className={`group relative ${className}`}
  >
    {/* Number */}
    <div className="absolute top-4 left-4 z-10">
      <span className="text-[80px] md:text-[100px] font-black leading-none text-primary/10 select-none">{project.num}</span>
    </div>
    {/* Image */}
    <div className="relative rounded-2xl overflow-hidden border border-border cursor-pointer">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Arrow overlay */}
      <div className="absolute bottom-4 right-4 z-10">
        <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          <img src="/images/project-arrow.svg" alt="" className="w-5 h-5" />
        </div>
      </div>
    </div>
    {/* Info */}
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
      <p className="text-sm text-muted-foreground">{project.category}</p>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="works" ref={ref} className="section-padding bg-background">
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
              <span className="subtitle-badge">Our Projects</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="section-heading"
            >
              Our Latest Projects.
            </motion.h2>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="cta-button"
          >
            View All Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </motion.a>
        </div>

        {/* Projects grid - matching original layout */}
        {/* Row 1: Two cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <ProjectCard project={projects[0]} className="aspect-[4/3]" delay={0.1} inView={inView} />
          <ProjectCard project={projects[1]} className="aspect-[4/3]" delay={0.2} inView={inView} />
        </div>

        {/* Row 2: One wide card */}
        <div className="mb-8">
          <ProjectCard project={projects[2]} className="aspect-[16/7]" delay={0.3} inView={inView} />
        </div>

        {/* Row 3: Two cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard project={projects[3]} className="aspect-[4/3]" delay={0.4} inView={inView} />
          <ProjectCard project={projects[4]} className="aspect-[4/3]" delay={0.5} inView={inView} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
