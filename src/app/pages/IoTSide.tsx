import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function IoTSide() {
  const navigate = useNavigate();

  return (
    <>
      {/* IoT-tinted background */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(55,138,221,0.06) 0%, transparent 60%)'
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
        <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
          style={{
            background: '#E6F1FB',
            color: '#185FA5',
            border: '0.5px solid #B5D4F4'
          }}
        >
          <span>⚡</span>
          <span>IoT Mode</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/ux')}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
          style={{
            background: '#FBEAF0',
            color: '#993556',
            border: '0.5px solid #F4C0D1'
          }}
        >
          <span>✦</span>
          <span>Switch to UI/UX</span>
        </motion.button>
      </motion.div>

      <main className="relative z-10">

        {/* Hero — IoT intro */}
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20">
          <div className="max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-sm tracking-widest uppercase mb-3"
                style={{ color: '#185FA5' }}>
                Electronics & IoT Engineering
              </p>

              <h1 className="text-5xl md:text-7xl font-light text-gray-800 dark:text-gray-100 mb-6 leading-tight">
                Building things that{' '}
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #378ADD, #1D9E75)' }}>
                  sense
                </span>
                <br />
                the real world.
              </h1>

              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed mb-10">
                I design and build hardware-connected systems — from sensor networks 
                to the interfaces that make their data human-readable. My engineering 
                background means I design with real constraints in mind.
              </p>

              {/* Skills pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {['ESP32', 'LoRa SX1278', 'PCB (KiCad)', 'Python', 'IoT Systems', 'Dashboard Design'].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-full text-sm"
                    style={{ background: '#E6F1FB', color: '#185FA5', border: '0.5px solid #B5D4F4' }}>
                    {skill}
                  </span>
                ))}
              </div>
<div className="flex gap-4"><motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('iot-projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 text-white rounded-full text-sm font-medium"
                style={{ background: 'linear-gradient(135deg, #378ADD, #1D9E75)' }}
              >
                See my builds
              </motion.button>
                 <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
  onClick={() => window.open('/Resha-Naik-IoT-Resume.pdf', '_blank')}
  className="px-8 py-4 rounded-full text-sm font-medium border"
  style={{
    color: '#185FA5',
    borderColor: '#B5D4F4',
    background: 'white'
  }}
>
  Download Resume
</motion.button></div>
              
            </motion.div>
          </div>
        </section>

        {/* Internship */}
        <section className="px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-widest uppercase mb-2"
                style={{ color: '#185FA5' }}>Experience</p>
              <h2 className="text-3xl font-light text-gray-800 dark:text-gray-100 mb-10">
                Internship
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border"
              style={{ background: '#E6F1FB', borderColor: '#B5D4F4' }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Idea to Product Development
                  </h3>
                  <p className="text-sm" style={{ color: '#185FA5' }}>
                    AICTE Idea Lab — Hardware Engineering Intern
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full"
                  style={{ background: 'white', color: '#185FA5', border: '0.5px solid #B5D4F4' }}>
                  Completed ✓
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hands-on hardware internship at AICTE Idea Lab. Worked on product 
                development from ideation to prototype. Add what you specifically 
                built or worked on here.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section className="px-6 md:px-12 lg:px-24 py-20" id="iot-projects">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-widest uppercase mb-2"
                style={{ color: '#185FA5' }}>Work</p>
              <h2 className="text-3xl font-light text-gray-800 dark:text-gray-100 mb-10">
                Projects
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
  {
    title: 'FAiMN',
    subtitle: "Firefighters' Assistant IoT Monitoring Network — Major Project",
    desc: 'LoRa mesh network for real-time firefighter safety monitoring. Sensors track temperature, gas levels, and node status across a hazardous environment. Designing the dashboard to make critical data instantly readable under pressure.',
    tags: ['ESP32', 'Heltec Esp','LoRa SX1278', 'PCB Design', 'Dashboard UX', 'Figma', 'Flutter'],
    status: 'Major Project',
    accent: '#1D9E75',
    bg: 'rgba(29,158,117,0.06)',
    border: 'rgba(29,158,117,0.2)'
  },
  {
    title: 'Assistive Suction Glove',
    subtitle: 'Assistive Hardware',
    desc: 'Built a 12V pneumatic assistive glove for a physiotherapy tremor-patient research project – engineered a MOSFET-based pump control circuit (12V Li-ion, push-button actuation) and handled all mechanical assembly: tubing, 3 suction cups, and glove integration. Designed to enable object pickup without grip force.',
    tags: ['Assistive Tech', 'PCB Design', 'Wearables', 'Hardware Prototyping', 'Mechanical Assembly'],
    status: 'Ongoing',
    accent: '#378ADD',
    bg: 'rgba(55,138,221,0.06)',
    border: 'rgba(55,138,221,0.2)'
  },
].map((proj, i) => (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border cursor-pointer"
                  style={{ background: proj.bg, borderColor: proj.border }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                        {proj.title}
                      </h3>
                      <p className="text-sm" style={{ color: proj.accent }}>
                        {proj.subtitle}
                      </p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-white dark:bg-gray-900"
                      style={{ color: proj.accent, border: `0.5px solid ${proj.border}` }}>
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white dark:bg-gray-900"
                        style={{ color: proj.accent, border: `0.5px solid ${proj.border}` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-widest uppercase mb-2"
                style={{ color: '#185FA5' }}>Recognition</p>
              <h2 className="text-3xl font-light text-gray-800 dark:text-gray-100 mb-10">
                Achievements
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Creathon SAKEC', result: '1st Place 🏆', year: 'Y4', note: 'Hardware & product design competition' },
                { title: 'TECH-EXPO 3.0', result: '1st Place 🏆', year: 'Y4', note: 'Hardware competition' },
                { title: 'FCRIT Avishkar 2026', result: '2nd Place 🥈', year: 'Y4', note: 'Inter-college research competition' },
                { title: 'Avishkar 2025', result: 'Zonal + Final Round', year: 'Y4', note: 'Made it to state-level finals' },
                { title: 'Smart India Hackathon', result: 'Participated', year: 'Y2', note: 'National level hackathon' },
                { title: 'Harwired Infotsav\'25', result: 'Participated', year: 'Y4', note: 'Hardware fest at IIITG' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 rounded-2xl border bg-white dark:bg-gray-900"
                  style={{ borderColor: '#B5D4F4' }}
                >
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">
                      {item.title}
                    </h3>
                    <span className="text-xs text-gray-400">{item.year}</span>
                  </div>
                  <p className="text-sm font-medium mb-1" style={{ color: '#185FA5' }}>
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