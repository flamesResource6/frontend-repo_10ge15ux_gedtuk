function CTA() {
  return (
    <section id="contatti" className="py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Pronti a dare forma al tuo progetto?
        </h2>
        <p className="mt-3 text-slate-300">
          Raccontaci obiettivi e tempistiche: ti risponderemo entro 24 ore con una proposta.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid gap-3 sm:grid-cols-2 text-left"
        >
          <input
            className="px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            placeholder="Nome e cognome"
            required
          />
          <input
            type="email"
            className="px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            placeholder="Email"
            required
          />
          <input
            className="sm:col-span-2 px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            placeholder="Azienda / Brand"
          />
          <textarea
            rows={4}
            className="sm:col-span-2 px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            placeholder="Raccontaci il progetto"
          />
          <button
            className="sm:col-span-2 mt-2 px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-600/20"
          >
            Invia richiesta
          </button>
        </form>
        <p className="mt-6 text-slate-400 text-sm">
          Oppure scrivici a <a className="text-indigo-300 hover:text-indigo-200" href="mailto:hello@essereindaco.it">hello@essereindaco.it</a>
        </p>
      </div>
    </section>
  );
}

export default CTA;
