import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const { userId } = auth()
  console.log(userId)
  return (
    <>
      <nav className="bg-black py-10 px-20">
        <div className="mb-4 bg-gray-500 p-4 m-4 rounded-lg">
          <div className="flex items-center justify-between container">
            <div className="flex items-center font-bold">
              <Link href="/">
                <div className="text-2xl text-white">Gongjae's Portfolio</div>
              </Link>
              <div></div>
            </div>
            <div className="flex items-center font-bold">
              {!userId ? (
                //로그인이 안된 경우
                <>
                  <div className="text-lg text-white p-7">
                    {' '}
                    로그인 해주세요~
                  </div>
                  <Link
                    href="/sign-in"
                    className="text-yellow-300 hover:text-white mr-4"
                  >
                    로그인
                  </Link>
                  <Link
                    href="/sign-up"
                    className="text-yellow-300 hover:text-white mr-4"
                  >
                    회원가입
                  </Link>
                </>
              ) : (
                //로그인된 경우
                <>
                  <Link
                    href="/about"
                    className="text-blue-300 hover:text-white mr-4"
                  >
                    About
                  </Link>
                  <Link
                    href="/repos"
                    className="text-blue-300 hover:text-white mr-4"
                  >
                    Repository
                  </Link>
                  <Link
                    href="/teamproject"
                    className="text-blue-300 hover:text-white mr-4"
                  >
                    Team Project
                  </Link>

                  <Link
                    href="/profile"
                    className="text-blue-300 hover:text-white mr-4"
                  >
                    Profile
                  </Link>
                  <div className="ml-auto">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
