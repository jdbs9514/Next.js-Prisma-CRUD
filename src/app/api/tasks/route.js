import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

export const GET = async () => {
  const tasks = await prisma.task.findMany()
  return NextResponse.json(tasks)
}

export const POST = async (request) => {
  // const {title, description} = request.json() -- destructurando el objeto
  const data = await request.json()

  const newTask = await prisma.task.create({
    data: {
      // title,
      title: data.title,

      // description
      description: data.description
    }
  })
  return NextResponse.json(newTask)
}
