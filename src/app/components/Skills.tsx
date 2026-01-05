import { useRef } from 'react';
import { motion } from 'motion/react';

const designSkills = [
  'UI/UX Design',
  'Figma',
  'Wireframing',
  'Prototyping',
  'Product Thinking'
];

const codingSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'SQL',
  'Git'
];

const engineeringSkills = [
  'IoT Systems',
  'ESP32',
  'LoRa SX1278',
  'MAX31865',
  'PCB Design (KiCad)'
];

interface SkillPillProps {
  skill: string;
  index: number;
  color: string;
}

function SkillPill({ skill, index, color }: SkillPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className={`px-6 py-3 ${color} dark:opacity-90 rounded-full shadow-md border border-white/40 dark:border-gray-700`}
    >
      <span className="text-gray-700 dark:text-grey-800">{skill}</span>
    </motion.div>
  );
}

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-800 dark:text-gray-100 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Tools and technologies I work with</p>
        </motion.div>

        {/* Design & Interaction */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl text-purple-600 mb-6"
          >
            Design & Interaction
          </motion.h3>
          <div className="flex flex-wrap gap-4">
            {designSkills.map((skill, index) => (
              <SkillPill
                key={skill}
                skill={skill}
                index={index}
                color="bg-gradient-to-r from-purple-100 to-pink-100"
              />
            ))}
          </div>
        </div>

        {/* Engineering & Code */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl text-blue-600 mb-6"
          >
            Engineering & Code
          </motion.h3>
          <div className="flex flex-wrap gap-4">
            {codingSkills.map((skill, index) => (
              <SkillPill
                key={skill}
                skill={skill}
                index={index}
                color="bg-gradient-to-r from-blue-100 to-cyan-100"
              />
            ))}
          </div>
        </div>

        {/* Hardware & IoT */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl text-pink-600 mb-6"
          >
            Hardware & IoT
          </motion.h3>
          <div className="flex flex-wrap gap-4">
            {engineeringSkills.map((skill, index) => (
              <SkillPill
                key={skill}
                skill={skill}
                index={index}
                color="bg-gradient-to-r from-pink-100 to-orange-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
