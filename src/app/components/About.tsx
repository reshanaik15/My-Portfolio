import { motion } from 'motion/react';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 lg:px-24
                 bg-transparent"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-gray-800 dark:text-gray-100 mb-4">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient background card */}
          <div
            className="absolute inset-0 rounded-3xl blur-sm opacity-60
                       bg-gradient-to-br
                       from-purple-100 via-pink-100 to-blue-100
                       dark:from-purple-900/40 dark:via-pink-900/30 dark:to-blue-900/40"
          />

          {/* Main content card */}
          <div
            className="relative rounded-3xl p-8 md:p-12 shadow-xl
                       backdrop-blur-xl border
                       bg-white/80 dark:bg-gray-900/80
                       border-white/60 dark:border-white/10"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl leading-relaxed text-center
                         text-gray-700 dark:text-gray-300"
            >
              I enjoy creating digital experiences that feel warm, simple, and purposeful.
              Alongside UI/UX design, I work on frontend development and engineering projects,
              including IoT-based systems and responsive web applications.
            </motion.p>

            {/* Decorative floating elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-xl opacity-20
                         bg-gradient-to-br
                         from-purple-300 to-pink-300
                         dark:from-purple-700 dark:to-pink-700"
            />

            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full blur-xl opacity-20
                         bg-gradient-to-br
                         from-blue-300 to-purple-300
                         dark:from-blue-700 dark:to-purple-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
