import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function UXSide() {
  const navigate = useNavigate();

  return (
    <>
      {/* UX-tinted background override */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 20%, rgba(212,83,126,0.06) 0%, transparent 60%)'
        }}
      />

      <Navigation />

      {/* Side indicator + back button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed top-6 right-6 z-50 flex items-center gap-3"
      >
        {/* Active side pill */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
          style={{
            background: '#FBEAF0',
            color: '#993556',
            border: '0.5px solid #F4C0D1'
          }}
        >
          <span>✦</span>
          <span>UI/UX Mode</span>
        </div>

        {/* Switch side button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/iot')}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all"
          style={{
            background: '#E6F1FB',
            color: '#185FA5',
            border: '0.5px solid #B5D4F4'
          }}
        >
          <span>⚡</span>
          <span>Switch to IoT</span>
        </motion.button>
      </motion.div>

      <main className="relative z-10">

        {/* Hero — UX intro */}
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20">
          <div className="max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-sm tracking-widest uppercase mb-3"
                style={{ color: '#993556' }}>
                UI/UX Design & Frontend Development
              </p>

              <h1 className="text-5xl md:text-7xl font-light text-gray-800 dark:text-gray-100 mb-6 leading-tight">
                Designing{' '}
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #D4537E, #9B5DE5)' }}>
                  warm,
                </span>
                <br />
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #9B5DE5, #378ADD)' }}>
                  intuitive
                </span>
                {' '}experiences.
              </h1>

              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed mb-10">
                I'm a UI/UX designer and frontend developer with a background in 
                Electronics & CS engineering. I design with real constraints in mind — 
                because I've also built the things I design for.
              </p>

              {/* Internship badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="px-4 py-2 rounded-full text-sm"
                  style={{ background: '#FBEAF0', color: '#993556', border: '0.5px solid #F4C0D1' }}>
                  Internship @ AD Web Technology
                </div>
                <div className="px-4 py-2 rounded-full text-sm"
                  style={{ background: '#FBEAF0', color: '#993556', border: '0.5px solid #F4C0D1' }}>
                  Internship @ Idea to Product (AICTE)
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 text-white rounded-full text-sm font-medium"
                  style={{ background: 'linear-gradient(135deg, #D4537E, #9B5DE5)' }}
                >
                  View my work
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/Resha Naik_Resume.pdf', '_blank')}
                  className="px-8 py-4 rounded-full text-sm font-medium border"
                  style={{
                    color: '#993556',
                    borderColor: '#F4C0D1',
                    background: 'white'
                  }}
                >
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Internships section */}
        <section className="px-6 md:px-12 lg:px-24 py-20" id="internships">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-widest uppercase mb-2"
                style={{ color: '#993556' }}>Experience</p>
              <h2 className="text-3xl font-light text-gray-800 dark:text-gray-100 mb-10">
                Internships
              </h2>
            </motion.div>

            <div className="space-y-6">
                {/* Internship — Godamwale (most recent, lead) */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="p-6 rounded-2xl border"
  style={{ background: '#FBEAF0', borderColor: '#F4C0D1' }}
>
  <div className="flex items-start justify-between mb-1">
    <div>
      <h3 className="text-lg font-medium text-gray-800">Godamwale</h3>
      <p className="text-sm" style={{ color: '#993556' }}>UX Designer Intern</p>
    </div>
    <div className="flex flex-col items-end gap-1">
      <span className="text-xs px-3 py-1 rounded-full"
        style={{ background: 'white', color: '#993556', border: '0.5px solid #F4C0D1' }}>
        Work published ✓
      </span>
      <span className="text-xs text-gray-400">Feb – May 2026 · 3 months</span>
    </div>
  </div>

  <p className="text-xs text-gray-400 mb-4 italic">
    Warehouse & logistics operations platform
  </p>

  <ul className="space-y-2 mb-5">
    {[
      'Improved warehouse operations by analysing user workflows and redesigning dashboards to reduce friction',
      'Converted product requirements into structured user flows, wireframes, and interactive Figma prototypes',
      'Worked closely with product and engineering teams to validate ideas and refine usability through iteration',
    ].map((point, i) => (
      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
        <span style={{ color: '#D4537E', marginTop: '2px', flexShrink: 0 }}>→</span>
        {point}
      </li>
    ))}
  </ul>

  <div className="flex items-center justify-between">
    <div className="flex flex-wrap gap-2">
      {['Figma', 'User Flows', 'Wireframing', 'Dashboard Design', 'Prototyping'].map(tag => (
        <span key={tag} className="text-xs px-3 py-1 rounded-full"
          style={{ background: 'white', color: '#993556', border: '0.5px solid #F4C0D1' }}>
          {tag}
        </span>
      ))}
    </div>
  </div>

  {/* Case study placeholder — swap this for a real link once ready */}
  <div className="mt-5 p-3 rounded-xl text-center border border-dashed"
    style={{ borderColor: '#F4C0D1' }}>
    <p className="text-xs text-gray-400">
      Case study in progress — check back soon
    </p>
  </div>
</motion.div>
              {/* Internship — AD Web Technology */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="p-6 rounded-2xl border bg-white dark:bg-gray-900"
  style={{ borderColor: '#F4C0D1' }}
>
  <div className="flex items-start justify-between mb-1">
    <div>
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
        AD Web Technology
      </h3>
      <p className="text-sm" style={{ color: '#993556' }}>
        UI/UX Design Intern · First & only intern
      </p>
    </div>
    <div className="flex flex-col items-end gap-1">
      <span className="text-xs px-3 py-1 rounded-full"
        style={{ background: '#FBEAF0', color: '#993556', border: '0.5px solid #F4C0D1' }}>
        Process shown
      </span>
      <span className="text-xs text-gray-400">Jun – Nov 2025 · 6 months</span>
    </div>
  </div>

  <p className="text-xs text-gray-400 mb-4 italic">
    Vehicle service & emergency assistance platform
  </p>

  <ul className="space-y-2 mb-5">
    {[
      'Joined as the first design intern at an early-stage startup — owned the design process end to end',
      'Designed high-fidelity mobile and web interfaces for a vehicle service and emergency assistance platform',
      'Created complex user flows, interactive dashboards, and Figma prototypes for both mobile and desktop',
    ].map((point, i) => (
      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
        <span style={{ color: '#D4537E', marginTop: '2px', flexShrink: 0 }}>→</span>
        {point}
      </li>
    ))}
  </ul>

  <div className="flex flex-wrap gap-2 mb-5">
    {['Figma', 'Mobile Design', 'Dashboard Design', 'User Flows', 'Prototyping'].map(tag => (
      <span key={tag} className="text-xs px-3 py-1 rounded-full"
        style={{ background: '#FBEAF0', color: '#993556', border: '0.5px solid #F4C0D1' }}>
        {tag}
      </span>
    ))}
  </div>

  {/* NDA note */}
  <div className="p-3 rounded-xl border border-dashed"
    style={{ borderColor: '#F4C0D1' }}>
    <p className="text-xs text-gray-400 leading-relaxed">
      <span style={{ color: '#D4537E' }}>Note —</span> The app is not yet publicly launched. 
      Final screens are not shown out of respect for the startup's IP. 
      Process work, wireframes, and research artifacts available on request.
    </p>
  </div>
</motion.div>
            </div>
          </div>
        </section>

        {/* Projects — reusing your existing component */}
        <div id="work">
          <Projects />
        </div>

{/* Skills — UX specific */}
<section className="px-6 md:px-12 lg:px-24 py-20" id="skills">
  <div className="max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-xs tracking-widest uppercase mb-2"
        style={{ color: '#993556' }}>Toolkit</p>
      <h2 className="text-3xl font-light text-gray-800 dark:text-gray-100 mb-10">
        Skills & Expertise
      </h2>
    </motion.div>

    <div className="space-y-8">
      {/* Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-sm font-medium mb-3" style={{ color: '#993556' }}>
          Design & Interaction
        </p>
        <div className="flex flex-wrap gap-3">
          {['UI/UX Design', 'Figma', 'Wireframing', 'Prototyping', 'Product Thinking', 'User Research', 'Information Architecture'].map(skill => (
            <span key={skill}
              className="px-4 py-2 rounded-full text-sm border"
              style={{ background: '#FBEAF0', color: '#993556', borderColor: '#F4C0D1' }}>
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Frontend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-sm font-medium mb-3" style={{ color: '#993556' }}>
          Frontend Development
        </p>
        <div className="flex flex-wrap gap-3">
          {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'].map(skill => (
            <span key={skill}
              className="px-4 py-2 rounded-full text-sm border"
              style={{ background: 'white', color: '#7B3F5E', borderColor: '#F4C0D1' }}>
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>

        {/* Achievements */}
        <section className="px-6 md:px-12 lg:px-24 py-20" id="achievements">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-widest uppercase mb-2"
                style={{ color: '#993556' }}>Recognition</p>
              <h2 className="text-3xl font-light text-gray-800 dark:text-gray-100 mb-10">
                Achievements
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Creathon SAKEC', result: '1st Place 🏆', year: 'Y4', note: 'Hardware & product design competition' },
                { title: 'Certificate of Commendation', result: 'Creativity Co-ordinator', year: 'Y3', note: 'SAKEC council recognition' },
                { title: 'Certificate of Merit', result: '1st Year Academic', year: 'Y1', note: 'SAKEC' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 rounded-2xl border bg-white dark:bg-gray-900"
                  style={{ borderColor: '#F4C0D1' }}
                >
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">
                      {item.title}
                    </h3>
                    <span className="text-xs text-gray-400">{item.year}</span>
                  </div>
                  <p className="text-sm font-medium mb-1" style={{ color: '#993556' }}>
                    {item.result}
                  </p>
                  <p className="text-xs text-gray-500">{item.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}