'use client';

import { useState } from "react";
import Link from "next/link";
import { Home, Info, Users, User, BookOpen, Briefcase, DollarSign, UserCheck, BookCopy, ChevronDown, ChevronUp } from "lucide-react"; 

const internalLinks = [
  { href: "/teachers", icon: Users, label: "ข้อมูลครูและบุคลากร" },
  { href: "/academic", icon: BookOpen, label: "ระบบงานวิชาการ" },
  { href: "/general", icon: Briefcase, label: "ระบบงานบริหารทั่วไป" },
  { href: "/budget", icon: DollarSign, label: "ระบบงานงบประมาณ" },
  { href: "/personnel", icon: UserCheck, label: "ระบบงานบุคลากร" },
  {
    label: "ข้อมูลนักเรียน",
    icon: User,
    subItems: [
      { href: "https://link.to/kindergarten2", label: "ชั้นอนุบาล 2" },
      { href: "https://link.to/kindergarten3", label: "ชั้นอนุบาล 3" },
      { href: "https://link.to/primary1", label: "ชั้นประถมศึกษาปีที่ 1" },
      { href: "https://link.to/primary2", label: "ชั้นประถมศึกษาปีที่ 2" },
      { href: "https://link.to/primary3", label: "ชั้นประถมศึกษาปีที่ 3" },
      { href: "https://link.to/primary4", label: "ชั้นประถมศึกษาปีที่ 4" },
      { href: "https://link.to/primary5", label: "ชั้นประถมศึกษาปีที่ 5" },
      { href: "https://link.to/primary6", label: "ชั้นประถมศึกษาปีที่ 6" },
      { href: "https://link.to/secondary1", label: "ชั้นมัธยมศึกษาปีที่ 1" },
      { href: "https://link.to/secondary2", label: "ชั้นมัธยมศึกษาปีที่ 2" },
      { href: "https://link.to/secondary3", label: "ชั้นมัธยมศึกษาปีที่ 3" },
    ],
  },
];

const externalLinks = [
  { href: "http://209.15.97.131/myoffice2568/index.php", icon: BookCopy, label: "ระบบรับ-ส่งหนังสือ" },
  { href: "https://portal.bopp-obec.info/obec67/", icon: BookCopy, label: "ระบบจัดเก็บข้อมูลนักเรียน" },
];

export default function SideMenu() {
  const [openStudentMenu, setOpenStudentMenu] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-yellow-200 to-blue-500 text-white rounded-xl shadow-lg p-4 space-y-6 border border-yellow-500">
      <div className="bg-blue-800 text-white font-bold text-center px-4 py-2 rounded-xl shadow-md border border-yellow-500 mb-6">
        เมนูหลัก
      </div>


      <ul className="space-y-2">
        {internalLinks.map(({ href, icon: Icon, label, subItems }) => (
          <li key={href || label}>
            {subItems ? (
              <>
                <button
                  onClick={() => setOpenStudentMenu(!openStudentMenu)}
                  className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-blue-900 transition duration-200 text-white drop-shadow"
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-5 h-5 text-white" />
                    <span className="font-semibold">{label}</span>
                  </div>
                  {openStudentMenu ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openStudentMenu && (
                  <ul className="ml-8 mt-2 space-y-1">
                    {subItems.map((sub) => (
                      <li key={sub.href}>
                        <a
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-2 py-1 rounded hover:bg-blue-900 text-green-200 text-sm transition"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                href={href}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-900 transition duration-200 text-white drop-shadow"
              >
                <Icon className="w-5 h-5 text-white" />
                <span className="font-semibold">{label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>

      <hr className="border-white opacity-50 my-4" />
      <div className="bg-blue-800 text-white font-bold text-center px-4 py-2 rounded-xl shadow-md border border-yellow-500 mb-6">
        ระบบภายนอก
      </div>
      
      <ul className="space-y-2">
        {externalLinks.map(({ href, icon: Icon, label }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-900 transition duration-200 text-white drop-shadow"
            >
              <Icon className="w-5 h-5 text-green-300" />
              <span className="font-semibold">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
