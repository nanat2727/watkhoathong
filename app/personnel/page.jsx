import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/school-bg.png')" }}
    >
      <div
        className="p-8 rounded-xl shadow-lg text-center space-y-6"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.47)",
          WebkitBackdropFilter: "blur(10px)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 className="text-4xl font-bold text-blue-700">ระบบบริหารงานวิชาการ</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Link href="/login?role=student">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md">
              👦 นักเรียน/ผู้ปกครอง
            </button>
          </Link>
          <Link href="/login?role=teacher">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md">
              👩‍🏫 ครู
            </button>
          </Link>
          <Link href="/login?role=teacher">
            <button className="w-full bg-fuchsia-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md">
              👩‍🏫 หัวหน้ากลุ่มงานวิชาการ
            </button>
          </Link>
          <Link href="/login?role=manager">
            <button className="w-full bg-yellow-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-md">
              👨‍💼 ผู้บริหารฯ
            </button>
          </Link>
          <Link href="/login?role=admin">
            <button className="w-full bg-orange-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-md">
              🛠 ผู้ดูแลระบบ
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
