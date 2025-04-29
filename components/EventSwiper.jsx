import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function EventSwiper({ images }) {
  return (
    <div className="bg-white bg-yellow-50 p-1 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">🎉 กิจกรรมเด่น</h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-48 relative rounded-md overflow-hidden shadow">
              <Image src={src} alt={`กิจกรรม ${index + 1}`} fill className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
