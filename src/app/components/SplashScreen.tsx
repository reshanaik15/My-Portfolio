import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExiting(true), 2000);
    const completeTimer = setTimeout(() => onComplete(), 3200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ pointerEvents: 'none' }}
    >
      {/* 🌈 Background */}
      <div className="absolute inset-0 
        bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50
        dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
      ">
        {/* Floating blobs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 
            bg-purple-300 dark:bg-purple-800
            rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />

        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 w-96 h-96 
            bg-pink-300 dark:bg-pink-800
            rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />

        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/2 w-96 h-96 
            bg-blue-300 dark:bg-blue-800
            rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />

        {/* Glass overlay */}
        <motion.div
          initial={{ backdropFilter: 'blur(0px)' }}
          animate={{ backdropFilter: isExiting ? 'blur(0px)' : 'blur(12px)' }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 
            bg-white/20 dark:bg-black/30"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* ✨ Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Glow */}
        <motion.div
          animate={{ opacity: isExiting ? 0 : 0.6, scale: isExiting ? 0.8 : 1.2 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -z-10 
            bg-gradient-to-r from-purple-400/30 to-pink-400/30
            dark:from-purple-600/20 dark:to-pink-600/20
            rounded-full blur-3xl"
        />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? 10 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-semibold mb-6
            text-gray-800 dark:text-gray-100"
        >
          Designing warm, intuitive
          <br />
          digital experiences.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? 10 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl
            text-gray-600 dark:text-gray-400"
        >
          Resha Naik — UI/UX Designer & Frontend Developer
        </motion.p>
      </div>
    </motion.div>
  );
}
