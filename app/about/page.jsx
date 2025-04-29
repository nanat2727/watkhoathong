// 📁 src/app/about/page.jsx
'use client';

import Image from 'next/image';
import { db } from '@/lib/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';

export default function AboutPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setSuccess('✅ ส่งข้อความสำเร็จแล้ว ขอบคุณค่ะ');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('เกิดข้อผิดพลาด: ' + err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/school-bg.png')" }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-3xl w-full text-center">
        <div className="mb-6">
          <Image src="/school-logo.png" alt="โรงเรียนวัดเขาทอง" width={100} height={100} className="mx-auto mb-2" />
          <h1 className="text-3xl font-bold text-blue-800">เกี่ยวกับระบบ</h1>
        </div>

        <p className="text-gray-800 leading-relaxed text-lg">
          ระบบบริหารงานวิชาการโรงเรียน เป็นระบบที่ออกแบบมาเพื่อช่วยให้โรงเรียนสามารถจัดการข้อมูลนักเรียน
          ครู ผู้ดูแลระบบ และเอกสารต่าง ๆ ได้อย่างสะดวกและมีประสิทธิภาพ รองรับการสมัครเรียนออนไลน์ การนำเข้าข้อมูลจาก Excel
          การกำหนดสิทธิ์ผู้ใช้งาน และสามารถเชื่อมต่อกับ Firebase เพื่อความปลอดภัยและความยืดหยุ่นในการจัดเก็บข้อมูล
        </p>

        <div className="mt-6 text-left">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">👨‍💻 ทีมพัฒนา:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>นายณัฏฐ์ นนทะเสน | ผู้อำนวยการโรงเรียนวัดเขาทอง(ชนปากคลอง)</li>
            <li>นางพรทิพย์ หลีวิจิตร | หัวหน้ากลุ่มงานวิชาการ</li>
            <li>น.ส.กัญญาภัทร รฐาสุวรรณ | ครูโรงเรียนวัดเขาทอง(ชนปากคลอง)</li>
          </ul>
        </div>

        <div className="mt-6 text-left">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">📞 ติดต่อเรา:</h2>
          <p className="text-gray-700">
            โรงเรียนวัดเขาทอง (ชนปากคลอง)<br />
            <a href="tel:0626155562" className="text-blue-700 underline">โทร. 062-615-5562</a><br />
            <a href="mailto:nanat2727@hotmail.com" className="text-blue-700 underline">อีเมล: nanat2727@hotmail.com</a>
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://facebook.com/watkhaothong" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Facebook</a>
            <a href="https://line.me/R/ti/p/@watkhaothong" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">LINE</a>
          </div>
        </div>

        <div className="mt-6 text-left">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">🎥 เพลงมาร์ชโรงเรียนวัดเขาทอง</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/CMu97e4ZKKc"
              title="เพลงมาร์ชโรงเรียนวัดเขาทอง"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 rounded-md shadow-md"
            ></iframe>
          </div>
        </div>

        <div className="mt-6 text-left">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">📍 แผนที่โรงเรียน:</h2>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps?q=7.737646561915828,100.06768309591706&hl=th&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="โรงเรียนวัดเขาทอง"
            ></iframe>
          </div>
        </div>

        <p className="mt-8 text-gray-600 text-sm">© 2568 โรงเรียนวัดเขาทอง (ชนปากคลอง)</p>
      </div>
    </div>
  );
}
