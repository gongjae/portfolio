import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Gongjaes Home</h1>
      <Image src="/cat.jpg" width={300} height={200} alt="Cat" />
      <p className="mb-2"></p>
      안녕하세요, 저는 중부대학교 정보보호학과 2학년 이경재라고 합니다.
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://github.com/gongjae/"
          className="text-xl text-blue-500 font-bold"
        >
          1.Github.com
        </Link>
      </div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://clerk2-kohl.vercel.app/"
          className="text-xl text-blue-500 font-bold"
        >
          2.Web service at vercel.com
        </Link>
        <p className="mb-2"></p>
      </div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://ddongfary.tistory.com/"
          className="text-xl text-blue-500 font-bold"
        >
          3.My Blog
        </Link>
        <p className="mb-2"></p>
      </div>
    </>
  )
}
