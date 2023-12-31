import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Information about me</h1>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-5">
          이름
          <div className="w-[10%] my-[1%] border-[2px] border-black/30"></div>
        </h2>
        <li className="font-bold mb-5">이경재</li>
        <h2 className="text-2xl font-bold mb-5">
          나이/생년월일
          <div className="w-[27%] my-[1%] border-[2px] border-black/30"></div>
        </h2>
        <li className="font-bold mb-5">23/2001.12.19</li>
        <h2 className="text-2xl font-bold mb-5">
          관심 분야
          <div className="w-[20%] my-[1%] border-[2px] border-black/30"></div>
        </h2>
        <li className="font-bold mb-5"> 보안 - 취약점 분석</li>
        <p className="mb-5">
          - 저는 보안관련해 관심이 많고, 특히 시스템 해킹(포너블)을 주로
          공부하고 있습니다.
        </p>
        <h2 className="text-2xl font-bold mb-5">
          활동 이력
          <div className="w-[20%] my-[1%] border-[2px] border-black/30"></div>
        </h2>
        <li className="font-bold mb-5"> SCP 동아리 부원 활동 중</li>
        <li className="font-bold mb-5"> python-study(웹크롤러 제작)</li>
        <h2 className="text-2xl font-bold mb-5">
          university
          <div className="w-[20%] my-[1%] border-[2px] border-black/30"></div>
        </h2>
        <li className="font-bold mb-5">
          {' '}
          중부대학교 정보보호학과 2학년 2학기 재학중
        </li>
        <p className="mb-5">- 2020.03 ~ now</p>
      </div>
    </div>
  )
}

export default AboutPage
