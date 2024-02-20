import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-slate-400">
      <div className="container mx-auto flex justify-between items-center py-3">
        <h3 className="font-bold text-3xl text-white">
          NextCRUD
        </h3>
        <ul className="flex gap-4 text-white">
          <li>
            <Link href="/">
              Task
            </Link>
          </li>
          <li>
            <Link href="/new">
              New
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar