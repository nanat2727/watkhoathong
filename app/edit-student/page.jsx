// src/app/edit-student/[id]/page.jsx
"use client";

import { useParams } from "next/navigation";

export default function EditStudentPage() {
  const { id } = useParams();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/school-bg.npg')" }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg max-w-xl w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">แก้ไขข้อมูลนักเรียน</h1>
        <p className="text-sm text-gray-500 mb-4 text-center">รหัสนักเรียน: {id}</p>

        <form className="space-y-4">
          <input type="text" placeholder="ชื่อใหม่" className="input" />
          <input type="text" placeholder="ชั้นเรียนใหม่" className="input" />
          <input type="email" placeholder="อีเมลใหม่" className="input" />
          
          <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 rounded-md">
            บันทึกการเปลี่ยนแปลง
          </button>
        </form>
      </div>
    </div>
  );
}
