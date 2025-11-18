import { useState } from 'react';
import { Menu, X, Sparkles, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function NavLink({ label, href }) {
  return (
    <a href={href} className="text-slate-200 hover:text-white transition-colors">
      {label}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Futuristic welcome banner */}
        <AnimatePresence>
          {showBanner && (
            <motion.div
              initial={{ y: -48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -48, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              className="mt-4 mb-2 overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40"
            >
              <div className="relative">
                {/* Animated glow stripe */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_10%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(50%_60%_at_90%_120%,rgba(99,102,241,0.25),transparent)]" />
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5">
                  <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 flex items-center justify-center shadow-[0_0_18px_rgba(56,189,248,0.55)]">
                    <Rocket size={16} className="text-white" />
                  </div>
                  <p className="text-sm text-slate-100">
                    <span className="mr-2 inline-flex items-center gap-1 rounded-md border border-cyan-300/30 bg-cyan-400/10 px-2 py-0.5 text-cyan-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
                      NEW
                    </span>
                    Welcome to Lyrical Corp — crafting technological and futuristic experiences from Luanda, Angola.
                  </p>
                  <motion.span
                    aria-hidden
                    className="ml-auto hidden sm:block text-xs text-cyan-200/80"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Explore our latest work ↓
                  </motion.span>
                  <button
                    aria-label="dismiss announcement"
                    onClick={() => setShowBanner(false)}
                    className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-slate-200 hover:text-white hover:bg-white/5"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main nav card */}
        <div className="mt-2 backdrop-blur-md bg-slate-900/40 border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-400 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.45)]">
              <Sparkles className="text-white" size={20} />
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-tight">Lyrical Corp</p>
              <p className="text-xs text-slate-300/70">Luanda • Angola</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#services" label="Services" />
            <NavLink href="#work" label="Work" />
            <NavLink href="#about" label="About" />
            <NavLink href="#contact" label="Contact" />
            <a href="#contact" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90 transition">Start a Project</a>
          </nav>

          <button aria-label="menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 backdrop-blur-md bg-slate-900/60 border border-white/10 rounded-2xl p-4">
            <div className="flex flex-col gap-4 text-slate-200">
              <a href="#services" onClick={() => setOpen(false)}>Services</a>
              <a href="#work" onClick={() => setOpen(false)}>Work</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium text-center">Start a Project</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
