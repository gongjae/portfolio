import Link from 'next/link'
import React from 'react'
const ContactPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Contacts</h1>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-5">Github address</h2>
        <li className="mb-4 text-black rounded-lg hover:text-white mr-4">
          <Link href="https://github.com/gongjae" className=" font-bold mb-5">
            https://github.com/gongjae
          </Link>
        </li>
        <h2 className="text-2xl font-bold mb-5">My blog</h2>
        <li className="mb-4 text-black rounded-lg hover:text-white mr-4">
          <Link
            href="https://ddongfary.tistory.com/"
            className=" font-bold mb-5"
          >
            https://ddongfary.tistory.com/
          </Link>
        </li>
        <h2 className="text-2xl font-bold mb-5">My e-mail</h2>
        <li className="font-bold">rudddong@gmail.com</li>
      </div>
    </div>
  )
}
export default ContactPage
