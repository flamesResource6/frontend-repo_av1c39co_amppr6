import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Tell us about your idea</h2>
          <p className="text-slate-300 mt-3 max-w-xl">We’ll reply within 24 hours with a plan and estimate.
            Prefer WhatsApp? Add +244 and we’ll reach out.</p>

          <div className="mt-8 space-y-4">
            {[
              ['Strategy','Go-to-market, research, analytics'],
              ['Design','Brand, UI/UX, prototypes'],
              ['Engineering','Web, mobile, infrastructure'],
              ['Growth','SEO, ads, content, automation']
            ].map(([k,v]) => (
              <div key={k} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/50 p-4">
                <p className="text-white font-medium">{k}</p>
                <p className="text-slate-300 text-sm">{v}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-slate-300 text-sm">Name</label>
              <input type="text" className="mt-1 w-full rounded-lg bg-slate-800/80 border border-white/10 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Your name" />
            </div>
            <div>
              <label className="text-slate-300 text-sm">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg bg-slate-800/80 border border-white/10 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-slate-300 text-sm">Project type</label>
              <select className="mt-1 w-full rounded-lg bg-slate-800/80 border border-white/10 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
                <option>Website</option>
                <option>Mobile App</option>
                <option>Brand & Design</option>
                <option>Marketing</option>
                <option>Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-slate-300 text-sm">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-lg bg-slate-800/80 border border-white/10 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Tell us about your goals"></textarea>
            </div>
          </div>
          <button type="submit" className="mt-4 w-full px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold">Send</button>
        </form>
      </div>
    </section>
  );
}
