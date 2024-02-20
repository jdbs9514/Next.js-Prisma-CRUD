import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export const GET = async (request, { params }) => {
  const task = await prisma.task.findUnique({
    where: {
      // se hace la conversion con "Number" porque la peticion entiende que es un string y no un numero
      id: Number(params.id)
    }
  })
  return NextResponse.json(task)
}

export const PUT = async (request, { params }) => {
  const data = await request.json()

  const taskUpdated = await prisma.task.update({
    where: {
      id: Number(params.id)
    },
    // en esta parte del codigo se declara los datos a actualizar, en este caso todo lo de la base de datos.
    data: data,
  })
  return NextResponse.json(taskUpdated)
}

export const DELETE = async (request, { params }) => {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        // se hace la conversion con "Number" porque la peticion entiende que es un string y no un numero
        id: Number(params.id)
      }
    })
    return NextResponse.json(taskRemoved)

  } catch (error) {
    return NextResponse.json(error.message)
  }
}