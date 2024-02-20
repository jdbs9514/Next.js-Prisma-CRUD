import {prisma} from "@/libs/prisma"
import TaskCard from "@/components/TaskCard";

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
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  )
}

export default HomePage