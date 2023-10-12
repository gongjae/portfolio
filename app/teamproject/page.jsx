import Image from 'next/image'
import React from 'react'

const Teamprojectpage = () => {
  return (
    <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
      <h1 className="text-4xl font-bold mb-5">Teamproject(팀프로젝트)</h1>
      <h2 className="text-2xl font-bold mb-5">Team 신화창조</h2>
      <p className="mb-5"> 강민혁 - 후기 페이지 작성 및 ppt 작성</p>
      <p className="mb-5"> 김근수 - 장바구니 페이지 구성 및 발표</p>
      <p className="mb-5"> 이경재 - 로그인 페이지 구성 및 ppt 구성</p>
      <p className="mb-5"> 이동하 - 쇼핑몰 페이지 구성 및 프로젝트 주제 선정</p>
      <h2 className="text-2xl font-bold mb-5">프로젝트 소개</h2>
      <p className="mb-5">
        장바구니 기능과 로그인 기능이 있는 쇼핑몰 웹사이트를 구성한다.
      </p>
      <h2 className="text-2xl font-bold mb-3">프로젝트 선정 이유</h2>
      <p className="mb-3">
        1. 최근 옷 쇼핑몰들이 늘어나는 추세이며 쉽게 접할 수 있는 주제라
        생각되어 선별하게 되었다.
      </p>
      <p className="mb-5">
        2. 백엔드 기능을 자연스럽게 사용할 수 있는 주제라 생각되어 선별하게
        되었다.
      </p>
      <h2 className="text-2xl font-bold mb-5">개발 환경</h2>
      <div className="flex">
        <Image src="/css3.jpg" width={130} height={100} alt="CSS" />
        <Image src="/html5.jpg" width={200} height={100} alt="HTML" />
        <Image src="/jscript.jpg" width={200} height={100} alt="Jscript" />
        <Image src="/react.jpg" width={300} height={100} alt="React" />
      </div>
    </div>
  )
}

export default Teamprojectpage
