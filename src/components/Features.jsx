import { Palette, Rocket, PanelsTopLeft, LineChart } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Branding & Identità",
    desc: "Naming, logo e visual language coerenti su tutti i touchpoint.",
  },
  {
    icon: PanelsTopLeft,
    title: "UX/UI Design",
    desc: "Wireframe e interfacce orientate alla conversione e all'accessibilità.",
  },
  {
    icon: Rocket,
    title: "Siti Web & Landing",
    desc: "Sviluppo veloce, ottimizzazione SEO tecnica e performance eccellenti.",
  },
  {
    icon: LineChart,
    title: "Strategia & Content",
    desc: "Piani editoriali, tone of voice e campagne con metriche misurabili.",
  },
];

function Features() {
  return (
    <section id="servizi" className="py-20 sm:py-24 border-t border-white/5 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Cosa facciamo</h2>
          <p className="mt-3 text-slate-300">
            Uniamo creatività e metodo per portare il tuo brand dove merita.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-indigo-500/20 bg-slate-900/40 p-6 hover:bg-slate-900/60 transition">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
