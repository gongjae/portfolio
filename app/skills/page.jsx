import Image from 'next/image'
import React from 'react'

const SkillPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Skills</h1>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <div className="flex mb-5">
          <Image src="/css3.jpg" width={130} height={100} alt="CSS" />
          <Image src="/html5.jpg" width={200} height={100} alt="HTML" />
          <Image src="/jscript.jpg" width={200} height={100} alt="Jscript" />
          <Image src="/react.jpg" width={300} height={100} alt="React" />
        </div>
        <div className="flex mb-5">
          <Image src="/next.jpg" width={300} height={100} alt="next" />
          <Image src="/python.jpg" width={300} height={100} alt="python" />
        </div>
      </div>
    </div>
  )
}

export default SkillPage
