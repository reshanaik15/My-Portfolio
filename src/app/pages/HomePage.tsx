import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Skills from '../components/Skills';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Education />
        <Skills />
        <About />
        <Projects />
      </main>

      <Footer />
    </>
  );
}
