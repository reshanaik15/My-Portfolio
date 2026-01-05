import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 2 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    // Complete and unmount after exit animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3200); // 2s display + 1.2s exit animation

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
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        {/* Floating gradient blobs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />

        {/* Glassmorphism overlay */}
        <motion.div
          initial={{ backdropFilter: 'blur(0px)' }}
          animate={{ backdropFilter: isExiting ? 'blur(0px)' : 'blur(12px)' }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-white/20"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Ambient glow behind text */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isExiting ? 0 : 0.6, scale: isExiting ? 0.8 : 1.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full filter blur-3xl"
          />
        </div>

        {/* Primary headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ 
            opacity: isExiting ? 0 : 1, 
            scale: isExiting ? 0.95 : 1,
            y: isExiting ? 10 : 0
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.2
          }}
          className="text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6"
          style={{ 
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}
        >
          Designing warm, intuitive
          <br />
          digital experiences.
        </motion.h1>

        {/* Secondary subtitle */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ 
            opacity: isExiting ? 0 : 1, 
            scale: isExiting ? 0.95 : 1,
            y: isExiting ? 10 : 0
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.4
          }}
          className="text-lg md:text-xl text-gray-600"
          style={{ 
            fontWeight: 400,
            letterSpacing: '0.01em'
          }}
        >
          Resha Naik — UI/UX Designer & Frontend Developer
        </motion.p>
      </div>
    </motion.div>
  );
}
