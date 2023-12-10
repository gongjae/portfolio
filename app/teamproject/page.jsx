import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Teamprojectpage = () => {
  return (
    <div>
      <Link
        href="https://myth-gongjae.vercel.app/"
        className=" text-4xl font-bold mb-5"
      >
        Teamproject(팀프로젝트)
      </Link>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-5">Team 신화창조</h2>
        <li className="mb-5"> 강민혁 - 후기 페이지 작성 및 ppt 작성</li>
        <li className="mb-5"> 김근수 - 장바구니 페이지 구성 및 발표</li>
        <li className="mb-5"> 이경재 - 로그인 페이지 구성 및 ppt 구성</li>
        <li className="mb-5">
          이동하 - 쇼핑몰 페이지 구성 및 프로젝트 주제 선정
        </li>
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
        <div className="flex mb-5">
          <Image src="/css3.jpg" width={130} height={100} alt="CSS" />
          <Image src="/html5.jpg" width={200} height={100} alt="HTML" />
          <Image src="/jscript.jpg" width={200} height={100} alt="Jscript" />
          <Image src="/react.jpg" width={300} height={100} alt="React" />
        </div>
        <h2 className="text-2xl font-bold mb-3">프로젝트 목표</h2>
        <p className="mb-5">
          1. 쇼핑몰 웹사이트를 구성하여 인터넷을 통해 옷을 쉽게 구매할 수 있는
          쇼핑몰 웹 사이트를 구성한다.
        </p>
        <p className="mb-5">
          2. 장바구니 기능을 통해 저장하였던 상품들을 따로 확인할 수 있는 기능을
          추가하여 사이트를 구성한다.
        </p>
        <p className="mb-5">
          3. 로그인을 통해 개인 사용자들이 쇼핑몰 사이트를 이용할 수 있게끔
          한다.
        </p>
        <p className="mb-5">
          4. 후기 작성 기능을 만들어 옷들의 평점을 확인할 수 있게끔 사이트를
          구성한다
        </p>
        <h2 className="text-2xl font-bold mb-3">WBS</h2>
        <Image src="/WBS.jpg" width={700} height={100} alt="WBS" />
      </div>
    </div>
  )
}

export default Teamprojectpage
