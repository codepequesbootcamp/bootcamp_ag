"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useParams } from "next/navigation";

export default function EditNotebookPage() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch(`/api/notebook/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setPageCount(String(data.pageCount));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando notebook:", err);
        setLoading(false);
      });
  }, [id]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await fetch(`/api/notebook/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        pageCount: Number(pageCount),
      }),
    });
    if (res.ok) {
      setMensaje("Guardado");
    }
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-md p-8 font-sans">
        <p className="text-zinc-500">Cargando...</p>
      </div>
    );
  }

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
          href="/notebooks"
          className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Lista de notebooks
        </a>
      </nav>
      <h1 className="mb-6 text-2xl font-semibold text-black dark:text-zinc-50">
        Editar notebook
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Nombre
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded border border-zinc-300 px-3 py-2 text-base text-black outline-none focus:border-blue-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Número de páginas
          <input
            type="number"
            name="pageCount"
            value={pageCount}
            onChange={(e) => setPageCount(e.target.value)}
            className="rounded border border-zinc-300 px-3 py-2 text-base text-black outline-none focus:border-blue-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50"
          />
        </label>
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          Guardar
        </button>
      </form>
      {mensaje && (
        <p className="mt-4 text-sm font-medium text-green-700 dark:text-green-400">
          {mensaje}
        </p>
      )}
    </div>
  );
}
