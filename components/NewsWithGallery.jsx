// components/NewsWithGallery.jsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function NewsWithGallery({ news }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="space-y-8">
      {news.map((item) => (
        <div key={item.id} className="bg-white rounded-xl shadow p-4">
          <h3 className="text-lg font-semibold text-blue-800">{item.title}</h3>
          <p className="text-sm text-gray-700 mb-3">{item.content}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {item.images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`ภาพข่าว ${item.title}`}
                width={300}
                height={200}
                className="rounded cursor-pointer hover:opacity-80 transition"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        {selectedImage && (
          <Image src={selectedImage} alt="popup" width={900} height={600} className="rounded-lg shadow-xl" />
        )}
      </Dialog>
    </div>
  );
}
