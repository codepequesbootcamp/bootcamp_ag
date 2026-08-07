"use client";

import { useState } from "react";

export default function NewNotebookPage() {
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/notebook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        pageCount: Number(formData.get("pageCount")) - 1 ,
      }),
    });
    if (res.ok) {
      setMessage("Guardado");
    }
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
        Agregar notebook
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Nombre
          <input
            type="text"
            name="name"
            placeholder="Ejemplo: Mi notebook"
            className="rounded border border-zinc-300 px-3 py-2 text-base text-black outline-none focus:border-blue-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Número de páginas
          <input
            type="number"
            name="pageCount"
            placeholder="Ejemplo: 10"
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
      {message ? (
        <p className="mt-4 text-sm font-medium text-green-700 dark:text-green-400">
          {message}
        </p>
      ) : null}
    </div>
  );
}
