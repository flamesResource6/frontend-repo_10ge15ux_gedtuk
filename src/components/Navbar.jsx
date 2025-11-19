import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#chi-siamo", label: "Chi siamo" },
    { href: "#servizi", label: "Servizi" },
    { href: "#contatti", label: "Contatti" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-indigo-500/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-sky-400 shadow-[0_0_25px_rgba(99,102,241,0.6)]" />
          <span className="text-white font-semibold tracking-tight">Essere Indaco</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-200/90 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contatti"
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-600/20"
          >
            Prenota una call
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-200 hover:text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-indigo-500/10 bg-slate-900/80">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-200/90 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contatti"
              onClick={() => setOpen(false)}
              className="mt-1 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition"
            >
              Prenota una call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
