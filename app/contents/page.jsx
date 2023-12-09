import Link from 'next/link'
import React from 'react'
const ContactPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Contents</h1>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-5">
          crud(몽고디비 활용)
          <div className="w-[60%] my-[1%] border-[2px] border-black/30"></div>
        </h2>
        <li className="mb-4 text-black rounded-lg hover:text-white mr-4">
          <Link
            href="https://crud-gongjae.vercel.app/"
            className=" font-bold mb-5"
          >
            https://crud-omega-gules.vercel.app/
          </Link>
        </li>{' '}
      </div>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-5">
          dapara-shopping(쇼핑몰 사이트)
          <div className="w-[96%] my-[1%] border-[2px] border-black/30"></div>
        </h2>
        <li className="mb-4 text-black rounded-lg hover:text-white mr-4">
          <Link
            href="https://dapara-henna.vercel.app/"
            className=" font-bold mb-5"
          >
            https://dapara-henna.vercel.app/
          </Link>
        </li>
      </div>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-5">
          portfolio(개인 포트폴리오)
          <div className="w-[75%] my-[1%] border-[2px] border-black/30"></div>
        </h2>
        <li className="mb-4 text-black rounded-lg hover:text-white mr-4">
          <Link
            href="https://portfolio-gongjae.vercel.app/"
            className=" font-bold mb-5"
          >
            https://portfolio-gongjae.vercel.app/
          </Link>
        </li>
      </div>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-5">
          clerk2(clerk 활용)
          <div className="w-[55%] my-[1%] border-[2px] border-black/30"></div>
        </h2>
        <li className="mb-4 text-black rounded-lg hover:text-white mr-4">
          <Link
            href="https://clerk2-kohl.vercel.app/"
            className=" font-bold mb-5"
          >
            https://clerk2-kohl.vercel.app/
          </Link>
        </li>
      </div>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-5">
          web-programing(첫 번째 웹사이트)
          <div className="w-[100%] my-[1%] border-[2px] border-black/30"></div>
        </h2>
        <li className="mb-4 text-black rounded-lg hover:text-white mr-4">
          <Link
            href="https://web-programing-gamma.vercel.app/"
            className=" font-bold mb-5"
          >
            https://web-programing-gamma.vercel.app/
          </Link>
        </li>
      </div>
    </div>
  )
}
export default ContactPage
