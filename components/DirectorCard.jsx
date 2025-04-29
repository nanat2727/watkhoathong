import Image from 'next/image';
import Link from 'next/link';

export default function DirectorCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 border border-yellow-400">
      <Link href="/director">
        <div className="overflow-hidden rounded-lg hover:shadow-lg transition">
          <Image
            src="/director.jpg"
            alt="ผู้อำนวยการ"
            width={200}
            height={200}
            className="mx-auto rounded-lg"
          />
          <div className="text-lg font-bold text-blue-700 text-center">
            <p>นายณัฏฐ์ นนทะเสน</p>
            <p>ผู้อำนวยการสถานศึกษา</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
