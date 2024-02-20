"use client"
import { useRouter } from "next/navigation"

const TaskCard = ({ task }) => {
  const router = useRouter()

  return (
    <div 
      className="bg-sky-600 p-3 hover:bg-slate-800 cursor-pointer"
      onClick={() => router.push('/tasks/edit/' + task.id)}
    >
      <h3 className="font-bold text-2xl mb-2 text-white">{task.title}</h3>
      <p className="text-white">{task.description}</p>
      {/* convertir la fecha en otro formato */}
      <p className="text-white">{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  )
}

export default TaskCard