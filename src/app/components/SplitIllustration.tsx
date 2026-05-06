import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

type Side = 'ux' | 'iot' | null;

export default function SplitIllustration() {
  const [hovered, setHovered] = useState<Side>(null);
  const [clicked, setClicked] = useState<Side>(null);
  const navigate = useNavigate();

  const handleEnter = (side: Side) => {
    setClicked(side);
    setTimeout(() => navigate(`/${side}`), 800);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
{/* Floating decorative elements — same vibe as old hero */}
<motion.div
  animate={{ x: [-20, 20, -20], y: [-30, 30, -30] }}
  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
  className="absolute top-20 left-10 w-16 h-16 rounded-2xl opacity-20 rotate-12 pointer-events-none"
  style={{ background: 'linear-gradient(135deg, #D4537E, #9B5DE5)' }}
/>

<motion.div
  animate={{ x: [10, -10, 10], y: [-20, 20, -20] }}
  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  className="absolute top-32 right-16 w-10 h-10 rounded-full opacity-20 pointer-events-none"
  style={{ background: 'linear-gradient(135deg, #378ADD, #1D9E75)' }}
/>

<motion.div
  animate={{ x: [-15, 15, -15], y: [20, -20, 20] }}
  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
  className="absolute bottom-40 left-16 w-20 h-20 rounded-3xl opacity-15 -rotate-12 pointer-events-none"
  style={{ background: 'linear-gradient(135deg, #F4C0D1, #B5D4F4)' }}
/>

<motion.div
  animate={{ x: [15, -15, 15], y: [-25, 25, -25] }}
  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
  className="absolute bottom-32 right-24 pointer-events-none"
>
  <Sparkles className="w-7 h-7 text-purple-300 dark:text-purple-500 opacity-40" />
</motion.div>
      {/* Background colour wash that reacts to hover */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        animate={{
          background: hovered === 'ux'
            ? 'radial-gradient(ellipse at 25% 50%, rgba(212,83,126,0.08) 0%, transparent 70%)'
            : hovered === 'iot'
            ? 'radial-gradient(ellipse at 75% 50%, rgba(55,138,221,0.08) 0%, transparent 70%)'
            : 'none'
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Greeting */}
<motion.p
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
className="text-base text-gray-500 dark:text-gray-400 tracking-widest uppercase mb-3"
>
  Hi, I'm Resha
</motion.p>

<motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="text-3xl md:text-4xl font-light text-gray-800 dark:text-gray-100 mb-3 text-center max-w-xl leading-snug"
>
  I live at the intersection of{' '}
  <span className="text-transparent bg-clip-text"
    style={{ backgroundImage: 'linear-gradient(135deg, #D4537E, #9B5DE5)' }}>
    design
  </span>
  {' '}and{' '}
  <span className="text-transparent bg-clip-text"
    style={{ backgroundImage: 'linear-gradient(135deg, #378ADD, #1D9E75)' }}>
    hardware.
  </span>
</motion.h1>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="text-base text-gray-600 dark:text-gray-400 mb-10 text-center"
>
  Which side would you like to explore?
</motion.p>

      {/* The split illustration container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, type: 'spring', bounce: 0.3 }}
        className="relative flex items-center justify-center mb-10"
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: hovered === 'ux'
              ? '0 0 60px rgba(212,83,126,0.2)'
              : hovered === 'iot'
              ? '0 0 60px rgba(55,138,221,0.2)'
              : '0 0 0px transparent'
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Circle illustration — w-64 h-64 = 256px */}
        <div
          className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 cursor-pointer"
          style={{ isolation: 'isolate' }}
        >
          {/* UX half — left */}
          <motion.div
            className="absolute top-0 bottom-0 left-0 flex items-center justify-center overflow-hidden"
            animate={{ width: hovered === 'iot' ? '20%' : hovered === 'ux' ? '80%' : '50%' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            onMouseEnter={() => setHovered('ux')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleEnter('ux')}
            style={{ background: 'linear-gradient(160deg, #FFF0F5 0%, #FBEAF0 40%, #F4C0D1 100%)' }}
          >
            {/* 
              YOUR UX ILLUSTRATION GOES HERE
              Replace the placeholder below with:
              <img src={uxIllustration} alt="UX designer Resha" className="absolute inset-0 w-full h-full object-cover" />
            */}
            <div className="absolute inset-0 flex items-center justify-center">
              <PlaceholderFigure side="ux" hovered={hovered} />
            </div>
          </motion.div>

          {/* IoT half — right */}
          <motion.div
            className="absolute top-0 bottom-0 right-0 flex items-center justify-center overflow-hidden"
            animate={{ width: hovered === 'ux' ? '20%' : hovered === 'iot' ? '80%' : '50%' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            onMouseEnter={() => setHovered('iot')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleEnter('iot')}
            style={{ background: 'linear-gradient(200deg, #EBF4FF 0%, #E6F1FB 40%, #B5D4F4 100%)' }}
          >
            {/* 
              YOUR IOT ILLUSTRATION GOES HERE
              Replace the placeholder below with:
              <img src={iotIllustration} alt="Engineer Resha" className="absolute inset-0 w-full h-full object-cover" />
            */}
            <div className="absolute inset-0 flex items-center justify-center">
              <PlaceholderFigure side="iot" hovered={hovered} />
            </div>
          </motion.div>

          {/* Centre divider line */}
          <motion.div
            className="absolute top-0 bottom-0 w-px bg-white z-10 pointer-events-none"
            style={{ left: '50%' }}
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Side labels */}
        <motion.span
          className="absolute left-0 -translate-x-full pr-4 text-sm font-medium tracking-widest uppercase"
          animate={{
            color: hovered === 'ux' ? '#993556' : '#c4a0ae',
            opacity: hovered === 'iot' ? 0.3 : 1,
            x: hovered === 'ux' ? -4 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          UI/UX
        </motion.span>

        <motion.span
          className="absolute right-0 translate-x-full pl-4 text-sm font-medium tracking-widest uppercase"
          animate={{
            color: hovered === 'iot' ? '#185FA5' : '#a0b4c4',
            opacity: hovered === 'ux' ? 0.3 : 1,
            x: hovered === 'iot' ? 4 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          IoT
        </motion.span>
      </motion.div>
{/* Resume download — always visible */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 1.2 }}
  className="flex items-center gap-4 mb-6"
>
  <motion.a
    href="/Resha Naik_Resume.pdf"
    target="_blank"
    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(212,83,126,0.25)' }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white"
    style={{ background: 'linear-gradient(135deg, #D4537E, #9B5DE5)' }}
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
    Download Resume
  </motion.a>

  <motion.a
    href="https://linkedin.com/in/resha-naik"
    target="_blank"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border"
    style={{
      color: '#993556',
      borderColor: '#F4C0D1',
      background: 'rgba(251,234,240,0.5)',
      backdropFilter: 'blur(8px)'
    }}
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
    LinkedIn
  </motion.a>
</motion.div>
      {/* Hint text */}
      <AnimatePresence mode="wait">
        {!hovered && (
          <motion.p
            key="hint"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-sm text-gray-400 tracking-wide"
          >
            ← hover to reveal · click to enter →
          </motion.p>
        )}

        {hovered === 'ux' && (
          <motion.p
            key="ux-hint"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-sm font-medium"
            style={{ color: '#993556' }}
          >
            UI/UX Design & Product Thinking →
          </motion.p>
        )}

        {hovered === 'iot' && (
          <motion.p
            key="iot-hint"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-sm font-medium"
            style={{ color: '#185FA5' }}
          >
            Electronics & IoT Engineering →
          </motion.p>
        )}
      </AnimatePresence>

      {/* Click transition overlay */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            className="fixed inset-0 z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              background: clicked === 'ux'
                ? 'radial-gradient(circle, #FBEAF0, #F4C0D1)'
                : 'radial-gradient(circle, #E6F1FB, #B5D4F4)'
            }}
          />
        )}
      </AnimatePresence>

      {/* Scroll down hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 dark:text-gray-400">scroll for more</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent"
        />
      </motion.div>

    </section>
  );
}

// Temporary placeholder — replace with your illustration images
function PlaceholderFigure({ side, hovered }: { side: 'ux' | 'iot', hovered: Side }) {
  const isActive = hovered === side;

  if (side === 'ux') {
    return (
      <motion.div
        className="flex flex-col items-center gap-2"
        animate={{ scale: isActive ? 1.05 : 1, opacity: hovered === 'iot' ? 0.3 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
          {/* Head */}
          <circle cx="40" cy="24" r="18" fill="#F4C0D1" stroke="#D4537E" strokeWidth="1.5"/>
          {/* Body */}
          <path d="M18 65 Q40 52 62 65 L64 100 L16 100 Z" fill="#F4C0D1" stroke="#D4537E" strokeWidth="1.5"/>
          {/* Tablet/screen held */}
          <rect x="26" y="70" width="28" height="18" rx="3" fill="white" opacity="0.8"/>
          <line x1="30" y1="76" x2="50" y2="76" stroke="#D4537E" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="30" y1="81" x2="44" y2="81" stroke="#D4537E" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Sparkle element */}
          <circle cx="58" cy="18" r="4" fill="#F9A8C9" opacity="0.6"/>
          <circle cx="16" cy="35" r="3" fill="#F4C0D1" opacity="0.5"/>
        </svg>
        <span className="text-xs text-pink-400 opacity-70">✦ design</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      animate={{ scale: isActive ? 1.05 : 1, opacity: hovered === 'ux' ? 0.3 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
        {/* Head */}
        <circle cx="40" cy="24" r="18" fill="#B5D4F4" stroke="#378ADD" strokeWidth="1.5"/>
        {/* Body */}
        <path d="M18 65 Q40 52 62 65 L64 100 L16 100 Z" fill="#B5D4F4" stroke="#378ADD" strokeWidth="1.5"/>
        {/* Circuit board held */}
        <rect x="24" y="68" width="32" height="22" rx="3" fill="#0f1e35" opacity="0.8"/>
        <circle cx="32" cy="77" r="3" fill="#1D9E75"/>
        <circle cx="40" cy="77" r="3" fill="#4FC3F7"/>
        <circle cx="48" cy="77" r="3" fill="#FCD34D"/>
        <line x1="32" y1="83" x2="48" y2="83" stroke="#4FC3F7" strokeWidth="1" opacity="0.6"/>
        {/* Signal waves */}
        <circle cx="62" cy="20" r="4" fill="#B5D4F4" opacity="0.5"/>
        <circle cx="16" cy="38" r="3" fill="#93C5FD" opacity="0.4"/>
      </svg>
      <span className="text-xs text-blue-400 opacity-70">⚡ build</span>
    </motion.div>
  );
}