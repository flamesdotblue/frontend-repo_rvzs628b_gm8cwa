import React from 'react';
import { ExternalLink, Code, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Realtime Chat App',
    description:
      'A full‑stack chat platform with websockets, message receipts, and offline support.',
    tags: ['React', 'FastAPI', 'WebSocket', 'MongoDB'],
    link: '#',
    stars: '1.2k',
    gradient: 'from-indigo-500 via-purple-500 to-fuchsia-500',
  },
  {
    title: 'AI Code Assistant',
    description:
      'Context‑aware code generation and refactors powered by embeddings and LLMs.',
    tags: ['TypeScript', 'LLM', 'Vite', 'Vector DB'],
    link: '#',
    stars: '980',
    gradient: 'from-blue-500 via-cyan-500 to-emerald-500',
  },
  {
    title: '3D Product Showcase',
    description:
      'An interactive 3D experience with Spline scenes and scroll‑based animations.',
    tags: ['Spline', 'Framer Motion', 'Three.js'],
    link: '#',
    stars: '760',
    gradient: 'from-rose-500 via-orange-500 to-amber-500',
  },
];

const Card = ({ p }) => (
  <motion.a
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    href={p.link}
    className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden hover:border-white/20 hover:bg-white/10 transition"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-20 group-hover:opacity-30 transition pointer-events-none`} />

    <div className="p-6 relative z-10">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-white/80 text-xs">
          <Code size={14} /> Project
        </div>
        <div className="inline-flex items-center gap-1 text-amber-300/90 text-xs">
          <Star size={14} className="fill-amber-300/80 text-amber-300/80" />
          {p.stars}
        </div>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-white tracking-tight">{p.title}</h3>
      <p className="mt-2 text-white/80 text-sm">{p.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-black/50 border border-white/10 text-white/70">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center gap-1 text-white/90 group-hover:gap-2 transition-all">
        <span className="text-sm font-medium">See details</span>
        <ExternalLink size={16} />
      </div>
    </div>
  </motion.a>
);

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 md:py-28 bg-gradient-to-b from-black via-black to-black/95">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Featured Work</h2>
          <p className="mt-3 text-white/80">
            A selection of projects that highlight product thinking, engineering rigor, and delightful interactions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
