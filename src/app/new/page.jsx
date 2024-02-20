"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewTask = ({ params }) => {

  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        })
    }
  }, []);

  const onSubmit = async (e) => {

    e.preventDefault();
    // creamos esta condicion para ver si el id existe o no, en caso exista el id se vera reflejado en la url, caso contrario lo podemos actualizar o crear
    if (params.id) {
      // condicion para actualizar
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "content-type": "application/json",
        },
      })
      const data = await res.json()
      console.log(data)
    } else {
      // condicion para crear
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json()
    }

    router.push("/")
    router.refresh()
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-sky-600 p-10 w-1/4 rounded"
        onSubmit={onSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm">
          Task Title
        </label>
        <input
          id="title"
          type="text"
          className="border border-gray-400 w-full p-2 mb-4"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="description" className="font-bold text-sm">
          Description
        </label>
        <textarea
          id="description"
          type="text"
          rows={3}
          className="border border-gray-400 p-2 mb-4 w-full"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-white font-bold py-2 px-4 rounded hover:bg-slate-300"
          >
            Submit
          </button>
          {
            params.id && (
              <button
                className="bg-red-500 font-bold py-2 px-4 rounded hover:bg-slate-300 text-white"
                type="button"
                onClick={async () => {
                  const res = await fetch(`/api/tasks/${params.id}`, {
                    method: "DELETE",
                  })
                  const data = await res.json()
                  router.push("/")
                  router.refresh()
                }}
              >
                Delete
              </button>
            )
          }
        </div>
      </form>
    </div>
  )
}

export default NewTask