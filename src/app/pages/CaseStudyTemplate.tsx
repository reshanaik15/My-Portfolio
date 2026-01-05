import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import msrtcCover from '../assets/images/msrtc-cover.png';
import animalCover from '../assets/images/animal-rescue-cover.png';
import faimnCover from '../assets/images/faimn-cover.jpeg';

interface CaseStudyData {
  title: string;
  role: string;
  duration: string;
  tools: string[];
  overview: string;
  figmaUrl?: string;      
  image?: string;
}

const caseStudiesData: Record<string, CaseStudyData> = {
  /* ---------------- MSRTC ---------------- */
  'msrtc-redesign': {
    title: "MSRTC Website Redesign",
    role: "UI/UX Designer",
    duration: "3 weeks",
    tools: ["UI/UX", "Product Design", "Web Design", "Accessibility"],
    overview:
      "Redesigned the MSRTC website to improve usability, accessibility, and the bus ticket booking experience for users across devices.",
      image: msrtcCover,
    figmaUrl:
      "https://www.figma.com/proto/5vDvxTUNKt6KpQUs3DbTZH/MSRTC-Redesign-Case-Study?page-id=0%3A1&node-id=124-152&viewport=-60%2C313%2C0.05&t=aplyQOQJGTP2hDkx-1&scaling=scale-down&content-scaling=fixed",
  },

  /* ---------------- ANIMAL RESCUE ---------------- */
  'animal-rescue': {
    title: "Animal Rescue UI",
    role: "UI/UX Designer",
    duration: "2 months",
    tools: ["UI/UX", "Web", "Mobile"],
    overview:
      "A compassionate mobile and web interface that helps citizens report injured or lost animals and connect with nearby NGOs quickly.",
    image: animalCover,
    figmaUrl:
      "https://www.figma.com/proto/B8NwpvSNQjLEbLevBDtz5P/Animal-NGO-Case-Study?page-id=0%3A1&node-id=1-3&p=f&viewport=454%2C25%2C0.04&t=vKe85JqINHxYNr2f-1&scaling=scale-down&content-scaling=fixed",
  },

  /* ---------------- BLOOD BOND ---------------- */
  'blood-bond': {
    title: "Blood Bond",
    role: "Frontend Developer & UI Designer",
    duration: "4 weeks",
    tools: ["Frontend", "Web", "JavaScript"],
    overview:
      "A responsive web platform for human and pet blood donation built using HTML, CSS, and JavaScript.",
    image:
      "https://images.unsplash.com/photo-1615461066159-fea0960485d5?auto=format&fit=crop&w=1200&q=80",
  },

  /* ---------------- ANIMATED WEB PROTOTYPE ---------------- */
  'animated-prototype': {
    title: "Animated Web Design Prototype",
    role: "UI/UX Designer & Motion Designer",
    duration: "6 weeks",
    tools: ["Figma", "UI/UX", "Prototyping"],
    overview:
      "A high-fidelity Figma prototype exploring UI motion, micro-interactions, and visual storytelling.",
    figmaUrl:
      "https://www.figma.com/proto/YOUR_ANIMATED_PROTOTYPE_LINK",
  },

  /* ---------------- FIRE FIGHTER (FAiMN) ---------------- */
  'faimn-firefighter': {
    title: "FAiMN - Firefighters' Assistant IoT-based Monitoring Network",
    role: "UI/UX Designer",
    duration: "Major Project (Final Year)",
    tools: ["IoT", "Dashboard Design", "UI/UX", "Data Visualization"],
    overview:
      "Designed an intuitive dashboard interface for an IoT-based firefighter safety system enabling real-time monitoring of vital parameters.",
      image: faimnCover,
      figmaUrl:
      "https://www.figma.com/proto/YOUR_FIRE_FIGHTER_DASHBOARD_LINK",
  },

  /* ---------------- NUMCRAFT ---------------- */
  'numcraft': {
    title: "NumCraft",
    role: "Frontend Developer",
    duration: "2 weeks",
    tools: ["HTML", "CSS", "JavaScript"],
    overview:
      "A modern, fully responsive web-based calculator with smooth animations and an intuitive user experience.",
    image:
      "https://images.unsplash.com/photo-1637239990694-ba96d4b80acc?auto=format&fit=crop&w=1200&q=80",
  },
};


export default function CaseStudyTemplate() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? caseStudiesData[slug] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-gray-800 mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="
  min-h-screen
  bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50
  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
">

      <Navigation />

      <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() =>
              navigate("/", {
                state: { scrollTo: "work" },
              })
            }
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Projects</span>
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl text-gray-800 dark:text-gray-100 mb-4">
{caseStudy.title}</h1>
            
<div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300 mb-6">

              <div>
              <span className="block text-sm text-gray-500 dark:text-gray-400">
Role</span>
                <span>{caseStudy.role}</span>
              </div>
              <div>
              <span className="block text-sm text-gray-500 dark:text-gray-400">
Duration</span>
                <span>{caseStudy.duration}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {caseStudy.tools.map((tool) => (
                <span
                  key={tool}
                  className="
  px-4 py-2 rounded-full text-sm
  bg-gradient-to-r from-purple-100 to-pink-100
  dark:from-purple-800 dark:to-pink-800
  text-gray-700 dark:text-gray-100
"

                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="
  mb-16 rounded-3xl overflow-hidden shadow-2xl
  bg-white dark:bg-gray-900
"

  >
    <img
      src={caseStudy.image}
      alt={caseStudy.title}
      className="w-full max-h-[520px] object-contain mx-auto"
    />
  </motion.div>

          {/* Figma Case Study Section */}
{caseStudy.figmaUrl && (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="mt-16 space-y-8"
  >
    <h2 className="text-3xl text-gray-800 dark:text-gray-100 text-center">
      Interactive Case Study
    </h2>

    {/* Figma Embed */}
    <div className="
  relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl
  border border-white/60 dark:border-gray-700
  bg-white dark:bg-gray-900
"
>
      <iframe
        src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
          caseStudy.figmaUrl
        )}`}
        className="w-full h-full"
        allowFullScreen
      />
    </div>

    {/* Open in Figma Button */}
    <div className="text-center">
      <a
        href={caseStudy.figmaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
      >
        View Full Case Study in Figma →
      </a>
    </div>
  </motion.section>
)}


          {/* Back to Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <button
  onClick={() =>
    navigate("/", {
      state: { scrollTo: "work" },
    })
  }
  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-105 transition-all"
>
  View More Projects
</button>

          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children, delay }: { title: string; children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <h2 className="text-3xl text-gray-800 mb-4">{title}</h2>
      {children}
    </motion.div>
  );
}
