import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Rooted in Luanda, building for the world</h2>
          <p className="text-slate-300 mt-4">We’re a multidisciplinary studio blending strategy, design and engineering. Our team crafts interactive experiences that feel effortless and perform beautifully.</p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {[['12+','Years Experience'], ['60+','Projects Shipped'], ['8','Industries'], ['4.9/5','Client Rating']].map(([k,v],i)=> (
              <motion.div key={k} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                <p className="text-3xl font-extrabold text-white">{k}</p>
                <p className="text-slate-300">{v}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-2xl rounded-3xl" />
          <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop" alt="Studio" className="relative rounded-3xl border border-white/10" />
        </div>
      </div>
    </section>
  );
}
