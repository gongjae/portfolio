import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SkillPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Skills</h1>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <div className="text-3xl font-bold mb-5">
          Web 개발
          <div className="w-[100%] my-[1%] border-[3px] border-black/30"></div>
        </div>
        <div className="flex mb-5">
          <Image src="/css3.jpg" width={130} height={100} alt="CSS" />
          <Image src="/html5.jpg" width={200} height={100} alt="HTML" />
          <Image src="/jscript.jpg" width={200} height={100} alt="Jscript" />
          <Image src="/react.jpg" width={300} height={100} alt="React" />
        </div>
        <div className="flex mb-5">
          <Image src="/next.jpg" width={300} height={500} alt="next" />
          <Image src="/python.jpg" width={300} height={100} alt="python" />
        </div>
      </div>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <div className="text-3xl font-bold mb-5">
          Pwnable 시스템 해킹
          <div className="w-[100%] my-[1%] border-[3px] border-black/30"></div>{' '}
        </div>

        <h2 className="text-2xl font-bold mb-5">포너블</h2>
        <li className="mb-4 text-black rounded-lg hover:text-white mr-4">
          <Link
            href="https://cuboid-bronze-2ae.notion.site/Pwnable-acd1e2636e8e41fc85edb65126b5a9c2"
            className=" font-bold mb-5"
          >
            노션 개인 공부
          </Link>
        </li>
        <h2 className="text-2xl font-bold mb-5">SCP CTF</h2>
        <li className="mb-4 text-black rounded-lg hover:text-white mr-4">
          <Link
            href="https://cuboid-bronze-2ae.notion.site/SCP-CTF-Write-Up-4c839e5a773941d29a9d109832b8d46a"
            className=" font-bold mb-5"
          >
            write-up
          </Link>
        </li>
      </div>
    </div>
  )
}

export default SkillPage
