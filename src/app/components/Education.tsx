import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface EducationItem {
  institution: string;
  grade: string;
  period: string;
  details: string[];
}

const educationData: EducationItem[] = [
  {
    grade: "B.Tech (Electronics & Computer Science)",
    institution: "Shah & Anchor Kutchhi Engineering College",
    period: "Nov 2022 - Present",
    details: [
      "CGPA: 9.17 (current)",
      "Major Project: Firefighter IoT Wearable",
      "UI/UX Lead for academic projects",
    ],
  },
  {
    grade: "Grade 11 & 12 (HSC)",
    institution: "Vidya Niketan Jr. College",
    period: "May 2020 - Mar 2022",
    details: [
      "Science stream (PCM)",
    ],
  },
  {
    grade: "Grade 10 (IGCSE)",
    institution: "Trinity International School",
    period: "Jun 2010 - Mar 2020",
    details: [
      "Strong foundation in mathematics & science",
      "Active in art and extracurricular activities",
    ],
  },
];

export default function Education() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="education" className="relative py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-800 dark:text-gray-100 mb-4">Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">My academic journey</p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Main Card */}
<motion.div
  whileHover={{ scale: 1.02, x: 10 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="
    flex-1 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm
    rounded-2xl p-6 shadow-lg border border-white/60 dark:border-gray-700
  "
>
  <h3 className="text-xl text-gray-800 dark:text-gray-200 mb-2">
    {edu.institution}
  </h3>

  <p className="text-purple-600 dark:text-purple-400 mb-1">
    {edu.grade}
  </p>

  <p className="text-sm text-gray-600 dark:text-gray-400">
    {edu.period}
  </p>
</motion.div>


                {/* Desktop Hover Panel */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -20, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="
  bg-gradient-to-br from-purple-100 to-pink-100
  dark:from-purple-800 dark:to-pink-800
  rounded-2xl p-6 shadow-xl border border-white/60 dark:border-gray-700
"

                    >
                      <h4 className="text-gray-700 dark:text-gray-200"
>
                        Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-2 text-sm text-gray-400"
                          >
                            <span className="text-purple-500 mt-1">•</span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Details */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden mt-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border border-white/60"
                  >
                    <h4 className="text-sm text-purple-700 mb-3">
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-purple-500 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
