import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gongjaes Home</h1>
      <div className="flex items-center justify-between container">
        <Image src="/cat.jpg" width={300} height={200} alt="Cat" />
        <div className=" items-center justify-between container">
          <div className="mb-4 bg-black p-4 m-4 rounded-lg">
            <Link
              href="https://github.com/gongjae/"
              className="text-xl text-white font-bold"
            >
              1.Github.com
            </Link>
          </div>
          <div className="mb-4 bg-black p-4 m-4 rounded-lg">
            <Link
              href="https://clerk2-kohl.vercel.app/"
              className="text-xl text-white font-bold"
            >
              2.Web service at vercel.com
            </Link>
            <p className="mb-2"></p>
          </div>
          <div className="mb-4 bg-black p-4 m-4 rounded-lg">
            <Link
              href="https://ddongfary.tistory.com/"
              className="text-xl text-white font-bold"
            >
              3.My Blog
            </Link>
            <p className="mb-2"></p>
          </div>
        </div>
      </div>
      <p className="font-bold mb-2">
        안녕하세요, 저는 중부대학교 정보보호학과 2학년 이경재라고 합니다.
      </p>
    </div>
  )
}
