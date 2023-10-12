import React from 'react'

const AboutPage = () => {
  return (
    <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
      <h1 className="text-4xl font-bold mb-5">Information about me</h1>
      <h2 className="text-2xl font-bold mb-5">이름</h2>
      <li className="font-bold mb-5">이경재</li>
      <h2 className="text-2xl font-bold mb-5">나이/생년월일</h2>
      <li className="font-bold mb-5">23/2001.12.19</li>
      <h2 className="text-2xl font-bold mb-5">관심 분야</h2>
      <li className="font-bold mb-5"> 보안 - 취약점 분석</li>
      <p className="mb-5">
        - 저는 보안관련해 관심이 많고, 특히 시스템 해킹(포너블)을 주로 공부하고
        있습니다.
      </p>
      <h2 className="text-2xl font-bold mb-5"> 전화번호</h2>
      <li className="font-bold mb-5"> 010-2037-0937</li>

      <h2 className="text-2xl font-bold mb-5"> e-mail</h2>
      <li className="font-bold mb-5"> rudddong@gmail.com</li>

      <h2 className="text-2xl font-bold mb-5">university</h2>
      <li className="font-bold mb-5">
        {' '}
        중부대학교 정보보호학과 2학년 2학기 재학중
      </li>
      <p className="mb-5">- 2020.03 ~ now</p>
    </div>
  )
}

export default AboutPage
