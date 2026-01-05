import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import CaseStudyTemplate from './pages/CaseStudyTemplate';
import SplashScreen from './components/SplashScreen';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashShown = sessionStorage.getItem('splashShown');
    if (splashShown === 'true') {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('splashShown', 'true');
  };

  return (
    <div className="
  min-h-screen overflow-x-hidden
  bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50
  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
  transition-colors duration-300
">

      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Background mesh gradient overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
  <div className="absolute top-0 left-0 w-96 h-96 
    bg-purple-300 dark:bg-purple-800
    rounded-full mix-blend-multiply filter blur-3xl animate-blob" />

  <div className="absolute top-0 right-0 w-96 h-96 
    bg-pink-300 dark:bg-pink-800
    rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />

  <div className="absolute bottom-0 left-1/2 w-96 h-96 
    bg-blue-300 dark:bg-blue-800
    rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
</div>

      <BrowserRouter>
        {/* ✅ THIS is the key */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<CaseStudyTemplate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
