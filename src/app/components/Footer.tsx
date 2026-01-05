import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer
  id="contact"
  className="
    relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden
    text-gray-800 dark:text-gray-200
  "
>

      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-gray-800 dark:text-gray-100 mb-6">

            Let's build something great.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">

            I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mb-16"
        >
          <motion.a
            href="mailto:reshanaik15@gmail.com"
            whileHover={{ scale: 1.1, y: -5 }}
            className="
  flex items-center gap-3 px-6 py-3 rounded-full shadow-md hover:shadow-xl
  transition-all duration-300 border
  bg-gradient-to-r from-purple-100 to-pink-100
  dark:from-purple-800 dark:to-pink-800
  border-white/60 dark:border-gray-700
"

          >
            <Mail className="w-5 h-5 text-purple-600 dark:text-purple-300" />
<span className="text-gray-700 dark:text-gray-100">Email</span>

          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/resha-naik-b448ab25a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className="
  flex items-center gap-3 px-6 py-3 rounded-full shadow-md hover:shadow-xl
  transition-all duration-300 border
  bg-gradient-to-r from-blue-100 to-cyan-100
  dark:from-blue-800 dark:to-cyan-800
  border-white/60 dark:border-gray-700
">

<Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-300" />
<span className="text-gray-700 dark:text-gray-100">LinkedIn</span>

          </motion.a>

          <motion.a
            href="https://github.com/reshanaik15"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className="
  flex items-center gap-3 px-6 py-3 rounded-full shadow-md hover:shadow-xl
  transition-all duration-300 border
  bg-gradient-to-r from-gray-100 to-slate-100
  dark:from-gray-700 dark:to-gray-800
  border-white/60 dark:border-gray-700
">

<Github className="w-5 h-5 text-gray-700 dark:text-gray-200" />
<span className="text-gray-700 dark:text-gray-100">GitHub</span>

          </motion.a>
        </motion.div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div
  className="
    inline-block px-8 py-3 rounded-full backdrop-blur-sm border
    bg-white/50 dark:bg-gray-900/60
    border-white/60 dark:border-gray-700
  "
>

            <p className="text-gray-600 dark:text-gray-300">
              Portfolio created with passion by <span className="text-purple-600 dark:text-purple-400">Resha Naik</span> — 2025
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
<div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-300 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

    </footer>
  );
}
