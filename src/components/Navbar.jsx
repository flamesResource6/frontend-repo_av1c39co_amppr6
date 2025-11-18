import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

function NavLink({ label, href }) {
  return (
    <a href={href} className="text-slate-200 hover:text-white transition-colors">
      {label}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-md bg-slate-900/40 border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between">
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
