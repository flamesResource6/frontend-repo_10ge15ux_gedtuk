import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section id="top" className="pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 text-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Trasforma visioni in esperienze
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Essere Indaco
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Design, branding e strategie digitali che connettono emozioni e risultati. Costruiamo identità memorabili e siti che performano.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contatti"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-600/20"
              >
                Iniziamo insieme
                <ArrowRight size={18} />
              </a>
              <a
                href="#servizi"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-800/70 hover:bg-slate-800 text-slate-200 border border-white/10"
              >
                Scopri i servizi
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-400 text-sm">
              <span>Branding</span>
              <span>UX/UI</span>
              <span>Siti Web</span>
              <span>Content</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-transparent">
              <img
                src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop"
                alt="Essere Indaco"
                className="w-full h-full object-cover mix-blend-luminosity opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-slate-900/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
