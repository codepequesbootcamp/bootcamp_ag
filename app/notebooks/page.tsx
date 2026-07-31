export default function NotebooksPage() {
  return (
    <div className="mx-auto max-w-md p-8 font-sans">
      <nav className="mb-6 flex gap-4 text-sm font-medium">
        <a
          href="/"
          className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Inicio
        </a>
        <a
          href="/notebooks/new"
          className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Nuevo notebook
        </a>
      </nav>
      <h1 className="mb-6 text-2xl font-semibold text-black dark:text-zinc-50">
        Lista de notebooks
      </h1>
      <ul className="flex flex-col gap-2">
        <li className="rounded border border-zinc-300 px-4 py-3 text-zinc-800 dark:border-zinc-600 dark:text-zinc-200">
          Notebook de ejemplo 1
        </li>
        <li className="rounded border border-zinc-300 px-4 py-3 text-zinc-800 dark:border-zinc-600 dark:text-zinc-200">
          Notebook de ejemplo 2
        </li>
        <li className="rounded border border-zinc-300 px-4 py-3 text-zinc-800 dark:border-zinc-600 dark:text-zinc-200">
          Notebook de ejemplo 3
        </li>
      </ul>
    </div>
  );
}
