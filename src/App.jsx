import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-white/60 text-sm">
            Crafted with React, Tailwind, Framer Motion, and Spline.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
