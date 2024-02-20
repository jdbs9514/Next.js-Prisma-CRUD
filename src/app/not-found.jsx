import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <section className="flex justify-center h-[calc(100vh-7rem)] items-center">
      <div className="text-center">
        <h3 className="text-4xl font-bold">
          Not Found
        </h3>
        <Link href="/">
          Go to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound