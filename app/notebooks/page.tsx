"use client";

import { useEffect, useState } from "react";

type Notebook = {
  id: number;
  name: string;
  pageCount: number;
};

export default function NotebooksPage() {
  const [notebooks, setNotebooks] = useState<Notebook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/notebook")
      .then((res) => res.json())
      .then((data) => {
        setNotebooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando notebooks:", err);
        setLoading(false);
      });
  }, []);

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

      {loading ? (
        <p className="text-zinc-500">Cargando notebooks...</p>
      ) : notebooks.length === 0 ? (
        <p className="text-zinc-500 italic">No hay notebooks disponibles.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {notebooks.map((notebook) => (
            <li
              key={notebook.id}
              className="rounded border border-zinc-300 px-4 py-3 text-zinc-800 dark:border-zinc-600 dark:text-zinc-200"
            >
              {notebook.name} ({notebook.pageCount} páginas)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
