import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "MSRTC Website Redesign",
    summary:
      "Redesigned the MSRTC website to improve usability, accessibility, and booking flow.",
    tags: ["UI/UX", "Product Design", "Web Design", "Accessibility"],
    slug: "msrtc-redesign",
    ctaLabel: "View Case Study",
  },
  {
    title: "Animal Rescue UI",
    summary:
      "Mobile/web interface connecting users with nearby NGOs to report injured or lost animals.",
    tags: ["UI/UX", "Web", "Mobile"],
    slug: "animal-rescue",
    ctaLabel: "View Case Study",
  },
  {
    title: "Blood Bond",
    summary:
      "Web platform for human and pet blood donation built using HTML, CSS, and JavaScript.",
    tags: ["Frontend", "Web", "JavaScript"],
    href: "https://reshanaik15.github.io/BloodBond/index.html",
    ctaLabel: "View Live Project",
  },
  {
    title: "Animated Web Design Prototype",
    summary:
      "High-fidelity Figma prototype exploring UI motion, transitions, and storytelling.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    href: "https://www.figma.com/proto/w9HRYUzhKXCkZAj953Q4BR/FOOD-DESIGN?page-id=0%3A1&node-id=5-98&starting-point-node-id=5%3A98&t=5hHmc3SLKn2b76bW-1",
    ctaLabel: "View Prototype",
  },
  {
    title: "FAiMN - Firefighters' Assistant IoT Monitoring Network",
    summary:
      "UI design for an IoT-based firefighter monitoring dashboard with real-time data.",
    tags: ["IoT", "Dashboard Design", "UI/UX", "Data Visualization"],
    slug: "faimn-firefighter",
    ctaLabel: "View Case Study",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="py-20 px-6 md:px-12 lg:px-24
                 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-800 dark:text-gray-100 mb-4">
            Selected Work
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            Projects that showcase my design and development skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.slug ?? project.href}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
