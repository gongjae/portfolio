import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const { userId } = auth()
  console.log(userId)
  return (
    <>
      <nav className="bg-blue-500 p-0.5 px-30">
        <div className="mb-4 bg-skyblue-200 p-10 m-4 rounded-lg">
          <div className="flex items-center justify-between container">
            <div className="flex items-center font-bold">
              <Link href="/">
                <div className="text-3xl text-white">Gongjae's Portfolio</div>
              </Link>
            </div>
            <div className="flex items-center font-bold">
              <>
                <Link
                  href="/about"
                  className="text-blue-300 hover:text-white mr-4"
                >
                  About
                </Link>
                <Link
                  href="/skills"
                  className="text-blue-300 hover:text-white mr-4"
                >
                  Skills
                </Link>
                <Link
                  href="/contents"
                  className="text-blue-300 hover:text-white mr-4"
                >
                  Contents
                </Link>
                <Link
                  href="/teamproject"
                  className="text-blue-300 hover:text-white mr-4"
                >
                  Team Project
                </Link>

                <Link
                  href="/contact"
                  className="text-blue-300 hover:text-white mr-4"
                >
                  Contact
                </Link>
              </>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
