import { motion } from 'framer-motion';
import { Code2, Smartphone, Rocket, Megaphone, Paintbrush, Database } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'High-performance websites built with modern stacks, optimized for speed and SEO.'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Cross-platform mobile apps with delightful UX and robust architecture.'
  },
  {
    icon: Megaphone,
    title: 'Marketing & Growth',
    desc: 'Campaigns, content and funnels that drive measurable results and brand love.'
  },
  {
    icon: Paintbrush,
    title: 'Brand & UI Design',
    desc: 'Bold visual identities, product design systems, and conversion-focused interfaces.'
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    desc: 'Event tracking, dashboards and insights to inform every decision.'
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    desc: 'DevOps, QA and ongoing care so products ship smoothly and stay fast.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Capabilities</h2>
          <p className="text-slate-300 mt-3 max-w-2xl">A full-stack studio crafting end-to-end experiences for ambitious brands in Angola and beyond.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:bg-slate-900/70 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                <Icon />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-slate-300/90 mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
