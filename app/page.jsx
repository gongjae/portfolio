import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-300 rounded-xl TextBox">
      <h1 className="text-2xl font-bold  mb-4">Gongjaes Home</h1>
      <div className="flex items-center">
        <div className="box">
          <Image
            src="/cat.jpg"
            width={300}
            height={200}
            alt="Cat"
            className="profile px-30 "
          />
        </div>
        <div>
          <p className="font-bold mb-2">
            안녕하세요, 저는 중부대학교 정보보호학과 2학년 이경재라고 합니다.
          </p>
          <p className="font-bold mb-2">
            현재 저는 보안 쪽 공부를 하고 있고, 그 중에서 시스템 해킹(Pwnable)
            분야에 관심이 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}
