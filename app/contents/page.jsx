import Link from 'next/link'
import React from 'react'
const ContactPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Contents</h1>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-5">Portfolio</h2>
        <li className="mb-4 text-black rounded-lg hover:text-white mr-4">
          <Link
            href="https://portfolio-gongjae.vercel.app/"
            className=" font-bold mb-5"
          >
            https://portfolio-gongjae.vercel.app/
          </Link>
        </li>
        <h2 className="text-2xl font-bold mb-5">Clerk2</h2>
        <li className="mb-4 text-black rounded-lg hover:text-white mr-4">
          <Link
            href="https://clerk2-kohl.vercel.app/"
            className=" font-bold mb-5"
          >
            https://clerk2-kohl.vercel.app/
          </Link>
        </li>
        <h2 className="text-2xl font-bold mb-5">web-programing</h2>
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
