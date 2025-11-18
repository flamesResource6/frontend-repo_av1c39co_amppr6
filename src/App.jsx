import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import TechVideoSlider from './components/TechVideoSlider';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <div className="fixed inset-0 -z-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="fixed inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(34,211,238,0.12),transparent_60%)] pointer-events-none" />

      <Navbar />
      <main>
        <Hero />
        <TechVideoSlider />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <footer className="py-12 border-t border-white/10 mt-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-semibold">Lyrical Corp</p>
            <p className="text-slate-400">© {new Date().getFullYear()} All rights reserved. Built in Luanda, Angola.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;