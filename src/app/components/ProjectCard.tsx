import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  summary: string;
  tags: string[];
  slug?: string;
  href?: string;
  ctaLabel: string;
  index: number;
}

export default function ProjectCard({
  title,
  summary,
  tags,
  slug,
  href,
  ctaLabel,
  index,
}: ProjectCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      window.open(href, "_blank");
    } else if (slug) {
      navigate(`/projects/${slug}`);
    }
  };

  return (
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}

  transition={{
    duration: 0.5,
    delay: index * 0.1,
    ease: "easeOut",
  }}

  whileHover={{
    y: -6,
    scale: 1.015,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
    },
  }}

  className="
    bg-white/70 dark:bg-gray-900/70
    backdrop-blur-sm rounded-2xl p-6

    shadow-md dark:shadow-black/40
    hover:shadow-xl dark:hover:shadow-purple-900/30

    transition-shadow duration-300 ease-out

    border border-white/60 dark:border-white/10
    group
  "
>

      {/* Title */}
      <h3
        className="
          text-2xl mb-3
          text-gray-800 dark:text-gray-100
          group-hover:text-purple-600 dark:group-hover:text-purple-400
          transition-colors duration-300
        "
      >
        {title}
      </h3>

      {/* Summary */}
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              px-3 py-1 rounded-full text-sm
              bg-gradient-to-r from-purple-100 to-pink-100
              dark:from-purple-900/50 dark:to-pink-900/40
              text-gray-700 dark:text-gray-200
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div
      onClick={handleClick}
        className="
          flex items-center gap-2
          text-purple-600 dark:text-purple-400
          group-hover:gap-3 transition-all duration-300
        "
      >
        <span className="text-sm">{ctaLabel}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </motion.div>
  );
}
