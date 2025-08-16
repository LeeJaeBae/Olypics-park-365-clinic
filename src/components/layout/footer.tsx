import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-primary container mx-auto px-6 py-16 flex  items-center justify-between">
      <p>
        {/* copyright */}
        <span className="text-sm">© Olypics park 365 clinic</span>
      </p>
      {/* 로고 */}
      <Image src="/4x/logo@4x.png" alt="logo" width={100} height={100} />

      {/* SNS 버튼 */}
      <div className="flex gap-4">
        {/* kakao */}
        <button className="w-10 h-10 bg-primary rounded-full">
          <Image src="/kakao.png" alt="kakao" width={20} height={20} />
        </button>
        {/* thread */}
        <button className="w-10 h-10 bg-primary rounded-full">
          <Image src="/instagram.png" alt="instagram" width={20} height={20} />
        </button>
        {/* blog */}
        <button className="w-10 h-10 bg-primary rounded-full">
          <Image src="/blog.png" alt="blog" width={20} height={20} />
        </button>
      </div>
    </footer>
  );
}
