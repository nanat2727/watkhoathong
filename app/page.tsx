'use client';

import { useEffect, useState } from "react";
import SideMenu from "@/components/SideMenu";
import NewsCarousel from "@/components/NewsCarousel";
import YoutubeGallery from "@/components/YoutubeGallery";
import Link from "next/link";

export default function Home() {
  const teacherImages = [
    "/images/teachers/teacher1.jpg",
    "/images/teachers/teacher2.jpg",
    "/images/teachers/teacher3.jpg",
    "/images/teachers/teacher4.jpg",
    "/images/teachers/teacher5.jpg",
    "/images/teachers/teacher6.jpg",
    "/images/teachers/teacher7.jpg",
    "/images/teachers/teacher8.jpg",
    "/images/teachers/teacher9.jpg",
    "/images/teachers/teacher10.jpg",
    "/images/teachers/teacher11.jpg",
    "/images/teachers/teacher12.jpg",
    "/images/teachers/teacher13.jpg",
    "/images/teachers/teacher14.jpg",
    "/images/teachers/teacher15.jpg",
  ];

  const [currentImage, setCurrentImage] = useState<string>(teacherImages[0]);
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        let newImage;
        do {
          newImage = teacherImages[Math.floor(Math.random() * teacherImages.length)];
        } while (newImage === currentImage);

        setCurrentImage(newImage);
        setFade(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="flex flex-wrap bg-[url('/school-bg.png')] bg-cover min-h-screen p-4 text-gray-800 leading-tight">
      {/* ซ้าย */}
      <aside className="w-full sm:w-1/5 p-4">
        <SideMenu />
      </aside>

      {/* กลาง */}
      <main className="w-full sm:w-3/5 p-2 space-y-6">
        <NewsCarousel />

        {/* ข่าวประชาสัมพันธ์ */}
        <div className="bg-white text-white font-bold text-center px-2 py-2 rounded-xl shadow-md border border-blue-800 mb-6 leading-tight">
          <h3 className="text-xl font-bold mb-6 text-center text-blue-700">ข่าวประชาสัมพันธ์</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {["pr1.jpg", "pr2.jpg", "pr3.jpg", "pr4.jpg", "pr5.jpg", "pr6.jpg", "pr7.jpg", "pr8.jpg", "pr9.jpg", "pr10.jpg"].map((img, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 leading-tight">
                <Link href={`/announcement-${index + 1}`}>
                  <img
                    src={`/images/pressrelease/${img}`}
                    alt={`ข่าวประชาสัมพันธ์ ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-2 text-center font-semibold text-gray-700 leading-tight">หัวข้อข่าว {index + 1}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ข่าวทั่วไป */}
        <div className="bg-white text-white font-bold px-2 py-2 rounded-xl shadow-md border border-blue-800 mb-6 leading-tight">
          <h3 className="text-lg text-blue-700 font-semibold mb-4 text-center leading-tight">ข่าวทั่วไป</h3>
          <ul className="space-y-4 leading-tight">
            <li>
              <a href="https://www.example.com/news1" className="text-blue-600 hover:underline leading-tight">
                กิจกรรมต่าง ๆ ในโรงเรียน
              </a>
            </li>
            <li>
              <a href="https://www.example.com/news2" className="text-blue-600 hover:underline leading-tight">
                โครงการการเรียนการสอนออนไลน์
              </a>
            </li>
            <li>
              <a href="https://www.example.com/news3" className="text-blue-600 hover:underline leading-tight">
                โครงการอาสาสมัครช่วยสังคม
              </a>
            </li>
          </ul>
        </div>

        {/* ผลงานครู */}
        <div className="bg-white text-white font-bold text-center px-2 py-2 rounded-xl shadow-md border border-blue-800 mb-6 leading-tight">
          <h3 className="text-xl font-bold mb-6 text-center text-blue-700">ผลงานครู</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {["teacher1.jpg", "teacher2.jpg", "teacher3.jpg", "teacher4.jpg", "teacher5.jpg"].map((img, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 leading-tight">
                <Link href={`/teacher-works/teacher${index + 1}`}>
                  <img
                    src={`/images/teachers/${img}`}
                    alt={`ผลงานครู ${index + 1}`}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-2 text-center font-semibold text-gray-700 leading-tight">ครูคนที่ {index + 1}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ขวา */}
      <aside className="w-full sm:w-1/5 p-2">
        <div className="bg-white text-white font-bold text-center px-2 py-2 rounded-xl shadow-md border border-blue-800 mb-6 leading-tight">
          {/* ผู้บริหาร */}
          <div className="text-center mb-4 leading-tight">
            <a href="/administrator-profile">
              <img
                src="/images/administrator.jpg"
                alt="ผู้บริหาร"
                className="w-full h-auto rounded-lg hover:opacity-90 transition"
              />
            </a>
            <h3 className="text-lg font-semibold leading-tight">นายณัฏฐ์ นนทะเสน</h3>
            <p className="text-gray-600 leading-tight">ผู้อำนวยการ</p>
            <p className="text-gray-600 leading-tight">โรงเรียนวัดเขาทอง(ชนปากคลอง)</p>
            <p className="text-blue-700 italic mt-1 leading-tight">"มุ่งพัฒนาเพื่ออนาคตของลูกหลาน"</p>
          </div>

          {/* ครูและบุคลากร */}
          <div className="mb-6 text-center leading-tight">
            {currentImage && (
              <img
                src={currentImage}
                alt="ครู"
                className={`w-full h-80 object-cover rounded-lg shadow-md transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
              />
            )}
            <p className="mt-2 text-xlg text-gray-700 font-medium leading-tight">คณะครูและบุคลากร</p>
          </div>

          {/* วิดีโอยูทูป */}
          <YoutubeGallery />
        </div>
      </aside>
    </div>
  );
}
