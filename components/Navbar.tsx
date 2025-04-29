'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Niramit } from 'next/font/google';
import { FaFacebookSquare, FaLine } from "react-icons/fa";

const niramit = Niramit({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '700'],
  variable: '--font-niramit',
});

const navItems = [
  { label: 'หน้าแรก', href: '/' },
  { label: 'บุคลากร', href: '/personnel' },
  { label: 'สมัครสมาชิก', href: '/register' },
  { label: 'แดชบอร์ด', href: '/dashboard' },
  { label: 'เกี่ยวกับเรา', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={`${niramit.variable} font-[var(--font-niramit)] bg-blue-800 backdrop-blur-md text-white shadow-md px-6 py-3`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* โลโก้ */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="โลโก้โรงเรียน" width={40} height={40} />
          <span className="text-xl font-bold text-yellow-300">MIS | โรงเรียนวัดเขาทอง(ชนปากคลอง)</span>
        </Link>

        {/* เมนู และไอคอน */}
        <div className="flex items-center space-x-4">
          {/* เมนูหลัก */}
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-md transition-all font-medium ${
                  isActive
                    ? 'bg-yellow-400 text-blue-900 shadow-inner'
                    : 'hover:bg-blue-600'
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* เมนู Dropdown Hover */}
          <div className="relative group">
            <button
              className="px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-600"
            >
              ดาวน์โหลดเอกสาร
            </button>
            {/* กล่อง dropdown จะโชว์เมื่อ hover ที่ .group */}
            <div className="absolute right-0 mt-2 w-48 bg-blue-800 text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
              <Link
                href="/document/academic"
                className="block px-4 py-2 hover:bg-blue-600"
              >
                งานวิชาการ
              </Link>
              <Link
                href="/document/general"
                className="block px-4 py-2 hover:bg-blue-600"
              >
                งานบริหารทั่วไป
              </Link>
              <Link
                href="/document/budget"
                className="block px-4 py-2 hover:bg-blue-600"
              >
                งานงบประมาณ
              </Link>
              <Link
                href="/document/personnel"
                className="block px-4 py-2 hover:bg-blue-600"
              >
                งานบุคลากร
              </Link>
            </div>
          </div>

          {/* ไอคอน Social */}
          <div className="flex items-center space-x-3 ml-4">
            <a
              href="https://www.facebook.com/watkhaothong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-yellow-300 transition-transform hover:scale-110"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://line.me/ti/p/nanat2727"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-green-400 transition-transform hover:scale-110"
            >
              <FaLine />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
