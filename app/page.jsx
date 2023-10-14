import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gongjaes Home</h1>
      <div className="flex items-center justify-between container">
        <Image src="/cat.jpg" width={300} height={200} alt="Cat" />
        <div className="bg-gray-300 py-10 px-30 rounded-lg items-center justify-between container">
          <h1 className="text-2xl  font-bold mb-4 ">자기소개</h1>
          <p className="font-bold mb-2">
            안녕하세요, 저는 중부대학교 정보보호학과 2학년 이경재라고 합니다.
          </p>
          <p className="font-bold mb-2">
            현재 저는 보안 쪽 공부를 하고 있고, 그 중에서 시스템 해킹(Pwnable)
            분야에 관심이 있습니다.
          </p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-5">Information about me</h1>
      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-5">이름</h2>
        <li className="font-bold mb-5">이경재</li>
        <h2 className="text-2xl font-bold mb-5">나이/생년월일</h2>
        <li className="font-bold mb-5">23/2001.12.19</li>
        <h2 className="text-2xl font-bold mb-5">관심 분야</h2>
        <li className="font-bold mb-5"> 보안 - 취약점 분석</li>
        <p className="mb-5">
          - 저는 보안관련해 관심이 많고, 특히 시스템 해킹(포너블)을 주로
          공부하고 있습니다.
        </p>
        <h2 className="text-2xl font-bold mb-5">활동 이력</h2>
        <li className="font-bold mb-5"> SCP 동아리 부원 활동 중</li>

        <h2 className="text-2xl font-bold mb-5">university</h2>
        <li className="font-bold mb-5">
          {' '}
          중부대학교 정보보호학과 2학년 2학기 재학중
        </li>
        <p className="mb-5">- 2020.03 ~ now</p>
      </div>

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
    </div>
  )
}
