'use client';

import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function NewsCarousel() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // จำลองข้อมูลข่าวเด่น
    setNews([
      { id: 1, title: "ประกาศรับสมัครนักเรียน", image: "/images/news/news1.jpg" },
      { id: 2, title: "จดหมายข่าว", image: "/images/newsletter/newsletter1.jpg" },
      { id: 3, title: "กิจกรรมเด่น", image: "/images/images/images1.jpg" },
    ]);
  }, []);

  return (
    <div className="bg-white text-white font-bold text-center px-2 py-2 rounded-xl shadow-md border border-blue-800 mb-6 leading-tight">
      <h2 className="text-xl font-bold mb-4 text-center">ข่าวเด่น</h2>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {news.map((item) => (
          <div key={item.id} className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <p className="legend">{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
