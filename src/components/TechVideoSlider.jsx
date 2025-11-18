import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const slidesData = [
  {
    title: 'Programming',
    subtitle: 'Clean, scalable codebases',
    src: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcm9ncmFtbWluZ3xlbnwwfDB8fHwxNzYzNDc3Mzk5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'App Build',
    subtitle: 'Mobile-first experiences',
    src: 'https://images.unsplash.com/photo-1609921133942-9e485ac26bc8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcHAlMjBCdWlsZHxlbnwwfDB8fHwxNzYzNDc3NDAwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Hardware & IoT',
    subtitle: 'Electronics and embedded systems',
    src: 'https://images.unsplash.com/photo-1605387132052-357a341cc515?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYXJkd2FyZSUyMCUyNiUyMElvVHxlbnwwfDB8fHwxNzYzNDc3NDAwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function TechVideoSlider() {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef(null);
  const videosRef = useRef([]);

  const next = () => setIndex((i) => (i + 1) % slidesData.length);
  const prev = () => setIndex((i) => (i - 1 + slidesData.length) % slidesData.length);

  // Autoplay logic
  useEffect(() => {
    if (!autoPlay || hovering) return;
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(next, 6000);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [index, autoPlay, hovering]);

  // Ensure videos play muted on mount
  useEffect(() => {
    videosRef.current.forEach((video) => {
      if (video) {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise.catch(() => {});
        }
      }
    });
  }, []);

  const progress = useMemo(() => ({
    initial: { width: '0%' },
    animate: { width: '100%', transition: { duration: 6, ease: 'linear' } },
  }), []);

  return (
    <section className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Technology in Motion
            </h2>
            <p className="mt-2 text-slate-400">From code to production — a glimpse of our craft.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              aria-label="Previous"
              onClick={prev}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition"
            >
              <ChevronRight size={18} />
            </button>
            <button
              aria-label={autoPlay ? 'Pause autoplay' : 'Play autoplay'}
              onClick={() => setAutoPlay((p) => !p)}
              className="ml-2 p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/20 text-cyan-300 transition"
            >
              {autoPlay ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-950 shadow-2xl"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />

          {/* Slides */}
          <div className="relative w-full">
            <motion.div
              className="flex"
              animate={{ x: `-${index * 100}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 22 }}
              style={{ width: `${slidesData.length * 100}%` }}
            >
              {slidesData.map((slide, i) => (
                <div key={i} className="w-full shrink-0 aspect-[16/9] relative">
                  <video
                    ref={(el) => (videosRef.current[i] = el)}
                    className="absolute inset-0 h-full w-full object-cover"
                    src={slide.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='100%25' height='100%25' fill='%230a0f1c'/%3E%3C/svg%3E"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <AnimatePresence mode="wait">
                      {index === i && (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.35 }}
                          className="max-w-xl"
                        >
                          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-300 mb-2">
                            <span className="block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            {slide.title}
                          </div>
                          <h3 className="text-white text-xl sm:text-2xl font-semibold">
                            {slide.subtitle}
                          </h3>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls (mobile) */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:hidden flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous"
                onClick={prev}
                className="p-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="p-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <button
              aria-label={autoPlay ? 'Pause autoplay' : 'Play autoplay'}
              onClick={() => setAutoPlay((p) => !p)}
              className="p-2 rounded-lg bg-cyan-500/20 backdrop-blur border border-cyan-400/30 text-cyan-200"
            >
              {autoPlay ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>

          {/* Progress bar */}
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-white/10">
            <motion.div
              key={index + (autoPlay && !hovering ? '-running' : '-paused')}
              className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
              initial={progress.initial}
              animate={autoPlay && !hovering ? progress.animate : { width: '0%' }}
            />
          </div>
        </div>

        {/* Dots */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {slidesData.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                index === i ? 'w-6 bg-cyan-400' : 'w-2.5 bg-white/20 hover:bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
