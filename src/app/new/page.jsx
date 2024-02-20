"use client"
import { useRouter } from "next/navigation";

const NewTask = () => {

  const router = useRouter();

  const onSubmit = async (e) => {
    
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "content-type": "application/json",
      },
    })
    const data = await res.json()
    console.log(data)
    router.push("/")
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
        />
        <button
          className="bg-white font-bold py-2 px-4 rounded hover:bg-slate-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default NewTask