import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const ContactPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Contacts</h1>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-5">
          Github address
          <div className="w-[95%] my-[1%] border-[2px] border-black/30"></div>
        </h2>
        <div className="mb-4 text-black rounded-lg hover:text-white mr-4">
          <Link href="https://github.com/gongjae" className=" font-bold mb-5">
            <Image
              src="/github-logo.png"
              width={30}
              height={30}
              alt="github"
              className="flex items- justify-center"
            />
          </Link>
        </div>
        <h2 className="text-2xl font-bold mb-5">
          My blog
          <div className="w-[50%] my-[1%] border-[2px] border-black/30"></div>
        </h2>
        <div className="mb-4 text-black rounded-lg hover:text-white mr-4">
          <Link
            href="https://ddongfary.tistory.com/"
            className=" font-bold mb-5"
          >
            <Image
              src="/tistory-logo.png"
              width={40}
              height={40}
              alt="tistory"
              className="flex items- justify-center"
            />
          </Link>
        </div>
        <h2 className="text-2xl font-bold mb-5">
          My e-mail
          <div className="w-[60%] my-[1%] border-[2px] border-black/30"></div>
        </h2>
        <li className="font-bold">rudddong@gmail.com</li>
      </div>
    </div>
  )
}
export default ContactPage
