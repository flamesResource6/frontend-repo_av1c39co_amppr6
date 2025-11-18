import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(2,6,23,0)_0%,rgba(2,6,23,1)_70%)] pointer-events-none" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-start gap-8">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 text-sm text-cyan-300/90 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
            Lyrical Corp — Digital Experiences that Sing
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Modern Websites, Apps & Marketing
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="max-w-2xl text-lg sm:text-xl text-slate-200">
            Based in Luanda, Angola. We blend design, code and strategy to craft interactive products and bold brand stories.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow hover:translate-y-0.5 transition">Start your project</a>
            <a href="#work" className="px-5 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white font-semibold hover:bg-slate-900/80 transition">See our work</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
