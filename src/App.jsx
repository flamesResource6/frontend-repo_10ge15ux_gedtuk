import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.20),transparent_60%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-white/5 bg-slate-950/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Essere Indaco — Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="#chi-siamo" className="hover:text-indigo-300">Chi siamo</a>
            <a href="#servizi" className="hover:text-indigo-300">Servizi</a>
            <a href="#contatti" className="hover:text-indigo-300">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
