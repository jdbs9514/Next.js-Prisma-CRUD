import {prisma} from "@/libs/prisma"

const loadTask = async () => {
  return await prisma.task.findMany();
}

const HomePage = async () => {
  const tasks = await loadTask();
  console.log(tasks);
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <div key={task.id} className="bg-sky-600 p-3 hover:bg-slate-800 cursor-pointer">
            <h3 className="font-bold text-2xl mb-2 text-white">{task.title}</h3>
            <p className="text-white">{task.description}</p>
            {/* convertir la fecha en otro formato */}
            <p className="text-white">{new Date(task.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomePage