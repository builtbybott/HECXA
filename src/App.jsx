const foundationItems = [
  { label: 'Frontend framework', value: 'React 19.3.1' },
  { label: 'Build system', value: 'Vite 8.3.8' },
  { label: 'Styling foundation', value: 'Tailwind CSS 4.3.5' },
  { label: 'Backend migration', value: 'Not started — Supabase preserved' }
];

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050608] px-5 py-10 text-slate-100 sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <a className="text-xl font-semibold tracking-[0.38em] text-white" href="/" aria-label="HECXA home">HECXA</a>
          <span className="rounded-full border border-blue-300/20 bg-blue-300/5 px-3 py-1 text-xs font-medium tracking-wide text-blue-200">FOUNDATION / 01</span>
        </header>
        <section className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">Built by BOTT</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">A clearer space<span className="block text-slate-400">for focused work.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">The new HECXA frontend foundation is in place. The existing application and Supabase backend remain untouched while the interface is rebuilt in controlled phases.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-4 py-2 text-sm text-emerald-200"><span className="h-2 w-2 rounded-full bg-emerald-300" />React application mounted</span>
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400">Supabase not connected in this phase</span>
            </div>
          </div>
          <aside className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/30 sm:p-8">
            <div className="mb-7 flex items-center justify-between">
              <div><p className="text-xs uppercase tracking-[0.22em] text-slate-500">System foundation</p><h2 className="mt-2 text-xl font-semibold text-white">Phase 01 status</h2></div>
              <span className="rounded-lg border border-blue-300/20 bg-blue-300/10 px-3 py-2 text-xs font-semibold text-blue-200">ACTIVE</span>
            </div>
            <ul className="divide-y divide-white/[0.07]">
              {foundationItems.map((item) => <li className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4" key={item.label}><span className="text-sm text-slate-400">{item.label}</span><span className="text-sm font-medium text-slate-100 sm:text-right">{item.value}</span></li>)}
            </ul>
            <p className="mt-6 border-t border-white/[0.07] pt-5 text-xs leading-6 text-slate-500">This is a temporary foundation screen, not the final HECXA dashboard. Glassy UI components and feature migration belong to later approved phases.</p>
          </aside>
        </section>
        <footer className="flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between"><span>HECXA · Personal Productivity Workspace</span><span>Phase 01 · Frontend foundation only</span></footer>
      </div>
    </main>
  );
}
