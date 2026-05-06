import Navigation from '../components/Navigation';
import SplitIllustration from '../components/SplitIllustration';
import About from '../components/About';
import Education from '../components/Education';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="relative z-10">
        <SplitIllustration />
        <About />
        <Education />
      </main>
      <Footer />
    </>
  );
}