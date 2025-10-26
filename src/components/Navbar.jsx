import React from 'react';
import { Github, Linkedin, Mail, Rocket, Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-sm md:text-base text-white/80 hover:text-white transition-colors px-3 py-2"
      onClick={() => setOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20">
              <Rocket size={18} />
            </div>
            <span className="text-white font-semibold tracking-tight group-hover:text-indigo-300 transition-colors">
              Your Name
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:you@example.com"
              className="px-3 py-2 rounded-lg bg-white text-black font-medium hover:shadow-lg hover:shadow-white/10 transition flex items-center gap-2"
            >
              <Mail size={16} />
              <span>Contact</span>
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle Menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="flex items-center gap-2 pt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition">
                <Linkedin size={18} />
              </a>
              <a href="mailto:you@example.com" className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition">
                <Mail size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
