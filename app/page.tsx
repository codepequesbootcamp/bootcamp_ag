export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-16 font-sans dark:bg-zinc-950">
      <main className="flex w-full max-w-xl flex-col items-center gap-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 120"
          width={140}
          height={140}
          role="img"
          aria-label="Logo Aplicación de Notebooks"
          className="rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700"
        >
          <rect width="120" height="120" fill="#ffffff" />
          <rect x="18" y="22" width="84" height="76" rx="6" fill="#0D9488" />
          <rect x="24" y="28" width="34" height="64" fill="#ffffff" />
          <rect x="62" y="28" width="34" height="64" fill="#ffffff" />
          <line x1="30" y1="40" x2="52" y2="40" stroke="#0D9488" strokeWidth="2" />
          <line x1="30" y1="50" x2="52" y2="50" stroke="#0D9488" strokeWidth="2" />
          <line x1="30" y1="60" x2="52" y2="60" stroke="#0D9488" strokeWidth="2" />
          <line x1="30" y1="70" x2="52" y2="70" stroke="#0D9488" strokeWidth="2" />
          <line x1="68" y1="40" x2="90" y2="40" stroke="#0D9488" strokeWidth="2" />
          <line x1="68" y1="50" x2="90" y2="50" stroke="#0D9488" strokeWidth="2" />
          <line x1="68" y1="60" x2="90" y2="60" stroke="#0D9488" strokeWidth="2" />
          <g transform="translate(78 48) rotate(-35)">
            <rect x="-4" y="-22" width="8" height="36" rx="2" fill="#0F172A" />
            <polygon points="-4,14 4,14 0,24" fill="#0F172A" />
            <circle cx="0" cy="10" r="1.5" fill="#ffffff" />
          </g>
        </svg>

        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Aplicación de Notebooks
        </h1>

        <p className="flex flex-col gap-3 text-lg font-medium sm:flex-row sm:gap-6">
          <a
            href="/notebooks"
            className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
          >
            Lista de notebooks
          </a>
          <a
            href="/notebooks/new"
            className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
          >
            Agregar notebook
          </a>
        </p>
      </main>
    </div>
  );
}
