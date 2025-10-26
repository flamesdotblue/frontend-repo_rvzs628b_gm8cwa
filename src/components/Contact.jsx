import React from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.12),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Let's build something great</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            I'm open to full-time roles, internships, and freelance collaborations. Drop a message and I'll get back to you.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            action="https://formspree.io/f/mwkzgjqg"
            method="POST"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/80 mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Share a bit about what you're looking to build..."
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium hover:shadow-xl hover:shadow-white/20 transition"
            >
              Send Message
              <Send size={18} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h3 className="text-xl font-semibold text-white">Prefer email or socials?</h3>
            <p className="mt-2 text-white/80">Reach me directly via:</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:you@example.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white hover:bg-white/10 transition"
              >
                <Mail size={18} />
                you@example.com
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white hover:bg-white/10 transition"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white hover:bg-white/10 transition"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-white font-medium">What I bring</h4>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80 text-sm list-disc list-inside">
                <li>Pixel-perfect UI with accessible interactions</li>
                <li>Production-grade frontends with animations</li>
                <li>Full‑stack abilities with modern tooling</li>
                <li>Strong communication and ownership</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
