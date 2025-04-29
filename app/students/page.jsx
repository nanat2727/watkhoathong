"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "students"));
      setStudents(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/school-bg.png')" }}>
      <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-xl max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">รายชื่อนักเรียน</h1>
        <table className="w-full text-left border border-gray-300 bg-white rounded-md overflow-hidden">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="p-2">ชื่อ</th>
              <th className="p-2">รหัส</th>
              <th className="p-2">ชั้น</th>
              <th className="p-2">อีเมล</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="p-2">{s.name}</td>
                <td className="p-2">{s.studentId}</td>
                <td className="p-2">{s.class}</td>
                <td className="p-2">{s.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
