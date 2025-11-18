import { motion } from 'framer-motion';

const works = [
  {
    title: 'E-commerce Revamp',
    tag: 'Web + Growth',
    img: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop',
    desc: 'Headless storefront with personalized journeys and 42% lift in conversions.'
  },
  {
    title: 'Fintech Super App',
    tag: 'App + Data',
    img: 'https://images.unsplash.com/photo-1550565099-02896e5b2a3a?q=80&w=1600&auto=format&fit=crop',
    desc: 'Secure mobile banking with micro-interactions and real-time analytics.'
  },
  {
    title: 'Brand Reimagined',
    tag: 'Brand + Site',
    img: 'https://images.unsplash.com/photo-1558888400-16c9b9bdbc2f?q=80&w=1600&auto=format&fit=crop',
    desc: 'A bold identity and responsive design system that scales across touchpoints.'
  },
  {
    title: 'Hospitality Booking',
    tag: 'Web App',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
    desc: 'Self-serve booking experience with seamless payments and CRM integration.'
  },
  {
    title: 'SaaS Dashboard',
    tag: 'Product',
    img: 'https://images.unsplash.com/photo-1551281044-8d8d0d8ff6fb?q=80&w=1600&auto=format&fit=crop',
    desc: 'Modular analytics with real-time charts and enterprise-grade access control.'
  },
  {
    title: 'Campaign Engine',
    tag: 'Marketing',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    desc: 'Multi-channel automation, content pipelines and attribution you can trust.'
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Selected Work</h2>
            <p className="text-slate-300 mt-3 max-w-2xl">A mix of shipped products, brand launches and measurable growth wins.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold">Work with us</a>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/70">
              <div className="relative h-56 overflow-hidden">
                <img src={w.img} alt={w.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4 text-xs px-2.5 py-1 rounded-full bg-white/90 text-slate-900 font-semibold">{w.tag}</div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{w.title}</h3>
                <p className="text-slate-300/90 mt-1">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
