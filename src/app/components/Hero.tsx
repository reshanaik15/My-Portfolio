import { motion, useScroll, useTransform } from 'motion/react';
import { Download, FileText, Sparkles, Heart, Zap } from 'lucide-react';
import { useRef } from 'react';
import profileImg from "../assets/images/profile.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 relative overflow-hidden
    text-gray-800 dark:text-gray-100">
      {/* Floating decorative elements */}
      <FloatingElement delay={0} duration={6} xRange={[-20, 20]} yRange={[-30, 30]} className="absolute top-20 left-10">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-700 rounded-2xl opacity-20 rotate-12" />
      </FloatingElement>
      
      <FloatingElement delay={1} duration={8} xRange={[10, -10]} yRange={[-20, 20]} className="absolute top-40 right-20">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-purple-300 dark:from-blue-700 dark:to-purple-700 rounded-full opacity-20" />
      </FloatingElement>

      <FloatingElement delay={2} duration={7} xRange={[-15, 15]} yRange={[20, -20]} className="absolute bottom-40 left-20">
        <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-orange-300 dark:from-pink-700 dark:to-orange-700 rounded-3xl opacity-20 -rotate-12" />
      </FloatingElement>

      <FloatingElement delay={1.5} duration={9} xRange={[15, -15]} yRange={[-25, 25]} className="absolute bottom-32 right-32">
        <Sparkles className="w-8 h-8 text-purple-300 dark:text-purple-500 opacity-30" />
      </FloatingElement>

      <motion.div style={{ y, opacity }} className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left side - Profile with creative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative">
            {/* Animated gradient blob behind image */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -inset-12 bg-gradient-to-br 
from-purple-300 via-pink-300 to-blue-300 
dark:from-purple-800 dark:via-pink-800 dark:to-blue-800
rounded-full opacity-30 blur-3xl"

            />

            {/* Secondary rotating ring */}
            <motion.div
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -inset-8 rounded-full border-4 border-dashed 
border-purple-300/30 dark:border-purple-600/30"

            />
            
            {/* Profile photo with paper-like frame */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.3 }}
              className="relative w-72 h-72 rounded-3xl overflow-hidden shadow-2xl 
bg-white dark:bg-gray-900 p-3"

            >
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={profileImg}
                  alt="Resha Naik"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Floating badges */}
            <FloatingBadge delay={0.5} className="absolute -top-6 -right-6">
              <div className="bg-white dark:bg-gray-900 rounded-full p-3 shadow-xl flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="text-sm dark:text-gray-200">UI/UX</span>
              </div>
            </FloatingBadge>

            <FloatingBadge delay={1} className="absolute -bottom-6 -left-6">
              <div className="bg-white dark:bg-gray-900 rounded-full p-3 shadow-xl flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-500" />
                <span className="text-sm dark:text-gray-200">Frontend Dev</span>
              </div>
            </FloatingBadge>
          </div>
        </motion.div>

        {/* Right side - Pinboard & Content */}
        <div className="space-y-8">
          {/* Creative Pinboard Cards */}
          <div className="relative flex flex-wrap gap-6 mb-12">
            {/* Portfolio Card */}
<PinboardCard 
  delay={0.4}
  rotation={-6}
  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
>
  <FileText className="w-10 h-10 text-purple-500 dark:text-purple-400 mb-3" />

  <h3 className="text-xl mb-2 text-gray-800 dark:text-gray-800">
    Portfolio
  </h3>

  <p className="text-sm text-gray-600 dark:text-gray-500 mb-4">
    Selected Work
  </p>

  <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full hover:shadow-lg transition-shadow duration-300"
  >
    View Projects
  </motion.button>
</PinboardCard>
{/* Resume Card */}
<PinboardCard 
  delay={0.6}
  rotation={4}
  onClick={() => window.open("public/Resha Naik_Resume.pdf", "_blank")}
>
  <Download className="w-10 h-10 text-blue-500 dark:text-blue-400 mb-3" />

  <h3 className="text-xl mb-2 text-gray-800 dark:text-gray-800">
    Resume
  </h3>

  <p className="text-sm text-gray-600 dark:text-gray-500 mb-4">
    Download PDF
  </p>

  <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full hover:shadow-lg transition-shadow duration-300"
  >
    Download
  </motion.button>
</PinboardCard>


            {/* Sticky Note - Fun fact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.5 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="relative bg-yellow-100 p-4 rounded-lg shadow-md w-40 h-40 flex flex-col justify-center transform -rotate-3"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-yellow-200/50 rounded-t-lg" />
              <p className="text-sm text-gray-700 italic">
                "Design is intelligence made visible."
              </p>
              <Sparkles className="w-4 h-4 text-yellow-600 mt-2" />
            </motion.div>
          </div>

          {/* Hero Text with animated typing effect */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl text-gray-800 dark:text-gray-100 mb-4"

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Designing{' '}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  warm
                </motion.span>
                ,{' '}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600"
                >
                  intuitive
                </motion.span>
                <br />
                digital experiences.
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="space-y-3"
            >
              <h2 className="text-2xl text-purple-600 dark:text-purple-400">
                UI/UX Designer & Frontend Developer
              </h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl"

              >
                Electronics & Computer Science engineer blending frontend development and human-centered design to build purposeful digital products.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full transition-all duration-300 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">Let's Talk</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm 
text-gray-800 dark:text-gray-100 rounded-full 
border-2 border-purple-200 dark:border-purple-600 
hover:border-purple-400 transition-all duration-300"

              >
                View Work
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
<div className="w-6 h-10 border-2 border-purple-300 dark:border-purple-500 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-500 dark:bg-purple-400 rounded-full"

          />
        </div>
      </motion.div>
    </section>
  );
}

// Floating Element Component
function FloatingElement({ 
  children, 
  delay, 
  duration, 
  xRange, 
  yRange, 
  className 
}: { 
  children: React.ReactNode; 
  delay: number; 
  duration: number; 
  xRange: [number, number]; 
  yRange: [number, number]; 
  className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        x: xRange,
        y: yRange,
      }}
      transition={{
        opacity: { duration: 1, delay },
        x: { duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        y: { duration: duration * 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Pinboard Card Component
function PinboardCard({ 
  children, 
  delay, 
  rotation,
  onClick 
}: { 
  children: React.ReactNode; 
  delay: number; 
  rotation: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: rotation * 2 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
      whileHover={{ 
        rotate: 0, 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        y: -5
      }}
      onClick={onClick}
      className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg cursor-pointer group"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.02\'/%3E%3C/svg%3E")',
      }}
    >
      {/* Red push pin */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.3, type: "spring", bounce: 0.6 }}
        className="absolute -top-4 left-1/2 -translate-x-1/2"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-700 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-400 rounded-full" />
          </motion.div>
          {/* Pin shadow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-6 h-1 bg-black/10 blur-sm rounded-full" />
        </div>
      </motion.div>
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

// Floating Badge Component
function FloatingBadge({ 
  children, 
  delay, 
  className 
}: { 
  children: React.ReactNode; 
  delay: number; 
  className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, type: "spring", bounce: 0.5 }}
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      className={className}
    >
      <motion.div
        animate={{ 
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
